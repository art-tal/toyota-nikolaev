<template>
    <nav class="col-11 navbar navbar-expand navbar-light">
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div class="navbar-nav">

                <router-link
                        class="nav-link ml-2 mr-2"
                        tag="a"
                        exact
                        active-class="active"
                        to="/test_drive_step_1"
                >
                    <b class="font-weight-bold align-middle">1</b>
                    <span>Крок 1</span>
                </router-link>

                <router-link
                        class="nav-link ml-2 mr-2"
                        tag="a"
                        exact
                        active-class="active"
                        to="/test_drive_step_2"
                >
                    <b class="font-weight-bold align-middle">2</b>
                    <span>Крок 2</span>
                </router-link>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TestDriveNav",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Записатись на онлайн консультацію автомобіля Toyota  `,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Toyota | Записатись на онлайн консультацію автомобіля Toyota  `
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Виберіть автомобіль Toyota, який вам сподобався, потім оберіть зручну для вас дату та завітайте до дилерського центру для здійснення пробної поїздки.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Виберіть автомобіль Toyota, який вам сподобався, потім оберіть зручну для вас дату та завітайте до дилерського центру для здійснення пробної поїздки.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `toyota, тест-драйв, тест драйв, тестдрайв, тайота, купить, дилер, `
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `toyota, тест-драйв, тест драйв, тестдрайв, тайота, купить, дилер, `
                    },
                ],
            }
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

    }
</script>

<style lang="scss" scoped>
    @import './../../../styles/variables';

    nav {
                    position: sticky;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    z-index: 997;
                    color: $font_color;
                    div.collapse {
                        align-content: center;
                        a {
                            color: $font_color;
                            font-size: 15px;
                            b {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background-color: #F0F0F0;
                                display: inline-block;
                                margin-right: 10px;
                                padding-top: 4px;
                            }
                            &.active {
                                font-weight: bold;
                                b {
                                    background-color: #E50000;
                                    color: #fff;
                                    font-weight: 300;
                                }
                            }
                        }
                    }
                }

    @media ( max-width: 575.9px ) {
        nav {

                        div.collapse {

                            a {
                                span {
                                    display: none;
                                }
                            }
                        }
                    }
    }

</style>