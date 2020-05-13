<template>
    <main class="container-fluid">
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
                                        to="/world_of_toyota/news"
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
                                        to="/world_of_toyota/olympic_partnership"
                                >Олімпійське партнерство</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to="/world_of_toyota/toyota_gazoo_racing"
                                >TOYOTA GAZOO Racing</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to="/world_of_toyota/toyota_at_rally"
                                >Toyota на чемпіонаті світу з ралі</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to="/world_of_toyota/history_of_toyota_sports_cars"
                                >Історія спорткарів Toyota</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        tag="a"
                                        exact
                                        to="/world_of_toyota/toyoda_aa"
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
    import Sidebar from "../../permanent/Sidebar";

    export default {
        name: "WorldOfToyota",

        components: {
            Sidebar,
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Новини, статті, звіти про події | Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Новини, статті, звіти про події | Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Відкрийте для себе світ Тойоти, дізнайтесь всі останні новини та події, майбутні презентації  автомобілів, а також оновлення про TOYOTA GAZOO Racing.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Відкрийте для себе світ Тойоти, дізнайтесь всі останні новини та події, майбутні презентації  автомобілів, а також оновлення про TOYOTA GAZOO Racing.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota, Дізнайтеся про те, що відбувається у світі «Тойоти»: новини, статті, огляди в пресі тощо.`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota, Дізнайтеся про те, що відбувається у світі «Тойоти»: новини, статті, огляди в пресі тощо.`
                    },
                ],
            }
        },

        created() {
            // this.$router.push({name: "news"});
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

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

    @media (max-width: 991.9px) {
        main.container-fluid {
            menu {
                background-color: #f0f0f0;
                padding: 0;
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
    }
</style>