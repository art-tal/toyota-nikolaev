<template>
    <section class="container">
        <button class="btn btn-primary" @click="allModels()">All Models</button>
        <div class="row">
            <div class="col-3" v-for="(model, key) in models" :key="key">
                <img :src="model.image" :alt="model.image">
                <p>{{model.name}}</p>
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
                    url: "http://lara.toyota.nikolaev.ua/all_model",
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

<style scoped>

</style>