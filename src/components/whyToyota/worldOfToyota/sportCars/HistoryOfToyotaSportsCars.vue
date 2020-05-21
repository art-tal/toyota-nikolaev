<template>
    <section>
        <header class="container-fluid">
            <div class="wrap">
                <h1>
                    Історія спорткарів Toyota <br>
                    Родовід, тривалістю понад 50 років
                </h1>

                <div class="series d-flex justify-content-around">
<!--                    <hr/>-->
                    <span>СЕРІЯ HERITAGE</span>
<!--                    <hr/>-->
                </div>
            </div>
            <div class="header-image">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/3-BG_tcm-3046-792473.jpg" alt="photo">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/2-Copy_tcm-3046-792474.png" alt="toyota">
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/1-Cars_tcm-3046-792475.png" alt="cars">
            </div>
        </header>

        <div class="body container">
            <h4>З 1960-х років Toyota вражає і дивує людей своєю інтерпретацією концепції динамічного, захопливого та приємного у користуванні спорткара. Багато моделей бренда отримали культовий статус, і тут ми віддаємо належне добірці знакових спорткарів від Toyota.</h4>
            <div class="block_right">
                <h5>Легкий початок</h5>
                <p>Хто б міг подумати, що Sports 800, таке маленьке авто і перший серійний спорткар Toyota, настільки сильно позначиться на майбутньому автомобілів Toyota. Модель Sports 800, відома також під пестливою назвою «Йота-Хаті» (Yota-Hachi), що є скороченим варіантом від «Toyota 8» з японської, була вперше продемонстрована на Токійському автосалоні 1962 року як прототип Toyota Publica Sports.</p>
                <p>Завдяки малій вазі у поєднанні з енергійним горизонтальним «опозитником», об’ємом 790 кубічних сантиметрів та заднім приводом, модель Sports 800 стала втіленням у життя ідеї своїх творців про відповідальне водіння з неймовірно низькою витратою пального – лише 3,8 л на 100 км. Як приклад тривалої історії інновацій Toyota у сфері гібридного приводу варто навести революційну для свого часу оснащену газотурбінним двигуном, що використовувався для живлення електромотора, модель Sports 800 GT Hybrid, яка була представлена на Токійському автосалоні наприкінці 70-х років минулого століття..
                </p>
                <p>Завдяки надійності та економічності модель Sports 800 користувалась великою популярністю у національному автоспорті. У 1967 році цей автомобіль зайняв третє місце у перегонах «24 години Фуджі», фінішувавши відразу за двома Toyota 2000GT. Ця модель надовго залишиться у пам’яті вдячних шанувальників не лише як перший серійний спорткар Toyota, але й як справжній спорткар для ентузіастів.</p>
            </div>
            <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/2-Toyota-Sports800_tcm-3046-792826.jpg" alt="car">
        </div>

        <continue></continue>

        <div class="next_part container-fluid">
            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/2000GT-footer_tcm-3046-792830.jpg" alt="next car">

                <router-link
                        tag="header"
                        exact
                        to="/world_of_toyota/toyota_2000_gt"
                >
                    <h2>
                        2000GT<br>
                        Історія спорткарів Toyota (частина 2)
                    </h2>
                </router-link>


        </div>

    </section>
</template>

