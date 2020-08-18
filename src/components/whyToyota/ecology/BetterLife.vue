<template>
    <main>
        <menu-ecology></menu-ecology>
        <header>
            <swiper class="swiper" :options="swiperOption">

                <swiper-slide>
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_Carousel_Picture1-1V2_tcm-3046-817965.jpg" alt="Краще життя">-->
                    <img src="../../../img/background/BL_Homepage_Carousel_Picture1-1V2_tcm-3046-617970.jpg" alt="Краще життя">
                    <div class="title">
                        <h1>Краще життя</h1>
                        <h2>Формування майбутнього суспільства в гармонії з природою</h2>
                    </div>
                </swiper-slide>

                <swiper-slide>
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Raising-Awareness_1600x900_tcm-3046-765901.jpg" alt="Краще життя">-->
                    <img src="../../../img/background/Raising-Awareness_1600x900_tcm-3046-765901.jpg" alt="Краще життя">
                    <div class="title">
                        <h1>Підвищення обізнаності</h1>
                        <h2>Винесення питань навколишнього середовища на перше місце у  помислах, планах та діях TOYOTA</h2>
                    </div>

                </swiper-slide>

                <swiper-slide>
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_Carousel_Picture3NEW3_tcm-3046-765902.jpg" alt="Краще життя">-->
                    <img src="../../../img/background/BL_Homepage_Carousel_Picture3NEW3_tcm-3046-765902.jpg" alt="Краще життя">
                    <div class="title">
                        <h1>Біорізноманіття</h1>
                        <h2>Допомога у збереженні екосистеми планети</h2>
                    </div>

                </swiper-slide>

                <swiper-slide>
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_Carousel_Picture4_tcm-3046-816670.jpg" alt="Краще життя">-->
                    <img src="../../../img/background/BL_Homepage_Carousel_Picture4_tcm-3046-816670.jpg" alt="Краще життя">
                    <div class="title">
                        <h1>Прогресивне мислення</h1>
                        <h2>Створення кращого світу для наших дітей</h2>
                    </div>

                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </header>
        <div v-html="pageBody"></div>

<!--        <div class="body container text-left">-->
<!--            <h5>Toyota - не лише компанія, що забезпечує комплексні мобільні рішення. Ми - громадяни світу, й, відповідно, несемо відповідальність за планету, тож мусимо залишити її в кращому стані, ніж отримали. У цьому розділі йдеться про зусилля, яких Toyota докладає для формування майбутнього суспільства в гармонії з природою.</h5>-->

<!--            <blockquote>-->
<!--                <p>"Лише продовжуючи бути лідером у царині захисту навколишнього середовища, ми зможемо досягти успіху."</p>-->

<!--                <cite>Дідьє Лерой, виконавчий віце-президент TMC</cite>-->
<!--            </blockquote>-->

