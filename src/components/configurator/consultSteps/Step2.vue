<template>
    <article class="step_2 container">
        <div class="row">
            <form name="consultation" class="col-xl-7 col-12 row justify-content-between text-left" @submit.prevent="onSubmit()">
                <div class="field form-group col-md-6 col-12">
                    <label for="first_name"> Ім’я <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Ім’я"
                           :class="{'is-invalid' : $v.firstName.$error}"
                           id="first_name"
                           type="text"
                           v-model="firstName"
                           @blur="$v.firstName.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.firstName.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback"  v-if="!$v.firstName.alfaValidate">Для введення допускається тільки букви.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="lastName">Прізвище <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Прізвище"
                           :class="{'is-invalid' : $v.lastName.$error}"
                           id="lastName"
                           type="text"
                           v-model="lastName"
                           @blur="$v.lastName.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.lastName.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback"  v-if="!$v.lastName.alfaValidate">Для введення допускається тільки букви.</div>
                </div>

                <div class="field form-group col-xl-3 col-md-6 col-12">
                    <label for="city">Місто <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Місто"
                           :class="{'is-invalid' : $v.city.$error}"
                           id="city"
                           type="text"
                           v-model="city"
                           @blur="$v.city.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.city.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback"  v-if="!$v.city.alfaValidate">Для введення допускається тільки букви.</div>
                </div>

                <div class="field form-group col-xl-9 col-md-6 col-12">
                    <label for="phone">Контактний номер телефону: <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="+38 ___ __ __ ___ "
                           :class="{'is-invalid' : $v.phone.$error}"
                           id="phone"
                           type="tel"
                           v-model="phone"
                           @blur="$v.phone.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.phone.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback"  v-if="!$v.phone.minLength || !$v.phone.maxLength || !$v.phone.phone">Невірний формат номеру.</div>
