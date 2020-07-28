<template>
    <section class="container-fluid">
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container text-center">Акумуляторні батареї Toyota</h1>-->
<!--            <h2>Відкривають нові горизонти за кермом</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->

<!--            <h3 class="text-center">Сучасний автомобіль Toyota демонструє найкращі якості електронних систем, які роблять керування більш безпечним, більш легким і приємним. Усе: від супутникової навігації до Bluetooth, від систем комфорту до мультимедійних систем, потребує надійного електроживлення.</h3>-->

<!--            <strong>Оригінальні акумуляторні батареї, розроблені спеціально для вашого автомобіля Toyota, забезпечать Вам оптимальну продуктивність при водінні. І ось чому:</strong>-->

<!--            <ul>-->
<!--                <li>Гарантія 3 роки, без обмеження пробігу*</li>-->
<!--                <li>Не потребують обслуговування</li>-->
<!--                <li>Акумуляторні батареї надійні за будь-якої погоди та у будь-яку пору року</li>-->
<!--            </ul>-->

<!--            <p>*Гарантія розповсюджується на оригінальні акумуляторні батареї Toyota зі структурою каталожного номера 28800-YZZxx, придбані та встановлені в офіційному дилерському центрі Toyota, та діє згідно умов експлуатаційної документації.</p>-->

<!--            <div class="row images p-0">-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Img-1_tcm-3046-688574.jpg" alt="/">-->
<!--                </div>-->
<!--                <div class="col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Img-2_tcm-3046-688575.jpg" alt="/">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="p">Кожна подорож або поїздка залежить від надійності джерела енергії, наші акумуляторні батареї розроблені для того, щоб забезпечити ваш автомобіль потужністю на роки.</div>-->


<!--            <div class="accordion" id="accordion">-->
<!--                <h3>Практичні поради по догляду за акумулятором</h3>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0">-->
<!--                        <h5 class="m-0">-->
<!--                            <button class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">-->
<!--                                Чи можна «прикурювати» інший автомобіль?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->

<!--                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">-->
<!--                        <div class="card-body">-->

<!--                            <div class="p">Можна, дотримуючись певних вимог. Двигун автомобіля, від якого здійснюють «прикурювання», повинен бути обов'язково вимкнений.</div>-->

<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingTwo">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">-->
<!--                                Якщо при запуску двигуна в зимовий час акумулятор розрядився в «нуль», які дії потрібно зробити?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                Глибокий розряд шкідливий для будь-якої батареї. Якщо це сталося, то необхідно зарядити акумулятор від стаціонарного зарядного пристрою, але не пізніше ніж через 2-3 дні після глибокого розряду батареї.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingThree">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">-->
<!--                                Чому замерзає електроліт?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                При розряді АКБ знижується щільність електроліту, тобто зменшується питома кількість сірчаної кислоти, що міститься в розчині електроліту, і утворюється вода. Чим глибше розряд батареї, тим вище негативна температура, при якій може замерзнути електроліт. Наприклад, при щільності 1,11 г / см<sup>3</sup> електроліт замерзне вже при -7 0<sup>С</sup>, а при щільності 1,27 г / см<sup>3</sup> - тільки при -58 0<sup>С</sup>.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingFour">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">-->
<!--                                Якщо замерз електроліт, чи можна відновити працездатність акумулятора?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                Все залежить від ступеня замерзання. Якщо батарея замерзла не на весь обсяг, і не деформувався корпус, то її можна відновити. Лід повинен повністю розтанути при кімнатній температурі, і тільки потім слід зарядити АКБ.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0">-->
<!--                        <h5 class="m-0">-->
<!--                            <button class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">-->
<!--                                Якщо в мороз перед запуском двигуна включити на короткий час фари автомобіля, чи допоможе це полегшити запуск?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->

<!--                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                Ні, ця процедура абсолютно марна, так як ефект розігріву електроліту мізерний і не збільшує потужність розряду. Навпаки, батарея може втратити дорогоцінну ємність і буде вже не в змозі запустити двигун.-->
<!--                            </div>-->

