<template>
    <main>
        <menu>
            <nav class="navbar navbar-expand-lg navbar-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>



                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/corporate_sales/business_car"
                            >
                                Користувачам службових автомобілів
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/corporate_sales/business_owner"
                            >Власникам бізнесу</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="Corporate_clients"
                            >Корпоративним клієнтам</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="Special_solutions"
                            >Спеціальні фінансові рішення</router-link>
                        </li>

                    </ul>
                </div>
            </nav>
        </menu>
        <header class="container-fluid">
        </header>
        
        <div class="body container">
            <p>Ласкаво просимо до Toyota BusinessPlus. Це Ваш бізнес-партнер, що наближає Ваш успіх та перевершує очікування. Розуміючи Ваші персональні бізнес-потреби, ми підберемо для Вас потрібний автомобіль, надамо поради та забезпечимо будь-яку необхідну підтримку.</p>
            <h2>Що Вас цікавить?</h2>
            <section class="row">
                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/company-car2_tcm-3046-663260.jpg" alt="business_car">
                    <strong>Користувачам службових автомобілів</strong>
                    <p>Дізнайтеся більше про надійний модельний ряд Toyota та унікальну підтримку, яку ми забезпечуємо.</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Business-Sales_tcm-3046-663262.jpg" alt="business_owner">
                    <strong>Бізнес для бізнесу</strong>
                    <p>Дізнайтеся про причини працювати з Toyota BusinessPlus</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Euro-Sales_tcm-3046-663264.jpg" alt="corporate_clients">
                    <strong>Корпоративні продажі</strong>
                    <p>Зв'яжіться з нашою мережею, аби дізнатися більше про продуктову лінійку Toyota та перелік послуг.</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/555x249_Thumb_Tailored_financial_solution_tcm-3046-663266.jpg" alt="special_solutions">
                    <strong>Спеціальні фінансові рішення</strong>
                    <p>Скористайтеся можливістю придбати автомобіль Toyota за програмою «Тойота Кредит» та застрахувати його за програмою «Тойота Страхування»!</p>
                </router-link>

            </section>

            <section>
                <header>
                    <h1>Toyota BusinessPlus - це більше переваг для Вашого бізнесу</h1>
                </header>
                <div class="links row">
                    <div class="col-6">
                        <a href.prevent="#">Статус</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Якість</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Надійність</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Довговічність</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Гібридні техології</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Співвідношення ціна/якість</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Широкий модельний ряд</a>
                    </div>
                    <div class="col-6">
                        <a href.prevent="#">Велика сервісна мережа</a>
                    </div>
                </div>
            </section>


        </div>

        <section class="lineup container-fluid text-left">
            <header>
                <h1>Широкий модельний ряд. Розвинена дилерська мережа</h1>
            </header>
            <footer>
<!--                <button class="btn btn-light">Открой для себя Toyota Hybrid</button>-->
                <router-link
                        tag="button"
                        exact
                        class="btn btn-light"
                        active-class="active"
                        to=""
                >
                    Відкрий для себе Toyota Hybrid
                </router-link>
            </footer>
        </section>

    </main>
</template>

<script>
    export default {
        name: "Corporate_sales"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main {
        menu {
            width: 100%;
            padding-left: 100px;
            position: sticky;
            top: 70px;
            z-index: 999;
            left: 0;
            background-color: #fff;
            nav.navbar {
                background-color: #fff;
                font-size: 1.5rem;
                .collapse.navbar-collapse {
                    ul.navbar-nav {
                        li.nav-item {
                            padding: 0 30px;
                        }
                    }
                }
            }
        }
        header.container-fluid {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 80vh;
            background-image: url('//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/modelniy-ryad-toyota-v-ukraini-1600x900_tcm-3046-663235.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
        }
        .body.container {
            p {
                margin: 68px 0;
                font-size: 1.8rem;
            }
            h2 {
                font-size: 4.4rem;
                font-weight: bolder;
                margin: 68px 0;
            }
            section.row {
                article {
                    margin: 0 0 68px;
                    padding: 0 15px;
                    font-size: 1.6rem;
                    text-align: left;
                    img {
                        width: 100%;
                    }
                    strong {
                        display: inline-block;
                        margin: 15px 0;

                    }
                    p {
                        margin: 0;
                    }
                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        strong {
                            text-decoration: underline;
                        }
                    }
                }
            }

            section {
                header {
                    h1 {
                        font-size: 4.4rem;
                        margin-bottom: 40px;
                    }
                }
                .links.row {
                    margin: 0;
                    div {
                        margin: 0;
                        a {
                            display: inline-block;
                            font-size: 2.4rem;
                            padding: 20px 0;
                            color: $font_color;
                            margin: 0;
                        }
                    }

                }

            }


        }
        section.lineup.container-fluid {
            height: 56vh;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/rav4-hybrid-1600x450_tcm-3046-707555.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            header {
                width: 1170px;
                margin: auto;
                h1 {
                    padding-top: 150px;
                    padding-bottom: 100px;
                    font-size: 4.5rem;
                    color: #ffffff;
                    font-weight: bolder;
                }
            }
            footer {
                width: 1170px;
                margin: auto;
                button.btn {
                    @include button;
                    background-color: #f0f0f0;
                    &:hover {
                        background-color: #E50000;
                        color: #ffffff;
                    }
                }
            }
        }
    }

</style>