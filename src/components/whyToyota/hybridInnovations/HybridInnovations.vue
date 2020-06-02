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

            <div class="video_header">
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

                <div class="row what_is_hybrid">
                    <div class="col-6">
                        <h2>Що таке гiбрид?</h2>
                    </div>

                    <div class="col-6">
                        <h3 class="text-left">Toyota – флагман гібридної технології, що реалізовує принцип спільного використання двигуна внутрішнього згоряння (ДВЗ) та високовольтної батареї.</h3>
                    </div>
                </div>



                <div class="row advantages">
                    <div class="col-6 px-5">
                        <div class="row">
                            <div class="col-3">
                                <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/electricity.svg" alt="">
                            </div>
                            <div class="col-9">
                                <h4>Не потребує електромережі</h4>
                                <p>На відміну від повністю електричних автомобілів, гібрид завжди готовий до руху, адже батарея заряджається автоматично.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/intuision.svg" alt="">
                            </div>
                            <div class="col-9">
                                <h4>Простота управління</h4>
                                <p>Вмикається, коли є потреба: залежно від умов гібридна система автоматично керує електромотором чи бензиновим двигуном.
                                    Лінійне прискорення автомобіля завдяки гібридній безступеневій трансмісії з електронним керуванням.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <img src="https://hybrid.toyota.ua/wp-content/uploads/2019/05/dynamic.svg" alt="">
                            </div>
                            <div class="col-9">
                                <h4>Економічність у місті</h4>
                                <p>Гібридні автомобілі дають змогу заощаджувати на пальному завдяки економічності, особливо в умовах інтенсивного руху містом, заторів.</p>
                            </div>
                        </div>

                    </div>


                    <div class="col-6">

                        <div class="video">

                            <div class="img_button" @click="openVideo()">
                                <img src="https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/zag_2.png" alt="describe-car">
                                <button class="btn btn-play">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>

                            <div class="open-video" v-if="showVideo">
                                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KKvhRVhuCQs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>


                        </div>
                    </div>
                </div>


            </section>

            <section class="row how_it_works">
                <div class="scheme col-7">
                    <img src="https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/car-scheme.png" alt="car scheme">

                    <div class="battery">
                        <div class="block">
                            <span class="down"></span>
                            <span class="down"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h6>Батарея</h6>
                    </div>

                    <div class="generator">
                        <img src="../../../img/wheel.svg" alt="">
                        <span class="transmission"></span>

                        <h6>Електродвигун</h6>
                    </div>

                    <div class="electric">
                        <span class="connector"></span>
                        <span class="cable"></span>
                    </div>

                    <div class="engine">
                        <h6>Бензиновий двигун</h6>
                        <span class="eng"></span>
                        <span class="eng"></span>
                        <span class="eng"></span>
                        <span class="eng"></span>
                        <span class="eng"></span>
                        <span class="piston"></span>
                        <span class="piston"></span>
                        <span class="piston"></span>
                        <span class="piston"></span>
                    </div>

                </div>

                <div class="how col-5 text-left">
                    <h2>Як працює гібридне авто?</h2>
                    <h3 class="d-flex justify-content-between text-left">
                        <span class="flex-grow-1">Пуск</span>
                        <button><i class="fas fa-chevron-right"></i></button>
                    </h3>
                    <h4>Гібриди Toyota починають рух лише за рахунок електричного двигуна.</h4>
                </div>
            </section>

            <section class="road">

                <div class="work-range-path js-move-mobile" style="transform: translateX(0px);">
                    <svg id="car-path" viewBox="0 0 1008 30.6">
                        <path stroke="#fff" stroke-width="5.07px" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M2.5,28.1c0,0,203,0,282.6,0S434.5,2.5,512.3,2.5s113.8,25,207.3,25s285.9,0,285.9,0"></path>
                    </svg>
                </div>

            </section>

            
        </div>
    </main>
</template>

