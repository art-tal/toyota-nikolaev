<template>
    <section class="container-fluid">
        <header>
            <h1 class="container">Лобове скло
                <h2 class="font-weight-bold">Для відмінної видимості та повного спокою</h2>
            </h1>
        </header>

        <div class="body container text-left">
            <p class="header">
                Перебуваючи за кермом автомобіля Toyota, важливо бути впевненим, що лобове скло забезпечує відмінну видимість та захист від непередбачуваних обставин.
            </p>

            <p>Пошкодивши лобове скло, водій може звернутись до офіційного дилера Toyota стосовно його відновлення або заміни.<br>
                Впевненість у тому, що Ваш автомобіль Toyota оснащено високоякісним лобовим склом має вирішальне значення для безпеки водія та пасажирів. Результати постійних випробувань з безпеки доводять, що оригінальні лобові стекла Toyota мають найвищу якість.<br>
                Наше лобове скло проходить випробування не лише на довговічність та міцність, а й гарантування бездоганної видимості, шляхом перевірки можливих деформацій поверхні, які можуть привести до оптичних спотворень.</p>


            <div class="video">

                <div class="img_button" @click="openVideo()">
                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Video_tcm-3046-939662.jpg" alt="Оригінальне лобове скло">
                </div>

                <div class="open-video" v-if="showVideo">
                    <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

<!--                    <iframe width="100%" height="50%" src="https://www.youtube.com/embed/Skn0N-g7Arw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                </div>
        </div>

            <article>
                <header>
                    <h1 class="text-center">Впевненість в оригінальних лобових стеклах Toyota:</h1>
                </header>

                <div class="row">

                    <div class="col-md-4 col-12">
                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Icon-1_tcm-3046-939655.jpg" alt="оригінальні лобові стекла Toyota">
                        <h3 class="font-weight-bold">Підвищений рівень безпеки</h3>
                        <p>Забезпечуючи захист від непередбачуваних обставин, оригінальні лобові стекла Toyota надають додатковий захист пасажирам під час руху.</p>
                    </div>

                    <div class="col-md-4 col-12">
                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Icon-2_tcm-3046-939657.jpg" alt="оригінальні лобові стекла Toyota">
                        <h3 class="font-weight-bold">Відмінна якість</h3>
                        <p>Оригінальні лобові стекла Toyota створюють акустичний барєр, а також забезпечують тепловий комфорт, УФ-фільтрацію та високу оптичну якість для відмінної видимості.</p>
                    </div>

                    <div class="col-md-4 col-12">
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Icon-3_tcm-3046-939659.jpg" alt="оригінальні лобові стекла Toyota">
                        <h3 class="font-weight-bold">Ідеальна сумісність</h3>
                        <p>Наше лобове скло спеціально розроблене для автомобілів Toyota й оптимізоване для інтеграції із системою безпеки Toyota Safety Sense. </p>
                    </div>

                </div>

                <h5>Працівники офіційного сервісу Toyota завжди готові швидко та якісно відновити або замінити лобове скло. Як фахівці, які знають автомобіль Toyota краще за інших,, вони виконають усі роботи відповідно до прийнятих високих стандартів, що забезпечить Вам спокій в дорозі.</h5>
            </article>

        </div>

    </section>
</template>

<script>
    export default {
        name: "OriginalWindshields",

        data() {
            return {
                showVideo: false,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Оригінальне лобове скло  | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Оригінальне лобове скло  | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Перебуваючи за кермом автомобіля Toyota, важливо бути впевненим, що лобове скло забезпечує відмінну видимість та захист від непередбачуваних обставин.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Перебуваючи за кермом автомобіля Toyota, важливо бути впевненим, що лобове скло забезпечує відмінну видимість та захист від непередбачуваних обставин.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, Toyota, оригінальні запчастини, лобове скло, післяпродажне обслуговування, Genuine Parts`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, Toyota, оригінальні запчастини, лобове скло, післяпродажне обслуговування, Genuine Parts`
                    },
                ],
            }
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            openVideo() {
                this.showVideo = !this.showVideo;
                console.log(this.showVideo);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;

        header {
            height: 420px;
            width: 100%;
            padding-top: 120px;
            background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/header-windscreen_tcm-3046-939609.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: $font_color;

            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                color: #ffffff;
                text-align: left;

                h2 {
                    font-size: 3.4rem;
                    margin-top: 16px;
                }
            }
        }

        .body.container {
            color: $font_color;

            p {
                font-size: 1.5rem;
                color: #595D60;
                margin-bottom: 68px;
                &.header {
                    font-size: 2.2rem;
                    margin: 68px 0;
                }
            }

            article {
                margin: 68px 0;
                header {
                    background: none;
                    height: auto;
                    padding: 0;
                    margin-bottom: 40px;
                    h1 {
                        color: $font_color;
                        font-size: 4.4rem;
                    }
                }

                .row {
                    div {
                        img {
                            width: 100%;
                            margin-bottom: 15px;
                        }
                        h3 {
                            font-size: 1.5rem;
                            margin-bottom: 30px;
                        }
                    }
                }

                h5 {
                    font-size: 1.8rem;
                    line-height: 1.5;
                }
            }

            .video {
                margin: 20px 0;
                padding: 0;
                .img_button {
                    width: 100%;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .open-video {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: 999;
                    background-color: #fff;
                    opacity: 1;
                    .close {
                        width: 100%;
                        padding: 10px 20px;
                        background-color: #000000;
                        color: #f0f0f0;
                        font-size: 2rem;
                        opacity: 1;
                    }
                    iframe {
                        width: 100%;
                        height: calc(100% - 40px);
                    }
                }

            }
        }

    }



    @media (max-width: 767.9px) {
        section.container-fluid {

            header {
                min-height: 180px;
                max-height: 420px;
                height: 56vw;
                padding-top: 20px;

                h1 {
                    font-size: 5vw;
                    h2 {
                        font-size: 4vw;
                    }
                }
            }

            .body.container {
                p {
                    margin-bottom: 30px;
                    &.header {
                        font-size: 2.0rem;
                        margin: 30px 0;
                    }
                }

                article {
                    margin: 30px 0;
                    header {
                        height: auto;
                        min-height: auto;
                        margin-bottom: 20px;
                        h1 {
                            font-size: 3.5rem;
                        }
                    }

                    .row {
                        div {
                            img {
                                margin-bottom: 0;
                            }
                            h3 {
                                font-size: 1.5rem;
                                margin-bottom: 15px;
                            }
                        }
                    }

                    h5 {
                        font-size: 1.6rem;
                    }
                }
            }



        }
    }

</style>