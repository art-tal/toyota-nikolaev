<template>
    <main>
        <menu-nikolaev/>
        <header class="container-fluid">
            <h1 class="container text-center">Наші фахівці</h1>
        </header>

        <div class="body container">
            <h2>Наші фахівці</h2>

            <div class="row" v-for="(worker, key) in workers" :key="key">
                <div class="col-md-8 col-12 text-left">
                    <h3>{{worker.name_dep}}:</h3>
                    <h4>{{worker.name}}</h4>
                    <h4>{{worker.position}}</h4>
                    <h4 v-if="worker.isVisiblePhone">
                        <i class="fas fa-phone"></i>
                        <span>{{worker.phone}}</span>
                    </h4>
                    <h4 v-if="worker.isVisibleEmail">
                        <i class="far fa-envelope"></i>
                        <span>{{worker.email}}</span>
                    </h4>
                    <h4 v-if="worker.isVisibleSkype">
                        <i class="fab fa-skype"></i>
                        <span>{{worker.skype}}</span>
                    </h4>
                    <h4 v-if="worker.isVisibleViber">
                        <i class="fab fa-viber"></i>
                        <span>{{worker.viber}}</span>
                    </h4>
                    <h4 v-if="worker.isVisibleTelegram">
                        <i class="fab fa-telegram-plane"></i>
                        <span>{{worker.telegram}}</span>
                    </h4>
                    <h4 v-if="worker.isVisibleMessenger">
                        <i class="fab fa-facebook-messenger"></i>
                        <span>{{worker.messenger}}</span>
                    </h4>
                    <h5>Години роботи: <span>Пн-Пт: 8:30-19:00; Сб: 9:00-17:00, Нд – Вихідний</span></h5>
                </div>
                <div class="col-md-4 col-12">
                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + worker.photo" :alt="worker.name">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import MenuNikolaev from "./../../components/ToyotaInNikolaev/MenuNikolaev";
    import axios from "axios"

    export default {
        name: "Workers",

        components: {
            MenuNikolaev
        },

        data() {
            return {
                workers: [],
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Тойота Центр Миколаїв «КіТ-Т» | Наші фахівці`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Тойота Центр Миколаїв «КіТ-Т» | Наші фахівці`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Тойота Центр Миколаїв «КіТ-Т». Тут Ви можете знайти інформацію про представників компанії.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Тойота Центр Миколаїв «КіТ-Т». Тут Ви можете знайти інформацію про представників компанії.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота україна, купити, Toyota, Yaris, Auris, Corolla, Avensis, Prius, Camry, RAV4, Highlander, Land Cruiser Prado, Land Cruiser 200, Hilux, Тойота, Ярис, Аурис, Королла, Авенсис, Пріус, Хайлендер, Корола, Кемри, Камри, Кэмри, Камрі, РАВ4, Ленд Крузер, Прадо, Ленд Крузер 200, Хайлакс, Хайлюкс, машини, автомобілі, дилери тойота, офіційний дилер тойота, гібрид, гібридний, приус, prius, toyota prius, toyota ukraine, тойота Миколаїв купити, c-hr`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота україна, купити, Toyota, Yaris, Auris, Corolla, Avensis, Prius, Camry, RAV4, Highlander, Land Cruiser Prado, Land Cruiser 200, Hilux, Тойота, Ярис, Аурис, Королла, Авенсис, Пріус, Хайлендер, Корола, Кемри, Камри, Кэмри, Камрі, РАВ4, Ленд Крузер, Прадо, Ленд Крузер 200, Хайлакс, Хайлюкс, машини, автомобілі, дилери тойота, офіційний дилер тойота, гібрид, гібридний, приус, prius, toyota prius, toyota ukraine, тойота Миколаїв купити, c-hr`
                    },
                ],
            }
        },

        created() {
            this.getWorkers();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            getWorkers() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/workers",
                )
                .then( (response) => {
                    this.workers = response.data;
                    console.log(this.workers);
                    this.workers.sort( (a, b) => { return a.dep_id - b.dep_id } );
                    console.log(this.workers);
                } )
                .catch( () => {} )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }

    main {
        header.container-fluid {
            @include header-xl;
            background-image: url(../../img/salon_2.jpg);
            position: relative;
            h1 {
                color: #ffffff;
                width: 100% !important;
                position: absolute;
                top: 20vh;
                left: 0;
                margin: auto;
            }
        }

        .body.container {
            margin: 68px auto;
            h2 {
                margin-bottom: 68px;
                font-size: 4.5rem;
                font-weight: bold;
            }

            .row {
                border: 1px solid #a8aaac;
                background-color: #f0f0f0;
                margin: 30px 0;
                padding: 30px 15px;
                border-radius: 15px;
                div {
                    img {
                        width: 100%;
                    }
                    h3 {
                        font-size: 2.5rem;
                        font-weight: bold;
                        margin: 30px 0;
                    }
                    h4 {
                        font-size: 2rem;
                        font-weight: bold;
                        margin: 30px 0;
                        i {
                            display: inline-block;
                            margin-right: 15px;
                            &.fa-skype {
                                color: #01B3EB;
                            }
                            &.fa-viber {
                                color: #7D519E;
                            }
                            &.fa-telegram-plane {
                                color: #35ACE4;
                            }
                            &.fa-facebook-messenger {
                                color: #00B4FF;
                            }
                        }
                    }
                    p {
                        margin: 40px 0 30px;
                        font-size: 1.8rem;
                    }
                    h5 {
                        font-size: 1.8rem;
                        font-weight: bold;
                        span {
                            font-weight: normal;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main {
            header.container-fluid {
                position: relative;
                @include header-lg;
                h1 {
                    position: absolute;
                    top: 20vh;
                    left: 0;
                    text-align: center;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header {
                @include header-md;
                position: relative;
                h1 {
                    position: absolute;
                    top: 20vh;
                    left: 0;
                }
            }

            .body.container {
                margin: 30px auto;
                h2 {
                    margin-bottom: 30px;
                    font-size: 4rem;
                }

                .row {
                    div {
                        h3 {
                            font-size: 2.2rem;
                            margin: 20px 0;
                        }
                        h4 {
                            font-size: 1.8rem;
                            margin: 20px 0;
                        }
                        p {
                            margin: 30px 0 20px;
                            font-size: 1.6rem;
                        }
                        h5 {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header.container-fluid {
                @include header-sm;
                position: relative;
                h1 {
                    position: absolute;
                    top: 15vh;
                    left: 0;
                }
            }

            .body.container {
                margin: 30px auto;
                h2 {
                    margin-bottom: 30px;
                    font-size: 3.5rem;
                }

                .row {
                    margin: 30px 0;
                    padding: 15px 15px;
                    border-radius: 15px;
                    div {
                        img {
                            width: 100%;
                            display: inline-block;
                            margin: 30px 0 15px;
                        }
                        h3 {
                            font-size: 1.8rem;
                            margin: 15px 0;
                        }
                        h4 {
                            font-size: 1.6rem;
                            margin: 15px 0;
                        }
                        p {
                            margin: 15px 0;
                            font-size: 1.4rem;
                        }
                        h5 {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header.container-fluid {
                @include header-xs;
                position: relative;
                h1 {
                    position: absolute;
                    top: 6vh;
                    left: 0;
                }
            }

            .body.container {
                margin: 30px auto;
                h2 {
                    margin-bottom: 30px;
                    font-size: 3.5rem;
                }

                .row {
                    margin: 30px 0;
                    padding: 15px 15px;
                    border-radius: 15px;
                    div {
                        img {
                            width: 100%;
                            display: inline-block;
                            margin: 30px 0 15px;
                        }
                        h3 {
                            font-size: 1.8rem;
                            margin: 15px 0;
                        }
                        h4 {
                            font-size: 1.6rem;
                            margin: 15px 0;
                        }
                        p {
                            margin: 15px 0;
                            font-size: 1.4rem;
                        }
                        h5 {
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }

</style>