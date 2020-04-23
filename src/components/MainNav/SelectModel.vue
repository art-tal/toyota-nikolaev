<template>
    <main class="selectModel">
<!--        @selectedEquipment="selectedModel($event)"-->
        <sub-navigation></sub-navigation>

        <div class="container-fluid"  :style="{'background-color': computedColor.rgb, 'color': fontColored + '!important'}">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left">
                    <span class="carModel font-weight-bold">
                        {{model.name}}</span>
                    <span class="carEquipment">
                        {{computedEquipment.mod_name}}</span>
<!--                    <small class="bodyType"> - {{car.bodyType}}</small>-->
                </h1>

                <div class="col-xl-2 col-lg-3 col-md-6 col-12">
                    <button class="openChoice btn row"
                            name="selectEquipment"
                            id="selectEquipment"
                            :style="{'background-color': computedColor.rgb, 'color': fontColored + '!important'}"
                            @click="choice()"
                    >
                        <span v-if="!showEquipment">
                            Всі комплектації</span>
                        <span v-else>Сховати</span>
                        <i class="fas fa-chevron-down"
                           v-if="!showEquipment"></i>
                        <i class="fas fa-chevron-up"
                           v-else></i>
                    </button>
                </div>

            </header>


            <equipment v-if="showEquipment"></equipment>

<!--            <equipment v-if="showEquipment"-->
<!--                       :id="id"-->
<!--                       :photo="'http://lara.toyota.nikolaev.ua/storage/' + model.image"-->
<!--                       :color="modelColor"-->
<!--            ></equipment>-->




            <div class="compare text-left" v-if="!showEquipment">
                <a href="#" class="text-decoration-none" :style="{'color': fontColored + '!important'}">

                    <i class="fas fa-exchange-alt"></i>
                    <span>Порівняти</span>
                </a>
            </div>

            <div class="carView row">
                <div class="carDescription col-xl-10 col-lg-11 col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
                        <li v-for="(desc, index) in model.description"
                            :key="index"
                            :style="{'color': fontColored + '!important'}"
                        >
                            {{desc}}</li>
                    </ul>

                    <div class="carPhoto col-xl-9 col-12">
