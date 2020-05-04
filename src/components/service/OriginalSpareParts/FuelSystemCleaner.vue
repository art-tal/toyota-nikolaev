<template>
    <section class="container-fluid">
        <header>
            <h1 class="container text-center">Toyota Fuel System Cleaner
                <h2 class="font-weight-bold">очисник паливної системи для автомобіля Toyota</h2>
            </h1>
        </header>

        <div class="body container text-left">
            <p class="header text-center">
                Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в багатьох аспектах.
            </p>

            <p>Одноразова обробка очисником паливної системи Toyota Fuel System Cleaner поверне показники викидів в атмосферу до початкового рівня, передбаченого саме для вашого автомобіля Toyota. Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в наступних випадках:</p>

            <ul>
                <li>складний запуск;</li>
                <li>нестабільний холостий хід;</li>
                <li>недостатня потужність;</li>
                <li>погіршена паливна економічність;</li>
                <li>стукіт у двигуні;</li>
                <li>нестійка робота;</li>
                <li>підвищена кількість шкідливих викидів у відпрацьованих газах.</li>
            </ul>

            <p>Очисник Toyota Diesel Fuel System Cleaner призначений для глибокого очищення всієї паливної системи та двигуна. Він ретельно протестований на сумісність та покращення експлуатаційних характеристик, усування відкладень та різноманітних накопичень з метою забезпечення економії палива та плавності ходу.</p>
            <p>Подібним чином очисник Toyota Petrol System Cleaner очищує свічки запалювання, покращує запуск двигуна та ретельно очищує камери згоряння, у результаті чого ваш автомобіль Toyota набуває відновлену вихідну потужність, кращу паливну економічність та безшумну роботу.</p>


        </div>

        <div class="video">
            <video width="100%"
                   src="../../../img/original_windshields_toyota.mp4"
                   controls="controls"
                   type="video/mp4"
                   poster="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-genuine-parts-2014-fuel-system-cleaner-movie_tcm-3046-284905.jpg">
            </video>
        </div>

        <p class="container text-left">Можна уникнути необхідності дорогої заміни паливного інжектора при відновленні продуктивності автомобіля, паливної економічності та приведенні рівні викидів в атмосферу ближче до рівня початкових показників, визначених для вашого автомобіля Toyota. Для цього подбайте про ретельне очищення двигуна вже сьогодні.</p>



    </section>
</template>

<script>
    export default {
        name: "FuelSystemCleaner"
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;

        header {
            height: 80vh;
            width: 100%;
            padding-top: 120px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-genuine-parts-2014-fuel-system-cleaner-focus_tcm-3046-284899.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: $font_color;

            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                color: #ffffff;
                text-align: left;

                h2 {
                    font-size: 3.4rem;
                    margin-top: 16px;
                }
            }
        }

        p {
            font-size: 1.5rem;
            color: #595D60;
            margin: 68px auto;
        }

        .body.container {
            color: $font_color;

            p {
                font-size: 1.5rem;
                color: #595D60;
                margin: 30px 0;
                &.header {
                    font-size: 2.2rem;
                    margin: 68px 0;
                }
            }

            ul {
                padding-left: 20px;
                font-size: 1.5rem;
                color: #595D60;
                margin-bottom: 40px;
                li {
                    margin-bottom: 10px;
                }
            }

        }

    }


    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid{
            header {
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 4rem;
                    h2 {
                        font-size: 3rem;
                        padding-top: 10px;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid{
            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                    h2 {
                        font-size: 2.5rem;
                        padding-top: 5px;
                    }
                }
            }

            p {
                margin: 30px auto;
            }

            .body.container {
                color: $font_color;

                p {
                    &.header {
                        font-size: 2.0rem;
                        margin: 30px 0;
                    }
                }

            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid {
            header {
                width: 100%;
                height: auto;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    padding: 10px 15px;
                    font-size: 2.5rem;
                    h2 {
                        font-size: 1.8rem;
                        padding-top: 5px;
                    }
                }
            }

            p {
                margin: 30px auto;
            }

            .body.container {

                p {
                    margin: 30px 0;
                    &.header {
                        font-size: 2.0rem;
                        margin: 30px 0;
                    }
                }

                ul {
                    margin-bottom: 20px;
                    li {
                        margin-bottom: 10px;
                    }
                }

            }

        }
    }





</style>