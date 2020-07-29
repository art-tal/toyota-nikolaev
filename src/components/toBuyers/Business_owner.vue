<template>
    <main class="container-fluid">
        <sidebar></sidebar>
<!--        <div v-html="pageBody.body"></div>-->

        <header>
            <h1 class="container text-left">{{pageTitle}}</h1>
        </header>

        <div class="body container text-left">
            <div class="p">{{pageExcerpt}}</div>
<!--            <div class="p">-->
<!--                Якщо ви працюєте на себе, або ж у Вас власний малий бізнес і Ви бажаєте поповнити Ваш автопарк новим автомобілем, Toyota BusinessPlus з легкістю допоможе Вам. У рамках великої дилерської мережі Toyota, наші професійні консультанти готові запропонувати найвигідніші умови придбання та обслуговування Ваших автомобілів.-->
<!--            </div>-->

            <h2>Причини для роботи з Toyota BusinessPlus</h2>

            <div class="carousel">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <img src="//collection.toyota.ua/toyota-bp.jpg" alt="Slide 1">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="//collection.toyota.ua/business-to-business-hybrid-1140x360.jpg" alt="Slide 2">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="//s3-eu-west-1.amazonaws.com/tme-toyotaone-prev/toyotaone/glen/Business_tcm-10-721315.jpg" alt="Slide 3">
                    </swiper-slide>
                </swiper>
            </div>



            <div v-html="pageBody"></div>

<!--            <article class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Фінансові рішення</h3>-->
<!--                    <div class="p">Скористайтеся можливістю придбати автомобіль Toyota за програмою «Тойота Кредит» та застрахувати його за програмою «Тойота Страхування»!</div>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Гібридні автомобілі</h3>-->
<!--                    <div class="p">Toyota пропонує ряд гібридних моделей. Зменшення рівня викидів в атмосферу, паливна економічність та конкурентоспроможна сукупна вартість володіння сприяють підтриманню дружньої атмосфери всередині компанії.</div>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Якість Toyota</h3>-->
<!--                    <div class="p">Всесвітньо відома якість, надійність і довговічність Toyota.</div>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Розвинена дилерська мережа</h3>-->
<!--                    <div class="p">Завдяки використанню оригінальних запасних частин, якісному сервісному обслуговуванню та унікальному досвіду дилерська мережа надовго збереже належний технічний стан Вашого автомобіля.</div>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Широкий модельний ряд</h3>-->
<!--                    <div class="p">Програма Toyota Business Plus пропонує клієнтам ― як власникам малого підприємства, так і менеджерам великого автопарку ― широкий вибір автомобілів відповідно до їхніх потреб.</div>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h3>Досвід Toyota</h3>-->
<!--                    <div class="p">Професійні знання підготовлених техніків, роблять їх фахівцями у всіх автомобілях Toyota та гібридних автомобілях.</div>-->
<!--                </div>-->

<!--            </article>-->
        </div>

        <fragnet-lineup></fragnet-lineup>
    </main>
</template>

