<template>
    <section class="container-fluid">
        <div class="row car_type">
            <a href="#" class="new_car">Нові автомтобілі</a>
            <a href="#" class="old_car">Автомобілі с пробігом</a>
        </div>

        <div class="row">
            <div class="all_model col-lg-9 col-md-8 col-sm-12 row">
                    <div class="col-xl-3 col-lg-4 col-sm-6 model" v-for="(model, key) in models" :key="key">
                        <div
                                class="nav-link active text-left"
                                @click="goSelectModel(model)">
                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="model.image">
                            <h2>{{model.name}}</h2>
                            <h3 v-if="model.hybrid">+ Гібрид</h3>
                        </div>

                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-12 buyers_tools text-left">
                <div class="tools">
                    <h2 class="font-weight-bold">Інструменти покупця</h2>
                    <ol>
                        <li class="servies">
                            <a href="#">
                                <i class="fas fa-oil-can"></i>
                                <span>Спеціальні сервісні кампанії</span>
                            </a>
                        </li>
                        <li class="dilers">
                            <a href="#">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Офіційні дилери</span>
                            </a>
                        </li>
                        <li class="contact">
                            <a href="#">
                                <i class="fas fa-phone"></i>
                                <span>Зв’язатись з нами</span>
                            </a>
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
<!--                            <a href="#">-->
<!--                                <i class="far fa-calendar-alt"></i>-->
<!--                                <span>Замовити онлайн консультацію</span>-->
<!--                            </a>-->
                        </li>
                        <li class="download">
                            <a href="#">
                                <i class="far fa-file-alt"></i>
                                <span>Завантажити брошури</span>
                            </a>
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
            }
        },

        created() {
            this.getModel();
            // this.$store.state.car
        },

        methods: {
            getModel() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    console.log(response.data);
                    this.models = response.data;
                    // return response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модели");
                    console.log(error);
                })

            },

            goSelectModel(model) {
                this.$store.state.model = model;
                console.log(model);
                // this.$router.push({name: "selectModel"});
                localStorage.id = model.id;
                localStorage.model = JSON.stringify(model);
                this.$router.push({name: "selectModel", params: {id: model.id}});
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
                    div {
                        display: block;
                        border-bottom: 1px solid #D7D7D7;
                        text-decoration: none;
                        img {
                            width: 100%;
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
                        &:hover {
                            border-bottom: 1px solid #E50000;
                        }
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


    /*@media (min-width: 1200px) and (max-width: 1439.9px) {*/

    /*}*/

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            padding: 0;
            .car_type {
                padding: 6px 0px 6px;
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