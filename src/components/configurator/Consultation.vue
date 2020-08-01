<template>
    <main class="consultation">
        <div class="container">
            <menu class="row">
                <nav class="col-11 navbar navbar-expand navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div class="navbar-nav">

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/consultation/step_1"
                            >
                                <b class="font-weight-bold align-middle">1</b>
                                <span>Крок 1</span>
                            </router-link>

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/consultation/step_2"
                            >
                                <b class="font-weight-bold align-middle">2</b>
                                <span>Крок 2</span>
                            </router-link>

                        </div>
                    </div>
                </nav>
            </menu>

            <header class="text-left">
                <h1>Замовити онлайн консультацію</h1>
            </header>

            <router-view></router-view>

        </div>
    </main>
</template>

<script>
    export default {
        name: "Сonsultation",

        data() {
            return {

            }
            },

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

        created() {
            this.$router.push({name: 'step_1'});
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            closeConsult() {
                this.$store.state.openConsultation = !this.$store.state.openConsultation;
                console.log("click");
                console.log(this.$store.state.openConsultation);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.consultation{
        .container {
            padding: 0 0 30px 0;
            bottom: 50px;
            margin-top: 0;
            background-color: #fff;
            menu.row {
                width: 100%;
                padding: 0;
                margin: 0;
                border-bottom: 1px solid #F0F0F0;
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
                i {
                    font-size: 2rem;
                    align-self: center;
                }
            }

        }
        header {
            margin-bottom: 40px;
            margin-top: 36px;
            padding: 0 15px;
            h1 {
                font-size: 4.4rem;
            }
        }
    }

    @media ( min-width: 576px ) and (max-width: 767.9px) {
        main.consultation{
            height: 100%;
            .container {
                position: absolute;
                overflow: auto;
                top: 25px;
                left: 25px;
                right: 25px;
                bottom: 25px;
                margin-top: 0;
                background-color: #fff;


            }
        }
    }

    @media ( max-width: 575.9px ) {
        main.consultation{
            width: 100%;
            min-width: 400px;
            height: 100%;
            .container {
                position: absolute;
                overflow: scroll;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin-top: 0;
                background-color: #fff;
                menu {

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

                header {
                    h1 {
                        font-size: 3rem;
                    }
                }

            }
        }
    }

</style>