<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingSix">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">-->
<!--                                Пуск двигуна в зимовий час залежить тільки від акумуляторної батареї?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div>-->
<!--                                <h5>Ні, не тільки.  Крім технічних характеристик і ступеня зарядженості батареї, пуск двигуна залежить від наступних факторів:</h5>-->
<!--                                <ul>-->
<!--                                    <li>Від стану електропроводки та електрообладнання автомобіля; </li>-->
<!--                                    <li>Від стану свічок запалення;</li>-->
<!--                                    <li>Від стану паливної системи і якості палива;</li>-->
<!--                                    <li>Від якості масла;</li>-->
<!--                                    <li>Від досвіду водія.</li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingSeven">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">-->
<!--                                Що впливає на роботу акумулятора?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div>-->
<!--                                <h5>На роботу АКБ впливає:</h5>-->
<!--                                <ul>-->
<!--                                    <li>Інтенсивність експлуатації (чим вище інтенсивність, тим менше термін служби);</li>-->
<!--                                    <li>Регулярність контролю батареї (перевірка щільності і рівня електроліту);</li>-->
<!--                                    <li>Справність електрообладнання;</li>-->
<!--                                    <li>Температурні умови навколишнього середовища (екстремально низькі і високі температури знижують термін служби батареї).</li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingEight">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">-->
<!--                                Якщо автомобіль експлуатується тільки влітку, як акумулятор обслуговувати і зберігати взимку?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                У зимовий період рекомендуємо знімати батарею з автомобіля. Акумулятор потрібно повністю зарядити. Бажано кожні 3 місяці перевіряти щільність електроліту і при необхідності проводити підзарядку, такі заходи значно знизять швидкість корозії пластин.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingNine">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">-->
<!--                                Яким струмом і скільки часу треба заряджати глибоко розряджений авто акумулятор?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                При режимі заряду, який рекомендується усіма виробниками автомобільних акумуляторів, струм заряду повинен складати 1/10 від повної ємності батареї, при цьому струмі повністю розряджений акумулятор буде заряджатися близько 12 годин. Наприклад, при ємності акумулятора 60А / ч струм заряду необхідно встановити на рівні не більше 6 Ампер. Краще, звичайно, використовувати менші струми і здійснювати зарядку на кілька годин довше. Наприклад, акумулятор ємністю 60А / ч заряджати струмом 3 Ампер протягом доби. Це допоможе більш повно зарядити батарею.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingTen">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">-->
<!--                                Як дізнатися, що акумулятор зарядився повністю?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                Якщо при проведенні підзарядки автомобільного акумулятора напруга на його клемах при однаковому струмі заряду не збільшується вже більше години, значить, можна говорити про те, що акумулятор зарядився повністю.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div class="card-header p-0" id="headingEleven">-->
<!--                        <h5 class="mb-0">-->
<!--                            <button  class="btn btn-link w-100 text-left pl-4 py-4 text-dark" style="font-size: 1.6rem" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">-->
<!--                                Як впливає глибокий розряд акумулятора на технічний стан?-->
<!--                            </button>-->
<!--                        </h5>-->
<!--                    </div>-->
<!--                    <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">-->
<!--                        <div class="card-body">-->
<!--                            <div class="p">-->
<!--                                Категорично негативно. Повний розряд вкрай небезпечний і небажаний для сучасних необслуговуваних акумуляторів. За даними виробників, навіть разовий повний розряд може призвести до поломки батареї. При розряді в батареї можуть початися незворотні наслідки - осипання активної маси, руйнування електродів і т.д. Повернути такий акумулятор до життя може бути дуже складно або навіть неможливо.-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->

