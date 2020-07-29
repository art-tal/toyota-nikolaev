<template>
    <section class="container-fluid">
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container">Оригінальні лампи Toyota</h1>-->
<!--            <h2>Дорога, як на долоні</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <h3 class="text-center">Лампи вашого автомобіля Toyota, що правильно функціонують, є невід'ємним елементом безпечного керування, особливо в нічний час. Оригінальні лампи Toyota виготовляються відповідно до високих стандартів якості, забезпечуючи безпеку в дорозі.</h3>-->

<!--            <article>-->
<!--                <header>-->
<!--                    <h1 class="text-center">Лампи Optiwhite (з оптично висвітленого скла)</h1>-->
<!--                </header>-->

<!--                <div class="row">-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Img-1_tcm-3046-688384.jpg" alt="Оригінальні лампи Toyota">-->
<!--                    </div>-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Img-2_tcm-3046-688385.jpg" alt="Оригінальні лампи Toyota">-->
<!--                    </div>-->
<!--                </div>-->


<!--            </article>-->
<!--            <article>-->
<!--                <div class="p">Нові стильні лампи Toyota Optiwhite підвищують рівень безпеки за будь-яких погодних умов, даруючи спокій у дорозі та привабливий зовнішній вигляд.</div>-->

<!--                <h4 class="font-weight-bold">Чому варто обирати лампи Optiwhite для Toyota:</h4>-->
<!--                <ul>-->
<!--                    <li>Підвищений рівень яскравості, контрастності та відблиску</li>-->
<!--                    <li>Чітка та поліпшена видимість за будь-яких умов</li>-->
<!--                    <li>Тривалий період експлуатації</li>-->
<!--                </ul>-->

<!--            </article>-->


<!--            <article>-->
<!--                <header>-->
<!--                    <h1 class="text-center">Лампи OptiWhite</h1>-->
<!--                </header>-->
<!--                <div class="p">Удосконалена конструкція галогених ламп OptiWhite ‒ це те, чого ви раніше не бачили. Вони не лише забезпечують кращу видимість, надаючи у два рази більше світла, ніж звичайні галогенові лампи, але й мають поліпшені екологічні характеристики.</div>-->
<!--                <h4 class="font-weight-bold">Оригінальні лампи Toyota OptiWhite володіють низкою переваг:</h4>-->
<!--                <ul>-->
<!--                    <li>Відмінні світлові характеристики для вашої безпеки та комфорту</li>-->
<!--                    <li>Міцна, стійка до нагрівання та вібрацій конструкція</li>-->
<!--                    <li>Лампи OptiWhite створюють насичений ефект білого ксенонового світла</li>-->
<!--                </ul>-->
<!--                <div class="p">Зверніться до авторизованого сервісного центру. Toyota, щоб замінити наявні лампи на відповідники із технологією Optiwhite вже сьогодні та отримайте відмінну продуктивність кожної поїздки.</div>-->
<!--                <div class="p">Для кожної моделі Toyota існують спеціально розроблені набори ламп. Вони містять найважливіші лампи для заміни у фарах ближнього та дальнього світла, та протитуманних фарах.</div>-->
<!--                <div class="row">-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/standard-galogen-bulbs_tcm-3046-894254.jpg" alt="Оригінальні лампи Toyota">-->
<!--                    </div>-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/optiwhite-bulbs_tcm-3046-894255.jpg" alt="Газорозрядні лампи Toyota ">-->
<!--                    </div>-->
<!--                </div>-->
<!--            </article>-->


<!--        </div>-->


        <div class="video">

            <div class="img_button" @click="openVideo()">
                <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Video_tcm-3046-894252.jpg" alt="Оригінальні лампи Toyota">
            </div>

            <div class="open-video" v-if="showVideo">
                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/LWyglvbefsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </section>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "OriginalLamps",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 19,
                // showVideo: false,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Оригінальні лампи від Toyota`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Оригінальні лампи від Toyota`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Правильні, повністю функціональні лампи вашого автомобіля Toyota ‒ невід&#39;ємний елемент безпечного водіння, особливо в нічний час.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Правильні, повністю функціональні лампи вашого автомобіля Toyota ‒ невід&#39;ємний елемент безпечного водіння, особливо в нічний час.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, Toyota, оригінальні запчастини, лампи, світло, Оptiwhite, ксенон, безпека, ремонт, Genuine Parts`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, Toyota, оригінальні запчастини, лампи, світло, Оptiwhite, ксенон, безпека, ремонт, Genuine Parts`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
        //
        // methods: {
        //     openVideo() {
        //         this.showVideo = !this.showVideo;
        //         console.log(this.showVideo);
        //     },
        // }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;
    }

    section.container-fluid ::v-deep div {
        /*padding: 0;*/
        /*margin: 0;*/

        header {
            @include header-xl;
            height: 420px;
            /*width: 100%;*/
            padding-top: 100px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Header-toyota-genuine-bulbs_tcm-3046-688373.jpg);
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            color: #ffffff;

            h1 {
                text-align: center;
                /*font-size: 5.4rem;*/
                /*font-weight: bolder;*/
                /*text-align: left;*/
            }

            h2 {
                text-align: center;
                /*font-size: 3.4rem;*/
                /*margin-top: 16px;*/
            }
        }

        .body.container {
            color: $font_color;
            h3 {
                margin: 68px 0;
                font-size: 1.6rem;
                font-weight: bold;
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
                    padding: 0;
                    margin-bottom: 68px;
                    img {
                        width: 100%;
                    }
                }

                .p {
                    font-size: 1.5rem;
                    color: #595D60;
                    margin-bottom: 24px;
                }

                h4, ul {
                    font-size: 1.5rem;
                    color: #595D60;
                    margin: 24px 0;
                }

                ul {
                    padding-left: 20px;
                    li {
                        margin-bottom: 10px;
                    }
                }
            }
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
            height: 100%;
            z-index: 999;
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



    @media (max-width: 767.9px) {
        section.container-fluid ::v-deep div {

            header {
                @include header-sm;
                /*min-height: 180px;*/
                max-height: 420px;
                /*height: 56vw;*/
                padding-top: 20px;

                /*h1 {*/
                /*    font-size: 3rem;*/
                /*}*/
                /*h2 {*/
                /*    font-size: 2.5rem;*/
                /*}*/
            }

            .body.container {
                h3 {
                    margin: 30px 0;
                    font-size: 1.8rem;
                }

                article {
                    margin: 30px 0;
                    header {
                        margin-bottom: 30px;
                        min-height: auto;
                        h1 {
                            font-size: 3rem;
                        }
                    }

                    .row {
                        margin-bottom: 30px;
                        img {
                            margin-bottom: 24px;
                        }
                    }
                }
            }
        }
    }

</style>