<!--            <h2>Підвищення обізнаності</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Аби досягти мети зі створення кращого світу для дітей, слід роз'яснити їм важливість проблем довкілля. Тож це - один із основних напрямів нашої роботи. Паралельно ми підвищуємо поінформованість щодо екологічної проблематики наших працівників, а також членів територіальних громад, поряд з якими ми працюємо. Як ми це робимо? Для цього у нас є екологічна кампанія "Зелений місяць" еко-акція "Купив автомобіль? - Посади дерево". У цьому розділі ви дізнаєтесь про те, що поєднує усі ці дуже різні елементи на шляху до досягнення нашої мети з поширення знань.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_infogaphics1-ok_tcm-3046-766178.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Прогресивне мислення</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Раніше люди жили в гармонії з природою. Але у теперішні часи зв'язок значно послабився. Наслідком стали природні катаклізми, на кшталт глобального потепління. Тож нам слід повернутися до першооснов. Як компанія ми з одного боку потребуємо інновацій та нових шляхів підтримання якості життя (економіка), з іншого - збереження і навіть відновлення природи (екологія).</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_infogaphics3-ok_tcm-3046-766180.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->


    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    import MenuEcology from "./../../../components/whyToyota/ecology/MenuEcology";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "BetterLife",

        components: {
            MenuEcology,
            Swiper,
            SwiperSlide
        },

        mixins: [
            PageBody
        ],

        metaInfo() {
            return {
                // title:  `Toyota | Краще життя з Toyota | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota | Краще життя з Toyota | Toyota Україна`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Toyota - не лише компанія, що забезпечує комплексні мобільні рішення. Ми - громадяни світу, й, відповідно, несемо відповідальність за планету.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Toyota - не лише компанія, що забезпечує комплексні мобільні рішення. Ми - громадяни світу, й, відповідно, несемо відповідальність за планету.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        data() {
            return {
                id: 33,

                swiperOption: {
                    spaceBetween: 0,
                    slidesPerView: 1,
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
    @import '../../../styles/variables';

    main {
        header {
            width: 100%;
            height: auto;
            padding: 0;
            margin: 0;
            .swiper {
                height: auto;
                width: 100%;
                position: relative;

                .swiper-slide {
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-weight: bold;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    .title {
                        position: absolute;
                        top: 100px;
                        left: 100px;
                        z-index: 100;
                        text-align: left;
                        h1 {
                            font-size: 5.2rem;
                            font-weight: bold;
                            margin-bottom: 15px;
                            width: auto;
                            color: #ffffff;
                        }
                        h2 {
                            font-size: 3.5rem;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }



                }

                .swiper-button-prev, .swiper-button-next {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: rgba(0,0,0, 0.6);
                    &:after {
                        font-size: 2.0rem;
                        font-weight: 900;
                        color: #f0f0f0;
                        padding: 10px;
                    }
                }

                .swiper-button-prev {
                    left: 50px;
                }
                .swiper-button-next {
                    right: 50px;
                }
            }
        }
    }

    main ::v-deep div {
        .body.container {
            margin: 68px auto;
            color: $font_color;
            h5 {
                font-size: 2.2rem;
                margin-bottom: 68px;
            }

            blockquote {
                margin: 100px 0;
                .p {
                    font-size: 2.4rem;
                    &::before {
                        content: "\201C";
                        display: block;
                        font-size: 8rem;
                        height: 30px;
                        margin-bottom: 40px;
                    }
                    &::after {
                        content: "\201D";
                        display: block;
                        text-align: right;
                        font-size: 8rem;
                        height: 10px;
                    }
                }

                cite {
                    font-size: 1.4rem;
                }
            }

            h2 {
                font-size: 4.4rem;
                font-weight: bold;
                margin-bottom: 30px;
            }

            .row {
                margin-bottom: 68px;
                div {
                    .p {
                        font-size: 1.4rem;
                        color: #595D60;
                        margin-bottom: 30px;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        .title {
                            top: 100px;
                            left: 100px;
                            h1 {
                                font-size: 4.5rem;
                            }
                            h2 {
                                font-size: 3rem;
                            }
                        }
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container {
                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 4.4rem;
                    margin: 30px 0;
                }
                blockquote {
                    margin: 30px 0;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        .title {
                            top: 50px;
                            left: 50px;
                            h1 {
                                font-size: 4rem;
                            }
                            h2 {
                                font-size: 3rem;
                            }

                        }
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container {
                margin: 30px auto;
                h5 {
                    font-size: 2rem;
                    line-height: 3rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 4rem;
                    margin: 30px 0;
                }

                blockquote {
                    margin: 30px 0;
                    .p {
                        font-size: 2rem;
                        &::before {
                            font-size: 6rem;
                            margin-bottom: 20px;
                        }
                        &::after {
                            font-size: 6rem;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        .title {
                            top: 30px;
                            left: 30px;
                            h1 {
                                font-size: 3.5rem;
                            }
                            h2 {
                                font-size: 2.5rem;
                            }

                        }
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container {
                margin: 30px auto;
                h5 {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 3rem;
                    margin: 10px 0 30px;
                }

                blockquote {
                    margin: 10px 0 30px;
                    .p {
                        font-size: 2rem;
                        &::before {
                            font-size: 6rem;
                            height: 10px;
                            margin-bottom: 30px;
                        }
                        &::after {
                            font-size: 6rem;
                        }
                    }

                    cite {
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        .title {
                            top: 20px;
                            left: 20px;
                            h1 {
                                font-size: 3rem;
                            }
                            h2 {
                                font-size: 2rem;
                            }

                        }


                    }

                    .swiper-button-prev, .swiper-button-next {
                        width: 30px;
                        height: 30px;
                        &:after {
                            font-size: 1.5rem;
                        }
                    }

                    .swiper-button-prev {
                        left: 10px;
                    }
                    .swiper-button-next {
                        right: 10px;
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container {
                margin: 30px auto;
                h5 {
                    font-size: 1.8rem;
                    line-height: 2.2rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 3rem;
                    margin: 10px 0 30px;
                }

                blockquote {
                    margin: 20px 0 30px;
                    .p {
                        font-size: 2rem;
                        &::before {
                            font-size: 5rem;
                            margin-bottom: 20px;
                        }
                        &::after {
                            font-size: 5rem;
                        }
                    }
                }
            }
        }
    }


</style>