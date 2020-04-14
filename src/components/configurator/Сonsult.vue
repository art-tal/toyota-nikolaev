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

<!--                            <router-link-->
<!--                                    class="nav-link ml-2 mr-2"-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/configurator/consultation/step_3"-->
<!--                            >-->
<!--                                <b class="font-weight-bold align-middle">3</b>-->
<!--                                <span>Шаг 3</span>-->
<!--                                &lt;!&ndash;                        <span class="sr-only">(current)</span>&ndash;&gt;-->
<!--                            </router-link>-->
                        </div>
                    </div>
                </nav>
                <i class="fas fa-times col-1" @click="closeConsult()"></i>
            </menu>

            <header class="text-left">
                <h1>Заказать онлайн консультацию</h1>
            </header>

            <router-view></router-view>

        </div>
    </section>
</template>

<script>
    // import {eventEmitter} from "@/main";

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
                // eventEmitter.$emit('close');
                this.$store.state.openConsultation = !this.$store.state.openConsultation;
                console.log("click");
                console.log(this.$store.state.openConsultation);
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
            overflow: auto;
            top: 50px;
            padding: 0 0 30px 0;
            bottom: 50px;
            margin-top: 50px;
            background-color: #fff;
            menu.row {
                width: 100%;
                padding: 0;
                margin: 10px 0;
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
        header {
            margin-bottom: 40px;
            margin-top: 36px;
            padding: 0 15px;
            h1 {
                font-size: 4.4rem;
            }
        }
    }

    @media ( min-width: 576px ) and (max-width: 767.9px) {
        section.consultation{
            height: 100%;
            .container {
                position: absolute;
                overflow: auto;
                top: 25px;
                left: 25px;
                right: 25px;
                bottom: 25px;
                margin-top: 0;
                background-color: #fff;


            }
        }
    }

    @media ( max-width: 575.9px ) {
        section.consultation{
            width: 100%;
            min-width: 400px;
            height: 100%;
            .container {
                position: absolute;
                overflow: scroll;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin-top: 0;
                background-color: #fff;
                menu {

                    nav {

                        div.collapse {

                            a {
                                span {
                                    display: none;
                                }
                            }
                        }
                    }

                }

                header {
                    h1 {
                        font-size: 3rem;
                    }
                }

            }
        }
    }

</style>