<!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="equipment.model_name_pivot">-->
                        <img :src="photo" :alt="computedEquipment.model_name_pivot">
                    </div>
                </div>

                <div class="carColors col-xl-2 col-lg-1 col-12">
                    <colors-panel
                            :mod_id="equipment.mod_id"
                    ></colors-panel>
                </div>


            </div>
        </div>

        <div class="specifications row justify-content-center">
            <div class="fuelConsumption col-md-2 col-4">
                <p>Споживання пального</p>
                <span class="h1">{{model.fuelConsumption}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>
            <div class="maxSpeed col-md-2 col-4">
                <p>Максимальна потужність</p>
                <span class="h1">{{model.maxPower}}</span>
                <span class="font-weight-bold"> к.с.</span>
            </div>
            <div class="maxPower col-md-2 col-4">
                <p>Максимальна швидкість</p>
                <span class="h1">{{model.maxSpeed}}</span>
                <span class="font-weight-bold"> км/г</span>
            </div>
        </div>

        <div class="requestService row justify-content-center">
            <div class="col-6 text-right">
<!--                <button class="col-6 btn btn-danger">Замовити тест-драйв</button>-->
                <router-link
                        tag="button"
                        class="col-6 btn btn-danger"
                        exact
                        to="/consultation"
                >
                    Замовити тест-драйв
                </router-link>

            </div>
            <div class="col-6 text-left">
                <router-link
                        class="nav-link ml-2 mr-2"
                        tag="button"
                        exact
                        active-class="active"
                        to="/configurator/selected_engine"
                >
                    <span>Сконфігурувати</span>
                </router-link>
            </div>

        </div>


    </main>
</template>

<script>
    import axios from 'axios';
    import {eventEmitter} from "../../main";
    import Equipment from "../configurator/Equipment";
    import ColorsPanel from "../configurator/options/ColorsPanel";
    import SubNavigation from "../MainNav/SubNavigation";

    // import {eventEmitter} from "./../../app";//                                     for Laravel
    // import Equipment from "./../../components/configurator/Equipment";//            for Laravel
    // import ColorsPanel from "./../configurator/options/ColorsPanel";//              for Laravel
    // import SubNavigation from "./../../components/MainNav/SubNavigation";//         for Laravel

    export default {
        name: "SelectModel",

        components: {
            Equipment,
            ColorsPanel,
            SubNavigation
        },
        data() {
            return {
                renderComponent: 0,

                id: 0,
                model: {},
                // id: this.$route.params.id,
                showEquipment: false,
                selectedColor: {},
                equipments: [],
                equipment: {},
                modelColor: "#fff",

                modelTitle: "",
                equipmentTitle: "",

                fontColor: "#202020",

            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Загальна інформація`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Загальна інформація`
                    },
                    // {
                    //     vmid: "description",
                    //     name: "description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "description",
                    //     property: "og:description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     name: "keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     property: "og:keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                ],
            }
        },



        created() {
            this.renderComponent = 0;
            // this.id = this.$route.params.id;
            this.id = localStorage.id;
            // this.$store.state.model.id = this.id;
            // this.getModel();
            this.model = JSON.parse( localStorage.model );
            this.modelTitle = this.model.name;
///////////////////////////////////////////////////////ЗАГЛУШКА
            this.model.description = [
                "Світлодіодні денні ходові вогні",
                "Круїз-контроль",
                "6 гучномовців",
                "Двозонний клімат-контроль"
            ];
                this.model.maxSpeed = 210;
                this.model.maxPower = 181;
                this.model.fuelConsumption = 8.3;
            console.log(this.model);
//////////////////////////////////////////////////////
//             this.$store.state.model = this.model;
            // this.equipment = this.$store.state.equipment;
            // this.getColorModel();
            this.getEquipment();
            eventEmitter.$on('selectedEquipment', //this.choice
                () => {
                this.showEquipment = false;
                    this.changeTitle();
                // this.showEquipment = !this.showEquipment;
            }
                );
            // this.color = this.$store.state.color;
            this.color = JSON.parse( localStorage.color );
            // eventEmitter.$on('selectedColor', (color) => {
            //     this.carColor = color;
            // });
        },



        computed: {
            photo() {
                // return this.$store.getters.modelImage;
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.model.image
            },

            computedEquipment() {
                return this.$store.getters.equip;
                // return JSON.parse( localStorage.equipment );
            },

            computedColor() {
                return this.$store.getters.colored;
                // return JSON.parse( localStorage.color );
            },

            fontColored() {
                return this.getFontColor();
            },

            checkId() {
                this.$forceUpdate();
                return this.$route.params['id'];
            }




        },

        watch: {
            $route(toR, fromR) {
                location.reload();///костыль, так делать нельзя но по другому не получается
                fromR;
                // this.$forceUpdate();
                this.id = toR.params['id'];
            },

            equipment() {
                // return this.$store.state.equipment;
                return JSON.parse(localStorage.equipment);
            },

            modelColor() {
                this.modelColor = JSON.parse( localStorage.color );
                // this.modelColor = this.$store.getters.colored;
                this.getFontColor();
                return this.modelColor;
            },

            showEquipment() {
                return this.showEquipment;
            },

            equipmentTitle() {
                return  this.equipmentTitle;
            },
        },

        methods: {

            choice() {
                if (!this.showEquipment) {
                    // this.showEquipment = !this.showEquipment;
                    this.showEquipment = true;
                    console.log(this.showEquipment);
                }
            },

            changeTitle() {
                this.equipmentTitle = this.computedEquipment.mod_name;
                console.log(this.equipmentTitle);
            },

            // getModel() {
            //     axios({
            //         method: 'get',
            //         url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
            //     }).then( (response) => {
            //         console.log(response.data);
            //         this.model = response.data[this.id-1];
            //         this.$store.state.model = this.model;
            //     } )
            //         .catch( (error) => {
            //             console.log("Ошибка, не возможно загрузить доступные модели");
            //             console.log(error);
            //         })
            // },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                .then( (response) => {
                    this.equipments = response.data;
                    this.equipment = this.equipments[0];
                    this.$store.state.equipment = this.equipment;
                    this.equipmentTitle = this.equipment.mod_name;
                    localStorage.equipment = JSON.stringify( this.equipments[0] );
                } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модификации");
                    console.log(error);
                } );
            },

            getFontColor: function () {
                // console.log(this.computedColor.rgb);
                try{
                switch(this.computedColor.rgb.toLowerCase()){
                    case '#000000'.toLowerCase():
                    case '#182B66'.toLowerCase():
                    case '#5C5653'.toLowerCase():
                    case '#740310'.toLowerCase():
                    case '#ff0000'.toLowerCase():
                        return this.fontColor = '#FFFFFF';
                    case '#FFFFFF'.toLowerCase():
                    case '#EDE7E1'.toLowerCase():
                    case '#F2F2F0'.toLowerCase():
                        return this.fontColor = '#202020';
                }
            } catch (e) {
                    console.log( "Шрифты пролетели" );
                }

            },

            // goToConfigurator(id_mod, id_equip) {
            //     // this.$router.push({name: "Configurator", params: {id_mod: id_mod, id_equip: id_equip}});
            // },

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
                    color: $font_color;
                    font-size: 20px;
                    span{
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
            }
            .carView {
                margin: 0 20px 0 74px;
                padding-right: 0;
                justify-content: space-between;
                position: relative;
                .carDescription {
                    position: relative;
                    .description {
                        list-style-type: none;
                        font-size: 1.6rem;
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
                        margin: auto;
                        img {
                            /*width: 800px;*/
                            width: 100%;
                            position: relative;
                            bottom: -58px;
                        }
                    }
                }

                .carColors{
                    align-self: flex-end;
                    margin-bottom: 15px;
                }
            }
        }

        .specifications.row {
            width: 100%;
            margin-top: 25px;
            padding: 0;
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
            margin: 60px auto 100px;
            div {
                padding: 0 10px;
                button {
                    @include button;
                    min-width: 250px;
                    &.btn-danger {
                        background-color: #E50000;
                    }
                }
            }

        }
    }

    @media (min-width: 1200px) and (max-width: 1439.9px) {
        .selectModel {
            .container-fluid {
                header {
                    padding: 50px 30px 20px 40px;
                }
                .carView {
                    margin: 0 30px 0 40px;
                }
            }
            .specifications.row {
                width: 100%;
                padding: 0;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        .selectModel {
            .container-fluid {
                header {
                    padding: 50px 30px 10px 40px;
                }
                .compare {
                    margin: 0 10px 0 40px;
                }
                .carView {
                    margin: 0 0 0 40px;
                    .carDescription {
                        .description {
                            line-height: 2.5rem;
                        }
                        .carPhoto {
                            margin: auto;
                        }
                    }

                    .carColors{
                        align-self: flex-start;
                    }
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
                margin: 60px auto 100px;
                div {
                    padding: 0 10px;
                    button {
                        @include button;
                        min-width: 250px;
                    }
                }

            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .selectModel {
            .container-fluid {
                header {
                    padding: 50px 20px 10px 20px;
                }
                .compare {
                    margin: 0px 20px;
                }
                .carView {
                    margin: 0 20px;
                    position: relative;
                    .carDescription {
                        .description {
                            line-height: 3rem;
                        }
                        .carPhoto {
                            margin: auto;
                            img {
                                width: 100%;
                                bottom: -50px;
                            }
                        }
                    }

                    .carColors{
                        position: absolute;
                        bottom: -60px;
                        /*position: absolute;*/
                        /*top: 0;*/
                        /*right: 0;*/
                        /*!*z-index: 999;*!*/
                        /*text-align: right;*/
                        /*align-self: flex-end;*/
                    }
                }
            }

            .specifications.row {
                margin-top: 100px;
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
                margin: 60px auto 100px;
                div {
                    padding: 0 10px;
                    button {
                        @include button;
                        min-width: 250px;
                    }
                }

            }
        }
    }

    @media (max-width: 767.9px) {
        .selectModel {
            .container-fluid {
                padding-bottom: 150px;
                header {
                    padding: 50px 20px 10px;
                    flex-direction: column-reverse;
                    h1 {
                        font-size: 3rem;
                    }
                    button.openChoice.btn {
                        margin-bottom: 15px;
                        width: 100%;
                        text-align: center;
                        i {
                            position: static;
                        }
                    }
                }
                .compare {
                    margin: 0 20px;
                }
                .carView {
                    margin: 0 20px;
                    .carDescription {
                        .description {
                            font-size: 2rem;
                            line-height: 3rem;
                        }
                        .carPhoto {
                            margin: 0;
                            padding: 0;
                            img {
                                width: 100%;
                                position: absolute;
                                bottom: -200px;
                                left: 0;
                            }
                        }
                    }

                    .carColors{
                        width: 100%;
                        position: absolute;
                        bottom: -140px;
                    }
                }
            }

            .specifications.row {
                margin-top: 130px;
                .col-4 {
                    align-self: flex-end;
                    p {
                        font-size: 1.6rem;
                    }
                }

            }
            .requestService.row {
                margin: 60px auto 100px;
                div {
                    padding: 0 10px;
                    button, .nav-link {
                        min-width: 100%;
                        width: 100%;
                        padding: 10px 5px;
                    }
                }

            }
        }
    }


</style>