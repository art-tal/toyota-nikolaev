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
                        <span>Комплектация и двигатель</span>
                    </router-link>

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/color_and_option"
                    >
                        <b class="font-weight-bold align-middle">2</b>
                        <span>Цвет и коплектация</span>
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
                        <span>Итог</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>
                </div>
            </div>
        </nav>

        <router-view></router-view>

        <article class="attention container text-left">
            <header>
                <h2>Обратите внимание</h2>
            </header>
            <ul class="body text-justify">
                <li>Конфигуратор автомобилей Toyota предназначен для предоставления пользователям информации, отражающей спецификацию и стоимость автомобилей, их вопросы.</li>
                <li>Изображение, представлены в конфигураторе автомобилей, могут содержать дополнительное оборудование, которое не входит в состав обладанння типичной комплектации. За справками об актуальных технических характеристиках и наличии просим обращаться к официального дилерского центра Toyota.</li>
                <li>Обращаем ваше внимание на то, что на сайте не указаны цены на стоимость установки дополнительного оборудования (аксессуаров). </li>
                <li>Относительно дополнительного оборудования / аксессуаров указаны цены, которые дилерам рекомендовано не превышать (рекомендуемые), с учетом НДС (20%). </li>
                <li>Все цены указаны без учета стоимости дополнительных опций и / или услуг и специальных акций и предложений, которые могут действовать на момент приобретения продукции. Информация может не быть окончательным и подлежит уточнению у соответствующего дилерского центра Toyota.</li>
                <li>Нами были приложены все усилия для представления точной информации, но при этом мы сохраняем за собой право без предупреждения вносить изменения в технические характеристики, состав оборудования и изымать из ассортимента определенные позиции. Эта информация не имеет трактоваться как безошибочная, и как таковая не представляет собой ни оферты на продажу конкретного транспортного средства (или дополнительного оборудования / аксессуаров), ни перечня его технических характеристик. </li>
                <li>Все права сохраняются за правообладателем. Названия комплектаций является чисто условным, используются исключительно ради удобства в распределении наборов параметров автомобиля и могут отличаться или отсутствовать в других документах или материалах.</li>
            </ul>
        </article>

    </main>
</template>

<script>
    import SubNavigation from "../MainNav/SubNavigation";

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
                title:  `Toyota Nikolaev | ${this.modelTitle}, конфигуратор автомобилей`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, конфигуратор автомобилей`
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