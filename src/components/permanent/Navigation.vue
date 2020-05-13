<template>
    <header class="container-fluid">
        <div class="row">

            <nav class="col-xl-7 col-lg-12 navbar navbar-expand-xl navbar-light">
                <router-link
                        class="navbar-brand"
                        tag="a"
                        exact
                        active-class="active"
                        to="/"
                >

                    <span class="sr-only">(current)</span>
                </router-link>

<!--                    <a class="navbar-brand" href="#"></a>-->
                    <button class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href.prevent="#"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <span>Автомобілі</span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <lineup></lineup>
                                </div>

                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href.prevent="#"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <span>Покупцям</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <sub-menu-to-buyers></sub-menu-to-buyers>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href.prevent=""
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <span>Сервіс</span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <sub-menu-service></sub-menu-service>
                                </div>
                            </li>

<!--                            <li class="nav-item">-->
<!--                                <router-link-->
<!--                                        class="nav-link"-->
<!--                                        tag="a"-->
<!--                                        exact-->
<!--                                        to="/souvenir_products"-->
<!--                                >-->
<!--                                    <span>Сувенірна продукція</span>-->
<!--                                </router-link>-->
<!--                            </li>-->

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href.prevent=""
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <span>Чому Toyota?</span>
                                </a>


                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <sub-menu-why-toyota></sub-menu-why-toyota>
                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle"
                                   href.prevent=""
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <span>Toyota в Миколаєві</span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <sub-menu-nikolaev></sub-menu-nikolaev>
                                </div>
                            </li>
<!--                            <li class="nav-item">-->
<!--                                <router-link-->
<!--                                        class="nav-link"-->
<!--                                        tag="a"-->
<!--                                        exact-->
<!--                                        active-class="active"-->
<!--                                        to="/mobility_for_everyone"-->
<!--                                >-->
<!--                                    <span>Мобильность для всех</span>-->
<!--                                </router-link>-->
<!--                            </li>-->
                        </ul>
<!--                        <form class="form-inline my-2 my-lg-0">-->
<!--                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
<!--                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
<!--                        </form>-->
                    </div>
                </nav>



            <div class="dealers col-xl-5 col-lg-4 col-md-1">
                <ul class="navbar-nav mr-auto text-right">
                    <li class="nav-item active ">
                        <router-link
                                class="nav-link"
                                tag="a"
                                exact
                                active-class="active"
                                to="/"
                        >
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Офіційні ділери</span>
                            <span class="sr-only">(current)</span>
                        </router-link>

                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >
                            <i class="fas fa-search"></i>
                            <span>Пошукна сайті Toyota.nikolaev.ua</span>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link
                                class="nav-link"
                                tag="a"
                                exact
                                active-class="active"
                                to=""
                        >
                            <i class="far fa-user"></i>
                            <span>Моя Toyota</span>
                        </router-link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button class="btn btn-dark">Увійти</button>
                            <a class="dropdown-item" href="#">Мої конфігурації</a>
                            <a class="dropdown-item" href="#">Мої дилери</a>
                            <a class="dropdown-item" href="#">Особистий кабінет</a>
                            <a class="dropdown-item" href="#">Мої автомобілі</a>
                            <a class="dropdown-item" href="#">Посібники користувача</a>
                            <a class="dropdown-item" href="#">Планувальник подорожей</a>
                        </div>
                    </li>

                </ul>
            </div>

        </div>


    </header>
</template>

