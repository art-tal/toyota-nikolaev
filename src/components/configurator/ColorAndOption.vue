<template>
    <section>

        <article class="appearance ">
            <header class="container">
                <div class="row">
                    <div class="col-6 text-left">
                        <h2 class="carModel font-weight-bold">{{car.model}}</h2>
                        <h3 class="carEquipment font-weight-bold">{{car.equipment.nameEquipment}} -
                            <span class="bodyType">{{car.bodyType}}</span>
                        </h3>
                    </div>
                    <div class="col-6 text-right expand">
                        <span>На весь экран</span>
                        <i class="fas fa-expand-alt"></i>
                    </div>
                </div>

            </header>

            <div class="body view row text-center"
                 @mousemove.left.exact="rotatePhoto($event)"
            >
                <img :src="car.photo.viewPhoto"
                     :alt="car.photo.viewPhoto"
                     @selectedColor="setCarColor(color)"
                >
            </div>

            <footer class="options">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav justify-content-center">

                            <router-link
                                    class="nav-link"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/colors"
                            >
                                <span>Цвет</span>
                            </router-link>

                            <router-link
                                    class="nav-link"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/wheels"
                            >
                                <span>Колеса</span>
                            </router-link>

                            <router-link
                                    class="nav-link ml-2 mr-2"
                                    tag="a"
                                    exact
                                    active-class="active"
                                    to="/configurator/color_and_option/interior"
                            >
                                <span>Интерьер</span>
                            </router-link>

                    </ul>
                    </div>
                </nav>
                <router-view></router-view>
            </footer>
        </article>


    </section>

</template>

<script>
    export default {
        name: "ColorAndOption",

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
                        wheelsCode: "accessories/16500",
                        description: [
                            "Светодиодные дневные ходовые огни",
                            "Круиз-контроль",
                            "6 громкоговорителей",
                            "Двухзонный климат-контроль"
                        ],
                        maxSpeed: 210,
                        maxPower: 181,
                        fuelConsumption: 8.3,
                        photo: {
                            smallPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                            bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                            viewPhoto: "https://images.toyota-europe.com/ua/product-token/0372b12f-7774-45ea-b26b-4e759d78b09c/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_218_FA20.jpg"
                        },

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
                        model: "Camry",
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
                        photo: {
                            'smallPhoto': "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                            bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                            viewPhoto: "https://images.toyota-europe.com/ua/product-token/0372b12f-7774-45ea-b26b-4e759d78b09c/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_218_FA20.jpg"
                        }
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
                        photo:  {
                            'smallPhoto': "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                            bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                            viewPhoto: "https://images.toyota-europe.com/ua/product-token/0372b12f-7774-45ea-b26b-4e759d78b09c/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_218_FA20.jpg"
                        },
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
                        photo:  {
                            'smallPhoto': "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                            bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                            viewPhoto: "https://images.toyota-europe.com/ua/product-token/0372b12f-7774-45ea-b26b-4e759d78b09c/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_218_FA20.jpg"
                        }
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
                        photo: {
                            'smallPhoto': "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/width/500/height/192/padding/0,0,0,40/image-quality/70/day-exterior-4_1f7.png",
                            bigPhoto: "https://t1-resize.toyota-europe.com/ccis/zip/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/image-quality/70/day-exterior-4_4x1.png",
                            viewPhoto: "https://images.toyota-europe.com/ua/product-token/0372b12f-7774-45ea-b26b-4e759d78b09c/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_218_FA20.jpg"
                        }
                    },
                ],

                car: {},
                corner: 3,

            }
        },

        created() {
            this.car = this.equipments[0];
            // this.selectedColor = this.colors[2]
        },

        methods: {
            rotatePhoto($event) {
                this.corner++;
                if (this.corner > 0 && this.corner < 35) {
                    console.log($event);
                    // if($event.pageX)
                }
            },

            setCarColor(color) {
                this.car.color = color;
                this.car.photo.bigPhoto = this.getCarPhoto();
            },

            getCarPhoto() {
                axios({
                    method: 'get',
                    url: 'http://localhost:8080/toyota-nikolaev/src/ajax/routeCar.php',
                    data: {color: this.car.color.colorCode,
                            model: this.car.modelCode,
                            corner: this.corner,
                            wheels: this.car.wheelsCode
                    }
                })
                .then((response) => {return response.data})
                .catch((error) => {
                    console.log("Невозможно отобразить фотографию");
                    console.log(error);
                    return this.car.photo.bigPhoto;

                })
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .appearance {
        background-color: #F0F0F0;
        padding: 24px 0;
        header.container {
            .row {
                padding-top: 24px;
                div{
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
                .expand {
                    color: #6c7073;
                    span {
                        font-size: 1.5rem;
                        display: inline-block;
                        margin-right: 10px;
                    }
                }
            }
        }

        .body {
            img {
                width: 60%;
                margin: auto;
            }
        }

        footer.options {
            nav {
                ul {
                        a {
                            color: $font_color;
                            padding: 18px 20px 22px;
                            font-size: 1.5rem;
                            &:hover {
                                color: #428bca;
                            }
                            &.active {
                                font-weight: bold;
                                border-bottom: 1px solid red;
                            }
                        }
                }
            }
        }

    }


</style>