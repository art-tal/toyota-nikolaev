<template>
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
                                to="/business_car"
                        >
                            Користувачам службових автомобілів
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/business_owner"
                        >Власникам бізнесу</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/corporate_clients"
                        >Корпоративним клієнтам</router-link>
                    </li>

                    <!--                        <li class="nav-item">-->
                    <!--                            <router-link-->
                    <!--                                    class="nav-link"-->
                    <!--                                    active-class="active"-->
                    <!--                                    tag="a"-->
                    <!--                                    exact-->
                    <!--                                    to="Special_solutions"-->
                    <!--                            >Спеціальні фінансові рішення</router-link>-->
                    <!--                        </li>-->

                </ul>
            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "MenuToCorporateSales"
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/variables";
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

    @media (max-width: 991.9px) {
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
        }

</style>