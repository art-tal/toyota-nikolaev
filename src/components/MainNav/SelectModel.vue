<template>
    <section class="selectModel"
             @selectedEquipment="selectedCar($event)"
    >

        <sub-navigation></sub-navigation>

        <div class="container-fluid"  :style="{'background-color': carColor, 'color': getFontColor(carColor)+ '!important'}">

            <header class="row">
                <h1 class="model col-10 text-left">
                    <span class="carModel font-weight-bold">
                        {{equipment.model_name_pivot}}</span>
<!--                    <span class="carEquipment">-->
<!--                        {{car.model_name_pivot}} - </span>-->
<!--                    <small class="bodyType">{{car.bodyType}}</small>-->
                </h1>

                <div class="col-2">
                    <button class="openChoice btn row"
                            name="selectEquipment"
                            id="selectEquipment"
                            :style="{'background-color': carColor}"
                            @click="showEquipment = !showEquipment"

                    >
<!--                        :to="'/select_model/' + id + '/equipment'"-->
                        <span v-if="!showEquipment">
                            Все комплектации</span>
                        <span v-else>Скрыть</span>
                        <i class="fas fa-chevron-down"
                           v-if="!showEquipment"></i>
                        <i class="fas fa-chevron-up"
                           v-else></i>
                    </button>
                </div>

            </header>

            <equipment v-if="showEquipment"
                       :id="id"
                       :photo="'http://lara.toyota.nikolaev.ua/storage/' + car.image"
                       :color="carColor"
            ></equipment>



            <div class="compare text-left" v-show="!showEquipment">
                <a href="#" class="text-decoration-none" >
<!--                    :style="{'color': getFontColor(car.carColor.rgb )+ '!important'}"-->
                    <i class="fas fa-exchange-alt"></i>
                    <span>Сравнить</span>
                </a>
            </div>

            <div class="carView row">
                <div class="carDescription col-9 row">
                    <ul class="description col-3 text-left">
<!--                        <li v-for="(desc, index) in car.description"-->
<!--                            :key="index"-->
<!--                            :style="{'color': getFontColor(car.carColor.rgb )+ '!important'}"-->
<!--                        >-->
<!--                            {{desc}}</li>-->
                    </ul>

                    <div class="carPhoto col-9">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + car.image" :alt="equipment.model_name_pivot">
                    </div>
                </div>

                <colors-panel
                    :mod_id="equipment.mod_id"
                ></colors-panel>

            </div>
        </div>

<!--        <div class="specifications row justify-content-center">-->
<!--            <div class="fuelConsumption col-2">-->
<!--                <p>Расход топлива</p>-->
<!--                <span class="h1">{{car.fuelConsumption}}</span>-->
<!--                <span class="font-weight-bold"> л/100 км</span>-->
<!--            </div>-->
<!--            <div class="maxSpeed col-2">-->
<!--                <p>Максимальная мощность</p>-->
<!--                <span class="h1">{{car.maxPower}}</span>-->
<!--                <span class="font-weight-bold"> л.с.</span>-->
<!--            </div>-->
<!--            <div class="maxPower col-2">-->
<!--                <p>Максимальная скорость</p>-->
<!--                <span class="h1">{{car.maxSpeed}}</span>-->
<!--                <span class="font-weight-bold"> км/ч</span>-->
<!--            </div>-->
<!--        </div>-->

        <div class="requestService row justify-content-center">
            <div class="col-6 text-right">
                <button class="col-6 btn btn-danger">Заказать тест-драйв</button>

            </div>
            <div class="col-6 text-left">
                <router-link
                        class="nav-link ml-2 mr-2"
                        tag="button"
                        exact
                        active-class="active"
                        to="/configurator"
                >
                    <span>Сконфигурировать</span>
                </router-link>
            </div>

        </div>


    </section>
</template>

