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
            <div class="carousel col-md-6 col-12">
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

            <div class="col-md-6 col-12 text-left">
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
                        <span>{{car.price | formattedPrice}} &#8372;</span>
                    </li>
                </ul>

                <button class="btn btn-light">
                    <i class="far fa-file"></i>
                    <span>Завантажити PDF</span>
                </button>

                <article class="diler">
                    <header>
                        <h1>Тойота Центр Миколаїв «КиТ-Т»</h1>
                    </header>
                    <p>Україна, Миколаїв 54028,<br/>
                        Херсонське шосе, 109<br/>
                        (0512) 71-00-00<br/>
                        (096) 168-11-11<br/>
                        (050) 692-11-11
                    </p>
                    <footer>
                        <button class="btn btn-danger">Надіслати заявку</button>
                    </footer>
                </article>
            </div>
        </section>

        <div class="advantages row">
            <div class="col-4">
                <img src="../../img/icon-grant.png" alt="support">
                <span>Постгарантійна підтримка</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-buy.png" alt="buy">
                <span>Прозора історія</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-speed.png" alt="speed">
                <span>Перевірений пробіг</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-service.png" alt="service">
                <span>Технічна перевірка</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-keys.png" alt="keys">
                <span>Сів та поїхав</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-credit.png" alt="credit">
                <span>Кредит та страхування</span>
            </div>

            <div class="col-4">
                <img src="../../img/icon-helpInRoad.png" alt="help in road">
                <span>Допомога на дорозі</span>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from "axios"
    // import formattedPrice from "../../filters/price_format";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        name: "Car",

        data() {
            return {
                id: 0,
                car: {},
                image: "",
                images: [],
                x: "???????",

                modelTitle: "",
                modificationTitle: "",

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

        filters: {
            // formattedPrice,
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
                        this.modelTitle = this.car.model;
                        this.modificationTitle = this.car.modification;
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить имеющиеся автомобили");
                        console.log(error);
                    })
            },

            // changeImg(img) {
            //     this.image = img
            // },

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

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Toyota ${this.modelTitle} ${this.modificationTitle} в автосалоні Toyota Nikolaev. Офіційний дилер Тойота у Миколаєві; Автомобілі, що є в наявності в автосалоні; Продаж моделей Toyota із гарантією 3 роки; Продаж моделей Toyota у кредит або лізинг;`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev |  Toyota ${this.modelTitle} ${this.modificationTitle} в автосалоні Toyota Nikolaev. Офіційний дилер Тойота у Миколаєві; Автомобілі, що є в наявності в автосалоні; Продаж моделей Toyota із гарантією 3 роки; Продаж моделей Toyota у кредит або лізинг;`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Ласкаво просимо до Toyota Миколаїв. Ви маєте змогу ближче ознайомитись із автомобілем Toyota ${this.modelTitle} ${this.modificationTitle}, що є наявності в автосалоні, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Ласкаво просимо до Toyota Миколаїв. Ви маєте змогу ближче ознайомитись із автомобілем Toyota ${this.modelTitle} ${this.modificationTitle}, що є наявності в автосалоні, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, Toyota, Toyota ${this.modelTitle} ${this.modificationTitle}, авто в наявності, авто в автосалоні, оглянути автомобілі в автосалоні, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, Toyota, Toyota ${this.modelTitle} ${this.modificationTitle}, авто в наявності, авто в автосалоні, оглянути автомобілі в автосалоні, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    },
                ],
            }
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
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 50px;
            position: relative;
            div {
                /*img {
                    width: 100%;
                    height: auto;
                }

                .collection_img {
                    .item_img {
                        padding: 15px;
                    }

                }*/

                &.carousel {
                    .thumb-example {
                        position: sticky;
                        top: 0;
                        bottom: 0;
                    }
                }

                ul {
                    list-style-type: none;
                    margin-bottom: 30px;
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

                button.btn.btn-light {
                    @include button;
                    width: auto;
                    padding: 10px 30px;
                    background-color: #f0f0f0;
                    margin-left: 40px;
                    i {
                        display: inline-block;
                        margin-right: 15px;
                    }
                }
            }

            article {
                margin-left: 40px;
                margin-top: 40px;
                border-top: 1px solid #f0f0f0;
                header {
                    h1 {
                        font-size: 2.2rem;
                        color: $font_color;
                        margin: 25px 0;
                    }
                }
                p {
                    font-size: 1.6rem;
                    line-height: 1.75;
                }
                footer {
                    margin-top: 25px;
                    button.btn.btn-danger {
                        @include button;
                        background-color: #E50000;
                        width: auto;
                        padding: 10px 30px;
                    }
                }
            }
        }

        .advantages.row {
            padding: 40px 0;
            border-bottom: 1px solid #f0f0f0;
            div {
                padding: 20px;
                img {
                    width: 64px;
                    height: 64px;
                }
                span {
                    display: block;
                    font-size: 2.2rem;
                    color: #1E2A32;
                    margin-top: 10px;
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