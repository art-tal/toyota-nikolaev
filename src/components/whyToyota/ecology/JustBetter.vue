<template>
    <main>
        <menu-ecology></menu-ecology>
        <header>
            <swiper class="swiper" :options="swiperOption">

                <swiper-slide>
                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section-1_Carousel-1_tcm-3046-616845.jpg" alt="Просто краще">
                    <div class="title">
                        <h1>Просто краще</h1>
                        <h2>Серце нашої світової екологічної місії</h2>
                    </div>

                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_Carousel-2_tcm-3046-616846.jpg" alt="Просто краще">
                    <div class="title">
                        <h1>Просто краще</h1>
                        <h2>Шлях до сталої мобільності та еко-автомобіля</h2>
                    </div>

                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section-1_Carousel-3_tcm-3046-616848.jpg" alt="Просто краще">
                    <div class="title">
                        <h1>Просто краще</h1>
                        <h2>Працювати сьогодні, аби завтра світ був чистішим</h2>
                    </div>

                </swiper-slide>

                <swiper-slide>
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame4_tcm-3046-616853.jpg" alt="Просто краще">
                    <div class="title">
                        <h1>Просто краще</h1>
                        <h2>Моніторинг та сертифікація</h2>
                    </div>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </header>
        <div v-html="pageBody"></div>

<!--        <div class="body container text-left">-->
<!--            <h3>Що означає "Просто краще"? Toyota долучилася до охорони навколишнього середовища десятки років тому. Протягом усього цього часу ми закладаємо у свій бізнес міцний фундамент, який гарантує, що дотримання екологічних стандартів є наріжним каменем нашої діяльності.</h3>-->

<!--            <h2>Екологічна політика та План дій</h2>-->
<!--            <p>Ми прагнемо захисту та покращення навколишнього середовища, тому маємо бути певні, що на всіх ланках нашого бізнесу існує розуміння цієї мети і налаштованість на спільну роботу для досягнення встановлених екологічних цілей. Окрім виконання власних екологічних планів, ми, звичайно, також мусимо розуміти, що дотримуємося екологічних стандартів і реалізуємо належні заходи для виявлення та усунення всіх екологічних ризиків.</p>-->
<!--            <ul>-->
<!--                <li>Наша екологічна політика стосується не лише того, що ми робимо як бізнес-одиниця, але також того, що ми можемо зробити для підвищення рівня обізнаності суспільства та донесення визначних ідей до інших.</li>-->
<!--                <li>Ми прагнемо досягти екологічної ефективності «Тойота» у сферах продажу та післяпродажного обслуговування.</li>-->
<!--                <li>Ми докладаємо максимум зусиль, аби переконатися в тому, що управляємо, контролюємо та переглядаємо нашу екологічну діяльність відповідно до незалежних міжнародних стандартів.</li>-->
<!--            </ul>-->

<!--            <div class="row">-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame2_tcm-3046-616851.jpg" alt="">-->
<!--                    <p>Наша Екологічна політика допомагає нам створити екологічно відповідальний бізнес.</p>-->
<!--                </div>-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame3_tcm-3046-616852.jpg" alt="">-->
<!--                    <p>Наш План дій щодо навколишнього середовища визначає цілі Toyota та те, як ми можемо їх досягти.</p>-->
<!--                </div>-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame4_tcm-3046-616853.jpg" alt="">-->
<!--                    <p>Ми прагнемо дотримуватися міжнародних екологічних стандартів й сприяти їхньому широкому виконанню.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Основна політика</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section%25202_info_Pictos_toyota_JustBetter1_tcm-3046-557470_tcm-3046-557470.jpg" alt="">-->
<!--                    <p>Ми працюємо в гармонії з навколишнім середовищем та встановлюємо завдання щодо нульового рівня викидів для кожного підрозділу нашого бізнесу.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter2_tcm-3046-557471_tcm-3046-557471.jpg" alt="">-->
<!--                    <p>Ми використовуємо будь-які доступні екологічні технології, аби допомогти екології та економіці співіснувати в гармонії.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter3_tcm-3046-557472_tcm-3046-557472.jpg" alt="">-->
<!--                    <p>Усе це допомагає вирішувати екологічні проблеми на глобальному, національному та регіональному рівнях.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section%25202_info_Pictos_toyota_JustBetter4_tcm-3046-557473_tcm-3046-557473.jpg" alt="">-->
<!--                    <p>Ми вибудовуємо відносини з організаціями та приватними особами, щоб допомогти зберегти довкілля.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Керівні напрямки дій</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter5_tcm-3046-557474_tcm-3046-557474.jpg" alt="">-->
<!--                    <p>Ми прийняли виклик у вигляді мети звести викиди до 0 у всіх підрозділах нашого бізнесу.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter6_tcm-3046-557475_tcm-3046-557475.jpg" alt="">-->
<!--                    <p>Ми можемо отримати екологічні переваги, працюючи разом з нашими діловими партнерами.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter7_tcm-3046-557476_tcm-3046-557476.jpg" alt="">-->
<!--                    <p>Ми активно підтримуємо соціальні заходи для захисту та поліпшення навколишнього середовища.</p>-->
<!--                </div>-->

