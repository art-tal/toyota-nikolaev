<template>
    <article class="step_1">

        <div class="body row">
            <form name="step_1" class="col-lg-7 col-12 text-left">
                <h3>
                    Выберите дату и желаемую модель Toyota, что бы получить онлайн консультацию
                </h3>
<!--                -->
                <select name="model" v-model="consultModel" @change="changeModel()">
                    <option v-for="(mod, key) in models"
                            :key="key"
                            :value="mod"
                    >
                        {{mod.name}}
                    </option>
                </select>

                <h4>Автомобиль с каким двигателем вас интересует?</h4>
                <div class="engine_type d-flex justify-content-between">
                    <li class="hybrid text-center">
                        <input id="hybrid" type="radio" v-model="consultEngine" value="Гибридный (бензин)">
                        <label for="hybrid">
                            <i class="fas fa-leaf"></i>
                            <span>Гибирный (бензин)</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>
                    <li class="petrol text-center">
                        <input id="petrol" type="radio" v-model="consultEngine" value="Бензиновый">
                        <label for="petrol">
                            <i class="fas fa-gas-pump"></i>
                            <span>Бензиновый</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>
                    <li class="whatever text-center">
                        <input id="whatever" type="radio" v-model="consultEngine" value="Не имеет значения">
                        <label for="whatever">
                            <i class="fas fa-random"></i>
                            <span>Не имеет значения </span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>
                </div>
            </form>

            <div class="col-lg-5 col-12">
                <img :src="getPhoto" alt="model.name">
            </div>
        </div>

        <footer class="text-right">
            <router-link
                    tag="button"
                    class="bnt btn-danger"
                    exact
                    to="/configurator/consultation/step_2"
            >
                Продолжить
            </router-link>
        </footer>
    </article>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Step1",

        data() {
            return {
                models: null,

                consultModel: {},
                consultEngine: {},
            }
        },

        created() {
            this.getModels();
            this.consultModel = this.$store.getters.getModel;
            this.findOutEngine();
        },

        computed: {
            getEngine() {
                return this.$store.getters.getEngineAndGear;
            },

            getPhoto() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.consultModel.image
            },
        },

        watch: {
            consultModel() {
                this.$store.state.consultation.model = this.consultModel;
                console.log(this.$store.state.consultation.model);
                return this.consultModel;
            },

            consultEngine() {
                this.$store.state.consultation.engineType = this.consultEngine;
                console.log(this.$store.state.consultation.engineType);
                return this.consultEngine;
            },
        },

        methods: {
            getModels() {
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

            changeModel() {
                this.$store.state.consultModel = this.consultModel;
                localStorage.consultModel = this.consultModel;
                console.log(this.$store.state.consultModel);
            },

            findOutEngine() {
                if ( this.$store.getters.equip.mod_name.includes('Hybrid') ) {
                    this.consultEngine = "Гибридный (бензин)";
                } else {
                    this.consultEngine = "Бензиновый";
                }
            },
        },


    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.step_1 {
        padding: 36px 20px;
        color: $font_color;
        .body.row {
            form {
                h3 {
                    font-size: 2.2rem;
                    margin: 40px 0;
                }
                select {
                    width: 100%;
                    padding: 13px 35px 13px 16px;
                    border-radius: 4px;
                    font-size: 1.8rem;
                    background-color: #F0F0F0;
                    option {
                        padding: 7px 35px 9px 16px;
                        border: 1px solid #F0F0F0;
                    }
                }

                h4 {
                    margin: 30px 0;
                    font-size: 2.0rem;
                }

                div.engine_type {
                    list-style-type: none;
                    padding: 0;
                    li {
                        width: 100%;
                        margin: 0 20px;
                        border-bottom: 4px solid #fff;
                        box-sizing: border-box;
                        label {
                            display: block;
                            position: relative;
                            margin: 15px;
                            font-size: 1.8rem;
                            color: #202020;
                            span {
                                font-size: 1.6rem;
                            }
                            i {
                                font-size: 5rem;
                                color: #cccccc;
                                margin-bottom: 20px;
                                display: block;
                            }
                            i.fa-check {
                                color: #E50000;
                                font-size: 2rem;
                                display: none;
                                position: absolute;
                                top: 0;
                                right: 0;
                            }
                        }
                        input[type="radio"]{
                            display: none;
                            &:checked + label{
                                    i {
                                        display: block;
                                    }
                            }
                        }
                        &:hover {
                            border-bottom: 4px solid #E50000;
                        }
                    }

                }
            }
        }

        footer {
            button {
                @include button;
                background-color: #E50000;
                font-size: 1.7rem;
            }
        }
    }

    @media ( min-width: 576px ) and ( max-width: 991.9px ) {
        article.step_1 {
            min-width: 420px;
            .body.row {
                flex-direction: column-reverse;
                form {
                    h3 {
                        font-size: 2.2rem;
                        margin: 40px 0;
                    }
                    select {
                        width: 100%;
                        padding: 13px 35px 13px 16px;
                        border-radius: 4px;
                        font-size: 1.8rem;
                        background-color: #F0F0F0;
                        option {
                            padding: 7px 35px 9px 16px;
                            border: 1px solid #F0F0F0;
                        }
                    }

                    h4 {
                        margin: 30px 0;
                        font-size: 2.0rem;
                    }

                    div.engine_type {
                        list-style-type: none;
                        padding: 0;
                        li {
                            width: 100%;
                            margin: 0 20px;
                            border-bottom: 4px solid #fff;
                            box-sizing: border-box;
                            label {
                                display: block;
                                position: relative;
                                margin: 15px;
                                font-size: 1.8rem;
                                color: #202020;
                                span {
                                    font-size: 1.6rem;
                                }
                                i {
                                    font-size: 5rem;
                                    color: #cccccc;
                                    margin-bottom: 20px;
                                    display: block;
                                }
                                i.fa-check {
                                    color: #E50000;
                                    font-size: 2rem;
                                    display: none;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                }
                            }
                            input[type="radio"]{
                                display: none;
                                &:checked + label{
                                    i {
                                        display: block;
                                    }
                                }
                            }
                            &:hover {
                                border-bottom: 4px solid #E50000;
                            }
                        }

                    }
                }
            }

            footer {
                button {
                    @include button;
                    background-color: #E50000;
                    font-size: 1.7rem;
                }
            }
        }
    }

    @media ( max-width: 575.9px ) {
        article.step_1 {
            min-width: 420px;
            .body.row {
                flex-direction: column-reverse;
                form {
                    h3 {
                        font-size: 2.2rem;
                        margin: 40px 0;
                    }
                    select {
                        width: 100%;
                        padding: 13px 35px 13px 16px;
                        border-radius: 4px;
                        font-size: 1.8rem;
                        background-color: #F0F0F0;
                        option {
                            padding: 7px 35px 9px 16px;
                            border: 1px solid #F0F0F0;
                        }
                    }

                    h4 {
                        margin: 30px 0;
                        font-size: 2.0rem;
                    }

                    div.engine_type {
                        list-style-type: none;
                        padding: 0;
                        li {
                            width: 100%;
                            margin: 0 20px;
                            border-bottom: 4px solid #fff;
                            box-sizing: border-box;
                            label {
                                display: block;
                                position: relative;
                                margin: 15px;
                                font-size: 1.8rem;
                                color: #202020;
                                span {
                                    font-size: 1.6rem;
                                }
                                i {
                                    font-size: 5rem;
                                    color: #cccccc;
                                    margin-bottom: 20px;
                                    display: block;
                                }
                                i.fa-check {
                                    color: #E50000;
                                    font-size: 2rem;
                                    display: none;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                }
                            }
                            input[type="radio"]{
                                display: none;
                                &:checked + label{
                                    i {
                                        display: block;
                                    }
                                }
                            }
                            &:hover {
                                border-bottom: 4px solid #E50000;
                            }
                        }

                    }
                }
            }

            footer {
                button {
                    @include button;
                    background-color: #E50000;
                    font-size: 1.7rem;
                }
            }
        }
    }

</style>