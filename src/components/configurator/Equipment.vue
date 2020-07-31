<template>
    <div class="allEquipment container-fluid w-100 position-relative">
        <button id="button-prev" class="btn"
                @click="prevSlideEquip()"
                :disabled="xSlide?false:true"
        >
            <i class="fas fa-chevron-left"></i>
        </button>

        <div class="container carousel overflow-hidden" :style="{'color': fontColor}">

            <div class="slides_wrapper row align-items-start flex-nowrap ">
<!--            <div class="slide_wrapper">-->

                <div  class="equip col-lg-4 col-md-6 col-12 "
                      v-for="(equipment, key) in equipments"
                      :key="key"
                      @click="activated(equipment)">
<!--                    <div  class="equip d-inline-block"-->
<!--                      v-for="(equipment, key) in equipments"-->
<!--                      :key="key"-->
<!--                      @click="activated(equipment)">-->

                    <img :src="photo" :alt="equipment.mod_name">
                    <h4 :style="{'color': fontColor}">
                        <span><strong>{{model}} </strong></span>
                        <span><strong>{{equipment.mod_name}}</strong></span>
                        <span v-if="equipment.body_type"> - {{equipment.body_type}}</span>
                    </h4>
                    <h5 :style="{'color': fontColor}" class="text-left">
                        Від <strong>{{equipment.equipPrice | formattedPrice}}&#8372;</strong>
                    </h5>
                    <!--                <ul class="equip_desc">-->
                    <!--                    <li v-for="(desc, key) in descriptionList(equipment)"-->
                    <!--                        :key="key"-->
                    <!--                        :style="{'color': fontColor}"-->
                    <!--                    >{{desc}}</li>-->
                    <!--                </ul>-->
                </div>
            </div>
        </div>

        <button id="button-next" class="btn"
                @click="nextSlideEquip()"
                :disabled="xSlide == -diferent ? true : false"
        >
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</template>