<script>
    import axios from 'axios';
    import Equipment from "@/components/configurator/Equipment";
    import {eventEmitter} from "@/main";
    import ColorsPanel from "@/components/configurator/options/ColorsPanel";
    import SubNavigation from "@/components/MainNav/SubNavigation";


    export default {
        name: "SelectModel",

        components: {
            Equipment,
            ColorsPanel,
            SubNavigation
        },

        data() {
            return {
                id: this.$route.params.id,
                showEquipment: false,
                selectedColor: {},
                equipments: [],
                equipment: {},
                carColor: "#fff",

                car: {},
            }
        },

        created() {
            this.getCar();
            this.getEquipment();
            eventEmitter.$on('selectedEquipment', (equip) => {
                    this.equipment = equip;
                    // console.log(this.equipment);
                    this.showEquipment = !this.showEquipment;
            });
            eventEmitter.$on('selectedColor', (color) => {
                this.carColor = color;
            });
        },

        mounted() {


        },

        watch: {
            equipment() {
                console.log(this.equipment);
                return this.equipment;
            },
        },

        methods: {

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                .then( (response) => {
                    this.equipments = response.data;
                    this.equipment = this.equipments[0];
                } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модификации");
                    console.log(error);
                } );
            },

            getCar() {
                axios.get( 'http://lara.toyota.nikolaev.ua/ajax/all_model')
                   .then( (response) => {
                        this.car = response.data[this.id - 1];
                    })
                   .catch((error) => {
                   console.log('Произошла ошибка загрузки фото с сервера.');
                   console.log(error);
               })

            },

            // setColor: function (color) {
            //     this.selectedColor = color;
            //     this.car.carColor = color;
            //     this.colors.forEach( (item) => {item.selected = false;});
            //     color.selected = true;
            //     this.car.photo.bigPhoto = this.getCar(this.car.modelCode, this.car.carColor.colorCode);
            // },

            getFontColor: function (carColor) {
                switch(carColor){
                    case '#000000':
                    case '#182B66':
                    case '#5C5653':
                    case '#740310':
                        return '#FFFFFF';
                    case '#FFFFFF':
                    case '#EDE7E1':
                    case '#F2F2F0':
                        return '#202020';
                }
            }

        }


    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    * {
        margin: 0;
        padding: 0;
    }

    .selectModel {
        .container-fluid {
            background-color: #EDE7E1;
            header {
                padding: 50px 44px 20px 74px;
                button.openChoice.btn {
                    @include button;
                    width: 192px;
                    height: 40px;
                    text-align: left;
                    background-color: #F0F0F0;
                    filter: brightness(90%);
                    span {
                        display: inline-block;
                        margin-right: 20px;
                    }
                    i {
                        position: absolute;
                        top: 13px;
                        right: 20px;
                    }

                }
            }
            .compare {
                margin: 0px 44px 0 74px;
                a {
                    /*color: #202020;*/
                    color: $font_color;
                    font-size: 20px;
                    span{
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
            }

            .carView {
                margin: 0 44px 0 74px;
                .carDescription {
                    .description {
                        list-style-type: none;
                        font-size: 16px;
                        color: $font_color;
                        text-align: left;
                        margin-top: 30px;
                        line-height: 36px;
                        li:before {
                            content: '\22C5';
                        }
                    }
                    .carPhoto {
                        position: relative;
                        img {
                            width: 80%;
                            position: relative;
                            bottom: -58px;
                        }
                    }
                }

                /*.carColors{*/
                /*    margin-bottom: 30px;*/
                /*    .row {*/
                /*        li {*/
                /*            width: 48px;*/
                /*            height: 48px;*/
                /*            margin: 0 5px;*/
                /*            position: relative;*/
                /*            display: inline-block;*/
                /*            list-style-type: none;*/
                /*            &:hover {*/
                /*                transform: scale(1.1);*/
                /*            }*/
                /*            img {*/
                /*                width: 100%;*/
                /*                border: 2px solid #fff;*/
                /*                border-radius: 50%;*/
                /*            }*/
                /*            i {*/
                /*                position: absolute;*/
                /*                top: 18px;*/
                /*                left: 18px;*/
                /*                color: #999;*/
                /*                font-size: 12px;*/
                /*            }*/
                /*        }*/
                /*    }*/

                /*}*/
            }
        }

        .specifications.row {
            margin-top: 25px;
                p {
                    font-size: 1.6rem;
                }
                .h1 {
                    font-size: 4rem;
                }
                .h1 + span {
                    font-size: 1.6rem;
                }
        }
        .requestService.row {
            margin: 40px auto 100px;
            /*width: 70%;*/
            /*justify-content: space-around;*/
            div {
                padding: 0 10px;
                button {
                    @include button;
                    min-width: 250px;
                }
            }

        }
    }


</style>