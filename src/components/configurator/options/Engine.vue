<template>
            <section>
                <article class="standardEquipment container">
                    <div class="row">
                        <header class="col-lg-3 col-md-12 coil-12">
                            <div class="row text-left">
                                <div class="col-lg-12 col-md-9 col-12">
                                    <h2 class="carModel font-weight-bold">{{model.name}}</h2>
                                    <h3 class="carEquipment font-weight-bold">{{equipment.mod_name}}
<!--                                        <span class="bodyType font-weight-normal">{{car.bodyType}}</span>-->
                                    </h3>
                                </div>
<!--                                <div class="col-lg-12 col-md-3 col-12">-->
<!--                                    <a-->
<!--                                            class="nav-link ml-2 mr-2 editEquipment"-->
<!--                                            @click="goToEquipment()"-->
<!--                                    >-->
<!--                                        <i class="fas fa-sync-alt"></i>-->
<!--                                        <span>Змінити комплектацію</span>-->
<!--                                        &lt;!&ndash;                        <span class="sr-only">(current)</span>&ndash;&gt;-->
<!--                                    </a>-->

<!--&lt;!&ndash;                                    <a href="#" class="">&ndash;&gt;-->
<!--&lt;!&ndash;                                    </a>&ndash;&gt;-->
<!--                                </div>-->
                            </div>

                        </header>
                        <div class="photo col-lg-5 col-md-7 col-12">
                            <img :src="photo">
                        </div>
                        <div class="standard col-lg-4 col-md-5 col-12 text-left">

                            <h5 class="font-weight-bold">Стандартное оборудование</h5>
                            <ul>
                                <li v-for="(equip, key) in equipment.standart"
                                    :key="key"
                                >{{equip}}</li>
                            </ul>
                        </div>
                    </div>
                </article>



                <article class="engine">
                    <div class="container">
                        <header class="row text-left">
                            <div class="col-md-6 col-12">
                                <h2 class="">Двигун</h2>
                            </div>
                        </header>
                        <div class="row">
                            <div class="engine_data col-md-6 col-12"
                                 v-for="(trans, key) in transmissions"
                                 :key="key"
                            >
                                <div class="wrap ">
                                    <div class="row text-left">
                                        <header class="col-9">
                                            <h2 class="font-weight-bold">
                                                <a href="#engine-7c781068-6a4f-4648-9d9d-753e3f46e300">
                                                    {{trans.volume}} мл
                                                    {{trans.fuel_type}}
                                                    {{trans.eng_name}}
                                                    ({{trans.horspower}} к.с.)
                                                </a>
                                            </h2>
                                            <h3 class="">
                                                {{trans.gear_name}}
                                                {{trans.drive_type}}

                                            </h3>
                                        </header>
                                        <div class="engine_img col-3 text-right">
                                            <img src="https://webcarconfig.toyota-europe.com/toyota/svg/engine.svg" width="90" alt="" class="">
                                            <div class="font-weight-bold font-italic text-uppercase text-center">{{trans.fuel_type}}</div>
                                        </div>
                                    </div>
                                    <ul class="options text-left">
                                        <li v-for="(i, key) in trans.eng_description"
                                            :key="key">{{i}}</li>
                                    </ul>
                                    <footer class="row">
                                        <button @click="applyTransmission(trans)"
                                                class="btn btn-outline-danger col-lg-5 col-12 text-center">
                                            <span class="align-middle">Прийняти</span>
                                        </button>
                                    </footer>
                                </div>

                            </div>
                        </div>
                    </div>


                </article>

            </section>


</template>

