<template>
    <main>
        <menu-ecology></menu-ecology>
        <header>
            <swiper class="swiper" :options="swiperOption">


                <swiper-slide>
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Carousel%201_tcm-3046-569048.jpg" alt="Краща планета">
                    <h1 style="color: #202020">Краща планета
                        <h2>Утилізація відходів - ключ до захисту наших природних ресурсів</h2>
                    </h1>
                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section-1_carousel_picture-4OK_tcm-3046-569049.jpg" alt="Краща планета">
                    <h1 style="color: #202020">Краща планета
                        <h2>Утилізація відходів - ключ до захисту наших природних ресурсів</h2>
                    </h1>
                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Carousel%203_tcm-3046-569047.jpg" alt="Краща планета">
                    <h1 style="color: #202020">Краща планета
                        <h2>Утилізація відходів - ключ до захисту наших природних ресурсів</h2>
                    </h1>
                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_carousel_tcm-3046-569046.jpg" alt="Краща планета">
                    <h1 style="color: #202020">Краща планета
                        <h2>Утилізація відходів - ключ до захисту наших природних ресурсів</h2>
                    </h1>
                </swiper-slide>


                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </header>
        <div v-html="pageBody"></div>

<!--        <div class="body container text-left">-->
<!--            <h5>Ми в Toyota безупинно шукаємо шляхи зменшення нашого впливу на довкілля. У розділі Краща планета ви дізнаєтесь, що ми зробили, робимо і плануємо здійснити у майбутньому, аби досягти гармонії між людьми, продуктами та планетою.</h5>-->

