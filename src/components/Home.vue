<template>
    <main class="container-fluid">

        <div class="row">
            <div class="col-lg-4 col-md-8 col-12 welcome text-left">
                <h2>Ласкаво просимо<br/><strong>що вас цікавить?</strong></h2>

                <div class="button_block row">
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <router-link
                                tag="button"
                                class="btn btn-light"
                                exact
                                active-class="active"
                                to="/cars_available"
                        >
                            <!--                            <i class="fas fa-phone"></i>-->
                            <span>Авто в наявності</span>
                        </router-link>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
<!--                        <button class="btn btn-light">Корпоративні продажі</button>-->
                        <router-link
                                tag="button"
                                class="btn btn-light"
                                exact
                                active-class="active"
                                to="/general"
                        >
<!--                            <i class="fas fa-phone"></i>-->
                            <span>Корпоративні продажі</span>
                        </router-link>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <router-link
                                tag="button"
                                class="btn btn-light"
                                exact
                                active-class="active"
                                to="/exclusive_projects"
                        >
                            <!--                            <i class="fas fa-phone"></i>-->
                            <span>Екслюзивні проекти</span>
                        </router-link>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
<!--                        <button class="btn btn-light">Новини Toyota</button>-->
                        <router-link
                                tag="button"
                                class="btn btn-light"
                                exact
                                active-class="active"
                                to="world_of_toyota/news"
                        >
                            <!--                            <i class="fas fa-phone"></i>-->
                            <span>Новини Toyota</span>
                        </router-link>
                    </div>

                </div>
            </div>



            <div class="col-lg-8 col-12 links text-left row">

                <article class="col-12 block_link new_car" @click="goToConsult()">
                    <div class="background"></div>
                    <header>
                        <span class="text-uppercase">ЗАМОВИТИ ОНЛАЙН КОНСУЛЬТАЦІЮ</span>
                        <h1>Щодо придбання нових автомобілів</h1>
                    </header>
                    <span class="btn-go text-center">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </article>

                <router-link
                        tag="article"
                        exact
                        class="col-md-6 col-12 block_link service"
                        to="/service"
                >
                    <div class="background"></div>
                        <header>
                            <span>ЗВ’ЯЗАТИСЯ З ОФІЦІЙНИМ ДИЛЕРОМ </span>
                            <h1 class="text-uppercase">СЕРВІСНІ СТАНЦІЇ TOYOTA ПРАЦЮЮТЬ</h1>
                        </header>
                        <span class="btn-go text-center">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                </router-link>
