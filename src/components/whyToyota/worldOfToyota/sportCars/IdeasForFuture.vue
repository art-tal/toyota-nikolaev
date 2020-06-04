<template>
    <section>
        <header class="container-fluid">
            <div class="wrap">
                <h1>Ідеї щодо майбутнього<br>
                    Історія спорткарів Toyota (частина 8)
                </h1>

                <div class="series d-flex justify-content-around">
                    <!--                    <hr/>-->
                    <span>СЕРІЯ HERITAGE</span>
                    <!--                    <hr/>-->
                </div>
            </div>
            <div class="header-image">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/3-BG_tcm-3046-795006.jpg" alt="photo">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/2-Copy_tcm-3046-795005.png" alt="toyota">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/1-Car_tcm-3046-795004.png" alt="cars">
            </div>
        </header>

        <div class="body container">
            <h4>Представлений на Детройтському автосалоні 2014 року, вражаючий концепт-кар Toyota FT-1 є найвищою формою вираження дизайну Toyota. Створений з опорою на спортивну спадщину, він покликаний продемонструвати, який вигляд може мати наше майбутнє.</h4>
            <div class="block_right">
                <h5>Майбутня Toyota номер 1</h5>
                <p>Передньомоторна компоновка FT-1 у поєднанні із заднім приводом дала змогу змістити кабіну назад, завдяки чому покращився розподіл ваги. До того ж, у результаті автомобіль отримав пропорції класичного спорткара. Велике переднє скло, що наче огортає салон, та отвори у бокових вікнах – данина спадщині 2000GT зразка 1967 року.</p>
                <p>Сміливіший і простіший дизайн FT-1 став результатом прагнення компанії вдихнути у моделі Toyota більше енергії і пристрасті. Прискорення процесу пішло на користь FT-1, а вихід моделі припав на 40-ву річницю дизайнерської студії Toyota під назвою Calty Design Research зі Сполучених Штатів Америки.</p>
            </div>

            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/2-FT-1-Rear_tcm-3046-795012.jpg" alt="car" class="w-100">
            <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/3-FT-1-Rearwing_tcm-3046-795013.jpg" alt="light" class="w-50">
            <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/4-FT-1-Engine_tcm-3046-795014.jpg" alt="wheel" class="w-50">

            <div class="block_right">
                <h5>Автомобіль і водій як одне ціле</h5>
                <p>Модель S-FR зразка 2015 року є результатом нашого багатого досвіду виготовлення легких, приємних у керуванні спорткарів, а робота над створенням концепт-кара початкового рівня дала змогу знову вивести на передній план чутливість та інформативність керування. Мета – змусити все нове покоління знову полюбити водіння.</p>
                <p>Легкий і компактний кузов S-FR з традиційними для спорткара подовженим капотом, широкою поставою і короткими звисами приховує двигун з переднім розташуванням, який так подобається знаючим водіям, та задньоприводну компоновку і незалежну підвіску.</p>
                <p>Такий зосереджений підхід гарантує всі переваги плавності ходу, чутливості, та виняткової керованості і забезпечує відчуття реального взаємозв’язку та близьких стосунків між автомобілем і водієм.</p>

            </div>

            <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/5-S-FR-front34_tcm-3046-795020.jpg" alt="car" class="w-100">
            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/6-S-FR-rear_tcm-3046-795021.jpg" alt="light" class="w-50">
            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/7-S-FR-Interior_tcm-3046-795022.jpg" alt="wheel" class="w-50">

            <div class="block_right">
                <p>З урахуванням спортивної спадщини, що здатна викликати заздрість у будь-якого автовиробника, а також спрямування основних зусиль компанії на виготовлення ще кращих і приємніших у керуванні автомобілів та звабливих натяків на подальші перспективи майбутнє спорткарів Toyota може стати таким самим яскравим і незабутнім, як і багата на пам’ятні моменти історія.</p>
            </div>
        </div>

        <div class="container-fluid carousel-img">
            <div class="carousel" @click="show()">
                <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                    <swiper-slide v-for="(img, key) in images" :key="key">
                        <img :src="img" alt="photo">
                        <span><i class="fas fa-search"></i></span>
                    </swiper-slide>


                    <div class="swiper-button-prev" slot="button-prev" @click.stop=""></div>
                    <div class="swiper-button-next" slot="button-next" @click.stop=""></div>
                </swiper>
            </div>

            <div class="carousel_view" v-if="showCarousel">
                <i class="fas fa-times" @click="show()"></i>
                <!--                <swiper class="swiper" :options="swiperOption">-->
                <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                    <swiper-slide v-for="(img, key) in images"
                                  :key="key"
                                  :style="'background-image: url(' + img + ')'"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>

        <continue></continue>

        <div class="next_part container-fluid">
            <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/8-Footer-History_tcm-3046-794996.jpg" alt="next car">

            <router-link
                    tag="header"
                    exact
                    to="/world_of_toyota/history_of_toyota_sports_cars"
            >
                <h2>
                    Історія спорткарів Toyota<br>
                    Родовід тривалістю понад 50 років
                </h2>
            </router-link>


        </div>

    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import Continue from "./../../../../components/whyToyota/worldOfToyota/sportCars/Сontinue";

    export default {
        name: "IdeasForFuture",

        components: {
            Continue,
            Swiper,
            SwiperSlide,
        },

        data() {
            return {

                showCarousel: false,

                images: [
                    "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/FT-1-Front34-FULL_tcm-3046-795857.jpg",
                    "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/FT-1-Interior-FULL_tcm-3046-795861.jpg",
                    "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/FT-1-Rear-FULL_tcm-3046-795865.jpg",
                    "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/FT-1-Rearwing-FULL_tcm-3046-795869.jpg",
                    "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/S-FR-Front34-FULL_tcm-3046-795873.jpg",
                    "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/S-FR-Front-FULL_tcm-3046-795877.jpg",
                    "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/S-FR-Interior-FULL_tcm-3046-795881.jpg",
                    "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/S-FR-Rear34-FULL_tcm-3046-795905.jpg",
                    "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/FT-1-Engine-FULL_tcm-3046-795853.jpg",
                ],


                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: true,
                    loopedSlides: 4, // looped slides should be the same
                    spaceBetween: 0,
                    centeredSlides: true,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            }
        },

        metaInfo() {
            return {
                title:  `Toyota | Ідеї щодо майбутнього – історія спорткарів Toyota`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota | Ідеї щодо майбутнього – історія спорткарів Toyota`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Представлений на Детройтському автосалоні 2014 року, вражаючий концепт-кар Toyota FT-1 являє собою найвищу форму вираження дизайну Toyota. Створений з опорою на спортивну спадщину, він покликаний продемонструвати, як може виглядати наше майбутнє.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Представлений на Детройтському автосалоні 2014 року, вражаючий концепт-кар Toyota FT-1 являє собою найвищу форму вираження дизайну Toyota. Створений з опорою на спортивну спадщину, він покликаний продемонструвати, як може виглядати наше майбутнє.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota, спорт, спорткари, FT1, FT-1, SFR, S-FR, купе, майбутнє, ідея, історія, характеристики, дизайн, Corolla, Heritage, GT86`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota, спорт, спорткари, FT1, FT-1, SFR, S-FR, купе, майбутнє, ідея, історія, характеристики, дизайн, Corolla, Heritage, GT86`
                    },
                ],
            }
        },

        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },

        methods: {
            show() {
                this.showCarousel = !this.showCarousel;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }

    section {
        color: $font_color;
        header.container-fluid {
            margin: 0;
            padding: 0;
            .wrap {
                background: linear-gradient(to bottom,#CCC 0,#FFF 80%);
                padding: 68px 0;
                h1 {
                    width: 40%;
                    margin: auto;
                    font-size: 3.4rem;
                    line-height: 5.5rem;
                    margin-bottom: 50px;
                    &:first-line {
                        font-size: 4.4rem;
                        font-weight: bolder;
                    }
                }

                .series {
                    position: relative;
                    &::before {
                        content: "";
                        display: block;
                        width: 100px;
                        height: 1px;
                        background: rgba(0,0,0,.2);
                        position: absolute;
                        left: -webkit-calc(50% - 235px);
                        left: -moz-calc(50% - 235px);
                        left: calc(50% - 235px);
                        top: 20px;
                    }
                    &::after {
                        content: "";
                        display: block;
                        width: 100px;
                        height: 1px;
                        background: rgba(0,0,0,.2);
                        position: absolute;
                        right: -webkit-calc(50% - 235px);
                        right: -moz-calc(50% - 235px);
                        right: calc(50% - 235px);
                        top: 20px;
                    }
                    span {
                        display: block;
                        padding: 11px 20px;
                        color: #ffffff;
                        background-color: #c50018;
                        font-size: 1.5rem;
                        letter-spacing: 4px;
                    }

                }
            }
            .header-image {
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                    &:nth-child(2) {
                        position: absolute;
                        bottom: 20px;
                        left: 0;
                    }
                    &:last-child {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
        }

        .body.container {
            margin: 68px auto;
            h4 {
                font-size: 2.2rem;
                margin-bottom: 68px;
            }

            .block_right {
                padding-left: 25%;
                text-align: left;
                margin-bottom: 68px;
                h5 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 24px;
                    margin-top: 30px;
                }
                p {
                    font-size: 1.8rem;
                    margin-bottom: 24px;
                    margin-top: 24px;
                }
            }

            img {
                width: 100%;
            }
        }

        .container-fluid.carousel-img {
            margin: 0;
            padding: 0;
            /*position: relative;*/
            h2 {
                font-size: 4.4rem;
                margin-bottom: 40px;
                font-weight: bold;
            }

            .swiper.gallery-thumbs {
                height: 200px;
                width: 100%;

                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-weight: bold;
                    overflow: hidden;
                    position: relative;
                    /*font-size: $font-size-huge * 2;
                    background-color: $white;*/
                    img {
                        width: 100%;

                    }
                    img + span {
                        position: absolute;
                        top: calc(50% - 24px);
                        left: calc(50% - 24px);
                        display: none;
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        padding: 13px 10px;
                        background-color: rgba(0,0,0,0.5);
                        i {
                            color: #ffffff;
                            font-size: 2rem;
                        }
                    }
                    &:hover {
                        img {
                            transform: scale(1.2);
                            transition-property: all;
                            transition-duration: 1s;
                            cursor: pointer;
                        }
                        img + span {
                            display: block;
                        }
                    }
                }

                .swiper-button-prev {
                    color: #ffffff;
                    left: 50px;
                }
                .swiper-button-next {
                    color: #ffffff;
                    right: 50px;
                }
            }

            .carousel {
                .swiper {
                    height: 200px;
                }
            }

            .carousel_view {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 998;
                background-color: #fff;
                i {
                    position: absolute;
                    z-index: 999;
                    top: 20px;
                    right: 20px;
                    color: #ffffff;
                    font-size: 3rem;
                }
                .swiper.gallery-top {
                    width: 100%;
                    height: 100%;
                    .swiper-slide {
                        background-repeat: no-repeat;
                        background-position: center center;
                        -webkit-background-size: cover;
                        background-size: cover;
                    }
                }
            }


        }

        .next_part.container-fluid {
            padding: 0;
            position: relative;
            img {
                width: 100%;
            }
            header {
                position: absolute;
                top: 100px;
                left: 0;
                width: 100%;
                color: $font_color;
                cursor: pointer;
                h2 {
                    font-size: 3.5rem;
                    line-height: 7rem;
                    font-weight: bold;
                    &:first-line {
                        font-size: 5.2rem;
                        font-weight: bolder;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 60%;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 80%;
                    }
                }
            }
            .next_part.container-fluid {
                header {
                    position: absolute;
                    top: 50px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 100%;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    position: absolute;
                    top: 30px;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section {
            header.container-fluid {
                .wrap {
                    padding: 40px 0;
                    h1 {
                        width: 100%;
                        font-size: 3rem;
                        line-height: 4.5rem;
                        margin-bottom: 40px;
                        &:first-line {
                            font-size: 3.5rem;
                        }
                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h4 {
                    font-size: 2.0rem;
                    margin-bottom: 10px;
                }

                .block_right {
                    padding: 15px;
                    margin-bottom: 30px;
                    h5 {
                        font-size: 1.8rem;
                    }
                    p {
                        font-size: 1.6rem;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    top: 30px;
                    h2 {
                        font-size: 2.5rem;
                        line-height: 4rem;
                        &:first-line {
                            font-size: 3.5rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section {
            header.container-fluid {
                .wrap {
                    padding: 40px 0;
                    h1 {
                        width: 100%;
                        font-size: 2rem;
                        line-height: 3.5rem;
                        margin-bottom: 30px;
                        &:first-line {
                            font-size: 3rem;
                        }
                    }

                    .series {
                        &::before {
                            width: 0;
                        }
                        &::after {
                            width: 0;
                        }
                        span {
                            font-size: 1.3rem;
                        }

                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h4 {
                    font-size: 1.8rem;
                    margin-bottom: 0;
                }

                .block_right {
                    padding: 0;
                    margin-bottom: 30px;
                    h5 {
                        font-size: 1.6rem;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }
                    p {
                        font-size: 1.4rem;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    top: 10px;
                    h2 {
                        font-size: 2.5rem;
                        line-height: 3.5rem;
                        &:first-line {
                            font-size: 3rem;
                        }
                    }
                }
            }
        }
    }

</style>