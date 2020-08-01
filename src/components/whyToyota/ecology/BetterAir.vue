<template>
    <main>
        <menu-ecology></menu-ecology>
        <header>
            <swiper class="swiper" :options="swiperOption">


                <swiper-slide
                        style="background-color: rgba(0,0,0,.1);"
                >
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Carousel%202_tcm-3046-559422.jpg" alt="Краще повітря">
                    <div class="title">
                        <h1 style="color: #202020">Краще повітря</h1>
                        <h2>Створення екологічно чистих автомобілів для світу</h2>
                    </div>
                </swiper-slide>

                <swiper-slide>
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Carousel%203_tcm-3046-559423.jpg" alt="Краще повітря">
                    <div class="title">
                        <h1 style="color: #202020">Краще повітря</h1>
                        <h2>Створення екологічно чистих автомобілів для світу</h2>
                    </div>
                </swiper-slide>

                <swiper-slide
                        style="color: #ffffff"
                >
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Carousel%204_tcm-3046-577527.jpg" alt="Краще повітря">
                    <div class="title">
                        <h1 style="color: #202020">Краще повітря</h1>
                        <h2>Створення екологічно чистих автомобілів для світу</h2>
                    </div>
                </swiper-slide>

                <swiper-slide
                        style="color: #ffffff;"
                >
                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section%201_Carousel_PRODpicture%2001_tcm-3046-551899.jpg" alt="Краще повітря">
                    <div class="title">
                        <h1>Краще життя</h1>
                        <h2>Створення майбутнього суспільства в гармонії з природою</h2>
                    </div>
                </swiper-slide>


                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </header>
        <div v-html="pageBody"></div>
        
<!--        <div class="body container text-left">-->

<!--            <h5>Як один з провідних світових автовиробників TOYOTA вкрай серйозно ставиться до обов'язку допомагати у захисті довкілля. Це означає створення транспортних засобів з мінімальним впливом на світ навколо нас. Це стосується не лише характеристик роботи автомобілів; TOYOTA вважає, що важливо також знайти більш чисті, сталі способи виготовлення та поводження із відпрацьованими одиницями.</h5>-->
<!--            -->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Десятиріччями TOYOTA досліджує шляхи створення та удосконалення екологічних автомобілів, внаслідок чого з'явився гібридний автомобіль, який вже довів свою цінність у скороченні викидів парникових газів. TOYOTA все ще продовжує працювати в цьому напрямку, плануючи скоротити викиди CO2 від автомобілів на 90% до 2050 року у порівнянні з показниками 2010 року.</p>-->
<!--                    <p>Проте мова йде не лише про скорочення викидів CO2. TOYOTA поділяє занепокоєння урядів та споживачів у всьому світі щодо якості повітря та продовжує інвестувати у пошук шляхів зменшення викидів, що безпосередньо впливають на здоров'я людей, такі як оксиди азоту (NOx) та ультрадисперсні частинки (PM).</p>-->
<!--                </div>-->
<!--                -->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/1_BetterAir_Homepage_Sec1-Info_CO2-reduction_ok_tcm-3046-559436_tcm-3046-559436.jpg" alt="">-->
<!--                    <p>TOYOTA MOTOR EUROPE оголосили про амбітні плани скоротити викиди CO2 від транспортних засобів (від баку до колеса) на 90% до 2050 року.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Правильний автомобіль, у потрібному місці, у потрібний час</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>У всьому світі люди використовують різні типи транспортних засобів, залежно від свого способу життя. Деяких влаштовує маленька машина для коротких міських подорожей, тоді як інші вимагають більшого і потужного автомобіля для регулярних тривалих поїздок. Тому ми вважаємо, що немає єдиного рішення, коли мова йде про створення найсучаснішого екологічного автомобіля. У процесі розробки гібриду TOYOTA створила низьковуглецеву технологію, яку можна використати для задоволення цих різних вимог.</p>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <p>З того часу як з кінця 19-го століття на транспортних засобах почали застосовувати двигун внутрішнього згоряння, вони в основному використовували паливо з горючих корисних копалин, яке спричиняє викиди CO2 і сприяє глобальному потеплінню. Хоча традиційні двигуни продовжуватимуть відігравати важливу роль у короткостроковій та середньостроковій перспективі, TOYOTA вивчає та розробляє альтернативні джерела, такі як біопаливо з органіки, електрика та, останнім часом, водень. За допомогою такого всеохоплюючого підходу TOYOTA прагне забезпечити кращу екологічну ефективність, створивши правильне авто в потрібному місці і у потрібний час.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <blockquote>-->
<!--                <p>"Природні ресурси обмежені. Ми повинні піклуватися про планету. Ми ще маємо передати її майбутнім поколінням".</p>-->

<!--                <cite>Акіо Тойода, президент Toyota Motor Corporation</cite>-->
<!--            </blockquote>-->

<!--            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/1_BetterAir_Homepage__tcm-3046-559438.jpg" alt="">-->
<!--            <p>На шляху до виробництва найсучаснішої еко-машини TOYOTA проектуватиме різні додатки до існуючої гібридної технології та вивчатиме можливості використання альтернативних видів палива, аби задовольнити різносторонні вимоги з боку клієнтів.</p>-->


<!--            <h2>Знайомтеся з сім'єю</h2>-->
<!--            <p>Із появою Mirai, першого у світі серійного седана на водневих паливних елементах, асортимент новітніх альтернативних транспортних засобів продовжує зростати. В життя втілюються напрацювання дослідницької лабораторії. У асортименті TOYOTA також є електромобіль для міста, такий як прототип i-ROAD. Постійно зростає кількість гібридних автомобілів та з'явився гібрид plug-in. Разом вони формують технічну дорожню карту нашого шляху до найсучаснішого еко-автомобіля з нульовим впливом на довкілля.</p>-->

