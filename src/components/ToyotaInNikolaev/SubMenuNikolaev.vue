<template>
    <div class="sub_nikolaev container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to=""
                >Клієнтська служба</router-link>

                <ul>
                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >Про службу</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >Премія Toyota Ichiban</router-link>
                    </li>
                </ul>
            </div>

            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to=""
                >ПІІ «Тойота-Миколаїв»</router-link>

                <ul>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/cars_available"
                        >Авто в наявносі</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >Корпоративна відповідальність</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >Зв’язатись з нами</router-link>
                    </li>
                </ul>
            </div>

            <div class="col-xl-3 col-lg-6 col-12">
                <router-link
                        exact
                        tag="a"
                        class="nav-link"
                        active-class="active"
                        to="/corporate_sales/general"
                >Робота в Toyota</router-link>

                <ul>
                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/business_car"
                        >Кар'єра «Тойота-Україна»</router-link>
                    </li>

                    <li>
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/corporate_sales/business_owner"
                        >Кар’єрні можливості</router-link>
                    </li>
                </ul>

            </div>

            <div class="col-xl-3 col-lg-6 col-12">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
                        <li class="download">
                            <a href="#">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Офіційні дилери</span>
                            </a>
                        </li>

                        <li class="dilers">
                            <a href="#">
                                <i class="fas fa-car-side"></i>
                                <span>Автомобілі з пробігом</span>
                            </a>
                        </li>

                        <li class="servies">
                            <a href="#">
                                <i class="fas fa-car"></i>
                                <span>Замовити тест-драйв</span>
                            </a>
                        </li>

                        <li class="download">
                            <a href="#">
                                <i class="fas fa-phone"></i>
                                <span>Зв’язатись з нами</span>
                            </a>
                        </li>

                        <li class="contact">
                            <a href="#">
                                <i class="fas fa-key"></i>
                                <span>Гібридні іновації</span>
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
        name: "SubMenuNikolaev"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .sub_nikolaev.container-fluid {
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
        .sub_nikolaev.container-fluid {
            .row {

                div.tools {
                    padding: 0;
                }
            }
        }
    }

</style>