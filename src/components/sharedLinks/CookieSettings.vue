<template>
    <main class="container">
        <header>
            <h1 class="text-center">Налаштування файлів Cookie</h1>
            <p>Виберіть такі налаштування файлів cookie, які ви бажаєте дозволити. Звертаємо вашу увагу на те, що налаштування, які конче необхідні для функціонування сайту, не підпадають під дію директиви ЄС про захист персональних даних і, відповідно, не можуть бути вимкнені.</p>
        </header>

        <div class="body">
            <div class="row">
                <div class="cookie col-lg-4 col-md-6 col-12" >
                    <h3>Обов’язкові файли cookie</h3>
                    <p>На цьому веб-сайті буде лише</p>
                    <ul>
                        <li>Збережено автомобілі , які ви збирете в конфігураторі. Їх можна буде побачити лише протягом поточного візита на сайт.</li>
                    </ul>

                    <div class="choise">
                        <p>Налаштування, які конче необхідні для функціонування сайту, не підпадають під дію директиви ЄС про захист персональних даних і, відповідно, не можуть бути вимкнені.</p>
                    </div>

                </div>

                <div class="cookie col-lg-4 col-md-6 col-12">
                    <h3>Покращення роботи сайту</h3>
                    <p>Ці налаштування забезпечать</p>
                    <ul>
                        <li>Цілісний вигляд веб-сайту</li>
                        <li>Збір лише таких даних, що вказуватимуть на те, чи ви новий відвідувач, чи завітали на сайт вже не вперше</li>
                    </ul>

                    <form class="choise">
                        <div class="field form-group checkbox col-12 text-left">
                            <input class="form-control"
                                   id="technical" type="checkbox"
                                   value="true"
                                   v-model="technicalAgree"
                            >
                            <label for="technical"><span class="check"><i class="fas fa-check"></i></span>Технічно доцільні</label>

                            <!--                       <div class="invalid-feedback">Це поле є обов'язковим для заповненя.</div>-->
                        </div>
                    </form>

                </div>

<!--                <div class="cookie col-3">-->
<!--                    <h3>Соціальні мережі та реклама</h3>-->
<!--                    <p>Ці налаштування також</p>-->
<!--                    <ul>-->
<!--                        <li>Дозволять вам ділитися нашими сторінками у соцмережах</li>-->
<!--                    </ul>-->

<!--                    <form class="choise">-->
<!--                        <div class="field form-group checkbox col-12 text-left">-->
<!--                            <input class="form-control"-->
<!--                                   id="social" type="checkbox"-->
<!--                                   value="true"-->
<!--                                   v-model="socialAgree"-->
<!--                            >-->
<!--                            <label for="social"><span class="check"><i class="fas fa-check"></i></span>Вузьконаправлені</label>-->

<!--                            &lt;!&ndash;                       <div class="invalid-feedback">Це поле є обов'язковим для заповненя.</div>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </form>-->

<!--                </div>-->

                <div class="links col-4">
                    <a @click.prevent="back()">Закрити</a>
                    <a @click.prevent="back()">Зберегти</a>
                </div>
            </div>
        </div>

        <footer>
            <p>Детальніше про файли cookie та їхнє використання на веб-сайті toyota.ua, можна дізнатися на сторінці з юридичною інформацією.</p>
        </footer>

    </main>
</template>

<script>
    export default {
        name: "CookieSettings",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Загальна інформація`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | ${this.modelTitle}, комплектація ${this.equipmentTitle} | Загальна інформація`
                    },
                    // {
                    //     vmid: "description",
                    //     name: "description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "description",
                    //     property: "og:description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     name: "keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     property: "og:keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                ],
            }
        },

        methods: {
            back() {
                window.history.back()
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    * {
        color: $font_color;
        text-align: left;
    }

    main.container {
        header {
            margin: 50px 0;
            h1 {
                font-size: 4.5rem;
                font-weight: bolder;
                margin-bottom: 15px;
            }
            p {
                font-size: 2rem;
            }
        }

        .body {
            .row {
                .cookie {
                    margin-bottom: 30px;
                    h3 {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    p {
                        font-size: 1.8rem;
                    }

                    ul {
                        list-style-type: none;
                        height: 170px;
                        margin: 20px;
                        padding: 0;
                        li {
                            color: #595D60;
                            font-size: 1.6rem;
                            margin-bottom: 20px;
                            &:before {
                                content: "\2713";
                                margin-left: -20px;
                                margin-right: 5px;
                            }
                        }
                    }

                    .choise {
                        padding: 10px;
                        background-color: #F0F0F0;
                        p {
                            font-size: 1.3rem;
                        }

                        .field {
                            margin-bottom: 20px;
                            padding: 0;
                            &.checkbox {
                                @include checkbox;
                                label {
                                    color: #6c7073;
                                    font-size: 1.5rem;
                                    font-weight: bold;
                                    margin-bottom: 8px;
                                    span {
                                        i.fa-check {
                                            color: #E50000;
                                        }

                                    }
                                }

                            }



                        }
                    }

                }

                .links {
                    a {
                        display: block;
                        padding: 10px 30px;
                        width: 100%;
                        font-size: 1.5rem;
                        background-color: #F0F0F0;
                        cursor: pointer;
                        &:hover {
                            color: darkblue;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        footer {
            margin: 30px auto;
            p {
                font-size: 1.6rem;
                color: #595D60;
            }

        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container {
            header {
                margin: 50px 0;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body {
                .row {
                    .cookie {
                        ul {
                            height: auto;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 576px) {
        main.container {
            header {
                margin: 30px 0;
                h1 {
                    font-size: 3rem;
                }
            }

            .body {
                .row {
                    .cookie {
                        ul {
                            height: auto;
                        }
                    }
                }
            }
        }
    }



</style>