<template>
    <div class="allEquipment" v-if="showEquipment">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item optionEquipment text-left d-block w-25"
                     v-for="car in equipments"
                     :key="car.equipment"
                     @click="activeted(car)">
                    <img :src="car.photo" :alt="car.photo" class="w-100">

                    <h4>
                        <span><strong>{{car.model}} </strong></span>
                        <span>{{car.equipment.nameEquipment}} - </span>
                        <span>{{car.bodyType}}</span>
                    </h4>

                    <div class="body">
                        <a href="#">
                            <i class="fas fa-exchange-alt"></i>
                            <span>Сравнить</span>
                        </a>
                    </div>
                </div>

            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
               data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Equipment",

        created() {
            this.getEquipment();
        },

        methods: {

            getEquipment() {
                console.log(this.$route.params.id);
                axios({
                    method: 'get',
                    url: 'http://lara.toyota.nikolaev.ua/storage/lara.toyota.nikolaev.ua/ajax/id_mod',
                    data: {id: this.$route.params.id}
                })
                    .then((response) => {
                        this.equipments = response.data;
                        this.car = this.equipments[0];
                        console.log(this.car);
                    })
                    .catch((error) => {
                        console.log("Ошибка, не возможно загрузить доступные модификации");
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .allEquipment {
        width: 100%;
        position: relative;
        background-color: #D1D6D8;
        height: 296px;
        margin: 0;
        .carousel {
            position: static;
            width: 85%;
            height: 100%;
            margin: auto;
            overflow: hidden;
            .carousel-inner {
                height: 100%;
                .carousel-item {
                    height: 100%;
                    border-top: 3px solid #D1D6D8;
                    padding: 30px 40px;
                    box-sizing: border-box;
                    &.active,
                    &:hover{
                        height: 100%;
                        background-color: #BCC0C2;
                        border-top: 3px solid black;
                    }
                    h4 {
                        font-size: 18px;
                        margin-bottom: 15px;
                    }
                    a {
                        /*color: #202020;*/
                        /*color: $font_color;*/
                        font-size: 18px;
                        span{
                            display: inline-block;
                            margin-left: 10px;
                        }
                    }

                }
            }
            .carousel-control-prev {
                width: 7.5%;
                height: 100%;
                left: 0;
                text-align: right;
                justify-content: center;
            }
            .carousel-control-next {
                width: 7.5%;
                height: 100%;
                right: 0;
            }

        }


    }

</style>