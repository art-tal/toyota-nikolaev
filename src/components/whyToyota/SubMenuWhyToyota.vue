<template>
    <div class="sub_why_toyota container-fluid">
        <div class="row">
            <div class="col-xl-9 col-lg-8 col-12 row">
                <div class="col-xl-4 col-md-6 col-12">
                    <a href="" class="nav-link" @click.prevent="">Світ «Тойоти»</a>
<!--                    <router-link-->
<!--                            exact-->
<!--                            tag="a"-->
<!--                            class="nav-link"-->
<!--                            active-class="active"-->
<!--                            to="/world_of_toyota"-->
<!--                    >Світ «Тойоти»</router-link>-->

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/news"
                            >Статті / Новини / Події</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/olympic_partnership"
                            >Олімпійське партнерство</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/toyota_gazoo_racing"
                            >TOYOTA GAZOO Racing</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/toyota_at_rally"
                            >Toyota на чемпіонаті світу з ралі</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/history_of_toyota_sports_cars"
                            >Історія спорткарів Toyota</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/world_of_toyota/toyoda_aa"
                            >Toyoda AA</router-link>
                        </li>
                    </ul>
                </div>





                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/quality_guarantee"
                    >Гарантія якості</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/warranty_service"
                            >Гарантійнe обслуговування</router-link>
                        </li>

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

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/clients_charter"
                            >Хартія Клієнтів</router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/hybrid_innovations"
                    >Гібридні інновації</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/business_car"
                            >Що таке гібрид?</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/business_owner"
                            >Переваги гібридних авто</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/corporate_clients"
                            >Часті запитання</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/hybrid_drive"
                            >Hybrid Drive</router-link>
                        </li>
                    </ul>

                </div>

                <div class="col-xl-4 col-md-6 col-12">
                    <router-link
                            exact
                            tag="a"
                            class="nav-link"
                            active-class="active"
                            to="/corporate_sales"
                    >Турбота про навколишнє середовище</router-link>

                    <ul>
                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/business_car"
                            >Екологічна місія для кращого майбутнього</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/business_owner"
                            >Краще повітря</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/corporate_clients"
                            >Краща планета</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/special_solutions"
                            >Краще життя</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/special_solutions"
                            >Просто краще</router-link>
                        </li>

                        <li>
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/corporate_sales/special_solutions"
                            >ISO 14001</router-link>
                        </li>

                    </ul>

                </div>

            </div>


            <div class="col-xl-3 col-lg-4 col-12">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
<!--                        <li class="download">-->
<!--                            <a href="#">-->
<!--                                <i class="fas fa-map-marker-alt"></i>-->
<!--                                <span>Офіційні дилери</span>-->
<!--                            </a>-->
<!--                        </li>-->

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

                        <li class="contact">
                            <router-link
                                    tag="a"
                                    exact
                                    to="/credit"
                            >
                                <i class="fas fa-euro-sign"></i>
                                <span>Тойота Кредит</span>
                            </router-link>
                        </li>

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
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubMenuWhyToyota"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .sub_why_toyota.container-fluid {
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
        .sub_why_toyota.container-fluid {
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
        .sub_why_toyota.container-fluid {
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
        .sub_why_toyota.container-fluid {
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