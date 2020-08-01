<template>
    <main>
        <header>
            <h1>{{car.name}}</h1>
        </header>

        <div class="body">
            <section>
                <header>
                    <h2>{{car.description}}</h2>
                </header>
                <div class="carousel">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide>
                            <img class="photo" :src="'http://lara.toyota.nikolaev.ua/storage/' + car.preview" alt="preview">
                        </swiper-slide>

                        <swiper-slide v-for="(img, key) in getSlides" :key="key">
                            <img class="photo" :src="'http://lara.toyota.nikolaev.ua/storage/' + img" alt="photo" @focusin="imageSize()">
                        </swiper-slide>

                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev" ></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import $ from "jquery"

    export default {
        name: "ExclusiveCar",

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                car: {},

                swiperOption: {
                    autoHeight: true,
                    spaceBetween: 20,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

        computed: {
            getSlides() {
                return JSON.parse(this.car.image);
            },
        },

        created() {
            this.car = this.$route.params.car;
        },

        mounted() {
            this.imageSize();
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)

        },

        methods: {
            imageSize() {
                $('.photo').each( function (index, photo) {
                    if($(photo).width() > $(photo).height()) {
                        $(photo).css("width", "100%").css("height", "auto");
                    } else {
                        $(photo).css("width", "auto").css("height", "90vh");
                    }
                } );

            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    * {
        color: $font_color;
        margin: 0;
        padding: 0;
    }

    main {
        background-color: #F0F0F0;
        padding-bottom: 68px;
        header {
            padding: 50px 0 0;
            width: 100%;
            h1 {
                font-size: 5rem;
                font-weight: bolder;
            }
        }

        .body {
            margin: 20px auto;
            section {
                margin: 50px;
                header {
                    margin: 25px 0;
                    h2 {
                        font-size: 3rem;
                        font-weight: bold;
                    }
                }
                .carousel {
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        .swiper {
            /*height: 300px;*/
            width: 100%;
            background-color: #333;

            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-weight: bold;
            }
        }

        .swiper-pagination.swiper-pagination-fraction {
            background-color: rgba(255,255,255,0.5);
            font-size: 1.8rem;
            width: auto;
            margin: 0 auto;
            padding: 5px 15px;
            border-radius: 32px;
            left: calc(50% - 32.5px);
        }

        .swiper-button-next,
        .swiper-button-prev{
            background-color: rgba(255,255,255,0.5);
            border-radius: 50%;
            padding: 10px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            &::after {
                font-size: 2rem;
                font-weight: bolder;
            }
        }
    }



    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header {
                h1 {
                    font-size: 4rem;
                }
            }

            .body {
                margin: 20px auto;
                    section {
                    header {
                        padding-top: 0;
                        h2 {
                            font-size: 2.5rem;
                        }
                    }
                    .carousel {
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                padding: 25px 0 0;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body {
                section {
                    margin: 20px 50px;
                    header {
                        h2 {
                            font-size: 2.2rem;
                        }
                    }

                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header {
                padding: 20px 0 0;
                h1 {
                    font-size: 2.5rem;
                }
            }

            .body {
                section {
                    margin: 20px;
                    header {
                        margin: 25px 0;
                        h2 {
                            font-size: 1.6rem;
                        }
                    }
                    .carousel {
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }

            .swiper {
                /*height: 300px;*/
                width: 100%;
                background-color: #333;

                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-weight: bold;
                }
            }

            .swiper-pagination.swiper-pagination-fraction {
                background-color: rgba(255,255,255,0.5);
                font-size: 1.8rem;
                width: auto;
                margin: 0 auto;
                padding: 5px 15px;
                border-radius: 32px;
                left: calc(50% - 32.5px);
            }

            .swiper-button-next,
            .swiper-button-prev{
                background-color: rgba(255,255,255,0.5);
                border-radius: 50%;
                padding: 10px;
                cursor: pointer;
                width: 40px;
                height: 40px;
                &::after {
                    font-size: 2rem;
                    font-weight: bolder;
                }
            }
        }
    }

</style>