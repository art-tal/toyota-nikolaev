<template>

    <div class="wheels container">
        <div class="row">
            <div class="wheelsName col-4 font-weight-bold text-left">
                {{selectedWheel.description}}
            </div>
            <ul class="sampleOfWheel col-8 text-left">
                <p></p>
                <li v-for="(wheel, key) in wheels"
                    :key="key"
                    class="sample"
                    @click="setWheel(wheel, key)"
                >
                    <img :src="wheel.sampleOfWheel" :alt="wheel.name">
                    <div class="check text-center" v-if="wheel.selected">
                        <i class="fas fa-check"></i>
                    </div>
                </li>

            </ul>
        </div>
    </div>

</template>

<script>
    import axios from "axios"

    export default {
        name: "wheels",

        data() {
            return {
                mod_id: null,
                selectedWheel: "",
                wheels: [],
                // wheels: [
                //     {
                //         name: "standart",
                //         wheelCode: "accessories/16500",
                //         description: "17-дюймові легкосплавні колісні диски з десятьма спицями",
                //         sampleOfWheel: "//t1-carassets.toyota-europe.com/bfa8bb07-f7c5-4b18-9f80-5827fbce5238.PNG",
                //         selected: true
                //     },
                //     {
                //         name: "option",
                //         wheelCode: "options/16163",
                //         description: "Легкосплавні диски 18”, 4шт.",
                //         sampleOfWheel: "//t1-carassets.toyota-europe.com/d2d49bc3-b6c3-4e89-a552-ad3a87e56ee4.PNG",
                //         selected: false
                //     },
                //
                // ],
            }
        },

        created() {
            this.mod_id = localStorage.mod_id;
            this.getWheels(this.mod_id);
        },

        methods: {
            getWheels(id) {
                axios.get(
                    // "lara.toyota.nikolaev.ua/ajax/mod_wheel",
                    "http://lara.toyota.nikolaev.ua/ajax/mod_wheel?id=4",
                    // {id: id},
                )
                .then( (response) => {
                    this.wheels = response.data;
                    this.wheels.forEach( (w) => {
                        w.selected = false;
                        ///////////////////////////////////////////////////
                        w.description = "17-дюймові легкосплавні колісні диски з десятьма спицями";
                        w.sampleOfWheel = "//t1-carassets.toyota-europe.com/bfa8bb07-f7c5-4b18-9f80-5827fbce5238.PNG";
                        ///////////////////////////////////////////////////
                    } );
                    this.wheels[0].selected = true;
                    this.selectedWheel = this.wheels[0];
                    localStorage.wheel = JSON.stringify( this.selectedWheel );
                    console.log(this.selectedWheel);
                } )
                .catch( (error) => {
                    id
                    console.log("Произошла ошибка! Невозможно загрузить доступные диски");
                    console.log(error);
                } )
            },

            setWheel: function (wheel, key) {
                this.wheels.forEach( (w) => {w.selected = false;});
                // wheel.selected = true;
                this.wheels[key].selected = true;

                this.selectedWheel = wheel;
                localStorage.wheel = JSON.stringify( this.selectedWheel );
                // this.car.carColor = color;
                // this.car.bigPhoto = this.getCar(this.car.modelCode, this.car.carColor.colorCode);
            },
        },


    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .wheels {
        background-color: #fff;
        padding: 15px;
        div.row {
            .wheelsName {
                font-size: 1.5rem;
            }
            ul.sampleOfWheel {
                list-style-type: none;
                padding: 0;
                li.sample {
                    display: inline-block;
                    padding: 15px;
                    position: relative;
                    padding: 15px;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    .check {
                        color: red;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                        background-color: #fff;
                        position: absolute;
                        top: 15px;
                        left: 15px;
                    }

                }
            }
        }
    }

</style>

