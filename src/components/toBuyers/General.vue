<template>
    <section>
        <menu-to-corporate/>
        <header class="container-fluid">
<!--            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/modelniy-ryad-toyota-v-ukraini-1600x900_tcm-3046-663235.jpg" alt="lineup">-->
            <img :src="require('../../img/' + dirBG +'/modelniy-ryad-toyota-v-ukraini-1600x900_tcm-3046-663235.jpg')" alt="lineup">
        </header>

        <div class="body container">
            <p>Ласкаво просимо до Тойота Центр Миколаїв «КиТ-Т» . Це Ваш бізнес-партнер, що наближає Ваш успіх та перевершує очікування. Розуміючи Ваші персональні бізнес-потреби, ми підберемо для Вас потрібний автомобіль, надамо поради та забезпечимо будь-яку необхідну підтримку.</p>
            <h2>Що Вас цікавить?</h2>
            <section class="row">
<!--                <router-link-->
<!--                        tag="article"-->
<!--                        class="col-lg-4 col-12"-->
<!--                        active-class="active"-->
<!--                        exact-->
<!--                        to="/corporate_sales/business_car"-->
<!--                >-->
<!--&lt;!&ndash;                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/company-car2_tcm-3046-663260.jpg" alt="business_car">&ndash;&gt;-->
<!--                    <img src="../../img/images/business-customers-company-car-350x197_tcm-3046-663239.jpg" alt="business_car">-->
<!--                    <strong>Користувачам службових автомобілів</strong>-->
<!--                    <p>Дізнайтеся більше про надійний модельний ряд Toyota та унікальну підтримку, яку ми забезпечуємо.</p>-->
<!--                </router-link>-->

                <router-link
                        tag="article"
                        class="col-lg-6 col-12"
                        active-class="active"
                        exact
                        to="/corporate_sales/business_owner"
                >
<!--                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Business-Sales_tcm-3046-663262.jpg" alt="business_owner">-->
                    <img src="../../img/images/b2b-350x197_tcm-3046-906751.jpg" alt="business_owner">
                    <strong>Бізнес для бізнесу</strong>
                    <p>Дізнайтеся про причини працювати з Toyota</p>
                </router-link>

                <router-link
                        tag="article"
                        class="col-lg-6 col-12"
                        active-class="active"
                        exact
                        to="/corporate_sales/corporate_clients"
                >
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Euro-Sales_tcm-3046-663264.jpg" alt="corporate_clients">-->
                    <img src="../../img/images/business-plus-sales-350x197_tcm-3046-906757.jpg" alt="corporate_clients">
                    <strong>Корпоративні продажі</strong>
                    <p>Зв'яжіться з нашою мережею, аби дізнатися більше про продуктову лінійку Toyota та перелік послуг.</p>
                </router-link>

            </section>

            <section>
                <header>
                    <h1>Toyota - це більше переваг для Вашого бізнесу</h1>
                </header>
                <div class="links row">
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Статус</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Якість</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Надійність</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Довговічність</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Гібридні техології</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Співвідношення ціна/якість</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Широкий модельний ряд</a>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href.prevent="#">Велика сервісна мережа</a>
                    </div>
                </div>
            </section>
        </div>

        <fragnet-lineup></fragnet-lineup>
    </section>
</template>

<script>
    import MenuToCorporate from "./../../components/toBuyers/MenuToCorporateSales"
    import FragnetLineup from "../toBuyers/FragnetLineup";
    import imageSizeMixin from "../../mixins/imageSizeMixin";

    export default {
        name: "General",

        mixins: [
            imageSizeMixin
        ],

        components: {
            FragnetLineup,
            MenuToCorporate,
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Ваш бізнес-партнер | Корпоративні продажі`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Ваш бізнес-партнер | Корпоративні продажі`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Розуміючи ваші персональні бізнес-потреби, ми підберемо для вас потрібний автомобіль, надамо поради та забезпечимо будь-яку необхідну підтримку.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Розуміючи ваші персональні бізнес-потреби, ми підберемо для вас потрібний автомобіль, надамо поради та забезпечимо будь-яку необхідну підтримку.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota, BusinessPlus, автопарк, службовий автомобіль, бізнес, автопарк, продажі, модельний ряд, фінансування, продукти, послуги, гібрид, служебный автомобиль, бизнес, автопарк, продажи, модельный ряд, финансирование, продукты, услуги, гибрид, Toyota BusinessPlus`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota, BusinessPlus, автопарк, службовий автомобіль, бізнес, автопарк, продажі, модельний ряд, фінансування, продукти, послуги, гібрид, служебный автомобиль, бизнес, автопарк, продажи, модельный ряд, финансирование, продукты, услуги, гибрид, Toyota BusinessPlus`
                    },
                ],
            }
        },

        created() {
            this.identifyDevice();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section {
        header.container-fluid {
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
            img {
                width: 100%;
                height: auto;
            }
        }
        .body.container {
            p {
                margin: 68px 0;
                font-size: 1.8rem;
            }
            h2 {
                font-size: 4.4rem;
                font-weight: bolder;
                margin: 68px 0;
            }
            section.row {
                article {
                    margin: 0 0 68px;
                    padding: 0 15px;
                    font-size: 1.6rem;
                    text-align: left;
                    img {
                        width: 100%;
                    }
                    strong {
                        display: inline-block;
                        margin: 15px 0;

                    }
                    p {
                        margin: 0;
                    }
                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        strong {
                            text-decoration: underline;
                        }
                    }
                }
            }

            section {
                header {
                    h1 {
                        font-size: 4.4rem;
                        margin-bottom: 40px;
                    }
                }
                .links.row {
                    margin: 0;
                    div {
                        margin: 0;
                        a {
                            display: inline-block;
                            font-size: 2.4rem;
                            padding: 20px 0;
                            color: $font_color;
                            margin: 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 991.9px) {
        section {
            .body.container {
                p {
                    margin: 30px 0;
                    font-size: 1.8rem;
                }
                h2 {
                    font-size: 3.5rem;
                    font-weight: bolder;
                    margin: 30px 0;
                }
                section {
                    header {
                        h1 {
                            font-size: 3.5rem;
                            margin-bottom: 30px;
                        }
                    }
                }
            }

        }
    }

    @media (max-width: 575.9px) {
        section {
            .body.container {
                section {
                    header {
                        h1 {
                            font-size: 3.0rem;
                            margin-bottom: 30px;
                        }
                    }
                    .links.row {
                        div {
                            a {
                                font-size: 2rem;
                                padding: 10px 0;
                            }
                        }
                    }
                }
            }
        }
    }


</style>