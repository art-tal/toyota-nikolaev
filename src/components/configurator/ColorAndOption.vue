<template>
    <section>

        <section class="appearance ">
            <header class="container">
                <div class="row">
                    <div class="col-6 text-left">
                        <h2 class="carModel font-weight-bold">{{model.name}}</h2>
                        <h3 class="carEquipment font-weight-bold">{{equipment.mod_name}}
<!--                            <span class="bodyType"> - {{car.bodyType}}</span>-->
                        </h3>
                    </div>
                    <div class="col-6 text-right expand">
                        <span>На весь экран</span>
                        <i class="fas fa-expand-alt"></i>
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

            <div class="options">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav justify-content-center">

                            <router-link
                                    class="nav-link"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/colors"
                            >
                                <span>Цвет</span>
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
                                <span>Интерьер</span>
                            </router-link>

                    </ul>
                    </div>
                </nav>
                <router-view></router-view>
            </div>
        </section>

        <section class="price container">
            <div class="row text-left">
                <div class="col-md-8 col-12">
                    <accessories></accessories>
                </div>

                <div class="pr col-md-4 col-12">
                    <price></price>
                </div>
            </div>
        </section>



    </section>

</template>

<script>
    import Accessories from "@/components/configurator/options/Accessories";
    import Price from "@/components/configurator/options/Price";

    export default {
        name: "ColorAndOption",

        components: {
            Accessories,
            Price,
        },

        data() {
            return {
                model: {},
                equipment: {},
                color: {},
                wheels: {},
                corner: 3,
            }
        },

        created() {
            this.model = JSON.parse( localStorage.model );
            this.equipment = JSON.parse( localStorage.equipment );
            this.color = JSON.parse( localStorage.color );
            this.wheels = JSON.parse( localStorage.wheel );

        },



        mounted() {
            // this.$router.push({name: "colors"});
        },

        computed: {
            photo() {
                let photo = "https://images.toyota-europe.com/ua/product-token/40352faf-5a20-4c39-bfb1-3fb388944877/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg"
                return photo;
            }
        },

        methods: {
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
            position: sticky;
            bottom: 0;
        }

    }


</style>