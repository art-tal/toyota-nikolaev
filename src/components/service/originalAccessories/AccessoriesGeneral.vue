<template>
    <section class="container-fluid">
        <sidebar></sidebar>
        <menu-to-accessories/>
        <header>
            <h1>
                Оригінальні аксесуари Toyota
            </h1>
            <h2>Додаткове обладнання, що створює індивідуальність</h2>
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
    import Sidebar from "../../permanent/Sidebar";
    import MenuToAccessories from "./../../../components/service/originalAccessories/MenuToAccessories";
    import axios from "axios";

    export default {
        name: "AccessoriesGeneral",

        components: {
            Sidebar,
            MenuToAccessories
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
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })

            },

            goSelectModel(model) {
                this.$store.state.model = model;
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
            @include header-xl;
            max-height: 60vw;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/header-aksesuary-1600x900_tcm-3046-1336869.jpg');
            margin-bottom: 50px;

            h1 {
                padding-top: 70px;
                text-align: center;
            }
            h2 {
                text-align: center;
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
                @include header-lg;
                height: 80vh;
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                @include header-md;
                h1 {
                    padding-top: 30px;
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
                @include header-sm;
                h1 {
                    padding-top: 15px;
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
                @include header-xs;
                width: 100%;
                h1 {
                    width: 100%;
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