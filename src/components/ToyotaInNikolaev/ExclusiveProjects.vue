<template>
    <main>
        <header>
            <h1>Наші укслюзивні проекти</h1>
        </header>

        <div class="body container row  justify-content-around">
<!--            <section v-for="(ex, key) in projects"-->
<!--                     :key="key"-->
<!--                     @click="goToExclusiveCar(ex)"-->
<!--                     class="col-6"-->
<!--            >-->
<!--                <header>-->
<!--                    <h2>{{ex.name}}</h2>-->
<!--                </header>-->
<!--                <div class="carousel">-->
<!--                            <div class="preview slide row" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + ex.preview + ')'" >-->
<!--                                <div class="description ">-->
<!--                                    <p>{{ex.description}}</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                </div>-->
<!--                <footer>Натисніть для детального перегляду</footer>-->


<!--&lt;!&ndash;                <div class="carousel">&ndash;&gt;-->
<!--&lt;!&ndash;                    <swiper class="swiper" :options="swiperOption">&ndash;&gt;-->
<!--&lt;!&ndash;                        <swiper-slide>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="preview slide row" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + ex.preview + ')'" alt="preview">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="description col-5">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <p>{{ex.description}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->

<!--&lt;!&ndash;                        </swiper-slide>&ndash;&gt;-->

<!--&lt;!&ndash;                        <swiper-slide v-for="(img, key) in getSlides( ex.image )" :key="key">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="slide row" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + img + ')'" alt="image">&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                <div class="description col-5">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                    <p>{{ex.description}}</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                                </div>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->

<!--&lt;!&ndash;                        </swiper-slide>&ndash;&gt;-->

<!--&lt;!&ndash;                        <div class="swiper-pagination" slot="pagination"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="swiper-button-prev" slot="button-prev"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="swiper-button-next" slot="button-next"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </swiper>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--            </section>-->

            <div class="card col-lg-5 col-12"
                 v-for="(ex, key) in projects"
                 :key="key"
                 @click="goToExclusiveCar(ex)"
            >
                <div class="card-img-top" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + ex.preview + ')'" ></div>
<!--                <img :src="'http://lara.toyota.nikolaev.ua/storage/' + ex.preview" class="card-img-top" alt="preview">-->
                <div class="card-body">
                    <h5 class="card-title">{{ex.name}}</h5>
                    <p class="card-text">{{ex.description}}</p>
                </div>
            </div>
        </div>


    </main>
</template>