<!--                    <div class="invalid-feedback"  v-if="!$v.phone.phone">Для ввода допускается только цифры.</div>-->

                </div>

                <div class="field form-group col-12">
                    <label for="email">Електронна адреса: <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="user@user.com"
                           :class="{'is-invalid' : $v.eMail.$error}"
                           id="email" type="email"
                           v-model="eMail"
                           @blur="$v.eMail.$touch()">
                    <div class="invalid-feedback" v-if="!$v.eMail.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback" v-if="!$v.eMail.email">Введіть дійсниу електронну пошту</div>
                </div>

                <div class="field form-group col-12">
                    <label for="user_msg">Текст повідомлення <br/>(до 1 тис. друкованих знаків)</label><br>
                    <textarea class="form-control"
                              placeholder="Текст"
                              name="userMsg"
                              id="user_msg"
                              maxlength="1000"
                              v-model="userMsg"
                    ></textarea>
                </div>

                <h4 class="col-12">Коли ви хотіли б отримати онлайн консультацію?</h4>

                <div class="field form-group col-md-6 col-12">
                    <label for="date">Дата</label><br>
                    <input class="form-control"
                           id="date"
                           type="date"
                           v-model="date">
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="time">Час</label><br>
                    <input class="form-control"
                           id="time"
                           type="time"
                           v-model="time">
                </div>

                <div class="field col-12">
                    <div class="info" :class="{ 'expand_info' : expandBlock }">
                        <p>
                            Проставляючи цю відмітку я надаю свою однозначну згоду на обробку своїх персональних даних, а саме: прізвища, імені, по батькові, адреси електронної пошти, номера телефону , ПІІ «Тойота-Україна», код ЄДРПОУ 32589471, проспект Степана Бандери, 24-Б, м. Київ 04073 (надалі - «Володілець») з метою запису на тест-драйв та проходження тест-драйву автомобіля, здійснення маркетингової діяльності та діяльності з просування продукції під торговельними марками «Toyota» («Тойота») та/або «Lexus» («Лексус»), досліджень ринку та споживацького попиту, на наступних умовах:
                        </p>

                        <ul>
                            <li> Надані мною персональні дані, в межах зазначеної вище мети обробки персональних даних, можуть бути передані афілійованим особам Володільця (будь-яким компаніям групи Toyota, незалежно від країни), офіційним дилерам Володільця (які також можуть виступати як розпорядники персональних даних), а також іншим особам, що мають договірні відносини з Володільцем та/або його офіційними дилерами та здійснюють рекламні, маркетингові заходи тощо.</li>

                            <li>Ця згода чинна протягом строку, необхідного для реалізації передбаченої нею мети обробки персональних даних, та може бути відкликана шляхом направлення повідомлення Володільцю. Відкликання цієї згоди матиме наслідком припинення обробки моїх персональних даних.</li>

                            <li>Я повідомлений(а) про Володільця моїх персональних даних, склад та зміст, мету обробки моїх персональних даних та осіб, яким передаються мої персональні дані. Поширення, передача та надання доступу до персональних даних іншим особам в рамках цієї згоди , не потребуватимуть отримання окремої згоди на такі дії або надання мені окремого повідомлення.</li>

                            <li>Будь-які звернення стосовно обробки моїх персональних даних мають бути направлені на вказану вище адресу Володільця.</li>

                            <li>Я повідомлений(а) про те, що маю наступні права суб'єкта персональних даних, передбачені ст. 8 Закону України «Про захист персональних даних», а саме:
                                <ul>
                                    <li>знати про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки, місцезнаходження або місце проживання (перебування) володільця чи розпорядника персональних даних або дати відповідне доручення щодо отримання цієї інформації уповноваженим ним особам, крім випадків, встановлених законом;</li>

                                    <li>отримувати інформацію про умови надання доступу до персональних даних, зокрема інформацію про третіх осіб, яким передаються мої персональні дані;</li>

                                    <li>на доступ до своїх персональних даних;</li>

                                    <li>отримувати не пізніш як за тридцять календарних днів з дня надходження запиту, крім випадків, передбачених законом, відповідь про те, чи обробляються мої персональні дані, а також отримувати зміст таких персональних даних;</li>

                                    <li>пред’являти вмотивовану вимогу володільцю персональних даних із запереченням проти обробки своїх персональних даних;</li>

                                    <li>пред’являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних будь-яким володільцем та розпорядником персональних даних, якщо ці дані обробляються незаконно чи є недостовірними;</li>

                                    <li>на захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення, пошкодження у зв’язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням, а також на захист від надання відомостей, що є недостовірними чи ганьблять честь, гідність та ділову репутацію фізичної особи;</li>

                                    <li>звертатися із скаргами на обробку своїх персональних даних до Уповноваженого Верховної Ради України з прав людини або до суду;</li>

                                    <li>застосовувати засоби правового захисту в разі порушення законодавства про захист персональних даних;</li>

                                    <li>вносити застереження стосовно обмеження права на обробку своїх персональних даних під час надання згоди;</li>

                                    <li>відкликати згоду на обробку персональних даних;</li>

                                    <li>знати механізм автоматичної обробки персональних даних;</li>

                                    <li>на захист від автоматизованого рішення, яке має для нього правові наслідки.</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <div class="row">
                        <button class="btn btn-link"
                                v-if="expandBlock"
                                @click.prevent="expand()"
                        >Детальніше</button>
                        <button class="btn btn-link"
                                v-else
                                @click.prevent="expand()"
                        >Згорнути</button>
                    </div>

                </div>

                <div class="field form-group checkbox col-12">
                    <input class="form-control"
                           id="agree" type="checkbox"
                           value="true"
                           v-model="agree">
                    <label for="agree"><span class="check"><i class="fas fa-check"></i></span>Я згоден на збір та обробку моїх персональних даних <span>*</span></label>
                </div>

                <div class="field form-group col-12">
                    <button type="submit"
                            class="btn btn-danger"
                            :disabled="$v.$invalid"
                    >Прийняти</button>
                </div>


                <div class="field col-12">
                    <small class="font-italic">*  Попри те, що ми надаємо можливість записатися на пробну поїздку на будь-якій моделі з модельного ряду Toyota в Україні, не всі моделі наявні у всіх дилерів для тест-драйву. Актуальний модельний ряд, доступний для тест-драйву, уточнюйте, будь ласка, в обраного вами дилера Toyota.</small>
                </div>


            </form>





            <div class="change col-xl-5 col-12">
                <div class="image">
                    <img :src="getPhoto" :alt="getConsultation.model.name">
                </div>
                <div class="info row text-left">
                    <div class="col-2 p-0"><i class="fas fa-car"></i></div>
                    <div class="col-8 p-0">
                        <h5 class="font-weight-bold">Оберіть модель та двигун</h5>
                        <p>{{getConsultation.model.name}}, {{getConsultation.engineType}}</p>
                    </div>
                    <div class="col-2 p-0">
                        <router-link
                                tag="button"
                                class="btn btn-link"
                                exact
                                to="/configurator/consultation/step_1"
                        >Змінити</router-link>
                    </div>
                </div>
            </div>
        </div>

    </article>
