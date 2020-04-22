<template>
    <main class="container-fluid">
        <sidebar></sidebar>

        <menu>
                <nav class="navbar navbar-expand-lg navbar-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >
                                    Статті / Новини / Події
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >Олімпійське партнерство</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >TOYOTA GAZOO Racing</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >Toyota на чемпіонаті світу з ралі</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >Історія спорткарів Toyota</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to=""
                                >Toyoda AA</router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </menu>

        <router-view></router-view>

    </main>
</template>

<script>
    import Sidebar from "@/components/permanent/Sidebar";

    export default {
        name: "WorldOfToyota",

        components: {
            Sidebar,
        },

        created() {
            this.$router.push({name: "news"});
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
        menu {
            width: 100%;
            /*padding-left:30px;*/
            position: sticky;
            top: 0;
            z-index: 998;
            left: 0;
            background-color: #fff;
            border-bottom: 1px solid #f0f0f0;
            padding: 5px 10px 5px 50px;
            margin: 0;
            nav.navbar {
                background-color: #fff;
                font-size: 1.5rem;

                .collapse.navbar-collapse {
                    ul.navbar-nav {
                        li.nav-item {
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
    }
</style>