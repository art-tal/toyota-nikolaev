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
                                <!--                            <span class="bodyType"> - {{car.bodyType}}</span>-->
                            </h3>
                        </div>
                        <div class="col-6 text-right expand"
                             @click="setAllScreen()"
                        >
                            <span v-if="getAllScreen">Закрыти</span>
                            <span v-else>На весь екран</span>
                            <i class="fas fa-compress-alt" v-if="getAllScreen"></i>
                            <i class="fas fa-expand-alt" v-else></i>
                        </div>
                    </div>

                </header>

                <div class="body view row text-center"

                >
                    <!--                @mousemove.left.self.exact="rotatePhoto($event)"-->
                    <img :src="photo"
                         :alt="model.name"

                    >
                    <!--                @selectedColor="setCarColor(color)"-->
                </div>
            </div>


            <div class="options">
                <nav class="navbar navbar-expand navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav justify-content-center">

                            <router-link
                                    class="nav-link"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/colors"
                            >
                                <span>Колір</span>
                            </router-link>

                            <router-link
                                    class="nav-link"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/wheels"
                            >
                                <span>Колеса</span>
                            </router-link>

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/interior"
                            >
                                <span>Інтер'єр</span>
                            </router-link>

                    </ul>
                    </div>
                </nav>
                <router-view></router-view>
            </div>
        </section>

        <section class="price container">
            <div class="row text-left">
                <div class="col-lg-8 col-12">
                    <accessories></accessories>
                </div>

                <div class="pr col-md-4 col-12">
                    <price></price>
                </div>
            </div>
        </section>

        <to-result></to-result>


    </section>

</template>

<script>
    import Accessories from "../configurator/options/Accessories";
    import Price from "../configurator/options/Price";
    import ToResult from "../configurator/options/ToResult";

    export default {
        name: "ColorAndOption",

        components: {
            Accessories,
            Price,
            ToResult,
        },

        data() {
            return {
                model: {},
                equipment: {},
                color: {},
                wheels: {},
                corner: 3,

                allScreen: false,
                classForScreen: "",
            }
        },

        created() {
            this.model = JSON.parse( localStorage.model );
            this.equipment = JSON.parse( localStorage.equipment );
            this.color = JSON.parse( localStorage.color );
            this.wheels = JSON.parse( localStorage.wheel );
            // this.$router.push('colors');
        },



        mounted() {
            // this.$router.push({name: "colors"});
        },

        computed: {
            photo() {
                let photo = "https://images.toyota-europe.com/ua/product-token/40352faf-5a20-4c39-bfb1-3fb388944877/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg"
                return photo;
            },

            getAllScreen() {
                return this.allScreen ? "all_screen" : "";
            },
        },

        methods: {

            setAllScreen() {
                this.allScreen = !this.allScreen;
            },


            // rotatePhoto(event) {
                // this.corner++;
                // if (this.corner > 0 && this.corner < 35) {
                //     console.log(event);
                    // if($event.pageX)
                // }
            // },





            // setCarColor(color) {
            //     this.car.color = color;
            //     this.car.photo.bigPhoto = this.getCarPhoto();
            // },

            // getCarPhoto() {
            //     axios({
            //         method: 'get',
            //         url: 'http://localhost:8080/toyota-nikolaev/src/ajax/routeCar.php',
            //         data: {color: this.car.color.colorCode,
            //                 model: this.car.modelCode,
            //                 corner: this.corner,
            //                 wheels: this.car.wheelsCode
            //         }
            //     })
            //     .then((response) => {return response.data})
            //     .catch((error) => {
            //         console.log("Невозможно отобразить фотографию");
            //         console.log(error);
            //         return this.car.photo.bigPhoto;
            //
            //     })
            // },

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
                img {
                    width: 60%;
                    margin: auto;
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
                    margin: 0;
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