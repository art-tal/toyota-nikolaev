<template>
    <article class="container">
        <header>
            <h1>{{price}}&#8372;</h1>
            <p>Цена</p>
        </header>
        <div class="body">
            <h3>
                {{model.name}}
<!--                {{model.bodyType}}-->
                {{equipment.mod_name}}
                {{transmission.eng_name}}
                {{transmission.gear_name}}
<!--                <span v-if="transmission.drive">(Передний привод)</span>-->
                <span v-if="transmission.wd">(Полный привод)</span>
            </h3>

            <table>
                <tr>
                    <td class="font-weight-bold">Цена</td>
                    <td>{{price_auto}}&#8372;</td>
                </tr>
                <tr>
                    <td>{{color.color_name}} ({{color.color_code}})</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{interior.material_name}} ({{interior.material_code}})</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{wheels.wheel_name}}, 4шт.</td>
                    <td>{{price_wheels}}&#8372;</td>
                </tr>
                <tr></tr>
            </table>

            <div class="accessories font-weight-bold" v-if="selectedAccessories.length != 0">
                <div class="header row">
                    <b class="col-6">Аксессуары ({{selectedAccessories.length}})</b>
                    <span class="col-6 text-right">{{priceAccessories}}&#8372;</span>
                </div>
                <div class="accessory row"
                     v-for="(accessory, key) in selectedAccessories"
                     :key="key"
                >
                    <div class="col-7">{{accessory.name}}</div>
                    <div class="col-4">{{accessory.cost}}</div>
                    <div class="col-1" @click="deleteAccessory(key)">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>



            <div class="result row">
                <span class="col-7">Вместе</span>
                <span class="pr col-5 font-weight-bold">{{price}}&#8372;</span>
            </div>

            <p>
                Размещенная на данном сайте информация о характеристиках продукции, (ориентировочных) цен и других условий ее продажи, а также условий предоставления любых услуг не является предложением заключить договор (офертой). Такая информация может не быть окончательным и подлежит уточнению у соответствующего дилерского центра Toyota.
            </p>

            <router-link
                    tag="button"
                    to="/configurator/result"
                    exact
                    class="btn btn-danger"
            >Перейти к итогам</router-link>

            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image"
                 :alt="model.name">

        </div>
    </article>
</template>

<script>
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
                price_wheels: "32099,23",
            }
        },

        created() {
            this.model =JSON.parse( localStorage.model);
            this.equipment =JSON.parse( localStorage.equipment);
            this.transmission =JSON.parse( localStorage.transmission);
            this.color =JSON.parse( localStorage.color);
            this.interior =JSON.parse( localStorage.interior);
            this.wheels =JSON.parse( localStorage.wheel);
            this.selectedAccessories = JSON.parse( localStorage.selectedAccessories);
        },

        computed: {
            priceAccessories() {
                let prAcc = 0;
                this.selectedAccessories.map( (acc) => {
                    prAcc += parseFloat(acc.cost);
                } );
                return prAcc;
            },
        },

        watch:{
            selectedAccessories() {
                return this.selectedAccessories;
            },

        },

        methods: {
            deleteAccessory(key) {
                this.selectedAccessories.splice(key, 1);
                console.log(this.selectedAccessories);
                localStorage.selectedAccessories = JSON.stringify(this.selectedAccessories);
                this.$store.state.selectedAccessories = this.selectedAccessories;
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.container {
        position: sticky;
        bottom: 0;
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
            table {
                font-size: 1.3rem;
                tr {
                    border-bottom: 1px solid #ddd;
                    color: #6c7073;
                    &:first-child {
                        color: #020202;
                    }
                    td:first-child {
                        width: 70%;
                        padding: 12px 15px 10px 0;
                    }
                    td:last-child {
                        width: 30%;
                        text-align: right;
                        padding: 12px 0 10px 5px;
                    }
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
                    div:nth-child(2) {
                        padding: 0 5px;
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