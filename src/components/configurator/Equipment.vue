<template>
    <div class="allEquipment container-fluid w-100">

        <div class="carousel row" :style="{'color': fontColor}">
            <div  class="equip"
                 v-for="(equipment, key) in equipments"
                 :key="key"
                 @click="activeted(equipment)"
            >
<!--                :style="{'border-top': '4px solid' + color}"-->
                <img :src="photo" :alt="equipment.mod_name">
                <h4 :style="{'color': fontColor}">
                    <span><strong>{{model}} </strong></span>
                    <span><strong>{{equipment.mod_name}} </strong></span>
<!--                    <span>{{car.bodyType}}</span>-->
                </h4>
                <ul class="equip_desc">
                    <li v-for="(desc, key) in equipment.description"
                        :key="key"
                        :style="{'color': fontColor}"
                    >{{desc}}</li>
                </ul>
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


    export default {
        name: "Equipment",


        data() {
            return {
                id: 0,
                color: {},
                equipments: [],
                equipment: {},
                fontColor: "#202020",
            }
        },

        computed: {
            model() {
                return this.$store.getters.getModel.name;
            },

            getModelId() {
                if (this.$store.getters.getModelId) {
                    return this.$store.getters.getModelId;
                } else {
                return this.$route.params.id;}
            },

            photo() {
                return this.$store.getters.modelImage;
            },
        },

        created() {
            this.$store.state.model = JSON.parse( localStorage.model );
            this.id = this.getModelId;
            this.color = this.$store.getters.colored;
            this.getEquipment();
            this.equipment = this.equipments[0];
            this.$store.state.equipment = this.equipment;
            localStorage.equipment = JSON.stringify( this.equipment );
            this.getFontColor();

            // eventEmitter.$on('select', () => {this.activeted()})
        },

        watch: {
            color() {
                return this.color;
            },
        },

        methods: {

            getEquipment() {
                axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod?id=${this.id}`)
                    .then((response) => {
                        this.equipments = response.data;
                        ///////////////////////////ЗАГЛУШКА
                        this.equipments.forEach( (eq) => {
                            eq.description = [
                                "Светодиодные дневные ходовые огни",
                                "Круиз-контроль",
                                "6 громкоговорителей",
                                "Двухзонный климат-контроль"
                            ];} );
                        //////////////////////////////
                        console.log(this.equipments);
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
            },

            activeted(equipment) {
                // console.log('catch');
                this.$store.state.equipment = equipment;
                localStorage.mod_id = equipment.mod_id;
                localStorage.equipment = JSON.stringify(equipment);
                eventEmitter.$emit('selectedEquipment');
            },

            getFontColor: function () {
                try{
                    switch(this.color.rgb.toLowerCase()){
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

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .allEquipment {
        width: 100%;
        margin: 0;
        position: relative;
        background-color: rgba(0,0,0,0.3);
        .carousel.row {
            position: static;
            width: 85%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            .equip {
                box-sizing: border-box;
                padding: 30px 40px;
                img {
                    width: 100%;
                }

                .equip_desc {
                    /*display: none;*/
                    margin: 0;
                    padding: 0;
                    /*list-style-type: none;*/
                    list-style-position: inside;
                    display: block !important;
                    li {
                        text-align: left;
                        font-size: 1.4rem;
                        line-height: 1.5;
                    }
                }
                &.active,
                &:hover{
                    overflow: hidden;
                    align-self: stretch;
                    background-color: rgba(0,0,0,0.25);
                    border-top: 5px solid black;
                    color: #000;
                    img, h4 {
                        transform: scale(1.1);
                        transition: all 700ms;

                    }
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


        }






    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .allEquipment {
            .carousel {
                width: 100%;
                padding: 5px;
                .equip {
                    padding: 10px 15px;
                    .equip_desc {
                        margin: 0;
                        padding: 0;
                        /*list-style-type: none;*/
                        list-style-position: inside;
                        display: block !important;
                        li {
                            text-align: left;
                            font-size: 1.4rem;
                            line-height: 1.5;
                        }
                    }
                    h4 {
                        font-size: 18px;
                        margin-bottom: 15px;
                    }
                    .equip_desc {
                        display: none;
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
    }

    @media (max-width: 767.9px) {
        .allEquipment {
            .carousel {
                width: 100%;
                padding: 5px;
                .equip {
                    padding: 10px 15px;
                    .equip_desc {
                        margin: 0;
                        padding: 0;
                        list-style-position: inside;
                        display: block !important;
                        li {
                            text-align: left;
                            font-size: 1.8rem;
                            line-height: 1.5;
                        }
                    }
                    h4 {
                        font-size: 2.2rem;
                        margin-bottom: 15px;
                    }
                    .equip_desc {
                        display: none;
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
    }


</style>