<template>
    <section class="container-fluid">
        <div class="row car_type">

            <router-link
                    tag="a"
                    exact
                    active-class="active"
                    to="/cars_available"
            >Авто в наявності</router-link>

        </div>

        <div class="row">
            <div class="all_model col-lg-9 col-md-8 col-sm-12 row">
                    <div class="col-xl-3 col-lg-4 col-sm-6 model"
                         v-for="(model, key) in models" :key="key"
                         @click="goSelectModel(model)"
                    >
                        <div class="promo" v-if="model.stock">Акція</div>
                        <div class="nav-link active text-left">
                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="model.image">
                            <h2>{{model.name}}</h2> <h3 v-if="model.hybrid">+ Гібрид</h3>
                        </div>
                            <div class="here" v-if="isPrice(model)">
                                <p>*Від <strong>{{model.carPrice.here}}&#8372;</strong></p>
                                <b>(для авто у наявності)</b>
                            </div>

                            <div class="there" v-if="isPrice(model)">
                                <p>*Від <strong>{{model.carPrice.there}}&#8372;</strong></p>
                                <b>(авто під замовлення)</b>
                            </div>


                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-12 buyers_tools text-left">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
                        <li class="contact">
                            <router-link
                                    tag="a"
                                    exact
                                    to="/faq"
                            >
                                <i class="fas fa-phone"></i>
                                <span>Часті запитання</span>
                            </router-link>
                        </li>
                        <li class="test_drive">
                            <router-link
                                    tag="a"
                                    exact
                                    to="/consultation"
                            >
                                <i class="far fa-calendar-alt"></i>
                                <span>Замовити онлайн консультацію</span>
                            </router-link>
                        </li>
                        <li class="download">
                            <router-link
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/download_brochures"
                            >
                                <i class="far fa-file-alt"></i>
                                <span>Завантажити брошури</span>
                            </router-link>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AllModell",


        data() {
            return {
                models: [],
                prices: [],

                showFAQ: false,
            }
        },

        created() {
            this.getModel();
        },

        methods: {
            getModel() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    this.models = response.data;
                    this.getPrices();
                } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модели");
                    console.log(error);
                })

            },

            getPrices() {
                axios.get("http://lara.toyota.nikolaev.ua/ajax/all_model_price")
                .then( (response) => {
                    this.prices = response.data;
                    this.setPrice();
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки цен");
                    console.log(error);
                } )
            },

            setPrice() {
                let keysPrice = Object.keys(this.prices);
                this.models.forEach( (model) => {
                    keysPrice.forEach( (pr) => {
                        if(model.name.toLowerCase() === pr.toLowerCase()) {
                            this.$set(model, "carPrice", this.prices[pr] );
                        }
                    } );
                } );

            },

            isPrice(car) {
                if( Object.keys(car).includes('carPrice') ) {
                    return true
                } else {
                    return false;
                }

            },

            goSelectModel(model) {
                this.$store.state.model = model;
                this.dumpingOfStorage();
                this.$router.push({name: "selectModel", params: {id: model.id}});
                localStorage.id = model.id;
                localStorage.model = JSON.stringify(model);
                location.reload();
                this.$store.mutations.mutationRender();
            },



            faq() {
                this.showFAQ = !this.showFAQ;
            },

            dumpingOfStorage() {
                localStorage.mod_id = 0;
                localStorage.equipment = "";
                // localStorage.model = "";
                localStorage.totalCost = 0;
                // localStorage.id = 0;
                localStorage.interior = "";
                localStorage.wheel = "";
                localStorage.color = "";
                localStorage.transmission = "";
                localStorage.consultModel = "";
                localStorage.selectedAccessories = "";

            }
        },



    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section.container-fluid {
        background-color: #F0F0F0;
        .car_type {
            padding: 6px 40px 6px 73px;
            background-color: #f0f0f0;
            a {
                display: inline-block;
                padding: 16px 24px;
                font-size: 1.5rem;
                color: $font_color;
                text-decoration: none;
                &:hover {
                    color: #E50000;
                }
            }
        }

        .row {
            margin: 0;
            padding: 0 44px 0 74px;
            .all_model {
                padding: 15px;
                margin-top: 20px;
                .model {
                    padding: 20px;
                    margin-bottom: 28px;
                    align-self: flex-start;
                    position: relative;
                    div {
                        display: block;
                        border-bottom: 1px solid #D7D7D7;
                        text-decoration: none;
                        img {
                            width: 100%;
                        }
                        h2 {
                            display: inline-block;
                            font-size: 1.3rem;
                            margin-top: 15px;
                            padding-right: 15px;
                            color: $font_color;
                        }
                        h3 {
                            display: inline-block;
                            font-size: 1.3rem;
                            text-transform: uppercase;
                            color: #00A0F0;
                            font-weight: bold;
                            font-style: italic;
                        }

                        p {
                            color: #6c7073;
                            font-size: 1.4rem;
                            margin: 5px 0 0;
                        }

                        b {
                            color: #6c7073;
                            font-size: 1.2rem;
                        }

                        &.promo {
                            position: absolute;
                            top: 20px;
                            left: 20px;
                            color: #E50000;
                            text-transform: uppercase;
                            font-size: 1.4rem;
                            font-weight: bold;
                            border: none;
                            font-style: italic;
                        }
                    }

                    &:hover {
                        border-bottom: 1px solid #E50000;
                    }

                }
            }
            .buyers_tools {
                padding: 0;
                width: 100%;
                box-sizing: border-box;
                .tools{
                    font-size: 1.5rem;
                    color: $font_color;
                    padding: 25px 0 25px 25px;

                    h2 {
                        font-size: 1.5rem;
                        margin: 10px;
                    }
                    ol {
                        padding: 0;
                        li {
                            border: 1px solid #f0f0f0;
                            background-color: #fff;
                            list-style-type: none;
                            a {
                                display: block;
                                color: $font_color;
                                text-decoration: none;
                                padding: 18px 26px 22px;
                                i {
                                    margin-right: 20px;
                                    color: #a8aaac;
                                }
                            }
                            &:hover {
                                a i {
                                    color: #E50000;
                                }
                            }
                        }
                    }
                }
                }
            }
    }


    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            padding: 0;
            .car_type {
                padding: 6px 0 6px;
            }
            .row {
                padding: 0 22px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            padding: 0;
            .car_type {
                padding: 6px 0px 6px;
            }
            .row {
                padding: 0 22px;
                .buyers_tools {
                    .tools{
                        font-size: 1.5rem;
                        color: $font_color;
                        padding: 25px 0 25px;
                    }

                }
            }
        }
    }

    @media (min-width: 576px) and  (max-width: 767.9px) {
        section.container-fluid {
            padding: 0;
            .car_type {
                padding: 6px 0px 6px;
            }
            .row {
                padding: 0 15px;
                .buyers_tools {
                    .tools{
                        font-size: 1.5rem;
                        color: $font_color;
                        padding: 25px 0 25px;
                    }

                }
            }
        }
    }

    @media (max-width: 575.9px){
        section.container-fluid {
            padding: 0;
            .car_type {
                padding: 6px 0px 6px;
            }
            .row {
                padding: 0 15px;
                .buyers_tools {
                    .tools{
                        font-size: 1.5rem;
                        color: $font_color;
                        padding: 25px 0 25px;
                    }

                }
            }
        }
    }


</style>