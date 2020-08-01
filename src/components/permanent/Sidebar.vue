<template>
    <aside>
        <ul>
            <li>
                <router-link to="/faq"
                             exact
                             active-class="active"
                             tag="a"
                >
                    <i class="fas fa-phone"></i>
                    <div>
                        <span>Зв'язатися с нами</span>
                    </div>

                </router-link>
            </li>
            <li>
                <router-link to="/consultation"
                             exact
                             active-class="active"
                             tag="a"
                >
                    <i class="fas fa-car"></i>
                    <div>
                        <span>Замовити онлайн консультацію</span>
                    </div>

                </router-link>
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
            <li>
                <a href="https://www.toyota.ua/service-and-accessories/ssc.json"
                   target="_blank"
                >
                    <i class="far fa-user"></i>
                    <div>
                        <span>Моя Toyota</span>
                    </div>

                </a>
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
                        opacity: 0;
                        span {
                            display: inline-block;
                            background-color: #f0f0f0;
                            color: #6c7073;
                            width: auto;
                            height: 100%;
                            padding: 10px 20px;
                            font-size: 1.3rem;
                            white-space: nowrap;
                            border-radius: 20px;
                        }
                    }

                    &:hover {
                        i {
                            color: #E50000;
                        }
                        div {
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