<template>
    <div class="sub_toBuyers container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-12 linked" >
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/insurance"

                >Тойота Страхування</router-link>
            </div>

            <div class="col-xl-3 col-lg-6 col-12 linked">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/credit"
                >Toyota Кредит</router-link>
            </div>

            <div class="col-xl-3 col-lg-6 col-12 linked">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/general"
                >Корпоративні продажі</router-link>

                <ul>
<!--                    <li class=" linked">-->
<!--                        <router-link-->
<!--                                tag="a"-->
<!--                                exact-->
<!--                                active-class="active"-->
<!--                                to="/business_car"-->
<!--                        >Користувачам службових автомобілів</router-link>-->
<!--                    </li>-->

                    <li class=" linked">
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/business_owner"
                        >Власникам бізнесу</router-link>
                    </li>

                    <li class=" linked">
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_clients"
                        >Корпоративним клієнтам</router-link>
                    </li>
                </ul>

            </div>

            <div class="col-xl-3 col-lg-6 col-12 linked">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
                        <li class="servies linked">
                            <router-link
                                    tag="a"
                                    exact
                                    to="/test_drive_step_1"
                            >
                                <i class="far fa-calendar-alt"></i>
                                <span>Замовити тест-драйв</span>
                            </router-link>
                        </li>
                        <li class="dilers linked">
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/download_brochures"
                            >
                                <i class="far fa-file-alt"></i>
                                <span>Завантажити брошури</span>
                            </router-link>
                        </li>
<!--                        <li class="download linked">-->
<!--                            <router-link-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/faq"-->
<!--                            >-->
<!--                                <i class="fas fa-phone"></i>-->
<!--                                <span>Часті запитання</span>-->
<!--                            </router-link>-->
<!--                        </li>-->

                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixinNavigation from "./../../mixins/mixinNavigation";

    export default {
        name: "SubMenuToBuyers",

        mixins: [
            mixinNavigation
        ],

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .sub_toBuyers.container-fluid {
        width: 100%;
        margin-top: 16px;
        margin-bottom: 60px;
        .row {
            width: 100%;
            padding: 0 50px;
            div {
                a.nav-link {
                    font-size: 1.6rem;
                    color: $font_color;
                    font-weight: bold;
                    display: inline-block;
                    width: 100%;
                    padding: 16px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    margin-bottom: 20px;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                    li {
                        margin-bottom: 10px;
                        a {
                            color: #6c7073;
                            font-size: 1.6rem;
                        }
                    }
                }
            }
            div.tools {
                font-size: 1.6rem;
                color: $font_color;
                padding: 0 15px;

                h2 {
                    font-size: 1.5rem;
                    padding: 16px 0;
                }
                ol {
                    padding: 0;
                    li {
                        border: 1px solid #f0f0f0;
                        background-color: #fff;
                        list-style-type: none;
                        a {
                            display: block;
                            color: $font_color;
                            text-decoration: none;
                            padding: 18px 26px 22px;
                            i {
                                margin-right: 20px;
                                color: #a8aaac;
                            }
                        }
                        &:hover {
                            a i {
                                color: #E50000;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1199.9px) {
        .sub_toBuyers.container-fluid {
            .row {

                div.tools {
                    padding: 0;
                }
            }
        }
    }

</style>