<script>
    import axios from "axios"
    // import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
    // import 'swiper/css/swiper.css'
    export default {
        name: "ExclusiveProjects",

        // components: {
        //     Swiper,
        //     SwiperSlide
        // },

        data() {
            return {
                projects: [],

                // swiperOption: {
                //     pagination: {
                //         el: '.swiper-pagination',
                //         type: 'fraction'
                //     },
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev'
                //     }
                // }
            }
        },

        created() {
            this.getExclusiveProjects();
        },

        methods: {
            getExclusiveProjects() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/exclusives`)
                .then( (response) => {
                    this.projects = response.data;
                    console.log(this.projects);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки проектов");
                    console.log(error);
                } )
            },

            getSlides(images) {
                console.log(JSON.parse(images));
                return JSON.parse(images);
            },

            goToExclusiveCar(car) {
                this.$router.push({name: 'exclusive_car', params: {car: car}});
            }

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
        background-color: #f0f0f0;
        header {
            padding-top: 50px;
            width: 100%;
            h1 {
                font-size: 4.5rem;
                font-weight: bolder;
            }
        }

        .body.container {
            margin: 0 auto 30px;

            .card {
                margin: 40px 15px;
                padding: 0;
                cursor: pointer;
                .card-img-top {
                    margin: 0;
                    width: 100%;
                    height: 30vw;
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                }
                .card-body {
                    padding: 15px;
                    h5.card-title {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    p.card-text {
                        font-size: 1.6rem;
                        color: #595D60;
                    }
                }
            }

            /*section {*/
            /*    margin: 40px 0;*/
            /*    cursor: pointer;*/
            /*    position: relative;*/
            /*    header {*/
            /*        margin-bottom: 30px;*/
            /*        padding: 0;*/
            /*        h2 {*/
            /*            font-size: 3rem;*/
            /*            font-weight: bold;*/
            /*        }*/
            /*    }*/
            /*    .carousel {*/
            /*        .slide.row {*/
            /*            margin: 0;*/
            /*            width: 100%;*/
            /*            height: 50vw;*/
            /*            background-repeat: no-repeat;*/
            /*            background-position: center center;*/
            /*            -webkit-background-size: cover;*/
            /*            background-size: cover;*/
            /*            img {*/
            /*                width: 100%;*/
            /*            }*/
            /*            .description {*/
            /*                position: absolute;*/
            /*                top: 30px;*/
            /*                left: 15%;*/
            /*                right: 15%;*/
            /*                !*margin: 25px;*!*/
            /*                padding: 25px;*/
            /*                background-color: rgba(255,255,255,0.5);*/
            /*                border-radius: 25px;*/
            /*                align-self: start;*/
            /*                p {*/
            /*                    font-size: 2rem;*/
            /*                }*/
            /*            }*/
            /*        }*/
            /*    }*/
            /*    footer {*/
            /*        position: absolute;*/
            /*        bottom: 15px;*/
            /*        left: 10%;*/
            /*        right: 10%;*/
            /*        padding: 10px 20px;*/
            /*        border-radius: 20px;*/
            /*        background-color: rgba(255,255,255,0.25);*/
            /*        font-size: 1.6rem;*/
            /*    }*/
            /*}*/
        }

        /*.swiper {
            width: 100%;

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
            }
        }*/
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {

            .body.container {
                .card {
                    margin: 30px 0;
                    .card-img-top {
                        height: 50vw;

                    }

                    }
                }


            }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                padding-top: 25px;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body.container {
                .card {
                    margin: 30px 0;
                    .card-img-top {
                        height: 60vw;
                    }
                }

                /*section {*/
                /*    margin: 40px 0;*/
                /*    cursor: pointer;*/
                /*    position: relative;*/
                /*    header {*/
                /*        margin-bottom: 30px;*/
                /*        padding: 0;*/
                /*        h2 {*/
                /*            font-size: 3rem;*/
                /*            font-weight: bold;*/
                /*        }*/
                /*    }*/
                /*    .carousel {*/
                /*        .slide.row {*/
                /*            margin: 0;*/
                /*            width: 100%;*/
                /*            height: 50vw;*/
                /*            background-repeat: no-repeat;*/
                /*            background-position: center center;*/
                /*            -webkit-background-size: cover;*/
                /*            background-size: cover;*/
                /*            img {*/
                /*                width: 100%;*/
                /*            }*/
                /*            .description {*/
                /*                position: absolute;*/
                /*                top: 30px;*/
                /*                left: 15%;*/
                /*                right: 15%;*/
                /*                !*margin: 25px;*!*/
                /*                padding: 25px;*/
                /*                background-color: rgba(255,255,255,0.5);*/
                /*                border-radius: 25px;*/
                /*                align-self: start;*/
                /*                p {*/
                /*                    font-size: 2rem;*/
                /*                }*/
                /*            }*/
                /*        }*/
                /*    }*/
                /*    footer {*/
                /*        position: absolute;*/
                /*        bottom: 15px;*/
                /*        left: 10%;*/
                /*        right: 10%;*/
                /*        padding: 10px 20px;*/
                /*        border-radius: 20px;*/
                /*        background-color: rgba(255,255,255,0.25);*/
                /*        font-size: 1.6rem;*/
                /*    }*/
                /*}*/
            }


        }
    }

    @media (max-width: 575.9px) {
        main {
            header {
                padding-top: 25px;
                h1 {
                    font-size: 3rem;
                }
            }

            .body.container {
                .card {
                    margin: 30px 15px;
                    .card-img-top {
                        height: 75vw;
                    }
                    .card-body {
                        h5.card-title {
                            font-size: 1.8rem;
                        }
                        p.card-text {
                            font-size: 1.4rem;
                        }
                    }
                }

                /*section {*/
                /*    margin: 40px 0;*/
                /*    cursor: pointer;*/
                /*    position: relative;*/
                /*    header {*/
                /*        margin-bottom: 30px;*/
                /*        padding: 0;*/
                /*        h2 {*/
                /*            font-size: 3rem;*/
                /*            font-weight: bold;*/
                /*        }*/
                /*    }*/
                /*    .carousel {*/
                /*        .slide.row {*/
                /*            margin: 0;*/
                /*            width: 100%;*/
                /*            height: 50vw;*/
                /*            background-repeat: no-repeat;*/
                /*            background-position: center center;*/
                /*            -webkit-background-size: cover;*/
                /*            background-size: cover;*/
                /*            img {*/
                /*                width: 100%;*/
                /*            }*/
                /*            .description {*/
                /*                position: absolute;*/
                /*                top: 30px;*/
                /*                left: 15%;*/
                /*                right: 15%;*/
                /*                !*margin: 25px;*!*/
                /*                padding: 25px;*/
                /*                background-color: rgba(255,255,255,0.5);*/
                /*                border-radius: 25px;*/
                /*                align-self: start;*/
                /*                p {*/
                /*                    font-size: 2rem;*/
                /*                }*/
                /*            }*/
                /*        }*/
                /*    }*/
                /*    footer {*/
                /*        position: absolute;*/
                /*        bottom: 15px;*/
                /*        left: 10%;*/
                /*        right: 10%;*/
                /*        padding: 10px 20px;*/
                /*        border-radius: 20px;*/
                /*        background-color: rgba(255,255,255,0.25);*/
                /*        font-size: 1.6rem;*/
                /*    }*/
                /*}*/
            }

            /*.swiper {
                width: 100%;

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
                }
            }*/
        }
    }


</style>