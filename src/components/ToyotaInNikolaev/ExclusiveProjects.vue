<template>
    <main>
        <menu-nikolaev/>
        <header>
            <h1>Наші укслюзивні проекти</h1>
        </header>

        <div class="body container row  justify-content-around">

            <div class="card col-lg-5 col-12"
                 v-for="(ex, key) in projects"
                 :key="key"
                 @click="goToExclusiveCar(ex)"
            >
                <div class="card-img-top" :style="'background-image: url(http://lara.toyota.nikolaev.ua/storage/' + ex.preview + ')'" ></div>
                <div class="card-body">
                    <h5 class="card-title">{{ex.name}}</h5>
                    <p class="card-text">{{ex.description}}</p>
                </div>
            </div>
        </div>


    </main>
</template>

<script>
    import MenuNikolaev from "./../../components/ToyotaInNikolaev/MenuNikolaev";
    import axios from "axios"
    export default {
        name: "ExclusiveProjects",

        components: {
            MenuNikolaev
        },

        data() {
            return {
                projects: [],
            }
        },

        created() {
            this.getExclusiveProjects();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },

        methods: {
            getExclusiveProjects() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/exclusives`)
                .then( (response) => {
                    this.projects = response.data;
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки проектов");
                    console.log(error);
                } )
            },

            getSlides(images) {
                return JSON.parse(images);
            },

            goToExclusiveCar(car) {
                this.$router.push({name: 'exclusive_car', params: {car: car}});
            }

        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    * {
        color: $font_color;
        margin: 0;
        padding: 0;
    }



    main {
        background-color: #f0f0f0;
        header {
            padding-top: 50px;
            width: 100%;
            h1 {
                font-size: 4.5rem;
                font-weight: bolder;
            }
        }

        .body.container {
            margin: 0 auto 30px;

            .card {
                margin: 40px 15px;
                padding: 0;
                cursor: pointer;
                .card-img-top {
                    margin: 0;
                    width: 100%;
                    height: 30vw;
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                }
                .card-body {
                    padding: 15px;
                    h5.card-title {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    p.card-text {
                        font-size: 1.6rem;
                        color: #595D60;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {

            .body.container {
                .card {
                    margin: 30px 0;
                    .card-img-top {
                        height: 50vw;
                    }
                    }
                }
            }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header {
                padding-top: 25px;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body.container {
                .card {
                    margin: 30px 0;
                    .card-img-top {
                        height: 60vw;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header {
                padding-top: 25px;
                h1 {
                    font-size: 3rem;
                }
            }

            .body.container {
                .card {
                    margin: 30px 15px;
                    .card-img-top {
                        height: 75vw;
                    }
                    .card-body {
                        h5.card-title {
                            font-size: 1.8rem;
                        }
                        p.card-text {
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }


</style>