<script>
    // import Continue from "./../../components/whyToyota/worldOfToyota/sportCars/Continue"
    import Continue from "./../../../../components/whyToyota/worldOfToyota/sportCars/Сontinue";

    export default {
        name: "HistoryOfToyotaSportsCars",

        components: {
            Continue,
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }

    section {
        color: $font_color;
        header.container-fluid {
            margin: 0;
            padding: 0;
            .wrap {
                background: linear-gradient(to bottom,#CCC 0,#FFF 80%);
                padding: 68px 0;
                h1 {
                    width: 40%;
                    margin: auto;
                    font-size: 3.4rem;
                    line-height: 5.5rem;
                    margin-bottom: 50px;
                    &:first-line {
                        font-size: 4.4rem;
                        font-weight: bolder;
                    }
                }

                .series {
                    position: relative;
                    &::before {
                        content: "";
                        display: block;
                        width: 100px;
                        height: 1px;
                        background: rgba(0,0,0,.2);
                        position: absolute;
                        left: -webkit-calc(50% - 235px);
                        left: -moz-calc(50% - 235px);
                        left: calc(50% - 235px);
                        top: 20px;
                    }
                    &::after {
                        content: "";
                        display: block;
                        width: 100px;
                        height: 1px;
                        background: rgba(0,0,0,.2);
                        position: absolute;
                        right: -webkit-calc(50% - 235px);
                        right: -moz-calc(50% - 235px);
                        right: calc(50% - 235px);
                        top: 20px;
                    }
                    span {
                        display: block;
                        padding: 11px 20px;
                        color: #ffffff;
                        background-color: #c50018;
                        font-size: 1.5rem;
                        letter-spacing: 4px;
                    }

                }
            }
            .header-image {
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                    &:nth-child(2) {
                        position: absolute;
                        bottom: 20px;
                        left: 0;
                    }
                    &:last-child {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
        }

        .body.container {
            margin: 68px auto;
            h4 {
                font-size: 2.2rem;
                margin-bottom: 68px;
            }

            .block_right {
                padding-left: 25%;
                text-align: left;
                margin-bottom: 68px;
                h5 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 24px;
                    margin-top: 30px;
                }
                p {
                    font-size: 1.8rem;
                    margin-bottom: 24px;
                    margin-top: 24px;
                }
            }

            img {
                width: 100%;
            }
        }

        .next_part.container-fluid {
            padding: 0;
            position: relative;
            img {
                width: 100%;
            }
            header {
                position: absolute;
                top: 100px;
                left: 0;
                width: 100%;
                color: $font_color;
                cursor: pointer;
                h2 {
                    font-size: 3.5rem;
                    line-height: 7rem;
                    font-weight: bold;
                    &:first-line {
                        font-size: 5.2rem;
                        font-weight: bolder;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 60%;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 80%;
                    }
                }
            }
            .next_part.container-fluid {
                header {
                    position: absolute;
                    top: 50px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section {
            header.container-fluid {
                .wrap {
                    h1 {
                        width: 100%;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    position: absolute;
                    top: 30px;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section {
            header.container-fluid {
                .wrap {
                    padding: 40px 0;
                    h1 {
                        width: 100%;
                        font-size: 3rem;
                        line-height: 4.5rem;
                        margin-bottom: 40px;
                        &:first-line {
                            font-size: 3.5rem;
                        }
                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h4 {
                    font-size: 2.0rem;
                    margin-bottom: 10px;
                }

                .block_right {
                    padding: 15px;
                    margin-bottom: 30px;
                    h5 {
                        font-size: 1.8rem;
                    }
                    p {
                        font-size: 1.6rem;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    top: 30px;
                    h2 {
                        font-size: 2.5rem;
                        line-height: 4rem;
                        &:first-line {
                            font-size: 3.5rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section {
            header.container-fluid {
                .wrap {
                    padding: 40px 0;
                    h1 {
                        width: 100%;
                        font-size: 2rem;
                        line-height: 3.5rem;
                        margin-bottom: 30px;
                        &:first-line {
                            font-size: 3rem;
                        }
                    }

                    .series {
                        &::before {
                            width: 0;
                        }
                        &::after {
                            width: 0;
                        }
                        span {
                            font-size: 1.3rem;
                        }

                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h4 {
                    font-size: 1.8rem;
                    margin-bottom: 0;
                }

                .block_right {
                    padding: 0;
                    margin-bottom: 30px;
                    h5 {
                        font-size: 1.6rem;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }
                    p {
                        font-size: 1.4rem;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }
                }
            }

            .next_part.container-fluid {
                header {
                    top: 10px;
                    h2 {
                        font-size: 2.5rem;
                        line-height: 3.5rem;
                        &:first-line {
                            font-size: 3rem;
                        }
                    }
                }
            }
        }
    }

</style>