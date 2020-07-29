<template>
    <section class="container-fluid">
        <header>
            <h1 class="text-center">Toyota підтримує Олімпіаду та Паралімпіаду
                <h2 class="text-center">Сила спорту та руху</h2>
            </h1>
        </header>
        
        <div class="body container text-center">
            <h5>Ми неймовірно раді оголосити про наше партнерство з Міжнародним олімпійським комітетом та Міжнародним паралімпійським комітетом, що триватиме до 2024 року. Протягом наступних 8 років, ми зробимо все від нас залежне, аби Ігри стали більш надихаючими і захопливими, ніж будь-коли раніше. Ми віримо в силу руху, адже це те, що спонукає нас створювати та презентувати світові новітні рішення.</h5>
            <h2 class="font-weight-bolder">Toyota вірить у силу руху</h2>
        </div>

        <div class="video">
            <video width="100%"
                   height="auto"
                   src="http://d1hu588lul0tna.cloudfront.net/toyotaone/uaua/video_tcm-3046-908367.mp4"

                   controls="controls"
                   type="video/mp4"
                   poster="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/videoPlaceholder_tcm-3046-908391.jpg">
            </video>
<!--            src="../../../video/olympic.mp4"-->

<!--            <div class="img_button" @click="openVideo()">-->
<!--                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/videoPlaceholder_tcm-3046-908391.jpg" alt="Підтримуйте свою Toyota у формі, справною і свіжою завдяки повітряним фільтрам салону Toyota">-->
<!--            </div>-->

<!--            <div class="open-video" v-if="showVideo">-->
<!--                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>-->

<!--                <iframe width="100%" height="50%" src="https://www.youtube.com/embed/Skn0N-g7Arw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--            </div>-->
        </div>
        
        
        <div class="body container text-left">
            <p>Ми поділяємо багато цінностей, котрі несе в собі вогонь, який горить у серці кожного спортсмена та постійно надихає на звершення й перемоги. Ми будемо використовувати нашу уяву, цікавість і пристрасть, щоб надихати світ та досягати більшого.</p>

            <p>У тісній співпраці зі спортсменами, спортивними федераціями, олімпійськими та параолімпійськими національними комітетами ми маємо намір змінити Ігри та залишити неабияку спадщину на багато років наперед. Це початок захопливої подорожі, і ми хочемо, щоб усі, від спортсменів на стадіоні й до глядачів удома, стали її частиною.</p>

            <p>Наша місія полягає у тому, щоб підтримувати цінності Олімпійських і Паралімпійських ігор, відзначати силу людського духу та нескориме бажання досягати нових вершин.</p>

            <h2 class="font-weight-bolder">Це тільки початок</h2>

            <p>Ми надзвичайно пишаємося партнерством з організаціями, які дають нам наснагу, та із задоволенням працюємо над тим, щоб позитивно впливати на людей і на суспільство в цілому. Ми сподіваємося, що ви разом з нами сповнитеся ентузіазмом щодо майбутнього Ігор. Це буде неймовірна подорож!</p>
        </div>




    </section>
</template>

<script>
    export default {
        name: "OlympicPartnership",

        data() {
            return {
                showMemo: false,

                showVideo: false,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota підтримує Олімпіаду та Паралімпіаду`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota підтримує Олімпіаду та Паралімпіаду`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Ми неймовірно раді оголосити про наше партнерство з Міжнародним олімпійським комітетом та Міжнародним паралімпійським комітетом, що триватиме до 2024 року.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Ми неймовірно раді оголосити про наше партнерство з Міжнародним олімпійським комітетом та Міжнародним паралімпійським комітетом, що триватиме до 2024 року.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota, Олімпіада, Паралімпіада, спорт, рух, Міжнародний олімпійський комітет, Міжнародний паралімпійський комітет, Ігри`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota, Олимпиада, Паралимпиада, спорт, движение, Международный олимпийский комитет, Международный паралимпийский комитет, Игры`
                    },
                ],
            }
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            show() {
                this.showMemo = !this.showMemo;
            },

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
        margin: 0;
        padding: 0;
        header  {
            @include header-xl;
            /*width: 100%;*/
            /*height: 80vh;*/
            padding-top: 70px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/header_tcm-3046-908181.jpg);
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            h1 {
                /*width: 100%;*/
                /*padding: 15px;*/
                /*margin: 0 auto;*/
                /*font-size: 5.2rem;*/
                /*font-weight: bolder;*/
                /*text-align: left;*/
                color: #ffffff;
                h2 {
                    /*font-size: 3.4rem;*/
                    /*text-align: left;*/
                    /*padding-top: 16px;*/
                }
            }
        }

        .body.container {
            margin: 68px auto;
            color: $font_color;
            h5 {
                font-size: 2.2rem;
                padding-bottom: 68px;
            }
            h2 {
                margin: 68px 0;
                font-size: 4.4rem;
                text-align: center;
            }
            p {
                font-size: 1.5rem;
                color: #595D60;
                margin-bottom: 24px;
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
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            header {
                @include header-lg;
                /*max-height: 60vw;*/
                /*h1 {*/
                /*    width: 100%;*/
                /*}*/
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                @include header-md;
                /*height: 56vh;*/
                /*min-height: 180px;*/
                /*max-height: 480px;*/
                padding-top: 50px;
                h1 {
                    /*width: 100%;*/
                    font-size: 3.5rem;
                    h2 {
                        font-size: 2.5rem;
                        padding-top: 15px;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid {
            header {
                @include header-sm;
                /*min-height: 180px;*/
                /*height: 56vw;*/
                padding-top: 50px;
                /*h1 {*/
                    /*width: 100%;*/
                    /*font-size: 3.5rem;*/
                /*}*/
            h2 {
                font-size: 3rem;
                padding-top: 15px;
            }
            }

            .body.container {
                margin: 30px auto;
                h5 {
                    padding-bottom: 10px;
                }
                h2 {
                    margin: 30px 0;
                    font-size: 4rem;
                }
            }

            .video {
                margin: 20px 0;
                padding: 0;

            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid {
            header {
                @include header-xs;
                width: 100%;
                /*height: auto;*/
                /*min-height: 180px;*/
                /*padding-top: 10px;*/
                /*h1 {*/
                /*    width: 100%;*/
                /*    padding: 10px 15px 120px;*/
                /*    font-size: 2.5rem;*/
                /*}*/
                /*h2 {*/
                /*    font-size: 1.8rem;*/
                /*    padding-top: 5px;*/
                /*}*/
            }

            .body.container {
                margin: 30px auto;
                h5 {
                    font-size: 1.8rem;
                    padding-bottom: 0;
                }
                h2 {
                    margin: 30px 0;
                    font-size: 3rem;
                }
            }


            .video {
                margin: 20px 0;
                padding: 0;

            }
        }
    }

</style>