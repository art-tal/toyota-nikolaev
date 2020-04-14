<template>
    <article class="step_2 container">
        <div class="row">
            <form name="consultation" class="col-xl-7 col-12 row justify-content-between text-left" @submit.prevent="onSubmit()">
                <div class="field form-group col-md-6 col-12">
                    <label for="first_name"> Имя <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Имя"
                           :class="{'is-invalid' : $v.firstName.$error}"
                           id="first_name"
                           type="text"
                           v-model="firstName"
                           @blur="$v.firstName.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.firstName.required">Это поле является обязательным для заполнения.</div>
                    <div class="invalid-feedback"  v-if="!$v.firstName.alfaValidate">Для ввода допускается только буквы.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="lastName">Фамилия <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Фамилия"
                           :class="{'is-invalid' : $v.lastName.$error}"
                           id="lastName"
                           type="text"
                           v-model="lastName"
                           @blur="$v.lastName.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.lastName.required">Это поле является обязательным для заполнения.</div>
                    <div class="invalid-feedback"  v-if="!$v.lastName.alfaValidate">Для ввода допускается только буквы.</div>
                </div>

                <div class="field form-group col-xl-3 col-md-6 col-12">
                    <label for="city">Город <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="Город"
                           :class="{'is-invalid' : $v.city.$error}"
                           id="city"
                           type="text"
                           v-model="city"
                           @blur="$v.city.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.city.required">Это поле является обязательным для заполнения.</div>
                    <div class="invalid-feedback"  v-if="!$v.city.alfaValidate">Для ввода допускается только буквы.</div>
                </div>

                <div class="field form-group col-xl-9 col-md-6 col-12">
                    <label for="phone">Контактный номер телефона: <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="+38 ___ __ __ ___ "
                           :class="{'is-invalid' : $v.phone.$error}"
                           id="phone"
                           type="tel"
                           v-model="phone"
                           @blur="$v.phone.$touch()">
                    <div class="invalid-feedback"  v-if="!$v.phone.required">Это поле является обязательным для заполнения.</div>
                    <div class="invalid-feedback"  v-if="!$v.phone.minLength || !$v.phone.maxLength || !$v.phone.phone">Неверный формат номера.</div>
