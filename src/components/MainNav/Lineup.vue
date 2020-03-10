<template>
    <section class="container-fluid">
        <div class="row car_type">
            <a href="#" class="new_car">Новые автомтобили</a>
            <a href="#" class="old_car">Автомобили с пробегом</a>
        </div>
<!--        <button class="btn btn-primary" @click="allModels()">All Models</button>-->
        <div class="row">
            <div class="all_model col-9 row">
                <div class="col-3 model" v-for="(model, key) in models" :key="key">
                    <a href="#" class="text-left" @click.prevent="">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="model.image">
                        <h2>{{model.name}}</h2>
                        <h3 v-if="model.hybrid">+ Гибрид</h3>
                    </a>

                </div>
            </div>

            <div class="col-3 buyers_tools text-left">
                <h2>Инструменты покупателя</h2>
                <ol>
                    <li class="servies">
                        <a href="#">
                            <i class="fas fa-oil-can"></i>
                            <span>Специальные сервисные компании</span>
                        </a>
                    </li>
                    <li class="dilers">
                        <a href="#">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Официальные дилеры</span>
                        </a>
                    </li>
                    <li class="contact">
                        <a href="#">
                            <i class="fas fa-phone"></i>
                            <span>Связаться с нами</span>
                        </a>
                    </li>
                    <li class="test_drive">
                        <a href="#">
                            <i class="far fa-calendar-alt"></i>
                            <span>Заказать тест-драйв</span>
                        </a>
                    </li>
                    <li class="download">
                        <a href="#">
                            <i class="far fa-file-alt"></i>
                            <span>Загрузить брошуры</span>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "AllModell",
        data() {
            return {
                models: [],
            }
        },

        created() {
            this.models = this.getModel();
            console.log(this.models);
        },

        methods: {
            allModels() {
                this.models = this.getModel();
                console.log(this.models);
            },

            getModel() {
                axios({
                    method: 'get',
                    // url: "http://lara.toyota.nikolaev.ua/all_model",
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    console.log(response.data);
                    this.models = response.data;
                    // return response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка");
                    console.log(error);
                })

            },
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
            padding: 0 44px 0 74px;
            .all_model {
                padding: 15px;
                margin-top: 20px;
                .model {
                    padding: 20px;
                    margin-bottom: 28px;
                    align-self: flex-end;
                    a {
                        display: block;
                        border-bottom: 1px solid #D7D7D7;
                        text-decoration: none;
                        img {
                            width: 90%;
                        }
                        h2 {
                            font-size: 1.3rem;
                            margin-top: 15px;
                            color: $font_color;
                        }
                        h3 {
                            font-size: 1.2rem;
                            text-transform: uppercase;
                            color: #00A0F0;
                        }
                    }

                }
            }
            .buyers_tools {
                font-size: 1.5rem;
                color: $font_color;
                padding: 25px;
                h2 {
                    font-size: 1.5rem;
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

</style>