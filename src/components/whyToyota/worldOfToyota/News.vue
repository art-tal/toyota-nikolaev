<template>
    <div class="container-fluid">
        <header>
            <h1>СВІТ «TOYOTA»</h1>
        </header>

        <section class="body container">
            <header>
                <h1>Новини, статті, звіти про події, огляди в пресі</h1>
                <div class="row search_news justify-content-center">
<!--                    <div class="selected_theme col-lg-6 col-12 mb-3">-->
<!--                        <p class="drop_menu text-left d-flex justify-content-between align-items-center" @click="openDropMenu()">-->
<!--                            <span>Виберіть тему</span>-->
<!--                            <i class="fas fa-chevron-up text-right" v-if="dropDown"></i>-->
<!--                            <i class="fas fa-chevron-down text-right" v-else></i>-->
<!--                        </p>-->

<!--                        <form class="down-menu row" aria-labelledby="navbarDropdown" v-if="dropDown">-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="olympics" type="checkbox"-->
<!--                                       value="olympics"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="olympics">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Olympics-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="toyotaowner" type="checkbox"-->
<!--                                       value="Toyotaowner"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="toyotaowner">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Toyotaowner-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="carOfYear" type="checkbox"-->
<!--                                       value="coty"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="carOfYear">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Авто року-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="motorshows" type="checkbox"-->
<!--                                       value="motorshows"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="motorshows">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Автомобільні виставки-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="heritage" type="checkbox"-->
<!--                                       value="heritage"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="heritage">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Віхи історії-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="hybrid" type="checkbox"-->
<!--                                       value="hybrid"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="hybrid">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Гібриди-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="dream_car" type="checkbox"-->
<!--                                       value="dream-car-art-contest"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="dream_car">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Конкурс «Автомобіль твоєї мрії»-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="skills_contest" type="checkbox"-->
<!--                                       value="skills-contest"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="skills_contest">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Конкурси майстерності-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="enviroment" type="checkbox"-->
<!--                                       value="Enviroment"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="enviroment">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Навколишнє середовище-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="dealers_news" type="checkbox"-->
<!--                                       value="dealers-news"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="dealers_news">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Новини дилерів-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="new_arrivals" type="checkbox"-->
<!--                                       value="new-arrivals"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="new_arrivals">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Новинки у салонах-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="sales_results" type="checkbox"-->
<!--                                       value="sales-results"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="sales_results">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Обсяги збуту-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="accessories_original" type="checkbox"-->
<!--                                       value="Оригінальні запчастини"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="accessories_original">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Оригінальні аксесуари-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="original_spare_parts" type="checkbox"-->
<!--                                       value="Оригінальні запчастини"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="original_spare_parts">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Оригінальні запчастини-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="original_spare_parts_accessories" type="checkbox"-->
<!--                                       value="true"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="original_spare_parts_accessories">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Оригінальні запчастини та аксесуари-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="ichiban_award" type="checkbox"-->
<!--                                       value="ichiban-award"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="ichiban_award">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Премія «Ichiban»-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="service" type="checkbox"-->
<!--                                       value="maintenance-offers"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="service">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Сервіс-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="social_projects" type="checkbox"-->
<!--                                       value="social-projects"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="social_projects">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Соціальні проекти-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="special_offers" type="checkbox"-->
<!--                                       value="special-offers"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="special_offers">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Спеціальні пропозиції-->
<!--                                </label>-->
<!--                            </div>-->

<!--                            <div class="form-group checkbox col-6 text-left">-->
<!--                                <input class="form-control"-->
<!--                                       id="sports_events" type="checkbox"-->
<!--                                       value="sports-events"-->
<!--                                       v-model="themes"-->
<!--                                >-->
<!--                                <label for="sports_events">-->
<!--                                    <span class="check"><i class="fas fa-check"></i></span>-->
<!--                                    Спортивні заходи-->
<!--                                </label>-->
<!--                            </div>-->


<!--                            <div class="form-group reset col-12 text-left">-->
<!--                                <input class="form-control btn btn-light"-->
<!--                                       id="reset" type="reset"-->
<!--                                       value="Скинути вибір"-->
<!--                                >-->

