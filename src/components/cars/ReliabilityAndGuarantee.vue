<template>
    <main class="selectModel">
        <sub-navigation></sub-navigation>


<!--        <div class="container-fluid"  :style="{'background-color': computedColor.rgb, 'color': fontColored + '!important'}">-->
        <div class="container-fluid"  :style="{'background': getGradient( computedColor.rgb), 'color': fontColored + '!important'}">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left">
                    Надійність та гарантія
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


            <equipment v-if="showEquipment" :id="id"></equipment>


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



        <article class="engines">
            <header>
                <h2 class="container text-left">Виберіть двигун</h2>
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
                                    <div class="col-xl-4 col-md-6  trans text-left" v-for="(trans, key) in transmissions" :key="key" @click="activated(trans)">
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

        <section class="guarantee">
            <header>
                <h1>Гарантія</h1>
            </header>

            <div class="body">
                <p>Автомобілі Toyota розроблені за принципами виняткової якості, довговічності та надійності. Для забезпечення спокою наших клієнтів ми пропонуємо стандартну 3-річну гарантію на всі автомобілі та 5-річну гарантію на гібридну систем Toyota.</p>


                <div class="container row">
                    <div class="col-lg-4 col-12">
                        <article class="text-left">
                            <h4>Включено у вартість<div class="corn"></div></h4>
                            <h2>Гарантія виробника</h2>
                            <p>Надається новим автомобілям Toyota на 3 роки або 100 000 км, залежно від того, що настане раніше.</p>
                            
                            <div class="more_info" v-if="showMore">
                                <h3>Корозія поверхні чи пошкодження лакофарбованого покриття</h3>
                                <ul>
                                    <li>на випадки корозії поверхні чи пошкодження лакофарбового покриття на будь-яких пофарбованих деталях кузова внаслідок дефектів матеріалів чи виробництва 36 (тридцять шість) місяців або 100 000 км пробігу, в залежності від того, що настане раніше, починаючи з дати продажу (дати видачі) Автомобіля першому власнику, яка фіксується в книжці «Сервіс та Гарантія».</li>
                                    <li>на випадки корозії поверхні чи пошкодження лакофарбового покриття на пофарбованій поверхні вантажного відділення моделі Toyota Hilux кузова внаслідок дефектів матеріалів чи виробництва 12 (дванадцять) місяців або 20 000 км пробігу, в залежності від того, що настане раніше, починаючи з дати продажу (дати видачі) Автомобіля першому власнику, яка фіксується в книжці «Сервіс та Гарантія».</li>
                                </ul>
                                <h3>Оригінальні аксесуари</h3>
                                <ul>
                                    <li>на оригінальні аксесуари Toyota, що встановлені під час передпродажної підготовки автомобіля у Дистриб’ютора або під час передпродажного сервісу у Дилера до продажу кінцевому покупцеві, поширюється базова гарантія строком 36 (тридцять шість) місяців або 100 000 км пробігу в залежності від того, яка з умов настане раніше. Термін починається з дати продажу (дати видачі) автомобіля першому власнику, яка фіксується в сервісній книжці «Сервіс та Гарантія». При придбанні та встановленні оригінального аксесуара впродовж дії гарантійного терміну експлуатації автомобіля дія гарантії на такий оригінальний аксесуар визначається залишковим строком гарантії на автомобіль, але не менше, ніж 12 (дванадцять) місяців з дати встановлення. На оригінальні аксесуари, придбані та встановлені у Дилера по завершенню гарантійного терміну експлуатації автомобіля, гарантія дійсна впродовж 12 (дванадцяти) місяців без обмеження пробігу з дати встановлення на автомобіль, яка фіксується в книжці «Сервіс та Гарантія».</li>
                                    <li>на оригінальні запасні частини та/або аксесуари, встановлені Дилером під час гарантійного ремонту, гарантійний термін збігає одночасно з закінченням гарантійного терміну експлуатації Автомобіля.</li>
                                </ul>
                            </div>
                            
                            
                            <a href="">Положення та умови</a>

                            <a href="" class="more" @click.prevent="showMoreInfo() " v-if="showMore">Згорнути</a>
                            <a href="" class="more" @click.prevent="showMoreInfo()" v-else>Показати більше</a>
                        </article>
                    </div>

                    <div class="col-lg-4 col-12">
                        <article class="text-left">
                            <h4>Включено у вартість<div class="corn"></div></h4>
                            <h2>Гарантія на акумулятори гібридних систем</h2>
                            <p>Надається з кожною гарантією на гібриди Toyota на термін до 5 років або 100 000 км пробігу, залежно від того, що настане раніше</p>

                            <div class="more_info" v-if="showMore">
                                <ul>
                                    <li>Лише авторизовані сервіс-центри Toyota, лідера гібридних технологій, можуть забезпечити відповідний рівень обслуговування для вашого гібрида. В рамках щорічної діагностики гібридів наші фахівці перевіряють гібридну систему і складають звіт про стан вашого автомобіля.</li>
                                    <li>на Гібридну систему  гарантійний термін складає 60 (шістдесят) місяців або 100 000 км пробігу, в залежності від того, що настане раніше, починаючи з дати продажу (дати видачі) Автомобіля першому власнику, яка фіксується в книжці «Сервіс та Гарантія».</li>

                                    <li>на оригінальну акумуляторну батарею гарантійний термін складає 36 місяців або 100 000 км пробігу, в залежності від того, що настане раніше, починаючи з дати продажу (дати видачі) Автомобіля першому власнику, яка фіксується в книжці «Сервіс та Гарантія», за умови дотримання правил експлуатації стартерних акумуляторних батарей, наведених в посібнику користувача.</li>

                                </ul>
                            </div>


                            <a href="">Положення та умови</a>

                            <a href="" class="more" @click.prevent="showMoreInfo() " v-if="showMore">Згорнути</a>
                            <a href="" class="more" @click.prevent="showMoreInfo()" v-else>Показати більше</a>
                        </article>
                    </div>
                </div>


            </div>
        </section>

        <section class="assistance">
            <header class="container">
                <h1>Допомога в дорозі «Toyota Assistance»</h1>
            </header>

            <div class="body container">
                <p>З метою забезпечення задоволення потреб клієнта автомобілі Toyota обслуговуються за Програмою Toyota Assistance протягом 3-х років з моменту придбання автомобіля клієнтом. Добре відома якість Toyota у поєднанні з досвідом та перевагами обслуговування, що пропонуються Програмою Toyota Assistance, гарантують Вам душевний спокій під час поїздки на автомобілі.</p>

                <small>Тарифікація в Україні та за кордоном згідно до тарифів Вашого оператора</small>

                <div class="contact text-left">
                    <small>Контактні дані</small>
                    <h4>На території України та Європи</h4>
                    <h5>
                        <i class="fas fa-phone-alt"></i>
                        <a href="tel:+380444942298">+38 044 494 22 98</a>
                    </h5>
                </div>