<!--                    <div class="invalid-feedback"  v-if="!$v.phone.phone">Для ввода допускается только цифры.</div>-->

                </div>

                <div class="field form-group col-12">
                    <label for="email">Електронный адрес <span>*</span></label><br>
                    <input class="form-control"
                           placeholder="user@user.com"
                           :class="{'is-invalid' : $v.eMail.$error}"
                           id="email" type="email"
                           v-model="eMail"
                           @blur="$v.eMail.$touch()">
                    <div class="invalid-feedback" v-if="!$v.eMail.required">Это поле является обязательным для заполнения.</div>
                    <div class="invalid-feedback" v-if="!$v.eMail.email">Введите действительную электронную почту.</div>
                </div>

                <div class="field form-group col-12">
                    <label for="user_msg">Текст сообщения <br/>(до 1 тыс.печатных знаков)</label><br>
                    <textarea class="form-control"
                              placeholder="Текст"
                              name="userMsg"
                              id="user_msg"
                              v-model="userMsg"
                    ></textarea>
                </div>

                <h4 class="col-12">Когда вы хотели бы получить онлайн консультацию?</h4>

                <div class="field form-group col-md-6 col-12">
                    <label for="date">Дата</label><br>
                    <input class="form-control"
                           id="date"
                           type="date"
                           v-model="date">
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="time">Время</label><br>
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
                            <li> Предоставляемые мной персональные данные, в пределах указанной выше цели обработки персональных данных, могут быть переданы аффилированным лицам владельцам (любым компаниям группы Toyota, независимо от страны), официальным дилерам владельцев (которые также могут выступать как распорядители персональных данных), а также другим лицам, имеющим договорные отношения с Владельцем и / или его официальными дилерами и осуществляют рекламные, маркетинговые мероприятия и тому подобное.</li>
                            <li>Это согласие действительна в течение срока, необходимого для реализации предусмотренной ею цели обработки персональных данных, и может быть отозвано путем направления уведомления владельца. Отзыв этого согласия влечет прекращение обработки моих персональных данных.</li>
                            <li>Я уведомлен (а) о владельце моих персональных данных, состав и содержание, цель обработки моих персональных данных и лиц, которым передаются мои персональные данные. Распространение, передача и предоставление доступа к персональным данным другим лицам в рамках этого согласия, не потребуют получения отдельной согласия на такие действия или предоставления мне отдельного сообщения.</li>
                            <li>Любые обращения относительно обработки моих персональных данных должны быть направлены на указанную выше адрес владельца.</li>
                            <li>Я уведомлен (а) о том, что есть следующие права субъекта персональных данных, предусмотренных ст. 8 Закона Украины «О защите персональных данных», а именно:
                                <ul>
                                    <li>знать об источниках сбора, местонахождение своих персональных данных, цели их обработки, местонахождение или место жительства (пребывания) владельца или распорядителя персональных данных или дать соответствующее поручение о получении этой информации уполномоченным им лицам, кроме случаев, установленных законом;</li>
                                    <li>получать информацию об условиях предоставления доступа к персональным данным, включая информацию о третьих лицах, которым передаются мои персональные данные;</li>
                                    <li>на доступ к своим персональным данным;</li>
                                    <li>получать не позднее чем за тридцать календарных дней со дня поступления запроса, кроме случаев, предусмотренных законом, ответ о том, обрабатываются мои персональные данные, а также получать содержание таких персональных данных;</li>
                                    <li>предъявлять мотивированное требование владельцу персональных данных с возражением против обработки своих персональных данных;</li>
                                    <li>предъявлять мотивированное требование об изменении или уничтожение своих персональных данных любым владельцем и распорядителем персональных данных, если эти данные обрабатываются незаконно или являются недостоверными;</li>
                                    <li>на защиту своих персональных данных от незаконной обработки и случайной потери, уничтожения, повреждения в связи с умышленным сокрытием, непредоставлением или несвоевременным их предоставлением, а также на защиту от предоставления сведений, которые являются недостоверными или порочащих честь, достоинство и деловую репутацию физического лица ;</li>
                                    <li>обращаться с жалобами на обработку своих персональных данных к Уполномоченному Верховной Рады Украины по правам человека или в суд;</li>
                                    <li>применять средства правовой защиты в случае нарушения законодательства о защите персональных данных;</li>
                                    <li>вносить оговорки об ограничении права на обработку своих персональных данных при предоставлении согласия;</li>
                                    <li>отозвать согласие на обработку персональных данных;</li>
                                    <li>знать механизм автоматической обработки персональных данных;</li>
                                    <li>на защиту от автоматизированного решения, которое имеет для него правовые последствия.</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <div class="row">
                        <button class="btn btn-link"
                                v-if="expandBlock"
                                @click.prevent="expand()"
                        >Развернуть</button>
                        <button class="btn btn-link"
                                v-else
                                @click.prevent="expand()"
                        >Свернуть</button>
                    </div>

                </div>

                <div class="field form-group checkbox col-12">
                    <input class="form-control"
                           id="agree" type="checkbox"
                           value="true"
                           v-model="agree">
                    <label for="agree"><span class="check"><i class="fas fa-check"></i></span>Я согласен на сбор и обработку моих персональных данных <span>*</span></label>
                </div>

                <div class="field form-group col-12">
                    <button type="submit"
                            class="btn btn-danger"
                            :disabled="$v.$invalid"
                    >Принять</button>
                </div>


                <div class="field col-12">
                    <small class="font-italic">* Несмотря на то, что мы предоставляем возможность записаться на пробную поездку на любой модели из модельного ряда Toyota в Украине, не все модели имеющиеся у всех дилеров для тест-драйва. Актуальный модельный ряд, доступный для тест-драйва, уточняйте, пожалуйста, у дилера Toyota.</small>
                </div>


            </form>





            <div class="change col-xl-5 col-12">
                <div class="image">
                    <img :src="getPhoto" :alt="getConsultation.model.name">
                </div>
                <div class="info row text-left">
                    <div class="col-2 p-0"><i class="fas fa-car"></i></div>
                    <div class="col-8 p-0">
                        <h5 class="font-weight-bold">Выберите модель и двигатель</h5>
                        <p>{{getConsultation.model.name}}, {{getConsultation.engineType}}</p>
                    </div>
                    <div class="col-2 p-0">
                        <router-link
                                tag="button"
                                class="btn btn-link"
                                exact
                                to="/configurator/consultation/step_1"
                        >Изменить</router-link>
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