<!--            <div class="row">-->

<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section%202_frame1_tcm-3046-551903.jpg" alt="">-->
<!--                    <h3>Електромобіль</h3>-->
<!--                    <p>Цей барвистий триколісний автомобіль з електроприводом використовується у пілотному проекті як складова системи громадського транспорту у Греноблі у Франції.</p>-->
<!--                </div>-->

<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section%202_frame2_tcm-3046-551904.jpg" alt="">-->
<!--                    <h3>Гібрид</h3>-->
<!--                    <p>Prius був першим з гібридів, який надійшов у продаж 1997 року. З тих пір кількість реалізованих транспортних засобів неухильно зростає, на сьогодні існує близько 30 різних моделей.</p>-->
<!--                </div>-->

<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section%202_frame3_tcm-3046-551905.jpg" alt="">-->
<!--                    <h3>Рlug-in гібрид</h3>-->
<!--                    <p>Модель гібриду з акумулятором Prius Рlug-in стала "черговим кроком" у процесі вдосконалення лінійки гібридів, запущеному у 2012 році за результатами трирічної дослідницької програми в Страсбурзі та інших місцях по всьому світу.</p>-->
<!--                </div>-->

<!--                <div class="col-md-3 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section%202_frame4_tcm-3046-551906.jpg" alt="">-->
<!--                    <h3>Паливні елементи</h3>-->
<!--                    <p>Mirai, представлений у Європі у 2015 році, - це перший в світі седан, який працює на водневих паливних елементах.</p>-->
<!--                </div>-->

<!--            </div>-->

<!--            <h2>Складання карти шляху до сталої мобільності</h2>-->
<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Технологічна дорожня карта TOYOTA передбачає широкий спектр екологічних технологій, зокрема це гібрид, plug-in гібрид, електричний акумулятор та система паливних елементів. Кожна технологія наближає нас до мети створення найсучаснішого еко-автомобіля. До 2050 року ми мусимо скоротити викиди CO2 своїх продуктів на 90% у порівнянні з рівнем 2010 року. Це амбітне завдання, але ми вирішили розробляти та вдосконалювати нові технології та виводити їх на ринок, аби перевірити їхні переваги на практиці.</p>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Технологія гібридного синергетичного приводу Hybrid Synergy Drive, що має численні нагороди, є основною у дорожній карті, її застосовуватимуть у всіх силових агрегатах. Проект приводу передбачає, що його легко можна адаптувати для використання в різних типах автомобілів. У plug-in гібридах він практично не змінюється, але використовується більш потужний акумулятор, який можна заряджати від зовнішнього джерела живлення. У електрокарах цей формат простіший, оскільки не використовується бензиновий двигун, лише потрібний потужнішій електромотор. У гібридах на паливних елементах бензиновий двигун замінюється набором паливних елементів, які генерують електроенергію з водневого палива, не виділяючи шкідливих вихлопних газів.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h2>Інші способи "озеленення"</h2>-->
<!--            <div class="row">-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section%203_Frame%201_bio%20fuels_tcm-3046-551908.jpg" alt="">-->
<!--                    <h3>Біопаливо</h3>-->
<!--                    <p>TOYOTA досліджує, як органічні матеріали, навіть відходи, можна використовувати у якості джерела палива для автомобілів.</p>-->
<!--                </div>-->


<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Section%203_Frame%202_conv.engines_tcm-3046-551909.jpg" alt="">-->
<!--                    <h3>Традиційні двигуни</h3>-->
<!--                    <p>Паралельно із розробкою альтернативних силових агрегатів, TOYOTA все ще прагне зробити традиційні двигуни більш екологічно чистими.</p>-->
<!--                </div>-->

<!--                <div class="col-md-4 col-12">-->
<!--                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Section%203_Frame%203_ecojoy_tcm-3046-551910.jpg" alt="">-->
<!--                    <h3>Еко-водіння</h3>-->
<!--                    <p>Прості зміни в стилі керування автомобілем можуть значно скоротити споживання палива та викиди, а також заощадити ваші гроші.</p>-->
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
        name: "BetterAir",

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
                // title:  `Toyota Україна | Краще повітря | Життя з Тойота`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Україна | Краще повітря | Життя з Тойота`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Наша  дорожня карта об&#39;єднує широкий спектр екологічних технологій-  гібрид, plug-in гібрид, електричний акумулятор та система паливних елементів.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Наша  дорожня карта об&#39;єднує широкий спектр екологічних технологій-  гібрид, plug-in гібрид, електричний акумулятор та система паливних елементів.`
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
                id: 31,

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
                        width: auto;
                        h1 {
                            text-align: left;
                            font-size: 5.2rem;
                            font-weight: bold;
                            margin-bottom: 15px;
                        }
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
        .body.container {
            margin: 68px auto;
            color: $font_color;
            h5 {
                font-size: 2.2rem;
                line-height: 3rem;
                margin-bottom: 68px;
            }
            .p {
                font-size: 1.4rem;
                color: #595D60;
                margin-bottom: 30px;
            }

            .row {
                margin-top: 50px;
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

            h2 {
                font-size: 4.4rem;
                font-weight: bold;
                margin: 68px 0 30px;
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

            img {
                width: 100%;
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
                .p {
                    font-size: 1.4rem;
                    color: #595D60;
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