<script>
    import axios from "axios";

    export default {
        name: "SelectedEngine",

        data() {
            return {


                id_mod: localStorage.id,
                id_equip: localStorage.mod_id,
                model: {},
                equipment: {},
                transmission: {},
                transmissions: [],
            }
        },

        created() {
            this.model = JSON.parse( localStorage.model );
            this.equipment = JSON.parse( localStorage.equipment );
            this.getEngine();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },



        computed: {
            photo() {
                if (this.$store.getters.colored.preview) {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + this.$store.getters.colored.preview;
                } else {
                    return 'http://lara.toyota.nikolaev.ua/storage/' + JSON.parse(localStorage.color).preview;
                }
            },
        },

        methods:{

            getEngine() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',
                    {params: {"id": this.id_equip}},
                )
                .then( (response) => {
                    this.transmissions = response.data;
                    this.checkEngine();
                } )
                .catch( (error) => {
                    console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");
                    console.log(error);
                } );
            },

            checkEngine() {
                try{
                    let trans = JSON.parse(localStorage.transmission);
                    this.transmissions.forEach( eng => {
                        if( eng.eng_id === trans.eng_id ) {localStorage.transmission = JSON.stringify( this.transmission);
                            this.$store.state.engineAndGear = JSON.parse( localStorage.transmission );
                            this.transmission = JSON.parse( localStorage.transmission );
                            return;
                        }
                    } );
                }
                catch (e) {
                    console.log("localStorage transmission is empty");
                }
                this.transmission = this.transmissions[0];
                localStorage.transmission = JSON.stringify( this.transmission );
                this.$store.state.engineAndGear = this.transmission;
            },

            applyTransmission(trans) {
                this.transmission = trans;
                localStorage.transmission = JSON.stringify( this.transmission);
            },

            goToEquipment() {
                this.$router.push({name: 'edit_equipment', params: {id: this.model.id}});
            },
    },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section {
        .standardEquipment.container {
        .row {
            padding: 2.4rem 0;
            header {
                .row {
                    .carModel {
                        font-size: 4.4rem;
                    }
                    .carEquipment {
                        font-size: 1.7rem;
                    }
                    .bodyType {
                        font-size: 1.7rem;
                        margin-bottom: 2.4rem;
                    }
                    .editEquipment {
                        font-size: 1.5rem;
                        color: $font_color;
                        cursor: pointer;
                        i {
                            margin-right: 10px;
                        }
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
            .photo {
                img {
                    max-width: 100%;
                }

            }
            .standard {
                h5 {
                    font-size: 1.7rem;
                    padding-bottom: 12px;
                }
                ul {
                    list-style-position: inside;
                    padding: 0 14px 17px;
                    li {
                        font-size: 1.5rem;
                        margin-bottom: 10px;
                    }
                }
                button {
                    @include button;
                    font-size: 1.2rem;
                    background-color: #f0f0f0;
                }


            }
        }
    }


        .engine {
            background-color: #f0f0f0;
            padding: 2.4rem 0;
            .container {
                header.row {
                    padding-bottom: 2.4rem;
                    h2 {
                        font-size: 3.4rem;
                    }
                }

                .row {
                    div.engine_data.col-md-6.col-12 {
                        .wrap {
                            background-color: #fff;
                            margin: 0 5px 10px !important;
                            padding: 30px;
                            .row {
                                padding-bottom: 2.4rem;
                                header {
                                    h2 {
                                        font-size: 1.7rem;
                                        a {
                                            color: $font_color;
                                        }
                                    }
                                    h3 {
                                        font-size: 1.6rem;
                                        color: #595D60;
                                    }
                                }
                                .engine_img {
                                    margin-top: -10px;
                                    div {
                                        font-size: 1.2rem;
                                        margin-left: 5px;
                                        margin-top: -5px;
                                    }
                                }

                            }

                            ul.options {
                                padding-left: 20px;
                                font-size: 1.5rem;
                                color: #595D60;
                                li {
                                    margin-bottom: 10px;
                                }
                            }

                            footer.row {
                                font-size: 1.5rem;
                                justify-content: space-between;
                                align-items: center;
                                padding-bottom: 0;
                                a.more_info {
                                    color: $font_color;
                                    i {
                                        margin-right: 5px;
                                    }
                                }
                                button.btn {
                                    width: 100%;
                                    height: 46px;
                                    padding: 10px 30px 10px 30px;
                                    border-radius: 23px;
                                    font-size: 1.5rem;
                                    i {
                                        margin-left: 10px;
                                    }
                                }

                            }
                        }

                    }
                }
            }

        }
    }

    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section {
            .engine {
                .container {

                    .row {
                        div.engine_data.col-md-6.col-12 {
                            padding: 0;
                            .wrap {
                                padding: 15px;
                                margin: 0 10px !important;
                                .row {
                                    .engine_img.col-3 {
                                        padding: 0;
                                        div {
                                            position: relative;
                                            right: 15px;
                                            margin-left: 0;
                                        }
                                    }

                                }

                                footer.row {
                                    margin: 15px 0 0;
                                    width: 100%;
                                    flex-direction: column-reverse;
                                    a.more_info {
                                        margin: 15px auto;
                                    }
                                    button.btn {
                                        width: 100% !important;
                                        padding: 10px 15px 10px 15px;

                                    }

                                }
                            }

                        }
                    }
                }

            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section {
            .engine {
                min-width: 500px;
                padding: 2.4rem 2rem;
                .container {
                    min-width: 100%;
                    margin: 0;

                    .row {
                        margin: 0;
                        .engine_data {
                            footer.row {
                                margin-top: 20px;
                                flex-direction: column-reverse;
                                a.more_info {
                                    margin-top: 20px;
                                }
                                button.btn {
                                    width: 100%;
                                    box-sizing: border-box;
                                }

                            }
                        }
                    }
                }

            }
        }
    }

    @media (max-width: 575.9px) {
        section {
            .engine {
                min-width: 350px;
                padding: 1.5rem;
                .container {
                    min-width: 100%;
                    margin: 0;
                    padding: 0;
                    .row {
                        margin: 0;
                        .engine_data {
                            .wrap {
                                footer.row {
                                    margin-top: 20px;
                                    flex-direction: column-reverse;
                                    a.more_info {
                                        margin-top: 20px;
                                    }
                                    a.btn {
                                        width: 100% !important;
                                        box-sizing: border-box;
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