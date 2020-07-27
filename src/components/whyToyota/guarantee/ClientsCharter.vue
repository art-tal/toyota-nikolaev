<template>
    <main>
        <guarantee-menu></guarantee-menu>
        <div v-html="pageBody.body"></div>

<!--        <header class="container-fluid">-->
<!--            <h1 class="container text-left">Хартія клієнтів-->
<!--                <h2 class="text-left">Toyota</h2>-->
<!--            </h1>-->
<!--        </header>-->
<!--        -->
<!--        <div class="body container">-->
<!--            <h3>Кожен офіційний дилерський центр Toyota дотримується наступних принципів:</h3>-->
<!--            <ol>-->
<!--                <li>Зробимо все можливе, щоб Вам було зручно в нашому дилерському центрі.</li>-->
<!--                <li>Завжди зустрінемо Вас без затримки та чемно привітаємо.</li>-->
<!--                <li>Запропонуємо спільно оглянути Ваш автомобіль та обговоримо будь-які технічні питання, які у Вас можуть виникнути.</li>-->
<!--                <li>Надамо інформацію про вартість робіт для прийняття рішення щодо ремонту та обслуговування автомобіля.</li>-->
<!--                <li>Вашому автомобілю буде надано якісний сервіс з першого разу.</li>-->
<!--                <li>Зробимо Ваш візит до дилерського центру якомога зручнішим, запропонувавши рішення зі збереження мобільності.</li>-->
<!--                <li>Перед тим як повернути Ваш автомобіль, проведемо його ретельну перевірку.</li>-->
<!--                <li>Автомобіль завжди буде переданий Вам в узгоджений час.</li>-->
<!--                <li>Завжди детально пояснимо зміст рахунку до сплати та перелік виконаних робіт на Вашому автомобілі.</li>-->
<!--                <li>Запропонуємо разом провести дорожній тест, якщо Ви вважатимете це доречним.</li>-->
<!--                <li>Обов'язково зв’яжемося з Вами після візиту, щоб отримати зворотній зв'язок щодо якості обслуговування.</li>-->
<!--                <li>У разі виникнення проблем негайно відреагуємо та обіцяємо звести їх до мінімуму.</li>-->
<!--            </ol>-->

<!--            <p>Якщо у вас виникла необхідність поділитися своїми побажаннями та пропозиціями щодо покращення роботи дилерських центрів залиште повідомлення через форму зворотного зв’язку</p>-->

<!--        </div>-->

<!--        <footer class="container text-center">-->
<!--            <router-link-->
<!--                    tag="button"-->
<!--                    class="btn btn-danger"-->
<!--                    exact-->
<!--                    to="/form_call_back"-->
<!--            >-->
<!--                <i class="fas fa-phone-alt"></i> Форма зворотнього зв`язку-->
<!--            </router-link>-->
<!--        </footer>-->
    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    import GuaranteeMenu from "./../../../components/whyToyota/guarantee/GuaranteeMenu";

    export default {
        name: "ClientsCharter",

        components: {
            GuaranteeMenu,
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 29,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota | Хартія Клієнтів  | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota | Хартія Клієнтів  | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Хартія Клієнтів Toyota - це набір правил та принципів, які дотримуються кожним офіційним дилерським центр Toyota.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Хартія Клієнтів Toyota - це набір правил та принципів, які дотримуються кожним офіційним дилерським центр Toyota.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `toyota, тойота, офіційний дилер, хартія, клієнт, відношення, официальный дилер, хартия, клиент, отношение, Latest news`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `toyota, тойота, офіційний дилер, хартія, клієнт, відношення, официальный дилер, хартия, клиент, отношение, Latest news`
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }
    
    main ::v-deep div {
        header.container-fluid {
            @include header-xl;
            background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/khartiya-kliyentiv-1600x900_tcm-3046-1964732.jpg);
            color: #ffffff;
        }

        .body.container {
            color: $font_color;
            margin: 68px auto;
            text-align: left;
            h3 {
                font-size: 2.2rem;
                text-align: center;
                margin-bottom: 68px;
            }
            ol {
                color: #595D60;
                font-size: 1.5rem;
                margin-left: 20px;
                margin-bottom: 50px;
                li {
                    margin-bottom: 15px;
                }
            }
            .p {
                font-size: 1.5rem;
                color: #595D60;
            }
        }

        footer {
            margin: 68px auto;
            .btn.btn-danger {
                @include button;
                background-color: #E50000;
                i {
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main ::v-deep div {
            header.container-fluid {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main ::v-deep div {
            header.container-fluid {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main ::v-deep div {
            header.container-fluid {
                @include header-sm;
            }
        }
    }

    @media (max-width: 575.9px) {
        main ::v-deep div {
            header.container-fluid {
                @include header-xs;
            }

            .body.container {
                margin: 30px auto;
                padding: 0 15px;
                h3 {
                    font-size: 2rem;
                    margin-bottom: 30px;
                }
                ol {
                    font-size: 1.4rem;
                    margin-bottom: 30px;
                    li {
                        margin-bottom: 10px;
                    }
                }
                .p {
                    font-size: 1.4rem;
                }
            }

            footer {
                margin: 40px auto;
            }
        }
    }

</style>