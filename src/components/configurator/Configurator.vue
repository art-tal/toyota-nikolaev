<template>
    <main class="configurator">
        <sub-navigation></sub-navigation>

        <nav class="navbar navbar-expand navbar-light">

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <div class="navbar-nav">

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/selected_engine"
                    >
                        <b class="font-weight-bold align-middle">1</b>
                        <span>Комплектація та двигун</span>
                    </router-link>

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/color_and_option"
                    >
                        <b class="font-weight-bold align-middle">2</b>
                        <span>Колір та оснащення</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/result"
                    >
                        <b class="font-weight-bold align-middle">3</b>
                        <span>Підсумок</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>
                </div>
            </div>
        </nav>

        <router-view></router-view>

        <article class="attention container text-left">
            <header>
                <h2>Зверніть увагу</h2>
            </header>
            <ul class="body text-justify">
                <li>Конфігуратор автомобілів Toyota призначений для надання користувачам інформації, що відображає специфікацію та вартість автомобілів, що їх цікавлять.</li>
                <li>Зображення, що подано у конфігураторі автомобілів, можуть містити додаткове обладнання, яке не входить до складу обладанння типової комплектації. За довідками про актуальні технічні характеристики та наявність просимо звертатися до офіційного дилерського центру Toyota.</li>
                <li>Звертаємо вашу увагу на те, що на сайті не вказано ціни на вартість встановлення додаткового обладнання (аксесуарів).</li>
                <li>Стосовно додаткового обладнання / аксесуарів вказано ціни, які дилерам рекомендовано не перевищувати (рекомендовані), з урахуванням ПДВ (20%).</li>
                <li>Усі ціни вказані без врахування вартості додаткових опцій та/або послуг та спеціальних акцій і пропозицій, які можуть діяти на момент придбання продукції. Інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.</li>
                <li>Нами було докладено всіх зусиль до подання точної інформації, але при цьому ми зберігаємо за собою право без попередження вносити зміни до технічних характеристик, складу обладнання та вилучати з асортименту певні позиції. Ця інформація не має трактуватися як безпомилкова, й як така не являє собою ні оферти на продаж конкретного транспортного засобу (або додаткового обладнання / аксесуарів), ані переліку його технічних характеристик.</li>
                <li>Усі права зберігаються за правовласником. Назви комплектацій є суто умовними, використовуються виключно заради зручності в розподілі наборів параметрів автомобіля та можуть відрізнятися або бути відсутніми в інших документах або матеріалах.</li>
            </ul>
        </article>

    </main>
</template>

<script>
    import SubNavigation from "../cars/SubNavigation";

    export default {
        name: "Configurator",

        data() {
            return {
                id_mod: localStorage.id,//this.$route.params.id_params.id_mod,
                id_equip: localStorage.mod_id,//this.$route.params.id_params.id_equip,
                modelTitle: "",
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | ${this.modelTitle}, конфігуратор автомобілей`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, конфігуратор автомобілей`
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
            // this.$router.push({name: "selected_engine"});
            this.modelTitle = JSON.parse(localStorage.model).name;
        },

        components:{
            SubNavigation,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }

    .configurator {
        width: 100%;
        /*height: 56px;*/
        border-bottom: $border;
        menu {
            margin: 0;
            padding: 0;
        }
        nav {
            position: sticky;
            top: 0;
            left: 0;
            background-color: #fff;
            z-index: 998;
            color: $font_color;
            border-bottom: 1px solid #F0F0F0;
            div.collapse {
                align-content: center;
                a {
                    color: $font_color;
                    font-size: 15px;
                    b {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #F0F0F0;
                        display: inline-block;
                        margin-right: 10px;
                        padding-top: 4px;
                    }
                    &.active {
                        font-weight: bold;
                        b {
                            background-color: #E50000;
                            color: #fff;
                            font-weight: 300;
                        }
                    }
                }
            }
        }

        .attention.container {
            padding: 24px 0 64px;
            header {
                padding: 24px 0 12px;
                h2 {
                    font-size: 1.1rem;
                }

            }
            ul {
                list-style-type: none;
                padding: 0;
                font-size: 1.5rem;
            }
        }

    }

    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {

    }

    @media (max-width: 767.9px) {
        .configurator {
            nav {
                color: $font_color;
                div.collapse {
                    .navbar-nav {
                        width: 50%;
                        justify-content: space-between;
                        a {
                            span {
                                display: none;
                            }
                        }
                    }

                }

            }
            .attention.container {
                padding: 24px 30px 64px;
            }
        }
    }
</style>

<style lang="scss">
    @import '../../styles/variables';

    .sub_navigation.navbar.navbar-expand.navbar-dark {
        background-color: #fff;
        border-bottom: 1px solid #F0F0F0;
        .collapse.navbar-collapse {
            ul.navbar-nav {
                li.nav-item {
                    border: none;
                    a.nav-link {
                        color: #202020;
                    }
                    &.active {
                        border: none;
                        font-weight: bold;
                        a.nav-link {
                            color: #E50000;
                        }
                    }
                }
            }
            .config {
                a.nav-link {
                    /*border-left: 1px solid #202020;*/
                    color: #202020;
                }
                &.active {
                    border: none;
                    font-weight: bold;
                    a.nav-link {
                        color: #E50000;
                    }

                }
            }
        }

    }
</style>