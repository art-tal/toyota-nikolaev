<template>
    <main class="container-fluid">
        <sidebar></sidebar>
        <div v-html="pageBody"></div>

<!--        <header>-->
<!--            <h1 class="text-center">Toyota Assistance-->
<!--            </h1>-->
<!--            <h2 class="text-center">Plus</h2>-->
<!--        </header>-->

<!--        <section class="container text-left">-->
<!--            <header>-->
<!--                <h1 class="text-center">Підтримка вашого автомобіля у дорозі після закінчення гарантійного терміну.</h1>-->
<!--            </header>-->
<!--            -->
<!--            <div class="body container">-->
<!--                <h5>Власники автомобілів Toyota, які офіційно були продані ПІІ «Тойота-Україна» і для яких закінчився термін дії програми "Toyota Assistance" (3 роки, незалежно від пробігу), тепер мають можливість стати учасниками програми "Toyota Assistance Plus". </h5>-->
<!--                <h5>Ця програма передбачає два види пакетів послуг, що можна придбати: «Україна» та «Україна+Європа».</h5>-->

<!--                <h3>Купуючи пакет послуг програми "Toyota Assistance Plus", ви отримуєте наступну підтримку:</h3>-->
<!--                <ul>-->
<!--                    <li>інформаційна підтримка; </li>-->
<!--                    <li>евакуація транспортного засобу; </li>-->
<!--                    <li>технічна допомога у дорозі;</li>-->
<!--                    <li>бронювання та оплата номера в готелі; </li>-->
<!--                    <li>бронювання та оплата квитків; </li>-->
<!--                    <li>автомобіль на заміну; </li>-->
<!--                    <li>виклик таксі.</li>-->
<!--                </ul>-->

<!--                <h3>Служба допомоги "Toyota Assistance Plus" працює цілодобово, без вихідних та дарує вам спокій і впевненість під час поїздок на вашому автомобілі.</h3>-->

<!--                <p><strong>Телефон Toyota Assistance Plus</strong> - <a href="tel:+380444942298">+38044-494-22-98</a></p>-->

<!--                <p>З питань придбання пакета послуг "Toyota Assistance Plus" терміном на 1 рік звертайтеся до будь-якого офіційного дилера ПІІ «Тойота-Україна».<br>-->
<!--                    Ваш дилер ознайомить вас з перевагами програми та докладним переліком послуг.</p>-->



<!--            </div>-->

<!--            <footer class="text-left">-->
<!--                <h4 class="d-flex justify-content-between">-->
<!--                    <strong class="text-left flex-grow-1">Файли для завантаження</strong>-->
<!--                    <i class="fas fa-download"></i>-->
<!--                </h4>-->

<!--                <ul>-->
<!--                    <li>-->
<!--                        <i class="far fa-file-alt"></i>-->
<!--                        <a href="https://www.toyota.ua/download/cms/uaua/Assistance-plus-booklet-2019_tcm-3046-698853.pdf" >Брошура про програму Toyota Assistance Plus (pdf)</a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </footer>-->

<!--            -->

