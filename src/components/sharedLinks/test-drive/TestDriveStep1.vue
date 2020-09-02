<template>
    <article class="step_1 container">
        <test-drive-nav/>
        <hr>

        <header>
            <h1 class="text-left">ЗАМОВИТИ ТЕСТ-ДРАЙВ</h1>
        </header>

        <div class="body row">
            <form name="step_1" class="col-lg-7 col-12 text-left">
                <h3>
                    Виберіть бажану модель Toyota, щоб замовити тест-драйв
                </h3>
                <!--                -->
                <select name="model" v-model="testModel" @change="changeModel()">
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
                        <input id="hybrid" type="radio" v-model="testEngine" value="Гібридний (бензин)" @click="setTestEngine('Гібридний (бензин)')">
                        <label for="hybrid">
                            <i class="fas fa-leaf"></i>
                            <span>Гібирний (бензин)</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="electric text-center" v-if="electric">
                        <input id="electric" type="radio" v-model="testEngine" value="Електричний" @click="setTestEngine('Електричний')">
                        <label for="electric">
                            <img src="../../../img/icon/bolt.png" alt="photo">
                            <span>Електричний</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="petrol text-center" v-if="petrol">
                        <input id="petrol" type="radio" v-model="testEngine" value="Бензиновий" @click="setTestEngine('Бензиновий')">
                        <label for="petrol">
                            <i class="fas fa-gas-pump"></i>
                            <span>Бензиновий</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="disel text-center" v-if="diesel">
                        <input id="disel" type="radio" v-model="testEngine" value="Дизельний" @click="setTestEngine('Дизельний')">
                        <label for="disel">
                            <img src="../../../img/icon/iconfinder_engine_172463-.png" alt="disel"><br>
                            <span>Дизельний</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="lpg text-center" v-if="lpg">
                        <input id="lpg" type="radio" v-model="testEngine" value="LPG" @click="setTestEngine('LPG')">
                        <label for="lpg">
                            <img src="../../../img/icon/lpg.png" alt="LPG" style="width: 40px;"><br>
                            <span>LPG</span>
                            <i class="fas fa-check"></i>
                        </label>
                    </li>

                    <li class="whatever text-center" v-if="engines.length > 1">
                        <input id="whatever" type="radio" v-model="testEngine" value="Не має значення" @click="setTestEngine('Не має значення')">
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
                    to="/test_drive_step_2"
            >
                Продовжити
            </router-link>
        </footer>
    </article>
</template>

