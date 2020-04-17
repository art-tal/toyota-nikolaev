<template>
    <div class="sub_toBuyers container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/insurance"
                >Тойота Страхування</router-link>
            </div>

            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/credit"
                >Toyota Кредит</router-link>
            </div>

            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/corporate_sales"
                >Корпоративні продажі</router-link>

                <ul>
                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/business_car"
                        >Користувачам службових автомобілів</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/business_owner"
                        >Власникам бізнесу</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/corporate_clients"
                        >Корпоративним клієнтам</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/special_solutions"
                        >Спеціальні фінансові рішення</router-link>
                    </li>
                </ul>

            </div>

            <div class="col-xl-3 col-lg-6 col-12">
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
                            <a href="#">
                                <i class="far fa-file-alt"></i>
                                <span>Завантажити брошури</span>
                            </a>
                        </li>
                        <li class="contact">
                            <a href="#">
                                <i class="fas fa-car"></i>
                                <span>Гібридні іновації</span>
                            </a>
                        </li>
                        <li class="test_drive">
                            <a href="#">
                                <i class="fas fa-tag"></i>
                                <span>Сувенирна продукція</span>
                            </a>
                        </li>
                        <li class="download">
                            <a href="#">
                                <i class="fas fa-phone"></i>
                                <span>Зв’язатись з нами</span>
                            </a>
                        </li>
                        <li class="download">
                            <a href="#">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Офіційні дилери</span>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubMenuToBuyers"
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