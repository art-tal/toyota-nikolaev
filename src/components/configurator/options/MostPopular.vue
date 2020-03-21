<template>
    <section content="most_popular container">
        <div class="row">
            <article class="col-md-8 col-12">
                <header>
                    <h1>Наиболее популярные</h1>
                    <h3>ОТкройте для себя наши наиболее популярные аксессуары для {{model.name}}</h3>
                </header>
                <div class="body row">
                    <div class="accessory col-md-4 col-sm-6 col-12 mb-4"
                         v-for="(accessory, key) in accessories"
                         :key="key"
                    >
                        <div class="card">
                            <img  :src="accessory.image" class="card-img-top" :alt="accessory.name">
                            <div class="card-body">
                                <h5 class="card-title">{{accessory.name}}</h5>
                                <p class="card-text">{{accessory.cost}}</p>
                            </div>


                            <div class="check">
                                <input type="checkbox" :id="'acces' + accessory.id">
                                <label :for="'acces' + accessory.id">
                                    <i class="fas fa-check"></i>
                                </label>
                            </div>
                        </div>
                    </div>

<!--                    <div class="accessory col-md-4 col-sm-6 col-12"-->
<!--                         v-for="(accessory, key) in accessories"-->
<!--                         :key="key"-->
<!--                    >-->
<!--                        <img :src="accessory.image" :alt="accessory.name">-->
<!--                        <div class="title">-->
<!--                            <h2>{{accessory.name}}</h2>-->
<!--                            <h4>{{accessory.cost}}</h4>-->
<!--                        </div>-->

<!--                        -->

<!--                    </div>-->
                </div>
            </article>

            <div class="col-md-4 col-12"></div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MostPopular",

        data() {
            return {
                id: null,
                mod_id: null,

                accessories: [],
                selectedAccessorys: [],
            }
        },

        created() {
            this.mod_id = localStorage.mod_id;
            this.id = localStorage.id;
            this.getAccessories();
        },

        methods: {
            getAccessories() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/mod",
                {id: this.mod_id},
                )
                .then( (response) => {
                    console.log(response);
                } )
                .catch( (error) => {
                    console.log(error);
                    /////////////////////////////////////ЗАГЛУШКА
                    this.accessories = [
                        {
                            id: 1,
                            name: "Накладки порогов с илюминацией",
                            image: "//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG",
                            cost: "10 727,05&#8372;",
                            checked: false
                        },
                        {

                            id: 2,
                            name: "Секретные гайки",
                            image: "//t1-carassets.toyota-europe.com/9b31bc45-2228-40dc-9f60-1490680a9b77.JPG",
                            cost: "1025,30&#8372;",
                            checked: false
                        },
                        {

                            id: 3,
                            name: "Резиновые коврики салона, чорные",
                            image: "//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG",
                            cost: "3759,23&#8372;",
                            checked: false
                        },
                        {

                            id: 4,
                            name: "Вертикальная сетка крепления груза",
                            image: "//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG",
                            cost: "1244,71&#8372;",
                            checked: false
                        },
                        {

                            id: 5,
                            name: "Дефлектор капота",
                            image: "//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG",
                            cost: "2901,92&#8372;",
                            checked: false
                        },
                        {

                            id: 6,
                            name: "Дефлектор окон с хромовой окантовкой",
                            image: "//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG",
                            cost: "6771,14&#8372;",
                            checked: false
                        },
                    ]
                    /////////////////////////////////////
                } )
            },
        },
    }
</script>

<style scoped>

</style>