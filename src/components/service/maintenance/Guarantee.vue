<template>
    <main class="container-fluid">
        <sidebar></sidebar>

        <header>
            <h1 class="container">Гарантія якості
                <h2>Технічне обслуговування за найвищими стандартами</h2>
            </h1>
        </header>
        
        <div class="body container">
            <h3>Кому, як не нам, найкраще відомо все про ваш автомобіль! Адже ми його спроектували, виготовили і підготували майстрів для технічного обслуговування вашого авто.</h3>
            <ul class="text-left">
                <li>
                    <h3>Якість Toyota</h3>
                    <p>Кожна операція під час технічного обслуговування або ремонтних робіт буде виконана у відповідності до найсуворіших технічних нормативів компанії «Тойота».</p>
                </li>
                <li>
                    <h3>Гарантія бездоганного сервісу</h3>
                    <p>Кому, як не нам, найкраще відомо все про ваш автомобіль! Адже ми його спроектували, виготовили і підготували майстрів для технічного обслуговування вашого авто.</p>
                </li>
                <li>
                    <h3>Строгий регламент</h3>
                    <p>Ви можете бути впевненими у тому, що на офіційній сервісній станції Toyota всі роботи з технічного обслуговування або ремонту вашого автомобіля будуть виконані у відповідності до чітко прописаних процедур та нормативів.</p>
                </li>
                <li>
                    <h3>Збереження ринкової вартості</h3>
                    <p>Для того, щоб гарантувати високу ринкову вартість свого автомобіля, обслуговуйте його на офіційних сервісних станція Toyota. Це стане запорукою тривалої та безпроблемної експлуатації.</p>
                </li>
                <li>
                    <h3>Цілковита впевненість</h3>
                    <p>Наші автомобілі виготовляються у відповідності до найсуворіших нормативів якості, проте для того, щоб убезпечити власників від надмірних хвилювань, ми пропонуємо гарантію на виконані роботи та встановлені деталі.</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
    // import Sidebar from "../permanent/Sidebar";
    import Sidebar from "../../permanent/Sidebar";//           for Laravel

    export default {
        name: "Guarantee",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Гарантія якості технічного обслуговування Toyota`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Гарантія якості технічного обслуговування Toyota`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Завітайте на офіційну сервісну станцію Toyota і гарантовано отримайте технічне обслуговування свого автомобіля Toyota у виконанні спеціально підготовленого персоналу у відповідності до суворих нормативів Toyota.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Завітайте на офіційну сервісну станцію Toyota і гарантовано отримайте технічне обслуговування свого автомобіля Toyota у виконанні спеціально підготовленого персоналу у відповідності до суворих нормативів Toyota.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota, сервіс, тойота, якість, якісний сервіс, технічне обслуговування, ремонт, то`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota, сервіс, тойота, якість, якісний сервіс, технічне обслуговування, ремонт, то`
                    },
                ],
            }
        },

        components: {
            Sidebar
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main.container-fluid {
        padding: 0;
        margin: 0;

        header {
            width: 100%;
            height: 80vh;
            padding-top: 50px;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-service-header-1600x900_tcm-3046-1139710.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: $font_color;

            h1 {
                /*width: 1200px;*/
                padding: 15px;
                /*margin: 0 auto;*/
                font-size: 5.2rem;
                font-weight: bolder;
                text-align: left;

                h2 {
                    font-size: 3.4rem;
                    text-align: left;
                    padding-top: 16px;
                }
            }
        }

        .body.container {
            margin: 68px auto;
            color: $font_color;
            h3 {
                font-size: 2.2rem;
                margin-bottom: 68px;
                font-weight: bold;
            }
            ul {
                padding: 0;
                list-style-type: none;
                li {
                    padding-bottom: 15px;
                    h3 {
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 1.8rem;
                        color: #595D60;
                        margin-bottom: 20px;
                    }
                }
            }
        }

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid{
            header {
                height: 80vh;
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid {
            header {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                    h2 {
                        font-size: 2.2rem;
                        padding-top: 10px;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid {
            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3rem;
                    h2 {
                        font-size: 2.0rem;
                        padding-top: 5px;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid {
            header {
                width: 100%;
                height: auto;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    padding: 10px 15px 120px;
                    font-size: 2.5rem;
                    color: $font_color;
                    h2 {
                        font-size: 1.8rem;
                        padding-top: 5px;
                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }
                ul {
                    li {
                        h3 {
                            margin-bottom: 10px;
                        }
                        p {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }
</style>