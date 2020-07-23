<template>
    <section>

        <section class="appearance ">

            <div class="wrap"
                 :class="getAllScreen"
            >
                <header class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12 text-left">
                            <h2 class="carModel font-weight-bold">{{model.name}}</h2>
                            <h3 class="carEquipment font-weight-bold">{{equipment.mod_name}}
                                <span class="bodyType"> {{equipment.body_type}}</span>
                            </h3>
                        </div>
                        <div class="col-6 text-right expand"
                             @click="setAllScreen()"
                        >
                            <span v-if="getAllScreen">Закрити</span>
                            <span v-else>На весь екран</span>
                            <i class="fas fa-compress-alt" v-if="getAllScreen"></i>
                            <i class="fas fa-expand-alt" v-else></i>
                        </div>
                    </div>

                </header>

                <div class="body view container row text-center">

                    <swiper class="swiper" :options="swiperOption" v-if="showInterior">
                        <swiper-slide v-for="(img, key) in interiorPhoto()"
                                      :key="key"
                                      :style="'background-image: url(' + img + ')'"
                        >
                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + img" :alt="'photo ' + key">

                        </swiper-slide>


                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>

                    <img :src="photo"
                         :alt="model.name" v-else
                         @mousedown.prevent="click3DDown($event)"
                         @mousemove="rotatePhoto($event)"
                         @mouseup="click3DUP()"
                    >

                </div>
            </div>


            <div class="options">
                <nav class="navbar navbar-expand navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav justify-content-center">

                            <a class="nav-link" @click="option()"
                            >
                                <span>Колір</span>
                            </a>
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/configurator/color_and_option/colors"-->
<!--                            >-->
<!--                                <span>Колір</span>-->
<!--                            </router-link>-->

<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/configurator/color_and_option/wheels"-->
<!--                            >-->
<!--                                <span>Колеса</span>-->
<!--                            </router-link>-->

<!--                            <router-link-->
<!--                                    class="nav-link ml-2 mr-2"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/configurator/color_and_option/interior"-->
<!--                            >-->
<!--                                <span>Інтер'єр</span>-->
<!--                            </router-link>-->
                            <a class="nav-link ml-2 mr-2" @click="option()"
                            >
                                <span>Інтер'єр</span>
                            </a>

                    </ul>
                    </div>
                </nav>
<!--                <router-view></router-view>-->
                <colors v-if="showOption"></colors>
                <interior v-else></interior>
            </div>
        </section>

<!--        <section class="price container">-->
<!--            <div class="row text-left">-->
<!--                <div class="col-lg-8 col-12">-->
<!--                    <accessories></accessories>-->
<!--                </div>-->

<!--                <div class="pr col-md-4 col-12">-->
<!--                    <price></price>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->

        <to-result></to-result>


    </section>

</template>

