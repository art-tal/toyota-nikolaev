<template>
    <section class="container-fluid">
        <menu-to-spare-parts/>
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container">Повітряні фільтри салону Toyota</h1>-->
<!--            <h2>Секрет чистого повітря</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <div class="p">Пересуваючись сучасними містами та проводячи багато часу у заторах, ніщо не може зрівнятися з насолодою свіжим повітрям. Повітряні фільтри салону відіграють життєво важливу роль у забезпеченні водія та пасажирів чистим повітрям, адже вони запобігають потраплянню у салон автомобіля різноманітних забруднювальних та шкідливих речовин</div>-->

<!--            <div class="row">-->
<!--                <h2 class="col-12">Типи фільтрів</h2>-->
<!--                <article class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Img-1_tcm-3046-674165.jpg" alt="Стандартний повітряний фільтр салону Toyota">-->
<!--                    <h3>Стандартний повітряний фільтр салону Toyota</h3>-->
<!--                    <div class="p">Виготовлений із високоякісного нетканого матеріалу, повітряний фільтр салону допомагає утримати забруднювальні речовини, перш ніж вони потрапляють в салон автомобіля.</div>-->
<!--                </article>-->

<!--                <article class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Img-2_tcm-3046-674168.jpg" alt="Покращений повітряний фільтр салону Toyota">-->
<!--                    <h3>Вугільний повітряний фільтр салону Toyota</h3>-->
<!--                    <div class="p">Виготовлений з того ж матеріалу, що і стандартний фільтр, але оснащений додатковим шаром активованого вугілля, що підвищує його ефективність в утриманні забруднюючих речовин, в тому числі алергенів і вихлопних газів</div>-->
<!--                </article>-->
<!--            </div>-->

<!--            <h5>Підтримуйте свою Toyota у формі, справною і свіжою завдяки повітряним фільтрам салону Toyota та насолоджуйтеся очищеним досвідом водіння.</h5>-->

<!--            <article class="recommended">-->
<!--                <header>-->
<!--                    <h2>Рекомендовано регулярно перевіряти стан фільтру салону кожні 15 000 км пробігу, і ось чому:</h2>-->
<!--                </header>-->
<!--                <ul>-->
<!--                    <li>Повітряні фільтри блокують подразнюючі і шкідливі речовини: пилок, озон, пил і вихлопні гази, щоб запобігти їх негативному впливу на здоров’я водія та пасажирів.</li>-->
<!--                    <li>Вони забезпечують салон свіжим повітрям, роблячи Вашу подорож приємнішою</li>-->
<!--                    <li>Вони підтримують продуктивну роботу системи кондиціонування Вашого автомобіля за будь-яких погодних умов</li>-->
<!--                </ul>-->
<!--            </article>-->

<!--        </div>-->

<div class="memory">
    <h6 class="d-flex" @click="show()">
        <span>Пам'ятка для клієнта</span>
        <i class="fas fa-chevron-up" v-if="showMemo"></i>
        <i class="fas fa-chevron-down" v-else></i>
    </h6>
    <div class="memo" v-if="showMemo">
        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F-toyota-1_tcm-3046-937783.jpg" alt="memo">
    </div>
    <hr>
</div>


        <div class="video">
            <div class="img_button" @click="openVideo()">
<!--                <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Video_tcm-3046-674169.jpg" alt="Підтримуйте свою Toyota у формі, справною і свіжою завдяки повітряним фільтрам салону Toyota">-->
                <img src="../../../img/images/poster/Video_tcm-3046-674169.jpg" alt="Підтримуйте свою Toyota у формі, справною і свіжою завдяки повітряним фільтрам салону Toyota">
            </div>

            <div class="open-video" v-if="showVideo">
                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                <video width="100%"
                       src="../../../video/air_filters_of_salon_toyota.mp4"
                       controls="controls"
                       type="video/mp4"
                       poster="../../../img/images/poster/Video_tcm-3046-674169.jpg">
                </video>