<!--                            </div>-->
<!--                        </form>-->
<!--                    </div>-->
                    <div class="search col-lg-6 col-12 mb-3">
                        <form class="form-inline my-2 my-lg-0 d-flex">
                            <input class="form-control mr-sm-2"
                                   type="search" placeholder="Search"
                                   aria-label="Search"
                                   v-model="search"
                            >
                            <button class="btn btn-dark my-2 my-sm-0"
                                    @click.prevent="searchNews()"
                            >
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div class="body">
                <div class="categories d-flex w-auto justify-content-center">
                    <div class="news form-group checkbox">
                        <input class="form-control"
                               id="news" type="checkbox"
                               value="8"
                               v-model="categories"
                               @change="changeCheckBox('news')"
                        >
                        <label for="news">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Новини
                        </label>
                    </div>
                    <div class="newcomers form-group checkbox">
                        <input class="form-control"
                               id="newcomers" type="checkbox"
                               value="9"
                               v-model="categories"
                               @change="changeCheckBox('newcomers')"
                        >
                        <label for="newcomers">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Новинки</label>
                    </div>
                    <div class="stocks form-group checkbox">
                        <input class="form-control"
                               id="stocks" type="checkbox"
                               value="10"
                               v-model="categories"
                               @change="changeCheckBox('stocks')"
                        >
                        <label for="stocks">
                            <span class="check"><i class="fas fa-check"></i></span>
                            Акції
                        </label>
                    </div>
                </div>

                <div class="row">

                    <article class="col-md-6 col-12 text-left news"
                             v-for="(article, key) in filtered"
                             :key="key"
                             @click="openArticle(article.id)"
                    >
                        <div class="img" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + article.image + ')'"></div>
                        <div class="category" v-if="article.category_id === 8" style="border-color: forestgreen; color: forestgreen">Новини</div>
                        <div class="category" v-else-if="article.category_id === 9" style="border-color: #E50000; color: #E50000">Новинки</div>
                        <div class="category" v-else-if="article.category_id === 10" style="border-color: blueviolet; color: blueviolet">Акції</div>
                        <h3>{{article.title}}</h3>
                        <p>{{article.excerpt}}</p>
                    </article>

                </div>
            </div>
        </section>
    </div>
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

                categories: [],

                newcomers: 0,
                news: 0,
                stocks: 0,

                newsAll: [],
                newsFiltered: [],
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Новини зі світу Toyota | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Новини зі світу Toyota | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Будьте в курсі останніх новин та подій зі світу Toyota. Огляди в пресі. Дізнайтесь першими про акції, знижки, та спеціальні пропозиції. Дилерські новини.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Будьте в курсі останніх новин та подій зі світу Toyota. Огляди в пресі. Дізнайтесь першими про акції, знижки, та спеціальні пропозиції. Дилерські новини.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, Toyota, новини, тойота, статті, події, звіти, виставки, акції, спеціальні пропозиції, відкриття, дилери, тойота україна, новинии`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, Toyota, новини, тойота, статті, події, звіти, виставки, акції, спеціальні пропозиції, відкриття, дилери, тойота україна, новини`
                    },
                ],
            }
        },

        created() {
            this.getNews();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },

        computed: {
            filtered() {
                if ( this.news === 0 && this.newcomers === 0 && this.stocks === 0 ) {
                    return this.newsAll.filter( newsItem => {
                        return newsItem.title.toLowerCase().includes(this.search.toLowerCase());
                    } );

                }
                else {
                    return this.newsAll
                        .filter( newsItem => {
                            return newsItem.title.toLowerCase().includes(this.search.toLowerCase());
                        } )
                        .filter( newsItem => {
                            return newsItem.category_id === this.news || newsItem.category_id === this.newcomers || newsItem.category_id === this.stocks;
                        } )
                }

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
                    this.newsAll = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки новостей");
                    console.log(error);
                } )
            },

            openArticle(id) {
                this.$router.push( {name: "article", params: {id: id} } );
            },

            changeCheckBox(category) {
                switch (category) {
                    case "news":
                        if(this.news) {
                            this.news = 0;
                        } else {
                            this.news = 8;
                        }
                        break;
                    case "newcomers":
                        if(this.newcomers) {
                            this.newcomers = 0;
                        } else {
                            this.newcomers = 9;
                        }
                        break;
                    case "stocks":
                        if(this.stocks) {
                            this.stocks = 0;
                        } else {
                            this.stocks = 10;
                        }
                        break;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .container-fluid {
        padding: 0;

        header {
            @include header-xl;
            height: 56vh;
            background-image: url("//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Toyota-2014-Cityscape-1600x900_tcm-3046-72516.jpg");
            h1 {
                text-align: center;
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
                    margin-bottom: 30px;
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
                        &.news {
                            border-color: forestgreen;
                            color: forestgreen;
                            label span.check {
                                border-color: lightgreen;
                            }
                        }
                        &.newcomers {
                            border-color: #E50000;
                            color: #E50000;
                            label span.check {
                                border-color: lightcoral;
                            }
                        }
                        &.stocks {
                            border-color: blueviolet;
                            color: blueviolet;
                            label span.check {
                                border-color: violet;
                            }
                        }
                    }
                }
                .row {
                    article.news {
                        margin-bottom: 20px;
                        .img {
                            width: 100%;
                            height: 300px;
                            background-repeat: no-repeat;
                            background-position: center center;
                            -webkit-background-size: cover;
                            background-size: cover;
                        }
                        .category {
                            border: 2px solid;
                            border-radius: 5px;
                            padding: 5px;
                            font-size: 1.6rem;
                        }
                        h3 {
                            font-size: 1.7rem;
                            color: $font_color;
                            margin-top: 24px;
                            font-weight: bold;
                        }
                        p {
                            font-size: 1.6rem;
                            color: #6c7073;
                            padding: 10px 0;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }

    }

    @media (max-width: 767.9px) {
        .container-fluid {

            section.body.container {
                header {
                    margin-bottom: 0;
                    h1 {
                        font-size: 3rem;
                    }


                }
                .body {
                    .categories {
                        margin-bottom: 30px;
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
                            &.news {
                                border-color: forestgreen;
                                color: forestgreen;
                                label span.check {
                                    border-color: lightgreen;
                                }
                            }
                            &.newcomers {
                                border-color: #E50000;
                                color: #E50000;
                                label span.check {
                                    border-color: lightcoral;
                                }
                            }
                            &.stocks {
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
                            .category {
                                border: 2px solid;
                                border-radius: 5px;
                                padding: 5px;
                                font-size: 1.6rem;
                            }
                            h3 {
                                font-size: 1.7rem;
                                color: $font_color;
                                margin-top: 24px;
                                font-weight: bold;
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
    }

</style>