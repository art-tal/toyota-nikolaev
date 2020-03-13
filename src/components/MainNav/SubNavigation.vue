<template>
    <menu>
        <nav class="navbar navbar-expand-lg navbar-dark">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Общий обзор <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Особенности и характеристики</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Цены</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Надежность и гарантия</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Сканфигурировать</a>
                    </li>
                </ul>
            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "SubNavigation"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    menu {
        box-sizing: border-box;
        width: 100%;
        nav.navbar.navbar-expand-lg {
            padding: 0px 150px;
            font-size: 1.3rem;
            background-color: #000;
            .collapse {
                ul {
                    li.nav-item {
                        height: 60px;
                        display: table;
                        box-sizing: border-box;
                        padding: 0 20px;
                        border-bottom: 3px solid #000000;
                        &.active {
                            border-bottom: 3px solid #E50000;
                            font-weight: bold;
                        }
                        &:last-child {
                            border-left: 1px solid #ffffff;
                            text-align: right;
                        }
                        a {
                            display: table-cell;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }

    }

</style>