<!--                <iframe width="100%" height="50%" src="https://www.youtube.com/embed/Skn0N-g7Arw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            </div>
        </div>
    </section>
</template>

<script>
    import MenuToSpareParts from "./../../../components/service/OriginalSpareParts/MenuToSpareParts";
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "AirFiltersOfSalon",

        components: {
            MenuToSpareParts
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 17,
                showMemo: false,

                // showVideo: false,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Повітряний фільтр салону | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Повітряний фільтр салону | Toyota Україна`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Пересуваючись сучасними містами та проводячи багато часу у заторах, ніщо не може зрівнятися з насолодою свіжим повітрям. Оригінальні фільтри Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Пересуваючись сучасними містами та проводячи багато часу у заторах, ніщо не може зрівнятися з насолодою свіжим повітрям. Оригінальні фільтри Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, Toyota, фільтр, салон, повітряні фільтри, Genuine Parts`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, Toyota, фільтр, салон, повітряні фільтри, Genuine Parts`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },

        methods: {
            show() {
                this.showMemo = !this.showMemo;
            },

            // openVideo() {
            //     this.showVideo = !this.showVideo;
            //     console.log(this.showVideo);
            // },
        }
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
            /*background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Header_tcm-11-674173_tcm-3046-674173.jpg);*/
            background-image: url(../../../img/background/Header_tcm-11-674173_tcm-3046-674173.jpg);
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
            .p {
                margin: 68px 0;
                font-size: 2.2rem;
            }

            .row {
                h2 {
                    font-size: 4.5rem;
                    font-weight: bolder;
                    text-align: center;
                    margin-bottom: 40px;
                }
                article {
                    margin-bottom: 30px;
                    img {
                        width: 100%;
                        margin-bottom: 50px;
                    }
                    h3 {
                        font-size: 1.8rem;
                        margin-bottom: 24px;
                        font-weight: bold;
                    }

                    .p {
                        font-size: 1.4rem;
                        color: #595D60;
                        margin-bottom: 24px;
                        margin-top: 0;
                    }
                }



            }

            h5 {
                font-size: 1.6rem;
                color: #595D60;
            }

            article.recommended {
                margin-bottom: 68px;
                header {
                    background: none;
                    margin-bottom: 24px;
                    height: auto;
                    padding-top: 0;
                    h2 {
                        font-size: 1.8rem;
                        font-weight: bold;
                    }
                }

                ul {
                    padding-left: 20px;
                    li {
                        font-size: 1.5rem;
                        color: #595D60;
                        margin-bottom: 10px;
                    }
                }
            }
        }



    }

    .memory {
        h6 {
            font-size: 1.5rem;
            margin-bottom: 40px;
            span {
                flex-grow: 1;
            }
            i {
                color: #E50000;
            }
        }

        .memo {
            margin-bottom: 30px;
            img {
                width: 100%;
            }
        }

        hr {
            margin-top: 40px;
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
                background-image: url(../../../img/background-sm/Header_tcm-11-674173_tcm-3046-674173.jpg);
                /*min-height: 180px;*/
                max-height: 420px;
                /*height: 56vw;*/
                padding-top: 20px;

                h1 {
                    font-size: 3rem;
                }
                /*h2 {*/
                /*    font-size: 2.5rem;*/
                /*}*/
            }

            .body.container {
                .p {
                    margin: 30px 0;
                    font-size: 1.8rem;
                }

                .row {
                    h2 {
                        font-size: 3.5rem;
                        margin-bottom: 20px;
                    }
                    article {
                        margin-bottom: 30px;
                        img {
                            margin-bottom: 20px;
                        }
                        h3 {
                            font-size: 1.8rem;
                            margin-bottom: 15px;
                        }
                    }



                }

                article.recommended {
                    margin-bottom: 30px;
                    header {
                        height: auto;
                        min-height: auto;
                        h2 {
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
    }

</style>