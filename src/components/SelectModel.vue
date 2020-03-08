<template>
    <section class="selectModel">
        <div class="container-fluid" :style="{'background-color': car.carColor.rgb, 'color': getFontColor(car.carColor.rgb )+ '!important'}">
            <header class="row">
                <h1 class="model col-10 text-left">
                    <span class="carModel font-weight-bold">
                        {{car.model}}</span>
                    <span class="carEquipment">
                        {{car.equipment.nameEquipment}}</span>
                    <small class="bodyType">
                        - {{car.bodyType}}</small>
                </h1>

                <div class="col-2">
                    <button class="openChoice btn row"
                            name="selectEquipment"
                            id="selectEquipment"
                            :style="{'background-color': car.carColor}"
                            @click="showEquipment = !showEquipment">
                        <span v-if="!showEquipment">
                            Все комплектации</span>
                        <span v-if="showEquipment">Скрыть</span>
                        <i class="fas fa-chevron-down"
                           v-if="!showEquipment"></i>
                        <i class="fas fa-chevron-up"
                           v-if="showEquipment"></i>
                    </button>
                </div>

            </header>

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

            <div class="compare text-left" v-show="!showEquipment">
                <a href="#" class="text-decoration-none" :style="{'color': getFontColor(car.carColor.rgb )+ '!important'}">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Сравнить</span>
                </a>
            </div>

            <div class="carView row">
                <div class="carDescription col-9 row">
                    <ul class="description col-3 text-left">
                        <li v-for="(desc, index) in car.description"
                            :key="index"
                            :style="{'color': getFontColor(car.carColor.rgb )+ '!important'}"
                        >
                            {{desc}}</li>
                    </ul>

                    <div class="carPhoto col-9">
                        <img :src="car.bigPhoto" :alt="car.photo">
                    </div>
                </div>

                <div class="carColors col-3">
                    <ol class="colors row">
                        <li class="selectColor"
                            v-for="(color, key) in colors"
                            :key="key"
                            :title="color.name + ' (' + color.colorCode + ')'"
                            @click="setColor(color)">
                            <img :src="color.sampleOfColor"
                                 :alt="color.sampleOfColor">
                            <i class="fas fa-check" v-if="color.selected" :style="{'color': getFontColor(car.carColor.rgb )+ '!important'}"></i>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="specifications row justify-content-center">
            <div class="fuelConsumption col-2">
                <p>Расход топлива</p>
                <span class="h1">{{car.fuelConsumption}}</span>
                <span class="font-weight-bold"> л/100 км</span>
            </div>
            <div class="maxSpeed col-2">
                <p>Максимальная мощность</p>
                <span class="h1">{{car.maxPower}}</span>
                <span class="font-weight-bold"> л.с.</span>
            </div>
            <div class="maxPower col-2">
                <p>Максимальная скорость</p>
                <span class="h1">{{car.maxSpeed}}</span>
                <span class="font-weight-bold"> км/ч</span>
            </div>
        </div>

        <div class="requestService row justify-content-center">
            <div class="col-6 text-right">
                <button class="col-6 btn btn-danger">Заказать тест-драйв</button>

            </div>
            <div class="col-6 text-left">
                <router-link
                        class="nav-link ml-2 mr-2"
                        tag="button"
                        exact
                        active-class="active"
                        to="/configurator"
                >
                    <span>Сконфигурировать</span>
                    <!--                        <span class="sr-only">(current)</span>-->
                </router-link>
            </div>

        </div>


    </section>
</template>

