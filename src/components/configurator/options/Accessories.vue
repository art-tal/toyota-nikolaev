<template>
    <section class="accessories container">

        <article class="forModel">
            <header>
                <h1 class="font-weight-bolder">Наиболее популярные</h1>
                <p>Откройте для себя наши наиболее популярные аксессуары для {{model.name}}</p>
            </header>
            <div class="body row">
                <div class="accessory col-md-4 col-sm-6 col-12 mb-4"
                     v-for="(accessory, key) in accessoriesForModel"
                     :key="key"
                >
                    <div class="card">
                        <img  :src="accessory.image" class="card-img-top" :alt="accessory.name">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{{accessory.name}}</h5>
                            <p class="card-text">{{accessory.cost}}&#8372;</p>
                        </div>


                        <div class="check">
                            <input type="checkbox"
                                   :id="'accesM' + accessory.id"
                                   :value="accessory"
                                   v-model="selectedAccessories"
                            >
                            <label :for="'accesM_' + accessory.id"
                                   @click="addToSelected(accessory)"
                            >
                                <i class="fas fa-check" v-if="accessory.checked"></i>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </article>

        <h2>Все аксессуары</h2>
        <h3>Просмотрите и добавте дополнительные аксессуары к вашему автомобилю</h3>

        <article class="forExterior">
            <header class="row">
                <h1 class="col-4 font-weight-bold">Эктерьер</h1>
                <p class="col-4 text-right">{{accessoriesForExterior.length}} аксессуаров</p>
            </header>
            <div class="body row">
                <div class="accessory col-md-4 col-sm-6 col-12 mb-4"
                     v-for="(accessory, key) in accessoriesForExterior"
                     :key="key"
                >
                    <div class="card">
                        <img  :src="accessory.image" class="card-img-top" :alt="accessory.name">
                        <div class="card-body">
                            <h5 class="card-title">{{accessory.name}}</h5>
                            <p class="card-text">{{accessory.cost}}&#8372;</p>
                        </div>


                        <div class="check">
                            <input type="checkbox" :id="'accesE_' + accessory.id">
                            <label :for="'accesE_' + accessory.id"
                                   @click="addToSelected(accessory)"
                            >
                                <i class="fas fa-check" v-if="accessory.checked"></i>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </article>

        <article class="forInterior">
            <header class="row">
                <h1 class="col-4 font-weight-bold">Интерьер</h1>
                <p class="col-4 text-right">{{accessoriesForInterior.length}} аксессуаров</p>
            </header>
            <div class="body row">
                <div class="accessory col-md-4 col-sm-6 col-12 mb-4"
                     v-for="(accessory, key) in accessoriesForInterior"
                     :key="key"
                >
                    <div class="card">
                        <img  :src="accessory.image" class="card-img-top" :alt="accessory.name">
                        <div class="card-body">
                            <h5 class="card-title">{{accessory.name}}</h5>
                            <p class="card-text">{{accessory.cost}}&#8372;</p>
                        </div>


                        <div class="check">
                            <input type="checkbox" :id="'accesI_' + accessory.id">
                            <label :for="'accesI_' + accessory.id"
                                   @click="addToSelected(accessory)"
                            >
                                <i class="fas fa-check" v-if="accessory.checked"></i>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </article>

    </section>

</template>

