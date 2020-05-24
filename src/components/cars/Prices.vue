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


            <div class="carView row">
                <div class="carDescription col-xl-10 col-lg-11 col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
                                                <li v-for="(desc, index) in descriptionList()"
                                                    :key="index"
                                                    :style="{'color': fontColored + '!important'}"
                                                >
                                                    {{desc}}</li>
                        <!--                        <li>{{equipment.description}}</li>-->
                    </ul>

                    <div class="carPhoto col-xl-9 col-12">
                        <!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="equipment.model_name_pivot">-->
                        <img :src="photo" :alt="computedEquipment.model_name_pivot">
                    </div>
                </div>

                <div class="carColors col-xl-2 col-lg-3 col-md-12 col-12">
                    <colors-panel
                            :mod_id="equipment.mod_id"
                    ></colors-panel>
                </div>


            </div>
        </div>

        <div class="specifications row justify-content-center align-items-end">
            <div class="price col-xl-2 col-md-3 col-sm-6 col-12 text-md-left text-center">
                <p>Від</p>
                <span class="h2 d-block font-weight-bolder">
                    {{computedEquipment.gross_price | formattedPrice}}&#8372;
                </span>

            </div>

            <div class="fuelConsumption col-xl-2 col-md-3 col-sm-6 col-12">
                <p>Споживання пального</p>
                <span class="h1">{{model.fuelConsumption}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>

            <div class="maxSpeed col-xl-2 col-md-3 col-sm-6 col-12">
                <p>Кількість місць</p>
                <span class="h1">{{model.seats}}</span>
                <span class="font-weight-bold"> шт.</span>
            </div>

<!--            <div class="all_specifications col-xl-2 col-md-3 col-6">-->
<!--                <a href="" @click.prevent="">Подивитись всі характеристики</a>-->
<!--            </div>-->
        </div>

        <article class="engines">
            <header>
                <h2>Виберіть двигун</h2>
            </header>

            <div class="body container">

                <div id="accordion">
                    <div class="card">
                        <div class="card-header text-left" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>{{transmission.eng_name}} ({{transmission.horspower}} к.с.)</strong> {{transmission.fuel_type}}
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <div class="row transmissions">
                                    <div class="col-xl-4 col-md-6 trans text-left active" v-for="(trans, key) in transmissions" :key="key">
                                        <div class="field">
                                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + trans.eng_image" :alt="trans.eng_name">
                                        </div>

                                        <div class="field">
                                            <h3>
                                                {{transmission.eng_name}} ({{transmission.horspower}} к.с.) <span>{{transmission.fuel_type}}</span>
                                            </h3>
                                        </div>

                                        <!--                                        <div class="field">-->
                                        <!--                                            <h5>За ціною</h5>-->
                                        <!--                                            <h3><strong>{{trans.gross_price | formattedPrice}} &#8372;</strong></h3>-->
                                        <!--                                        </div>-->
                                        <div class="field">
                                            <h5>Коробка передач</h5>
                                            <h3>{{trans.gear_name}}</h3>
                                        </div>

                                        <div class="field">
                                            <h5>Привод</h5>
                                            <h3>{{trans.drive_type}}</h3>
                                        </div>

                                        <!--                                        <div class="field">-->
                                        <!--                                            <h5>Спож. пального</h5>-->
                                        <!--                                            <h3>{{trans.fuelConsumption}}</h3>-->
                                        <!--                                        </div>-->

                                        <div class="field">
                                            <h5>Макс. потужність</h5>
                                            <h3>{{trans.horspower}} к.с.</h3>
                                        </div>

                                        <div class="field text-center">
                                            <button class="btn btn-light">Подивитись всі характеристики</button>
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

        <section class="credit">
                        <h2 class="font-weight-bold">Програма «Тойота Кредит»</h2>
                        <p>Дізнатись більше про кредитування</p>
                    <router-link
                            tag="button"
                            class="btn btn-danger"
                            exact
                            to="/credit"
                    >
                        Детальніше
                    </router-link>
        </section>

        <section class="links container d-md-flex justify-content-between">
            <div class="link">
                <i class="fas fa-calculator"></i>
                <h3>Програма «Тойота Кредит»</h3>
                <router-link
                        tag="button"
                        class="btn btn-light"
                        exact
                        to="/credit"
                >Детальніше</router-link>
            </div>

            <div class="link">
                <i class="far fa-file-alt"></i>
                <h3>Брошура по моделі</h3>
                <router-link
                        tag="button"
                        class="btn btn-light"
                        exact
                        to="/download_brochures"
                >Завантажити брошуру</router-link>
            </div>

            <div class="link">
                <i class="far fa-calendar-alt"></i>
                <h3>Замовити онлайн-консультацію</h3>
                <router-link
                        tag="button"
                        class="btn btn-light"
                        exact
                        to="/consultation/step_1"
                >Замовити онлайн-консультацію</router-link>
            </div>
        </section>

        <section class="insurance">
            <div class="container">
                <header>
                    <h1>Страхування Toyota</h1>
                    <p>В офіційній дилерській мережі Тойота в Україні діє страхова програма під назвою «Тойота Страхування». Вона спрямована на якісне та оперативне врегулювання збитків при настанні страхових випадків та дозволить вам убезпечити свій автомобіль на вигідних умовах.</p>
                </header>

                <div class="table text-left">
                    <h6>Переваги «Тойота Страхування»</h6>

                    <div class="row_info">
                        <i class="fas fa-car-side"></i>
                        <p>Можливість вибору одного з трьох видів франшизи</p>
                    </div>
                    <div class="row_info">
                        <i class="fas fa-user"></i>
                        <p>Відсутність обмежень за водійським стажем при виборі виду франшизи</p>
                    </div>
                    <div class="row_info">
                        <i class="fas fa-paste"></i>
                        <p>Ремонт на сервісних станціях офіційних дилерських центрів Toyota</p>
                    </div>
                    <div class="row_info">
                        <i class="fas fa-car-side"></i>
                        <p>Використанням лише оригінальних запасних частин</p>
                    </div>
                </div>

<!--                <button class="btn btn-danger">Дізнатись більше</button>-->
                <router-link class="btn btn-danger"
                             exact
                             tag="button"
                             to="/form_call_back"
                >
                    Дізнатись більше
                </router-link>
            </div>
        </section>


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
    // import SubNavigation from "./../../components/cars/SubNavigation";//             for Laravel

    export default {
        name: "Prices",

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
            this.renderComponent = 0;
            this.id = this.$route.params.id;
            this.getModel();

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
            // this.getEngine();
        },

        mounted() {
            this.getEquipment();
            console.log('get Engine');
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
                if (this.$store.getters.equip.id) {
                    console.log("not empty");
                    return this.$store.getters.equip;
                } else {
                    return JSON.parse(localStorage.equipment);
                }
            },

            computedColor() {
                if (this.$store.getters.colored.color_code) {
                    return this.$store.getters.colored;
                } else {
                    return JSON.parse( localStorage.color );
                }
            },

            fontColored() {
                return this.getFontColor();
            },

            checkId() {
                this.$forceUpdate();
                return this.$route.params['id'];
            },

            // descriptionList() {
            //     return this.equipment.description.split('\n');
            // },




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
                    this.model.maxSpeed = 210;
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
                        console.log(this.id_equip, this.transmission);
                        if (!this.transmission) {
                            this.transmission = {
                                eng_name: "none",
                                // id: null,
                            }
                        }
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

                        if (localStorage.equipment) {
                            this.equipment = JSON.parse( localStorage.equipment );
                            if ( this.equipment.model_name_pivot.toLowerCase().includes(this.model.name.toLowerCase()) ) {
                                console.log("да");
                                this.equipment = JSON.parse( localStorage.equipment );
                                this.$store.state.equipment = this.equipment;
                            }
                        } else {
                            this.equipment = this.equipments[0];
                            this.$store.state.equipment = this.equipment;
                            localStorage.equipment = JSON.stringify( this.equipments[0] );
                        }
                        this.equipmentTitle = this.equipment.mod_name;
                        console.log(this.equipment);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    } );
            },

            getFontColor() {
                // console.log(this.computedColor.rgb);
                try{
                    switch(this.computedColor.rgb.toLowerCase()){
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

            goToEquipment() {
                this.$router.push({name: 'edit_equipment', params: {id: this.model.id}});
            },

            descriptionList() {
                    return this.equipment.description.split('\n');
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
                        z-index: 100;
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
                    position: relative;
                    z-index: 10;
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
            a {
                color: #6c7073;
                text-decoration: underline;
                font-size: 1.4rem;
                align-self: start;
            }
        }

        article.engines {
            header {
                h2 {
                    margin: 20px 0;
                    font-size: 1.6rem;
                    color: #6c7073;
                }
            }

            .body.container {
                #accordion {
                    .card {
                        .card-header {
                            width: 100%;
                            h5 {
                                button {
                                    width: 100%;
                                    font-size: 2.2rem;
                                    color: $font_color;
                                }
                            }
                        }

                        .collapse.show {
                            .card-body {
                                padding: 0;
                                color: $font_color;
                                background-color: #f0f0f0;
                                .row.transmissions {
                                    margin: 0;
                                    .trans {
                                        background-color: #f0f0f0;
                                        border-top: 3px solid #f0f0f0;
                                        padding: 32px;
                                        &.active {
                                            background-color: #fff;
                                            border-top: 3px solid #E50000;
                                            .field {
                                                button.btn.btn-light {
                                                    background-color: #E50000;
                                                    color: #ffffff;
                                                }
                                            }
                                        }
                                        .field {
                                            margin-top: 24px;
                                            img {
                                                padding: 0;
                                                width: 100%;
                                            }

                                            h3 {
                                                font-size: 1.8rem;
                                                font-weight: bold;
                                                span {
                                                    font-weight: normal;
                                                }
                                            }

                                            h5 {
                                                font-size: 1.4rem;
                                                font-weight: 100;
                                                margin-bottom: 5px;
                                                color: #595D60;
                                            }

                                            button.btn.btn-light {
                                                @include button;
                                                color: $font-color;
                                                background-color: #fff;
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
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

        section.credit {
            padding: 68px 0;
            background-color: #fafafa;
                    color: $font_color;
                        h2 {
                            font-size: 4.4rem;
                        }
                        p {
                            margin: 30px 0;
                            font-size: 2.2rem;
                        }
                        button.btn.btn-danger {
                            @include button;
                            background-color: #E50000;
                        }
                        img {
                            width: 100%;
                        }
        }

        .links.container {
            margin: 68px auto;
            .link {
                i {
                    font-size: 8rem;
                    color: #E50000;
                }
                h3 {
                    font-size: 2.2rem;
                    color: $font_color;
                    font-weight: bold;
                    margin: 30px 0;
                }
                button.btn.btn-light {
                    @include button;
                    background-color: #f0f0f0;
                }
            }
        }

        section.insurance {
            background-color: #f0f0f0;
            padding: 68px 0;
            color: $font_color;
            .container {
                width: 50%;
                margin: auto;
                header {
                    /*width: 75%;*/
                    margin: auto;
                    h1 {
                        font-size: 4.8rem;
                        font-weight: bolder;
                        margin-bottom: 30px;
                    }
                    p {
                        font-size: 2.2rem;
                        font-weight: 100;
                    }
                }

                .table {
                    width: 80%;
                    margin: 68px auto;
                    background-color: #fff;
                    padding: 30px;
                    color: #595D60;
                    h6 {
                        font-size: 1.3rem;
                        color: #6c7073;
                    }
                    .row_info {
                        border-bottom: 1px solid #a8aaac;
                        padding: 20px 0;
                        display: flex;
                        align-items: center;
                        i {
                            display: inline-block;
                            margin: 0 15px;
                            font-size: 1.8rem;
                            flex: 1;
                        }
                        p {
                            font-size: 1.8rem;
                            display: inline-block;
                            flex: 12;
                        }
                        &:last-child {
                            border: none;
                            padding-bottom: 0;
                        }
                    }
                }

                button.btn.btn-danger {
                    @include button;
                    background-color: #E50000;
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
            section.insurance {
                 .container {
                     width: 70%;
                 }
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
                        position: absolute;
                        top: 0;
                        right: 20px;
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

            section.insurance {
                 .container {
                     width: 80%;
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
                    margin: 0 20px;
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
                        text-align: center;
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

            .links.container {
                .link {
                    i {
                        font-size: 6rem;
                    }
                    h3 {
                        font-size: 2.0rem;
                    }
                    button.btn.btn-light {
                        @include button;
                        width: auto;
                    }
                }
            }

            section.insurance {
                 .container {
                     width: 100%;
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
                .col-sm-6, .col-12 {
                    margin-bottom: 30px;
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

            .links.container {
                margin: 30px auto;
                .link {
                    margin-bottom: 40px;
                    i {
                        font-size: 6rem;
                    }
                    h3 {
                        font-size: 2.0rem;
                    }
                }
            }

            section.insurance {
                padding: 30px 0;
                .container {
                    width: 100%;
                    header {
                        /*width: 75%;*/
                        margin: auto;
                        h1 {
                            font-size: 3.5rem;
                            margin-bottom: 30px;
                        }
                        p {
                            font-size: 2.0rem;
                        }
                    }
                    .table {
                        width: 100%;
                        margin: 30px auto;
                    }
                }
            }
        }
    }


</style>