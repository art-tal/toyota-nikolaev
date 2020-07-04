<template>
    <div class="allEquipment container-fluid w-100">

<!--        <div class="carousel_wrapper d-flex justify-content-between"  :style="{'color': fontColor}">-->

<!--            <button id="button-prev" class="btn" @click="prevSlide()">-->
<!--                <i class="fas fa-chevron-left"></i>-->
<!--            </button>-->

<!--            <div class="slide_wrapper container">-->
<!--                <div id="slides" class="slides ">-->
<!--                    <div class="slide equip d-inline-block"-->
<!--                         v-for="(equipment, key) in equipments"-->
<!--                         :key="key"-->
<!--                         @click="activated(equipment)"-->
<!--                    >-->

<!--                        &lt;!&ndash;                        <div&ndash;&gt;-->
<!--                        &lt;!&ndash;                                class="nav-item"&ndash;&gt;-->
<!--                        &lt;!&ndash;                        >&ndash;&gt;-->

<!--                        <img :src="photo" :alt="equipment.mod_name">-->
<!--                        <h4 :style="{'color': fontColor}">-->
<!--                            <span><strong>{{model}} </strong></span>-->
<!--                            <span><strong>{{equipment.mod_name}}</strong></span>-->
<!--                            <span v-if="equipment.body_type"> - {{equipment.body_type}}</span>-->
<!--                        </h4>-->
<!--                        <h5 :style="{'color': fontColor}" class="text-left">-->
<!--                            Від <strong>{{equipment.equipPrice | formattedPrice}}&#8372;</strong>-->
<!--                        </h5>-->
<!--                        &lt;!&ndash;                <ul class="equip_desc">&ndash;&gt;-->
<!--                        &lt;!&ndash;                    <li v-for="(desc, key) in descriptionList(equipment)"&ndash;&gt;-->
<!--                        &lt;!&ndash;                        :key="key"&ndash;&gt;-->
<!--                        &lt;!&ndash;                        :style="{'color': fontColor}"&ndash;&gt;-->
<!--                        &lt;!&ndash;                    >{{desc}}</li>&ndash;&gt;-->
<!--                        &lt;!&ndash;                </ul>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->


<!--            &lt;!&ndash;            <div class="swiper-button-prev" slot="button-prev"></div>&ndash;&gt;-->
<!--            <button id="button-next" class="btn" @click="nextSlide()">-->
<!--                <i class="fas fa-chevron-right"></i>-->
<!--            </button>-->
<!--        </div>-->


<!--                //////////////работает за исключением клика////////////////-->
                <div class="carousel row" :style="{'color': fontColor}">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide
                                v-for="(equipment, key) in equipments"
                                :key="key"
                        >
                            <div  class="equip" @click="activated(equipment)">

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

<!--                                <button class="btn" @click="activated(equipment)">Обрати</button>-->
                            </div>
                        </swiper-slide>

                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
<!--                //////////////работает за исключением клика////////////////-->



        <!--        ///////////////////рабочий без карусели////////////////-->
        <!--        <div class="carousel row" :style="{'color': fontColor}">-->
        <!--            <div  class="equip col-lg-4 col-md-6 col-12"-->
        <!--                 v-for="(equipment, key) in equipments"-->
        <!--                 :key="key"-->
        <!--                 @click="activated(equipment)"-->
        <!--            >-->

        <!--                <img :src="photo" :alt="equipment.mod_name">-->
        <!--                <h4 :style="{'color': fontColor}">-->
        <!--                    <span><strong>{{model}} </strong></span>-->
        <!--                    <span><strong>{{equipment.mod_name}}</strong></span>-->
        <!--                    <span v-if="equipment.body_type"> - {{equipment.body_type}}</span>-->
        <!--                </h4>-->
        <!--                <h5 :style="{'color': fontColor}" class="text-left">-->
        <!--                    Від <strong>{{equipment.equipPrice | formattedPrice}}&#8372;</strong>-->
        <!--                </h5>-->
        <!--&lt;!&ndash;                <ul class="equip_desc">&ndash;&gt;-->
        <!--&lt;!&ndash;                    <li v-for="(desc, key) in descriptionList(equipment)"&ndash;&gt;-->
        <!--&lt;!&ndash;                        :key="key"&ndash;&gt;-->
        <!--&lt;!&ndash;                        :style="{'color': fontColor}"&ndash;&gt;-->
        <!--&lt;!&ndash;                    >{{desc}}</li>&ndash;&gt;-->
        <!--&lt;!&ndash;                </ul>&ndash;&gt;-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        ///////////////////рабочий без карусели////////////////-->
    </div>


</template>

