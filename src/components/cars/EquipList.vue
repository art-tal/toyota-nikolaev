<template>
    <div class="allEquipment container-fluid w-100">

        <div class=" container carousel" :style="{'color': fontColor}">

            <swiper class="swiper" ref="swiper" :options="swiperOption">
                <swiper-slide v-for="(equipment, key) in equipments" :key="key">
                    <div  class="equip"
                          @click="activated(equipment)"
                    >
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="equipment.mod_name">

                        <h4 :style="{'color': fontColor}" class="text-left">
                            <span><strong>{{model.name}} </strong></span>
                            <span><strong> {{equipment.mod_name}} </strong></span>
                            <span>{{equipment.body_type}}</span>
                        </h4>

                        <h4 :style="{'color': fontColor}" class="text-left">
                            <strong>Від {{equipment.price | formattedPrice}} &#8372;</strong>
                        </h4>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>

        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import formattedPrice from "../../filters/price_format";
    // import {eventEmitter} from '../../main'
    // import {eventEmitter} from './../../app' //         for Laravel

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'



    export default {
        name: "EquipList",

        props: [
            'id',
            'model',
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

                modelTitle: "",

                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    direction: 'horizontal',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    on: {
                        resize: () => {
                            this.$refs.swiper.$swiper.changeDirection(
                                window.innerWidth <= 960
                                    ? 'vertical'
                                    : 'horizontal'
                            )
                        }
                    }
                }
            }
        },

        filters: {
            formattedPrice,
        },

        metaInfo() {
            return {
                title:  `Toyota ${this.modelTitle}конфігуратор автомобілів`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota ${this.modelTitle}конфігуратор автомобілів`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Створіть власну Toyota ${this.modelTitle} використовуючи наш офіційний конфігуратор автомобілів. Підберіть колір, двигун, трансмісію та індивідуальні аксесуари.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Створіть власну Toyota ${this.modelTitle} використовуючи наш офіційний конфігуратор автомобілів. Підберіть колір, двигун, трансмісію та індивідуальні аксесуари.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Конфігуратор автомобілів, Toyota ${this.modelTitle} конфігуратор,  тойота,модельний ряд, персоналізація, аксесуари, аксесуари для Toyota Yaris`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Конфігуратор автомобілів, Toyota ${this.modelTitle} конфігуратор,  тойота,модельний ряд, персоналізація, аксесуари, аксесуари для Toyota Yaris`
                    },
                ],
            }
        },

        created() {
            // this.$store.state.model = JSON.parse( localStorage.model );
            // this.id = this.getModelId;//первоначальный вариант
            // this.color = this.$store.getters.colored;

            this.getEquipment();
            this.equipment = this.equipments[0];
            // this.$store.state.equipment = this.equipment;
            // localStorage.equipment = JSON.stringify( this.equipment );
            // this.getFontColor();

            // eventEmitter.$on('select', () => {this.activeted()})
        },

        computed: {
            getModel() {
                if (this.$store.getters.getModel.id) {
                    // this.modelTitle = this.$store.getters.getModel.name;
                    return this.$store.getters.getModel;
                } else {
                    // this.modelTitle = JSON.parse( localStorage.model ).name;
                    return JSON.parse( localStorage.model );
                }


            },

            photo() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.model.image;
            },
        },

        methods: {

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod`,//?id=${this.id}`),
                    {params: {id: this.id}}
                )
                // axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.getModelId}`)
                    .then((response) => {
                        this.equipments = response.data;
                        console.log(this.equipments);
                        this.modelTitle = this.getModel.name;
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    })
            },

            activated(equipment) {
                // console.log('catch');
                this.$store.state.equipment = equipment;
                localStorage.mod_id = equipment.mod_id;
                localStorage.equipment = JSON.stringify(equipment);
                // eventEmitter.$emit('selectedEquipment');
            },

            // getFontColor: function () {
            //     try{
            //         switch(this.color.rgb.toLowerCase()){
            //             case '#000000'.toLowerCase():
            //             case '#182B66'.toLowerCase():
            //             case '#5C5653'.toLowerCase():
            //             case '#740310'.toLowerCase():
            //             case '#ff0000'.toLowerCase():
            //                 return this.fontColor = '#FFFFFF';
            //             case '#FFFFFF'.toLowerCase():
            //             case '#EDE7E1'.toLowerCase():
            //             case '#F2F2F0'.toLowerCase():
            //                 return this.fontColor = '#202020';
            //         }
            //     } catch (e) {
            //         // console.log( "Шрифты пролетели" );
            //     }
            //
            // }
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
        background-color: rgba(0,0,0,0.1);
        .carousel.container {
            position: static;
            /*width: 85%;*/
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            .equip {
                box-sizing: border-box;
                padding: 20px;
                img {
                    width: 100%;
                }

                .equip_desc {
                    /*display: none;*/
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
                    font-size: 16px;
                    margin-bottom: 5px;
                    padding: 0 15px;
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

    .swiper {
        .swiper-slide {
            background-size: cover;
            background-position: center;
        }
        &.gallery-top {
            height: 80%;
            width: 100%;
        }
        &.gallery-thumbs {
            height: 20%;
            box-sizing: border-box;
            padding: 0;
        }
        &.gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }
        &.gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
        .swiper-button-prev {
            left: 0;
        }
        .swiper-button-next {
            right: 0;
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