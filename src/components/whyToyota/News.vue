<template>
    <main class="container-fluid">
        <menu>
            <nav class="navbar navbar-expand-lg navbar-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >
                                Статті / Новини / Події
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >Олімпійське партнерство</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >TOYOTA GAZOO Racing</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >Toyota на чемпіонаті світу з ралі</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >Історія спорткарів Toyota</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to=""
                            >Toyoda AA</router-link>
                        </li>

                    </ul>
                </div>
            </nav>
        </menu>
        <header>
            <h1>СВІТ «TOYOTA»</h1>
        </header>

        <section class="body container">
            <header>
                <h1>Новини, статті, звіти про події, огляди в пресі</h1>
                <div class="row search_news">
                    <div class="selected_theme col-6">
                        <p class="drop_menu text-left d-flex justify-content-between align-items-center" @click="openDropMenu()">
                            <span>Виберіть тему</span>
                            <i class="fas fa-chevron-up text-right" v-if="dropDown"></i>
                            <i class="fas fa-chevron-down text-right" v-else></i>
                        </p>

                        <form class="down-menu row" aria-labelledby="navbarDropdown" v-if="dropDown">

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="olympics" type="checkbox"
                                       value="olympics"
                                       v-model="themes"
                                >
                                <label for="olympics">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Olympics
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="toyotaowner" type="checkbox"
                                       value="Toyotaowner"
                                       v-model="themes"
                                >
                                <label for="toyotaowner">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Toyotaowner
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="carOfYear" type="checkbox"
                                       value="coty"
                                       v-model="themes"
                                >
                                <label for="carOfYear">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Авто року
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="motorshows" type="checkbox"
                                       value="motorshows"
                                       v-model="themes"
                                >
                                <label for="motorshows">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Автомобільні виставки
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="heritage" type="checkbox"
                                       value="heritage"
                                       v-model="themes"
                                >
                                <label for="heritage">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Віхи історії
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="hybrid" type="checkbox"
                                       value="hybrid"
                                       v-model="themes"
                                >
                                <label for="hybrid">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Гібриди
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="dream_car" type="checkbox"
                                       value="dream-car-art-contest"
                                       v-model="themes"
                                >
                                <label for="dream_car">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Конкурс «Автомобіль твоєї мрії»
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="skills_contest" type="checkbox"
                                       value="skills-contest"
                                       v-model="themes"
                                >
                                <label for="skills_contest">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Конкурси майстерності
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="enviroment" type="checkbox"
                                       value="Enviroment"
                                       v-model="themes"
                                >
                                <label for="enviroment">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Навколишнє середовище
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="dealers_news" type="checkbox"
                                       value="dealers-news"
                                       v-model="themes"
                                >
                                <label for="dealers_news">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Новини дилерів
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="new_arrivals" type="checkbox"
                                       value="new-arrivals"
                                       v-model="themes"
                                >
                                <label for="new_arrivals">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Новинки у салонах
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="sales_results" type="checkbox"
                                       value="sales-results"
                                       v-model="themes"
                                >
                                <label for="sales_results">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Обсяги збуту
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="accessories_original" type="checkbox"
                                       value="Оригінальні запчастини"
                                       v-model="themes"
                                >
                                <label for="accessories_original">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Оригінальні аксесуари
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="original_spare_parts" type="checkbox"
                                       value="Оригінальні запчастини"
                                       v-model="themes"
                                >
                                <label for="original_spare_parts">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Оригінальні запчастини
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="original_spare_parts_accessories" type="checkbox"
                                       value="true"
                                       v-model="themes"
                                >
                                <label for="original_spare_parts_accessories">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Оригінальні запчастини та аксесуари
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="ichiban_award" type="checkbox"
                                       value="ichiban-award"
                                       v-model="themes"
                                >
                                <label for="ichiban_award">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Премія «Ichiban»
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="service" type="checkbox"
                                       value="maintenance-offers"
                                       v-model="themes"
                                >
                                <label for="service">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Сервіс
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="social_projects" type="checkbox"
                                       value="social-projects"
                                       v-model="themes"
                                >
                                <label for="social_projects">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Соціальні проекти
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="special_offers" type="checkbox"
                                       value="special-offers"
                                       v-model="themes"
                                >
                                <label for="special_offers">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Спеціальні пропозиції
                                </label>
                            </div>

                            <div class="form-group checkbox col-6 text-left">
                                <input class="form-control"
                                       id="sports_events" type="checkbox"
                                       value="sports-events"
                                       v-model="themes"
                                >
                                <label for="sports_events">
                                    <span class="check"><i class="fas fa-check"></i></span>
                                    Спортивні заходи
                                </label>
                            </div>


                            <div class="form-group reset col-12 text-left">
                                <input class="form-control btn btn-light"
                                       id="reset" type="reset"
                                       value="Скинути вибір"
                                >

                            </div>
                        </form>
                    </div>
                    <div class="search col-6">
                        <form class="form-inline my-2 my-lg-0 d-flex">
                            <input class="form-control mr-sm-2"
                                   type="search" placeholder="Search"
                                   aria-label="Search"
                                   v-model="search"
                            >
                            <button class="btn btn-dark my-2 my-sm-0"
                                    @click="searchNews()"
                            >
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div class="body">
                <div class="categories d-flex w-auto">
                    <div class="events form-group checkbox">
                        <input class="form-control"
                               id="events" type="checkbox"
                               value="events"
                               v-model="events"
                               checked
                        >
                        <label for="events">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Новини в світі
                        </label>
                    </div>
                    <div class="news form-group checkbox">
                        <input class="form-control"
                               id="news" type="checkbox"
                               value="news"
                               v-model="news"
                               checked
                        >
                        <label for="news">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Новини в Україні</label>
                    </div>
                    <div class="stories form-group checkbox">
                        <input class="form-control"
                               id="stories" type="checkbox"
                               value="stories"
                               v-model="stories"
                               checked
                        >
                        <label for="stories">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Статті
                        </label>
                    </div>
                </div>

                <div class="row">

                    <article class="col-6 text-left" v-for="(article, key) in filtered" :key="key">
                        <div class="img" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + article.image + ')'"></div>