<script>
    // import Lineup from "../cars/Lineup";
    // import SubMenuToBuyers from "../toBuyers/SubMenuToBuyers";
    // import SubMenuService from "../service/SubMenuService";
    // import SubMenuWhyToyota from "../whyToyota/SubMenuWhyToyota";
    // import SubMenuNikolaev from "../ToyotaInNikolaev/SubMenuNikolaev";


    import Lineup from "../cars/Lineup";//                                       for Laravel
    import SubMenuToBuyers from "./../../components/toBuyers/SubMenuToBuyers";//                      for Laravel
    import SubMenuService from "./../../components/service/SubMenuService";//                          for Laravel
    import SubMenuWhyToyota from "./../../components/whyToyota/SubMenuWhyToyota";//                     for Laravel
    import SubMenuNikolaev from "./../../components/ToyotaInNikolaev/SubMenuNikolaev";//         for Laravel

    export default {
        name: "Navigation",

        components: {
            Lineup,
            SubMenuToBuyers,
            SubMenuService,
            SubMenuWhyToyota,
            SubMenuNikolaev,
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    header {
        position: relative;
        /*position: sticky;*/
        box-sizing: border-box;
        z-index: 999;
        top: 0;
        left: 0;
        height: 70px;
        font-size: 1.4rem;
        color: $font_color;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        .row {
            padding: 0;
            margin: 0;
            height: 100%;
            nav.navbar {
                padding: 0;
                height: 100%;
                .collapse.navbar-collapse {
                    height: 100%;
                    ul {
                        height: 100%;
                        li.nav-item {
                            height: 100%;
                            box-sizing: border-box;
                            display: table;
                            position: static;
                            a.nav-link {
                                display: table-cell;
                                vertical-align: middle;
                                height: 100%;
                                color: $font_color;
                                padding: 0 20px;
                                &.dropdown-toggle::after {
                                    content: none;
                                }
                                &.active {
                                    border-top: 5px solid #E50000;
                                }
                                &:hover {
                                    background-color: #E50000;
                                    color: #fff;
                                    cursor: pointer;
                                }
                            }
                            .dropdown-menu {
                                box-sizing: border-box;
                                width: 100vw;
                                /*left: 0;*/
                                margin: 0 -15px;
                                background-color: #f0f0f0;
                                /*overflow-y: scroll !important;*/
                            }

                        }
                    }
                }
            }

            .dealers {
                width: 100%;
                height: 100%;
                ul {
                    width: 100%;
                    height: 100%;
                    li {
                        display: table;
                        height: 100%;
                        margin-left: 25px;
                        a {
                            display: table-cell;
                            vertical-align: middle;
                            color: $font_color;
                            i {
                                margin-right: 5px;
                                color: $font_color;
                            }
                        }
                        &:hover {
                            a {
                                color: #E50000;
                            }
                        }
                        &.active {
                            a i {
                                color: #E50000;
                            }
                        }


                    }
                }
            }

        }
    }


    @media (min-width: 1200px) and (max-width: 1439.9px) {
        header {
            .row {

                .dealers {
                    ul {
                        li {
                            a {
                                i {
                                    margin-right: 5px;
                                }
                                span {
                                    display: none;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        header {
            .row {
                nav.navbar {
                    .collapse {
                        height: auto;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        z-index: 1000;
                        ul {
                            position: absolute;
                            width: 100%;
                            height: auto;
                            display: block;
                            li.nav-item {
                                position: relative;
                                z-index: 5;
                                background-color: #f0f0f0;
                                width: 100%;
                                height: auto;
                                border: 1px solid #cccccc;
                                a.nav-link {
                                    display: block !important;
                                    width: 100% !important;
                                    height: auto !important;
                                    padding: 24px 0 !important;
                                    &.active {
                                        background-color: #E50000;
                                        color: #fff;
                                    }
                                }

                                .dropdown-menu {
                                    position: static;
                                    width: 100% !important;
                                    max-width: 100%;
                                    margin: 0 !important;
                                    border: 1px solid #cccccc;
                                    border-top: none;
                                }

                            }
                        }
                    }
                }

                .dealers {
                    height: 70px;
                    position: absolute;
                    right: 100px;
                    top: 0;
                    ul {
                        li {
                            a {
                                i {
                                    margin-right: 5px;
                                }
                                span {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        header {
            .row {
                nav.navbar {
                    button.navbar-toggler {

                    }
                    .collapse {
                        height: auto;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        z-index: 1000;
                        border: 1px solid #cccccc;
                        ul {
                            position: absolute;
                            width: 100%;
                            height: 50px;
                            display: block;
                            li {
                                position: relative;
                                z-index: 5;
                                background-color: #f0f0f0;
                                width: 100%;
                                height: auto;
                                border-bottom: 1px solid #cccccc;
                                .nav-link {
                                    display: block !important;
                                    width: 100% !important;
                                    height: auto !important;
                                    padding: 24px 0 !important;
                                    &.active {
                                        background-color: #E50000;
                                        color: #fff;
                                    }
                                }

                                .dropdown-menu {
                                    position: static;
                                    width: 100% !important;
                                    max-width: 100%;
                                    margin: 0 !important;
                                }

                            }
                        }
                    }
                }

                .dealers {
                    height: 70px;
                    position: absolute;
                    right: 100px;
                    top: 0;
                    ul {
                        li {
                            a {
                                i {
                                    margin-right: 5px;
                                }
                                span {
                                    display: none;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    @media (max-width: 767.9px) {
        header {
            .row {
                nav.navbar {
                    button.navbar-toggler {

                    }
                    .collapse {
                        height: auto;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        z-index: 1000;
                        border: 1px solid #cccccc;
                        ul {
                            position: absolute;
                            width: 100%;
                            height: 50px;
                            display: block;
                            li {
                                position: relative;
                                z-index: 5;
                                background-color: #f0f0f0;
                                width: 100%;
                                height: auto;
                                border-bottom: 1px solid #cccccc;
                                .nav-link {
                                    display: block !important;
                                    width: 100% !important;
                                    height: auto !important;
                                    padding: 24px 0 !important;
                                    &.active {
                                        background-color: #E50000;
                                        color: #fff;
                                    }
                                }

                                .dropdown-menu {
                                    position: static;
                                    width: 100% !important;
                                    max-width: 100%;
                                    margin: 0 !important;
                                }

                            }
                        }
                    }
                }

                .dealers {
                    height: 70px;
                    position: absolute;
                    right: 100px;
                    top: 0;
                    ul {
                        li {
                            a {
                                i {
                                    margin-right: 5px;
                                }
                                span {
                                    display: none;
                                }
                            }
                        }
                    }
                }

            }
        }
    }




</style>
<style scoped>

    .container-fluid {
        /*padding: 0;*/
    }

    .navbar-nav {
        flex-direction: row;
        justify-content: flex-end;
    }

    .row {
        padding: 0;
    }

    .col-5 {
        padding: 0;
    }

    .navbar-brand {
        margin-left: 1vw;
        margin-right: 0.5vw;
        display: inline-block;
        height: 100%;
        min-width: 84px;
        background-image: url(../../img/logo-toyota-sm.png);
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: 70%;
        background-size: 70%;
    }
</style>