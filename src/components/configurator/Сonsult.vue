<template>
    <section class="consultation">
        <div class="container">
            <menu class="row">
                <nav class="col-11 navbar navbar-expand navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div class="navbar-nav">

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/consultation/step_1"
                            >
                                <b class="font-weight-bold align-middle">1</b>
                                <span>Шаг 1</span>
                            </router-link>

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/consultation/step_2"
                            >
                                <b class="font-weight-bold align-middle">2</b>
                                <span>Шаг 2</span>
                                <!--                        <span class="sr-only">(current)</span>-->
                            </router-link>

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/consultation/step_3"
                            >
                                <b class="font-weight-bold align-middle">3</b>
                                <span>Шаг 3</span>
                                <!--                        <span class="sr-only">(current)</span>-->
                            </router-link>
                        </div>
                    </div>
                </nav>
                <i class="fas fa-times col-1" @click="closeConsult()"></i>
            </menu>

            <router-view></router-view>

        </div>
    </section>
</template>

<script>
    import {eventEmitter} from "@/main";

    export default {
        name: "Сonsultation",

        data() {
            return {

            }
            },

        created() {
            this.$router.push({name: 'step_1'});
        },

        methods: {
            closeConsult() {
                eventEmitter.$emit('close');
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section.consultation{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
        .container {
            margin-top: 50px;
            background-color: #fff;
            menu {
                width: 100%;
                border-bottom: 1px solid #F0F0F0;
                nav {
                    position: sticky;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    z-index: 999;
                    color: $font_color;
                    div.collapse {
                        align-content: center;
                        a {
                            color: $font_color;
                            font-size: 15px;
                            b {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background-color: #F0F0F0;
                                display: inline-block;
                                margin-right: 10px;
                                padding-top: 4px;
                            }
                            &.active {
                                font-weight: bold;
                                b {
                                    background-color: #E50000;
                                    color: #fff;
                                    font-weight: 300;
                                }
                            }
                        }
                    }
                }
                i {
                    font-size: 2rem;
                    align-self: center;
                }
            }

        }
    }

</style>