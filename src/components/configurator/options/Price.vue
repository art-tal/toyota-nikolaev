<template>
    <article class="container">
        <header>
            <h1>{{price | formattedPrice}}&#8372;</h1>
            <p>Ціна</p>
        </header>
        <div class="body">
            <h3>
                {{model.name}}
<!--                {{model.bodyType}}-->
                {{equipment.mod_name}}
                {{getTransmission.eng_name}}
                {{getTransmission.gear_name}}
<!--                <span v-if="transmission.drive">(Передний привод)</span>-->
                <span v-if="getTransmission.wd">(Повний привод)</span>
            </h3>

            <div class="option">
                <div class="base_price row">
                    <div class="font-weight-bold col-6">Ціна</div>
                    <div class="col-6 text-right">{{price_auto | formattedPrice}}&#8372;</div>
                </div>
                <div class="color row">
                    <div class="col-12 text-left">{{getColor.color_name}} ({{getColor.color_code}})</div>

                </div>
                <div class="interior row">
                    <div class="col-12 text-left">{{getInterior.material_name}} ({{getInterior.material_code}})</div>

                </div>
                <div class="wheels row">
                    <div class="col-6 text-left">{{getWheels.wheel_name}}, 4шт.</div>
                    <div class="col-5 text-right">{{price_wheels | formattedPrice}}&#8372;</div>
                </div>

            </div>

            <div class="accessories font-weight-bold" v-if="getSelectedAccessories.length != 0">
                <div class="header row">
                    <b class="col-6">Аксесуари ({{getSelectedAccessories.length}})</b>
                    <span class="col-6 text-right">{{priceAccessories | formattedPrice}}&#8372;</span>
                </div>
                <div class="accessory row"
                     v-for="(accessory, key) in getSelectedAccessories"
                     :key="key"
                >
                    <div class="col-7">{{accessory.name}}</div>
                    <div class="col-4 text-right">{{accessory.cost}}</div>
                    <div class="col-1" @click="deleteAccessory(accessory)">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>



            <div class="result row">
                <span class="col-7">Загалом</span>
                <span class="pr col-5 font-weight-bold">{{price | formattedPrice}}&#8372;</span>
            </div>

            <p>
                Розміщена на цьому сайті інформація щодо характеристик продукції, (орієнтовних) цін, інших умов її продажу, а також умов надання будь-яких послуг не є пропозицією укласти договір (офертою). Така інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.
            </p>

            <router-link
                    tag="button"
                    to="/configurator/result"
                    exact
                    class="btn btn-danger"
            >Перейти до підсумків</router-link>

            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image"
                 :alt="model.name">

        </div>
    </article>
</template>

<script>
    import formattedPrice from "../../../filters/price_format";
    import {eventEmitter} from "@/main";
    // import {eventEmitter} from "./../../../app";//      for Laravel

    export default {
        name: "Price",

        data() {
            return {
                model: null,
                equipment: null,
                transmission: null,
                color: null,
                interior: null,
                wheels: null,
                selectedAccessories: null,

                price_auto: "734556,00",
                price: "766655,23",
                price_wheels: "32099,23",//ЗАГЛУШКА
            }
        },

        filters: {
            formattedPrice
        },

        created() {
            this.model = JSON.parse( localStorage.model);
            this.equipment = JSON.parse( localStorage.equipment);
            this.$store.state.engineAndGear = JSON.parse( localStorage.transmission);
            // this.transmission = JSON.parse( localStorage.transmission);
            this.$store.state.color = JSON.parse( localStorage.color);
            // this.color = JSON.parse( localStorage.color);
            this.$store.state.interior = JSON.parse( localStorage.interior);
            // this.interior = JSON.parse( localStorage.interior);
            this.$store.state.wheels = JSON.parse( localStorage.wheel);
            // this.wheels = JSON.parse( localStorage.wheel);
            this.selectedAccessories = JSON.parse( localStorage.selectedAccessories);
        },

        computed: {

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

            getSelectedAccessories() {
                return this.$store.getters.accessories;
            },

            priceAccessories() {
                let prAcc = 0;
                this.$store.getters.accessories.forEach( (acc) => {
                    prAcc += parseFloat(acc.cost);
                } );
                return prAcc;
            },
        },



        methods: {
            deleteAccessory(accessory) {
                this.$store.commit('delAccessories', accessory);
                eventEmitter.$emit('checkAcc');

            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.container {
        position: sticky;
        top: 60px;
        header {
            width: 50%;
            background-color: #f0f0f0;
            padding: 15px 29px;
            border-radius: 2px 2px 0 0;
            h1 {
                font-size: 1.7rem;
                color: #020202;
                margin: 0;
            }
            p {
                font-size: 1.3rem;
                color: #6c7073;
                margin: 0;
            }
        }
        .body {
            background-color: #f0f0f0;
            padding: 30px;
            h3 {
                font-size: 1.3rem;
                color: #020202;
                padding-bottom: 12px;
            }
            .option {
                font-size: 1.3rem;
                width: 100%;
                .row {
                    border-bottom: 1px solid #ddd;
                    color: #6c7073;
                    margin: 0;
                    justify-content: space-between;
                }
                .base_price.row {
                    color: #020202;
                    }
                    div:first-child {
                        padding: 12px 15px 10px 0;
                    }
                    div:last-child {
                        text-align: right;
                        padding: 12px 0 10px 5px;
                    }

            }



            .accessories {
                margin-top: 30px;
                font-size: 1.3rem;
                .header.row {
                    padding: 12px 0 10px;
                    border-bottom: 1px solid #ddd;
                }
                .accessory.row {
                    padding: 12px 0 10px;
                    color: #6c7073;
                    font-weight: normal;
                    justify-content: space-between;
                    div:nth-child(2) {
                        padding: 0 10px;
                    }
                    div:last-child {
                        padding: 0;
                        i:hover{
                            color: #000;
                        }
                    }
                }
            }




            .result.row {
                padding-top: 40px;
                font-size: 1.3rem;
                span {
                        color: #020202;
                    }
                }




            p {
                font-size: 1.3rem;
                color: #6c7073;
                padding: 8px 0 12px;
                word-spacing: 4px;
            }
            button.btn.btn-danger {
                width: 100%;
                font-size: 1.5rem;
                background-color: #E50000;
                padding: 0 30px;
                height: 46px;
                border-radius: 23px;
            }
            img {
                width: 100%;
            }
        }
    }

</style>