<template>
    <header class="container-fluid">
        <div class="row">

            <nav class="col-xl-7 col-lg-8 col-md-12 navbar navbar-expand-lg navbar-light">
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
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/lineup"
                                >
                                    <span>Модельный ряд</span>
                                    <span class="sr-only">(current)</span>
                                </router-link>

                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href="#" id="navbarDropdown"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">

<!--                                <router-link-->
<!--                                        class="nav-link"-->
<!--                                        tag="a"-->
<!--                                        exact-->
<!--                                        active-class="active"-->
<!--                                        to="/to_buyers"-->
<!--                                >-->
                                    <span>Покупателям</span>
<!--                                </router-link>-->
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <sub-menu-to-buyers></sub-menu-to-buyers>
<!--                                    <a class="dropdown-item" href="#">Action</a>-->
<!--                                    <a class="dropdown-item" href="#">Another action</a>-->
<!--                                    <div class="dropdown-divider"></div>-->
<!--                                    <a class="dropdown-item" href="#">Something else here</a>-->
                                </div>

                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/to_the_owners"
                                >
                                    <span>Владельцам</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/souvenir_products"
                                >
                                    <span>Сувенирная продукция</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/why_toyota"
                                >
                                    <span>Почему Toyota?</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/toyota_in_nikolaev"
                                >
                                    <span>Toyota в Николаеве</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/mobility_for_everyone"
                                >
                                    <span>Мобильность для всех</span>
                                </router-link>
                            </li>
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
                                class="nav-link active"
                                tag="a"
                                exact
                                active-class="active"
                                to="/"
                        >
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Официальные диллеры</span>
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
                            <span>Поиск на сайте Toyota.ua</span>
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
                            <button class="btn btn-dark">Войти</button>
                            <a class="dropdown-item" href="#">Мои конфигурации</a>
                            <a class="dropdown-item" href="#">Мои диллеры</a>
                            <a class="dropdown-item" href="#">Личный кабинет</a>
                            <a class="dropdown-item" href="#">Мои автомобили</a>
                            <a class="dropdown-item" href="#">Пособие пользователя</a>
                            <a class="dropdown-item" href="#">Планировщик путешествий</a>
                        </div>
                    </li>

                </ul>
            </div>

        </div>


    </header>
</template>

<script>
    import SubMenuToBuyers from "@/components/toBuyers/SubMenuToBuyers";

    export default {
        name: "Navigation",

        components: {
            SubMenuToBuyers,
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    header {
        height: 70px;
        font-size: 1.4rem;
        color: $font_color;
        border-bottom: 1px solid #f0f0f0;
        .row {
            padding: 0;
            margin: 0;
            height: 100%;
            nav.navbar {
                padding: 0;
                height: 100%;
                .collapse {
                    height: 100%;
                    ul {
                        height: 100%;
                        li.nav-item {
                            height: 100%;
                            box-sizing: border-box;
                            display: table;
                            position: static;
                            .nav-link {
                                display: table-cell;
                                vertical-align: middle;
                                height: 100%;
                                color: $font_color;
                                padding: 0 20px;
                                &.active {
                                    border-top: 5px solid #E50000;
                                }
                                &:hover {
                                    background-color: #E50000;
                                    color: #fff;
                                }
                            }
                            .dropdown-menu {
                                width: 100vw;
                                left: 0;
                                margin: 0 -15px;
                                background-color: #f0f0f0;
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
                        ul {
                            li {
                                .nav-link {
                                    padding: 0 10px;
                                }

                            }
                        }
                    }


                }

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

    @media (min-width: 768px) and (max-width: 991.9px) {
        header {
            .row {
                nav.navbar {
                    .collapse {
                        ul {
                            position: absolute;
                            width: 100%;
                            height: 50px;
                            display: block;
                            li {
                                position: relative;
                                z-index: 5;
                                background-color: #fff;
                                width: 100%;
                                .nav-link {
                                    &.active {
                                        background-color: #E50000;
                                        color: #fff;
                                    }
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
            min-width: 350px;
            .row {
                nav.navbar {
                    .collapse {
                        ul {
                            height: 50px;
                            display: block;
                            li {
                                position: relative;
                                z-index: 5;
                                background-color: #fff;
                                width: 100%;
                                .nav-link {
                                    &.active {
                                        background-color: #E50000;
                                        color: #fff;
                                    }
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