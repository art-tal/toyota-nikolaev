<template>
    <main class="container">
        <header>
            <h1 class="text-center">Налаштування файлів Cookie</h1>
            <p>Виберіть такі налаштування файлів cookie, які ви бажаєте дозволити. Звертаємо вашу увагу на те, що налаштування, які конче необхідні для функціонування сайту, не підпадають під дію директиви ЄС про захист персональних даних і, відповідно, не можуть бути вимкнені.</p>
        </header>

        <div class="body">
            <div class="row">
                <div class="cookie col-3">
                    <h3>Обов’язкові файли cookie</h3>
                    <p>На цьому веб-сайті буде лише</p>
                    <ul>
                        <li>Збережено автомобілі , які ви збирете в конфігураторі. Їх можна буде побачити лише протягом поточного візита на сайт.</li>
                    </ul>

                    <div class="choise">
                        <p>Налаштування, які конче необхідні для функціонування сайту, не підпадають під дію директиви ЄС про захист персональних даних і, відповідно, не можуть бути вимкнені.</p>
                    </div>

                </div>

                <div class="cookie col-3">
                    <h3>Покращення роботи сайту</h3>
                    <p>Ці налаштування забезпечать</p>
                    <ul>
                        <li>Цілісний вигляд веб-сайту</li>
                        <li>Збір лише таких даних, що вказуватимуть на те, чи ви новий відвідувач, чи завітали на сайт вже не вперше</li>
                    </ul>

                    <form class="choise">
                        <div class="field form-group checkbox col-12 text-center">
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

                <div class="cookie col-3">
                    <h3>Соціальні мережі та реклама</h3>
                    <p>Ці налаштування також</p>
                    <ul>
                        <li>Дозволять вам ділитися нашими сторінками у соцмережах</li>
                    </ul>

                    <form class="choise">
                        <div class="field form-group checkbox col-12 text-center">
                            <input class="form-control"
                                   id="social" type="checkbox"
                                   value="true"
                                   v-model="socialAgree"
                            >
                            <label for="social"><span class="check"><i class="fas fa-check"></i></span>Вузьконаправлені</label>

                            <!--                       <div class="invalid-feedback">Це поле є обов'язковим для заповненя.</div>-->
                        </div>
                    </form>

                </div>

                <div class="cookie col-3">
                    <a @click.prevent="back()">Закрити</a>
                    <br>
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



                    .choise {
                        .field {
                            margin-bottom: 20px;
                            label {
                                color: #6c7073;
                                font-size: 1.5rem;
                                font-weight: bold;
                                margin-bottom: 8px;
                                span {
                                    color: #E50000;
                                }
                            }


                            &.checkbox {
                                @include checkbox;
                            }


                        }
                    }
                }
            }
        }
    }

</style>