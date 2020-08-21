<template>
    <aside>
        <ul>
            <li>
                <router-link to="/consultation"
                             exact
                             active-class="active"
                             tag="a"
                >
                    <i class="fas fa-car"></i>
                    <div>
                        <span>Замовити тест-драйв</span>
                    </div>

                </router-link>
            </li>
            <li>
                <router-link to="/lineup"
                             exact
                             active-class="active"
                             tag="a"
                >
                    <i class="fas fa-car-side"></i>
                    <div>
                        <span>Модельний ряд</span>
                    </div>

                </router-link>
            </li>
            <li>
                <a
                        class="nav-link"
                        href="https://www.toyota.ua/index.json#myToyota"
                        target="_blank"
                >
                    <i class="far fa-user"></i>
                    <div><span>Моя Toyota</span></div>
                </a>
            </li>
            <li>
                <a href="https://www.toyota.ua/service-and-accessories/ssc" class="nav-link" target="_blank">
                    <i class="fas fa-oil-can"></i>
                    <div><span>Спеціальні сервісні кампанії</span></div>
                </a>
            </li>
            <li>
                <a href="https://www.toyota.ua/service-and-accessories/tekhnichne-obslugovuvannya" class="nav-link" target="_blank">
                    <i class="fas fa-calculator"></i>
                    <div><span>Калькулятор ТО</span></div>
                </a>
            </li>
            <li>
                <router-link to="/download_brochures"
                             exact
                             active-class="active"
                             tag="a"
                >
                    <i class="far fa-file-alt"></i>
                    <div>
                        <span>Завантажити брошури</span>
                    </div>

                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    aside {
        width: 58px;
        border-radius: 29px;
        position: fixed;
        z-index: 999;
        top: 25vh;
        right: 5px;
        background-color: #f0f0f0;
        ul {
            margin: 0;
            padding: 0;
            width: 100%;
            list-style-type: none;
            li {
                width: 100%;
                padding: 15px 5px 0;
                a {
                    display: inline-block;
                    position: relative;
                    padding: 15px 0;
                    text-align: center;
                    i {
                        color: #a8aaac;
                        font-size: 2.2rem;
                    }
                    div {
                        position: absolute;
                        z-index: 998;
                        top: 0;
                        right: 0;
                        width: 50px;
                        height: 40px;
                        margin: 7px 0;
                        /*padding-right: 75px;*/
                        opacity: 0;
                        span {
                            display: inline-block;
                            background-color: #f0f0f0;
                            color: #6c7073;
                            width: auto;
                            height: 100%;
                            padding: 10px 20px;
                            /*vertical-align: middle;*/
                            font-size: 1.3rem;
                            white-space: nowrap;
                            border-radius: 20px;
                            /*display: none;*/
                        }
                    }

                    &:hover {
                        i {
                            color: #E50000;
                        }
                        div {
                            /*display: table;*/
                            opacity: 1;
                            padding-right: 75px;
                            width: auto;
                            transition-property: width, padding-right, opacity;
                            transition-duration: 1s;
                            transition-delay: 300ms;
                        }
                    }

                }
                &:last-child {
                    padding-bottom: 15px;
                }
            }
        }
    }

    @media (max-width: 991.9px) {
        aside {
            display: none;
        }
    }

</style>