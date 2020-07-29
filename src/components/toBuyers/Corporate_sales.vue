<template>
    <main>
        <sidebar></sidebar>
        <menu-to-corporate/>

<!--        <menu>-->
<!--            <nav class="navbar navbar-expand-lg navbar-light">-->

<!--                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                    <span class="navbar-toggler-icon"></span>-->
<!--                </button>-->



<!--                <div class="collapse navbar-collapse" id="navbarNav">-->
<!--                    <ul class="navbar-nav text-lg-center text-left">-->

<!--                        <li class="nav-item">-->
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    active-class="active"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    to="/corporate_sales/business_car"-->
<!--                            >-->
<!--                                Користувачам службових автомобілів-->
<!--                            </router-link>-->
<!--                        </li>-->

<!--                        <li class="nav-item">-->
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    active-class="active"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    to="/corporate_sales/business_owner"-->
<!--                            >Власникам бізнесу</router-link>-->
<!--                        </li>-->

<!--                        <li class="nav-item">-->
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    active-class="active"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    to="Corporate_clients"-->
<!--                            >Корпоративним клієнтам</router-link>-->
<!--                        </li>-->

<!--&lt;!&ndash;                        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;                            <router-link&ndash;&gt;-->
<!--&lt;!&ndash;                                    class="nav-link"&ndash;&gt;-->
<!--&lt;!&ndash;                                    active-class="active"&ndash;&gt;-->
<!--&lt;!&ndash;                                    tag="a"&ndash;&gt;-->
<!--&lt;!&ndash;                                    exact&ndash;&gt;-->
<!--&lt;!&ndash;                                    to="Special_solutions"&ndash;&gt;-->
<!--&lt;!&ndash;                            >Спеціальні фінансові рішення</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->

<!--                    </ul>-->
<!--                </div>-->
<!--            </nav>-->
<!--        </menu>-->

        <router-view></router-view>

<!--        <section class="lineup container-fluid text-left">-->
<!--            <header class="container">-->
<!--                <h1>Широкий модельний ряд. Розвинена дилерська мережа</h1>-->
<!--            </header>-->
<!--            <footer class="container">-->
<!--                &lt;!&ndash;                <button class="btn btn-light">Открой для себя Toyota Hybrid</button>&ndash;&gt;-->
<!--                <router-link-->
<!--                        tag="button"-->
<!--                        exact-->
<!--                        class="btn btn-light"-->
<!--                        active-class="active"-->
<!--                        to=""-->
<!--                >-->
<!--                    Відкрий для себе Toyota Hybrid-->
<!--                </router-link>-->
<!--            </footer>-->
<!--        </section>-->
<!--        <fragnet-lineup></fragnet-lineup>-->
    </main>
</template>

<script>
    import Sidebar from "./../../components/permanent/Sidebar";//       for Laravel
    import MenuToCorporate from "./../../components/toBuyers/MenuToCorporateSales"

    export default {
        name: "Corporate_sales",

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

        components: {
            Sidebar,
            MenuToCorporate
        },

        created() {
            this.$router.push({name: "general"});
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main {
        /*menu {*/
        /*    width: 100%;*/
        /*    padding-left: 100px;*/
        /*    position: sticky;*/
        /*    top: 0;*/
        /*    z-index: 998;*/
        /*    left: 0;*/
        /*    background-color: #fff;*/

        /*    nav.navbar {*/
        /*        background-color: #fff;*/
        /*        font-size: 1.5rem;*/

        /*        .collapse.navbar-collapse {*/
        /*            ul.navbar-nav {*/
        /*                li.nav-item {*/
        /*                    padding: 0 30px;*/
        /*                }*/
        /*            }*/
        /*        }*/
        /*    }*/
        /*}*/

        /*section.lineup.container-fluid {
            height: 56vh;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/rav4-hybrid-1600x450_tcm-3046-707555.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            header {
                h1 {
                    padding-top: 150px;
                    padding-bottom: 100px;
                    font-size: 4.5rem;
                    color: #ffffff;
                    font-weight: bolder;
                }
            }
            footer {
                button.btn {
                    @include button;
                    background-color: #f0f0f0;
                    &:hover {
                        background-color: #E50000;
                        color: #ffffff;
                    }
                }
            }
        }*/
    }



    @media (max-width: 991.9px) {
        main {
            menu {
                background-color: #f0f0f0;
                padding: 0;
                margin: 0;
                nav.navbar {
                    padding: 0;
                    background-color: #f0f0f0;
                    button.navbar-toggler {
                        margin: 15px;
                    }
                    .collapse.navbar-collapse {
                        ul.navbar-nav {
                            width: 100%;
                            li.nav-item {
                                padding: 15px 25px;
                                box-sizing: border-box;
                                border-bottom: 1px solid #cccccc;
                            }
                        }
                    }
                }
            }

            section.lineup.container-fluid {
                height: 40vw;
                min-height: 380px;
                header {
                    h1 {
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            section.lineup.container-fluid {
                max-height: 380px;
                height: 56vw;
                min-height: 220px;
                header {
                    h1 {
                        font-size: 5vw;
                        padding-top: 30px;
                        padding-bottom: 30px;
                    }
                }
            }
        }
    }


</style>