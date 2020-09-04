<template>
    <section class="mapSite container">
        <ul class="main_list">
            <li>
                <h4>Автомобілі</h4>
                <ul class="sub">
                    <li class="item"
                        v-for="(model, key) in models"
                        :key="key"
                    >
                        <a href="#" @click.prevent="goSelectModel(model)"></a>
                        {{model.name}}
                    </li>
                </ul>
            </li>

            <li>
                <h4>Покупцям</h4>
                <ul class="sub">
                    <li class="item">
                        <router-link
                            exact
                            tag="a"
                            active-class="active"
                            to="/insurance"

                        >Тойота Страхування</router-link>
                    </li>
                    <li class="item">
                        <router-link
                            exact
                            tag="a"
                            active-class="active"
                            to="/credit"
                        >Toyota Кредит</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/general"
                        >Корпоративні продажі</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <h4>Сервіс</h4>
                <ul class="sub">
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/maintenance_general"
                        >Технічне обслуговування</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/accessories_general"
                        >Оригінальні аксесуари</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/original_spare_parts_general"
                        >Оригінальні запчастини</router-link>
                    </li>
                    <li class="item">
                        <span>Допомога в дорозі</span>
                    </li>
                </ul>
            </li>
            <li>
                <h4>
                    <a href="https://collection.toyota.ua/"
                       target="_blank"
                    >
                        <span>Сувенірна продукція</span>
                    </a>
                </h4>
            </li>
            <li>
                <h4>Чому Toyota?</h4>
                <ul class="sub">
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/world_of_toyota/news"
                        >Світ «Тойоти»</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/quality_guarantee"
                        >Гарантія якості</router-link>
                    </li>
                    <li class="item">
                        <a
                                href="https://hybrid.toyota.ua/"
                                target="_blank"
                        >Гібридні інновації</a>
                    </li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/ecology"
                        >Турбота про навколишнє середовище</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <h4>Toyota в Миколаєві</h4>
                <ul class="sub">
                    <li class="item">
                        <router-link
                            exact
                            tag="a"
                            active-class="active"
                            to="/toyota_mykolaiv"
                    >Тойота Центр Миколаїв «КиТ-Т»</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/cars_available"
                        >Авто в наявносі</router-link>
                    </li>
                    <li class="item"><router-link
                            tag="a"
                            exact
                            active-class="active"
                            to="/exclusive_projects"
                    >Екслюзивні проекти</router-link></li>
                    <li class="item">
                        <router-link
                                exact
                                tag="a"
                                active-class="active"
                                to="/about"
                        >Про нас</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/workers"
                        >Наші фахівці</router-link>
                    </li>
                    <li class="item">
                        <router-link
                                tag="a"
                                exact
                                active-class="active"
                                to="/where"
                        >Як нас знайти</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    import axios from "axios"

    export default {
        name: "mapSite",

        data() {
            return {
                models: [],
            }
        },

        created() {
            this.getModels();
        },

        methods: {
            getModels() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/all_model"
                )
                .then( (response) => {
                    this.models = response.data;
                    console.log(this.models);
                } )
            },

            goSelectModel(model) {
                this.$store.state.model = model;
                // this.dumpingOfStorage();
                localStorage.id = model.id;
                localStorage.slug = model.slug;
                localStorage.model = JSON.stringify(model);
                this.$router.push({name: "models", params: {slug: model.slug}});
                // location.reload();
                // this.$store.mutations.mutationRender();
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    *{
        color: $font_color;
    }

    section.mapSite.container {
        margin: 20px auto;
        padding: 0;
        ul.main_list {
            list-style-type: none;
            padding: 0;
            text-align: left;
            height: 240px;
            column-count: 4;
            column-gap: 10px;
            li {
                margin: 15px 0;
                padding: 0;
                h4 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    a {
                        padding: 0;
                    }
                }
                ul.sub {
                    list-style-type: none;
                    padding: 0;
                    li.item {
                        margin: 5px 0;
                        font-size: 1.3rem;
                    }
                }
            }

        }
    }
    a {
        &:hover{
            color: $font_color;
            text-decoration: underline;
        }
    }

</style>