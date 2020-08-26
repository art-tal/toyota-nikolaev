<template>
    <main>
        <menu-nikolaev/>
        <div v-html="pageBody"></div>

<!--        <header></header>-->

<!--        <div class="body container text-left">-->
<!--            <p><b>Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві</b>, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.</p>-->
<!--            <p>У салоні представлений повний модельний ряд автомобілів марки Toyota. На території дилерського центру розташовані станція технічного обслуговування, що надає послуги з гарантійного і післягарантійного обслуговування автомобілів, а також широка база оригінальних запасних частин і аксесуарів, малярна ділянка, ділянка кузовних робіт, автомобільна мийка.</p>-->
<!--            <p>Купуючи автомобіль в нашому дилерському центрі «Тойота Центр Миколаїв», Ви отримаєте наступні переваги:</p>-->

<!--            <ul>-->
<!--                <li>легальність і чесність угоди;</li>-->
<!--                <li>автомобілі японського якості;</li>-->
<!--                <li>заводська гарантія, яка діє 3 роки або 100 тис. км пробігу;</li>-->
<!--                <li>ремонт автомобілів за стандартами Toyota;</li>-->
<!--                <li>офіційна сервісна історія;</li>-->
<!--                <li>служба допомоги в дорозі Toyota Assistance;</li>-->
<!--                <li>унікальна клієнтська служба;</li>-->
<!--                <li>великий вибір оригінальних запасних частин;</li>-->
<!--                <li>кредитні програми;</li>-->
<!--                <li>можливість тест-драйву всього модельного ряду.</li>-->
<!--            </ul>-->

<!--            <p>Офіційний дилерський центр Тойота Центр Миколаїв «Кіт-Т» надасть Вам можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і до моменту їх подальшого продажу.</p>-->
<!--            <p>Ми цінуємо кожного клієнта і щодня строго дотримуємося основного правила - «Клієнт - понад усе».</p>-->
<!--            <p><strong>Особисто для Вас це означає, що кожен раз, сідаючи в крісло водія автомобіля марки Toyota і запускаючи двигун, Ви будете почувати себе повністю впевненими, знаючи, що автомобіль, за кермом якого Ви сидите, спроектовано та виготовлено згідно з найвищими нормативами контролю якості та надійності. Для компанії «Тойота» якість - це не обіцянка, а стиль життя!</strong></p>-->
<!--        </div>-->

        <section class="reviews container">
            <header>
                <h1>Відгуки</h1>
            </header>
            <div class="body">
                <div class="row">
                    <div class="review col-lg-3 col-md-4 col-sm-6 col-12"
                         v-for="(rev) in reviews"
                         :key="rev.id"
                    >
                        <div class="card" @click="openBrowsing(rev)">
                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + rev.photo"
                                 alt="review"
                                 class="card-img-top"
                            >
                            <i class="fas fa-search-plus"></i>
                            <hr>
                            <div class="card-body">
                                <h3 class="card-title">{{rev.organization}}</h3>
                            </div>
                        </div>
                    </div>









<!--                    <div class="review col-lg-3 col-md-4 col-sm-6 col-12"-->
<!--                         v-for="(rev) in reviews"-->
<!--                         :key="rev.id"-->
<!--                         @click="openBrowsing(rev.photo)"-->
<!--                    >-->
<!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + rev.photo" alt="review">-->
<!--                        <h3>{{rev.organization}}</h3>-->
<!--                    </div>-->
                </div>
            </div>
        </section>

        <div class="browsing" v-if="show">
            <div class="browsing_wrap">
                <i class="far fa-times-circle" @click="showBrowsing = false"></i>
                <img :src="getSelectedImg" alt="review">
            </div>

        </div>

    </main>
</template>

<script>
    import axios from "axios";
    import MenuNikolaev from "./../../components/ToyotaInNikolaev/MenuNikolaev";
    import PageBody from "../../mixins/mixinPages";

    export default {
        name: "About",

        components: {
            MenuNikolaev
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 38,

                reviews: [],
                showBrowsing: false,
                selectedImg: '',
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Про нас | Тойота Центр Миколаїв «КиТ-Т»`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Про нас | Тойота Центр Миколаїв «КиТ-Т»`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, про нас, Тойота Центр Миколаїв «КиТ-Т»`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, про нас, Тойота Центр Миколаїв «КиТ-Т»`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        created() {
            this.getReviews();
        },

        computed: {
            getSelectedImg() {
                return "http://lara.toyota.nikolaev.ua/storage/" + this.selectedImg;
            },

            show() {
                return this.showBrowsing;
            },
        },

        methods: {
            getReviews() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/reviews"
                )
                .then( (response) => {
                    this.reviews = response.data;
                    console.log(this.reviews);
                } )
                .catch( (error) => {
                    console.log(error);
                } )
            },

            openBrowsing(review) {
                this.showBrowsing = true;
                this.selectedImg = review.photo;

            },
        }

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }
    
    main ::v-deep div {
        header {
            @include header-xl;
            background-image: url(../../img/background/toyota_ng.jpg);
        }

        .body.container {
            margin: 68px auto;

            .p {
                font-size: 1.8rem;
                margin: 30px 0;
            }

            ul {
                list-style-type: none;
                padding: 0;
                li {
                    font-size: 1.8rem;
                }
            }
        }
    }

    main {
        position: relative;
        section.reviews {
            header {
                margin-bottom: 30px;
                h1 {
                    font-size: 3.5rem;
                    font-weight: bolder;
                }
            }

            .body {
                .row {
                    padding: 0;

                    .review {
                        padding: 30px;
                        .card {
                            position: relative;
                            height: 100%;
                            border: 2px solid #ccc;
                            border-radius: 10px;
                            background-color: #eee;
                            &:hover {
                                cursor: pointer;
                                transform: scale(1.1);
                                transition-property: transform;
                                transition-duration: 1000ms;
                                i.fas.fa-search-plus {
                                    opacity: 1;
                                    transition-property: opacity;
                                    transition-duration: 1000ms;
                                }
                            }
                            img {
                                width: 100%;
                            }
                            i.fas.fa-search-plus {
                                opacity: 0;
                                font-size: 7rem;
                                color: rgba(0,0,0,0.2);
                                position: absolute;
                                top: 25%;
                                left: 33%;
                            }
                            hr {border-bottom: 2px solid #cccccc }
                            h3.card-title {
                                font-size: 1.4rem;
                                font-weight: bold;
                            }
                        }

                    }
                }
            }
        }

        .browsing {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
            background-color: rgba(255,255,255,0.8);
            .browsing_wrap {
                margin: 0 auto;
                width: auto;
                height: 100%;
                position: relative;
                img {
                    height: 100%;
                    border: 1px solid #595D60;
                }
                i.far.fa-times-circle {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    color: #595D60;
                    font-size: 2.5rem;
                }
            }

        }


    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main ::v-deep div {
            header {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main ::v-deep div {
            header {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main ::v-deep div {
            header {
                @include header-sm;
                background-image: url(../../img/background-sm/toyota_ng.jpg);
            }
        }
    }

    @media (max-width: 575.9px) {
        main ::v-deep div {
            header {
                @include header-xs;
                background-image: url(../../img/background-sm/toyota_ng.jpg);
            }

            .body.container {
                margin: 30px auto;

                .p {
                    font-size: 1.6rem;
                    margin: 30px 0;
                }

                ul {
                    li {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }

</style>