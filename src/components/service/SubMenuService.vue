<template>
    <div class="sub_service container-fluid">
        <div class="row">
            <div class="col-xl-9 col-lg-8 col-12 row">
                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/maintenance"
                    >Технічне обслуговування</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/maintenance/principles"
                            >Принципи</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/maintenance/guarantee"
                            >Гарантія якості сервісу</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/maintenance/lubricants"
                            >Оригінальні мастильні матеріали</router-link>
                        </li>

<!--                        <li>-->
<!--                            <router-link-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/maintenance/calc"-->
<!--                            >Калькулятор вартості технічного обслуговування</router-link>-->
<!--                        </li>-->
                    </ul>
                </div>

                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/original_accessories/accessories_general"
                    >Оригінальні аксесуари</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_accessories/entertainment_system"
                            >Модульна розважальна система</router-link>
                        </li>

<!--                        <li>-->
<!--                            <router-link-->
<!--                                    tag="a"-->
<!--                                    exact-->
<!--                                    active-class="active"-->
<!--                                    to="/original_accessories/toyota_pro_tech"-->
<!--                            >Toyota ProTect</router-link>-->
<!--                        </li>-->

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_accessories/toyota_touch2"
                            >Cистема Toyota Touch 2</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_accessories/baby_car_seats"
                            >Дитячі автомобільні крісла</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/original_spare_parts/original_spare_parts_general"
                    >Оригінальні запчастини</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/choose_original"
                            >Обирай оригінальне!</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/air_filters_of_salon"
                            >Повітряні фільтри салону</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/rechargeable_batteries"
                            >Акумуляторні батареї</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/original_lamps"
                            >Оригінальні лампи</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/wiper_blades"
                            >Щітки склоочисника</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/toyota_ad_blue_liquid"
                            >Рідина Toyota AdBlue™</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/brake_discs_and_pads"
                            >Гальмівні диски та колодки</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/original_windshields"
                            >Оригінальні лобові стекла</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/original_spare_parts/fuel_system_cleaner"
                            >Очисник паливної системи</router-link>
                        </li>
                    </ul>

                </div>

                <div class="col-xl-4 col-md-6 col-12">
                    <a href.prevent="" class="nav-link">Допомога в дорозі</a>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/toyota_assistance"
                            >Toyota Assistance</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/toyota_assistance_plus"
                            >Toyota Assistance Plus</router-link>
                        </li>
                    </ul>

                </div>

            </div>


            <div class="col-xl-3 col-lg-4 col-12">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
                        <li class="servies">
                            <a href="#">
                                <i class="fas fa-car"></i>
                                <span>Конфігуратор</span>
                            </a>
                        </li>
                        <li class="dilers">
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
<!--                        <li class="contact">-->
<!--                            <a href="#">-->
<!--                                <i class="fas fa-car"></i>-->
<!--                                <span>Гібридні іновації</span>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="test_drive">-->
<!--                            <a href="#">-->
<!--                                <i class="fas fa-tag"></i>-->
<!--                                <span>Сувенирна продукція</span>-->
<!--                            </a>-->
<!--                        </li>-->
                        <li class="download">
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/faq"
                            >
                                <i class="fas fa-phone"></i>
                                <span>Часті запитання</span>
                            </router-link>
                        </li>
<!--                        <li class="download">-->
<!--                            <a href="#">-->
<!--                                <i class="fas fa-map-marker-alt"></i>-->
<!--                                <span>Офіційні дилери</span>-->
<!--                            </a>-->
<!--                        </li>-->
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubMenuService"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .sub_service.container-fluid {
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

    @media (min-width: 1200px) and (max-width: 1399.9px) {
        .sub_service.container-fluid {
            margin-bottom: 30px;
            .row {
                padding: 0 0 0 20px;
                justify-content: space-between;
                div:last-child {
                    padding-right: 0;
                    div.tools {
                        padding: 0;
                    }
                }

            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        .sub_service.container-fluid {
            margin-bottom: 30px;
            .row {
                padding: 0 0 0 20px;
                justify-content: space-between;
                div:last-child {
                    padding-right: 0;
                }

            }
        }
    }

    @media (max-width: 991.9px) {
        .sub_service.container-fluid {
            min-width: 100%;
            margin-bottom: 30px;
            .row {
                padding: 0 0 0 20px;
                justify-content: space-between;
                div:last-child {
                    padding-right: 0;
                    .tools {
                        width: 100%;
                        padding: 20px 0 0;
                    }
                }

            }
        }
    }

</style>