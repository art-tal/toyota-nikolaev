<template>
    <main>



        <router-view></router-view>
    </main>
</template>

<script>

    export default {
        name: "OriginalAccessories",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Оригінальні аксесуари`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Оригінальні аксесуари`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Брошури та каталоги по автомобілям Тойота.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Тут ви можете завантажити брошури та каталоги оригінальних аксесуарів для автомобілів Тойота`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота, україна, брошура, оригінальні аксесуари, аксесуари, модельний ряд, гібридний авто, яріс, ауріс, ауріс гібрид, ауріс універсал, королла, авенсіс, камрі, рав4, хайлендер, лендкрузер, ленд крузер, прадо, лендкрузер рпадо, лендкрузер 200, хайлакс, рав4 гібрид, yaris, auris, auris hybrid, auris touring sport, corolla, avensis, camry, rav4, rav4 hybrid, highlander, land cruiser, land cruiser prado, land cruiser 200, hilux, toyota,`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота, україна, брошура, оригінальні аксесуари, аксесуари, модельний ряд, гібридний авто, яріс, ауріс, ауріс гібрид, ауріс універсал, королла, авенсіс, камрі, рав4, хайлендер, лендкрузер, ленд крузер, прадо, лендкрузер рпадо, лендкрузер 200, хайлакс, рав4 гібрид, yaris, auris, auris hybrid, auris touring sport, corolla, avensis, camry, rav4, rav4 hybrid, highlander, land cruiser, land cruiser prado, land cruiser 200, hilux, toyota,`
                    },
                ],
            }
        },

        created() {
            this.$router.push({name: 'accessories_general'});
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>

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