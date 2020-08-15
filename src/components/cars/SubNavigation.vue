<template>
    <menu>
        <nav class="sub_navigation navbar navbar-expand navbar-dark">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link
                            class="nav-item"
                            tag="li"
                            exact
                            active-class="active"
                            :to="'/models/' + this.getSlug"
                    >
<!--                        :to="'/select_model/' + this.getID"-->
                        <a class="nav-link">Загальний огляд <span class="sr-only">(current)</span></a>
                    </router-link>

                    <router-link
                            class="nav-item"
                            tag="li"
                            exact
                            active-class="active"
                            :to="'/engines_and_characteristics/' + this.getSlug"
                    >
<!--                        :to="'/engines_and_characteristics/' + this.getID"-->
                        <a class="nav-link" href="#">Двигуни та характеристики</a>
                    </router-link>

<!--                    <router-link-->
<!--                            class="nav-item"-->
<!--                            tag="li"-->
<!--                            exact-->
<!--                            active-class="active"-->
<!--                            :to="'/prices/' + this.getID"-->
<!--                    >-->
<!--                        <a class="nav-link" href="#">Ціни</a>-->
<!--                    </router-link>-->

                    <router-link
                            class="nav-item"
                            tag="li"
                            exact
                            active-class="active"
                            :to="'/reliability_and_guarantee/' + this.getSlug"
                    >
                        <a class="nav-link" href="#">Надійність та гарантія</a>
                    </router-link>

                    <router-link
                            class="config nav-item"
                            tag="li"
                            exact
                            active-class="active"
                            to="/configurator/selected_engine"
                    >
                        <a class="nav-link" href="#">Сконфігурувати</a>
                    </router-link>


                </ul>

            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "SubNavigation",

        data() {
            return {
                id: 0,
            }
        },

        created() {
            this.id = this.$route.params.id;
        },

        computed: {
            getID() {
                if(this.$route.params.id) {
                    return this.$route.params.id;
                } else if( this.$store.getters.getModelId) {
                    return this.$store.getters.getModelId;
                } else {
                    return localStorage.id;
                }
            },

            getSlug() {
                if(this.$route.params.slug) {
                    return this.$route.params.slug;
                } else if( this.$store.getters.getModel.slug) {
                    return JSON.parse(this.$store.getters.getModel).slug ;
                } else {
                    return localStorage.modelSlug;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    menu {
        box-sizing: border-box;
        width: 100%;
        nav.navbar {
            padding: 0 150px;
            font-size: 1.3rem;
            .collapse {
                ul {
                    flex-grow: 1;
                    li.nav-item {
                        height: 60px;
                        display: table;
                        box-sizing: border-box;
                        padding: 0 20px;
                        border-bottom: 3px solid #000000;
                        &.active {
                            border-bottom: 3px solid #E50000;
                            font-weight: bold;
                        }

                        a {
                            display: table-cell;
                            vertical-align: middle;
                        }
                    }

                    li.config.nav-item {
                        padding: 0 20px;
                        flex-grow: 1;
                        text-align: right;
                        a.nav-link {
                            width: 200px;
                            color: rgba(255,255,255,0.5);
                            &:hover {
                                text-decoration: none;
                                color: rgba(255,255,255,0.8);
                            }
                        }
                    }
                }

            }
        }

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        menu {
            nav.navbar {
                padding: 0px;

            }

        }
    }

    @media (min-width: 575.9px) and (max-width: 767.9px) {
        menu {
            nav.navbar {
                padding: 0;
                .collapse {
                    ul {
                        li.nav-item {
                            padding: 0 10px;
                        }
                    }
                    .config {
                        padding: 0 5px;

                    }
                }
            }

        }
    }

    @media (max-width: 576px) {
        menu {
            nav.navbar {
                padding: 0;
                font-size: 2.4vw;
                .collapse {
                    ul {
                        li.nav-item {
                            padding: 0 5px;
                        }

                    }
                    .config.nav-item {
                        padding: 0 5px;

                    }
                }
            }

        }
    }

</style>

<style>
    .sub_navigation {
        background-color: #000;
    }
</style>