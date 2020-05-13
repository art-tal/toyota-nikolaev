<template>
    <section class="result container">

        <div class="row">

            <article class="col-lg-8 col-12">
                <header class="text-left row">
                    <div class="wrap col-10">
                        <h2 class="carModel font-weight-bold">{{getModel.name}}</h2>
                        <h3 class="carEquipment font-weight-bold">{{getEquipment.mod_name}}
                        <span class="bodyType"> - {{getEquipment.body_type}}</span>
                        </h3>
                    </div>
                    <div class="wrap_button col-2 text-right">
                        <button class="btn btn-danger" @click="openBlock()">Переглянути</button>
                    </div>

                </header>
                <div class="view row text-center">
                    <img :src="photo" :alt="getModel.name">
                </div>

                <div class="body">
                    <section class="information">
                        <header class="row">
                            <h1 class="col-sm-7 col-5 text-left">{{getModel.name}}</h1>
                            <p class="col-sm-5 col-7 text-right">
                                <router-link
                                        class="nav-link ml-2 mr-2 editEquipment"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/configurator/selected_engine"
                                >
                                    <span>Змінити комплектацію</span>
                                    <i class="fas fa-sync-alt"></i>
                                </router-link>
                            </p>
                        </header>
                        <div class="info row">
                            <h4 class="col-7 text-left">
                                {{getModel.name}}, {{getEquipment.body_type}} {{getEquipment.mod_name}}<br>
                                {{getTransmission.eng_name}}<br>
                                {{getTransmission.gear_name}}
                                <span v-if="getTransmission.drive">(Передній привод)</span>
                                <span v-if="getTransmission.wd">(Повний привод)</span>
                            </h4>
                            <div class="col-5 text-right">{{price | formattedPrice}}&#8372;</div>
                        </div>
                    </section>

                    <section class="information">
                        <header class="row">
                            <h1 class="col-sm-7 col-5 text-left">Колір та оснащення</h1>
                            <p class="col-sm-5 col-7 text-right">
                                <router-link
                                        class="nav-link ml-2 mr-2 editEquipment"
                                        tag="a"
                                        exact
                                        active-class="active"
                                        to="/configurator/selected_engine"
                                >
                                    <span>Змінити налаштування</span>
                                    <i class="fas fa-tasks"></i>
                                </router-link>
                            </p>
                        </header>
                        <p class="info row font-weight-bold">
                            Кольори та колеса
                        </p>
                        <p class="info row">
                            {{getColor.color_name}} ({{getColor.color_code}})
                        </p>
                        <p class="info row text-left">
                            {{getWheels.description}}
                        </p>
                        <p class="info row font-weight-bold">
                            Оздоблення інтер'єру
                        </p>
                        <p class="info row">
                            {{getInterior.interior_name}} ({{getInterior.interior_code}})
                        </p>
                    </section>

                    <section class="result_price">
                        <header class="row text-left">
                            <h1 class="col-12">Підсумкова ціна</h1>
                        </header>
                        <div class="row">
                            <p class="font-weight-bold text-right">{{getTotalCost | formattedPrice}}&#8372;</p>
                        </div>

                    </section>
                </div>


            </article>

            <aside class="col-lg-4 col-12" v-if="showAside">
                <div class="header text-left">
                    <h2 class="font-weight-bold">{{getTotalCost | formattedPrice}}&#8372;</h2>
                    <p>Ціна</p>
                    <i class="fas fa-times" @click="openBlock()"></i>
                </div>
                <article class="text-left">
                    <header>
                        <h1 class="font-weight-bold">{{getModel.name}}</h1>
                    </header>
                    <div class="body">
                        <ul class="links">
                            <li>
                                <a href.prevent="#" target="_blank">
                                    <i class="far fa-file-alt"></i>
                                    <span>Завантажити PDF</span>
                                </a>
                            </li>
                            <li>
                                <a href.prevent="#" @click.prevent="openConsult()">
                                    <i class="far fa-life-ring"></i>
                                    <span>Онлайн консультація</span>
                                </a>
                            </li>
                            <li>
                                <a href.prevent="#" target="_blank">
                                    <i class="fas fa-print"></i>
                                    <span>Надрукувати</span>
                                </a>
                            </li>
                        </ul>
                        
                        <div class="result_prise row">
                            <p class="col-7">Загалом</p>
                            <h4 class="col-5 font-weight-bold text-right">{{getTotalCost | formattedPrice}}&#8372;</h4>
                        </div>

                        <p class="attention">
                            Розміщена на цьому сайті інформація щодо характеристик продукції, (орієнтовних) цін, інших умов її продажу, а також умов надання будь-яких послуг не є пропозицією укласти договір (офертою). Така інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.
                        </p>

                        <div class="save row">
                            <p class="col-8">Ваш Toyota-код <i class="fas fa-info-circle"></i></p>
                            <h4 class="col-4 font-weight-bold text-right">{{code}}</h4>
                            <button class="btn btn-danger">Зберегти</button>
                        </div>

                        <footer>
                            <p>
                                Зовнішній вигляд автомобілів та їх складових може відрізнятися від зображених на сайті. За більш детальною інформацією звертайтеся до офіційних дилерів Toyota в Україні.
                            </p>
                        </footer>


                    </div>
                </article>
            </aside>