</template>

<script>
    // import axios from "axios"
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
    // import {eventEmitter} from "@/main";

    export default {
        name: "Step2",

        data: function () {
            return {
                name: 'step2',

                firstName: "",
                lastName: "",
                city: "",
                phone: "",
                eMail: "",
                userMsg: "",
                date: "",
                time: "",
                agree: false,

                // consultation: {},
                expandBlock: true,
            }
        },

        computed: {
            model() {
                return this.$store.getters.getModel;
            },

            getConsultation() {
                return this.$store.getters.getConsultation;
            },

            getPhoto() {
                return 'http://lara.toyota.nikolaev.ua/storage/' + this.getConsultation.model.image;
            },


        },

        validations: {

            firstName: {
                required,
                alfaValidate(str) {
                    const regexp = /[A-ZА-Я]{1}[-'a-zа-я]+/;
                    return regexp.test(str);
                }
            },

            lastName: {
                required,
                alfaValidate(str) {
                    const regexp = /[A-ZА-Я]{1}[-'a-zа-я]+/;
                    return regexp.test(str);
                }
            },

            city: {
                required,
                alfaValidate(str) {
                    const regexp = /[A-ZА-Я]{1}[-'a-zа-я]+/;
                    return regexp.test(str);
                }
            },

            phone: {
                required,
                minLength: minLength(12),
                maxLength: maxLength(17),
                phone(str) {
                    const regexp = /\+38[- ]?[0-9]{3}[- ]?[0-9]{2}[- ]?[0-9]{2}[- ]?[0-9]{3}/;
                    return regexp.test(str);
                },
            },

            eMail: {
                required,
                email,
            },

            userMsg: {},

            date: {},

            time:{},

        },

        created() {

        },

        mounted: function () {

        },

        methods: {
            expand() {
                this.expandBlock = !this.expandBlock;
            },

            onSubmit() {
                const consultation = {
                    model: this.model,
                    engineType: this.getConsultation.engineType,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    city: this.city,
                    phone: this.phone,
                    eMail: this.eMail,
                    userMsg: this.userMsg,
                    date: this.date,
                    time: this.time,
                    agree: this.agree,
                };
                console.log(consultation);
                // eventEmitter.$emit('close');
                this.$store.state.openConsultation = !this.$store.state.openConsultation
                // axios.post(
                //     'http://lara.toyota.nikolaev.ua/ajax/--',
                //     consultation,
                // )
                // .then( (response) => {
                //     console.log("Данные переданы успешно!")
                //     console.log(response)
                // } )
                // .catch( (error) => {
                //     console.log(" Ошибка передачи данных");
                //     console.log(error);
                // } );


            },


        },

        components: {

            },



    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }

    article.step_2.container {
        height: 70vh;
        overflow: auto;
        padding: 36px 20px;
        .row {
            form[name="consultation"] {
                .field {
                    margin-bottom: 20px;
                    padding: 0 15px;
                    label {
                        color: #6c7073;
                        width: 100%;
                        font-size: 1.6rem;
                        margin-bottom: 10px;
                        span {
                            color: #E50000;
                        }
                    }
                    input {
                        @include inputForm;
                    }
                    textarea {
                        @include inputForm;
                        width: 100%;
                        height: 150px;
                        border-radius: 5px;
                    }

                    .invalid-feedback {
                        font-size: 1.3rem;
                    }

                    .info {
                        font-size: 1rem;
                        color: #6c7073;
                        margin-top: 40px;
                        p {
                            margin-bottom: 20px;
                        }
                        ul {
                            margin-top: 15px;
                            padding-left: 20px;
                            li {
                                margin-bottom: 15px;
                                padding-left: 10px;
                            }
                        }
                        &.expand_info {
                            height: 80px;
                            overflow: hidden;
                        }
                    }
                    .row {
                        float: right;
                        button.btn.btn-link {
                            @include button_link;
                            /*<!--font-size: 1.3rem;-->*/
                            /*<!--color: $font_color;-->*/
                            /*<!--text-decoration: underline;-->*/
                        }
                    }
                    button {
                        @include button;
                        width: auto;
                        padding-left: 30px;
                        padding-right: 30px;
                        &[disable="true"] {
                            background-color: #ccc;
                        }
                    }

                    small {
                        font-size: 1rem;
                    }

                    &.checkbox {
                        label {
                            span.check {
                                vertical-align: middle;
                                display: inline-block;
                                margin-right: 15px;
                                width: 20px;
                                height: 20px;
                                border: 2px solid #e0e0e0;
                                border-radius: 3px;
                                i.fa-check {
                                    display: none;
                                    position: relative;
                                    bottom: 3px;
                                }
                            }
                        }
                        input[type="checkbox"] {
                            display: none;
                            &:checked + label {
                                span i.fa-check {
                                    display: inline-block;
                                }
                            }
                        }
                    }

                }
                h4 {
                    font-size: 1.9rem;
                    padding-left: 15px;
                    margin-top: 30px;
                    margin-bottom: 20px;
                }
            }

            .change {
                margin-bottom: 40px;
                .image {
                    width: 100%;
                    padding: 15px;
                    margin-bottom: 20px;
                    img {
                        width: 100%;
                    }
                }

                .info.row {
                    @include inputForm;
                    padding: 30px;
                    margin: 0;
                    div {
                        i {
                            font-size: 3rem;
                            color: #7a7a7a;
                        }
                        h5 {
                            font-size: 1.4rem;
                            margin-bottom: 15px;
                        }
                        p {
                            font-size: 1.4rem;
                        }
                        button {
                            @include button_link;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1199.9px) {
        article.step_2.container {
            position: absolute;
            top: 180px;
            height: 70vh;
            box-sizing: border-box;
            .row {
                form[name="consultation"] {
                    margin: 0;
                }

                .change {
                    order: -1;
                    padding: 0 30px;
                }
            }
        }
    }

    @media (max-width: 767.9px) {
        article.step_2.container {
            position: static;
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0 auto;
            .row {
                margin: 0;
                form[name="consultation"] {
                    margin: 0;
                    .field {
                        margin-bottom: 20px;
                        padding: 0 15px;

                        input {
                            padding: 15px 20px;
                            height: auto;
                        }
                        textarea {
                            @include inputForm;
                            width: 100%;
                            height: 150px;
                            border-radius: 5px;
                        }

                        .row {
                            float: right;
                            button.btn.btn-link {
                                @include button_link;
                                /*<!--font-size: 1.3rem;-->*/
                                /*<!--color: $font_color;-->*/
                                /*<!--text-decoration: underline;-->*/
                            }
                        }
                        button {
                            @include button;
                            width: auto;
                            padding-left: 30px;
                            padding-right: 30px;
                            &[disable="true"] {
                                background-color: #ccc;
                            }
                        }
                    }
                }

                .change {
                    order: -1;
                    margin-bottom: 40px;
                    padding: 0 30px;


                    .info.row {
                        @include inputForm;
                        padding: 30px;
                        margin: 0;
                        div {
                            i {
                                font-size: 3rem;
                                color: #7a7a7a;
                            }
                            h5 {
                                font-size: 1.4rem;
                                margin-bottom: 15px;
                            }
                            p {
                                font-size: 1.4rem;
                            }
                            button {
                                @include button_link;
                            }
                        }
                    }
                }
            }
        }
    }
</style>