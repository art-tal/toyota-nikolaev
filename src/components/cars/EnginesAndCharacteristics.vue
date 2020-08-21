<template>
    <main class="selectModel">
        <sub-navigation></sub-navigation>



        <div class="container-fluid"  :style="{'background': getGradient( computedColor.rgb), 'color': fontColored + '!important'}">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left" :style="{'color': fontColored + '!important'}">
                    Двигуни та характеристики
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


            <equipment v-if="showEquipment" :id="id"></equipment>


            <div class="carView row">
                <div class="carDescription col-xl-10 col-lg-11 col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
                        <li v-for="(desc, index) in descriptionList()"
                            :key="index"
                            :style="{'color': fontColored + '!important'}"
                        >
                            {{desc}}</li>
                    </ul>

                    <div class="carPhoto col-xl-9 col-12">
                        <img :src="photo" :alt="computedEquipment.model_name_pivot">
                    </div>
                </div>

                <div class="carColors position-absolute">
                    <div class="carousel_wrapper d-flex justify-content-between">

                        <button id="button-prev" class="btn" @click="prevSlide()">
                            <i class="fas fa-chevron-left"></i>
                        </button>

                        <div class="slide_wrapper">
                            <div id="slides" class="slides ">
                                <div class="slide d-inline-block"
                                     v-for="(color, key) in colors"
                                     :key="key"
                                >

                                    <div
                                            class="nav-item sample"
                                            @click="setColor(color)"
                                    >

                                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"
                                             :alt="color.color_name"
                                             :title="color.color_name + ')'"
                                        >
                                        <div class="check text-center" v-if="color.selected">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <button id="button-next" class="btn" @click="nextSlide()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>


            </div>
        </div>

        <div class="specifications row justify-content-center align-items-end">

            <div class="maxPower col-xl-2 col-md-3 col-6" v-if="computedColor.horspower">
                <p>Максимальна потужність</p>
                <span class="h1">{{computedColor.horspower}}</span>
                <span class="font-weight-bold"> к.с.</span>
            </div>

            <div class="maxSpeed col-xl-2 col-md-3 col-6" v-if="computedColor.max_speed">
                <p>Максимальна швидкість</p>
                <span class="h1">{{computedColor.max_speed}}</span>
                <span class="font-weight-bold"> км/г</span>
            </div>

            <div class="fuelConsumption col-xl-2 col-md-3 col-6" v-if="computedColor.fuel_consumption">
                <p>Споживання пального</p>
                <span class="h1">{{computedColor.fuel_consumption}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>

            <div class="fuelConsumption col-xl-2 col-md-3 col-6" v-if="computedColor.fuel_consumption_city">
                <p>Споживання пального</p>
                <span class="h1">{{computedColor.fuel_consumption_city}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>

            <div class="seats col-xl-2 col-md-3 col-6" v-if="model.seats">
                <p>Кількість місць</p>
                <span class="h1">{{model.seats}}</span>
                <span class="font-weight-bold"> шт.</span>
            </div>

        </div>

        <article class="engines">
            <header class="container">
                <h2 class="text-left">Виберіть двигун</h2>
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
                                    <div class="col-xl-4 col-md-6 trans text-left" v-for="(trans, key) in transmissions" :key="key" @click="activated(trans)">
                                        <div class="field">
                                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + trans.eng_image" :alt="trans.eng_name">
                                        </div>

                                        <div class="field">
                                            <h3>
                                                {{transmission.eng_name}} ({{transmission.horspower}} к.с.) <span>{{transmission.fuel_type}}</span>
                                            </h3>
                                        </div>

                                        <div class="field">
                                            <h5>Коробка передач</h5>
                                            <h3>{{trans.gear_name}}</h3>
                                        </div>

                                        <div class="field">
                                            <h5>Привод</h5>
                                            <h3>{{trans.drive_type}}</h3>
                                        </div>

                                        <div class="field">
                                            <h5>Макс. потужність</h5>
                                            <h3>{{trans.horspower}} к.с.</h3>
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
                <router-link
                        tag="button"
                        class="col-6 btn btn-danger"
                        exact
                        to="/test_drive_step_1"
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
                    <span>Сконфігурувати {{model.name}}</span>
                </router-link>
            </div>

        </div>
        
        <section class="accessories">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 order-lg-0 order-2 text-left">
                        <h2>Аксесуари</h2>
                        <p>Відкрийте для себе асортимент аксесуарів, розроблених спеціально для вашої Corolla City та створіть свою наступну Toyota у декілька простих кроків.</p>
<!--                        <button class="btn btn-light" @click="goToEquipment()">Cтворіть свою {{model.name}}</button>-->
                    </div>

                    <div class="col-lg-6 col-12">
                        <img :src="photo" :alt="model.name">
                    </div>
                </div>
            </div>

        </section>

        <section class="links container  d-md-flex justify-content-between">
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
                <h3>Замовити тест-драйв</h3>
                <router-link
                        tag="button"
                        class="btn btn-light"
                        exact
                        to="/test_drive_step_1"
                >Замовити тест-драйв</router-link>
            </div>

<!--            <div class="link">-->
<!--                <i class="far fa-calendar-alt"></i>-->
<!--                <h3>Замовити онлайн-консультацію</h3>-->
<!--                <router-link-->
<!--                        tag="button"-->
<!--                        class="btn btn-light"-->
<!--                        exact-->
<!--                        to="/consultation/step_1"-->
<!--                >Замовити онлайн-консультацію</router-link>-->
<!--            </div>-->
        </section>


    </main>
</template>

<script>
    import axios from 'axios';
    import MixinSelectModel from "../../mixins/mixinSelectModel";
    import Equipment from "./../../components/configurator/Equipment";//            for Laravel
    import SubNavigation from "./../../components/cars/SubNavigation";


    export default {
        name: "EnginesAndCharacteristics",

        components: {
            Equipment,
            SubNavigation
        },

        mixins: [
            MixinSelectModel
        ],

        data() {
            return {
                renderComponent: 0,
                corner: 22,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Особливості та характеристики`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Особливості та характеристики`
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
            // this.id = this.$route.params.id;
            this.getModel();
        },

        mounted() {
            this.getEngine();
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1000);

        },

        computed: {
            photo() {
                if (this.$store.getters.colored.preview) {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + this.$store.getters.colored.preview;
                } else {
                    try {
                        return 'http://lara.toyota.nikolaev.ua/storage/' + JSON.parse(localStorage.color).preview;
                    }
                    catch (e) {
                        console.log(e);
                        return "";
                    }

                }
            },

            getID() {
                if( this.$store.getters.getModelId) {
                    return this.$store.getters.getModelId;
                } else {
                    return localStorage.id;
                }
            },

            computedEquipment() {
                return this.$store.getters.equip;
            },
        },


        methods: {

            getModel() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/all_model",
                    {params: {id: this.getID}},
                ).then( (response) => {
                    this.model = response.data[0];
///////////////////////////////////////////////////////ЗАГЛУШКА
                    this.model.seats  = 5;
//////////////////////////////////////////////////////
                    this.modelTitle = this.model.name;
                    this.changeTitle();
                } )
                    .then( () => {this.getEquipment();} )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },


            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                    .then( (response) => {
                        this.equipments = response.data;
                        this.equipment = this.equipments[0];
                    } )
                    .then( () => {
                        if ( this.computedEquipment.model_name_pivot.toLowerCase().includes( this.model.name.toLowerCase() ) ) {
                            this.equipment = this.computedEquipment;
                        } else {
                            this.equipment = this.equipments[0];
                            localStorage.equipment = JSON.stringify( this.equipments[0] );
                        }
                        localStorage.mod_id = this.equipment.mod_id;
                        this.equipmentTitle = this.equipment.mod_name;
                    } )
                    .then( () => {this.getColors();} )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    } );
            },

            goToEquipment() {
                this.$router.push({name: 'edit_equipment', params: {id: this.model.id}});
            },
        },
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
                            width: 100%;
                            position: relative;
                            bottom: -58px;
                        }
                    }
                }

                .carColors{
                    @include car-colors;
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
                    margin: 20px auto;
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
                                        &.active, &:hover {
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

        section.accessories {
            padding: 68px 0;
            background-color: #fafafa;
            .container {
                .row {
                    color: $font_color;
                    div {
                        h2 {
                            font-size: 4.4rem;
                        }
                        p {
                            margin: 30px 0;
                            font-size: 2.2rem;
                        }
                        button {
                            @include button;
                            background-color: #f0f0f0;
                        }
                        img {
                            width: 100%;
                        }
                    }

                }
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
                        position: absolute;
                        top: 0;
                        right: 20px;
                    }
                }
            }

            .specifications.row {
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
                    padding: 10px;
                    i {
                        font-size: 6rem;
                    }
                    h3 {
                        font-size: 2.2rem;
                        color: $font_color;
                        font-weight: bold;
                        margin: 30px 0;
                    }
                    button.btn.btn-light {
                        @include button;
                        width: 100%;
                        margin: 0;
                        background-color: #f0f0f0;
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

            section.accessories {
                padding: 30px 0;
            }

            .links.container {
                margin: 30px auto;
                .link {
                    margin-bottom: 50px;
                    i {
                        font-size: 6rem;
                    }
                }
            }
        }
    }


</style>