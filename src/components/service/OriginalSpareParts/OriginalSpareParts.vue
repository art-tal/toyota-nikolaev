<template>
    <main class="container-fluid">



        <router-view></router-view>
    </main>
</template>

<script>

    export default {
        name: "OriginalSpareParts",

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