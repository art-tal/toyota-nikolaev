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
                title:  `Toyota Nikolaev | ${this.title}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.title}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `${this.excerpt}`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `${this.excerpt}`
                    },
                    // {
                    //     vmid: "keywords",
                    //     name: "keywords",
                    //     content: `toyota, тест-драйв, тест драйв, тестдрайв, тайота, купить, дилер, `
                    // },
                    // {
                    //     vmid: "keywords",
                    //     property: "og:keywords",
                    //     content: `toyota, тест-драйв, тест драйв, тестдрайв, тайота, купить, дилер, `
                    // },
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

            title() {
                return this.article.title;
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
    @import '../../styles/variables';

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