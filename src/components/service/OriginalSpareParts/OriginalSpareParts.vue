<template>
    <main class="container-fluid">
        <sidebar></sidebar>

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
                                    to="/original_spare_parts/choose_original"
                            >Обирай оригінальне!</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/air_filters_of_salon"
                            >Повітряні фільтри салону</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/rechargeable_batteries"
                            >Акумуляторні батареї</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/original_lamps"
                            >Оригінальні лампи</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/wiper_blades"
                            >Щітки склоочисника</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/toyota_ad_blue_liquid"
                            >Рідина Toyota AdBlue™</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/brake_discs_and_pads"
                            >Гальмівні диски та колодки</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/original_windshields"
                            >Оригінальні лобові стекла</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                    class="nav-link"
                                    active-class="active"
                                    tag="a"
                                    exact
                                    to="/original_spare_parts/fuel_system_cleaner"
                            >Очисник паливної системи</router-link>
                        </li>
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
        name: "OriginalSpareParts",

        components: {
            Sidebar,
        },

        created() {
            this.$router.push({name: 'original_spare_parts_general'});
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main {
        margin: 0;
        padding: 0;
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
    }

    @media (max-width: 1199.9px) {
        main {
            padding: 0;
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