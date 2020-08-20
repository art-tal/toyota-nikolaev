<template>
    <section class="container-fluid">
        <menu-to-accessories/>
        <header>
            <h1>
                Оригінальні аксесуари Toyota
            </h1>
            <h2>Додаткове обладнання, що створює індивідуальність</h2>
        </header>

        <div class="body container">
            <h2>Оригінальні аксесуари Toyota допоможуть вам отримувати нові враження від кожної поїздки на своєму автомобілі. Завдяки чималому асортименту додаткового обладнання виробництва компанії «Тойота» ви з легкістю зможете додати індивідуальності своєму автомобілю, зробити його ще більш практичним.</h2>

            <p>Оригінальні аксесуари Toyota допоможуть вам отримувати нові враження від кожної поїздки на своєму автомобілі. Завдяки багатому асортименту додаткового обладнання виробництва компанії «Тойота» ви з легкістю зможете додати індивідуальності своєму автомобілю, зробити його ще більш практичним, скористатися технічними новинками.</p>
            <h3>Переваги оригінальних автомобільних аксесуарів Тойота</h3>
            <p>У чому ж переваги оригінальних аксесуарів Тойота?</p>
            <ul>
                <li>
                    <p>Звичайно ж це якість без компромісів, які гарантують безпеку і зручність використання.</p>
                </li>
                <li>
                    <p>Надійність і довговічність.</p>
                </li>
                <li>
                    <p>Разроблені висококваліфікованими фахівцями спеціально для автомобілів Тойота і мають заводську гарантію.</p>
                </li>
                <li>
                    <p>Оригінальні автомобільні аксесуари Тойота здатні не тільки захистити деякі частини автомобіля, але і додати стилю та індивідуальності в його зовнішній вигляд.</p>
                </li>
                <li>
                    <p>Вирушаючи в подорожі-не забудьте взяти з собою не тільки надійного друга Тойота але і встановити сучасний багатофункціональний навігатор, кріплення для велосипеда, місткий багажний бокс і звичайно комфортне дитяче крісло для самих цікавих мандрівників з яким ваш малюк буде в цілковитій безпеці.</p>
                </li>
                <li>
                    <p>До Вашої уваги пропонується кріплення для iPad (АйПад) або DVD-екран (ДВД-екран), також Ви можете встановити і те й інше на дві різні спинки сидінь. DVD-екрани (ДВД-екрани) можуть відображати однаковий або різний контент, що дозволить кожному із пасажирів насолоджуватись саме тими функціями, які вони оберуть самостійно.</p>
                </li>
                <li>
                    <p>Зручність для користувача</p>
                </li>
                <li>
                    <p>Пульт дистанційного керування забезпечує зручність в управлінні, що дозволяє користувачу користуватись системою без зайвого регулювання ременів безпеки. Завдяки простому інтерфейсу та великим кнопкам система буде зрозумілою та легкою для користувача.</p>
                </li>
                <li>
                    <p>За допомогою підключення безпровідних навушників до Модульної Розважальної Системи користувач не буде відволікати водія та інших пасажирів.</p>
                </li>
            </ul>

            <h3>Замовляйте ОРИГІНАЛЬНІ аксесуари в Тойота Центр Миколаїв «КиТ-Т»</h3>

            <h4>Денис - Начальник відділу запасних часнит і аксесуарів: <a href="tel:+3800676174878">067 617 48 78 </a>, <a href="mailto:Denis.Goncharenko@kit-t.toyota.ua">Denis.Goncharenko@kit-t.toyota.ua </a></h4>
            <h4>Вадим - Консультант відділу запасних часнит і аксесуарів: <a href="tel:+38000676174880">067 617 48 80  </a>, <a href="mailto:Vadim.Moskalev@kit-t.toyota.ua">Vadim.Moskalev@kit-t.toyota.ua</a></h4>

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
    import MenuToAccessories from "./../../../components/service/originalAccessories/MenuToAccessories";
    import axios from "axios";

    export default {
        name: "AccessoriesGeneral",

        components: {
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
            /*background-image: url(//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/header-aksesuary-1600x900_tcm-3046-1336869.jpg);*/
            background-image: url(../../../img/background/header-aksesuary-1600x900_tcm-3046-1336869.jpg);
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

            h3 {
                font-size: 2.2rem;
                margin: 30px 0;
            }

            h4 {
                font-size: 1.8rem;
                text-align: left;
                margin-bottom: 15px;
            }

            p {
                font-size: 1.6rem;
                text-align: left;
                color: #595D60;
            }

            a {
                color: #595D60;
                text-decoration: underline;
                &:hover {
                    color: #E50000;
                }
            }

            ul {
                padding: 10px;
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
                background-image: url(../../../img/background-sm/header-aksesuary-1600x900_tcm-3046-1336869.jpg);
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
                background-image: url(../../../img/background-sm/header-aksesuary-1600x900_tcm-3046-1336869.jpg);
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