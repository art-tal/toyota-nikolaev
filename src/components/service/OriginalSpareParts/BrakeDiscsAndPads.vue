<template>
    <section class="container-fluid">
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container text-center">Гальмівні диски та колодки Toyota</h1>-->
<!--            <h2 class="font-weight-bold">Зупиняють надійно та безпечно</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <div class="p header">-->
<!--                Працюючи щодня у звичному режимі чи потребуючи різкої зупинки, гальмівна система автомобіля виконує важливі завдання. Найголовніша функція безпеки у Toyota, тобто здатність зупинятися і сповільнюватися, особливо в несприятливих умовах водіння або за надзвичайних ситуацій, повністю залежить від продуктивності гальм.-->
<!--            </div>-->

<!--            <article>-->
<!--                <header>-->
<!--                    <h1 class="text-center">Як працює гальмівна система?</h1>-->
<!--                </header>-->

<!--                <div class="p">Коли ставите ногу на педаль, гальмівна рідина створює тиск на поршні супортів змушуючи гальмівну колодку притискатися до обох сторін гальмівного диска, котрий обертається разом із колесами автомобіля. Це тертя уповільнює рух авто, зупиняючи його.</div>-->
<!--                <div class="p">З плином часу гальмівні колодки та диски зношуються. Їх необхідно замінювати, адже їздити зі зношеними гальмами може бути надзвичайно небезпечно. Є декілька ознак зношення гальм, про які ви повинні знати. Ось на що потрібно звернути увагу:</div>-->
<!--                <ul>-->
<!--                    <li>Відхилення від руху по прямій при гальмуванні може означати нерівномірне зношування гальмівних колодок</li>-->
<!--                    <li>Зниження швидкості уповільнення</li>-->
<!--                    <li>Гальмівні диски товщиною менше за безпечний мінімум мають бути замінені</li>-->
<!--                </ul>-->

<!--                <div class="row">-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Img-2_tcm-3046-674170.jpg" alt="/">-->
<!--                    </div>-->
<!--                    <div class="col-md-6 col-12">-->
<!--                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Img-1_tcm-3046-674167.jpg" alt="/">-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="p">Встановлення оригінальних гальмівних колодок та дисків Toyota забезпечує необхідний спокій у дорозі, коли ви знаєте, що:</div>-->
<!--                <ul>-->
<!--                    <li>Всі оригінальні гальмівні диски та колодки Toyota виготовлені з якісних матеріалів, розроблені та протестовані для забезпечення максимальної безпеки та продуктивності;</li>-->
<!--                    <li>Гальма працюють ефективно, завдяки тому, що в оригінальних гальмівних колодках Toyota довгий термін експлуатації. Ви можете відчути якість.</li>-->
<!--                    <li>В асортименті є гальмівні системи для кожної моделі Toyota, що забезпечує швидку заміну та ідеальну сумісність;</li>-->
<!--                    <li>Розроблені з використанням глибоких знань про автомобілі Toyota, які є тільки у нас;</li>-->
<!--                    <li>Всі наші гальма Optifit вирізняються конкурентними цінами.</li>-->
<!--                </ul>-->

<!--                <div class="p">Для безпечного керування важливо регулярно перевіряти гальмівні колодки та диски вашого автомобіля в офіційному дилерському центрі Toyota.</div>-->
<!--            </article>-->

<!--        </div>-->


        <div class="video">
            <div class="img_button" @click="openVideo()">
                <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Brakes-video_tcm-3046-702187.jpg" alt="Гальмівні диски та колодки Toyota  Зупиняють надійно та безпечно">
            </div>

            <div class="open-video" v-if="showVideo">
                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/KIUNGfE-v_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </section>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "BrakeDiscsAndPads",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 22,
                // showVideo: false,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Гальмівні диски та колодки Toyota`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Гальмівні диски та колодки Toyota`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Працюючи щодня у звичному режимі чи потребуючи різкої зупинки, гальмівна система автомобіля виконує важливі завдання.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Працюючи щодня у звичному режимі чи потребуючи різкої зупинки, гальмівна система автомобіля виконує важливі завдання.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, toyota, гальма, система, колодки, сервіс, заміна, якість,, Genuine Parts`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, toyota, гальма, система, колодки, сервіс, заміна, якість,, Genuine Parts`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },

        // methods: {
            // openVideo() {
            //     this.showVideo = !this.showVideo;
            //     console.log(this.showVideo);
            // },
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
            padding-top: 120px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Header_tcm-11-674174_tcm-3046-674174.jpg);
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            color: #ffffff;
            h1 {
                /*font-size: 5.4rem;*/
                /*font-weight: bolder;*/
                text-align: center;
            }
            h2 {
                text-align: center;
                /*font-size: 3.4rem;*/
                /*margin-top: 16px;*/
            }
        }

        .body.container {
            color: $font_color;
            .p.header {
                font-size: 2.2rem;
                margin: 68px 0;
            }

            article {
                header {
                    background: none;
                    height: auto;
                    padding: 0;
                    h1 {
                        font-size: 4.4rem;
                        margin-bottom: 40px;
                        color: $font_color;
                    }
                }

                .p {
                    font-size: 1.5rem;
                    margin-bottom: 40px;
                    color: #595D60;
                }

                ul {
                    padding-left: 20px;
                    font-size: 1.5rem;
                    color: #595D60;
                    margin-bottom: 40px;
                    li {
                        margin-bottom: 10px;
                    }
                }

                .row {
                    margin: 68px 0;
                    div {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    section.container-fluid {
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

    @media (max-width: 767.9px) {
        section.container-fluid ::v-deep div {

            header {
                @include header-sm;
                /*min-height: 180px;*/
                max-height: 420px;
                /*height: 56vw;*/
                padding-top: 20px;

                h1 {
                    font-size: 5vw;
                }
                h2 {
                    font-size: 4vw;
                }
            }

            .body.container {
                .p.header {
                    font-size: 2.0rem;
                    margin: 30px 0;
                }

                article {
                    header {
                        height: auto;
                        min-height: auto;
                        h1 {
                            font-size: 3.5rem;
                            margin-bottom: 20px;
                        }
                    }

                    .p {
                        margin-bottom: 20px;
                    }

                    ul {
                        margin-bottom: 20px;
                        li {
                            margin-bottom: 10px;
                        }
                    }

                    .row {
                        margin: 30px 0;
                        div {
                            img {
                                width: 100%;
                                margin-bottom: 20px;
                            }
                        }
                    }
                }
            }

        }
    }

</style>