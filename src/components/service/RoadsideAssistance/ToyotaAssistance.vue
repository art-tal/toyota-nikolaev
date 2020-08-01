<template>
    <main class="container-fluid">
        <sidebar></sidebar>
        <div v-html="pageBody"></div>

<!--        <header>-->
<!--            <h1 class="text-center">"Toyota Assistance"-->
<!--            </h1>-->
<!--            <h2 class="text-center">Ви користуєтесь автомобілем, а «Тойота» піклується про нього</h2>-->
<!--        </header>-->

<!--        <section class="container">-->
<!--            <header>-->
<!--                <h1 class="text-center">В офіційній дилерській мережі ПІІ «Тойота-Україна» діє унікальна програма допомоги в дорозі під назвою "Toyota Assistancе"</h1>-->
<!--            </header>-->

<!--            <div class="body text-left">-->
<!--                <p>Купуючи офіційний автомобіль Toyota, його власник автоматично отримує професійну підтримку та допомогу в дорозі не тільки у технічних питаннях, але й у нестандартних ситуаціях. Послуга Toyota Assistance діє протягом трьох років з дня першої реєстрації автомобіля без обмеження пробігу.</p>-->
<!--                <p>Звертаємо вашу увагу на те, що програма "Toyota Assistancе" унікальна у своєму класі і що в межах цієї програми надається безпрецедентно повний спектр послуг із підтримки автомобіля в дорозі.</p>-->
<!--                <p>Програма допомоги в дорозі "Toyota Assistance" впроваджена в офіційній дилерській мережі ПІІ «Тойота-Україна» 2005 року та передбачає цілодобову інформаційну підтримку та професійну допомогу в дорозі. "Toyota Assistance" унікальна тому, що включає в себе чимало безкоштовних для клієнтів послуг та діє в 35 країнах Європи.</p>-->
<!--                <p><strong>Телефон Toyota Assistance</strong> - <a href="tel:+380444942298">+38044-494-22-98</a>  24 години на добу, 365 днів на рік</p>-->
<!--            </div>-->

<!--            <footer class="text-left">-->
<!--                <h4 class="d-flex justify-content-between">-->
<!--                    <strong class="text-left flex-grow-1">Файли для завантаження</strong>-->
<!--                    <i class="fas fa-download"></i>-->
<!--                </h4>-->

<!--                <ul>-->
<!--                    <li>-->
<!--                        <i class="far fa-file-alt"></i>-->
<!--                        <a href="https://www.toyota.ua/download/cms/uaua/toyota-assistance-2019_tcm-3046-165300.pdf" >Брошура про програму Toyota Assistance (pdf)</a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </footer>-->
<!--        </section>-->

    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    import Sidebar from "../../permanent/Sidebar";

    export default {
        name: "Toyota Assistance",

        components: {
            Sidebar
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 25,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Assistance - допомога в дорозі | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Assistance - допомога в дорозі | Toyota Україна`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `&quot;Toyota Assistance&quot; — це оперативна допомога для власників автомобілів марки Toyota, які були придбані в офіційній дилерській мережі Toyota в Україні.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `&quot;Toyota Assistance&quot; — це оперативна допомога для власників автомобілів марки Toyota, які були придбані в офіційній дилерській мережі Toyota в Україні.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, toyota assistance, допомога в дорозі, зручність, програма тойота асистанс, Україна, київ, допомога в дорозі, тойота асістанс, toyota assistance, Тойота-Україна, гарант-асістанс, умови, послуги, види, покриття, Latest news`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, toyota assistance, допомога в дорозі, зручність, програма тойота асистанс, Україна, київ, допомога в дорозі, тойота асістанс, toyota assistance, Тойота-Україна, гарант-асістанс, умови, послуги, види, покриття, Latest news`
                        content: this.meta_keywords,
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
        margin: 0;
    }

    main.container-fluid ::v-deep div {
        padding: 0;
        margin: 0;

        header {
            @include header-xl;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Toyota-Assistance_tcm-3046-1600899.jpg);
            h1 {
                text-align: center;
            }

            h2 {
                text-align: center;
            }
        }

        section.container {
            color: $font_color;
            header {
                margin: 68px auto;
                background: none;
                height: auto;
                padding-top: 0;
                h1 {
                    width: 100%;
                    font-size: 3.4rem;
                    font-weight: normal;
                }
            }

            .p {
                font-size: 1.5rem;
                color: #595D60;
                margin-bottom: 40px;
                a {
                    text-decoration: underline;
                    color: $font_color;
                    cursor: pointer;
                    &:hover {
                        color: #E50000;
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
                @include header-lg;
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid ::v-deep div {
            header {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid ::v-deep div {
            header {
                @include header-sm;
            }

            section.container {
                header {
                    @include header-xs;
                    margin: 30px auto;
                    h1 {
                        width: 100%;
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
                    h1 {
                        font-size: 2.5rem;
                    }
                }
            }
        }
    }

</style>