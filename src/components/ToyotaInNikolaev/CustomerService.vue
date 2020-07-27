<template>
    <main>
        <div v-html="pageBody.body"></div>

<!--        <header>-->
<!--            <h1 class="text-center">Клієнтська служба-->
<!--                <h2 class="text-center">ПІІ «Тойота-Україна»</h2>-->
<!--            </h1>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <h3 class="text-center">Однією з переваг купівлі автомобіля в офіційній дилерській мережі ПІІ «Тойота-Україна» є клієнтська служба компанії.</h3>-->

<!--            <p>Представники цієї служби завжди тримають зворотний зв’язок з клієнтами після продажу автомобіля, завжди готові прийти на допомогу та знайти вихід з найскладніших ситуацій.</p>-->

<!--            <div class="row">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <p>Світова практика роботи клієнтських служб Toyota була впроваджена в Україні 2005 року. На разі у кожному дилерському центрі Toyota по всій Україні працюють представники цієї служби. Загалом в офіційних дилерських центрах працює 33 фахівця по роботі з клієнтами, які у своїй діяльності опираються не лише на досвід роботи клієнтської служби офіційного дистриб’ютора ПІІ «Тойота-Україна», а й на багаторічний досвід роботи «Тойота Мотор Європа».</p>-->
<!--                </div>-->

<!--                <div class="col-md-6 col-12">-->
<!--                    <h4 class="d-flex"><span>Файли для завантаження</span> <i class="fas fa-download"></i></h4>-->
<!--                    <ul>-->
<!--                        <li><a href="https://www.toyota.ua/download/cms/uaua/Toyota-Assistance-Brochure_tcm856-1142043_tcm-3046-164042.pdf" download target="_blank"><i class="far fa-file"></i> Брошура про програму Toyota Assistance</a></li>-->
<!--                        <li><a href="https://www.toyota.ua/download/cms/uaua/Assistance-plus-booklet-2019_tcm-3046-698853.pdf"><i class="far fa-file"></i> Брошура про програму Toyota Assistance Plus (pdf)</a></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->

<!--            <h3>Основні напрямки діяльності клієнтської служби:</h3>-->

<!--            <ul>-->
<!--                <li>робота з побажаннями та претензіями клієнтів;</li>-->
<!--                <li>дослідження рівня задоволеності клієнтів;</li>-->
<!--                <li>підтримка роботи служби допомоги в дорозі-->
<!--                    <router-link-->
<!--                            tag="a"-->
<!--                            exact-->
<!--                            to="/toyota_assistance"-->
<!--                    >Toyota Assistance</router-link> та-->
<!--                    <router-link-->
<!--                            tag="a"-->
<!--                            exact-->
<!--                            to="/toyota_assistance_plus"-->
<!--                    >Toyota Assistance Plus</router-link>.</li>-->
<!--            </ul>-->

<!--            <p>Якщо у вас виникла необхідність поділитися своїми побажаннями та пропозиціями щодо покращення роботи дилерських центрів залиште повідомлення через форму зворотного зв’язку</p>-->

<!--        </div>-->

<!--        <footer class="text-center">-->
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
    import PageBody from "../../mixins/mixinPages"
    export default {
        name: "CustomerService",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 36,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Клієнтська служба ПІІ «Тойота-Україна»`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Клієнтська служба ПІІ «Тойота-Україна»`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Представники клієнтської служби ПІІ «Тойота-Україна» працюють з побажаннями та претензіями клієнтів, та службою  Toyota Assistance.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Представники клієнтської служби ПІІ «Тойота-Україна» працюють з побажаннями та претензіями клієнтів, та службою  Toyota Assistance.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота, Україна, клієнт, клієнтська служба, відділ по роботі з клієнтами, переваги, якість, побажання, пропозиції, скарга, toyota, toyota ukraine, toyota assistance, toyota assistance plus, досвід, претензії, офіційний дилер, тойота, лексус, toyota, lexus, ukraine, Україна, Genuine Accessories, Latest news, Genuine Parts`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота, Україна, клієнт, клієнтська служба, відділ по роботі з клієнтами, переваги, якість, побажання, пропозиції, скарга, toyota, toyota ukraine, toyota assistance, toyota assistance plus, досвід, претензії, офіційний дилер, тойота, лексус, toyota, lexus, ukraine, Україна, Genuine Accessories, Latest news, Genuine Parts`
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
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }
    
    main ::v-deep div {
        header {
            @include header-xl;
            background-image: url(//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/customer-service-header_tcm-3046-164011.jpg);
        }

        .body.container {
            margin: 68px auto;

            h3 {
                font-size: 1.8rem;
                font-weight: bold;
            }
            .p {
                font-size: 1.6rem;
                color: #595D60;
                margin: 30px 0;
            }

            .row {
                color: #595D60;
                margin-bottom: 68px;
                div {
                    h4 {
                        margin: 30px 0 10px;
                        padding-bottom: 16px;
                        border-bottom: 1px solid #a8aaac;
                        font-size: 1.5rem;
                        font-weight: bold;
                        span {
                            flex-grow: 1;
                        }
                        i {
                            color: #E50000;
                            font-size: 1.3rem;
                        }
                    }
                    ul {
                        list-style-position: inside;
                        padding-left: 20px;
                        li {
                            font-size: 1.5rem;
                            margin-bottom: 10px;
                            a:hover {
                                color: #595D60;
                            }
                            i {
                                display: inline-block;
                                margin-right: 15px;
                            }
                        }
                    }
                }
            }

            ul {
                margin: 30px 0;
                list-style-position: inside;
                li {
                    font-size: 1.6rem;
                    color: #595D60;
                    margin-bottom: 10px;
                    a {
                        color: $font_color;
                        text-decoration: underline;
                    }
                }
            }



        }

        footer {
            .btn.btn-danger {
                @include button;
                background-color: #E50000;
                margin: 30px auto;
                i {
                    color: #ffffff;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main ::v-deep div {
            header {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main ::v-deep div {
            header {
                @include header-md;
            }

            .body.container {

                .row {
                    color: #595D60;
                    margin-bottom: 68px;
                    div {
                        ul {
                            list-style-position: outside;
                        }
                    }
                }

            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main ::v-deep div {
            header {
                @include header-sm;
            }

            .body.container {
                margin: 30px auto;

                .p {
                    margin: 10px 0;
                }

                .row {
                    margin-bottom: 30px;
                    div {
                        ul {
                            list-style-position: outside;
                            margin: 0;
                        }
                    }
                }

                ul {
                    margin: 30px 0 30px 15px;
                    list-style-position: outside;
                }

            }

            footer {
                button.btn.btn-danger {
                    margin: 30px auto;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main ::v-deep div {
            header {
                @include header-xs;
            }

            .body.container {
                margin: 30px auto;

                .p {
                    margin: 30px 0 0;
                }

                .row {
                    margin-bottom: 10px;
                    div {
                        h4 {
                            margin: 30px 0 10px;
                        }
                        ul {
                            list-style-position: outside;
                        }
                    }
                }

                ul {
                    margin: 30px 0;
                    list-style-position: inside;
                }
            }

            footer {
                button.btn.btn-danger {
                    margin: 10px auto;
                }
            }
        }
    }

</style>