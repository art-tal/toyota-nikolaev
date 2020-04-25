<template>
    <main class="container">
        <header>
<!--            :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + car.main_image +  ')'"-->
            <h1>Toyota {{car.model}}</h1>
        </header>

        <section class="row">
<!--            <div class="col-md-6 col-12">-->

<!--                <img :src="'http://lara.toyota.nikolaev.ua/storage/' + image" :alt="car.model">-->

<!--                <div class="row collection_img">-->

<!--                    <div class="col-4 item_img"-->
<!--                         v-for="(img, key) in images" :key="key"-->
<!--                         @click.prevent="changeImg(img)"-->
<!--                    >-->
<!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + img" :alt="car.model">-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->


<!--            SWIPPER-->
            <div class="col-md-6 col-12">
                <div class="thumb-example">
                    <!-- swiper1 -->
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide v-for="(img, key) in images" :key="key"
                                :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + img + ')' "
                        ></swiper-slide>

                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide  v-for="(img, key) in images" :key="key"
                                       :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + img + ')' "
                        ></swiper-slide>

                    </swiper>
                </div>
            </div>
            <!--            SWIPPER-->

            <div class="col-md-6 col-12">
                <ul class="text-left">
                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Рік випуску</span>
                        <span>{{car.year}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Тип палива</span>
                        <span>{{car.fuel_type}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Об'єм двигуна</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Потужність</span>
                        <span>{{car.horspower}} к.с.</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Тип приводу</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Колір кузова</span>
                        <span>{{car.color}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Інтер'єр</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Салон</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Комплектація</span>
                        <span>{{car.modification}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Тип кузова</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Коробка передач</span>
                        <span>{{car.gearbox}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Кількість місць</span>
                        <span>{{x}}</span>
                    </li>

                    <li class="d-flex justify-content-between">
                        <span class="flex-grow-1">Ціна</span>
                        <span>{{car.price}} &#8372;</span>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from "axios"
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "Car",

        data() {
            return {
                id: 0,
                car: {},
                image: "",
                images: [],
                x: "???????",



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
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            }
        },

        components: {
            Swiper,
            SwiperSlide
        },

        created() {
            this.id = this.$route.params['id'];
            console.log(this.id);
            this.getCar(this.id);
            // this.getModification();
            // this.getColor();
            // this.getEngine();
            // this.getGearBox();
        },

        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper;
                const swiperThumbs = this.$refs.swiperThumbs.$swiper;
                swiperTop.controller.control = swiperThumbs;
                swiperThumbs.controller.control = swiperTop;
            });
        },

        methods: {
            getCar(id) {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/available_cars",
                    {params: {id: id}},
                )
                    .then( (response) => {
                        this.car = response.data[0];
                        console.log(this.car);
                        this.images = JSON.parse( this.car.image );
                        this.image = this.images[0];
                        console.log(this.images);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить имеющиеся автомобили");
                        console.log(error);
                    })
            },

            changeImg(img) {
                this.image = img
            },

            // getModification(id) {
            //     axios.get(
            //         `http://lara.toyota.nikolaev.ua/ajax/-------`,
            //         {params: {id: id}}
            //     )
            //         .then( (response) => {
            //             console.log(response.data);
            //             return response.data;
            //         } )
            //         .catch( (error) => {
            //             console.log("Ошибка определения модификации");
            //             console.log(error);
            //             return "";
            //         } )
            // },
            //
            // getColor(id) {
            //     axios.get(
            //         `http://lara.toyota.nikolaev.ua/ajax/-------`,
            //         {params: {id: id}}
            //     )
            //         .then( (response) => {
            //             console.log(response.data);
            //             return response.data;
            //         } )
            //         .catch( (error) => {
            //             console.log("Ошибка определения цвета");
            //             console.log(error);
            //             return "";
            //         } )
            // },
            //
            // getEngine(id) {
            //     axios.get(
            //         `http://lara.toyota.nikolaev.ua/ajax/-------`,
            //         {params: {id: id}}
            //     )
            //         .then( (response) => {
            //             console.log(response.data);
            //             return response.data;
            //         } )
            //         .catch( (error) => {
            //             console.log("Ошибка определения Двигателя");
            //             console.log(error);
            //             return "";
            //         } )
            // },
            //
            // getGearBox(id) {
            //     axios.get(
            //         `http://lara.toyota.nikolaev.ua/ajax/-------`,
            //         {params: {id: id}}
            //     )
            //         .then( (response) => {
            //             console.log(response.data);
            //             return response.data;
            //         } )
            //         .catch( (error) => {
            //             console.log("Ошибка определения цвета");
            //             console.log(error);
            //             return "";
            //         } )
            // },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container {
        /*margin: 0;*/
        padding: 0;

        header {
            /*margin-bottom: 68px;*/
            /*width: 100%;*/
            /*height: 80vh;*/
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            h1 {
                font-size: 5.2rem;
                font-weight: bolder;
                margin: 40px 0;
                /*color: #ffffff;*/
            }
        }

        section.row {
            div {
                img {
                    width: 100%;
                    height: auto;
                }
                .collection_img {
                    .item_img {
                        padding: 15px;
                    }

                }

                ul {
                    list-style-type: none;
                    li {
                        font-size: 1.8rem;
                        color: #6c7073;
                        padding: 12px 20px;
                        &:nth-child(odd) {
                            background-color: #f0f0f0;
                        }
                        &:last-child {
                            font-weight: bold;
                            color: $font_color;
                            font-size: 2.2rem;
                        }
                    }
                }
            }
        }
    }

    .thumb-example {
        height: 480px;
        background-color: black;
    }
    .swiper {
        .swiper-slide {
            background-size: cover;
            background-position: center;

        }
        &.gallery-top {
            height: 80%;
            width: 100%;
        }
        &.gallery-thumbs {
            height: 20%;
            box-sizing: border-box;
            padding: 0;
        }
        &.gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }
        &.gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
    }

</style>