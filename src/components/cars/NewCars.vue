<template>
    <main class="container-fluid">
        <header><h1>Виберіть свою наступну Toyota</h1></header>

        <model v-for="(model, key) in models"
               :key="key"
               :id="model.id"
        ></model>

<!--        <section v-for="(model, key) in models" :key="key">-->
<!--{{model}}-->
<!--        </section>-->

    </main>
</template>

<script>
    import Model from "./Model";
    import axios from "axios";

    export default {
        name: "NewCar",

        components: {
            Model,
        },

        data() {
            return {
                models: [],
            }
        },

        created() {
            this.getModel();
        },


        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            getModel() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    this.models = response.data;
                    // console.log(this.models);
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
            },

        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
    }

</style>