<script>
    // import Accessories from "../configurator/options/Accessories";
    // import Price from "../configurator/options/Price";
    // import ToResult from "../configurator/options/ToResult";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    import Colors from "./../../components/configurator/options/Colors";
    import Interior from "./../../components/configurator/options/Interior";

    // import Accessories from "./../../components/configurator/options/Accessories";//     for Laravel
    // import Price from "./../../components/configurator/options/Price";//                 for Laravel
    import ToResult from "./../../components/configurator/options/ToResult";//           for Laravel

    export default {
        name: "ColorAndOption",

        components: {
            // Accessories,
            // Price,
            ToResult,
            Colors,
            Interior,
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                model: {},
                equipment: {},
                color: {},
                wheels: {},
                corner: 3,

                mouseX: 0,
                is3DClick: false,

                allScreen: false,
                classForScreen: "",

                showOption: false,


                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
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

        created() {
            this.model = JSON.parse( localStorage.model );
            this.equipment = JSON.parse( localStorage.equipment );
            this.color = JSON.parse( localStorage.color );
            // this.wheels = JSON.parse( localStorage.wheel );
            // this.$router.push('colors');
        },



        mounted() {
            this.showOption = true;
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)

        },

        computed: {
            getEngine() {
                if(this.$store.getters.getEngineAndGear.fuel_type) {
                    return this.$store.getters.getEngineAndGear;
                } else {
                    return JSON.parse(localStorage.transmission);
                }
            },

            getEngineType() {
                if (this.getEngine.eng_name.toLowerCase().includes('hybrid')) {
                    return 'hybrid'
                }
                switch (this.getEngine.fuel_type.toLowerCase()) {
                    case ("бензин"):
                        return 'petrol';
                    case ("дизель"):
                        return 'diesel';
                    case ("lpg"):
                        return 'lpg';
                    case ("електро"):
                        return 'electro';
                }

                return 'petrol';
            },

            getInterior() {
                if(this.$store.getters.getInterior) {
                    return this.$store.getters.getInterior;
                } else {
                    return JSON.parse(localStorage.interior);
                }
            },

            showInterior() {
                return this.$store.getters.getShowInterior;
            },

            // interiorPhoto() {
            //     return JSON.parse( this.getInterior.interior_car );
            //     // let inter_car = this.getInterior.interior_car.split(",");
            //     // console.log(inter_car);
            //     // return inter_car;
            //
            //     // if(this.$store.getters.getInterior.interior_car) {
            //     //     return  this.$store.getters.getInterior.interior_car;
            //     // } else {
            //     //     return JSON.parse(localStorage.interior).interior_car;
            //     // }
            // },

            photo() {
                    if (this.$store.getters.colored.code) {
                        return `http://lara.toyota.nikolaev.ua/storage/configurator/${this.model.name.toLowerCase()}/${this.equipment.mod_name.toLowerCase()}/${this.getEngineType}/${this.$store.getters.colored.color_code}/${this.getInterior.interior_code}/image-${this.corner}.jpg`;
                    } else {
                        // return 'http://lara.toyota.nikolaev.ua/storage/' + JSON.parse(localStorage.color).code;
                        return `http://lara.toyota.nikolaev.ua/storage/configurator/${this.model.name.toLowerCase()}/${this.equipment.mod_name.toLowerCase()}/${this.getEngineType}/${JSON.parse(localStorage.color).color_code}/${this.getInterior.interior_code}/image-${this.corner}.jpg`;
                    }
            },

            getAllScreen() {
                return this.allScreen ? "all_screen" : "";
            },
        },

        watch: {
            getInterior() {
                // if(this.$store.getters.getInterior) {
                    return this.$store.getters.getInterior;
                // } else {
                //     return JSON.parse(localStorage.interior);
                // }
            }
        },

        methods: {

            setAllScreen() {
                this.allScreen = !this.allScreen;
            },

            click3DDown(event) {
                this.is3DClick = true;
                // this.mouseX = event.pageX;
                console.log(event);
            },

            click3DUP() {
                this.is3DClick = false;
            },

            rotatePhoto(event) {
                if (!this.is3DClick) {return}
                if (this.mouseX < event.pageX) {
                    this.corner++;
                } else { this.corner--;}

                if (this.corner == 36) {
                    this.corner = 0;
                } else if (this.corner == -1) {
                    this.corner = 35;
                }
                this.mouseX = event.pageX;
            },

            option() {
                this.showOption = !this.showOption;
            },

            interiorPhoto() {
                    return JSON.parse( this.getInterior.interior_car );
                //     // let inter_car = this.getInterior.interior_car.split(",");
                //     // console.log(inter_car);
                //     // return inter_car;
                //
                //     // if(this.$store.getters.getInterior.interior_car) {
                //     //     return  this.$store.getters.getInterior.interior_car;
                //     // } else {
                //     //     return JSON.parse(localStorage.interior).interior_car;
                //     // }
                },

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .appearance {
        background-color: #F0F0F0;
        padding: 24px 0;
        .wrap {
            header.container {
                .row {
                    padding-top: 24px;
                    div{
                        .carModel {
                            font-size: 4.4rem;
                        }
                        .carEquipment {
                            font-size: 1.7rem;
                        }
                        .bodyType {
                            font-size: 1.7rem;
                            margin-bottom: 2.4rem;
                        }
                        .editEquipment {
                            font-size: 1.5rem;
                            color: $font_color;
                            i {
                                margin-right: 10px;
                            }
                        }
                    }
                    .expand {
                        color: #6c7073;
                        cursor: pointer;
                        span {
                            font-size: 1.5rem;
                            display: inline-block;
                            margin-right: 10px;
                        }
                    }
                }
            }

            .body {
                margin: auto;
                img {
                    width: 80%;
                    margin: auto;
                }

                .swiper {
                    /*height: 300px;*/
                    height: auto;
                    width: 100%;

                    .swiper-slide {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        font-weight: bold;
                        /*font-size: $font-size-huge * 2;
                        background-color: $white;*/
                        img {
                            width: 100%;
                        }
                    }



                    .swiper-button-prev,
                    .swiper-button-next {
                        color: #F0F0F0;
                    }
                }

                .swiper-container.swiper.swiper-container-initialized.swiper-container-horizontal {
                    .swiper-wrapper {
                        .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
                            .swiper-pagination-bullet {
                                width: 50px !important;
                                border-radius: 0 !important;
                            }
                        }
                    }
                }



            }

            &.all_screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                margin: 0;
                z-index: 999;
                background-color: #F0F0F0;
                box-sizing: border-box;
                header.container {
                    min-width: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 10px;
                    box-sizing: border-box;
                    .row {
                        padding-top: 24px;
                        width: 100vw;
                        div{
                            box-sizing: border-box;
                            padding-left: 60px;
                            padding-right: 0;
                    }
                        .expand {
                            box-sizing: border-box;
                            padding-right: 60px;
                            padding-left: 0;
                            color: #6c7073;
                            cursor: pointer;
                        }
                    }
                }
                .body.row {
                    width: 100vw;
                    margin: auto;
                    padding: 0;
                    img {
                        width: 100%;
                        margin: auto;
                    }
                }

            }
        }


        div.options {
            nav {
                ul {
                        a {
                            color: $font_color;
                            padding: 18px 20px 22px;
                            font-size: 1.5rem;
                            &:hover {
                                color: #428bca;
                                cursor: pointer;
                            }
                            &.active {
                                font-weight: bold;
                                border-bottom: 1px solid red;
                            }
                        }
                }
            }
        }

    }

    section.price.container {
        padding-top: 40px;
        position: relative;
        .pr {
            position: relative;
            bottom: 0;
        }

    }


    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .appearance {
            background-color: #F0F0F0;
            padding: 24px 0;
            .wrap {
                header.container {
                    .row {
                        padding-top: 24px;
                        padding-bottom: 20px;
                        div{
                            .carModel {
                                font-size: 3.4rem;
                                display: inline-block;
                                margin-left: 10px;
                            }
                            .carEquipment {
                                font-size: 1.7rem;
                                display: inline-block;
                                margin-left: 10px;
                            }
                            .bodyType {
                                font-size: 1.7rem;
                                margin-bottom: 2.4rem;
                                display: inline-block;
                                margin-left: 10px;
                            }

                        }
                        .expand {
                            display: none;
                        }
                    }
                }

                .body {
                    img {
                        width: 100vw;
                        margin: auto;
                    }
                }


            }
        }

        section.price.container {
            .pr {
                display: none;
            }

        }

    }

    @media (max-width: 767.9px) {
        .appearance {
            background-color: #F0F0F0;
            padding: 24px 0;
            .wrap {
                header.container {
                    .row {
                        padding-top: 24px;
                        padding-bottom: 20px;
                        div{
                            .carModel {
                                font-size: 3.4rem;
                                display: inline-block;
                                margin-left: 10px;
                            }
                            .carEquipment {
                                font-size: 1.7rem;
                                display: inline-block;
                                margin-left: 10px;
                            }
                            .bodyType {
                                font-size: 1.7rem;
                                margin-bottom: 2.4rem;
                                display: inline-block;
                                margin-left: 10px;
                            }

                        }
                        .expand {
                            display: none;
                        }
                    }
                }

                .body {
                    img {
                        width: 100vw;
                        margin: auto;
                    }
                }


            }

        }
        section.price.container {
            .pr {
                display: none;
            }

        }
    }


</style>