<!--            <div class="consult"  v-if="showConsultation">-->
<!--                <consult v-if="showConsultation"></consult>-->
<!--                <consult></consult>-->
<!--            </div>-->


        </div>


    </section>
</template>

<script>
    import formattedPrice from "../../filters/price_format";
    // import Consult from "./Consult"
    // import {eventEmitter} from "../../app";//           for Laravel

    export default {
        name: "Result",

        components: {
            // Consult,
        },

        data() {
            return {
                price: 803190.00,
                code: 'Hki_8NwNz',
                openAside: true,
                openConsultation: false,
                windowWidth: null,
            }
        },

        filters: {
            formattedPrice
        },

        created() {
            this.$store.state.model = JSON.parse( localStorage.model );
            this.$store.state.equipment = JSON.parse( localStorage.equipment );
            this.$store.state.engineAndGear = JSON.parse( localStorage.transmission );
            this.$store.state.color = JSON.parse( localStorage.color );
            this.$store.state.wheels = JSON.parse( localStorage.wheel );
            this.$store.state.interior = JSON.parse( localStorage.interior );
            this.$store.state.selectedAccessories = JSON.parse( localStorage.selectedAccessories );
            window.addEventListener('resize', this.changeResize);
            this.changeResize();
            // eventEmitter.$on('close', () => { this.openConsult() } );
        },

        computed: {
            getModel() {
                return this.$store.getters.getModel;
            },

            photo() {
                // return this.$store.getters.modelImage;
                if (this.$store.getters.colored.preview) {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + this.$store.getters.colored.preview;
                } else {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + JSON.parse(localStorage.color).preview;
                }
            },

            getEquipment() {
                return this.$store.getters.equip;
            },

            getTransmission() {
                return this.$store.getters.getEngineAndGear;
            },

            getColor() {
                return this.$store.getters.colored;
            },

            getWheels() {
                return this.$store.getters.getWheels;
            },

            getInterior() {
                return this.$store.getters.getInterior;
            },

            getAccessories() {
                return this.$store.getters.accessories;
            },

            getWinWidth() {
                return this.windowWidth;
            },

            showAside() {
                return this.openAside;
            },

            showConsultation() {
                return this.$store.getters.getOpenConsultation;
            },

            getTotalCost() {
                // return this.$store.getters.getTotalCost;
                if(this.$store.getters.getTotalCost) {
                    return this.$store.getters.getTotalCost;
                } else {
                    return localStorage.totalCost;
                }
            },

        },




        methods: {
            changeResize() {
                this.windowWidth = window.innerWidth;
                if (this.getWinWidth >= 992) { this.openAside = true; }
                else { this.openAside = false; }
            },

            openBlock() {
                if (this.getWinWidth >= 992) { return this.openAside = true; }
                this.openAside = !this.openAside;
            },

            openConsult() {
                // this.$store.state.openConsultation = !this.$store.state.openConsultation;
                this.$router.push({name: "consultation"})
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section.result.container {
        .row {
            position: relative;
            article {
                header.row {
                    color: $font_color;
                    .wrap {
                        h2 {
                            font-size: 3.4rem;
                        }
                        h3 {
                            font-size: 1.7rem;
                        }
                    }
                    .wrap_button {
                        display: none;
                        button {
                            background-color: #E50000;
                            font-size: 1.3rem;
                        }
                    }

                }
                .view.row {
                    img {
                        width: 100%;
                    }
                }

                .body{
                    color: $font_color;
                    section.information {
                        header.row {
                            border-bottom: 1px solid #d9dadb;
                            padding: 24px 0;
                            h1 {
                                font-size: 3.4rem;
                                padding: 0;
                            }
                            p {
                                padding: 0;
                                a {
                                    font-size: 1.5rem;
                                    color: #6c7073;
                                    i {
                                        margin-left: 15px;
                                    }
                                    &:hover {
                                        span {
                                            text-decoration: underline;
                                        }
                                    }
                                }

                            }
                        }
                        .info.row {
                            padding: 12px 0;
                            margin-bottom: 0;
                            border-bottom: 1px solid #d9dadb;
                            font-size: 1.5rem;
                            h4 {
                                line-height: 22px;
                                padding: 0;
                            }
                            p {
                                color: #6c7073;
                            }

                        }
                    }

                    section.result_price {
                        margin-top: 20px;
                        padding: 24px 0;
                        color: $font_color;
                        header.row {
                            margin-bottom: 20px;
                            h1 {
                                font-size: 3.4rem;
                                padding: 0;
                            }
                        }
                        .row {
                            p {
                                width: 100%;
                                padding: 30px;
                                margin: 0 0 36px 0;
                                font-size: 1.7rem;
                                background-color: #F0F0F0;
                                border-radius: 3px;
                            }
                        }

                    }
                }
            }

            aside {
                /*position: sticky;*/
                top: 0;
                padding: 30px;
                position: relative;
                .header {
                    background-color: #F0F0F0;
                    width: 50%;
                    padding: 15px 29px;
                    box-sizing: border-box;
                    border-radius: 2px 2px 0 0;
                    h2{
                        font-size: 1.7rem;
                        color: #020202;
                    }
                    p {
                        font-size: 1.3rem;
                        color: #6c7073;
                    }
                    i {
                        display: none;
                        position: absolute;
                        top: 40px;
                        right: 40px;
                        font-size: 1.5rem;
                        background-color: #F0F0F0;
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        border: 1px solid #d9dadb;
                        padding: 5px;
                        text-align: center;
                        cursor: pointer;
                    }
                }
                article {
                    padding: 30px;
                    background-color: #F0F0F0;
                    header {
                        h1 {
                            font-size: 1.7rem;
                            color: $font_color;
                        }
                    }
                    .body {
                        ul.links {
                            margin: 0;
                            padding: 5px 0 30px;
                            list-style-type: none;
                            li {
                                border-bottom: 1px solid #d9dadb;
                                a {
                                    display: inline-block;
                                    font-size: 1.5rem;
                                    color: $font_color;
                                    padding: 12px 0;
                                    cursor: pointer;
                                    i {
                                        margin-right: 15px;
                                    }
                                    &:hover {
                                        span {
                                            text-decoration: underline;
                                        }
                                    }
                                }
                            }
                        }

                        .result_prise.row {
                            margin-bottom: 6px;
                            font-size: 1.3rem;
                            color: $font_color;
                            p {
                                color: #6c7073;
                            }
                        }

                        p.attention {
                            font-size: 1.3rem;
                            color: #6c7073;
                            padding: 8px 0 12px;
                        }

                        .save.row {
                            margin: 0;
                            padding: 12px 0;
                            color: $font_color;
                            font-size: 1.3rem;
                            p {
                                font-size: 1.5rem;
                                i {
                                    margin-left: 10px;
                                }
                            }
                            h4 {
                                padding: 0;
                                font-size: 1.3rem;
                                align-self: center;
                            }
                            button {
                                @include button;
                                background-color: #E50000;
                                width: 100%;
                                margin: 6px 0 12px;
                            }
                        }
                        footer {
                            border-top: 1px solid #d9dadb;
                            padding-top: 12px;
                            p {
                                font-size: 1.3rem;
                                color: #6c7073;
                            }
                        }
                    }
                }
            }

            .consult {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0,0,0,0.5);
                z-index: 999;
            }
        }
    }


    @media (max-width: 992px) {
        section.result.container {
            min-width: 380px;
            .row {
                padding: 15px;
                position: relative;
                article {
                    header.row {
                        color: $font_color;
                        .wrap {
                            h2 {
                                font-size: 3.4rem;
                            }
                            h3 {
                                font-size: 1.7rem;
                            }
                        }
                        .wrap_button {
                            display: block;
                            button {
                                background-color: #E50000;
                                font-size: 1.3rem;
                            }
                        }
                    }
                }

                aside {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: 999;
                    background-color: #fff;
                    .header {
                        i {
                            display: block;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 576px) {
        section.result.container {
            min-width: 380px;
            .row {
                padding: 15px;
                position: relative;
                article {
                    header.row {
                        margin: 0;
                        .wrap_button {
                            display: block;
                            button {
                                margin-right: 15px;
                            }
                        }
                    }
                    .body{
                        color: $font_color;
                        section.information {
                            header.row {
                                border-bottom: 1px solid #d9dadb;
                                padding: 24px 0;
                                h1 {
                                    font-size: 3.4rem;
                                    padding: 0;
                                }
                                p {
                                    padding: 0;
                                    a {
                                        font-size: 1.5rem;
                                        color: #6c7073;
                                        i {
                                            margin-left: 15px;
                                        }
                                        &:hover {
                                            span {
                                                text-decoration: underline;
                                            }
                                        }
                                    }

                                }
                            }
                            .info.row {
                                padding: 12px 0;
                                margin-left: 0;
                                margin-right: 0;
                                margin-bottom: 0;
                                border-bottom: 1px solid #d9dadb;
                                font-size: 1.5rem;
                                h4 {
                                    line-height: 22px;
                                    padding: 0;
                                }
                                p {
                                    color: #6c7073;
                                }

                            }
                        }

                        section.result_price {
                            margin-top: 20px;
                            padding: 24px 0;
                            color: $font_color;
                            header.row {
                                margin-bottom: 20px;
                                h1 {
                                    font-size: 3.4rem;
                                    padding: 0;
                                }
                            }
                            .row {
                                p {
                                    width: 100%;
                                    padding: 30px;
                                    margin: 0 0 36px 0;
                                    font-size: 1.7rem;
                                    background-color: #F0F0F0;
                                    border-radius: 3px;
                                }
                            }

                        }
                    }
                }

                aside {
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    .header {
                        i {
                            display: block;
                        }
                    }
                }

            }
        }
    }

</style>