<template>
    <section class="container-fluid">
        <header>
            <h1>
                Оригінальні аксесуари Toyota
                <h2>Додаткове обладнання, що створює індивідуальність</h2>
            </h1>
        </header>

        <div class="body container">
            <h2>Оригінальні аксесуари Toyota допоможуть вам отримувати нові враження від кожної поїздки на своєму автомобілі. Завдяки чималому асортименту додаткового обладнання виробництва компанії «Тойота» ви з легкістю зможете додати індивідуальності своєму автомобілю, зробити його ще більш практичним.</h2>

            <div class="row models">
                <article
                        class="col-lg-3 col-md-6 col-12 model"
                        v-for="(model,key) in models"
                        :key="key"
                        @click="goSelectModel(model)"
                >
                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="model.image">
                    <h3 class="text-lg-left text-center">Оригінальні аксесуари для Toyota {{model.name}}</h3>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AccessoriesGeneral",
        data() {
            return {
                models: [],
            }
        },

        created() {
            this.getModel();
        },

        methods: {
            getModel() {
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

            goSelectModel(model) {
                this.$store.state.model = model;
                console.log(model);
                // this.$router.push({name: "selectModel"});
                localStorage.id = model.id;
                localStorage.model = JSON.stringify(model);
                this.$router.push({name: "selectModel", params: {id: model.id}});
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        color: $font_color;

        header {
            height: 80vh;
            max-height: 60vw;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/header-aksesuary-1600x900_tcm-3046-1336869.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            margin-bottom: 50px;

            h1 {
                padding-top: 70px;
                font-size: 5.2rem;
                /*color: #ffffff;*/
                font-weight: bolder;
                h2 {
                    font-size: 3.4rem;
                    font-weight: bold;
                }
            }
        }

        .body.container {
            margin: 68px auto;
            h2 {
                font-size: 3.4rem;
                margin-bottom: 68px;
            }

            .row.models {
                article {
                    margin: 68px 0;
                    img {
                        width: 100%;
                    }
                    h3 {
                        font-size: 1.6rem;
                        margin-top: 20px;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid{
            header {
                height: 80vh;
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    padding-top: 30px;
                    font-size: 3.5rem;
                    h2 {
                        font-size: 2.2rem;
                        padding-top: 10px;
                    }
                }
            }
            .body.container {
                h2 {
                    font-size: 2.5rem;
                }

                .row.models {
                    article {
                        margin: 30px 0;
                        h3 {
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid {
            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    padding-top: 15px;
                    font-size: 3rem;
                    h2 {
                        font-size: 2.0rem;
                        padding-top: 5px;
                    }
                }
            }
            .body.container {
                margin: 30px auto;
                h2 {
                    font-size: 2.4rem;
                    margin-bottom: 30px;
                }

                .row.models {
                    article {
                        margin: 30px 0;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid {
            header {
                width: 100%;
                height: auto;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    padding: 10px 15px 120px;
                    font-size: 2.5rem;
                    color: $font_color;
                    h2 {
                        font-size: 1.8rem;
                        padding-top: 5px;
                    }
                }
            }

            .body.container {
                margin: 20px auto;
                h2 {
                    font-size: 2.0rem;
                    margin-bottom: 20px;
                }

                .row.models {
                    article {
                        margin: 30px 0;
                        h3 {
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }

</style>