<template>
    <main class="container-fluid">
        <header>
            <h1 class="container">Технічне обслуговування</h1>
        </header>

        <div class="body container">
            <div class="row">
                <router-link tag="article"
                             class="col-md-6 col-12"
                             exact
                             to="/maintenance/principles"
                >
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-maintenance-overview-taxonomy_tcm-3046-249528.jpg" alt="Технічне обслуговування автомобілів">
                    <h3>Технічне обслуговування автомобілів</h3>
                    <p>Фахівці сервісних центрів Toyota пройшли повний курс підготовки відповідно до суворих нормативів Toyota для того, щоб постійно підтримувати вашу «Тойоту» в ідеальному стані.</p>
                </router-link>

                <router-link tag="article"
                             class="col-md-6 col-12"
                             exact
                             to="/maintenance/guarantee"
                >
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-aftersales-2014-services-promise-spotlight.jpg_tcm-3046-58763.jpg" alt="Гарантія якості технічного обслуговування">
                    <h3>Гарантія якості технічного обслуговування</h3>
                    <p>Кому, як не нам, найкраще відомо все про ваш автомобіль! Адже ми його спроектували, виготовили і підготували майстрів для технічного обслуговування вашого авто.</p>
                </router-link>

                <router-link tag="article"
                             class="col-md-6 col-12"
                             exact
                             to="/maintenance/lubricants"
                >
                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-genuine-oil-taxonomy_tcm-3046-249525.jpg" alt="Оригінальні мастильні матеріали Toyota">
                    <h3>Оригінальні мастильні матеріали Toyota</h3>
                    <p>Усі оригінальні мастильні матеріали Toyota відповідають найсуворішим вимогам щодо якості та мають чудові експлуатаційні характеристики.</p>
                </router-link>

<!--                <router-link tag="article"-->
<!--                             class="col-md-6 col-12"-->
<!--                             exact-->
<!--                             to="/maintenance/calc"-->
<!--                >-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/555x249_Toyota_Service_1_tcm-3046-1921515.jpg" alt="Калькулятор технічного обслуговування">-->
<!--                    <h3>Калькулятор технічного обслуговування</h3>-->
<!--                    <p>Дізнайтесь орієнтовну вартість періодичного обслуговування.</p>-->
<!--                </router-link>-->

<!--                <router-link tag="article"-->
<!--                             class="col-md-6 col-12"-->
<!--                             exact-->
<!--                             to="/maintenance/special_company"-->
<!--                >-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/ssc-taxonomy-555x249_tcm-3046-1556314.jpg" alt="За допомогою програми перевірки, Ви можете перевірити чи залучений Ваш автомобіль до проведення Спеціальних Сервісних Кампаній.">-->
<!--                    <h3>Перевірте ваш автомобіль на наявність спеціальних сервісних кампаній</h3>-->
<!--                    <p>За допомогою програми перевірки, Ви можете перевірити чи залучений Ваш автомобіль до проведення Спеціальних Сервісних Кампаній.</p>-->
<!--                </router-link>-->
            </div>

        </div>
    </main>
</template>

<script>
    export default {
        name: "MaintenanceGeneral",

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Технічне обслуговування автомобілів`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Технічне обслуговування автомобілів`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворив нормативів Toyota для того, щоб постійно підтримувати вашу «Тойоту» в ідеальному стані.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворив нормативів Toyota для того, щоб постійно підтримувати вашу «Тойоту» в ідеальному стані.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main.container-fluid {
        padding: 0;
        color: $font_color;
        header {
            @include header-xl;
            height: 56vh;
            background-image: url(//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-aftersales-2014-service-maintenance-focus_tcm-3046-65752.jpg);
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            margin-bottom: 50px;
            h1 {
                padding-top: 100px;
                /*font-size: 5.2rem;*/
                color: #ffffff;
                /*font-weight: bolder;*/
            }
        }

        .body.container {
            .row {
                article {
                    text-align: left;
                    padding-bottom: 24px;
                    img {
                        width: 100%;
                    }
                    h3 {
                        margin-top: 24px;
                        font-size: 2rem;
                        font-weight: bolder;
                    }
                    p {
                        font-size: 1.8rem;
                        color: #595D60;
                        padding: 10px 0;
                    }
                }
            }

        }
    }


    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid{
            header {
                @include header-lg
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid{
            header {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid {
            header  {
                @include header-sm;
            }
        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid {
            header {
                @include header-xs;
            }
        }
    }

</style>