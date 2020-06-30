<template>
    <main>
        <header>
            <h1>Наші укслюзивні проекти</h1>
        </header>

        <div class="body container">
            <section v-for="(ex, key) in projects" >

            </section>
        </div>


    </main>
</template>

<script>
    import axios from "axios"
    export default {
        name: "ExclusiveProjects",

        data() {
            return {
                projects: [],
            }
        },

        created() {
            this.getExclusiveProjects();
        },

        methods: {
            getExclusiveProjects() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/exclusives`)
                .then( (response) => {
                    this.projects = response.data;
                    console.log(this.projects);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки проектов");
                    console.log(error);
                } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';


</style>