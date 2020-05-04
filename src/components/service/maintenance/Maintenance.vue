<template>
    <main>
        <sidebar></sidebar>

        <menu>
            <nav class="navbar navbar-expand-lg navbar-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>



                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-lg-center text-left">

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/maintenance/principles"
                            >
                                Принципи
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/maintenance/guarantee"
                            >Гарантія якості сервісу</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/maintenance/lubricants"
                            >Оригінальні мастильні матеріали</router-link>
                        </li>

<!--                        <li class="nav-item">-->
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    active-class="active"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    to="/maintenance/calc"-->
<!--                            >Калькулятор вартості технічного обслуговування</router-link>-->
<!--                        </li>-->

<!--                        <li class="nav-item">-->
<!--                            <router-link-->
<!--                                    class="nav-link"-->
<!--                                    active-class="active"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    to="/maintenance/special_company"-->
<!--                            >Спеціальні сервісні кампанії</router-link>-->
<!--                        </li>-->

                    </ul>
                </div>
            </nav>
        </menu>

        <router-view></router-view>
    </main>
</template>

<script>
    import Sidebar from "../../permanent/Sidebar";

    export default {
        name: "Maintenance",

        components: {
            Sidebar
        },

        created() {
            this.$router.push({name: "maintenance_general"});
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main {
        menu {
            width: 100%;
            padding-left: 100px;
            position: sticky;
            top: 0;
            z-index: 998;
            left: 0;
            background-color: #fff;

            nav.navbar {
                background-color: #fff;
                font-size: 1.5rem;

                .collapse.navbar-collapse {
                    ul.navbar-nav {
                        li.nav-item {
                            padding: 0 30px;
                        }
                    }
                }
            }
        }
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