<!--                <article class="col-md-6 col-12 block_link service" @click="goToService()">-->
<!--                    <header>-->
<!--                        <span>ЗВ’ЯЗАТИСЯ З ОФІЦІЙНИМ ДИЛЕРОМ </span>-->
<!--                        <h1 class="text-uppercase">СЕРВІСНІ СТАНЦІЇ TOYOTA ПРАЦЮЮТЬ</h1>-->
<!--                    </header>-->
<!--                    <span class="btn-go text-center">-->
<!--                            <i class="fas fa-chevron-right"></i>-->
<!--                        </span>-->
<!--                </article>-->


                    <article class="col-md-6 col-12 block_link hybrid" @click="goToHybrid">
                        <div class="background"></div>
                        <header>
                            <span>Твоя наступна Toyota </span>
                            <h1>Самозарядні бензиново-електричні гібриди Toyota</h1>
                        </header>
                        <span class="btn-go text-center">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </article>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name: "Home",

        metaInfo: {
            title: "Toyota Nikolaev| Нові автомобілі, вживані автомобілі, гібридні автомобілі | Toyota Миколаїв",
            meta: [
                {
                    vmid: "title",
                    property: "og:title",
                    content: `Toyota Nikolaev| Нові автомобілі, вживані автомобілі, гібридні автомобілі | Toyota Миколаїв`
                },
                {
                    vmid: "description",
                    name: "description",
                    content: `Ласкаво просимо до Toyota Миколаїв. Дізнайтеся більше про наші нові та вживані автомобілі, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                },
                {
                    vmid: "description",
                    property: "og:description",
                    content: `Ласкаво просимо до Toyota Миколаїв. Дізнайтеся більше про наші нові та вживані автомобілі, а також пропозиції щодо всіх ваших улюблених моделей. Зверніться до нас для отримання додаткової інформації.`
                },
                {
                    vmid: "keywords",
                    name: "keywords",
                    content: `toyota Mykolaiv, toyota, модельний ряд toyota, домашня сторінка, акції, новини, моделі, автомобіль, новий автомобіль, мій автомобіль, безпечні автомобілі, екологічно автомобілі, безпечний автомобіль, ідеальний автомобіль, сімейний автомобіль, міський автомобіль, позашляховик, кросовер, хетчбек`
                },
                {
                    vmid: "keywords",
                    property: "og:keywords",
                    content: `toyota Mykolaiv, toyota, модельний ряд toyota, домашня сторінка, акції, новини, моделі, автомобіль, новий автомобіль, мій автомобіль, безпечні автомобілі, екологічно автомобілі, безпечний автомобіль, ідеальний автомобіль, сімейний автомобіль, міський автомобіль, позашляховик, кросовер, хетчбек`
                },
            ],
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            goToConsult() {
                this.$router.push({name: 'consultation'});
            },

            goToHybrid() {
                // this.$router.push({params: 'https://hybrid.toyota.ua/'});
                location.href='https://hybrid.toyota.ua/'
            },
        },

    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    * {
        margin: 0;
        padding: 0;
    }

    main.container-fluid {
        padding: 0;
        .row {
            width: 100%;
            padding: 0;
            margin: 0;
            .welcome {
                padding: 35px;
                h2 {
                    font-size: 3rem;
                    line-height: 1.3;
                    padding: 25px 0 40px;
                }
                .button_block.row {
                    justify-content: space-between;
                    align-content: flex-start;
                    /*.div {*/
                        button.btn.btn-light {
                            @include button;
                            /*width: 250px !important;*/
                            background-color: #fff;
                            border: 2px solid #f0f0f0;
                            margin-bottom: 20px;
                            &:hover {
                                background-color: #E50000;
                                color: #f0f0f0;
                                border-color: #E50000;
                                transition: all 1s;
                            }
                        }
                    /*}*/
                }
            }

            .links {
                padding: 0;
                .block_link {
                    padding: 0;
                    width: 100%;
                    height: calc(50vh - 35px);
                    position: relative;
                    overflow: hidden;
                    /*align-content: flex-end;*/
                    .background {
                        width: 100%;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center center;
                        /*-webkit-background-size: 100%;*/
                        /*background-size: 100%;*/
                        -webkit-background-size: cover;
                        background-size: cover;
                    }
                    header {
                        position: absolute;
                        bottom: 0;
                        padding: 0 20px 30px;
                        color: #f0f0f0;
                        span {
                            font-size: 1.7rem;
                        }
                        h1 {
                            font-size: 2.1rem;
                            margin-top: 10px;
                            font-weight: bolder;
                        }
                    }
                    span.btn-go {
                        box-sizing: border-box;
                        position: absolute;
                        top: 30px;
                        right: 30px;
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 1px solid #f0f0f0;
                        padding: 11px 0 11px 5px;
                        i {
                            font-size: 2.5rem;
                            color: #f0f0f0;
                        }
                    }
                    &:hover {
                        .background {
                            /*-webkit-background-size: 130%;*/
                            /*background-size: 130%;*/
                            transform: scale(1.3);
                            transition: all 1s;
                            cursor: pointer;
                        }

                    }
                    &.new_car {
                        .background {
                            /*background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/new-c-hr-960x416_tcm-3046-1769744.jpg);*/
                            background-image: url(./../img/images/new-c-hr-960x416_tcm-3046-1769744.jpg);
                        }

                    }
                    &.service {
                        .background {
                            /*background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/480x416-Toyota-Service-2_tcm-3046-1771998.jpg);*/
                            background-image: url(./../img/images/480x416-Toyota-Service-2_tcm-3046-1771998.jpg);
                        }

                    }
                    &.hybrid {
                        .background {
                            /*background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/toyota-hybrid-480x416-new_tcm-3046-1772000.png);*/
                            background-image: url(./../img/images/toyota-hybrid-480x416-new_tcm-3046-1772000.png);
                        }

                    }
                }

            }
        }
    }

    @media ( min-width: 992px ) and ( max-width: 1199.9px ) {
        main.container-fluid {
            .row {
                .welcome {
                    h2 {
                        font-size: 2.4rem;
                        line-height: 1.3;
                        padding: 25px 0;
                    }
                }
            }
        }
    }

    @media ( min-width: 768px ) and ( max-width: 991.9px ) {
        main.container-fluid {

            .row {
                .links {
                    .block_link {
                        height: 50vh;
                    }

                }
            }
        }
    }

    @media ( min-width: 576px ) and ( max-width: 767.9px ) {
        main.container-fluid {
            padding: 0;
            .row {
                width: 100%;
                padding: 0;
                margin: 0;
                .welcome {
                    padding: 35px;
                    background-image: url(../img/image-sm/Toyota_cars_to_medics_2-576.jpg);
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    h2 {
                        color: #f0f0f0;
                    }
                }

                .links {
                    .block_link {
                        height: 50vh;
                        -webkit-background-size: cover;
                        background-size: cover;
                    }

                }
            }
        }
    }

    @media ( max-width: 575.9px ) {
        main.container-fluid {
            min-width: 470px;
            padding: 0;
            .row {
                width: 100%;
                padding: 0;
                margin: 0;
                .welcome {
                    padding: 35px;
                    background-image: url(../img/image-sm/Toyota_cars_to_medics_2-576.jpg);
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    h2 {
                        color: #f0f0f0;
                    }
                }

                .links {
                    .block_link {
                        height: 50vh;
                        -webkit-background-size: cover;
                        background-size: cover;
                        span.btn-go {
                            width: 40px;
                            height: 40px;
                            padding: 10px 0 10px 5px;
                            i {
                                font-size: 2rem;
                            }
                        }
                        &.new_car {
                            .background {
                                /*background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/new-c-hr-960x416_tcm-3046-1769744.jpg);*/
                                background-image: url(./../img/image-sm/new-c-hr-576x250_tcm-3046-1769744.jpg);
                            }
                        }
                    }

                }
            }
        }

    }

</style>