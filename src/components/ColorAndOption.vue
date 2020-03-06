<template>
    <section>

        <article class="appearance container">
            <header class="row">
                <div class="col-6 text-left">
                        <h2 class="carModel font-weight-bold">{{car.model}}</h2>
                        <h3 class="carEquipment font-weight-bold">{{car.equipment.nameEquipment}} -
                            <span class="bodyType">{{car.bodyType}}</span>
                        </h3>
                </div>

            </header>
            <div class="body view"></div>
            <footer class="options"></footer>
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
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

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

</style>