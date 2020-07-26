<template>
    <main class="container-fluid">
        <header>
            <h1 class="container text-right">БРОШУРИ
                <h2 class="text-right">та каталоги аксесуарів</h2>
            </h1>
        </header>

        <section class="container text-left">
            <header>
                <h1 class="text-center">
                    Спеціально для Вас ми підготували брошури та каталоги аксесуарів
                </h1>
            </header>

            <div class="body row">
                <h2 class="col-12 text-center">Ви можете завантажити їх у форматі PDF</h2>

                <div class="col-3" v-for="(doc, key) in brochures" :key="key">
                    <div class="card">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + doc.preview" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ getModelName(doc.model_id) }}</h5>


                            <div class="accordion" id="accordion">

                                <div class="card" v-if="getDocs(doc.booklet).length">
                                    <div class="card-header p-0">
                                        <!--                        id="headingOne"-->
                                        <h5 class="m-0">
                                            <button class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" :data-target="'#collapse' + doc.id + 'booklet'" aria-expanded="true" :aria-controls="'collapse' + doc.id + 'booklet'">
                                                Брошура
                                            </button>
                                        </h5>
                                    </div>

                                    <div :id="'collapse' + doc.id + 'booklet'" class="collapse" :aria-labelledby="'heading' + doc.id + 'booklet'" data-parent="#accordion">
                                        <div class="card-body">

                                            <p
                                                    v-for="(acc, key) in getDocs(doc.booklet)"
                                                    :key="key"
                                            >
                                                <a :href="'http://lara.toyota.nikolaev.ua/storage/' + acc.download_link" class="btn btn-light" download><i class="far fa-file-pdf"></i> {{acc.original_name}}</a>
                                            </p>

                                        </div>
                                    </div>
                                </div>


                                <div class="card" v-if="getDocs(doc.accessory).length">
                                    <div class="card-header p-0" :id="'heading' + doc.id + 'accessory'">
                                        <h5 class="mb-0">
                                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" :data-target="'#collapse' + doc.id + 'accessory'" aria-expanded="false" :aria-controls="'collapse' + doc.id + 'accessory'">
                                                Аксессуари
                                            </button>
                                        </h5>
                                    </div>
                                    <div :id="'collapse' + doc.id + 'accessory'" class="collapse" :aria-labelledby="'heading' + doc.id + 'accessory'" data-parent="#accordion">
                                        <div class="card-body">
                                            <p
                                                    v-for="(acc, key) in getDocs(doc.accessory)"
                                                    :key="key"
                                            >
                                                <a :href="'http://lara.toyota.nikolaev.ua/storage/' + acc.download_link" class="btn btn-light" download><i class="far fa-file-pdf"></i> {{acc.original_name}}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="row">
                </div>



                </div>

            </div>
        </section>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: "DownloadBrochures",

        data() {
            return {
                brochures: [],
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Брошури та каталоги аксесуарів | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Брошури та каталоги аксесуарів | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Брошури та каталоги по автомобілям Тойота. Тут ви можете завантажити брошури та каталоги оригінальних аксесуарів для автомобілів Тойота`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Брошури та каталоги по автомобілям Тойота. Тут ви можете завантажити брошури та каталоги оригінальних аксесуарів для автомобілів Тойота`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота, україна, брошура, оригінальні аксесуари, аксесуари, модельний ряд, гібридний авто, яріс, ауріс, ауріс гібрид, ауріс універсал, королла, авенсіс, камрі, рав4, хайлендер, лендкрузер, ленд крузер, прадо, лендкрузер рпадо, лендкрузер 200, хайлакс, рав4 гібрид, yaris, auris, auris hybrid, auris touring sport, corolla, avensis, camry, rav4, rav4 hybrid, highlander, land cruiser, land cruiser prado, land cruiser 200, hilux, toyota`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота, україна, брошура, оригінальні аксесуари, аксесуари, модельний ряд, гібридний авто, яріс, ауріс, ауріс гібрид, ауріс універсал, королла, авенсіс, камрі, рав4, хайлендер, лендкрузер, ленд крузер, прадо, лендкрузер рпадо, лендкрузер 200, хайлакс, рав4 гібрид, yaris, auris, auris hybrid, auris touring sport, corolla, avensis, camry, rav4, rav4 hybrid, highlander, land cruiser, land cruiser prado, land cruiser 200, hilux, toyota`
                    },
                ],
            }
        },

        computed: {
            // photo() {
            //     return
            // },
        },

        created() {
            this.getBrochures();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            getBrochures() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/booklets"
                )
                .then( (responce) => {
                    this.brochures = responce.data;
                    console.log(this.brochures);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки документов");
                    console.log(error);
                } )

            },

            getDocs(obj) {
                // console.log( JSON.parse(obj) );
                return JSON.parse(obj);
            },

            getModelName(id) {
                let car;
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/all_model`,//?id=` + id,
                    {params: {id: id}},
                )
                .then( (response) => {
                    car = response.data[0];
                    console.log(car.name);
                    return car.name;
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки модели");
                    console.log(error);
                } );
                // .then( () => {return car.name;} );
                // return car.name;
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
        margin: 0;
        header {
            width: 100%;
            height: 80vh;
            padding-top: 70px;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B8%D1%82%D0%B8_%D0%B1%D1%80%D0%BE%D1%88%D1%83%D1%80%D1%83_1600x900_tcm-3046-830653.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: $font_color;

            h1 {
                width: 100%;
                padding: 15px;
                margin: 0 auto;
                font-size: 5.2rem;
                font-weight: bolder;
                text-align: left;

                h2 {
                    font-size: 3.4rem;
                    text-align: left;
                    padding-top: 16px;
                }
            }
        }

        section.container{
            color: $font_color;
            header {
                height: auto;
                background: none;
                font-size: 4.4rem;
            }

            .body.row {
                margin: 68px 0;
                h2 {
                    font-size: 4.4rem;
                    font-weight: bold;
                    margin-bottom: 50px;
                }

                div {
                    .card {
                        height: 100%;
                        .card-header {
                            h5 {
                                button {
                                    font-size: 1.8rem;
                                }
                            }
                        }
                        .card-body {
                            .accordion {
                                .card {
                                    .collapse {
                                        .card-body {
                                            p {
                                                margin: 0;
                                                a {
                                                    i {
                                                        margin-right: 15px;
                                                        color: #E50000;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


    }

</style>