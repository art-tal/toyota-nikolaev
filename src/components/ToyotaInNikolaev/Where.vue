<template>
    <main>
        <header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.5173359560395!2d32.0616305158677!3d46.95152467914669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed6bb518b7d1653a!2z0KLQvtC50L7RgtCwINCm0LXQvdGC0YAg0J3QuNC60L7Qu9Cw0LXQsiDCq9Ca0LjQoi3QosK7!5e0!3m2!1sru!2sua!4v1590447382282!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </header>

        <div class="body container text-left">
            <h2>Як нас знайти</h2>
            <p>Офіційний дилерський центр Тойота Центр Миколаїв «КиТ-Т» надасть Вам можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і до моменту їх подальшого продажу.</p>
            <p>Ми цінуємо кожного клієнта і щодня чітко дотримуємося основного правила: «Клієнт - понад усе». Ми будемо раді бачити Вас в нашому дилерському центрі і готові обговорити всі питання, що цікавлять Вас за адресою: <b>Тойота Центр Миколаїв «КиТ-Т», м. Миколаїв, Херсонське шосе, 109.</b></p>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Where",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Як нас знайти | Тойота Центр Миколаїв «КиТ-Т»`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Як нас знайти | Тойота Центр Миколаїв «КиТ-Т»`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Офіційний дилерський центр Тойота Центр Миколаїв «КиТ-Т» надасть Вам можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і до моменту їх подальшого продажу. Ми цінуємо кожного клієнта і щодня чітко дотримуємося основного правила: «Клієнт - понад усе». Ми будемо раді бачити Вас в нашому дилерському центрі і готові`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Офіційний дилерський центр Тойота Центр Миколаїв «КиТ-Т» надасть Вам можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і до моменту їх подальшого продажу. Ми цінуємо кожного клієнта і щодня чітко дотримуємося основного правила: «Клієнт - понад усе». Ми будемо раді бачити Вас в нашому дилерському центрі і готові`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, як знайти, Тойота Центр Миколаїв «КиТ-Т»`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, як знайти, Тойота Центр Миколаїв «КиТ-Т»`
                    },
                ],
            }
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }

    main {
        header {
            width: 100%;
            iframe {
                width: 100%;
            }
        }

        .body.container {
            margin: 68px auto;
            h2 {
                font-size: 4.5rem;
                font-weight: bold;
                padding-bottom: 15px;
                border-bottom: 1px solid #a8aaac;
            }

            p {
                font-size: 1.8rem;
                margin: 30px 0;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main {
            header {
                height: 80vh;
                iframe {
                    height: 80vh;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header {
                height: 80vh;
                iframe {
                    height: 80vh;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                height: 80vh;
                iframe {
                    height: 80vh;
                }
            }

            .body.container {
                margin: 30px auto;
                h2 {
                    font-size: 3.5rem;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header {
                height: 80vh;
                iframe {
                    height: 80vh;
                }
            }

            .body.container {
                margin: 30px auto;
                h2 {
                    font-size: 2.5rem;
                    padding-bottom: 10px;
                }

                p {
                    font-size: 1.6rem;
                    margin: 15px 0;
                }
            }
        }
    }

</style>