<!--                <button class="btn btn-danger">Дізнайтеся більше про Toyota Assistance</button>-->
                <router-link class="btn btn-danger"
                             exact
                             tag="button"
                             to="/toyota_assistance"
                >
                    Дізнайтеся більше про Toyota Assistance
                </router-link>
            </div>


        </section>

        <section class="image ass">
            <div class="container">
                <div class="info">
                    <span class="text-left">&#x201C;</span>
                    <p class="text-left">Добре відома якість Toyota у поєднанні з досвідом та перевагами обслуговування, що пропонуються Програмою Toyota Assistance, гарантують Вам душевний спокій під час поїздки на автомобілі.</p>
                    <span class="text-right">&#x201D;</span>
                </div>
            </div>
        </section>

        <section class="safety sec">
            <header>
                <h1>Забезпечення безпеки Toyota</h1>
            </header>

            <p class="container">Десятиліття досвіду в автомобільній сфері та масштабні дослідження гарантують, що кожна нова Toyota не лише готова до експлуатації – ви можете цілковито їй довіритися. Завдяки передовим технологіям Toyota Safety Sense нашою кінцевою метою є повне усунення дорожньо-транспортних пригод та створення безпечніших умов водіння для всіх.</p>
        </section>

        <section class="repairs sec">
            <header>
                <h1>Ремонт</h1>
            </header>

            <p class="container">У ДТП можуть потрапити навіть найобережніші водії. На щастя, якою б не була аварія, ви завжди можете подзвонити на лінію авторизованого сервіс-центру Toyota. Наші кваліфіковані фахівці зобов'язуються надати комплексні послуги з ремонту, які допоможуть повернути вашу Toyota у первісний стан.</p>
        </section>

        <section class="image rep">
            <div class="container">
                <div class="info">
                    <span class="text-left">&#x201C;</span>
                    <p class="text-left">Кваліфіковані фахівці дилерських центрів Toyota відремонтують ваш автомобіль відповідно до найвищих стандартів Toyota. Ми використовуємо лише оригінальні запасні частини Toyota з мінімальною 12-місячною гарантією.</p>
                    <span class="text-right">&#x201D;</span>
                </div>
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
    import $ from "jquery";

    // import {eventEmitter} from "./../../app";//                                     for Laravel
    // import Equipment from "./../../components/configurator/Equipment";//            for Laravel
    // import ColorsPanel from "./../configurator/options/ColorsPanel";//              for Laravel
    // import SubNavigation from "./../../components/cars/SubNavigation";//             for Laravel

    export default {
        name: "ReliabilityAndGuarantee",

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

                showMore: false,

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
                title:  `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Надійність та гарантія`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Надійність та гарантія`
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
            eventEmitter.$on('selectedEquipment', //this.choice
                () => {
                    this.showEquipment = false;
                    this.changeTitle();
                }
            );
            try {
                this.color = JSON.parse( localStorage.color );
            }
            catch (e) {
                console.log("error color - 333");
                return "";
            }
        },

        mounted() {
            this.getEquipment();
            console.log('get Engine');
            this.getEngine();
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
                        console.log("error photo - 350");
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
                    console.log("error equipment - 382");
                    if (this.$store.getters.equip.mod_id) {
                        console.log("not empty");
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
                        console.log("error Computed color - 379");
                        return "";
                    }
                }
            },

            fontColored() {
                return this.getFontColor();
            },

            checkId() {
                this.$forceUpdate();
                return this.$route.params.id;
            },

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
                // location.reload();///костыль, так делать нельзя но по другому не получается
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
                ).then((response) => {
                    this.model = response.data[0];
                    this.modelTitle = this.model.name;
                    this.changeTitle();
                    console.log(this.model);
                })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },

            getEngine() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',//?id=15',//
                    {params: {id: this.id_equip}},
                )
                    .then((response) => {
                        this.transmissions = response.data;
                        console.log(this.transmissions);
                        this.transmission = this.transmissions[0];
                        localStorage.transmission = JSON.stringify(this.transmission);
                        console.log(this.id_equip, this.transmission);
                        if (!this.transmission) {
                            this.transmission = {
                                eng_name: "none",
                                // id: null,
                            }
                        }
                    })
                    .catch((error) => {
                        console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");
                        console.log(error);
                    });
            },

            choice() {
                this.showEquipment = !this.showEquipment;
            },

            changeTitle() {
                this.equipmentTitle = this.computedEquipment.mod_name;
                console.log(this.equipmentTitle);
            },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                    .then((response) => {
                        this.equipments = response.data;
                        this.equipment = this.equipments[0];
                        this.$store.state.equipment = this.equipment;
                        localStorage.equipment = JSON.stringify(this.equipments[0]);
                        localStorage.mod_id = this.equipment.mod_id;
                        if (!this.equipment.model_name_pivot.toLowerCase().includes(this.model.name.toLowerCase())) {
                            console.log("да");
                            localStorage.color = "";
                            this.$store.state.color = null;
                        }

                        this.equipmentTitle = this.equipment.mod_name;
                        console.log(this.equipment);
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
            },

            descriptionList() {
                try {
                    let desc = this.equipment.description.split('\n');
                    return desc;
                } catch (e) {
                    console.log("selectModel split");
                }

            },

            getFontColor() {
                // console.log(this.computedColor.rgb);
                try {
                    switch (this.computedColor.rgb.toLowerCase()) {
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
                    console.log("Шрифты пролетели");
                }

            },

            lightenDarkenColor(col, amt) {

                let usePound = false;

                if (col[0] == "#") {
                    col = col.slice(1);
                    usePound = true;
                }

                let num = parseInt(col, 16);

                let r = (num >> 16) + amt;

                if (r > 255) r = 255;
                else if (r < 0) r = 0;

                let b = ((num >> 8) & 0x00FF) + amt;

                if (b > 255) b = 255;
                else if (b < 0) b = 0;

                let g = (num & 0x0000FF) + amt;

                if (g > 255) g = 255;
                else if (g < 0) g = 0;

                return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

            },

            getGradient(rgb) {
                try {
                    switch (rgb.toLowerCase()) {
                        case '#000000'.toLowerCase():
                        case '#030303'.toLowerCase():
                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 70) + ")";
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

                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 50) + ")";
                        case '#d7dcd9'.toLowerCase():
                        case '#EDE7E1'.toLowerCase():
                        case '#f2f2f0'.toLowerCase():
                        case '#fafafa'.toLowerCase():
                        case '#FFFFFF'.toLowerCase():
                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, -50) + ")";
                        default:
                            return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 20) + ")";
                    }
                } catch (e) {
                    console.log("Градиетны пролетели");
                }
            },

            goToEquipment() {
                this.$router.push({name: 'edit_equipment', params: {id: this.model.id}});
            },

            showMoreInfo() {
                this.showMore = !this.showMore;
            },

            forceRerender() {
                this.renderComponent++;
            },

            activated(trans) {
                this.$store.state.engineAndGear = trans;
                localStorage.transmission = JSON.stringify(trans);

                $(".trans").on('click', function () {
                    $(".trans").removeClass('active');
                    $(this).addClass('active');
                })
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
            margin-bottom: 100px;
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
                margin: 0 20px 68px 74px;
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

        /*.specifications.row {*/
        /*    width: 100%;*/
        /*    margin: 75px 0;*/
        /*    padding: 0 15px;*/
        /*    .price {*/
        /*        .h2 {*/
        /*            font-size: 3.2rem;*/
        /*            margin: 0;*/
        /*        }*/
        /*    }*/
        /*    p {*/
        /*        font-size: 1.6rem;*/
        /*    }*/
        /*    .h1 {*/
        /*        font-size: 4rem;*/
        /*    }*/
        /*    .h1 + span {*/
        /*        font-size: 1.6rem;*/
        /*    }*/
        /*    a {*/
        /*        color: #6c7073;*/
        /*        text-decoration: underline;*/
        /*        font-size: 1.4rem;*/
        /*        align-self: start;*/
        /*    }*/
        /*}*/

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

        section.guarantee {
            margin: 68px 0;
            background-color: #f0f0f0;
            padding: 100px 0;
            color: $font_color;
            header {
                h1 {
                    font-size: 4.8rem;
                    font-weight: bolder;

                }
            }

            .body {
                margin-top: 30px;
                p {
                    width: 60%;
                    margin: auto;
                    font-size: 2.2rem;
                }
                .container.row {
                    margin: 40px auto;
                    div {
                        article {
                            border: 2px solid #ffffff;
                            padding: 70px 20px;
                            position: relative;
                            height: 100%;
                            h4 {
                                position: absolute;
                                padding: 2px 40px;
                                top: 30px;
                                left: 0;
                                font-size: 1.4rem;
                                font-weight: bold;
                                height: 22px;
                                background-color: #fff;
                                /*border-bottom: 1px solid $font_color;*/
                                /*box-sizing: border-box;*/
                                .corn {
                                    width: 22px;
                                    height: 22px;
                                    border: 11px solid #ffffff;
                                    border-right: 11px solid #f0f0f0;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                }
                            }

                            h2 {
                                font-size: 3.2rem;
                                font-weight: bold;
                                margin-bottom: 15px;
                            }

                            p {
                                font-size: 1.7rem;
                                color: #6c7073;
                                font-weight: 100;
                                margin: 0 0 22px;
                                width: 100%;
                            }

                            a {
                                font-size: 1.3rem;
                                color: #6c7073;
                                text-decoration: underline;
                                &.more {
                                    display: block;
                                    width: calc(100% - 40px);
                                    position: absolute;
                                    bottom: 0;
                                    padding: 10px 0;
                                    border-top: 1px solid #e4e4e4;
                                    box-sizing: border-box;
                                    color: #595D60;
                                    text-align: center;
                                }
                            }

                            .more_info {
                                h3 {
                                    font-size: 1.6rem;
                                    font-weight: bold;
                                    margin-bottom: 15px;
                                }
                                ul {
                                    padding: 0;
                                    list-style-type: none;
                                    font-size: 1.4rem;
                                    color: #989A9D;
                                    margin-bottom: 25px;
                                    li {
                                        margin-top: 25px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        section.assistance {
            padding: 68px 0;
            color: $font_color;
            header {
                width: 50%;
                h1 {
                    font-size: 4.8rem;
                    font-weight: bold;
                }
            }

            .body {
                width: 50%;
                margin: 30px auto;
                p {
                    font-size: 2.2rem;
                    margin-bottom: 30px;
                }
                small {
                    color: #595D60;
                    font-size: 1.3rem;
                    margin-bottom: 15px;
                }

                .contact {
                    margin: 50px 0;
                    h4 {
                        margin-top: 10px;
                        font-size: 1.8rem;
                        font-weight: bold;
                    }
                    h5 {
                        i {
                            display: inline-block;
                            margin-right: 15px;
                            font-size: 1.5rem;
                        }
                        a {
                            font-size: 1.5rem;
                            color: $font_color;
                        }
                    }
                }

                button.btn.btn-danger {
                    @include button;
                    background-color: #E50000;
                    width: auto;
                }

            }
        }

        section.image {
            @include header-xl;
            background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/corolla-sedan-road-assistance-desktop-1440x560_tcm-3046-1833946.jpg);
            max-height: 600px;
            padding: 180px;
            .container {
                .info {
                    width: 50%;
                    color: #ffffff;
                    span {
                        display: block;
                        font-size: 7rem;
                        height: 50px;
                    }
                    p {
                        font-size: 2.2rem;
                    }
                }
            }
            &.rep {
                background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/repairs%20image_tcm-3060-1724017_tcm-3046-1673704.jpg);
                .container {
                    .info {
                        color: $font_color;
                    }
                }
            }
        }

        section.sec {
            padding: 68px 0;
            color: $font_color;
            background-color: #f0f0f0;
            header {
                margin-bottom: 30px;
                h1 {
                    font-size: 4.8rem;
                    font-weight: bolder;
                }
            }
            p.container {
                width: 50%;
                font-size: 2.2rem;
                margin-bottom: 30px;
            }
            &.repairs {
                background-color: #fff;
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

            section.assistance {
                header {
                    width: 80%;
                }
                .body {
                    width: 80%;
                }
            }

            section.image {
                @include header-lg;
                padding: 150px 20px;
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

            section.guarantee {
                margin: 30px 0;
                padding: 50px 0;
                color: $font_color;
                header {
                    h1 {
                        font-size: 4rem;
                    }
                }

                .body {
                    p {
                        width: 80%;
                        margin: auto;
                        font-size: 2.2rem;
                    }
                    .container.row {
                        margin: 40px auto;
                        div {
                            margin-top: 30px;
                        }
                    }
                }
            }

            section.assistance {
                padding: 30px 0;
                header {
                    width: 80%;
                    h1 {
                        font-size: 4rem;
                    }
                }

                .body {
                    width: 80%;
                    p {
                        font-size: 2.0rem;
                    }
                }
            }

            section.image {
                @include header-md;
                padding: 80px 20px;
                .container {
                    .info {
                        width: 70%;
                    }
                }
            }

            section.sec {
                padding: 30px 0;
                header {
                    margin-bottom: 30px;
                    h1 {
                        font-size: 4rem;
                    }
                }
                p.container {
                    width: 80%;
                    font-size: 2.0rem;
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
                        width: auto;
                        position: absolute;
                        bottom: -85px;
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

            section.guarantee {
                margin: 30px 0;
                padding: 30px 0;
                header {
                    h1 {
                        font-size: 3.5rem;

                    }
                }

                .body {
                    margin-top: 30px;
                    p {
                        width: 100%;
                        font-size: 2.0rem;
                        padding: 20px;
                    }
                    .container.row {
                        margin: 0 auto;
                        div {
                            margin-top: 30px;
                            article {
                                h4 {
                                    .corn {
                                        top: -30px;
                                    }
                                }
                                h2 {
                                    font-size: 3rem;
                                }
                            }
                        }
                    }
                }
            }

            section.assistance {
                padding: 30px 0;
                header {
                    width: 100%;
                    h1 {
                        font-size: 3.5rem;
                    }
                }

                .body {
                    width: 100%;
                    margin: 30px auto;
                    padding: 0 20px;
                    p {
                        font-size: 1.8rem;
                    }


                    .contact {
                        margin: 50px 0;
                        h4 {
                            margin-top: 10px;
                            font-size: 1.8rem;
                        }
                    }
                }
            }

            section.image {
                @include header-sm;
                padding: 5vw;
                .container {
                    .info {
                        width: 80%;
                        span {
                            font-size: 3.5rem;
                            height: 20px;
                        }
                        p {
                            font-size: 3.5vw;
                        }
                    }
                }
            }

            section.sec {
                padding: 30px 0;
                header {
                    margin-bottom: 30px;
                    h1 {
                        font-size: 3.5rem;
                    }
                }
                p.container {
                    width: 100%;
                    padding: 0 20px;
                    font-size: 1.8rem;
                }
            }
        }
    }


</style>