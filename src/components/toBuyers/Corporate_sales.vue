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
                                Пользователям служебных автомобилей
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/corporate_sales/business_owner"
                            >Собственникам бизнеса</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="Corporate_clients"
                            >Корпоротивным клиентам</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="Special_solutions"
                            >Специальные финансовые решения</router-link>
                        </li>

                    </ul>
                </div>
            </nav>
        </menu>
        <header class="container-fluid">
        </header>
        
        <div class="body container">
            <p>Добро пожаловать в Toyota BusinessPlus. Это Ваш бизнес-партнер, приближает Ваш успех и превосходит ожидания. Понимая Ваши персональные бизнес-потребности, мы подберем для Вас нужный автомобиль, предоставим советы и обеспечим любую необходимую поддержку.</p>
            <h2>Что Вас интересует?</h2>
            <section class="row">
                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/company-car2_tcm-3046-663260.jpg" alt="business_car">
                    <strong>Пользователям служебных автомобилей</strong>
                    <p>Узнайте больше про надежный модельный ряд Toyota и уникальную поддержку, которую мы обезпечиваем</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Business-Sales_tcm-3046-663262.jpg" alt="business_owner">
                    <strong>Бизнес для бизнеса</strong>
                    <p>Узнайте о причинах работать с Toyota BusinessPlus</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Euro-Sales_tcm-3046-663264.jpg" alt="corporate_clients">
                    <strong>Корпоративные продажи</strong>
                    <p>Свяжитесь с нашей сетью, чтобы узнать больше о продуктовой линейке Toyota и перечене услуг.</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-6"
                        active-class="active"
                        exact
                        to="/corporate_sales/"
                >
                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/555x249_Thumb_Tailored_financial_solution_tcm-3046-663266.jpg" alt="special_solutions">
                    <strong>Специальные финансовые решения</strong>
                    <p>Воспользуйтесь возможностью приобрести автомобиль Toyota по программе «Тойота Кредит» и застраховать его по программе «Тойота Страхование»!</p>
                </router-link>

            </section>

            <section>
                <header>
                    <h1>Toyota BusinessPlus - это больше преимуществ для Вашего бизнеса</h1>
                </header>
                <div class="links row">
                    <div class="col-6">
                        <a href="#">Статус</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Качество</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Надежность</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Долговечность</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Гибридные технологии</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Соотношение цена/качество</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Широкий модельный ряд</a>
                    </div>
                    <div class="col-6">
                        <a href="#">Большая сервисная сеть</a>
                    </div>
                </div>
            </section>


        </div>

        <section class="lineup container-fluid text-left">
            <header>
                <h1>Широкий модельный ряд. Розвитая дилерская сеть</h1>
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
                    Открой для себя Toyota Hybrid
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