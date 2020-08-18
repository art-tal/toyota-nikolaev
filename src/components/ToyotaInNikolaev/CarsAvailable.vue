<template>
    <main class="container-fluid">
        <menu-nikolaev/>
        <header class="position-relative">
<!--            <img src="../../img/toyota-nikolaev-.jpg" alt="toyota-nikolaev.jpg">-->
            <h1>Автомобілі в салоні</h1>
        </header>
        <div class="body container">
            <h2>У нашому салоні ви можете ознайомиться з моделями, що є в наявності</h2>

            <div class="row carAvailable">
                <div class="wrap col-md-6 col-12"
                     v-for="(car, key) in cars"
                     :key="key"
                     @click="goToCar(car.available_cars_id)"
                >
                    <article class="card car"
                    >
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + car.main_image" :alt="car.name"  class="card-img-top">
                        <div>
                            <h3 class="card-title">{{car.name}} {{car.modification}} {{car.color}}</h3>
                            <p class="card-text">ціна {{car.price | formattedPrice}} грн.* | {{car.year}} р.в.</p>
                        </div>

                    </article>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
    import MenuNikolaev from "./../../components/ToyotaInNikolaev/MenuNikolaev";
    import axios from "axios"
    import formattedPrice from "../../filters/price_format";

    export default {
        name: "CarsAvailable",

        components: {
            MenuNikolaev
        },

        data() {
            return {
                cars: [],
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Автомобілі в салоні.`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Автомобілі в салоні.`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Ласкаво просимо до Toyota Миколаїв. Ви маєте змогу ближче ознайомитись із автомобілями, що є наявності в автосалоні, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Ласкаво просимо до Toyota Миколаїв. Ви маєте змогу ближче ознайомитись із автомобілями, що є наявності в автосалоні, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, Toyota, модельный ряд toyota, авто в наявності, авто в автосалоні, оглянути автомобілі в автосалоні, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, Toyota, модельный ряд toyota, авто в наявності, авто в автосалоні, оглянути автомобілі в автосалоні, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    },
                ],
            }
        },

        filters: {
            formattedPrice
        },

        created() {
            this.getCars();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            getCars() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/available_cars"
                )
                    .then( (response) => {
                        console.log(response.data);
                        this.cars = response.data;
                        // return response.data;
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить имеющиеся автомобили");
                        console.log(error);
                    })
            },

            // getModification(id) {
            //     axios.get(
            //         `http://lara.toyota.nikolaev.ua/ajax/-------`,
            //     {params: {id: id}}
            //     )
            //     .then( (response) => {
            //         console.log(response.data);
            //         return response.data;
            //     } )
            //     .catch( (error) => {
            //         console.log("Ошибка определения модификации");
            //         console.log(error);
            //         return "";
            //     } )
            // },

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

            goToCar(id) {
                console.log(id);
                this.$router.push( {name: "car", params: {id: id}} );
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        margin: 0;
        padding: 0;

        header {
            margin-bottom: 68px;
            width: 100%;
            height: 80vh;
            background-image: url(../../img/background/toyota-nikolaev-.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            /*image {*/
            /*    width: 100vw;*/
            /*    height: auto;*/
            /*}*/
            h1 {
                /*width: 100vw;*/
                /*position: absolute;*/
                /*left: 0;*/
                /*top: 30px;*/
                font-size: 5.2rem;
                font-weight: bolder;
                color: #ffffff;
            }
        }

        .body.container {
            h2 {
                font-size: 4.4rem;
                margin-bottom: 50px;
            }

            .row.carAvailable {
                div.wrap {
                /*    display: inline-block;*/
                    margin: 15px 0;
                /*    box-sizing: border-box;*/
                    article.card.car {
                        background-color: #f0f0f0;
                        img {
                            width: 100%;
                            height: auto;
                            /*border-bottom: 1px solid #f0f0f0;*/
                        }
                        div {
                            background-color: #f0f0f0;
                            h3.card-title {
                                margin: 15px 0;
                                font-size: 2.0rem;
                                font-weight: bold;
                            }
                            p {
                                text-align: left;
                                font-size: 1.8rem;
                                padding: 0 15px;
                                margin-bottom: 30px;
                            }
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }


    @media (min-width: 768px) and (max-width: 1199.9px) {
        main.container-fluid {
            header {
                max-height: 60vw;
            }

            .body.container {
                h2 {
                    font-size: 3.5rem;
                }
            }
        }
    }


    @media (max-width: 767.9px) {
        main.container-fluid {
            header {
                height: 56vw;
                margin-bottom: 30px;
                h1 {
                    font-size: 3.5rem;
                    /*padding-top: 50px;*/
                }
            }

            .body.container {
                h2 {
                    font-size: 2.4rem;
                    margin-bottom: 30px;
                }
            }
        }
    }


</style>