<script>
    import axios from "axios";
    import TestDriveNav from "./../../../components/sharedLinks/test-drive/TestDriveNav";

    export default {
        name: "TestDriveStep1",

        components: {
            TestDriveNav
        },

        data() {
            return {
                models: null,
                engines: [],

                testModel: {},
                testEngine: {},

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
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },

        computed: {
            getModel() {
                try {
                    if ( Object.keys(JSON.parse(localStorage.model)).length > 0 ) {
                        console.log(JSON.parse(localStorage.model));
                        return JSON.parse(localStorage.model);
                    } else {
                        return null;
                    }
                } catch (e) {
                    // console.log(e);
                    return null;
                }
            },

            getEngine() {
                if( Object.keys(this.$store.getters.getEngineAndGear) > 0) {
                    return this.$store.getters.getEngineAndGear;
                } else {
                    return JSON.parse(localStorage.transmission);
                }
            },

            getPhoto() {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + this.photo;
            },
        },

        watch: {
            testModel() {
                this.$store.state.testDrive.model = this.testModel;
                return this.testModel;
            },

            testEngine() {
                this.$store.state.testDrive.engineType = this.testEngine;
                return this.testEngine;
            },
        },

        methods: {
            getModels() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    this.models = response.data;
                    this.getTestPosition();
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },

            getTestPosition() {
                // try{
                //     if ( Object.keys(this.testModel).length > 0 ) {
                //         this.saveTestModel(this.getTestModel);
                //     } else {
                //         if ( Object.keys(this.$store.getters.getModel) > 0 ) {
                //             this.saveTestModel(this.$store.getters.getModel);
                //         } else if( Object.keys( JSON.parse(localStorage.testModel) ) > 0) {
                //             this.saveTestModel(JSON.parse(localStorage.testModel));
                //         } else if( Object.keys( JSON.parse(localStorage.model) ) > 0) {
                //             this.saveTestModel(JSON.parse(localStorage.model));
                //         }
                //         else {
                //             this.saveTestModel(this.models[0]);
                //         }
                //     }
                // } catch (e) {
                //     console.log(e);
                //     this.saveTestModel(this.models[0]);
                // }
                // this.getEquipment();


                try {
                    if ( Object.keys(this.getModel).length > 0 ) {
                        // this.testModel = this.models.find( (mod) => {
                        //     mod.name.toLowerCase() === this.getModel.name.toLowerCase()} );
                        // console.log(this.testModel);
                        // let car = this.models.find( (mod) => {
                        //     mod.name.toLowerCase() === this.getModel.name.toLowerCase()} );
                        let car;
                        this.models.forEach( (mod) => {
                            if( mod.name.toLowerCase() === this.getModel.name.toLowerCase() ) {
                                car = mod;
                            }
                            } );

                        this.saveTestModel(car);
                    } else {
                        console.log("models[0]");
                        this.saveTestModel(this.models[0]);
                    }
                }catch (e) {
                    this.saveTestModel(this.models[0]);
                    console.log('CATCH');
                    console.log(e);
                }
                this.getEquipment();
            },

            saveTestModel(model) {
                this.testModel = model;
                this.$store.state.testDrive.model = model;
                localStorage.model = JSON.stringify(model);
                // this.photo = model.image;
            },

            changeModel() {
                this.petrol = false;
                this.diesel = false;
                this.electric = false;
                this.hybrid = false;
                this.lpg = false;
                console.log(this.testModel);
                this.$store.state.testDrive.model = this.testModel;
                localStorage.testModel = JSON.stringify( this.testModel );
                this.getEquipment();
            },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.testModel.id}`)
                    .then( (response) => {
                        let equipments = response.data;
                        this.equip = equipments[0];
                    } )
                    .then( () => {
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
                        this.findFuelType();
                        this.setTestEngine( this.fuelType(this.engines[0]) )
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");
                        console.log(error);
                    } );

            },

            setTestEngine(eng) {
                this.testEngine = eng;
                this.$store.state.testDrive.engineType = eng;
                localStorage.testEngine = eng;
                console.log(this.$store.state.testDrive);
            },

            findFuelType() {
                this.engines.forEach( eng => {
                    switch (eng.fuel_type.toLowerCase()) {
                        case "Бензин".toLowerCase():
                            this.petrol = true;
                            break;
                        case "Дизел".toLowerCase():
                            this.diesel = true;
                            break;
                        case "Електро".toLowerCase():
                            this.electric = true;
                            break;
                        case "ГIбрид".toLowerCase():
                            this.hybrid = true;
                            break;
                        case "LPG".toLowerCase():
                            this.lpg = true;
                            break;
                    }
                } );

                if (this.testModel.hybrid) {
                    this.hybrid = true;
                }

            },

            fuelType(eng) {
                switch (eng.fuel_type.toLowerCase()) {
                    case "Бензин".toLowerCase():
                        return "Бензиновий";
                    case "Дизел".toLowerCase():
                        return "Дизельний";
                    case "Електро".toLowerCase():
                        return "Електричний"
                    case "ГIбрид".toLowerCase():
                        return "Гібридний (бензин)"
                    case "LPG".toLowerCase():
                        return "LPG"
                }
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
                        console.log(this.photo);
                        this.$store.state.testDrive.preview = this.color.preview;
                        localStorage.testPreview = this.color.preview;
                        console.log(this.$store.state.testDrive);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные цвета");
                        console.log(error);
                    } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    article.step_1 {
        padding: 36px 20px;
        color: $font_color;
        header {
            margin: 40px 0;
            h1 {
                font-size: 4.5rem;
                font-weight: bold;
            }
        }

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

            header {
                h1 {
                    font-size: 3rem;
                }
            }

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