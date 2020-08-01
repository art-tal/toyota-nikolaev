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
                                to="/choose_original"
                        >Обирай оригінальне!</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/air_filters_of_salon"
                        >Повітряні фільтри салону</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/rechargeable_batteries"
                        >Акумуляторні батареї</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/original_lamps"
                        >Оригінальні лампи</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/wiper_blades"
                        >Щітки склоочисника</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/toyota_ad_blue_liquid"
                        >Рідина Toyota AdBlue™</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/brake_discs_and_pads"
                        >Гальмівні диски та колодки</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/original_windshields"
                        >Оригінальні лобові стекла</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/fuel_system_cleaner"
                        >Очисник паливної системи</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "MenuToSpareParts"
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

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