<script>
    import Sidebar from "../permanent/Sidebar";
    import FragnetLineup from "../toBuyers/FragnetLineup";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';
    import PageBody from "../../mixins/mixinPages";
    // import Article from "@/components/whyToyota/Article";

    export default {
        name: "Business_owner",

        mixins: [
            PageBody
        ],

        components: {
            FragnetLineup,
            Sidebar,
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
                id: 6,

                swiperOption: {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Бізнес для бізнесу  | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Бізнес для бізнесу  | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Якщо ви - приватний підприємець або маєте свій невеликий бізнес та бажаєте оновити Ваш автопарк, Toyota підкаже коли саме Вам найкраще це зробити.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Якщо ви - приватний підприємець або маєте свій невеликий бізнес та бажаєте оновити Ваш автопарк, Toyota підкаже коли саме Вам найкраще це зробити.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `автомобіль компанії, бізнес, продажі, асортимент, фінанси, продукти, послуги, гібрид,службовий автомобіль,корпоративный автомобиль, бизнес, продажи, ассортимент, финансы, продукты, услуги, гибридные, Toyota BusinessPlus`,
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `автомобіль компанії, бізнес, продажі, асортимент, фінанси, продукти, послуги, гібрид,службовий автомобіль,корпоративный автомобиль, бизнес, продажи, ассортимент, финансы, продукты, услуги, гибридные, Toyota BusinessPlus`,
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
        header {
            @include header-xl;
            /*height: 80vh;*/
            /*width: 100%;*/
            padding-top: 50px;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/b2b-1600x900_tcm-3046-906751.jpg');
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            /*h1 {*/
                /*font-size: 5.4rem;*/
                /*font-weight: bolder;*/
                //color: $font_color;
            /*}*/
        }

        .body.container {
            padding: 50px 0;
            color: $font_color;
            .p {
                font-size: 2.0rem;
                margin-bottom: 50px;
            }
            h2 {
                font-size: 4.4rem;
                margin-bottom: 40px;
                text-align: center;
                font-weight: bolder;
            }
            .carousel {
                margin-bottom: 50px;
            }
        }

    }

    main.container-fluid {

        .body.container ::v-deep div {


            article.row {
                div {
                    h3 {
                        font-size: 1.8rem;
                        margin-bottom: 24px;
                        font-weight: bold;
                    }
                    .p {
                        font-size: 1.6rem;
                        color: #595D60;
                    }
                }
            }
        }

    }



    .swiper {
        height: 300px;
        width: 100%;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: bold;
            background-color: white;
        }
    }



    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid {
            header {
                @include header-lg;
                height: 80vh;
                /*max-height: 60vw;*/
                h1 {
                    font-size: 5rem;
                }
            }

            .body.container {
                h2 {
                    font-size: 4.0rem;
                }
            }
        }

        .swiper {
            height: 40vw;
            .swiper-slide {
                img {
                    width: 100%;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid {
            header {
                @include header-md;
                /*height: 56vw;*/
                /*min-height: 180px;*/
                /*max-height: 480px;*/
                padding-top: 30px;
                /*h1 {*/
                    /*font-size: 4.5rem;*/
                /*}*/
            }

            .body.container {
                padding: 50px 0;
                color: $font_color;
                .p {
                    font-size: 2.0rem;
                    margin-bottom: 50px;
                }
                h2 {
                    font-size: 4.0rem;
                }
                .carousel {
                    margin-bottom: 50px;
                }
            }

        }

        .swiper {
            height: 30vw;
            width: 100%;

            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-weight: bold;
                background-color: white;
                img {
                    width: 100%;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid {
            header {
                @include header-sm;
                height: 40vh;
                /*min-height: 180px;*/
                padding-top: 20px;
                /*h1 {*/
                /*    font-size: 3.5rem;*/
                /*}*/
            }

            .body.container {
                padding: 30px 0;
                .p {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }
                h2 {
                    font-size: 3.0rem;
                    margin-bottom: 20px;
                }
                .carousel {
                    margin-bottom: 20px;
                }
            }
        }


        main.container-fluid {
            .body.container ::v-deep div {
                article.row {
                    div {
                        h3 {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }


        .swiper {
            height: 30vw;

            .swiper-slide {
                img {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid {
            header {
                @include header-xs;
                height: 30vh;
                /*min-height: 180px;*/
                max-height: 380px;
                padding-top: 15px;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body.container {
                padding: 30px 15px;
                .p {
                    font-size: 1.6rem;
                    margin-bottom: 20px;
                }
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }
                .carousel {
                    margin-bottom: 20px;
                }
            }

        }


        main.container-fluid {
            .body.container ::v-deep div {
                article.row {
                    div {
                        h3 {
                            font-size: 1.8rem;
                            margin-bottom: 10px;
                        }
                        .p {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }


        .swiper {
            height: 30vw;
            width: 100%;

            .swiper-slide {
                img {
                    width: 100%;
                }
            }
        }
    }


</style>