<script>
    export default {
        name: "HybridInnovations",


        data() {
            return {
                showVideo: false,
            }
        },

        methods: {
            openVideo() {
                this.showVideo = !this.showVideo;
                console.log(this.showVideo);
            },
        }
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

            .video_header {
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
            color: #ffffff;
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
                padding: 170px 30px 170px 175px;
                .row.what_is_hybrid {
                    div {
                        h2 {
                            font-size: 4rem;
                            margin-bottom: 160px;
                        }
                        h3 {
                            font-size: 2.5rem;
                        }
                    }
                }

                .row.advantages {
                    /*padding-left: 100px;*/
                    div {
                        .row {
                            margin-bottom: 30px;
                            text-align: left;
                            div {
                                img {
                                    width: 100px;
                                    height: 100px;
                                    border-radius: 50%;
                                }
                                h4 {
                                    font-size: 2.4rem;
                                    margin-bottom: 10px;
                                    font-weight: bold;
                                }
                                p {
                                    font-size: 1.6rem;
                                }
                            }
                        }

                        .video {
                            padding: 0;
                            .img_button {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                img {
                                    width: 100%;
                                    height: auto;
                                }

                                button.btn.btn-play {
                                    display: block;
                                    position: absolute;
                                    top: calc(50% - 48px);
                                    left: calc(50% - 48px);
                                    width: 96px;
                                    height: 96px;
                                    border-radius: 50%;
                                    background-color: #DB001F;
                                    color: #ffffff;
                                    font-size: 3rem;
                                    padding-left: 10px;
                                    box-shadow: 0 0 8px 8px rgba(255,255,255, 0.2);
                                }
                            }
                            .open-video {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                z-index: 999;
                                .close {
                                    width: 100%;
                                    padding: 10px 20px;
                                    background-color: #000000;
                                    color: #f0f0f0;
                                    font-size: 2rem;
                                    opacity: 1;
                                }
                                iframe {
                                    width: 100%;
                                    height: calc(100% - 40px);
                                }
                            }

                        }
                    }
                }
            }
            
            section.row.how_it_works {
                width: 1600px;
                margin: auto;
                div.scheme {
                    position: relative;
                    img {
                        width: 100%;
                    }
                    .battery {
                        position: absolute;
                        bottom: -10px;
                        left: 280px;
                        text-align: center;
                        .block {
                            margin: 0 auto;
                            width: 44px;
                            height: 101px;
                            border: 4px solid #02abfa;
                            border-radius: 7px;
                            span {
                                margin: 3px;
                                width: 30px;
                                height: 15px;
                                background-color: #ffffff;
                                display: block;
                            }
                        }
                        h6 {
                            font-size: 1.6rem;
                            color: #02abfa;
                            font-style: italic;
                            padding-top: 10px;
                        }
                    }
                    
                    .generator {
                        position: absolute;
                        bottom: -6px;
                        left: 500px;
                        img {
                            width: 70px;
                            height: 70px;
                            position: relative;
                            z-index: 100;
                        }
                        .transmission {
                            display: inline-block;
                            background-color: #02abfa;
                            width: 169px;
                            height: 20px;
                            position: absolute;
                            top: 25px;
                            left: 86px;
                            z-index: 0;
                            border-radius: 0 10px 10px 0;
                        }
                        h6 {
                            font-size: 1.6rem;
                            color: #02abfa;
                            font-style: italic;
                            padding-top: 10px;
                        }
                    }

                    .electric {
                        position: absolute;
                        bottom: 61px;
                        left: 335px;
                        .connector {
                            position: absolute;
                            top: -3px;
                            left: -3px;
                            display: block;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            background-color: #02abfa;
                        }
                        .cable {
                            display: block;
                            width: 220px;
                            height: 2px;
                            background-color: #02abfa;
                        }
                    }

                    .engine {
                        position: absolute;
                        bottom: 150px;
                        right: 233px;
                        h6 {
                            position: absolute;
                            bottom: 75px;
                            font-size: 1.6rem;
                            color: #dabf3f;
                            font-style: italic;
                        }
                        .eng {
                            display: block;
                            width: 8px;
                            height: 21px;
                            background-color: #dabf3f;
                            position: absolute;
                            bottom: 0;
                            &:nth-child(2) {
                                left: 20px;
                            }
                            &:nth-child(3) {
                                left: 40px;
                            }
                            &:nth-child(4) {
                                left: 60px;
                            }
                            &:nth-child(5) {
                                left: 80px;
                            }
                        }

                        span.piston {
                            display: block;
                            width: 14px;
                            height: 64px;
                            background-image: url(https://hybrid.toyota.ua/wp-content/themes/toyota-landing/img/piston.svg);
                            background-repeat: no-repeat;
                            background-position: center center;
                            -webkit-background-size: 100% 100%;
                            background-size: 100% 100%;
                            position: absolute;
                            /*&:nth-child(6) {*/
                            /*    position: absolute;*/
                            /*    bottom: 100px;*/
                            /*    left: 20px;*/
                            /*}*/
                            &:nth-child(7) {
                                position: absolute;
                                bottom: -7px;
                                left: 7px;
                            }
                            &:nth-child(8) {
                                position: absolute;
                                bottom: 7px;
                                left: 27px;
                            }
                            &:nth-child(9) {
                                position: absolute;
                                bottom: 7px;
                                left: 47px;
                            }
                            &:nth-child(10) {
                                position: absolute;
                                bottom: -7px;
                                left: 67px;
                            }
                        }


                    }

                }

                div.how {
                    /*padding: 0 30px;*/
                    /*box-sizing: border-box;*/
                    h2 {
                        font-size: 4rem;
                        margin-bottom: 84px;
                        font-weight: bold;
                    }
                    h3 {
                        font-size: 3rem;
                        color: #c8cfd2;
                        font-weight: bold;
                        button {
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            background-color: #E50000;
                            border: none;
                            i {
                                color: #ffffff;
                            }

                        }
                    }

                    h4 {
                        font-size: 2.4rem;
                        color: #c8cfd2;
                    }
                }
            }

        }
    }

</style>