<!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + article.image" alt="post">-->
                        <div class="category">{{article.category_id}}</div>
                        <h3>{{article.title}}</h3>
                        <p>{{article.excerpt}}</p>
                    </article>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from "axios"

    export default {
        name: "News",

        data() {
            return {
                dropDown: false,

                themes: [],
                search: "",

                events: "events",
                news: "news",
                stories: "stories",

                newsAll: [],
                newsFiltered: [],


                // olympics: "",
                // toyotaowner: "",
                // carOfYear: "",
                // motorshows: "",
                // heritage: "",
                // hybrid: "",
                // dream_car: "",
                // skills_contest: "",
                // enviroment: "",
                // dealers_news: "",
                // new_arrivals: "",
                // sales_results: "",
                // accessories_original: "",
                // original_spare_parts: "",
                // original_spare_parts_accessories: "",
                // ichiban_award: "",
                // social_projects: "",
                // special_offers: "",
                // sports_events: "",
            }
        },

        created() {
            this.getNews();
        },

        computed: {
            filtered() {
                return this.newsAll
                .filter( newsItem => {
                    return newsItem.category_id !== null; //|| newsItem.category === "events" || newsItem.category === "news" || newsItem.category === "stories"
                    // return  newsItem.category === "events" || newsItem.category === "news" || newsItem.category === "stories"
                } )
            },
        },

        watch: {
            themes() {
                console.log(this.themes);
                return this.themes;
            },
        },


        methods: {
            openDropMenu() {
                this.dropDown = !this.dropDown;
            },

            searchNews() {},

            getNews() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/news"
                )
                .then( (response) => {
                    console.log(response.data);
                    this.newsAll = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки новостей");
                    console.log(error);
                } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
        menu {
            width: 100%;
            /*padding-left:30px;*/
            position: sticky;
            top: 0;
            z-index: 998;
            left: 0;
            background-color: #fff;
            border-bottom: 1px solid #f0f0f0;
            padding: 5px 10px 5px 50px;
            margin: 0;
            nav.navbar {
                background-color: #fff;
                font-size: 1.5rem;

                .collapse.navbar-collapse {
                    ul.navbar-nav {
                        li.nav-item {
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
        header {
            height: 56vh;
            background-image: url("//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Toyota-2014-Cityscape-1600x900_tcm-3046-72516.jpg");
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1 {
                font-size: 5.2rem;
                font-weight: bolder;
                color: #ffffff;
                padding-top: 130px;
            }
        }

        section.body.container {
            header {
                background: none;
                height: auto;
                margin-top: 50px;
                margin-bottom: 50px;
                h1 {
                   color: $font_color;
                    font-size: 4.4rem;
                    padding: 0;
                    margin-bottom: 30px;
                }
                .row.search_news {
                    .selected_theme {
                        position: relative;
                        p.drop_menu {
                            @include inputForm;
                            padding-right: 10px;
                            margin-bottom: 0;
                            i {
                                color: #E50000;
                                font-size: 1.3rem;
                            }
                        }
                        form.down-menu {
                            padding: 15px 0 15px 0;
                            background-color: #f7f7f7;
                            width: 100%;
                            margin: 0 !important;
                            .checkbox {
                                label {
                                    font-size: 1.6rem;
                                    span.check {
                                        vertical-align: top;
                                        display: inline-block;
                                        margin-right: 15px;
                                        width: 20px;
                                        height: 20px;
                                        border: 2px solid #e0e0e0;
                                        border-radius: 3px;
                                        i.fa-check {
                                            display: none;
                                            position: relative;
                                            bottom: 4px;
                                            left: 2px;
                                            color: #E50000;
                                            font-size: 1.4rem;
                                        }
                                    }
                                }
                                input[type="checkbox"] {
                                    display: none;
                                    &:checked + label {
                                        span i.fa-check {
                                            display: inline-block;
                                        }
                                    }
                                }

                            }
                            .reset {
                                input {
                                    @include button;
                                    height: auto;
                                    width: 100%;
                                    background-color: #cccccc;
                                }
                            }
                        }
                    }

                    .search {
                        form {
                            input {
                                @include inputForm;
                                height: 40px;
                                width: auto;
                                flex-grow: 1;
                                margin-right: 10px !important;
                            }
                            button.btn {
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                font-size: 1.8rem;
                            }
                        }
                    }
                }

            }
            .body {
                .categories {
                    .checkbox {
                        padding: 8px;
                        margin-right: 15px;
                        border-radius: 5px;
                        border: 2px  solid;
                        label {
                            font-size: 1.6rem;
                            margin: 0;
                            span.check {
                                vertical-align: top;
                                display: inline-block;
                                margin-right: 15px;
                                width: 20px;
                                height: 20px;
                                border: 2px solid #e0e0e0;
                                border-radius: 3px;
                                i.fa-check {
                                    display: none;
                                    position: relative;
                                    bottom: 3px;
                                    font-size: 1.6rem;
                                }
                            }
                        }
                        input[type="checkbox"] {
                            display: none;
                            &:checked + label {
                                span i.fa-check {
                                    display: inline-block;
                                }
                            }
                        }
                        &.events {
                            border-color: forestgreen;
                            color: forestgreen;
                            label span.check {
                                border-color: lightgreen;
                            }
                        }
                        &.news {
                            border-color: #E50000;
                            color: #E50000;
                            label span.check {
                                border-color: lightcoral;
                            }
                        }
                        &.stories {
                            border-color: blueviolet;
                            color: blueviolet;
                            label span.check {
                                border-color: violet;
                            }
                        }
                    }
                }
                .row {
                    article {
                        margin-bottom: 20px;
                        .img {
                            width: 100%;
                            height: 300px;
                            background-repeat: no-repeat;
                            background-position: center center;
                            -webkit-background-size: cover;
                            background-size: cover;
                        }
                        h3 {
                            font-size: 1.7rem;
                            color: $font_color;
                            margin-top: 24px;
                        }
                        p {
                            font-size: 1.6rem;
                            color: #6c7073;
                            padding: 10px 0;
                        }
                    }
                }
            }
        }

    }
</style>