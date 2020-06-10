<template>
    <article class="container-fluid">
        <header :style="'background-image: url(' + photo + ')'">
            <h1>{{article.title}}</h1>
        </header>
        <div class="body container">
            <div v-html="article.body"></div>
        </div>
    </article>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Article",

        data() {
            return {
                id: 0,
                article: {},

            }
        },

        metaInfo() {
            return {
                title:  `${this.art.seo_title}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `${this.art.seo_title}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `${this.art.meta_description}`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `${this.art.meta_description}`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `${this.art.meta_keywords}`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `${this.art.meta_keywords}`
                    },
                ],
            }
        },

        created() {
            this.id = this.$route.params['id'];
            console.log(this.id);
            this.getArticle();
        },

        computed: {
            photo() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.article.image;
            },

            art() {
                return this.article;
            },

            excerpt() {
                return this.article.excerpt;
            },
        },

        methods: {
            getArticle() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/news",
                    { params: {id: this.id} }
                )
                .then( (responce) => {
                    this.article = responce.data[0];
                    console.log(this.article);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки статьи");
                    console.log(error);
                } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.container-fluid {
        padding: 0;
        margin: 0;
        header {
            height: 80vh;
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            margin-bottom: 50px;
            h1 {
                font-size: 4.4rem;
                color: #ffffff;
                font-weight: bolder;
                padding-top: 150px;
            }
        }

        .body.container {
            text-align: left;
            color: $font_color;
            font-size: 1.6rem;
            div {
                h2 {
                    font-size: 2.2rem;
                    font-weight: bold;
                }
                p {
                }
            }
        }
    }



    @media (max-width: 767.9px) {
        article.container-fluid {
            header {
                height: 56vw;
                h1 {
                    font-size: 3.5rem;
                    padding-top: 50px;
                }
            }
        }
    }

</style>