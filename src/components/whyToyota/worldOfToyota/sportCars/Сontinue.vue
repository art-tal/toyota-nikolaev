<template>
    <div class="carousel container-fluid">
        <h2>Продовжити подорож</h2>

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(car, key) in carsHistory"
                          :key="key"
            >
                <div class="link" @click="goNext(car.pathName)">
                    <span>{{key + 1}}</span>
                    <img :src="car.img" :alt="car.header">
                    <h4 class="header">{{car.header}}</h4>
                    <p>{{car.description}}</p>
                </div>

            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

    export default {
        name: "Сontinue",

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                carsHistory: [
                    {
                        header: "Початок",
                        pathName: 'history_of_toyota_sports_cars',
                        description: 'Маленький, легкий і кумедний. Історія наших спортивних автомобілів почалася з моделі Sports 800.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide01_tcm-3046-791187.png"
                    },
                    {
                        header: "2000GT",
                        pathName: 'toyota_2000_gt',
                        description: 'Перший японський суперкар. Один з улюблених автомобілів Бонда і взірець дизайну спортивного авто донині.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide02_tcm-3046-792887.png"
                    },
                    {
                        header: "CELICA",
                        pathName: 'toyota_celica',
                        description: '«Небесна» Celica возить людей по всьому світу вже понад 30 років.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide03_tcm-3046-792889.png"
                    },
                    {
                        header: "SUPRA",
                        pathName: 'toyota_supra',
                        description: 'Довга, потужна і розкішна Supra, що не залишала байдужим нікого, ідеально пасувала до атмосфери 1980-х років.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide04_tcm-3046-792893.png"
                    },
                    {
                        header: "COROLLA",
                        pathName: 'toyota_corolla',
                        description: 'За непринадним фасадом Corolla приховувалася справжня мрія водія.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide05_tcm-3046-792892.png"
                    },
                    {
                        header: "MR2",
                        pathName: 'toyota_mr2',
                        description: 'Невеликий та динамічний MR2 справив досить значне враження і належить до автомобілів, які забути не просто.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide06_tcm-3046-792890.png"
                    },
                    {
                        header: "GT86",
                        pathName: 'toyota_gt86',
                        description: 'GT86 з його нестримним характером ознаменував повернення до невимушеного і доступного задоволення від керування.',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide07_tcm-3046-792888.png"
                    },
                    {
                        header: "Ідеї щодо майбутнього",
                        pathName: 'IdeasForFuture',
                        description: 'Які сюрпризи може приховувати майбутнє спорткарів Toyota, що спирається на багате минуле марки...',
                        img: "//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/navSlide08_tcm-3046-792891.png"
                    },
                ],


                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerGroup: 4,
                    loop: true,
                    loopFillGroupWithBlank: true,
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

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            goNext(path) {
                this.$router.push({name: path});
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../../styles/variables';

    .carousel.container-fluid {
        padding: 68px 0 0;
        h2 {
            font-size: 4.4rem;
            font-weight: bolder;
            margin-bottom: 30px;
        }

        .swiper {
            height: 450px;
            width: 100%;

            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: stretch;
                text-align: center;
                font-weight: bold;

                .link {
                    width: 100%;
                    padding: 0 20px;
                    position: relative;
                    background-color: #f0f0f0;
                    span {
                        font-size: 20rem;
                        color: #ffffff;
                        position: absolute;
                        top: -30px;
                        left: calc(50% - 56px);
                        z-index: 0;
                    }
                    img {
                        position: relative;
                        z-index: 1;
                        display: block;
                        width: 100%;
                    }
                    h4 {
                        font-size: 1.8rem;
                        margin-top: 20px;
                        font-weight: bold;
                        margin-bottom: 15px;
                    }
                    p {
                        font-size: 1.6rem;
                        font-weight: normal;
                    }
                }


            }
        }
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
        .carousel.container-fluid {

            .swiper {

                .swiper-slide {

                    .link {
                        span {
                            font-size: 16rem;
                            left: calc(50% - 44px);
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        .carousel.container-fluid {
            .swiper {
                height: 380px;

                .swiper-slide {

                    .link {
                        span {
                            font-size: 12rem;
                            left: calc(50% - 33px);
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .carousel.container-fluid {
            padding: 30px 0 0;
            h2 {
                font-size: 4rem;
            }

            .swiper {
                height: 350px;

                .swiper-slide {
                    .link {
                        span {
                            font-size: 9rem;
                            top: -20px;
                            left: calc(50% - 25px);
                        }
                        h4 {
                            font-size: 1.6rem;
                        }
                        p {
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        .carousel.container-fluid {
            padding: 30px 0 0;
            h2 {
                font-size: 3rem;
            }

            .swiper {
                height: 320px;

                .swiper-slide {
                    .link {
                        span {
                            font-size: 6rem;
                            top: -10px;
                            left: calc(50% - 17px);
                        }
                        h4 {
                            font-size: 1.5rem;
                            margin-top: 20px;
                            margin-bottom: 10px;
                        }
                        p {
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        .carousel.container-fluid {
            padding: 30px 0 0;
            h2 {
                font-size: 2.5rem;
            }

            .swiper {
                height: 150px;

                .swiper-slide {
                    .link {
                        padding: 0 10px;
                        span {
                            font-size: 5rem;
                            top: -15px;
                            left: calc(50% - 14px);
                        }
                        h4 {
                            font-size: 1.4rem;
                        }
                        p {
                            display: none;
                        }
                    }
                }
            }
        }
    }

</style>