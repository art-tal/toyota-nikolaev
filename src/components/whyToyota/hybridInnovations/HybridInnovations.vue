<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/11/logo-hybrid.png" alt="logo-hybrid">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item active">
                        <a class="nav-link" href="#">Технологія Hybrid</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Як працює</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Переваги</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Модельний ряд</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Блог</a>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                tag="a"
                                exact
                                to="/hybrid_drive"
                        >HYBRID DRIVE</router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>

                </ul>

            </div>
        </nav>

        <header class="container-fluid">

            <div class="video">
                <video width="100%" src="https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/intro-video.mp4"
                loop autoplay muted
                >
                    <source type="video/mp4" src="https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/intro-video.mp4">
                </video>
            </div>

            <div class="hybrid">

                <div class="row">
                    <div class="col-6">
                        <h1 class="text-right">ТВОЯ НАСТУПНА TOYOTA</h1>
                    </div>
                    <div class="col-5">
                        <div class="hybrids text-left">
                            <h2>Самозарядні бензиново-електричні гібриди Toyota</h2>
                            <p>Сучасний водій прагне стати власником автомобіля, який би відповідав вимогам нового стилю життя та підвищеним стандартам якості. Самозарядні бензиново-електричні гібриди Toyota задовольняють сучасні критерії ефективності, надійності та прогресивності.</p>
                            <button class="btn btn-danger">
                                <span>Форма зв'язку</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="body container-fluid">
            <section class="row twenty_years">
                <div class="col-6"></div>
                <div class="col-6">
                    <h1 class="text-left">Понад 20 рокiв лiдерства</h1>
                    <h4 class="text-left">Компанія Toyota вже понад 20 років залишається новатором у виробництві гібридних автомобілів. Історія гібридних авто Toyota почалася ще у 1994 році, коли компанія реалізувала інноваційний проект під назвою G-21, подарувавши світу першу ефективну гібридну технологію та розпочавши еру екологічного автотранспорту. Офіційно виробництво моделей Toyota Hybrid стартувало в 1997 році, з випуском першого в світі серійного гібридного автомобіля Toyota Prius.</h4>

                    <div class="row">
                        <div class="col-2">
                            <img src="https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/PDF_Booklet_Download.png" alt="img">
                        </div>
                        <div class="col-6 text-left">
                            <h5>Твоя наступна Toyota»</h5>
                            <i>Наш буклет у форматі PDF</i>
                        </div>
                        <div class="col-4">
                            <a href="https://hybrid.toyota.ua/wp-content/uploads/2020/01/Buklet-A3_update_.pdf" class="btn btn-danger" download target="_blank">
                                <span>Завантажити</span>
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>


                </div>

                <div class="planet"></div>
            </section>

            <section class="row whats_wrong">
                <div class="col-6">
                    <h2>Що таке гiбрид?</h2>

                    <div class="row">
                        <div class="col-5">
                            <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/electricity.svg" alt="">
                        </div>
                        <div class="col-7">
                            <h4>Не потребує електромережі</h4>
                            <p>На відміну від повністю електричних автомобілів, гібрид завжди готовий до руху, адже батарея заряджається автоматично.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-5">
                            <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/intuision.svg" alt="">
                        </div>
                        <div class="col-7">
                            <h4>Простота управління</h4>
                            <p>Вмикається, коли є потреба: залежно від умов гібридна система автоматично керує електромотором чи бензиновим двигуном.
                                Лінійне прискорення автомобіля завдяки гібридній безступеневій трансмісії з електронним керуванням.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-5">
                            <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/dynamic.svg" alt="">
                        </div>
                        <div class="col-7">
                            <h4>Економічність у місті</h4>
                            <p>Гібридні автомобілі дають змогу заощаджувати на пальному завдяки економічності, особливо в умовах інтенсивного руху містом, заторів.</p>
                        </div>
                    </div>

                </div>
                
                
                <div class="col-6">
                    <h3>Toyota – флагман гібридної технології, що реалізовує принцип спільного використання двигуна внутрішнього згоряння (ДВЗ) та високовольтної батареї.</h3>

                    <div class="video">
                        <!--                <video width="100%"-->
                        <!--                       src="../../../video/Original_filter.mp4"-->
                        <!--                       controls="controls"-->
                        <!--                       type="video/mp4"-->
                        <!--                       poster="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/youtube-parts_tcm-3046-1399144.jpg">-->
                        <!--                </video>-->

                        <div class="img_button" @click="openVideo()">
                            <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/youtube-parts_tcm-3046-1399144.jpg" alt="Оригінальні чи підроблені запасні частини?">
                        </div>

                        <div class="open-video" v-if="showVideo">
                            <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MbJHw_WQRmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
        name: "HybridInnovations"
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    /**{*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/

    main {
        nav {}
        background: linear-gradient(90deg, #000E20, #0F4762, #000E20);

        header.container-fluid {
            position: relative;
            padding: 0;

            .video {
                width: 100%;
                }

            .hybrid {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                z-index: 100;
                background-image: url(../../../img/grid_black.png);
                /*background-image: url(//wp-content/themes/toyota-landing/img/net.png);*/
                background-position: center center;
                /*background-repeat: no-repeat;*/
                -webkit-background-size: 7%;
                background-size: 7%;

                .row {
                    height: 95%;
                    align-items: flex-end;
                    margin: 0;

                    div {
                        margin: 20px;
                        h1 {
                            font-size: 9rem;
                            font-weight: bold;
                            color: #ffffff;
                            padding: 40px 0;
                            vertical-align: middle;
                        }

                        .hybrids {
                            background: linear-gradient(90deg, #001F36, #000E20);
                            padding: 50px;
                            margin: 0;
                            h2 {
                                font-size: 4rem;
                                color: #ffffff;
                                font-weight: bold;
                                margin-bottom: 20px;
                            }

                            p {
                                font-size: 1.6rem;
                                color: #ffffff;
                            }

                            button.btn.btn-danger {
                                @include button;
                                /*width: auto;*/
                                background-color: #E50000;
                                margin-top: 30px;
                                font-size: 1.8rem;
                                text-transform: uppercase;
                                vertical-align: middle;
                                i {
                                    display: inline-block;
                                    margin-left: 20px;
                                    font-size: 2rem;
                                }
                            }
                        }
                    }
                }


            }
        }

        .body.container-fluid {
            section.row.twenty_years {
                padding: 100px 0;
                position: relative;
                div {
                    color: #ffffff;
                    padding: 0 50px;
                    h1 {
                        font-size: 4.8rem;
                        margin-bottom: 26px;
                        font-weight: bolder;
                    }
                    h4 {
                        font-size: 2.4rem;
                        padding-bottom: 25px;
                        border-bottom: 1px solid #264557;
                        line-height: 3.5rem;
                    }
                    .row {
                        padding: 0;
                        margin: 20px 0;
                        div {
                            padding: 0;
                            img {
                                width: 100%;
                            }
                            h5 {
                                font-size: 2.2rem;
                                font-weight: bold;
                                margin: 10px 25px 5px;
                            }
                            i {
                                font-size: 1.4rem;
                                margin: 0 25px;
                            }
                            a.btn.btn-danger {
                                @include button;
                                width: auto;
                                margin: 20px 0;
                                background-color: #E50000;
                                text-transform: uppercase;
                                font-weight: bold;
                            }
                        }
                    }
                }

                .planet {
                    position: absolute;
                    width: 60%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-image: url(../../../img/pngwing.com.png);
                    background-repeat: no-repeat;
                    background-position: 100% 50%;
                    -webkit-background-size: 250%;
                    background-size: 250%;
                }
            }

            section.row.whats_wrong {
                div {
                    h2 {}
                    .row {

                    }
                }
            }

        }
    }

</style>