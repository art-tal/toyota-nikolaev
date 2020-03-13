<template>
    <div class="allEquipment">

        <div class="carousel" :style="{'background-color': color, 'color': getFontColor(color)}">
            <div class="equip"
                 v-for="equipment in equipments"
                 :key="equipment.model_name_pivot"
                 class-active="active"
                 @click="activeted(equipment)"
            >
                <img :src="photo" :alt="equipment.model_name_pivot">
                <h4>
                    <span><strong>{{equipment.model_name_pivot}} </strong></span>
<!--                    <span>{{car.equipment.nameEquipment}} - </span>-->
<!--                    <span>{{car.bodyType}}</span>-->
                </h4>
                <div class="body">
                    <a href="#">
                        <i class="fas fa-exchange-alt"></i>
                        <span>Сравнить</span>
                    </a>
                </div>
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
            }
        },

        created() {
            this.getEquipment();
            this.equipment = this.equipments[0];
            eventEmitter.$emit('selectedEquipment', this.equipment);
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
                // $('this').addClass('active');
            },

            getFontColor: function (color) {
                switch(color){
                    case '#000000':
                    case '#182B66':
                    case '#5C5653':
                    case '#740310':
                        return '#FFFFFF';
                    case '#FFFFFF':
                    case '#EDE7E1':
                    case '#F2F2F0':
                        return '#202020';
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
            display: flex;
             flex-wrap: nowrap;
            justify-content: center;
            align-items: stretch;
            .equip {
                width: 20%;
                border-top: 5px solid #D1D6D8;
                padding: 30px 40px;
                box-sizing: border-box;
                &.active,
                &:hover{
                    align-self: stretch;
                    background-color: #BCC0C2;
                    border-top: 5px solid black;
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