<template>
    <!--    <div class="allEquipment container-fluid w-100">-->

    <!--        <div class="carousel row" :style="{'color': fontColor}">-->
    <!--            <div-->
    <!--                 v-for="equipment in equipments"-->
    <!--                 :key="equipment.model_name_pivot"-->
    <!--                 @click="activeted(equipment)"-->
    <!--            >-->
    <!--&lt;!&ndash;                :style="{'border-top': '4px solid' + color}"&ndash;&gt;-->
    <!--                <img :src="photo" :alt="equipment.model_name_pivot">-->
    <!--                <h4 :style="{'color': fontColor}">-->
    <!--                    <span><strong>{{equipment.model_name_pivot}} </strong></span>-->
    <!--&lt;!&ndash;                    <span>{{car.equipment.nameEquipment}} - </span>&ndash;&gt;-->
    <!--&lt;!&ndash;                    <span>{{car.bodyType}}</span>&ndash;&gt;-->
    <!--                </h4>-->
    <!--                <ul class="equip_desc">-->
    <!--                    <li v-for="(desc, key) in equipment.description"-->
    <!--                        :key="key"-->
    <!--                        :style="{'color': fontColor}"-->
    <!--                    >{{desc}}</li>-->
    <!--                </ul>-->
    <!--&lt;!&ndash;                <div class="body">&ndash;&gt;-->
    <!--&lt;!&ndash;                    <a href="#">&ndash;&gt;-->
    <!--&lt;!&ndash;                        <i class="fas fa-exchange-alt"></i>&ndash;&gt;-->
    <!--&lt;!&ndash;                        <span>Сравнить</span>&ndash;&gt;-->
    <!--&lt;!&ndash;                    </a>&ndash;&gt;-->
    <!--&lt;!&ndash;                </div>&ndash;&gt;-->
    <!--            </div>-->
    <!--        </div>-->

    <!--    </div>-->








    <div class="allEquipment container-fluid w-100">
        <carousel :style="{'color': fontColor}"
                  :per-page="4"
                  :paginationEnabled="false"
                  :navigationEnabled="true"
                  :spacePadding="10"
                  :minSwipeDistance="15"
                  :navigationClickTargetSize="20"
        >
            <slide
                    v-for="equipment in equipments"
                    :key="equipment.model_name_pivot"
                    @click="activeted(equipment)"
            >
                <img :src="photo" :alt="equipment.model_name_pivot">
                <h4 :style="{'color': fontColor}">
                    <span><strong>{{equipment.model_name_pivot}} </strong></span>
                    <!--                    <span>{{car.equipment.nameEquipment}} - </span>-->
                    <!--                    <span>{{car.bodyType}}</span>-->
                </h4>
                <ul class="equip_desc">
                    <li v-for="(desc, key) in equipment.description"
                        :key="key"
                        :style="{'color': fontColor}"
                    >{{desc}}</li>
                </ul>

            </slide>
        </carousel>
    </div>


</template>

<script>
    import axios from "axios";
    import {eventEmitter} from '@/main'
    import { Carousel, Slide } from 'vue-carousel';


    export default {
        name: "Equipment",

        components: {
            Carousel,
            Slide,
        },

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
            photo() {
                return this.$store.getters.modelImage;
            },
        },

        created() {

            this.id = localStorage.id;
            // this.color = localStorage.color;
            this.color = this.$store.getters.colored;
            this.getEquipment();
            this.equipment = this.equipments[0];
            this.$store.state.equipment = this.equipment;
            localStorage.equipment = JSON.stringify( this.equipment );
            this.getFontColor();

            eventEmitter.$on('select', () => {this.activeted()})
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
                console.log('catch');
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

    /*.allEquipment {
        width: 100%;
        margin: 0;
        position: relative;
        background-color: rgba(0,0,0,0.3);
        .carousel {
            position: static;
            width: 85%;
            margin: auto;
            !*display: flex;*!
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
                    display: none;
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


        }*/


    .VueCarousel-slide {
        position: relative;
        text-align: center;
        min-height: 100px;
    }

    .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: green;
    }

    .VueCarousel-navigation-prev {
        left: 15px !important;
    }

    .VueCarousel-navigation-next[data-v-453ad8cd] {
        right: 15px !important;
    }



    .allEquipment {
        width: 100%;
        margin: 0;
        position: relative;
        background-color: rgba(0,0,0,0.3);
        carousel {
            position: static;
            width: 85%;
            margin: auto;
            /*display: flex;*/
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            slide {
                box-sizing: border-box;
                padding: 30px 40px;
                img {
                    width: 100%;
                }
                .equip_desc {
                    display: none;
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