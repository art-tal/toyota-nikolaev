<template>
    <section class="container">
        <header>
            <h1>Дякуємо!</h1>
            <h2>Ваше звернення відправлено. Незабаром з вами зв'яжеться представник Тойота Центр Миколаїв «КиТ-Т»</h2>

        </header>
        <div class="body">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <img src="../../img/image-sm/call.png" alt="car">
                </div>

                <div class="col-lg-6 col-12 info">
                    <article class="row">
                        <div class="col-1">
                            <i class="fas fa-search-location"></i>
                        </div>
                        <div class="col-11">
                            <h3>Тойота Центр Миколаїв «КиТ-Т»</h3>
                            <p><i class="fas fa-map-marker-alt"></i> Україна, Миколаїв 54028,
                                Херсонське шосе, 109</p>
                            <p><i class="fas fa-phone"></i> (0512) 71-00-00</p>
                            <p><i class="fas fa-envelope"></i> testdrive@toyota.ua</p>
                            <p><i class="fas fa-globe"></i> <a href="http://toyota.nikolaev.ua/">http://toyota.nikolaev.ua/</a></p>
                        </div>
                        <div class="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.5173359560395!2d32.0616305158677!3d46.95152467914669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed6bb518b7d1653a!2z0KLQvtC50L7RgtCwINCm0LXQvdGC0YAg0J3QuNC60L7Qu9Cw0LXQsiDCq9Ca0LjQoi3QosK7!5e0!3m2!1sru!2sua!4v1590447382282!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FeedBackExit",

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 100);

        },

    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        color: $font_color;
    }

    section.container {
        header {
            margin: 30px 0 50px;
            h1 {
                margin-bottom: 25px;
                text-align: center;
                font-size: 3.5rem;
            }
            h2 {
                font-size: 2.5rem;
            }
        }

        .body {
            .row {
                div {
                    img {
                        width: 100%;
                    }

                    &.info {
                        background-color: #F0F0F0;
                        padding: 30px;
                        hr {
                            margin-bottom: 25px;
                        }
                        article.row {
                            div {
                                i {
                                    font-size: 2rem;
                                    color: #595D60;
                                }
                                h3 {
                                    color: #595D60;
                                    font-weight: bold;
                                    text-align: left;
                                    margin-bottom: 15px;
                                }
                                p {
                                    text-align: left;
                                    font-size: 1.6rem;
                                    i {
                                        font-size: 1.6rem;
                                        display: inline-block;
                                        margin-right: 5px;
                                    }
                                }
                                iframe {
                                    width: 100%;
                                    height: 400px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container {

            .body {
                .row {
                    div {
                        margin-bottom: 20px;
                        &.info {
                            article.row {
                                div {
                                    iframe {
                                        width: 100%;
                                        height: 50vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container {
            header {
                margin: 30px 0 50px;
                h1 {
                    margin-bottom: 25px;
                    text-align: center;
                    font-size: 3.5rem;
                }
                h2 {
                    font-size: 2.5rem;
                }
            }

            .body {
                .row {
                    div {
                        img {
                            width: 100%;
                        }

                        &.info {
                            background-color: #F0F0F0;
                            padding: 30px;
                            hr {
                                margin-bottom: 25px;
                            }
                            article.row {
                                div {
                                    i {
                                        font-size: 2rem;
                                        color: #595D60;
                                    }
                                    h3 {
                                        color: #595D60;
                                        font-weight: bold;
                                        text-align: left;
                                        margin-bottom: 15px;
                                    }
                                    p {
                                        text-align: left;
                                        font-size: 1.6rem;
                                        i {
                                            font-size: 1.6rem;
                                            display: inline-block;
                                            margin-right: 5px;
                                        }
                                    }
                                    iframe {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container {
            header {
                margin: 20px 0 40px;
                h1 {
                    margin-bottom: 15px;
                    font-size: 2.5rem;
                }
                h2 {
                    font-size: 2rem;
                }
            }

            .body {
                .row {
                    div {
                        margin-bottom: 20px;
                        &.info {
                            padding: 15px;
                            hr {
                                margin-bottom: 25px;
                            }
                            article.row {
                                margin: 15px 0;
                                div {
                                    margin-bottom: 0;

                                    h3 {
                                        font-size: 1.8rem;
                                        margin-bottom: 10px;
                                    }
                                    p {
                                        font-size: 1.5rem;
                                        i {
                                            font-size: 1.5rem;
                                        }
                                    }
                                    iframe {
                                        width: 100%;
                                        height: 80vw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>