<script>
    import axios from 'axios'
    // const axios = require('axios');


    export default {
        name: "SelectModel",

        data() {
            return {
                showEquipment: false,

                // carModel: "Camry",
                colors: [
                    {name: "Черный металик", rgb: "#000000", colorCode: "218", sampleOfColor: "http://t1-carassets-1.toyota-europe.com/8f0c43d2-90d7-4a76-8303-033c448c2560.JPG", selected: false },
                    {name: "Темно-синий металик", rgb: "#182B66", colorCode: "8w7", sampleOfColor: "//t1-carassets-4.toyota-europe.com/c2375475-4cb7-4332-b68a-ea0739ecb570.JPG", selected: false },
                    {name: "Бежевый металик", rgb: "#EDE7E1", colorCode: "4x1", sampleOfColor: "//t1-carassets-2.toyota-europe.com/e65e0089-eafc-46ff-bc3c-f91846ce99ee.JPG", selected: true },
                    {name: "Серебристый металик", rgb: "#F2F2F0", colorCode: "1f7", sampleOfColor: "//t1-carassets-1.toyota-europe.com/05333956-36fc-4c17-95a2-3de514269d0f.JPG", selected: false },
                    {name: "Коричневый металик", rgb: "#5C5653", colorCode: "4x7", sampleOfColor: "//t1-carassets-2.toyota-europe.com/eee65758-a2b9-49ba-9bad-e51e840c5b8b.JPG", selected: false },
                    {name: "Красный металик", rgb: "#740310", colorCode: "3u5", sampleOfColor: "//t1-carassets-2.toyota-europe.com/b6433f4d-ccf4-453d-9e5c-083aedbf2fb5.JPG", selected: false },
                    {name: "Белый металик", rgb: "#FFFFFF", colorCode: "089", sampleOfColor: "//t1-carassets-2.toyota-europe.com/c9d8d6eb-92db-4971-85a4-0c3a3f3ccd91.JPG", selected: false },
                ],
                selectedColor: {},

                equipments: [
                    {
                        model:"Camry",
                        modelCode: "e460cecd-1792-4c02-8749-96bc28a572ae",
                        equipment: {
                            nameEquipment: "Comfort",
                            standart: [
                                'Світлодіодні денні ходові вогні',
                                'Круїз-контроль',
                                '6 гучномовців',
                                'Двозонний клімат-контроль'
                                ]
                        },
                        bodyType: "Седан бизнес-класса",
                        carColor: {name: "Бежевый металик",
                            rgb: "#EDE7E1",
                            colorCode: "4x1",
                            sampleOfColor: "//t1-carassets-2.toyota-europe.com/e65e0089-eafc-46ff-bc3c-f91846ce99ee.JPG",
                            selected: true },
                        wheels: "",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo:
                            "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                        bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png"
                    },
                    {
                        model:"Camry",
                        modelCode: "e460cecd-1792-4c02-8749-96bc28a572ae",
                        equipment: {
                            nameEquipment: "Elegance",
                            standart: [
                               '17-дюймові легкосплавні колісні диски з десятьма спицями',
                                'Центральний підлокітник, оздоблений комбінованою шкірою',
                                'Оббивка карт дверей з комбінованої шкіри',
                                'Оббивка сидінь з комбінованої шкіри з перфорацією'
                                ]
                                    },
                        bodyType: "Седан бизнес-класса",
                        carColor: "#EDE7E1",
                        wheels: "",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                        bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png"
                    },
                    {
                        model:"Camry",
                        modelCode: "e460cecd-1792-4c02-8749-96bc28a572ae",
                        equipment: {
                            nameEquipment: "Prestige",
                            standart: [
                                'Транспондерна система відкривання дверей та пуску двигуна',
                                'LDA - cистема сповіщення про з\'їзд зі смуги руху',
                                'Система розпізнання та інформування водія про дорожні знаки',
                                'ACC - круїз-контроль з функцією підтримки безпечної дистанції до автомобіля, що їде попереду'
                            ]
                        },
                        bodyType: "Седан бизнес-класса",
                        carColor: "#EDE7E1",
                        wheels: "",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                         bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png"
                    },
                    {
                        model:"Camry",
                        modelCode: "e460cecd-1792-4c02-8749-96bc28a572ae",
                        equipment: {
                            nameEquipment: "Premium",
                            standart: [
                                '18-дюймові легкосплавні колісні диски з двадцятьма спицями',
                                'Іформаційно-розважальна система Toyota з навігаційною системою GPS',
                                'Сенсорний екран з діагоналлю 20,3 см (8 дюймів) на передній панелі',
                                'Звуковідтворювальна система фірми JBL з підсилювачем та низкочастотним гучномовцем'
                            ]
                        },
                        bodyType: "Седан бизнес-класса",
                        carColor: "#EDE7E1",
                        wheels: "",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                         bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png"
                    },
                    {
                        model:"Camry",
                        modelCode: "e460cecd-1792-4c02-8749-96bc28a572ae",
                        equipment: {
                            nameEquipment: "Premium Hybrid",
                            standart: [
                                'Тоноване скло у вікнах задніх дверей',
                                'Перемикач режимів їзди на центральній консолі',
                                'Сенсори паркування передні (4 шт.) з функцією автоматичного гальмування',
                                'Сенсори паркування задні (4 шт.) з функцією автоматичного гальмування'
                            ]
                        },
                        bodyType: "Седан бизнес-класса",
                        carColor: "#EDE7E1",
                        wheels: "",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                         bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png"
                    },
                ],

                car: {},
            }
        },

        created() {
            this.car = this.equipments[0];
            this.selectedColor = this.colors[2]
        },

        methods: {
            activeted: function (obj) {
                this.car = obj;
                // this.car.bigPhoto =  this.getCar(obj.modelCode, obj.carColor);
            },

            getCar: function(model, color){
                console.log('GET ---' + model + '----' + color );
               axios({
                   method: 'get',
                   url: 'http://localhost:63342/toyota-nikolaev/src/ajax/car.php',
                   data: {
                        model: model,
                        color: color
                    }
            })
                   .then(
                    function (response) {
                        console.log(response.data);
                        return response.data;
                    }

                )
                   .catch((error) => {
                   console.log('Произошла ошибка загрузки фото с сервера.');
                   console.log(error);
                   return this.car.bigPhoto;
               })

            },

            setColor: function (color) {
                this.selectedColor = color;
                this.car.carColor = color;
                this.colors.forEach( (item) => {item.selected = false;});
                color.selected = true;
                this.car.photo.bigPhoto = this.getCar(this.car.modelCode, this.car.carColor.colorCode);
            },

            getFontColor: function (carColor) {
                switch(carColor){
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
    @import '../styles/variables';

    * {
        margin: 0;
        padding: 0;
    }

    .selectModel {
        .container-fluid {
            background-color: #EDE7E1;
            header {
                padding: 50px 44px 20px 74px;
                button.openChoice.btn {
                    @include button;
                    width: 192px;
                    height: 40px;
                    text-align: left;
                    background-color: #F0F0F0;
                    filter: brightness(90%);
                    span {
                        display: inline-block;
                        margin-right: 20px;
                    }
                    i {
                        position: absolute;
                        top: 13px;
                        right: 20px;
                    }

                }
            }

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

            .compare {
                margin: 0px 44px 0 74px;
                a {
                    /*color: #202020;*/
                    color: $font_color;
                    font-size: 20px;
                    span{
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
            }

            .carView {
                margin: 0 44px 0 74px;
                .carDescription {
                    .description {
                        list-style-type: none;
                        font-size: 16px;
                        color: $font_color;
                        text-align: left;
                        margin-top: 30px;
                        line-height: 36px;
                        li:before {
                            content: '\22C5';
                        }
                    }
                    .carPhoto {
                        position: relative;
                        img {
                            width: 80%;
                            position: relative;
                            bottom: -58px;
                        }
                    }
                }

                .carColors{
                    margin-bottom: 30px;
                    .row {
                        li {
                            width: 48px;
                            height: 48px;
                            margin: 0 5px;
                            position: relative;
                            display: inline-block;
                            list-style-type: none;
                            &:hover {
                                transform: scale(1.1);
                            }
                            img {
                                width: 100%;
                                border: 2px solid #fff;
                                border-radius: 50%;
                            }
                            i {
                                position: absolute;
                                top: 18px;
                                left: 18px;
                                color: #999;
                                font-size: 12px;
                            }
                        }
                    }

                }
            }
        }

        .specifications.row {
            margin-top: 25px;
                p {
                    font-size: 1.6rem;
                }
                .h1 {
                    font-size: 4rem;
                }
                .h1 + span {
                    font-size: 1.6rem;
                }
        }
        .requestService.row {
            margin: 40px auto 100px;
            /*width: 70%;*/
            /*justify-content: space-around;*/
            div {
                padding: 0 10px;
                button {
                    @include button;
                    min-width: 250px;
                }
            }

        }
    }


</style>