<!--                <div class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section%25202_info_Pictos_toyota_JustBetter8_tcm-3046-557477_tcm-3046-557477.jpg" alt="">-->
<!--                    <p>Ми ділимося інформацією та працюємо над поширенням екологічної обізнаності.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Еко-акція «Купив авто? Посади дерево!»</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-lg-9 col-md-8 col-12">-->
<!--                    <p>Щороку в Києві проходить еко-акція «Купив машину? Посади дерево!», ініційована ПІІ «Тойота-Україна» спільно з міжнародним благодійним фондом «Україна! Я за тебе!». Активну участь в озелененні міста щороку приймають співробітники ПІІ «Тойота-Україна» та члени їх сімей, також акція підтримується клієнтами та співробітниками Тойота Центр Київ «Сіті Плаза».</p>-->
<!--                    <p>Еко-акція «Купив машину? Посади дерево!» спрямована на збільшення площі зелених насаджень та озеленення міста. Це надзвичайно важливо, адже дерева відновлюють кисень, поглинають CO2, захищають нас від шуму і пилу, до того ж створюють корисний мікроклімат.</p>-->
<!--                    <p>Головна мета цього проекту − не тільки збагатити Київ зеленими насадженнями, але й створити унікальний шматочок Японії у вигляді японського саду. Японський сад відкритий для всіх киян для того, щоб кожен мешканець столиці зміг насолодитися японською культурою і красою.</p>-->
<!--                </div>-->
<!--                -->
<!--                <div class="col-lg-3 col-md-4 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/tree-planting-555x249_tcm-3046-1418353.jpg" alt="">-->
<!--                    <p>Щорічна екоакція «Купив машину? Посади дерево!», ініційована «Тойота-Україна» та міжнародним благодійним фондом «Україно! Я за тебе!».</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Зобов'язання щодо захисту довкілля</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter9_tcm-3046-557478_tcm-3046-557478.jpg" alt="">-->
<!--                    <p>Ми працюємо над усуненням викидів CO2 та інших шкідливих речовин на всіх етапах своєї діяльності.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter10_tcm-3046-557479_tcm-3046-557479.jpg" alt="">-->
<!--                    <p>Наші ключові принципи допомагають нам зменшити втрати і використання енергії та інших ресурсів.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter11_tcm-3046-557480_tcm-3046-557480.jpg" alt="">-->
<!--                    <p>Нашою метою є розробка автомобіля, що не має негативного впливу на навколишнє середовище.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Постійне покращення</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter12_tcm-3046-557481_tcm-3046-557481.jpg" alt="">-->
<!--                    <p>Ми аналізуємо можливий вплив на екологію кожного етапу життєвого циклу транспортного засобу.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter13_tcm-3046-557482_tcm-3046-557482.jpg" alt="">-->
<!--                    <p>Ми пильнуємо за тим, аби наш бізнес та продукти завжди відповідали законам про захист навколишнього середовища в усьому світі.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter14_tcm-3046-557483_tcm-3046-557483.jpg" alt="">-->
<!--                    <p>Ми проектуємо фабрики, розробляємо виробничі системи і методи, з урахуванням впливу на довкілля.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Відкритий діалог</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter15_tcm-3046-557484_tcm-3046-557484.jpg" alt="">-->
<!--                    <p>Ми працюємо з діловими партнерами, нашим персоналом та клієнтами, сприяючи екологічній обізнаності та найкращій практиці.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter16_tcm-3046-557485_tcm-3046-557485.jpg" alt="">-->
<!--                    <p>Ми відводимо довкіллю центральне місце у нашій роботі та відносинах з іншими.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Pictos_toyota_JustBetter17_tcm-3046-557486_tcm-3046-557486.jpg" alt="">-->
<!--                    <p>Ми завжди шукаємо нові шляхи стимулювання і розвитку екологічного мислення та діяльності.</p>-->
<!--                </div>-->
<!--            </div>-->


<!--            -->
<!--            -->
<!--        </div>-->

    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    import MenuEcology from "./../../../components/whyToyota/ecology/MenuEcology";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "JustBetter",

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
                // title:  `Toyota Україна| Просто краще | Життя з Тойота`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Україна| Просто краще | Життя з Тойота`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Протягом десятків років Toyota закладає у свій бізнес міцний фундамент, який гарантує дотримання екологічних стандартів та охорони навколишнього середовища.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Протягом десятків років Toyota закладає у свій бізнес міцний фундамент, який гарантує дотримання екологічних стандартів та охорони навколишнього середовища.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Social projects, Enviroment`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Social projects, Enviroment`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        data() {
            return {
                id: 34,

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
                    .title {
                        position: absolute;
                        top: 100px;
                        left: 100px;
                        z-index: 100;
                        text-align: left;
                        width: auto;
                        h1 {
                            font-size: 5.2rem;
                            font-weight: bold;
                            margin-bottom: 15px;
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
            h3 {
                font-size: 3.4rem;
                margin-bottom: 68px;
                text-align: center;
            }
            .p {
                font-size: 1.4rem;
                color: #595D60;
                margin-bottom: 30px;
            }

            ul {
                margin: 30px 0;
                padding-left: 20px;
                li {
                    font-size: 1.4rem;
                    color: #595D60;
                    margin-bottom: 10px;
                }
            }

            h2 {
                font-size: 4.4rem;
                font-weight: bold;
                margin-bottom: 30px;
                padding: 0 15px;
            }

            .row {
                margin: 30px 0 68px;
                padding: 0;
                div {
                    img {
                        width: 100%;
                        margin-bottom: 15px;
                    }
                    /*a {*/
                    /*    font-size: 1.4rem;*/
                    /*    &:hover {*/
                    /*        text-decoration: underline;*/
                    /*        cursor: pointer;*/
                    /*    }*/
                    /*}*/
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
                h3 {
                    font-size: 3rem;
                    line-height: 3.5rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 4rem;
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
                h3 {
                    font-size: 2.2rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 3rem;
                    margin: 10px 0 20px;
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
                h3 {
                    font-size: 2rem;
                    line-height: 2.5rem;
                    margin-bottom: 30px;
                }

                .row {
                    margin-top: 30px;
                }

                h2 {
                    font-size: 2.5rem;
                    margin: 10px 0 15px;
                }
            }
        }
    }

</style>