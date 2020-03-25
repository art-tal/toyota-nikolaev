<template>
    <article class="step_1">
        <header class="text-left">
            <h1>Заказать онлайн консультацию</h1>
        </header>

        <div class="body row">
            <div class="col-7 text-left">
                <h3>
                    Выберите дату и желаемую модель Toyota, что бы получить онлайн консультацию
                </h3>
<!--                -->
                <select name="model" v-model="model" @change="changeModel()">
                    <option v-for="(mod, key) in models"
                            :key="key"
                            :value="mod"
                    >
                        {{mod.name}}
                    </option>
                </select>

                <h4>Автомобиль с каким двигателем вас интересует?</h4>
                <ul class="row engineType">
                    <li class="hybrid col">
                        <i></i>
                        <p>Гибирный (бензин)</p>
                    </li>
                    <li class="petrol col">
                        <i class="fas fa-gas-pump"></i>
                        <p>Бензин</p>
                    </li>
                    <li class="col">
                        <i class="fas fa-random"></i>
                        <p>Не имеет значения</p>
                    </li>
                </ul>
            </div>

            <div class="col-5">
                <img :src="photo" alt="model.name">
            </div>
        </div>

        <footer>

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
                // model: null,
            }
        },

        created() {
            this.getModels();
        },

        computed: {
            getModel() {
                return this.$store.getters.getModel;
            },

            photo() {
                return this.$store.getters.modelImage;
            },
        },

        watch: {
            // model() {
            //
            // },
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
                this.$store.state.model = this.model;
                console.log(this.$store.state.model);
            },
        },


    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.step_1 {
        padding: 36px 15px;
        color: $font_color;
        header {
            margin-bottom: 40px;
            h1 {
                font-size: 4.4rem;
            }
        }
        .body.row {
            div {
                h3 {
                    font-size: 2.2rem;
                    margin-bottom: 40px;
                }
                select {
                    width: 100%;
                    padding: 7px 35px 9px 16px;
                    font-size: 1.5rem;
                    background-color: #F0F0F0;
                    option {
                        padding: 7px 35px 9px 16px;
                        border: 1px solid #F0F0F0;
                    }
                }
            }
        }
    }

</style>