<!--        </div>-->



    </section>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "RechargeableBatteries",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 18,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Акумуляторні батареї Toyota`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Акумуляторні батареї Toyota`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Сучасний автомобіль Toyota демонструє найкращі досягнення електронних систем, які роблять керування більш безпечним, більш легким і приємним.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Сучасний автомобіль Toyota демонструє найкращі досягнення електронних систем, які роблять керування більш безпечним, більш легким і приємним.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, Сервіс Toyota, Тойота, тойота королла,  автомобіль Toyota, технічне обслуговування toyota, заміна моторного масла,  дилерський центр Toyota, дилер тойота, дилер Toyota, Тойота Україна,  сервісна пропозиція тойота, виграти автомобіль Toyota Corolla, акція Тойота, заміна масла двигуна, оригінальне масло Toyota, Toyota Corolla, розіграш автомобіля Toyota  Corolla, Toyota corola, сервис Toyota, toyota, Toyota Україна, автомобиль Toyota, техническое обслуживание тойота, замена моторного масла toyota, дилерский центр Toyota Украина, сервисное предложение toyota, выиграть автомобиль Toyota Corolla, акция Тойота, замена масла двигателя, оригинальное масло Toyota, Приз Toyota Corolla, подарок тойота королла, розыгрыш автомобиля Toyota Corolla, тойота корола, тойота украина, обслуживание автомобиля тойота, техническое обслуживание автомобиля, техобслуживание автомобиля, техобслуживание тойота, замена масла тойота, замена масла тойота цена, Genuine Parts`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, Сервіс Toyota, Тойота, тойота королла,  автомобіль Toyota, технічне обслуговування toyota, заміна моторного масла,  дилерський центр Toyota, дилер тойота, дилер Toyota, Тойота Україна,  сервісна пропозиція тойота, виграти автомобіль Toyota Corolla, акція Тойота, заміна масла двигуна, оригінальне масло Toyota, Toyota Corolla, розіграш автомобіля Toyota  Corolla, Toyota corola, сервис Toyota, toyota, Toyota Україна, автомобиль Toyota, техническое обслуживание тойота, замена моторного масла toyota, дилерский центр Toyota Украина, сервисное предложение toyota, выиграть автомобиль Toyota Corolla, акция Тойота, замена масла двигателя, оригинальное масло Toyota, Приз Toyota Corolla, подарок тойота королла, розыгрыш автомобиля Toyota Corolla, тойота корола, тойота украина, обслуживание автомобиля тойота, техническое обслуживание автомобиля, техобслуживание автомобиля, техобслуживание тойота, замена масла тойота, замена масла тойота цена, Genuine Parts`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;
    }


    section.container-fluid ::v-deep div {
        /*padding: 0;*/
        /*margin: 0;*/

        header {
            height: 80vh;
            width: 100%;
            padding-top: 300px;
            background-image: url(//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/%D0%BE%D1%80%D0%B8%D0%B3%D1%96%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%96-%D0%B1%D0%B0%D1%82%D0%B0%D1%80%D0%B5%D1%97-toyota-1600x900_tcm-3046-688570.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: #ffffff;

            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                /*text-align: left;*/
            }

            h2 {
                font-size: 3.4rem;
                margin-top: 16px;
            }
        }

        .body.container {
            color: $font_color;

            h3 {
                font-size: 2.2rem;
                margin: 68px 0;
            }

            strong {
                font-size: 1.6rem;
                margin-bottom: 24px;
            }

            ul {
                margin: 40px 0;
                padding-left: 20px;
                font-size: 1.5rem;
                li {
                    margin-bottom: 10px;
                    color: #595D60;
                }
            }

            .p {
                font-size: 1.5rem;
                color: #595D60;
            }

            .row.images {
                margin: 68px 0;
                div {
                    img {
                        width: 100%;
                    }
                }
            }

            .accordion {
                h3 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-align: center;
                    margin: 68px 0 30px;
                }

                .collapse {
                    .card-body {
                        padding: 68px 15px;
                        h5 {
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        section.container-fluid ::v-deep div {
            /*padding: 0;*/
            /*margin: 0;*/

            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 25vw;
                h1 {
                    font-size: 5vw;
                }
                h2 {
                    font-size: 4vw;
                }
            }

            .body.container {
                h3 {
                    font-size: 2rem;
                    margin: 30px 0;
                }

                strong {
                    font-size: 1.6rem;
                    margin-bottom: 24px;
                }

                ul {
                    margin: 20px 0;
                }

                .row.images {
                    margin: 30px 0;
                    div {
                        margin-bottom: 30px;
                    }
                }

                .accordion {
                    h3 {
                        font-size: 1.8rem;
                        margin: 30px 0;
                    }

                    .collapse {
                        .card-body {
                            padding: 30px 15px;
                            h5 {
                                font-size: 1.8rem;
                            }
                        }
                    }
                }
            }
        }
    }

</style>