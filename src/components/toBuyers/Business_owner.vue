<template>
    <main class="container-fluid">
        <sidebar></sidebar>

        <header>
            <h1 class="container text-left">Власникам бізнесу</h1>
        </header>

        <div class="body container text-left">
            <p>
                Якщо ви працюєте на себе, або ж у Вас власний малий бізнес і Ви бажаєте поповнити Ваш автопарк новим автомобілем, Toyota BusinessPlus з легкістю допоможе Вам. У рамках великої дилерської мережі Toyota, наші професійні консультанти готові запропонувати найвигідніші умови придбання та обслуговування Ваших автомобілів.
            </p>

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
            
            <article class="row">
                <div class="col-md-6 col-12">
                    <h3>Фінансові рішення</h3>
                    <p>Скористайтеся можливістю придбати автомобіль Toyota за програмою «Тойота Кредит» та застрахувати його за програмою «Тойота Страхування»!</p>
                </div>

                <div class="col-md-6 col-12">
                    <h3>Гібридні автомобілі</h3>
                    <p>Toyota пропонує ряд гібридних моделей. Зменшення рівня викидів в атмосферу, паливна економічність та конкурентоспроможна сукупна вартість володіння сприяють підтриманню дружньої атмосфери всередині компанії.</p>
                </div>

                <div class="col-md-6 col-12">
                    <h3>Якість Toyota</h3>
                    <p>Всесвітньо відома якість, надійність і довговічність Toyota.</p>
                </div>

                <div class="col-md-6 col-12">
                    <h3>Розвинена дилерська мережа</h3>
                    <p>Завдяки використанню оригінальних запасних частин, якісному сервісному обслуговуванню та унікальному досвіду дилерська мережа надовго збереже належний технічний стан Вашого автомобіля.</p>
                </div>

                <div class="col-md-6 col-12">
                    <h3>Широкий модельний ряд</h3>
                    <p>Програма Toyota Business Plus пропонує клієнтам ― як власникам малого підприємства, так і менеджерам великого автопарку ― широкий вибір автомобілів відповідно до їхніх потреб.</p>
                </div>

                <div class="col-md-6 col-12">
                    <h3>Досвід Toyota</h3>
                    <p>Професійні знання підготовлених техніків, роблять їх фахівцями у всіх автомобілях Toyota та гібридних автомобілях.</p>
                </div>

            </article>
        </div>

        <fragnet-lineup></fragnet-lineup>
    </main>
</template>

<script>
    import Sidebar from "../permanent/Sidebar";
    import FragnetLineup from "../toBuyers/FragnetLineup";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';
    // import Article from "@/components/whyToyota/Article";

    export default {
        name: "Business_owner",

        components: {
            FragnetLineup,
            Sidebar,
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
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
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    /*@import './base.scss';*/

    main.container-fluid {
        padding: 0;
        header {
            height: 80vh;
            width: 100%;
            padding-top: 50px;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/b2b-1600x900_tcm-3046-906751.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                color: $font_color;
            }
        }

        .body.container {
            padding: 50px 0;
            color: $font_color;
            p {
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

            article.row {
                div {
                    h3 {
                        font-size: 1.8rem;
                        margin-bottom: 24px;
                        font-weight: bold;
                    }
                    p {
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

</style>