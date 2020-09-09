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

                <div  class="equip col-lg-4 col-md-6 col-12 "
                      v-for="(equipment, key) in equipments"
                      :key="key"
                      @click="activated(equipment)">

                    <img :src="photo" :alt="equipment.mod_name">
                    <h4 :style="{'color': fontColor}">
                        <span><strong>{{model}} </strong></span>
                        <span><strong>{{equipment.mod_name}}</strong></span>
                        <span v-if="equipment.body_type"> - {{equipment.body_type}}</span>
                    </h4>
                    <h5 :style="{'color': fontColor}" class="text-left">
                        Від <strong>{{equipment.equipPrice | formattedPrice}} грн.</strong>
                    </h5>
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

    // import {eventEmitter} from './../../app'


    export default {
        name: "Equip",

        props: [
            'id'
        ],


        data() {
            return {
                color: {},
                equipments: [],
                equipment: {},
                fontColor: "#202020",
                firstOpen: null,

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
            this.firstOpen = true;
            this.getEquipment();
            this.getFontColor();
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
                        this.setPrice();
                    } )
                    .catch( (error) => {
                        console.log("Ошибка загрузки цен");
                        console.log(error);
                    } )
            },

            setPrice() {
                let keysPrice = Object.keys(this.prices);
                this.equipments.forEach( (equip) => {
                    keysPrice.forEach( (pr) => {
                        if(equip.model_name_pivot.toLowerCase() === pr.toLowerCase()) {
                            this.$set(equip, "equipPrice", this.prices[pr] );
                        }
                    } );
                } );
                this.checkEquipment();

            },

            checkEquipment() {
                if (this.computedEquipment.mod_id) {
                    this.equipments.forEach( equip => {
                        if ( equip.mod_id === this.computedEquipment.mod_id ) {
                            this.equipment = equip;
                            this.$store.state.equipment = equip;
                        }
                    });
                } else {
                    this.activated(this.equipments[0]);
                }
            },

            activated(equipment) {
                this.$store.state.equipment = equipment;
                localStorage.equipment = JSON.stringify(equipment);
                localStorage.mod_id = equipment.mod_id;
                console.log(equipment);
                if(!this.firstOpen) {
                    setTimeout(() => {eventEmitter.$emit('selectedEquipment');},100);
                }
                this.firstOpen = false;

            },

            getFontColor: function () {
                try{
                    switch(this.color.rgb.toLowerCase()){
                        case '#000000'.toLowerCase():
                        case '#030303'.toLowerCase():
                        case '#030f16'.toLowerCase():
                        case '#191d28'.toLowerCase():
                        case '#151618'.toLowerCase():
                        case '#191b27'.toLowerCase():
                        case '#27282a'.toLowerCase():
                        case '#403e3f'.toLowerCase():
                        case '#4c4d51'.toLowerCase():
                        case '#727874'.toLowerCase():
                        case '#4e4f53'.toLowerCase():
                        case '#98999b'.toLowerCase():
                        case '#b4ae9c'.toLowerCase():
                        case '#999798'.toLowerCase():
                        case '#0c0e0f'.toLowerCase():
                        case '#29282e'.toLowerCase():
                        case '#121d2f'.toLowerCase():
                        case '#2b3e69'.toLowerCase():
                        case '#182B66'.toLowerCase():
                        case '#1a499c'.toLowerCase():
                        case '#1d50aa'.toLowerCase():
                        case '#63717c'.toLowerCase():
                        case '#5C5653'.toLowerCase():
                        case '#271913'.toLowerCase():
                        case '#604d4d'.toLowerCase():
                        case '#4c2925'.toLowerCase():
                        case '#60101e'.toLowerCase():
                        case '#931722'.toLowerCase():
                        case '#a13511'.toLowerCase():
                        case '#6c1a20'.toLowerCase():
                        case '#740310'.toLowerCase():
                        case '#7a766f'.toLowerCase():
                        case '#8d8682'.toLowerCase():
                        case '#7c7a7a'.toLowerCase():
                        case '#7d8489'.toLowerCase():
                        case '#817e6e'.toLowerCase():
                        case '#8c0414'.toLowerCase():
                        case '#c9021a'.toLowerCase():
                        case '#97a4ac'.toLowerCase():
                        case '#aeabac'.toLowerCase():
                        case '#bea691'.toLowerCase():
                        case '#ff0000'.toLowerCase():
                            return this.fontColor = '#FFFFFF';
                        case '#a0b3bd'.toLowerCase():
                        case '#727270'.toLowerCase():
                        case '#a2a3a7'.toLowerCase():
                        case '#d5dad6'.toLowerCase():
                        case '#9a9fa3'.toLowerCase():
                        case '#dce1dd'.toLowerCase():
                        case '#d7dcd9'.toLowerCase():
                        case '#EDE7E1'.toLowerCase():
                        case '#e1e2dd'.toLowerCase():
                        case '#f2f2f0'.toLowerCase():
                        case '#fafafa'.toLowerCase():
                        case '#eeeded'.toLowerCase():
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
                    console.log(e);
                    return "";
                }

            },

            carouselSizes() {
                this.countSlides = 3;
                if ( window.innerWidth < 992 && window.innerWidth > 768 ) { this.countSlides = 2; }
                if ( window.innerWidth < 768 ) { this.countSlides = 1; }

                this.slideWidth = $('.carousel.container').width() / this.countSlides;
                $(".equip").width(this.slideWidth + "px");
                $('.equip > img').width(this.slideWidth - 80 + "px");
                this.wrapper = this.slideWidth * this.equipments.length;
                this.diferent = this.wrapper - $(".carousel.container").width();
            },

            prevSlideEquip() {
                this.xSlide = this.xSlide + this.slideWidth;
                if (this.xSlide > 0) {
                    this.xSlide = 0;
                    $("#button-prev").attr("disabled", "disabled");
                } else {
                    $("#button-prev").removeAttr("disabled");
                }
                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`)
                                    .css("transition", "all 1000ms");
                $("#button-next").removeAttr("disabled");

                            },

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
        position: relative;
        background-color: rgba(0,0,0,0.3);
        z-index: 100;

        .carousel.container {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: auto;
            .slides_wrapper.row{
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
        }
    }

    @media (max-width: 767.9px) {
        .allEquipment.container-fluid {
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