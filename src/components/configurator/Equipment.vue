<template>
    <div class="allEquipment container-fluid w-100">

        <div class="carousel row" :style="{'color': fontColor}">
            <div class="equip col-3"
                 v-for="equipment in equipments"
                 :key="equipment.model_name_pivot"
                 @click="activeted(equipment)"
            >
<!--                :style="{'border-top': '4px solid' + color}"-->
                <img :src="photo" :alt="equipment.model_name_pivot">
                <h4>
                    <span><strong>{{equipment.model_name_pivot}} </strong></span>
<!--                    <span>{{car.equipment.nameEquipment}} - </span>-->
<!--                    <span>{{car.bodyType}}</span>-->
                </h4>
<!--                <div class="body">-->
<!--                    <a href="#">-->
<!--                        <i class="fas fa-exchange-alt"></i>-->
<!--                        <span>Сравнить</span>-->
<!--                    </a>-->
<!--                </div>-->
            </div>
        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import {eventEmitter} from '@/main'
    // import jqery from "jquery";
    //
    // let $ = jqery;

    export default {
        name: "Equipment",

        props: ['id', 'photo', 'color'],

        data() {
            return {
                equipments: [],
                equipment: {},
                fontColor: "#202020",
            }
        },

        created() {
            this.getEquipment();
            this.equipment = this.equipments[0];
            eventEmitter.$emit('selectedEquipment', this.equipment);
        },

        watch: {
            color() {
                return this.color;
            },
        },

        methods: {

            getEquipment() {
                console.log(this.id);
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                    .then((response) => {
                        this.equipments = response.data;
                        // console.log(this.equipments);
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
            },

            activeted(equip) {
                // console.log(equip);
                // this.$emit('selectedEquipment', equip);
                eventEmitter.$emit('selectedEquipment', equip);
            },

            getFontColor: function (color) {
                switch(color.rgb.toLowerCase()){
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .allEquipment {
        width: 100%;
        position: relative;
        /*background-color: #D1D6D8;*/
        filter: brightness(80%);
        margin: 0;
        .carousel {
            position: static;
            width: 85%;
            margin: auto;
            /*display: flex;*/
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            .equip {
                box-sizing: border-box;
                width: 20%;
                height: 200px;
                /*border-top: 5px solid #D1D6D8;*/
                padding: 30px 40px;
                box-sizing: border-box;
                &.active,
                &:hover{
                    overflow: hidden;
                    align-self: stretch;
                    background-color: #cccccc;
                    border-top: 5px solid black;
                    transform: scale(1.1);
                    transition: all 500ms;
                }
                   h4 {
                        font-size: 18px;
                        margin-bottom: 15px;
                    }
                    a {
                        color: $font_color;
                        font-size: 18px;
                        span{
                            display: inline-block;
                            margin-left: 10px;
                        }
                    }

                }
            }
            /*.carousel-control-prev {*/
            /*    width: 7.5%;*/
            /*    height: 100%;*/
            /*    left: 0;*/
            /*    text-align: right;*/
            /*    justify-content: center;*/
            /*}*/
            /*.carousel-control-next {*/
            /*    width: 7.5%;*/
            /*    height: 100%;*/
            /*    right: 0;*/
            /*}*/

        }




</style>