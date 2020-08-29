<template>
    <div class="container-fluid">
        <header>
            <h1>СВІТ «TOYOTA»</h1>
        </header>

        <section class="body container">
            <header>
                <h1>Новини, статті, звіти про події</h1>
                <div class="row search_news justify-content-center">

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
<!--                        <div class="img" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + article.image + ')'"></div>-->
                        <img class="img" :src="'http://lara.toyota.nikolaev.ua/storage/' + article.image">
                        <div class="category" v-if="article.category_id === 8" style="border-color: forestgreen; color: forestgreen">Новини</div>
                        <div class="category" v-else-if="article.category_id === 9" style="border-color: #E50000; color: #E50000">Новинки</div>
                        <div class="category" v-else-if="article.category_id === 10" style="border-color: blueviolet; color: blueviolet">Акції</div>
                        <h3>{{article.title}}</h3>
                        <p>{{article.excerpt}}</p>
                    </article>

                </div>
            </div>
        </section>

        <section class="advertisement container">
            <header>
                <h1>Акційні пропозиції</h1>
            </header>
            <div class="body row">
                <img src="../../../img/advertisement/photo_2020-08-28_10-33-49.jpg" alt="" class="d-block col-4" @click="goToImage('photo_2020-08-28_10-33-49.jpg')">
                <img src="../../../img/advertisement/photo_2020-08-28_16-05-01.jpg" alt="" class="d-block col-4" @click="goToImage('photo_2020-08-28_16-05-01.jpg')">
                <img src="../../../img/advertisement/photo_2020-08-28_16-05-02.jpg" alt="" class="d-block col-4" @click="goToImage('photo_2020-08-28_16-05-02.jpg')">
            </div>

        </section>

        <section class="advertisement_view container-fluid position-fixed" v-if="showAdvertisement" @click.self="showAdvertisement = false">
            <i class="far fa-times-circle position-absolute" @click.stop="showAdvertisement = false"></i>
            <div class="image_wrap">
                <img :src="require('../../../img/advertisement/' + getAdvertisement)" alt="Advertisement" class="advertisement_img">
            </div>
        </section>
</div>
</template>

<script>
    import axios from "axios"
    import $ from "jquery"

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

                advertisement: '',
                showAdvertisement: true,
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
            this.size();
            $(window).on("resize", () => {
                this.size();
            });
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

            getAdvertisement() {
                this.size();
                return this.advertisement;
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
            },

            goToImage(url) {
                this.advertisement = url;
                this.showAdvertisement = true;
                console.log(this.advertisement);
                console.log(this.showAdvertisement);
            },

            size() {
                let imgWidth = $('.advertisement_img').width();
                // let imgHeight = $('.advertisement_img').height;
                console.log(imgWidth);
                if( imgWidth > window.innerWidth ) {
                    $(".advertisement_img").css("width", "100%");
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
            background-image: url(../../../img/background/Toyota-2014-Cityscape-1600x900_tcm-3046-72516.jpg);
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
                            /*height: 300px;*/
                            background-repeat: no-repeat;
                            background-position: center center;
                            /*-webkit-background-size: cover;*/
                            /*background-size: cover;*/
                            -webkit-background-size: 100%;
                            background-size: 100%;
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

        section.advertisement.container {
            margin-top: 50px;
            header {
                background: none;
                height: auto;
                margin-bottom: 30px;
                h1 {
                    padding-top: 0;
                    font-size: 3.5rem;
                }
            }

            .body.row {
                img {
                    position: relative;
                    width: 100%;
                    &:hover {
                        transform: scale(2);
                        z-index: 500;
                        transition-property: all;
                        transition-duration: 1s;
                    }
                }
            }
        }

        section.advertisement_view.container-fluid {
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background-color: rgba(255,255,255,0.7);
            z-index: 1000;
            i {
                top: 15px;
                right: 15px;
                font-size: 2.5rem;
                color: #595D60;
            }
            .image_wrap {
                width: auto;
                height: auto;
                margin: auto;
                img {
                    height: 100vh;
                }
            }
        }

    }

    @media (max-width: 767.9px) {
        .container-fluid {

            section.body.container {
                header {
                    background-image: url(../../../img/background-sm/Toyota-2014-Cityscape-1600x900_tcm-3046-72516.jpg);
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
                                /*height: 300px;*/
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