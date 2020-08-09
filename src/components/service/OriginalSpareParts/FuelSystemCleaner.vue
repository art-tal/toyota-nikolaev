<template>
    <section class="container-fluid">
        <menu-to-spare-parts/>
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container text-center">Toyota Fuel System Cleaner</h1>-->
<!--            <h2 class="font-weight-bold">очисник паливної системи для автомобіля Toyota</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <div class="p header text-center">-->
<!--                Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в багатьох аспектах.-->
<!--            </div>-->

<!--            <div class="p">Одноразова обробка очисником паливної системи Toyota Fuel System Cleaner поверне показники викидів в атмосферу до початкового рівня, передбаченого саме для вашого автомобіля Toyota. Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в наступних випадках:</div>-->

<!--            <ul>-->
<!--                <li>складний запуск;</li>-->
<!--                <li>нестабільний холостий хід;</li>-->
<!--                <li>недостатня потужність;</li>-->
<!--                <li>погіршена паливна економічність;</li>-->
<!--                <li>стукіт у двигуні;</li>-->
<!--                <li>нестійка робота;</li>-->
<!--                <li>підвищена кількість шкідливих викидів у відпрацьованих газах.</li>-->
<!--            </ul>-->

<!--            <div class="p">Очисник Toyota Diesel Fuel System Cleaner призначений для глибокого очищення всієї паливної системи та двигуна. Він ретельно протестований на сумісність та покращення експлуатаційних характеристик, усування відкладень та різноманітних накопичень з метою забезпечення економії палива та плавності ходу.</div>-->
<!--            <div class="p">Подібним чином очисник Toyota Petrol System Cleaner очищує свічки запалювання, покращує запуск двигуна та ретельно очищує камери згоряння, у результаті чого ваш автомобіль Toyota набуває відновлену вихідну потужність, кращу паливну економічність та безшумну роботу.</div>-->
<!--        </div>        -->

<!--        <div class="p container text-left">Можна уникнути необхідності дорогої заміни паливного інжектора при відновленні продуктивності автомобіля, паливної економічності та приведенні рівні викидів в атмосферу ближче до рівня початкових показників, визначених для вашого автомобіля Toyota. Для цього подбайте про ретельне очищення двигуна вже сьогодні.</div>-->





        <div class="video">

            <div class="img_button" @click="openVideo()">
                <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-genuine-parts-2014-fuel-system-cleaner-movie_tcm-3046-284905.jpg" alt="/">
            </div>

            <div class="open-video" v-if="showVideo">
                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/wlz_iwBZkqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </section>
</template>

<script>
    import MenuToSpareParts from "./../../../components/service/OriginalSpareParts/MenuToSpareParts";
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "FuelSystemCleaner",

        components: {
            MenuToSpareParts
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 24,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Очисник паливної системи для автомобіля`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Очисник паливної системи для автомобіля`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в багатьох аспектах.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Лише одна процедура зможе забезпечити ефективне очищення, що поліпшить роботу транспортного засобу в багатьох аспектах.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, toyota, паливо, система, очисник, бензиновий, дизельний, інжектори, свічі запалювання,, Genuine Parts`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, toyota, паливо, система, очисник, бензиновий, дизельний, інжектори, свічі запалювання,, Genuine Parts`
                        content: this.meta_keywords,
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;
    }


    section.container-fluid ::v-deep div {
        padding: 0;

        header {
            @include header-xl;
            padding-top: 120px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-genuine-parts-2014-fuel-system-cleaner-focus_tcm-3046-284899.jpg);
            color: #ffffff;

            h1 {
                text-align: center;
            }

            h2 {
                text-align: center;
            }
        }

        .p {
            font-size: 1.5rem;
            color: #595D60;
            margin: 68px auto;
        }

        .body.container {
            color: $font_color;

            .p {
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

    section.container-fluid {
        .video {
            margin: 20px 0;
            padding: 0;
            .img_button {
                width: 100%;
                img {
                    width: 100%;
                    height: auto;
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


    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid ::v-deep div {
            header {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid ::v-deep div {
            header {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid ::v-deep div {
            header {
                @include header-sm;
            }

            .p {
                margin: 30px auto;
            }

            .body.container {
                color: $font_color;

                .p {
                    &.header {
                        font-size: 2.0rem;
                        margin: 30px 0;
                    }
                }

            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid ::v-deep div {
            header {
                @include header-xs;
                width: 100%;
                h1 {
                    width: 100%;
                }
            }

            .p {
                margin: 30px auto;
            }

            .body.container {

                .p {
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