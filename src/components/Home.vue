<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-8 col-12 welcome text-left">
                <h2>Добро пожаловать<br/><strong>что вас интересует?</strong></h2>

                <div class="button_block row">
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <button class="btn btn-light">Новые автомобили</button>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <button class="btn btn-light">Корпоративные продажи</button>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <button class="btn btn-light">Автомобили с пробегом</button>
                    </div>

<!--                    <br/>-->
                    <div class="col-lg-12 col-md-5 col-12 p-0">
                        <button class="btn btn-light">Новости Toyota</button>
                    </div>

                </div>
            </div>

            <div class="col-lg-8 col-12 links text-left row">

                <article class="col-12 block_link new_car" @click="goToConsult()">
                    <header>
                        <span class="text-uppercase">Заказать онлайн косультацию</span>
                        <h1>О приобретении новых автомобилей</h1>
                    </header>
                    <span class="btn-go text-center">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </article>

                    <article class="col-md-6 col-12 block_link service" @click="goToService()">
                        <header>
                            <span>Связаться с официальным диллером</span>
                            <h1 class="text-uppercase">Сервисные станции Toyota работатют</h1>
                        </header>
                        <span class="btn-go text-center">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </article>

                    <article class="col-md-6 col-12 block_link hybrid" @click="goToHybrid">
                        <header>
                            <span>Твоя следующая Toyota</span>
                            <h1>Самозарядные бензиново-электрические гибриды Toyota</h1>
                        </header>
                        <span class="btn-go text-center">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Home",

        metaInfo: {
            title: "Toyota Nikolaev| Новые автомобили, гибридные автомобили",
            meta: [
                {
                    vmid: "description",
                    name: "description",
                    content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                },
                {
                    vmid: "keywords",
                    name: "keywords",
                    content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                },
            ],
        },

        methods: {
            goToConsult() {
                this.$router.push({name: 'toyota_in_nikolaev'})
            },

            goToService() {
                this.$router.push({name: 'toyota_in_nikolaev'})
            },

            goToHybrid() {
                this.$router.push({name: 'toyota_in_nikolaev'})
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

    section.container-fluid {
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
                                border: none;
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
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    position: relative;
                    /*align-content: flex-end;*/
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
                        padding: 11px 0px 11px 5px;
                        i {
                            font-size: 2.5rem;
                            color: #f0f0f0;
                        }
                    }
                    &:hover {
                        -webkit-background-size: 110%;
                        background-size: 110%;
                        transition: 500ms linear 200ms;
                    }
                    &.new_car {
                        background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/new-c-hr-960x416_tcm-3046-1769744.jpg);
                    }
                    &.service {
                        background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/480x416-Toyota-Service-2_tcm-3046-1771998.jpg);
                    }
                    &.hybrid {
                        background-image: url(//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/toyota-hybrid-480x416-new_tcm-3046-1772000.png);
                    }
                }

            }
        }
    }

    @media ( min-width: 992px ) and ( max-width: 1199.9px ) {
        section.container-fluid {
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
        section.container-fluid {

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
        section.container-fluid {
            padding: 0;
            .row {
                width: 100%;
                padding: 0;
                margin: 0;
                .welcome {
                    padding: 35px;
                    background-image: url(../img/Toyota_cars_to_medics_2.jpg);
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
        section.container-fluid {
            min-width: 470px;
            padding: 0;
            .row {
                width: 100%;
                padding: 0;
                margin: 0;
                .welcome {
                    padding: 35px;
                    background-image: url(../img/Toyota_cars_to_medics_2.jpg);
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
                    }

                }
            }
        }

    }

</style>