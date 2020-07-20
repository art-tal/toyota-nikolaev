<template>
    <section>

        <div class="container-fluid">

            <header class="row">
                <h1 class="model col-xl-10 col-lg-9 col-md-6 col-12 text-left">
                    <span class="carModel font-weight-bold">
                        {{car.name}}</span>
                    <span class="carEquipment">
                        {{equipment.mod_name}}</span>
                    <small class="bodyType"> - {{equipment.body_type}}</small>
                </h1>
            </header>




            <!--            <div class="compare text-left" v-if="!showEquipment">-->
            <!--                <a href="#" class="text-decoration-none" :style="{'color': fontColored + '!important'}">-->

            <!--                    <i class="fas fa-exchange-alt"></i>-->
            <!--                    <span>Порівняти</span>-->
            <!--                </a>-->
            <!--            </div>-->



            <div class="carView row">
                <div class="carDescription col-xl-10 col-lg-11 col-12 row">
                    <ul class="description col-xl-3 col-12 text-left">
                        <li v-for="(desc, index) in car.description"
                            :key="index"
                            :style="{'color': fontColored + '!important'}"
                        >
                            {{desc}}</li>
                    </ul>

                    <div class="carPhoto col-xl-9 col-12">
                        <!--                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + model.image" :alt="equipment.model_name_pivot">-->
                        <img :src="photo" :alt="equipment.model_name">
                    </div>
                </div>


                <equip-list :id="id" :model="car"></equip-list>

            </div>
        </div>


    </section>
</template>

<script>
    import axios from "axios"
    // import EquipList from "@/components/cars/EquipList";
    import EquipList from "./EquipList";
    // import Equipment from "./../../components/configurator/Equipment";

    export default {
        name: "Car",

        props: [
            'id',
        ],

        components: {
            EquipList,
            // Equipment
        },

        data() {
            return {
                car: {},
                equipment: {},

                fontColor: "#202020",
            }
        },

        created() {
            this.getCar();
            // this.getEquipment();
        },


        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        computed: {
            photo() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.car.image
            },

            // computedColor() {
            //     return this.$store.getters.colored;
            //     // return JSON.parse( localStorage.color );
            // },

            fontColored() {
                return this.getFontColor();
            },
        },

        methods: {
            getCar() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/all_model",//?id=" + this.id,
                    {params: {id: this.id}},
                ).then( (response) => {
                    this.car = response.data[0];
                    console.log(response.data[0]);
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
                .then( () => {
                    this.getEquipment();
                    console.log('cfghfh');
                } );
            },

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod`,//?id=${this.id}`)
                    {params: {id: this.id}}
                    )
                    .then( (response) => {
                        this.equipments = response.data;
                        this.equipment = this.equipments[0];
                        console.log(this.equipment);
                        // this.$store.state.equipment = this.equipment;
                        // this.equipmentTitle = this.equipment.mod_name;
                        // localStorage.equipment = JSON.stringify( this.equipments[0] );
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    } );
            },

            getFontColor: function () {
                // console.log(this.computedColor.rgb);
                try{
                    switch(this.computedColor.rgb.toLowerCase()){
                        case '#000000'.toLowerCase():
                        case '#182B66'.toLowerCase():
                        case '#5C5653'.toLowerCase():
                        case '#740310'.toLowerCase():
                        case '#ff0000'.toLowerCase():
                            return this.fontColor = '#FFFFFF';
                        case '#FFFFFF'.toLowerCase():
                        case '#EDE7E1'.toLowerCase():
                        case '#F2F2F0'.toLowerCase():
                            return this.fontColor = '#202020';
                    }
                } catch (e) {
                    console.log( "Шрифты пролетели" );
                }

            },
        }
    }


</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

</style>