<script>
    import axios from "axios";
    import formattedPrice from "../../filters/price_format";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {eventEmitter} from '../../main'
    import $ from "jquery";
    // import $ from "jquery";
    // import {eventEmitter} from './../../app' //         for Laravel


    export default {
        name: "Equipment",

        props: [
            'id'
        ],

        components: {
            Swiper,
            SwiperSlide
        },


        data() {
            return {
                // id: 0,//первоначальный вариант
                color: {},
                equipments: [],
                equipment: {},
                fontColor: "#202020",

                prices: [],

                x: 0,
                slides: 0,

                mousePress: false,
                mouseX: 0,
                xNow: 0,

                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    clickable: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

        filters: {
            formattedPrice,
        },

        created() {
            this.$store.state.model = JSON.parse( localStorage.model );
            this.color = this.$store.getters.colored;
            this.getEquipment();
            // this.$store.state.equipment = this.equipment;
            // localStorage.equipment = JSON.stringify( this.equipment );
            this.getFontColor();

            // this.carouselSizes();

            eventEmitter.$on('select', () => {this.activeted()})
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
                        console.log(this.equipments);
                        this.getPrices();
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
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
                let equipFromJson = JSON.parse(localStorage.equipment);
                console.log(equipFromJson);

                if (equipFromJson.mod_id) {
                    this.equipments.forEach( equip => {
                        if ( equip.mod_id === equipFromJson.mod_id ) {
                            this.equipment = equip;
                            this.$store.state.equipment = equip;
                        }
                    });
                } else {
                    this.activated(this.equipments[0]);
                }
            },

            getPrices() {
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/id_mod_price`,
                    {params: {id: this.getModelId}}
                )
                    .then( (response) => {
                        this.prices = response.data;
                        console.log(this.prices);

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

            activated(equipment) {
                console.log('catch');
                this.$store.state.equipment = equipment;
                localStorage.equipment = JSON.stringify(equipment);
                localStorage.mod_id = equipment.mod_id;
                // console.log(localStorage.equipment);
                setTimeout(() => {eventEmitter.$emit('selectedEquipment');},100);
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
                    console.log( "Шрифты пролетели" );
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

            // carouselSizes() {
            //     let slide_wrapper = $(".slide_wrapper").width();
            //     $(".slide").css( "width", slide_wrapper / 3 + 'px');
            //     console.log( slide_wrapper, $(".slide").width());
            // },

            prevSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.equipments.length;//
                this.x = this.x - $('.slide_wrapper').width();
                if ( this.x < 0 ) {
                    if(this.equipments.length % 3){
                        this.x = this.slides - ( ($('.slide_wrapper').width() / 3) * (this.equipments.length % 3));
                        console.log(this.x);
                    } else {
                        this.x = this.slides - $('.slide_wrapper').width();
                        console.log(this.x);
                    }

                }
                $('#slides').css("transform", `translateX(-${this.x}px)`);
            },

            nextSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.equipments.length;
                this.x = this.x + $('.slide_wrapper').width();
                console.log($('.slide_wrapper').width());
                console.log(this.x , this.slides);
                if ( this.x >= this.slides ) {
                    this.x = 0;
                }
                $('#slides').css("transform", `translateX(-${this.x}px)`);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    /*@import './base.scss';*/

    .allEquipment {
        width: 100%;
        margin: 0;
        position: relative;
        background-color: rgba(0,0,0,0.3);

        /*.carousel_wrapper {
            .slide_wrapper.container {
                overflow: hidden;
                padding: 0;
                .slides {
                    white-space: nowrap;
                    .slide {
                        position: relative;
                        width: calc(1140px / 3);
                        box-sizing: border-box;
                        padding: 30px 40px;
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
                        &.active,
                        &:hover{
                            overflow: hidden;
                            align-self: stretch;
                            background-color: rgba(0,0,0,0.25);
                            border-top: 5px solid black;
                            color: #000;
                            img, h4 {
                                transform: scale(1.1);
                                transition: all 700ms;

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
                        a {
                            color: $font_color;
                            font-size: 18px;
                            span{
                                display: inline-block;
                                margin-left: 10px;
                            }
                        }
                        .nav-item {
                            cursor: pointer;
                            margin: auto;

                        }
                    }
                }

            }
        }*/

        /*//////////////////////////////////////////////*/
         .carousel.row {
             position: static;
             width: 85%;
             margin: auto;
             display: flex;
             flex-wrap: wrap;
             justify-content: center;
             align-items: stretch;
             .equip {
                 box-sizing: border-box;
                 padding: 30px 40px;
                 position: relative;
                 z-index: 1100;
                 cursor: pointer;
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
                 &.active,
                 &:hover{
                     overflow: hidden;
                     align-self: stretch;
                     background-color: rgba(0,0,0,0.25);
                     border-top: 5px solid black;
                     color: #000;
                     img, h4 {
                         transform: scale(1.1);
                         transition: all 700ms;

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

                 /*button.btn {*/
                 /*    font-size: 1.4rem;*/
                 /*    padding: 2px 15px;*/
                 /*    border-radius: 13px;*/
                 /*    background-color: rgba(255,255,255,0.5);*/
                 /*}*/

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
        /*//////////////////////////////////////////////////*/

    }
    /*//////////////////////////////////////////*/
    .swiper {
        /*height: 300px;*/
        width: 100%;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: bold;
            /*font-size: $font-size-huge * 2;
            background-color: $white;*/
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
            padding-bottom: 20px !important;
            .carousel {
                width: 90%;
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
                            font-size: 1.8rem;
                            line-height: 1.5;
                        }
                    }
                    h4 {
                        font-size: 2.2rem;
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


</style>