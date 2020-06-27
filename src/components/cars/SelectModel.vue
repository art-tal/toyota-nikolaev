<template>
    <main class="selectModel">
        <sub-navigation></sub-navigation>

        <div class="container-fluid"  :style="{'background': getGradient( computedColor.rgb), 'color': fontColored + '!important'}">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left">
                    <span class="carModel font-weight-bold">
                        {{model.name}}</span>
                    <span class="carEquipment">
                        {{computedEquipment.mod_name}}</span>
                    <small class="bodyType"> - {{computedEquipment.body_type}}</small>
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
                <div class="carDescription col-xl-10 col-lg-9* col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
                        <li v-for="(desc, index) in descriptionList()"
                            :key="index"
                            :style="{'color': fontColored + '!important'}"
                        >
                            {{desc}}</li>
<!--                        <li :style="{'color': fontColored + '!important'}">{{equipment.description}}</li>-->
                    </ul>

                    <div class="carPhoto col-xl-9 col-12">
<!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="equipment.model_name_pivot">-->
                        <img :src="photo" :alt="computedEquipment.model_name_pivot">
                    </div>
                </div>


<!--                <div class="carColors col-xl-2 col-lg-3 col-md-12 col-12">-->
                <div class="carColors position-absolute">
                    <colors-panel
                            :mod_id="equipment.mod_id"
                    ></colors-panel>
                </div>


            </div>
        </div>

        <div class="specifications row justify-content-center align-items-end">
            <div class="price col-xl-2 col-md-3 col-6 text-md-left text-center" v-if="computedEquipment.gross_price">
                <p>Від</p>
                <span class="h2 d-block font-weight-bolder">
                    {{computedEquipment.gross_price | formattedPrice}}&#8372;
                </span>

            </div>

            <div class="price col-xl-2 col-md-3 col-6 text-md-left text-center" v-if="computedEquipment.gross_price">
                <p>Від</p>
                <span class="h2 d-block font-weight-bolder">
                    {{computedEquipment.gross_price | formattedPrice}}&#8372;
                </span>

            </div>

            <div class="fuelConsumption col-xl-2 col-md-3 col-6" v-if="computedEquipment.fuel">
                <p>Споживання пального</p>
                <span class="h1">{{computedEquipment.fuel}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>

            <div class="fuelConsumption col-xl-2 col-md-3 col-6" v-if="computedEquipment.fuel">
                <p>Споживання пального</p>
                <span class="h1">{{computedEquipment.fuel}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>

            <div class="maxPower col-xl-2 col-md-3 col-6" v-if="model.maxPower">
                <p>Максимальна потужність</p>
                <span class="h1">{{model.maxPower}}</span>
                <span class="font-weight-bold"> к.с.</span>
            </div>

            <div class="maxSpeed col-xl-2 col-md-3 col-6" v-if="model.maxSpeed">
                <p>Максимальна швидкість</p>
                <span class="h1">{{model.maxSpeed}}</span>
                <span class="font-weight-bold"> км/г</span>
            </div>
        </div>

<!--        <div class="show_info container text-left" @click="showInfo = !showInfo">Інформація щодо цін</div>-->

<!--        <div class="info container text-left" v-if="showInfo">-->
<!--            <p>-->
<!--                Розміщена на цьому сайті інформація щодо характеристик продукції, (орієнтовних) цін, інших умов її продажу, а також умов надання будь-яких послуг не є пропозицією укласти договір (офертою).</p>-->
<!--            <p>-->
<!--                Вказані рекомендовані ціни на відповідні автомобілі у базових комплектаціях, без врахування вартості додаткових опцій та/або послуг та спеціальних акцій і пропозицій, які можуть діяти на момент придбання автомобіля. Ціни на інші комплектації вказані у відповідних розділах. Ціни є актуальними для наявних на складах Товариства автомобілів, щодо яких здійснене митне оформлення. Така інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.-->
<!--            </p>-->
<!--        </div>-->


        <div class="requestService row justify-content-center">
            <div class="col-6 text-right">
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
                    <span>Сконфігурувати {{model.name}}</span>
                </router-link>
            </div>

        </div>


        <div class="video container-fluid p-0 m-0"
             v-if="modelVideo.link"
        >

            <div class="player" v-if="showVideo">
                <video
                       width="100%"
                       height="auto"
                       :src="modelVideo.link"
                       controls="controls"
                       autoplay
                       type="video/mp4"
                       :poster="modelVideo.poster">
                </video>
                <i class="fas fa-times" @click="openVideo()" v-if="showVideo"></i>
            </div>


            <div class="poster" v-else :style="'background-image: url(' + modelVideo.poster + ')'">
                <img class="w-100" :src="modelVideo.poster" :alt="model.name">
                <div class="info text-left">
                    <h2>{{modelVideo.header}}</h2>
                    <p>{{modelVideo.info}}</p>
                </div>

                <button class="btn btn-play" @click="openVideo()">
                    <i class="fas fa-play"></i>
                </button>
            </div>

        </div>

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
                showEquipment: true,
                showInfo: false,
                selectedColor: {},
                equipments: [],
                equipment: {},
                modelColor: "#fff",

                showVideo: false,

                modelTitle: "",
                equipmentTitle: "",

                modelVideo: {
                    poster: '',
                    link: "",
                    header: "",
                    info: "",
                },

                fontColor: "#202020",

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
            // this.renderComponent = 0;
            this.id = this.$route.params.id;
            this.getModel();

            // console.log(this.model);

            this.getEquipment();

            eventEmitter.$on('selectedEquipment',
                () => {
                this.showEquipment = false;
                this.changeTitle();
            }
                );
            try {
                this.color = JSON.parse( localStorage.color );
            }
            catch (e) {
                // console.log("error color - 333");
                return "";
            }
            
        },

        mounted() {
            this.showEquipment = false;
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
                        // console.log("error photo - 350");
                        return "";
                    }

                }
            },

            computedEquipment() {
                // if (this.$store.getters.equip.mod_id) {
                //     console.log("not empty");
                //     return this.$store.getters.equip;
                // } else {
                    try {
                        return JSON.parse(localStorage.equipment);
                    }
                    catch (e) {
                        // console.log("error equipment - 382");
                        if (this.$store.getters.equip.mod_id) {
                            // console.log("not empty");
                            return this.$store.getters.equip;
                        }
                        return "";
                    }
                // }
            },

            computedColor() {
                if (this.$store.getters.colored.color_code) {
                    return this.$store.getters.colored;
                } else {
                    try {
                        return JSON.parse( localStorage.color );
                    }
                    catch (e) {
                        // console.log("error Computed color - 379");
                        return "";
                    }
                }
            },

            fontColored() {
                return this.getFontColor();
            },

            checkId() {///////////////////////////////////////////////////
                this.$forceUpdate();
                return this.$route.params.id;
            },////////////////////////////////////////////////////////////

            getID() {
                if(this.$route.params.id) {
                    return this.$route.params.id;
                } else if( this.$store.getters.getModelId) {
                    return this.$store.getters.getModelId;
                } else {
                    return localStorage.id;
                }
            },

        },

        watch: {
            $route(toR, fromR) {
                location.reload();///костыль, так делать нельзя но по другому не получается
                fromR;
                this.forceUpdate();
                this.id = toR.params.id;
            },

            equipment() {
                try {
                    return JSON.parse(localStorage.equipment);
                }
                catch (e) {
                    console.log("error equipment Watch - 421");
                    return "";
                }
            },

            modelColor() {
                try {
                    this.modelColor = JSON.parse( localStorage.color );
                }
                catch (e) {
                    console.log("error model color watch - 431");

                }
                // this.modelColor = this.$store.getters.colored;
                this.getFontColor();
                return this.modelColor;
            },

            showEquipment() {
                // console.log('watch', this.showEquipment);
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
                        {params: {id: this.getID}},
                    ).then( (response) => {
                        this.model = response.data[0];
///////////////////////////////////////////////////////ЗАГЛУШКА
//                         this.model.maxSpeed = 210;
//                         this.model.maxPower = 181;
//                         this.model.fuelConsumption = 8.3;
                        this.getVideo();
//////////////////////////////////////////////////////
                        this.modelTitle = this.model.name;
                        this.changeTitle();
                        console.log(this.model);
                    } )
                        .catch( (error) => {
                            console.log("Ошибка, не возможно загрузить доступные модели");
                            console.log(error);
                        })
            },

            choice() {
                this.showEquipment = !this.showEquipment;
                // console.log( this.showEquipment);

            },

            changeTitle() {
                this.equipmentTitle = this.computedEquipment.mod_name;
                // console.log(this.equipmentTitle);
            },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                .then( (response) => {
                    this.equipments = response.data;
                        this.equipment = this.equipments[0];
                        this.$store.state.equipment = this.equipment;
                        localStorage.equipment = JSON.stringify( this.equipments[0] );
                        localStorage.mod_id = this.equipment.mod_id;
                    if ( !this.equipment.model_name_pivot.toLowerCase().includes( this.model.name.toLowerCase() ) ) {
                        console.log("да");
                        localStorage.color = "";
                        this.$store.state.color = null;
                    }

                    this.equipmentTitle = this.equipment.mod_name;
                    console.log(this.equipment);
                } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модификации");
                    console.log(error);
                } );
            },

            descriptionList() {
                try {
                    let desc = this.equipment.description.split('\n');
                    return desc;
                }
                catch (e) {
                    // console.log("selectModel split");
                }

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
                    // console.log( "Шрифты пролетели" );
                }

            },

            lightenDarkenColor(col, amt) {

                let usePound = false;

                if (col[0] == "#") {
                    col = col.slice(1);
                    usePound = true;
                }

                let num = parseInt(col,16);

                let r = (num >> 16) + amt;

                if (r > 255) r = 255;
                else if  (r < 0) r = 0;

                let b = ((num >> 8) & 0x00FF) + amt;

                if (b > 255) b = 255;
                else if  (b < 0) b = 0;

                let g = (num & 0x0000FF) + amt;

                if (g > 255) g = 255;
                else if (g < 0) g = 0;

                return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

    },

            getGradient(rgb){
                try{
                    switch(rgb.toLowerCase()){
                        case '#000000'.toLowerCase():
                        case '#030303'.toLowerCase():
                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 70) +  ")";
                        case '#182B66'.toLowerCase():
                        case '#1d50aa'.toLowerCase():
                        case '#5C5653'.toLowerCase():
                        case '#60101e'.toLowerCase():
                        case '#727270'.toLowerCase():
                        case '#740310'.toLowerCase():
                        case '#7a766f'.toLowerCase():
                        case '#7c7a7a'.toLowerCase():
                        case '#7d8489'.toLowerCase():
                        case '#817e6e'.toLowerCase():
                        case '#8c0414'.toLowerCase():
                        case '#97a4ac'.toLowerCase():
                        case '#aeabac'.toLowerCase():
                        case '#b4ae9c'.toLowerCase():
                        case '#c9021a'.toLowerCase():
                        case '#ff0000'.toLowerCase():

                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 50) +  ")";
                        case '#d7dcd9'.toLowerCase():
                        case '#EDE7E1'.toLowerCase():
                        case '#f2f2f0'.toLowerCase():
                        case '#fafafa'.toLowerCase():
                        case '#FFFFFF'.toLowerCase():
                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, -50) + ")";
                            default:
                                return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 20) +  ")";
                    }
                } catch (e) {
                    // console.log( "Градиетны пролетели" );
                }
            },

            getVideo() {
                // console.log(this.model.name.toLowerCase());
                try {
                    switch(this.model.name.toLowerCase()) {

                        case 'yaris':
                            this.modelVideo.poster = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-yaris-2019-video-poster_tcm-3046-1618618.jpg";
                            this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-yaris-2019-video.mp4_tcm-3046-1622631.mp4";
                            this.modelVideo.header = "Створений для міського життя";
                            this.modelVideo.info = "Завдяки низці інтелектуальних функцій ви отримаєте ще більше задоволення від Yaris.";
                            break;

                        case 'corolla':
                            this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-corolla-sedan-2019-video-poster_tcm-3046-1559760.jpg";
                            this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-corolla-sedan-2019-movie_tcm-3046-1681827.mp4";
                            this.modelVideo.header = "Новий рівень керування гібридом";
                            this.modelVideo.info = "Седан Corolla вперше представлено у гібридній варіації. Автомобіль напрочуд швидкий та спритний завдяки застосуванню інноваційного самозарядного гібридного двигуна. Інженери запровадили абсолютно новий підхід до дизайну та проєктування. Завдяки цьому найбільш продавана модель у світі відтепер має нові характеристики: витончений екстер’єр, повністю оновлений інтер’єр, низку удосконалених технологій та, що найважливіше, поліпшені функції безпеки. Седан Corolla повертається – відтепер він ще кращий.\n";
                            break;

                        case 'camry':
                            this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-camry-2019-video-poster_tcm-3046-1592534.jpg";
                            this.modelVideo.link = "http://t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-camry-2019-video.mp4_tcm-3046-1690156.mp4";
                            this.modelVideo.header = "Нова Toyota Camry";
                            this.modelVideo.info = "Нова Camry Hybrid являє собою ідеальну комбінацію. Модель поєднує всі переваги елегантного седана та гібрида Toyota. Автомобіль гарантує чудову динаміку руху, що виводить гібрид на наступний рівень.";
                            break;

                        case 'c-hr':
                            this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-c-hr-2019-video-poster_tcm-3046-1775577.jpg";
                            this.modelVideo.link = "http://t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-c-hr-2019-video_tcm-3046-1777521.mp4";
                            this.modelVideo.header = "Залиште звичне позаду";
                            this.modelVideo.info = "Вийдіть за рамки у світі, сповненому звичного.Порушуйте умовності та довіряйте неординарності. Toyota C-HR – емоційний, елегантний, прогресивний міський кросовер – діамант модельного ряду Toyota.";
                            break;

                        case 'rav4':
                            this.modelVideo.poster = "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-rav4-2019-video-poster-v2_tcm-3046-1528190.jpg";
                            this.modelVideo.link = "http://t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-rav4-2019-video_tcm-3046-1688758.mp4";
                            this.modelVideo.header = "Жодних компромісів";
                            this.modelVideo.info = "RAV4 створено бути керованим, а дизайн розроблений, щоб виділитися. Завдяки самозарядному та потужному гібридному приводу, ви насолоджуєтеся всіма перевагами електродвигуна, без незручностей. Просторий та зручний інтер’єр, надає відчуття комфорту під час подорожей по місту.";
                            break;

                        case 'highlander':
                            this.modelVideo.poster = "";
                            this.modelVideo.link = "";
                            this.modelVideo.header = "";
                            this.modelVideo.info = "";
                            break;

                        case 'land cruiser prado':
                            this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-2019-video-poster_tcm-3046-1694671.jpg";
                            this.modelVideo.link = "http://t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-2019-video.mp4_tcm-3046-1703639.mp4";
                            this.modelVideo.header = "Функції, на які можна покластися";
                            this.modelVideo.info = "Окрім легендарних характеристик, Land Cruiser підтримує низку унікальних функцій.";
                            break;

                        case 'land cruiser 200':
                            this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-v8-2019-video-poster_tcm-3046-1705028.jpg";
                            this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-v8-2019-movie.mp4_tcm-3046-1705078.mp4";
                            this.modelVideo.header = "Функції, на які можна розраховувати";
                            this.modelVideo.info = "Новий Land Cruiser 200 підтримує безліч передових функцій та поєднує потужність і практичність.";
                            break;

                        case 'hilux':
                            this.modelVideo.poster = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-hilux-2019-video-poster_tcm-3046-1703624.jpg";
                            this.modelVideo.link = "http://t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-hilux-2019-movie-full.mp4_tcm-3046-1703620.mp4";
                            this.modelVideo.header = "Впорається з будь-яким випробуванням";
                            this.modelVideo.info = "У Hilux поєднуються міцність і потужність пікапа та інноваційні технології. Це новий досвід водіння.";
                            break;
                    }
                } catch (e) {
                    console.log("Видео пролетело");
                }

            },

            openVideo() {
                this.showVideo = !this.showVideo;
            },

            forceRerender() {
                this.renderComponent++;
            },
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
                margin: 0 44px 0 74px;
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
                    width: 240px;
                    position: absolute;
                    padding: 0;
                    bottom: 0;
                    right: 0;
                    z-index: 10;
                    /*align-self: flex-end;*/
                    margin-bottom: 15px;
                    overflow: visible !important;

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

        .video.container-fluid {
            position: relative;
            width: 100%;
            height: auto;
            /*height: 600px;*/

            .poster {
                width: 100%;
                img {
                    width: 100%;
                }
                .info {
                    position: absolute;
                    top: 200px;
                    left: 120px;
                    width: 40%;
                    color: #ffffff;
                    h2 {
                        font-size: 4.4rem;
                        font-weight: bold;
                    }
                    p {
                        padding: 40px 0;
                        font-size: 2.4rem;
                    }
                }

                button.btn.btn-play {
                    display: block;
                    position: absolute;
                    top: calc(50% - 48px);
                    left: calc(50% - 48px);
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    background-color: #000000;
                    color: #ffffff;
                    font-size: 3rem;
                    padding-left: 10px;
                    box-shadow: 0 0 8px 8px rgba(255,255,255, 0.2);
                }
            }

            .player {
                i.fas.fa-times {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: #ffffff;
                    font-size: 2.5rem;
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
                    .carColors {
                        right: -15px;
                    }
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
                        top: 0;
                        right: 15px;
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

            .video.container-fluid {
                .poster {
                    .info {
                        display: none;
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
                        bottom: -60px;
                        right: calc(50% - 120px);
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

            /*.show_info {*/
            /*    margin-top: 0;*/
            /*    padding-left: 15px;*/
            /*}*/

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

            .video.container-fluid {
                .poster {
                    .info {
                        display: none;
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
                        width: auto;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        .selectModel {
            .container-fluid {
                padding-bottom: 150px;
                height: 75vw;
                position: relative;
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
                    position: static;
                    .carDescription {
                        position: static;
                        .description {
                            margin: 0;
                            font-size: 1.5rem;
                            line-height: 2rem;
                        }
                        .carPhoto {
                            margin: 0;
                            padding: 0 15px;
                            position: static;
                            img {
                                width: calc(100% - 30px);
                                position: absolute;
                                bottom: -12vw;
                                left: 15px;
                            }
                        }
                    }

                    .carColors{
                        bottom: -85px;
                        right: calc(50% - 120px);
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

            .video.container-fluid {
                .poster {
                    .info {
                        display: none;
                    }
                }
            }

            .links.container {
                margin: 30px auto;
                .link {
                    margin: 40px 0;
                    i {
                        font-size: 6rem;
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
    }

    @media (max-width: 575.9px) {
        .selectModel {
            .container-fluid {
                padding-bottom: 150px;
                height: auto;
                position: relative;
                header {
                    padding: 50px 20px 10px;
                    flex-direction: column-reverse;
                    h1 {
                        font-size: 2.5rem;
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
                /*.compare {*/
                /*    margin: 0 20px;*/
                /*}*/
                .carView {
                    margin: 0 20px;
                    position: static;
                    .carDescription {
                        position: static;
                        .description {
                            margin: 0;
                            font-size: 1.5rem;
                            line-height: 2rem;
                        }
                        .carPhoto {
                            margin: 0;
                            padding: 0 15px;
                            position: static;
                            img {
                                width: calc(100% - 30px);
                                position: absolute;
                                bottom: -12vw;
                                left: 15px;
                            }
                        }
                    }

                    .carColors{
                        bottom: -75px;
                        right: calc(50% - 120px);
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

            .video.container-fluid {
                .poster {
                    .info {
                        display: none;
                    }
                }
            }

            .links.container {
                margin: 30px auto;
                .link {
                    margin: 40px 0;
                    i {
                        font-size: 6rem;
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
    }


</style>