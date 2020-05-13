<template>
    <main class="selectModel">
        <!--        @selectedEquipment="selectedModel($event)"-->
        <sub-navigation></sub-navigation>


        <div class="container-fluid"  :style="{'background-color': computedColor.rgb, 'color': fontColored + '!important'}">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left">
                    Двигуни та характеристики
<!--                    <span class="carModel font-weight-bold">-->
<!--                        {{model.name}}</span>-->
<!--                    <span class="carEquipment">-->
<!--                        {{computedEquipment.mod_name}}</span>-->
<!--                    <small class="bodyType"> - {{computedEquipment.body_type}}</small>-->
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


            <!--            <div class="compare text-left" v-if="!showEquipment">-->
            <!--                <a href="#" class="text-decoration-none" :style="{'color': fontColored + '!important'}">-->

            <!--                    <i class="fas fa-exchange-alt"></i>-->
            <!--                    <span>Порівняти</span>-->
            <!--                </a>-->
            <!--            </div>-->

            <div class="carView row">
                <div class="carDescription col-xl-10 col-lg-11 col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
<!--                        <li v-for="(desc, index) in equipment.description"-->
<!--                            :key="index"-->
<!--                            :style="{'color': fontColored + '!important'}"-->
<!--                        >-->
<!--                            {{desc}}</li>-->
                        <li>{{equipment.description}}</li>
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

        <div class="specifications row justify-content-center align-items-end">
            <div class="price col-xl-2 col-md-3 col-6 text-md-left text-center">
                <p>Від</p>
                <span class="h2 d-block font-weight-bolder">
                    {{computedEquipment.gross_price | formattedPrice}}&#8372;
                </span>

            </div>
            <div class="fuelConsumption col-xl-2 col-md-3 col-6">
                <p>Споживання пального</p>
                <span class="h1">{{model.fuelConsumption}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>
            <div class="maxSpeed col-xl-2 col-md-3 col-6">
                <p>Кількість місць</p>
                <span class="h1">{{model.seats}}</span>
                <span class="font-weight-bold"> шт.</span>
            </div>
            <div class="maxPower col-xl-2 col-md-3 col-6">
                <a>Подивитись всі характеристики</a>
            </div>
        </div>

        <article>
            <header>
                <h2>Виберіть двигун</h2>
            </header>

            <div class="body container">


                <div class="accordion" id="accordion">

                    <div class="card">
                        <div class="card-header p-0">
                            <!--                        id="headingOne"-->
                            <h5 class="m-0">
                                <button class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>{{transmission.eng_name}} ({{transmission.horspower}}к.с.)</strong> {{transmission.fuel_type}}
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">

                                <div class="row transmissions">
                                    <div class="col-3"
                                         v-for="(trans, key) in transmissions"
                                         :key="key"
                                    >
                                        <div class="wrap" @click="this.transmission = trans">
                                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + trans.image" :alt="trans.eng_name">

                                            <div class="field">
                                                <h3>
                                                    <strong>{{transmission.eng_name}} ({{transmission.maxPower}})</strong> {{transmission.fuel_type}}
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <h5>За ціною</h5>
                                                <h3>
                                                    <strong>{{transmission.price | formattedPrice}} &#8372;</strong>
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <h5>Коробка передач</h5>
                                                <h3>
                                                    <strong>{{trans.gear_name}}</strong>
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <h5>Привод</h5>
                                                <h3>
                                                    <strong>{{trans.drive}}</strong>
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <h5>Спож. пального</h5>
                                                <h3>
                                                    <strong>{{trans.fuelConsumption}}</strong>
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <h5>Макс. потужність</h5>
                                                <h3>
                                                    <strong>{{trans.maxPOwer}}</strong>
                                                </h3>
                                            </div>

                                            <div class="field">
                                                <button class="btn btn-light">Подивитись всі характеристики</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </article>


        <div class="requestService row justify-content-center">
            <div class="col-6 text-right">
                <!--                <button class="col-6 btn btn-danger">Замовити тест-драйв</button>-->
                <router-link
                        tag="button"
                        class="col-6 btn btn-danger"
                        exact
                        to="/consultation/step_1"
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
    import SubNavigation from "./../cars/SubNavigation";
    import formattedPrice from "../../filters/price_format";

    // import {eventEmitter} from "./../../app";//                                     for Laravel
    // import Equipment from "./../../components/configurator/Equipment";//            for Laravel
    // import ColorsPanel from "./../configurator/options/ColorsPanel";//              for Laravel
    // import SubNavigation from "./../../components/cars/SubNavigation";//

    export default {
        name: "EnginesAndCharacteristics",

        components: {
            Equipment,
            ColorsPanel,
            SubNavigation
        },

        data() {
            return {
                renderComponent: 0,

                id: 0,
                id_equip: localStorage.mod_id,
                model: {},
                // id: this.$route.params.id,
                showEquipment: false,
                selectedColor: {},
                equipments: [],
                equipment: {},
                modelColor: "#fff",

                transmission: {},
                transmissions: [],

                modelTitle: "",
                equipmentTitle: "",

                fontColor: "#202020",

                corner: 22,

            }
        },

        filters: {
            formattedPrice,
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
            // this.$router.push({name:"/select_model/:id/looking_around/:id"});

            this.renderComponent = 0;
            this.id = this.$route.params.id;
            this.getModel();
            // this.model = JSON.parse( localStorage.model );
            // this.modelTitle = this.model.name;
///////////////////////////////////////////////////////ЗАГЛУШКА
//             this.model.description = [
//                 "Світлодіодні денні ходові вогні",
//                 "Круїз-контроль",
//                 "6 гучномовців",
//                 "Двозонний клімат-контроль"
//             ];
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

        mounted() {
            this.getEngine();
        },

        computed: {
            photo() {
                if (this.$store.getters.colored.preview) {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + this.$store.getters.colored.preview;
                } else {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + JSON.parse(localStorage.color).preview;
                }
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

            getModel() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/all_model",
                    {params: {id: this.id}},
                ).then( (response) => {
                    this.model = response.data[0];
///////////////////////////////////////////////////////ЗАГЛУШКА
//                     this.model.description = [
//                         "Світлодіодні денні ходові вогні",
//                         "Круїз-контроль",
//                         "6 гучномовців",
//                         "Двозонний клімат-контроль"
//                     ];
                    this.model.maxSpeed = 210;
                    this.model.maxPower = 181;
                    this.model.fuelConsumption = 8.3;
//////////////////////////////////////////////////////
                    console.log(this.model);
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },

            getEngine() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',//?id=15',//
                    {params: {id: this.id_equip} },
                )
                    .then( (response) => {
                        this.transmissions = response.data;
                        console.log(this.transmissions);
                        this.transmission = this.transmissions[0];
                        localStorage.transmission = JSON.stringify( this.transmission);
                        console.log(this.transmission);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");
                        console.log(error);
                    } );
            },

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

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                    .then( (response) => {
                        this.equipments = response.data;
                        this.equipment = this.equipments[0];
                        this.$store.state.equipment = this.equipment;
                        this.equipmentTitle = this.equipment.mod_name;
                        localStorage.equipment = JSON.stringify( this.equipments[0] );
                        console.log(this.equipment);
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
                h1 {
                    font-size: 4.4rem;
                }
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
            margin: 75px 0;
            padding: 0 15px;
            .price {
                .h2 {
                    font-size: 3.2rem;
                    margin: 0;
                }
            }
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

        .show_info {
            margin-top: 30px;
            padding-left: 60px;
            font-size: 1.6rem;
            cursor: pointer;
            color: #6c7073;
            &:hover {
                text-decoration: underline;
            }
        }

        .info {
            margin: 30px auto;
            font-size: 1.5rem;
            color: #6c7073;
            p {
                margin-bottom: 15px;
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
                /*margin-top: 75px;*/
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

            .show_info {
                margin-top: 0;
                padding-left: 15px;
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

            .show_info {
                margin-top: 0;
                padding-left: 15px;
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
                margin-top: 150px;
                margin-bottom: 0;
                .price {
                    text-align: center;
                    p {
                        font-size: 1.6rem;
                    }
                    .h2 {
                        font-size: 4rem;
                        margin: 0;
                    }
                }
                .col-6 {
                    margin-bottom: 50px;
                    align-self: flex-end;
                    p {
                        font-size: 1.6rem;
                    }
                }

            }

            .show_info {
                margin-top: 0;
                padding-left: 15px;
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