<template>
            <section>
                <article class="standardEquipment container">
                    <div class="row">
                        <header class="col-md-3 col-sm-12">
                            <div class="row text-left">
                                <div class="col-md-12 col-sm-9">
                                    <h2 class="carModel font-weight-bold">{{car.model}}</h2>
                                    <h3 class="carEquipment">{{car.equipment.nameEquipment}}
                                        <span class="bodyType">{{car.bodyType}}</span>
                                    </h3>
                                </div>
                                <div class="col-md-12 col-sm-3">
                                    <router-link
                                            class="nav-link ml-2 mr-2 editEquipment"
                                            tag="a"
                                            exact
                                            active-class="active"
                                            to="/select_model"
                                    >
                                        <i class="fas fa-sync-alt"></i>
                                        <span>Изменить комплектацию</span>
                                        <!--                        <span class="sr-only">(current)</span>-->
                                    </router-link>

<!--                                    <a href="#" class="">-->
<!--                                    </a>-->
                                </div>
                            </div>

                        </header>
                        <div class="photo col-md-5 col-sm-6">
                            <img :src="car.bigPhoto">
                        </div>
                        <div class="standard col-md-4 col-sm-6 text-left">

                            <h5 class="font-weight-bold">Стандартное оборудование</h5>
                            <ul>
                                <li v-for="(equip, key) in car.equipment.standart"
                                    :key="key"
                                >{{equip}}</li>
                            </ul>

                            <button type="button" class="btn btn-grey btn-small">
                                <span>Показать стандартное оборудование</span>
                            </button>
                        </div>
                    </div>
                </article>



                <article class="engine">
                    <div class="container">
                        <header class="row text-left">
                            <div class="col-md-8 col-sm-7">
                                <h2 class="">Двигатель</h2>
                            </div>
                        </header>
                        <div class="row">
                            <div class="engine_data col-sm-6">
                                <div class="row text-left">
                                    <header class="col-9">
                                        <h2 class="font-weight-bold">
                                            <a href="#engine-7c781068-6a4f-4648-9d9d-753e3f46e300">{{car.engine.valueOfEngine}} {{car.engine.nameOfEngine}} ({{car.engine.maxPower}})</a>
                                        </h2>
                                        <h3 class="">{{car.transmision}}</h3>
                                    </header>
                                    <div class="engine_img col-3 text-right">
                                        <img src="https://webcarconfig.toyota-europe.com/toyota/svg/engine.svg" width="90" alt="" class="">
                                        <div class="font-weight-bold font-italic text-uppercase">{{car.engine.typeOfEngine}}</div>
                                    </div>
                                </div>
                                    <ul class="options text-left">
                                        <li v-for="(i, key) in car.engine.info"
                                        :key="key">{{i}}</li>
<!--                                        <li>Комбінований цикл: 8,3 л/100 км</li>-->
<!--                                        <li>Вміст вуглекислого газу у відпрацьованих газах (комбінований цикл): 187 г/км</li>-->
                                    </ul>
                                    <footer class="row">
                                        <a href="#" class="more_info col-5">
                                            <i class="far fa-file"></i>
                                            <span>Больше информации</span>
                                        </a>
                                        <a href="#" class="btn btn-outline-danger col-4 text-center">
                                            <span class="align-middle">Продолжить</span>
                                            <i class="fas fa-angle-right"></i>
                                        </a>
                                    </footer>
                            </div>
                        </div>
                    </div>


                </article>

            </section>


</template>

<script>
    export default {
        name: "SelectedEngine",

        data() {
            return {
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
                        photo:
                            "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                        bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                        engine: {
                            nameOfEngine: 'Dual VVT-i',
                            valueOfEngine: '2,5 л',
                            typeOfEngine: 'Бензиновый',
                            maxPower: '181 к. с.',
                            info: ['Комбінований цикл: 8,3 л/100 км',
                                'Вміст вуглекислого газу у відпрацьованих газах (комбінований цикл): 187 г/км'],
                        },
                        transmision: "6-ступ. автомат. (Передній привод)"

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
                        bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                        engine: {
                            nameOfEngine: 'Dual VVT-i',
                            valueOfEngine: '2,5 л',
                            typeOfEngine: 'Бензиновый',
                            maxPower: '181 к. с.',
                            info: ['Комбінований цикл: 8,3 л/100 км',
                            'Вміст вуглекислого газу у відпрацьованих газах (комбінований цикл): 187 г/км'],
                        },
                        transmision: "6-ступ. автомат. (Передній привод)"
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

        methods:{

    }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

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
                        i {
                            margin-right: 10px;
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
                    .engine_data {
                        background-color: #fff;
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
                            a.btn {
                                width: 165px;
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

</style>