<!--            <h2>Чотири рятівні човни для Кращої планети</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Toyota встановила пріоритет у розробці методів виробництва та транспортних засобів, які мають менший вплив на довкілля. Наше кредо - це чотири рятівні човни: скорочення, вторинне використання, переробка та відновлення. Ці прості слова точно характеризують наші спроби покращити ситуацію з довкіллям шляхом вдосконалення процесу розробки та виробництва транспортних засобів і їхньої експлуатації, а також їхньої безпечної утилізації після закінчення строку використання.</p>-->
<!--                    <p>Кредо у вигляді чотирьох рятівних човнів допомагає мінімізувати використання цінних природних ресурсів та скоротити викиди вуглецю. Це також допомагає дбати про те, як зробити майбутні автомобілі більш чистими та ефективнішими, використовуючи інноваційні матеріали та альтернативні енергоджерела. Цей підхід веде нас до нашої мети - найсучаснішого екологічного автомобіля, який має нульовий вплив на довкілля на кожному етапі свого життєвого циклу.</p>-->
<!--                </div>-->
<!--                -->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section1_Infographic_EInvertedPyramide_tcm-3046-524340_tcm-3046-524340.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section1_Frames_REDUCE_picture1_tcm-3046-569325.jpg" alt="">-->
<!--                    <h3>Скорочення</h3>-->
<!--                    <p>Скорочувати споживання у світі.</p>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_carousel_picture-4ok_555x249_tcm-3046-569324.jpg" alt="">-->
<!--                    <h3>Вторинне використання</h3>-->
<!--                    <p>Продовжувати ресурс та срок використання продукту.</p>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section1_Frames_RECYCLE_picture3_tcm-3046-569323.jpg" alt="">-->
<!--                    <h3>Переробка</h3>-->
<!--                    <p>Переробляти для скорочення споживання первинних матеріалів.</p>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_carousel-555x249_tcm-3046-569322.jpg" alt="">-->
<!--                    <h3>Відновлення</h3>-->
<!--                    <p>Відновлювати для мінімізації відходів.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Скорочення</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Скорочення - це зменшення споживання та пом'якшення впливу на довкілля. Це стосується всієї діяльності Toyota, від проектування автомобілів, яке зменшує вплив на довкілля до виробничих процесів, де досягається економія ресурсів і мінімізується забруднення.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section2_Infographic%26Picture%2520Mixed_tcm-3046-524350_tcm-3046-524350.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section2_Infographic%2520Frames_Infographic1_tcm-3046-524352_tcm-3046-524352.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section2_Infographic%2520Frames_Infographic2_tcm-3046-524364_tcm-3046-524364.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section2_Infographic-Frames_Infographic3_tcm-3046-524377_tcm-3046-524377.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section2_Infographic%2520Frames_Infographic4_tcm-3046-524392_tcm-3046-524392.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Вторинне використання</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-6">-->
<!--                    <p>Елементи, які неможливо виключити з виробничого процесу, слід використовувати багаторазово. Адже багато частин автомобіля можна відновити і використати знову. Це ж стосується і транспортних засобів, належних до списання. Вони можуть містити чимало запасних частин, які доцільно реставрувати та використати ще раз. Тож у наших виробничих операціях ми переконуємося, що повторно споживаємо якомога більше ресурсів, таких як вода та будь-які інші сировина та матеріали.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-6">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section3_Infographic%26Picture%2520Mixed%2520copy_tcm-3046-524394_tcm-3046-524394.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section3_Infographic%2520Frames_Infographic1_tcm-3046-524395_tcm-3046-524395.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section3_Infographic%2520Frames_Infographic2_tcm-3046-524396_tcm-3046-524396.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section3_Infographic%2520Frames_Infographic3_tcm-3046-524397_tcm-3046-524397.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section3_Infographic%2520Frames_Infographic4_tcm-3046-524398_tcm-3046-524398.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Переробка</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Переробка скорочує потреби у первинних ресурсах та матеріалах для створення нових продуктів. Toyota використовує перероблені матеріали у виробництві нових автомобілів і шукає шляхи переробки компонентів транспортних засобів, таких як частини акумуляторів гібридів. При проектуванні всіх транспортних засобів передбачаються варіанти переробки запчастин.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section4_Infographic%26Picture%2520Mixed%2520copy_tcm-3046-524349_tcm-3046-524349.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section4_Infographic%2520Frames_Infographic1_tcm-3046-524342_tcm-3046-524342.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section4_Infographic%2520Frames_Infographic3_tcm-3046-524344_tcm-3046-524344.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section4_Infographic%2520Frames_Infographic2_tcm-3046-524343_tcm-3046-524343.jpg" alt="">-->
<!--                </div>-->
<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section4_Infographic%2520Frames_Infographic4_tcm-3046-524345_tcm-3046-524345.jpg" alt="">-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Відновлення</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Щоб звести відходи до абсолютного мінімуму, Toyota намагається відновити як можна більше у процесі виробництва. Також Toyota працює з партнерами-фахівцями, аби найкращим чином утилізувати транспортні засоби. Навіть залишки відходів можуть бути використані, наприклад, як альтернативне джерело палива для промисловості.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section5_Infographic%26Picture%2520Mixed_tcm-3046-524341_tcm-3046-524341.jpg" alt="">-->
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
        name: "BestPlanet",

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
                title:  `Toyota Україна | Краща планета | Життя з Тойота`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Україна | Краща планета | Життя з Тойота`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Дізнаєтесь, що ми зробили, робимо і плануємо здійснити у майбутньому, аби досягти гармонії між людьми, продуктами та планетою. Toyota Україна.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Дізнаєтесь, що ми зробили, робимо і плануємо здійснити у майбутньому, аби досягти гармонії між людьми, продуктами та планетою. Toyota Україна.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                    },
                ],
            }
        },

        data() {
            return {
                id: 32,

                swiperOption: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    centeredSlides: true,
                    // autoplay: {
                    //     delay: 2500,
                    //     disableOnInteraction: false
                    // },
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

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
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
                    h1 {
                        position: absolute;
                        top: 100px;
                        left: 100px;
                        z-index: 100;
                        text-align: left;
                        font-size: 5.2rem;
                        font-weight: bold;
                        margin-bottom: 15px;
                        width: auto;
                        h2 {
                            font-size: 3.5rem;
                            font-weight: bold;
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
        .body.container.text-left {

            margin: 68px auto;
            color: $font_color;
            h5 {
                font-size: 2.2rem;
                line-height: 3rem;
                margin-bottom: 68px;
            }

            h2 {
                font-size: 4.4rem;
                font-weight: bold;
                margin: 68px 0 40px;
                padding: 0 15px;
            }

            .row {
                margin: 50px 0;
                div {
                    img {
                        width: 100%;
                    }
                    h3 {
                        font-size: 1.5rem;
                        font-weight: bold;
                        margin: 15px 0;
                    }
                    .p {
                        font-size: 1.4rem;
                        color: #595D60;
                    }
                }
            }

        }
    }


    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        h1 {
                            top: 70px;
                            left: 70px;
                            font-size: 4.5rem;
                            h2 {
                                font-size: 3rem;
                            }
                        }
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container.text-left {

                margin: 30px auto;
                h5 {
                    margin-bottom: 30px;
                }

                h2 {
                    font-size: 4rem;
                    margin: 30px 0;
                }

                .row {
                    margin: 30px 0;
                }

            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        h1 {
                            top: 50px;
                            left: 50px;
                            font-size: 3.3rem;
                            h2 {
                                font-size: 2.5rem;
                            }
                        }


                    }

                    .swiper-button-prev, .swiper-button-next {
                        width: 30px;
                        height: 30px;
                        &:after {
                            font-size: 1.3rem;
                            padding: 10px;
                        }
                    }

                    .swiper-button-prev {
                        left: 20px;
                    }
                    .swiper-button-next {
                        right: 20px;
                    }
                }
            }
        }

        main ::v-deep div {
            .body.container.text-left {

                margin: 30px auto;
                h5 {
                    font-size: 2rem;
                    margin-bottom: 30px;
                }

                h2 {
                    font-size: 3.5rem;
                    margin: 30px 0;
                    padding: 0;
                }

                .row {
                    margin: 30px 0 50px;
                    div {
                        padding:  15px 0;
                        h3 {
                            font-size: 1.5rem;
                            margin: 10px 0;
                        }
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
                        h1 {
                            top: 30px;
                            left: 30px;
                            font-size: 2.5rem;
                            h2 {
                                font-size: 2rem;
                            }
                        }
                    }

                    .swiper-button-prev, .swiper-button-next {
                        width: 30px;
                        height: 30px;
                        &:after {
                            font-size: 1.3rem;
                            padding: 10px;
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
            .body.container.text-left {

                margin: 30px auto;
                h5 {
                    font-size: 1.8rem;
                    line-height: 2.2rem;
                    margin-bottom: 30px;
                }

                h2 {
                    font-size: 2.5rem;
                    margin: 30px 0 20px;
                    padding: 0;
                }

                .row {
                    margin: 30px 0 50px;
                    div {
                        padding: 0;
                        margin-bottom: 15px;
                        img {
                            width: 100%;
                        }
                        h3 {
                            margin: 5px 0;
                        }
                    }
                }

            }
        }
    }

</style>