<script>
    // import axios from "axios";

    export default {
        name: "Accessories",

        data() {
            return {
                id: null,
                mod_id: null,
                model: null,

                accessoriesForModel: [],
                accessoriesForInterior: [],
                accessoriesForExterior: [],

                selectedAccessories: [],
            }
        },

        created() {
            this.id = localStorage.id;
            this.mod_id = localStorage.mod_id;
            this.model = JSON.parse( localStorage.model );
            this.getAccessoriesForModel();
            this.getAccessoriesForExterior();
            this.getAccessoriesForInterior();
        },

        // watch() {
        //     console.log(this.selectedAccessories);
        //     return this.selectedAccessories;
        // },

        methods: {
            getAccessoriesForModel() {
                // axios.get(
                //     'http://lara.toyota.nikolaev.ua/ajax/',// пока не существует
                //     {params: {id: this.mod_id}}
                // )
                //     .then( (response) => {
                //         console.log(response);
                //     } )
                //     .catch( (error) => {
                //         console.log(error);
                //     } );

                /////////////////////////////////////ЗАГЛУШКА
                this.accessoriesForModel = [
                    {
                        id: 1,
                        name: "Накладки порогов с илюминацией",
                        image: "//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG",
                        cost: "10 727,05",
                        checked: false
                    },
                    {

                        id: 2,
                        name: "Секретные гайки",
                        image: "//t1-carassets.toyota-europe.com/9b31bc45-2228-40dc-9f60-1490680a9b77.JPG",
                        cost: "1025,30",
                        checked: false
                    },
                    {

                        id: 3,
                        name: "Резиновые коврики салона, чорные",
                        image: "//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG",
                        cost: "3759,23",
                        checked: false
                    },
                    {

                        id: 4,
                        name: "Вертикальная сетка крепления груза",
                        image: "//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG",
                        cost: "1244,71",
                        checked: false
                    },
                    {

                        id: 5,
                        name: "Дефлектор капота",
                        image: "//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG",
                        cost: "2901,92",
                        checked: false
                    },
                    {

                        id: 6,
                        name: "Дефлектор окон с хромовой окантовкой",
                        image: "//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG",
                        cost: "6771,14",
                        checked: false
                    },
                ];
                /////////////////////////////////////

            },

            getAccessoriesForInterior() {
                // axios.get('http://lara.toyota.nikolaev.ua/ajax/--')//не существует
                //     .then( (response) => {
                //         console.log(response);
                //     } )
                //     .catch( (error) => {
                //         console.log(error);
                //     } );

                /////////////////////////////////////ЗАГЛУШКА
                this.accessoriesForInterior = [
                    {
                        id: 1,
                        name: "Накладки порогов с илюминацией",
                        image: "//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG",
                        cost: "10 727,05",
                        checked: false
                    },
                    {

                        id: 2,
                        name: "Секретные гайки",
                        image: "//t1-carassets.toyota-europe.com/9b31bc45-2228-40dc-9f60-1490680a9b77.JPG",
                        cost: "1025,30",
                        checked: false
                    },
                    {

                        id: 3,
                        name: "Резиновые коврики салона, чорные",
                        image: "//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG",
                        cost: "3759,23",
                        checked: false
                    },
                    {

                        id: 4,
                        name: "Вертикальная сетка крепления груза",
                        image: "//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG",
                        cost: "1244,71",
                        checked: false
                    },
                    {

                        id: 5,
                        name: "Дефлектор капота",
                        image: "//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG",
                        cost: "2901,92",
                        checked: false
                    },
                    {

                        id: 6,
                        name: "Дефлектор окон с хромовой окантовкой",
                        image: "//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG",
                        cost: "6771,14",
                        checked: false
                    },
                ]
                /////////////////////////////////////
            },

            getAccessoriesForExterior() {
                // axios.get('http://lara.toyota.nikolaev.ua/ajax/--')//не существует
                //     .then( (response) => {
                //         console.log(response);
                //     } )
                //     .catch( (error) => {
                //         console.log(error);
                //     } );

                /////////////////////////////////////ЗАГЛУШКА
                this.accessoriesForExterior = [
                    {
                        id: 1,
                        name: "Накладки порогов с илюминацией",
                        image: "//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG",
                        cost: "10 727,05",
                        checked: false
                    },
                    {

                        id: 2,
                        name: "Секретные гайки",
                        image: "//t1-carassets.toyota-europe.com/9b31bc45-2228-40dc-9f60-1490680a9b77.JPG",
                        cost: "1025,30",
                        checked: false
                    },
                    {

                        id: 3,
                        name: "Резиновые коврики салона, чорные",
                        image: "//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG",
                        cost: "3759,23",
                        checked: false
                    },
                    {

                        id: 4,
                        name: "Вертикальная сетка крепления груза",
                        image: "//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG",
                        cost: "1244,71",
                        checked: false
                    },
                    {

                        id: 5,
                        name: "Дефлектор капота",
                        image: "//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG",
                        cost: "2901,92",
                        checked: false
                    },
                    {

                        id: 6,
                        name: "Дефлектор окон с хромовой окантовкой",
                        image: "//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG",
                        cost: "6771,14",
                        checked: false
                    },
                ]
                /////////////////////////////////////
            },

            addToSelected(accessory) {
                accessory.checked = true
                this.selectedAccessories.push(accessory);
                console.log(this.selectedAccessories);
                localStorage.selectedAccessories = JSON.stringify( this.selectedAccessories);
                this.$store.state.selectedAccessories = this.selectedAccessories;
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.accessories.container {
        article.forModel {
            header {
                width: 100%;
                h1 {
                    font-size: 3.4rem;

                    font-family: toyotadisplay_bd, Arial, Helvetica, sans-serif;
                }
                p {
                    margin: 24px 0 40px;
                    padding-top: 6px;
                    font-size: 1.6rem;
                    color: #595D60;
                }
            }
        }
        h2 {
            font-size: 3.4rem;
            color: #202020;
            margin-top: 40px;
        }
        h3 {
            width: 50%;
            font-size: 2.25rem;
            color: #595D60;
            margin: 15px 0 20px;
        }
        article {
            padding-bottom: 40px;
            header {
                justify-content: space-between;
                color: #202020;
                padding-bottom: 24px;
                margin-top: 20px;
                h1 {
                    font-size: 1.7rem;
                }
                p {
                    font-size: 1.5rem;
                }
            }
        }
    }

    .accessory {
        .card {
            border-radius: 2px;
            position: relative;
            height: 100%;
            img {
                border-radius: 2px 2px 0 0;
            }
            .card-body {
                background-color: #F0F0F0;
                padding: 20px 18px;
                font-size: 1.3rem;
                h5 {
                    color: #202020;
                    margin: 0;
                }
                p {
                    color: #6c7073;
                }
            }
            .check {
                position: absolute;
                top: 15px;
                right: 15px;
                input {
                    display: none;
                }
                label {
                    box-sizing: border-box;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #e0e0e0;
                    border-radius: 3px;
                    background-color: #fff;
                    i {
                        font-size: 1.5rem;
                        color: #E50000;
                    }
                }
            }
        }
    }

</style>