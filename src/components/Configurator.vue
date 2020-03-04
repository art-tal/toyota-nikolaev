<template>
    <section class="configurator">

        <nav class="navbar navbar-expand-lg navbar-light">

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/selected_engine"
                    >
                        <b class="font-weight-bold align-middle">1</b>
                        <span>Комплектация и двигатель</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/color_and_option"
                    >
                        <b class="font-weight-bold align-middle">2</b>
                        <span>Цвет и коплектация</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>

                    <router-link
                            class="nav-link ml-2 mr-2"
                            tag="a"
                            exact
                            active-class="active"
                            to="/configurator/result"
                    >
                        <b class="font-weight-bold align-middle">3</b>
                        <span>Итог</span>
<!--                        <span class="sr-only">(current)</span>-->
                    </router-link>
                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: "Configurator"
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .configurator {
        width: 100%;
        height: 56px;
        border-bottom: $border;
            nav {
                color: $font_color;
                /*height: 100%;*/
                div.collapse {
                    /*height: 100%;*/
                    align-content: center;
                    a {
                        /*height: 100%;*/
                        /*padding: 5px 25px;*/
                        /*display: inline-block;*/
                        color: $font_color;
                        /*vertical-align: middle;*/
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


    }
</style>