<template>
    <menu>
        <nav class="navbar navbar-expand-xl navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>



            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-xl-center text-left">

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/cars_available"
                        >Авто в наявності</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/exclusive_projects"
                        >Екслюзивні проекти</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/about"
                        >Про нас</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/workers"
                        >Наші фахівці</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/faq"
                        >Зв’язатись з нами</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/where"
                        >Як нас знайти</router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "MenuNikolaev"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    menu {
        width: 100%;
        padding-left: 0;
        position: sticky;
        top: 0;
        z-index: 998;
        left: 0;
        background-color: #fff;

        nav.navbar {
            background-color: #fff;
            font-size: 1.5rem;
            padding: 5px;

            .collapse.navbar-collapse {
                ul.navbar-nav {
                    li.nav-item {
                        padding: 0 10px;
                    }
                }
            }
        }
    }


    @media (max-width: 1199.9px) {

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
                            background-color: #f0f0f0;
                            padding: 15px 25px;
                            box-sizing: border-box;
                            border: 1px solid #cccccc;
                        }
                    }
                }
            }
        }

    }

</style>