<template>
    <article class="step_1">

        <div class="body row">
            <form name="step_1" class="col-lg-7 col-12 text-left">
                <h3>
                    Виберіть бажану модель Toyota, щоб отримати онлайн консультацію
                </h3>
<!--                -->
                <select name="model" v-model="consultModel" @change="changeModel()">
                    <option v-for="(mod, key) in models"
                            :key="key"
                            :value="mod"
                    >
                        {{mod.name}}
                    </option>
                </select>

                <h4>Автомобіль з яким двигуном вас цікавить?</h4>
                <div class="engine_type d-flex justify-content-between">
                    <li class="hybrid text-center" v-if="hybrid">
                        <input id="hybrid" type="radio" v-model="consultEngine" value="Гібридний (бензин)">
                        <label for="hybrid">
                            <i class="fas fa-leaf"></i>
                            <span>Гібирний (бензин)</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="electric text-center" v-if="electric">
                        <input id="electric" type="radio" v-model="consultEngine" value="Електричний">
                        <label for="electric">
                            <img src="../../../img/bolt.png" alt="photo">
                            <span>Електричний</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="petrol text-center" v-if="petrol">
                        <input id="petrol" type="radio" v-model="consultEngine" value="Бензиновий">
                        <label for="petrol">
                            <i class="fas fa-gas-pump"></i>
                            <span>Бензиновий</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="disel text-center" v-if="diesel">
                        <input id="disel" type="radio" v-model="consultEngine" value="Дизельний">
                        <label for="disel">
                            <img src="../../../img/iconfinder_engine_172463-.png" alt="disel"><br>
                            <span>Дизельний</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="lpg text-center" v-if="lpg">
                        <input id="lpg" type="radio" v-model="consultEngine" value="LPG">
                        <label for="lpg">
                            <img src="../../../img/lpg.png" alt="LPG" style="width: 40px;"><br>
                            <span>LPG</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="whatever text-center" v-if="engines.length > 1">
                        <input id="whatever" type="radio" v-model="consultEngine" value="Не має значення">
                        <label for="whatever">
                            <i class="fas fa-random"></i>
                            <span>Без різниці</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>
                </div>
            </form>

            <div class="col-lg-5 col-12">
                <img :src="getPhoto" alt="model.name">
            </div>
        </div>

        <footer class="text-right">
            <router-link
                    tag="button"
                    class="bnt btn-danger"
                    exact
                    to="/consultation/step_2"
            >
                Продовжити
            </router-link>
        </footer>
    </article>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Step1",

        data() {
            return {
                models: null,
                engines: [],

                consultModel: {},
                consultEngine: {},

                equip: {},
                color: "",
                photo: "",


                hybrid: false,
                electric: false,
                petrol: false,
                diesel: false,
                lpg: false,
            }
        },

        created() {
            this.getModels();
            this.startPhoto();
            // this.getEquipment();
            this.findOutEngine();
            // this.getEngines();


        },

        computed: {
            getEngine() {
                // return this.$store.getters.getEngineAndGear;
                if(this.$store.getters.getEngineAndGear.eng_id) {
                    return this.$store.getters.getEngineAndGear;
                } else {
                    return JSON.parse(localStorage.transmission);
                }
            },

            getPhoto() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.photo;
                // return 'http://lara.toyota.nikolaev.ua/storage/' + this.consultModel.image;

            },
        },

        watch: {
            consultModel() {
                this.$store.state.consultation.model = this.consultModel;
                console.log(this.$store.state.consultation.model);
                return this.consultModel;
            },

            consultEngine() {
                this.$store.state.consultation.engineType = this.consultEngine;
                console.log(this.$store.state.consultation.engineType);
                return this.consultEngine;
            },
        },

        methods: {
            getModels() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    console.log(response.data);
                    this.models = response.data;
                    this.getConsultPosition();
                    this.getEquipment();
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },

            startPhoto() {
                if (this.$store.getters.colored.preview) {
                    this.photo = this.$store.getters.colored.preview;
                } else {
                    this.photo =  JSON.parse(localStorage.color).preview;
                }
            },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.consultModel.id}`)
                    .then( (response) => {
                        let equipments = response.data;
                        this.equip = equipments[0];
                        console.log(this.consultModel.id);
                        console.log(this.equip);

                        this.getEngines();
                        this.getColors();
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    } );
            },

            getEngines() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',
                    {params: {"id": this.equip.mod_id}},
                )
                    .then( (response) => {
                        this.engines = response.data;
                        console.log(this.engines);
                        this.findFuelType();
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");
                        console.log(error);
                    } );

            },

            getColors() {
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                    {params: {id: this.equip.mod_id} },
                )
                    .then( (response) => {
                        let colors = response.data;
                        this.color = colors[0];
                        this.photo = this.color.preview;
                        console.log(this.color);
                        // }

                        // eventEmitter.$emit('selectedColor', this.selectedColor.rgb);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные цвета");
                        console.log(error);
                    } )
            },

            getConsultPosition() {
                if (this.$store.state.model.name) {
                    this.consultModel = this.$store.getters.getModel;
                } else {
                    this.consultModel = this.models[0];
                }
            },

            changeModel() {
                this.petrol = false;
                this.diesel = false;
                this.electric = false;
                this.hybrid = false;
                this.lpg = false;
                this.$store.state.consultModel = this.consultModel;
                localStorage.consultModel = JSON.stringify( this.consultModel );
                console.log(this.$store.state.consultModel);
                this.getEquipment();
            },

            findOutEngine() {
                if (this.$store.state.equipment.mod_name) {
                    console.log(this.$store.state.equipment);
                    if ( this.$store.getters.equip.mod_name.includes('Hybrid') ) {
                        this.consultEngine = "Гибридный (бензин)";
                    } else {
                        this.consultEngine = "Бензиновый";
                    }
                } else {
                    this.consultEngine = "Не имеет значения";
                }


            },

            findFuelType() {
                this.engines.forEach( eng => {
                    switch (eng.fuel_type.toLowerCase()) {
                        case "Бензин".toLowerCase():
                            this.petrol = true;
                            console.log("Бензин", this.petrol);
                            break;
                        case "Дизел".toLowerCase():
                            this.diesel = true;
                            console.log("Дизел", this.diesel);
                            break;
                        case "Електро".toLowerCase():
                            this.electric = true;
                            console.log("Електро", this.electric);
                            break;
                        case "ГIбрид".toLowerCase():
                            this.hybrid = true;
                            console.log("ГIбрид", this.hybrid);
                            break;
                        case "LPG".toLowerCase():
                            this.lpg = true;
                            console.log("LPG", this.lpg);
                            break;
                    }
                } );

                if (this.consultModel.hybrid) {
                    this.hybrid = true;
                    console.log("ГIбрид", this.hybrid);
                }

            },
        },


    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.step_1 {
        padding: 36px 20px;
        color: $font_color;
        .body.row {
            form {
                h3 {
                    font-size: 2.2rem;
                    margin: 40px 0;
                    color: $font_color;
                }
                select {
                    width: 100%;
                    padding: 13px 35px 13px 16px;
                    border-radius: 4px;
                    font-size: 1.8rem;
                    background-color: #F0F0F0;
                    option {
                        padding: 7px 35px 9px 16px;
                        border: 1px solid #F0F0F0;
                    }
                }

                h4 {
                    margin: 30px 0;
                    font-size: 2.0rem;
                }

                div.engine_type {
                    list-style-type: none;
                    padding: 0;
                    li {
                        width: 100%;
                        margin: 0;
                        border-bottom: 4px solid #fff;
                        box-sizing: border-box;
                        label {
                            display: block;
                            position: relative;
                            margin: 15px;
                            font-size: 1.8rem;
                            color: #202020;
                            img {
                                width: 64px;
                                margin-bottom: 20px;
                                /*height: 64px;*/
                            }
                            span {
                                font-size: 1.6rem;
                            }
                            i {
                                font-size: 5rem;
                                color: #cccccc;
                                margin-bottom: 20px;
                                display: block;
                            }
                            i.fa-check {
                                color: #E50000;
                                font-size: 2rem;
                                display: none;
                                position: absolute;
                                top: 0;
                                right: 0;
                            }
                        }
                        input[type="radio"]{
                            display: none;
                            &:checked + label{
                                    i {
                                        display: block;
                                    }
                            }
                        }
                        &:hover {
                            border-bottom: 4px solid #E50000;
                        }
                    }

                }
            }

            div {
                img {
                    width: 100%;
                }
            }
        }

        footer {
            button {
                @include button;
                background-color: #E50000;
                font-size: 1.7rem;
            }
        }
    }

    @media ( min-width: 576px ) and ( max-width: 991.9px ) {
        article.step_1 {
            .body.row {
                flex-direction: column-reverse;
                form {
                    h3 {
                        font-size: 2.2rem;
                        margin: 40px 0;
                    }
                    select {
                        width: 100%;
                        padding: 13px 35px 13px 16px;
                        border-radius: 4px;
                        font-size: 1.8rem;
                        background-color: #F0F0F0;
                        option {
                            padding: 7px 35px 9px 16px;
                            border: 1px solid #F0F0F0;
                        }
                    }

                    h4 {
                        margin: 30px 0;
                        font-size: 2.0rem;
                    }

                    div.engine_type {
                        list-style-type: none;
                        padding: 0;
                        li {
                            width: 100%;
                            margin: 0 20px;
                            border-bottom: 4px solid #fff;
                            box-sizing: border-box;
                            label {
                                display: block;
                                position: relative;
                                margin: 15px;
                                font-size: 1.8rem;
                                color: #202020;
                                span {
                                    font-size: 1.6rem;
                                }
                                i {
                                    font-size: 5rem;
                                    color: #cccccc;
                                    margin-bottom: 20px;
                                    display: block;
                                }
                                i.fa-check {
                                    color: #E50000;
                                    font-size: 2rem;
                                    display: none;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                }
                            }
                            input[type="radio"]{
                                display: none;
                                &:checked + label{
                                    i {
                                        display: block;
                                    }
                                }
                            }
                            &:hover {
                                border-bottom: 4px solid #E50000;
                            }
                        }

                    }
                }
            }

            footer {
                button {
                    @include button;
                    background-color: #E50000;
                    font-size: 1.7rem;
                }
            }
        }
    }

    @media ( max-width: 575.9px ) {
        article.step_1 {
            min-width: 350px;
            .body.row {
                flex-direction: column-reverse;
                form {
                    h3 {
                        font-size: 2.2rem;
                        margin: 40px 0;
                    }
                    select {
                        width: 100%;
                        padding: 13px 35px 13px 16px;
                        border-radius: 4px;
                        font-size: 1.8rem;
                        background-color: #F0F0F0;
                        option {
                            padding: 7px 35px 9px 16px;
                            border: 1px solid #F0F0F0;
                        }
                    }

                    h4 {
                        margin: 30px 0;
                        font-size: 2.0rem;
                    }

                    div.engine_type {
                        list-style-type: none;
                        padding: 0;
                        li {
                            width: 100%;
                            margin: 0 10px;
                            border-bottom: 4px solid #fff;
                            box-sizing: border-box;
                            label {
                                display: block;
                                position: relative;
                                margin: 15px;
                                font-size: 1.8rem;
                                color: #202020;
                                span {
                                    font-size: 1.6rem;
                                }
                                i {
                                    font-size: 5rem;
                                    color: #cccccc;
                                    margin-bottom: 20px;
                                    display: block;
                                }
                                i.fa-check {
                                    color: #E50000;
                                    font-size: 2rem;
                                    display: none;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                }
                            }
                            input[type="radio"]{
                                display: none;
                                &:checked + label{
                                    i {
                                        display: block;
                                    }
                                }
                            }
                            &:hover {
                                border-bottom: 4px solid #E50000;
                            }
                        }

                    }
                }
            }

            footer {
                button {
                    @include button;
                    width: 100%;
                    margin-top: 20px;
                    background-color: #E50000;
                    font-size: 1.7rem;
                }
            }
        }
    }

</style>