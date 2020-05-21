<template>
    <section>
        <header class="container-fluid">
            <div class="wrap">
                <h1>GT86<br>
                    Історія спорткарів Toyota (частина 7)
                </h1>

                <div class="series d-flex justify-content-around">
                    <!--                    <hr/>-->
                    <span>СЕРІЯ HERITAGE</span>
                    <!--                    <hr/>-->
                </div>
            </div>
            <div class="header-image">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/3-BG_tcm-3046-794965.jpg" alt="photo">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/2-Copy_tcm-3046-794964.png" alt="toyota">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/1-Car_tcm-3046-794963.png" alt="cars">
            </div>
        </header>

        <div class="body container">
            <h4>Для шанувальників спорткарів та прихильників традиційних моделей Toyota поява GT86 у 2011 році подарувала довгоочікуване полегшення. Через відсутність у лінійці протягом кількох останніх років моделей MR2, Celica або Supra, які могли б потішити фанатів, GT86 з його родоводом був саме тим, чого так довго потребували прихильники марки.</h4>
            <div class="block_right">
                <h5>Повернення справжньої насолоди від керування</h5>
                <p>Використовуючи як джерело натхнення культові спортивні моделі Toyota минулих років, такі як 2000GT та AE86, об’єднані спільною метою - забезпечення справжньої радості від керування, команда дизайнерів та інженерів, які люблять свою справу, вдихнула класичні для спорткарів риси у модель нового покоління GT86. Завдяки використанню перевірених часом атрибутів успішного спорткара, зокрема переднього розташування опозитного двигуна об’ємом 2 л у поєднанні із заднім приводом, GT86 з його звабливими формами кузова дав змогу перенести у наш час найкращі риси орієнтованих на водія моделей Toyota минулих років.</p>
                <p>Розташований спереду високообертовий бензиновий двигун автомобіля із заднім приводом, низький центр ваги та легкий кузов забезпечують моделі GT86 надзвичайну керованість і блискавичну реакцію на дії водія – саме те, що обіцяли інженери.</p>

            </div>

            <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/2-GT86-Profile_tcm-3046-794971.jpg" alt="car" class="w-100">
            <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/3-GT86-Rear_tcm-3046-794972.jpg" alt="car" class="w-50">
            <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/4-GT86-Rearwing_tcm-3046-794973.jpg" alt="car" class="w-50">
            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/5-GT86-Interior_tcm-3046-794974.jpg" alt="car" class="W-100">

            <div class="block_right">
                <p>Оригінальним дизайнерським рішенням є культові емблеми з цифрами 86, що прикрашають кермо GT86. Навіть діаметр вихлопної труби становить точно 86 мм, який має нагадувати про діаметр і хід поршня двигуна, що дорівнюють 86 мм, а також про службове позначення 86-ої моделі.</p>
                <p>Як і багато інших культових моделей Toyota, що пішли з ринку ще раніше, GT86 завоював широке визнання в усьому світі за свій невгамовний характер та повернення до невимушеного і доступного задоволення від керування. Завдяки перевіреній часом динаміці GT86 успішно виступав у різноманітних автомобільних змаганнях в усьому світі. Найбільш помітним у цьому плані став 2015 рік, коли було створено ралійну модель GT86 CS-R3 для бюджетного початку сезону захопливих змагань, і в тому числі – для участі у Чемпіонаті світу з ралі.</p>
                <h5>Майбутнє спорткарів Toyota</h5>
                <p>Приблизно в один час із виходом GT86 президент Toyota Акіо Тойода (Akio Toyoda) висловив своє бачення найближчого майбутнього компанії: «Ми продовжуємо випускати кращі автомобілі, і "автомобіль, керування яким не викликає захвату – не автомобіль"».</p>
                <p>З урахуванням оновленої основної мети компанії та результатів втілення у конструкції GT86 орієнтованого на водія підходу, очевидних для кожного, які сюрпризи може приховувати майбутнє спорткарів Toyota, що спирається на багате минуле марки?</p>

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
            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/7-Footer-Future_tcm-3046-794955.jpg" alt="next car">

            <router-link
                    tag="header"
                    exact
                    to="/world_of_toyota/IdeasForFuture"
            >
                <h2>
                    Ідеї щодо майбутнього<br>
                    Історія спорткарів Toyota (частина 8)
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
        name: "ToyotaGT86",

        components: {
            Continue,
            Swiper,
            SwiperSlide,
        },

        data() {
            return {

                showCarousel: false,

                images: [
                    "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/GT86-CorollaAE86-2000GT-FULL_tcm-3046-795810.jpg",
                    "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/GT86-Front34-FULL_tcm-3046-795814.jpg",
                    "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/GT86-Interior-FULL_tcm-3046-795818.jpg",
                    "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/GT86-Profile-FULL_tcm-3046-795822.jpg",
                    "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/GT86-Rear34-FULL_tcm-3046-795826.jpg",
                    "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/GT86-Rearwing-FULL_tcm-3046-795838.jpg",
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
                color: #ffffff;
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