<script>
    import axios from "axios";
    import formattedPrice from "../../filters/price_format";
    import {eventEmitter} from '../../main'
    import $ from "jquery";

    export default {
        name: "Equip",

        props: [
            'id'
        ],


        data() {
            return {
                // id: 0,//первоначальный вариант
                color: {},
                equipments: [],
                equipment: {},
                fontColor: "#202020",

                prices: [],

                xSlide: 0,
                slideWidth: 0,
                diferent: 0,
                wrapper: 0,
                countSlides: 3,

                mousePress: false,
                mouseX: 0,
                xNow: 0,
            }
        },

        filters: {
            formattedPrice,
        },

        created() {
            this.$store.state.model = JSON.parse( localStorage.model );
            this.color = this.$store.getters.colored;
            this.getEquipment();
            this.getFontColor();

            console.log("create");

            eventEmitter.$on('select', () => {this.activeted()})
        },

        mounted() {
            $(window).resize(this.carouselSizes);
        },

        computed: {
            model() {
                return this.$store.getters.getModel.name;
            },

            getModelId() {
                if (this.id) {return this.id}//новое
                else if (this.$store.getters.getModelId) {
                    return this.$store.getters.getModelId;
                } else if(localStorage.mod_id) {
                    return localStorage.mod_id;
                } else {
                    return this.$route.params.id;}
            },

            photo() {
                // return this.$store.getters.modelImage;
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.$store.getters.colored.preview;
            },

            computedEquipment() {
                return this.$store.getters.equip;
            },
        },

        watch: {
            color() {
                return this.color;
            },
        },

        methods: {

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.getModelId}`)
                    .then((response) => {
                        this.equipments = response.data;

                        // this.checkEquipment();
                        // console.log(this.equipments);
                        this.getPrices();
                    })
                    .then( () => { this.carouselSizes(); } )
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
            },

            getPrices() {
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/id_mod_price`,
                    {params: {id: this.getModelId}}
                )
                    .then( (response) => {
                        this.prices = response.data;
                        // console.log(this.prices);

                        this.setPrice();
                    } )
                    .catch( (error) => {
                        console.log("Ошибка загрузки цен");
                        console.log(error);
                    } )
            },

            setPrice() {
                let keysPrice = Object.keys(this.prices);
                console.log(keysPrice);

                this.equipments.forEach( (equip) => {
                    keysPrice.forEach( (pr) => {
                        if(equip.model_name_pivot.toLowerCase() === pr.toLowerCase()) {
                            this.$set(equip, "equipPrice", this.prices[pr] );
                        }
                    } );
                } );

                console.log(this.equipments);
                this.checkEquipment();

            },

            checkEquipment() {
                // if(this.$store.getters.equip.mod_id) {
                //     this.equipments.forEach( equip => {
                //        if ( equip.mod_id === this.$store.getters.equip.mod_id ) {
                //            this.equipment = equip;
                //            localStorage.equipment = JSON.stringify(equip);
                //            return "";
                //        }
                //     });
                // } else
                // let equipFromJson = JSON.parse(localStorage.equipment);
                // console.log(equipFromJson);

                if (this.computedEquipment.mod_id) {
                    // if (equipFromJson.mod_id) {
                    this.equipments.forEach( equip => {
                        if ( equip.mod_id === this.computedEquipment.mod_id ) {
                            // if ( equip.mod_id === equipFromJson.mod_id ) {
                            this.equipment = equip;
                            this.$store.state.equipment = equip;
                        }
                    });
                } else {
                    this.activated(this.equipments[0]);
                }
            },

            activated(equipment) {
                console.log('catch');
                this.$store.state.equipment = equipment;
                localStorage.equipment = JSON.stringify(equipment);
                localStorage.mod_id = equipment.mod_id;
                // console.log(localStorage.equipment);
                setTimeout(() => {eventEmitter.$emit('selectedEquipment');},100);
                // eventEmitter.$emit('selectedEquipment');
            },

            getFontColor: function () {
                try{
                    switch(this.color.rgb.toLowerCase()){
                        case '#000000'.toLowerCase():
                        case '#030303'.toLowerCase():
                        case '#182B66'.toLowerCase():
                        case '#1d50aa'.toLowerCase():
                        case '#5C5653'.toLowerCase():
                        case '#60101e'.toLowerCase():
                        case '#740310'.toLowerCase():
                        case '#7a766f'.toLowerCase():
                        case '#7c7a7a'.toLowerCase():
                        case '#7d8489'.toLowerCase():
                        case '#817e6e'.toLowerCase():
                        case '#8c0414'.toLowerCase():
                        case '#97a4ac'.toLowerCase():
                        case '#aeabac'.toLowerCase():
                        case '#b4ae9c'.toLowerCase():
                        case '#ff0000'.toLowerCase():
                            return this.fontColor = '#FFFFFF';
                        case '#727270'.toLowerCase():
                        case '#d7dcd9'.toLowerCase():
                        case '#EDE7E1'.toLowerCase():
                        case '#f2f2f0'.toLowerCase():
                        case '#fafafa'.toLowerCase():
                        case '#FFFFFF'.toLowerCase():
                            return this.fontColor = '#202020';
                    }
                } catch (e) {
                    // console.log( "Error Шрифты пролетели" );
                }

            },

            descriptionList(equipment) {
                try {
                    return equipment.description.split('\n');
                }
                catch (e) {
                    console.log("descriptionList error");
                    return "";
                }

            },

            carouselSizes() {
                this.countSlides = 3;
                if ( window.innerWidth < 992 && window.innerWidth > 768 ) { this.countSlides = 2; }
                if ( window.innerWidth < 768 ) { this.countSlides = 1; }
                // else {  }

                this.slideWidth = $('.carousel.container').width() / this.countSlides;
                $(".equip").width(this.slideWidth + "px");
                console.log(this.slideWidth);
                $('.equip > img').width(this.slideWidth - 80 + "px");
                this.wrapper = this.slideWidth * this.equipments.length;
                this.diferent = this.wrapper - $(".carousel.container").width();
            },

            prevSlideEquip() {
                this.xSlide = this.xSlide + this.slideWidth;

                if (this.xSlide > 0) {
                    console.log(this.xSlide);
                    // this.xSlide = $(".equip").width() * this.equipments.length - $(".carousel").width();
                    this.xSlide = 0;
                    $("#button-prev").attr("disabled", "disabled");
                } else {
                    $("#button-prev").removeAttr("disabled");
                }
                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`)
                                    .css("transition", "all 1000ms");
                $("#button-next").removeAttr("disabled");

                            },
            //
            nextSlideEquip() {

                this.xSlide = this.xSlide - this.slideWidth;
                if ( this.xSlide <  -this.diferent ) {
                    this.xSlide = -this.diferent;
                    $("#button-next").attr("disabled", "disabled");
                } else {
                    $("#button-next").removeAttr("disabled");
                }

                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`)
                                    .css("transition", "all 1000ms");

            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .allEquipment.container-fluid {
        width: 100%;
        height: 266px;
        margin: 0;
        overflow: hidden;
        /*padding: 30px;*/
        position: relative;
        background-color: rgba(0,0,0,0.3);
        z-index: 100;

        .carousel.container {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: auto;
            .slides_wrapper.row{
            /*.slide_wrapper{*/
                width: 100%;
                height: 100%;
                margin: 0;
                justify-content: start;
                white-space: nowrap;
                .equip {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    position: relative;
                    z-index: 950;
                    cursor: pointer;
                    &.active,
                    &:hover {
                        /*overflow: hidden;*/
                        align-self: stretch;
                        background-color: rgba(0,0,0,0.25);
                        border-top: 15px solid rgba(0,0,0,0.5);
                        color: #000;
                        cursor: pointer;
                        transform-origin: center center;
                        transform: scale(1.05);
                        transition: all 700ms;
                        img, h4 {
                            transform-origin: center center;
                            transform: scale(1.05);
                            transition: all 700ms;
                        }
                    }
                    img {
                        width: 100%;
                    }
                    .equip_desc {
                        margin: 0;
                        padding: 0;
                        list-style-position: inside;
                        display: block !important;
                        li {
                            text-align: left;
                            font-size: 1.4rem;
                            line-height: 1.5;
                        }
                    }
                    h4 {
                        font-size: 18px;
                        margin-bottom: 15px;
                    }
                    h5 {
                        font-size: 1.6rem;
                        font-weight: 100;
                        strong {
                            font-weight: bold;
                        }
                    }

                }
            }
        }

        button.btn {
            position: absolute;
            top: 105px;
            z-index: 950;
            align-self: center;
            align-content: center;
            width: 48px !important;
            height: 48px;
            box-sizing: border-box;
            display: inline-block;
            border-radius: 50%;
            background-color: rgba(255,255,255, 0.7);
            font-size: 2.2rem;
            color: #7a7a7a;
            &#button-prev {
                padding: 1px 10px 1px 6px;
                left: 70px;
            }
            &#button-next {
                padding: 1px 7px 1px 9px;
                right: 70px;
            }
            &[disabled="disabled"] {
                background-color: rgba(255,255,255,0.2);
            }
        }
    }






    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .allEquipment {
            .carousel {
                width: 100%;
                padding: 5px;
                .equip {
                    padding: 10px 15px;
                    .equip_desc {
                        margin: 0;
                        padding: 0;
                        /*list-style-type: none;*/
                        list-style-position: inside;
                        display: block !important;
                        li {
                            text-align: left;
                            font-size: 1.4rem;
                            line-height: 1.5;
                        }
                    }
                    h4 {
                        font-size: 18px;
                        margin-bottom: 15px;
                    }
                    .equip_desc {
                        display: none;
                    }
                    a {
                        color: $font_color;
                        font-size: 18px;
                        span{
                            display: inline-block;
                            margin-left: 10px;
                        }
                    }

                }
            }
            /*.carousel-control-prev {*/
            /*    width: 7.5%;*/
            /*    height: 100%;*/
            /*    left: 0;*/
            /*    text-align: right;*/
            /*    justify-content: center;*/
            /*}*/
            /*.carousel-control-next {*/
            /*    width: 7.5%;*/
            /*    height: 100%;*/
            /*    right: 0;*/
            /*}*/

        }
    }

    @media (max-width: 767.9px) {
        .allEquipment.container-fluid {
            /*height: auto;*/
            overflow: hidden;
            .carousel.container {
                .slides_wrapper.row{
                    .equip {
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        /*padding: 30px;*/
                        &.active,
                        img {
                            width: 100%;
                        }
                        /*.equip_desc {*/
                        /*    margin: 0;*/
                        /*    padding: 0;*/
                        /*    list-style-position: inside;*/
                        /*    display: block !important;*/
                        /*    li {*/
                        /*        text-align: left;*/
                        /*        font-size: 1.4rem;*/
                        /*        line-height: 1.5;*/
                        /*    }*/
                        /*}*/
                        h4 {
                            font-size: 18px;
                            margin-bottom: 15px;
                        }
                        h5 {
                            font-size: 1.6rem;
                            font-weight: 100;
                        }

                    }
                }
            }

            button.btn {
                top: 105px;
                &#button-prev {
                    left: 20px;
                }
                &#button-next {
                    right: 20px;
                }
            }
        }
    }


</style>