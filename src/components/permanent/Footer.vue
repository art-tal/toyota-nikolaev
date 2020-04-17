<template>
    <footer>

        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 legal_links">
                        <a href="#" class="contact">Зв’язатись з нами</a>
                        <a href="#" class="legalInformation">Юридична інформація</a>
                        <a href="#" class="privacySetting">Налаштування приватності</a>
                </div>

                <div class="map col-md-6 col-12 text-right">
                    <a href="#app" class="up">Нагору</a>
                    <div class="mapSite">
                        <a href="#">
                            <span>Карта сайту</span>
                            <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="mapSiteDown">

                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
            <div class="col-md-6 col-12 text-left law">
                <p>© 2020 ПІІ «Тойота-Україна». Усі права зберігаються за правовласником. <br>
                    Розміщена на цьому сайті інформація щодо характеристик продукції, (орієнтовних) цін, інших умов її продажу, а також умов надання будь-яких послуг не є пропозицією укласти договір (офертою). Така інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.
                </p>
            </div>
            <div class="col-6 social">
                <a href="#">
                    <img src="../../img/icons8-youtube-squared.png" alt="icons8-youtube-squared.svg">
                </a>
                <a href="#">
                    <img src="../../img/icons8-facebook-old.png" alt="icons8-facebook-old.svg">
                </a>
                <a href="#">
                    <img src="../../img/icons8-instagram.png" alt="icons8-instagram.svg">
                </a>
            </div>
        </div>
        </div>

        <div class="info container-fluid px-0">
            <div class="container">
                <div class="row text-left">
                    <article class="col-md-3 col-12">
                        <header>
                            <h1>Графік роботи</h1>
                        </header>
                        <hr class="bg-danger w-25 mx-0">
                        <ul>
                            <li>Пн-Пт: 09:00 - 18:00</li>
                            <li>Сб: 10:00 - 17:00</li>
                            <li>Нд: вихідний день</li>
                            <li>Дізнатися більше можна, написавши на скриньку <a href="mailto:info@toyota.nikolaev.ua">Toyota інформація</a></li>
                        </ul>
                    </article>

                    <article class="col-md-3 col-12">
                        <header>
                            <h1>Продаж авто</h1>
                        </header>

                        <hr class="bg-danger w-25 mx-0">


                        <ul>
                            <li>(0512) 71-00-00</li>
                            <li>(096) 168-11-11</li>
                            <li>(050) 692-11-11</li>
                        </ul>
                    </article>

                    <article class="col-md-3 col-12">
                        <header>
                            <h1>Сервіс</h1>
                        </header>
                        <hr class="bg-danger w-25 mx-0">
                        <ul>
                            <li>(0512) 71-44-44</li>
                            <li>(067) 617-48-70</li>
                            <li></li>
                        </ul>
                    </article>

                    <article class="col-md-3 col-12">
                        <header>
                            <h1>Адреса</h1>
                        </header>
                        <hr class="bg-danger w-25 mx-0">
                        <ul>
                            <li>Україна, Миколаїв 54028,</li>
                            <li>Херсонське шосе, 109</li>
                            <li>
                                <a href="">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Відкрити карту</span>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>


            <div class="row w-100 py-4 mx-0 justify-content-center bg-light">© 2019 Тойота Центр Миколаїв «КиТ-Т» — офіційний дилер Тойота в Україні</div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    footer {
        min-width: 470px;
        margin-top: 68px;
        .container {
            .row {
                .legal_links {
                    display: flex;
                    justify-content: space-between;
                    a {
                        display: block;
                        margin-bottom: 24px;
                        color: $font_color;
                        font-size: 1.5rem;
                    }
                }
                .map {
                    font-size: 1.5rem;
                    a {
                        color: $font_color;
                    }
                    .mapSite {
                        margin-left: 25px;
                        display: inline-block;
                        i {
                            color: #E50000;
                            margin-left: 5px;
                            margin-top: 5px;
                            font-size: 1rem;
                            vertical-align: top;
                        }
                    }
                }
                .law {
                    font-size: 1.3rem;
                    color: #595D60;
                }
                .social {
                    text-align: right;
                    a {
                        width: 32px;
                        height: 32px;
                        padding-left: 10px;
                        img {
                            width: 32px;
                            opacity: 0.5;
                        }
                        &:hover {
                            img {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
        .info.container-fluid {
            width: 100%;
            margin-top: 20px;
            background-color: #edf0f5;
            .container {
                .row {
                    /*width: 1170px;*/
                    /*margin: 0 auto;*/
                    padding: 40px 0;
                    article {
                        padding: 0 25px;
                        header {
                            h1 {
                                font-size: 1.6rem;
                                text-transform: uppercase;
                                color: $font_color;
                            }
                        }
                        hr {
                            margin: 15px 0;
                        }
                        ul {
                            margin: 0;
                            padding: 0;
                            list-style-type: none;
                            li {
                                font-size: 1.6rem;
                                margin-bottom: 5px;
                                color: $font_color;
                                a {
                                    color: $font_color;
                                    i {
                                        display: inline-block;
                                        margin-right: 10px;
                                    }
                                    &:hover {
                                        color: #E50000;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .row {
                /*background-color: #fff;*/
                font-size: 1.4rem;
            }

        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        footer {
            .container {
                .row {
                    .legal_links {
                        flex-wrap: wrap;
                        a {
                            display: block;
                            text-align: left;
                            width: 50%;
                        }
                    }
                    .map {
                        font-size: 1.5rem;
                        a {
                            color: $font_color;
                        }
                        .mapSite {
                            margin-left: 25px;
                            display: inline-block;
                            i {
                                color: #E50000;
                                margin-left: 5px;
                                margin-top: 5px;
                                font-size: 1rem;
                                vertical-align: top;
                            }
                        }
                    }
                    .law {
                        font-size: 1.3rem;
                        color: #595D60;
                    }
                    .social {
                        a {
                            width: 32px;
                            height: 32px;
                            padding-left: 10px;
                            img {
                                width: 32px;
                                opacity: 0.5;
                            }
                            &:hover {
                                img {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        footer {
            .container {
                margin: 68px auto;
                .row {
                    .legal_links {
                        flex-wrap: wrap;
                        a {
                            display: block;
                            text-align: left;
                        }
                    }
                }
            }
            .info.container-fluid {
                .container {
                    margin-bottom: 0;
                    .row {
                        article {
                            padding: 0 5px;
                            header {
                                h1 {
                                    font-size: 1.5rem;
                                }
                            }
                            ul {
                                li {
                                    font-size: 1.4rem;

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and  (max-width: 767.9px) {
        footer {
            .container {
                margin: 68px auto;
                .row {
                    .legal_links {
                        flex-wrap: wrap;
                        a {
                            display: block;
                            text-align: left;
                        }
                    }
                    .map {
                        display: none;
                    }
                    .social {
                        text-align: center;
                        margin: 37px auto 15px;
                        a {
                            width: 32px;
                            height: 32px;
                            padding-left: 10px;
                            img {
                                width: 32px;
                                opacity: 0.5;
                            }
                            &:hover {
                                img {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }
            }
            .info.container-fluid {
                .container {
                    margin-bottom: 0;
                    .row {
                        padding: 20px 0;
                        article {
                            padding: 20px 25px;
                        }
                    }
                }
                .row {
                    font-size: 1.4rem;
                }

            }
        }
    }

    @media (max-width: 575.9px){
        footer {
            .container {
                margin: 68px auto;
                .row {
                    .legal_links {
                        flex-wrap: wrap;
                        a {
                            display: block;
                            text-align: left;
                        }
                    }
                    .map {
                        display: none;
                    }
                    .social {
                        text-align: center;
                        margin: 37px auto 15px;
                        a {
                            width: 32px;
                            height: 32px;
                            padding-left: 10px;
                            img {
                                width: 32px;
                                opacity: 0.5;
                            }
                            &:hover {
                                img {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }
            }
            .info.container-fluid {
                .container {
                    margin-bottom: 0;
                    .row {
                        /*width: 1170px;*/
                        /*margin: 0 auto;*/
                        padding: 40px 0;
                        article {
                            padding: 0 25px;
                            header {
                                h1 {
                                    font-size: 1.6rem;
                                    text-transform: uppercase;
                                    color: $font_color;
                                }
                            }
                            hr {
                                margin: 15px 0;
                            }
                            ul {
                                margin: 0;
                                padding: 0;
                                list-style-type: none;
                                li {
                                    font-size: 1.6rem;
                                    margin-bottom: 5px;
                                    color: $font_color;
                                    a {
                                        color: $font_color;
                                        i {
                                            display: inline-block;
                                            margin-right: 10px;
                                        }
                                        &:hover {
                                            color: #E50000;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .row {
                    /*background-color: #fff;*/
                    font-size: 1.4rem;
                }

            }
        }
    }
</style>