<!--        </section>-->

    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    import Sidebar from "../../permanent/Sidebar";

    export default {
        name: "ToyotaAssistancePlus",

        components: {
            Sidebar
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 26,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Підтримка вашого авто у дорозі | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Підтримка вашого авто у дорозі | Toyota Україна`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Програма для власників авмобілів Toyota, придбаних в офіційній дилерській мережі  і для яких вичерпано гарантійний термін.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Програма для власників авмобілів Toyota, придбаних в офіційній дилерській мережі  і для яких вичерпано гарантійний термін.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, Toyota Assistance Plus, Загальні умови, зміна власника, відшкодування витрат, Toyota Assistance plus, винятки, програма Toyota Assistance plus, Toyota Assistance plus`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, Toyota Assistance Plus, Загальні умови, зміна власника, відшкодування витрат, Toyota Assistance plus, винятки, програма Toyota Assistance plus, Toyota Assistance plus`
                        content: this.meta_keywords,
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

    main.container-fluid {
        padding: 0;
        margin: 0;
    }


    main.container-fluid ::v-deep div {
        padding: 0;
        margin: 0;

        header {
            width: 100%;
            height: 80vh;
            padding-top: 70px;
            background-image: url(//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-assistance-plus-1440x430_tcm-3046-1186895.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: #ffffff;

            h1 {
                width: 100%;
                padding: 15px;
                margin: 0 auto;
                font-size: 5.2rem;
                font-weight: bolder;
                text-align: left;
            }

            h2 {
                font-size: 3.4rem;
                text-align: left;
                padding-top: 16px;
            }
        }

        section.container {
            color: $font_color;
            header {
                margin: 68px auto;
                height: auto;
                background: none;
                padding-top: 0;
                h1 {
                    font-size: 3.4rem;
                    color: $font_color;
                }
            }

            .body.container {
                padding: 0;
                h5 {
                    font-size: 1.8rem;
                    margin-bottom: 24px;
                    text-align: center;
                }

                h3 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 24px;
                }

                ul {
                    padding-left: 20px;
                    color: #595D60;
                    margin-bottom: 30px;
                    li {
                        margin-bottom: 10px;
                        font-size: 1.5rem;
                    }
                }

                .p {
                    color: #595D60;
                    font-size: 1.5rem;
                    margin-bottom: 30px;
                    a {
                        color: $font_color;
                        text-decoration: underline;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }



            footer {
                margin: 68px 0;
                font-size: 1.5rem;
                color: #595D60;
                h4 {
                    border-bottom: 1px solid #f0f0f0;
                    padding-bottom: 20px;
                    i {
                        color: #E50000;
                    }
                }

                ul {
                    padding-left: 20px;
                    margin-top: 15px;
                    li {
                        margin-bottom: 10px;
                        i {
                            display: inline-block;
                            margin-right: 10px;
                        }
                        a {
                            color: $font_color;
                            &:hover {
                                text-decoration: underline;
                                cursor: pointer;
                            }
                        }
                    }
                }

            }
        }


    }



    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid ::v-deep div {
            header {
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid ::v-deep div {
            header {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 4rem;
                }
                h2 {
                    font-size: 3rem;
                    padding-top: 10px;
                }
            }

            section.container {
                header {
                    margin: 30px auto;
                    height: auto;
                    min-height: auto;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid ::v-deep div {
            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                }
                h2 {
                    font-size: 2.5rem;
                    padding-top: 5px;
                }
            }

            section.container {
                header {
                    margin: 30px auto;
                    height: auto;
                    min-height: auto;
                    h1 {
                        font-size: 3rem;
                    }
                }
            }

        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid ::v-deep div {
            header {
                height: auto;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    padding: 10px 15px;
                    font-size: 2.5rem;
                }
                h2 {
                    font-size: 1.8rem;
                    padding-top: 5px;
                }
            }

            section.container {
                header {
                    margin: 30px auto;
                    min-height: auto;
                    h1 {
                        font-size: 2.5rem;
                    }
                }

                .body.container {
                    h5 {
                        font-size: 1.6rem;
                    }

                    h3 {
                        font-size: 1.6rem;
                    }
                }



                footer {
                    margin: 68px 0;
                    font-size: 1.5rem;
                    color: #595D60;
                    h4 {
                        border-bottom: 1px solid #f0f0f0;
                        padding-bottom: 20px;
                        i {
                            color: #E50000;
                        }
                    }

                    ul {
                        padding-left: 20px;
                        margin-top: 15px;
                        li {
                            margin-bottom: 10px;
                            i {
                                display: inline-block;
                                margin-right: 10px;
                            }
                            a {
                                color: $font_color;
                                &:hover {
                                    text-decoration: underline;
                                    cursor: pointer;
                                }
                            }
                        }
                    }

                }
            }


        }
    }

</style>