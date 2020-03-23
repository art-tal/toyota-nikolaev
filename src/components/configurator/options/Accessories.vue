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

    import {eventEmitter} from "@/main";

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
            this.accessoriesCheck()
            eventEmitter.$on('checkAcc', () => { this.accessoriesCheck(); });
        },

        computed: {
            getSelectedAccessories() {
                return this.$store.getters.accessories;
            },
        },

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
                this.accessoriesForModel.forEach( (acc) => {acc.type = "for_model"} );
                /////////////////////////////////////
                // this.accessoriesCheck(this.accessoriesForModel);
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
                        name: "Универсальний держатель для планшета",
                        image: "//t1-carassets.toyota-europe.com/4e6580ff-e064-4937-a456-99cb936cbea0.JPG",
                        cost: "2543,28",
                        checked: false
                    },
                    {

                        id: 2,
                        name: "Накладки порогов з илюминацией",
                        image: "//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG",
                        cost: "10727,05",
                        checked: false
                    },
                    {

                        id: 3,
                        name: "Пепельница - маленький бокс",
                        image: "//t1-carassets.toyota-europe.com/468f660b-84c0-48cb-a8f6-8dc8bd5a48f8.JPG",
                        cost: "553,01",
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
                        name: "Органайзер",
                        image: "//t1-carassets.toyota-europe.com/75a95b2b-a0ee-4936-b473-f9f5e2bb4a7a.JPG",
                        cost: "1847,93",
                        checked: false
                    },
                    {

                        id: 6,
                        name: "Резиновые коврикисалона, чорные",
                        image: "//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG",
                        cost: "3759,23",
                        checked: false
                    },
                ];
                this.accessoriesForInterior.forEach( (acc) => {acc.type = "for_interior"} );
                /////////////////////////////////////
                // this.accessoriesCheck(this.accessoriesForInterior);
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
                        name: "Чехол для шин",
                        image: "//t1-carassets.toyota-europe.com/9fbb5166-d006-41c0-9a8f-2539a1b6453d.JPG",
                        cost: "1314,06",
                        checked: false
                    },
                    {

                        id: 2,
                        name: "Брызговики",
                        image: "//t1-carassets.toyota-europe.com/3ecc1883-c7e6-4b77-8834-44817958a08e.PNG",
                        cost: "2212,01",
                        checked: false
                    },
                    {

                        id: 3,
                        name: "Дефлектор окон с хромовой окантовкой",
                        image: "//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG",
                        cost: "6771,14",
                        checked: false
                    },
                    {

                        id: 4,
                        name: "Дефлектор капота",
                        image: "//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG",
                        cost: "2901,92",
                        checked: false
                    },
                    {

                        id: 5,
                        name: "Средство для защиты легкосплавных дисков Toyota ProTect",
                        image: "//t1-carassets.toyota-europe.com/2f52dcc1-cf50-43c4-aa35-3b111ac809a1.jpg",
                        cost: "7289,20",
                        checked: false
                    },
                    {

                        id: 6,
                        name: "Средство для длительной защиты кузова Toyota ProTect",
                        image: "//t1-carassets.toyota-europe.com/ddaee2dc-f31f-4840-911a-4a2df3f891c4.jpg",
                        cost: "4010,18",
                        checked: false
                    },
                ];
                this.accessoriesForExterior.forEach( (acc) => {acc.type = "for_exterior"} );
                /////////////////////////////////////
                // this.accessoriesCheck(this.accessoriesForExterior);
            },

            addToSelected(accessory) {
                accessory.checked = !accessory.checked;

                switch (accessory.type) {
                    case 'for_model':
                        this.addOrDel(accessory, this.accessoriesForModel);
                        break;
                    case 'for_exterior':
                        this.addOrDel(accessory, this.accessoriesForExterior);
                        break;
                    case 'for_interior':
                        this.addOrDel(accessory, this.accessoriesForInterior);
                        break;
                }

                console.log(this.selectedAccessories);
            },

            addOrDel(accessory, array){
                let index = array.findIndex( arr => arr.id === accessory.id);
                array[index].selected = !array[index].selected;
                if (array[index].selected) {
                    // this.selectedAccessories.push(array[index]);
                    this.$store.commit('addAccessories', array[index]);
                } else {
                    // let ind = this.selectedAccessories.findIndex( selAcc => selAcc.type === accessory.type && selAcc.id === accessory.id );
                    // this.selectedAccessories.splice(ind, 1);
                    this.$store.commit('delAccessories', accessory);
                }
                // this.$store.state.selectedAccessories = this.selectedAccessories;
                localStorage.selectedAccessories = JSON.stringify( this.selectedAccessories);
            },

            accessoriesCheck() {
                this.accessoriesForModel.forEach( afm => {afm.checked = false} );
                this.accessoriesForExterior.forEach( afe => {afe.checked = false} );
                this.accessoriesForInterior.forEach( afi => {afi.checked = false} );
                this.$store.getters.accessories.forEach( sA => {
                    switch (sA.type) {
                        case 'for_model':
                            this.checkedAcc(sA, this.accessoriesForModel);
                            break;
                        case 'for_exterior':
                            this.checkedAcc(sA, this.accessoriesForExterior);
                            break;
                        case 'for_interior':
                            this.checkedAcc(sA, this.accessoriesForInterior);
                            break;
                    }
                } );
                // this.selectedAccessories = JSON.parse(localStorage.selectedAccessories);
                // this.selectedAccessories.forEach( selAcc => {
                //     if (selAcc.type === array[0].type) {
                //         let index = array.findIndex( arr => arr.id === selAcc.id );
                //         array[index].checked = true;
                //         // console.log(array[index]);
                //     }
                // } ); // console.log(array);
                //
                // this.$store.state.selectedAccessories = JSON.parse( localStorage.selectedAccessories );
            },

            checkedAcc(sA, accessories) {
                accessories.forEach( acc => {
                    if (acc.id === sA.id) {acc.checked = !acc.checked}
                } )
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