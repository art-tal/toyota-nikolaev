<template>
    <main>
        <header class="container-fluid">
            <h1 class="container text-left">Запис на сервісне обслуговування
                <span>
                    до офіційного дилера Toyota
                </span>
            </h1>
        </header>

        <div class="body container">
            <h2>
                Шановний клієнт!<br/>
                Залиште інформацію про Ваш автомобіль, бажаний час та дату,<br/>
                а також Ваші контактні дані та офіційний дилер Toyota в Україні зв'яжеться з Вами найближчим часом.
            </h2>

            <form name="service"  @submit.prevent="onSubmit()">
                <div class="row w-75  m-auto">


                <div class="field form-group col-md-6 col-12">
                    <label for="model">Модель <span>*</span></label>
                        <select name="model"
                                id="model"
                                v-model="model"
                                :class="{'is-invalid' : $v.model.$error}"
                                @blur="$v.model.$touch()"
                        >
                            <option selected="selected" disabled="disabled" value="">Вибрати</option>
                            <option :value="model"
                                    v-for="(model, key) in models"
                                    :key="key"
                            >
                                {{model.name}}
                            </option>
                        </select>

                    <div class="invalid-feedback"  v-if="!$v.model.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="service">Послуга <span>*</span></label>
                    <select id="service"
                            :class="{'is-invalid' : $v.service.$error}"
                            v-model="service"
                            @blur="$v.service.$touch()"
                    >
                        <option selected="selected" disabled="disabled" value="">Вибрати</option>
                        <option value="Технічне обслуговування">Технічне обслуговування</option>
                        <option value="Діагностичні роботи">Діагностичні роботи</option>
                        <option value="Шиномонтаж">Шиномонтаж</option>
                        <option value="Мийка">Мийка</option>
                        <option value="Інше">Інше</option>
                        <option value="Заміна моторного масла та масляного фільтра">Заміна моторного масла та масляного фільтра</option>
                    </select>

                    <div class="invalid-feedback"  v-if="!$v.service.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="gender">Як до Вас звертатись? <span>*</span></label>
                    <select id="gender"
                            :class="{'is-invalid' : $v.gender.$error}"
                            v-model="gender"
                            @blur="$v.gender.$touch()"
                    >
                        <option selected="selected" disabled="disabled" value="">Вибрати</option>
                        <option value="Пан">Пан</option>
                        <option value="Пані">Пані</option>
                    </select>

                    <div class="invalid-feedback"  v-if="!$v.gender.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                    <div class="field form-group col-md-6 col-12">
                        <label for="last_name">Прізвище <span>*</span></label>
                        <input id="last_name"
                               :class="{'is-invalid' : $v.lastName.$error}"
                               type="text"
                               v-model="lastName"
                               @blur="$v.lastName.$touch()"
                        >

                        <div class="invalid-feedback"  v-if="!$v.lastName.required">Це поле є обов'язковим для заповненя.</div>
                        <div class="invalid-feedback"  v-if="!$v.lastName.alfaValidate">Для введення допускається тільки букви.</div>
                    </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="first_name">Ім'я <span>*</span></label>
                    <input id="first_name"
                           :class="{'is-invalid' : $v.firstName.$error}"
                           type="text"
                           v-model="firstName"
                           @blur="$v.firstName.$touch()"
                    >

                    <div class="invalid-feedback"  v-if="!$v.firstName.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback"  v-if="!$v.firstName.alfaValidate">Для введення допускається тільки букви.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="second_name">По-батькові <span></span></label>
                    <input id="second_name"
                           type="text"
                           v-model="secondName"
                    >
                </div>

                    <div class="field form-group col-md-6 col-12">
                        <label for="phone">Телефон <span>*</span></label>
                        <input id="phone"
                               placeholder="+38 (___) __-__-___"
                               :class="{'is-invalid' : $v.phone.$error}"
                               type="tel"
                               v-model="phone"
                               @blur="$v.phone.$touch()"
                        >

                        <div class="invalid-feedback"  v-if="!$v.phone.required">Це поле є обов'язковим для заповненя.</div>
                        <div class="invalid-feedback"  v-if="!$v.phone.minLength || !$v.phone.maxLength">Невірний формат номеру.</div>
                    </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="email">E-mail <span>*</span></label>
                    <input id="email"
                           :class="{'is-invalid' : $v.eMail.$error}"
                           type="email"
                           v-model="eMail"
                           @blur="$v.eMail.$touch()"
                    >

                    <div class="invalid-feedback" v-if="!$v.eMail.required">Це поле є обов'язковим для заповненя.</div>
                    <div class="invalid-feedback" v-if="!$v.eMail.email">Введіть дійсниу електронну пошту</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="state_number">Держ. номер ТЗ <span>*</span></label>
                    <input id="state_number"
                           :class="{'is-invalid' : $v.state_number.$error}"
                           type="text"
                           v-model="state_number"
                           @blur="$v.state_number.$touch()"
                    >

                    <div class="invalid-feedback" v-if="!$v.state_number.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="vin_number">Vin номер ТЗ <span></span></label>
                    <input id="vin_number" type="text" v-model="vin_number">
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="mileage">Пробіг: <span>*</span></label>
                    <input id="mileage"
                           :class="{'is-invalid' : $v.mileage.$error}"
                           type="text"
                           v-model="mileage"
                           @blur="$v.mileage.$touch()"
                    >

                    <div class="invalid-feedback" v-if="!$v.mileage.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="date">Оберіть бажані дату <span>*</span></label>
                    <input id="date" type="date" v-model="date">
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="time">Оберіть бажаний час <span>*</span></label>
                    <select name="time" id="time" v-model="time">
                        <option selected="selected" disabled="disabled" value="">Вибрати</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                    </select>
                </div>

                <div class="field form-group col-md-6 col-12">
                    <label for="connection">Як з вами зручніше зв'язатись? <span>*</span></label>
                    <select id="connection"
                            :class="{'is-invalid' : $v.connection.$error}"
                            v-model="connection"
                            @blur="$v.connection.$touch()"
                    >
                        <option selected="selected" disabled="disabled" value="">Вибрати</option>
                        <option value="По телефону" selected="selected">По телефону</option>
                        <option value="По email">По email</option>
                        <option value="По viber">По viber</option>
                        <option value="По telegram">По telegram</option>
                    </select>

                    <div class="invalid-feedback" v-if="!$v.connection.required">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field call_time form-group col-md-6 col-12">
                    <label for="call_time_start">Зручний час для дзвінка: <span></span></label>
                    <div class="wrap d-flex justify-content-between align-items-center">
                        <select id="call_time_start"
                                v-model="call_time_start"
                        >
                            <option selected="selected" disabled="disabled" value="">Вибрати</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                        </select>

                        <span class="mx-4"> - </span>

                        <select id="call_time_end"
                                v-model="call_time_end"
                        >
                            <option selected="selected" disabled="disabled" value="">Вибрати</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                        </select>
                    </div>

                </div>

                <div class="field form-group col-12">
                    <label for="comment">Коментар <span></span></label>
                    <textarea id="comment" v-model="comment"/>
                </div>

                    <div class="field form-group col-12">
                        <hr>
                </div>

                <p>Надані контактні дані будуть передані до обраного Вами дилерського центру з метою організації запису на сервіс. Послуги з сервісного обслуговування автомобілів надаються безпосередньо офіційними дилерами Toyota, які несуть відповідальність за їх якість та своєчасність надання</p>

                <div class="field form-group checkbox col-12 text-center">
                    <input class="form-control"
                           id="agree" type="checkbox"
                           value="true"
                           v-model="agree"
                    >
                    <label for="agree"><span class="check"><i class="fas fa-check"></i></span>Я згоден на збір та обробку моїх персональних даних <span>*</span></label>

                    <div class="invalid-feedback" v-if="!$v.agree.consent">Це поле є обов'язковим для заповненя.</div>
                </div>

                <div class="field form-group col-12 text-center">
                    <button type="submit"
                            class="btn btn-danger"
                            :disabled="$v.$invalid"
                    >Надіслати</button>
                </div>

                </div>
            </form>
        </div>

        <successful v-if="success"></successful>
        <error-message v-if="error"></error-message>
    </main>
</template>

<script>
    import axios from "axios"
    import Inputmask from "inputmask";
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
    import Successful from "./../../components/permanent/Successful";
    import ErrorMessage from "./../../components/permanent/ErrorMessage";

    export default {
        name: "SignUpForService",
        components: {ErrorMessage, Successful},
        component: {
            Successful,
            ErrorMessage,
        },

        data() {
            return {
                models: [],

                model: "",
                service: "",
                gender: "",
                phone: "",
                firstName: "",
                lastName: "",
                secondName: "",
                eMail: "",
                state_number: "",
                vin_number: "",
                mileage: "",
                date: "",
                time: "",
                call_time_start: "",
                call_time_end: "",
                connection: "",
                comment: "",
                agree: false,

                success: false,
                error: false,

            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Запис на сервісне обслуговування | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Запис на сервісне обслуговування | Toyota Україна`,
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `За допомогою форми запису на сервісне обслуговування, ви можете надіслати заявку до офіційного сервісного центру Тойота. Оберіть бажану послугу та залиште свої данні.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `За допомогою форми запису на сервісне обслуговування, ви можете надіслати заявку до офіційного сервісного центру Тойота. Оберіть бажану послугу та залиште свої данні.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `toyota, тойота, тойота україна, перевірити, сервіс, сервісна станція, обслуговування, переваги, проверить, сервис, сервисная станция, обслуживание, преимущества, отзывные кампании, техогляд, техосмотр `
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `toyota, тойота, тойота україна, перевірити, сервіс, сервісна станція, обслуговування, переваги, проверить, сервис, сервисная станция, обслуживание, преимущества, отзывные кампании, техогляд, техосмотр `
                    },
                ],
            }
        },

        validations: {
          model: {
              required,
          },
          service: {
              required,
          },
            gender: {
              required,
            },
          phone: {
              required,
              minLength: minLength(12),
              maxLength: maxLength(19),
              // phone(str) {
              //     const regexp = /\+38[- ]?[0-9]{3}[- ]?[0-9]{2}[- ]?[0-9]{2}[- ]?[0-9]{3}/;
              //     return regexp.test(str);
              // },
          },
          firstName: {
              required,
              alfaValidate(str) {
                    const regexp = /[A-ZА-Я]{1}[-'a-zа-я]+/;
                    return regexp.test(str);
              }
          },
          // secondName: {
          //       alfaValidate(str) {
          //           const regexp = /([A-ZА-Я]{1}[-'a-zа-я]+)?/;
          //           return regexp.test(str);
          //       }
          // },
          lastName: {
              required,
              alfaValidate(str) {
                    const regexp = /[A-ZА-Я]{1}[-'a-zа-я]+/;
                    return regexp.test(str);
              }
          },
          eMail: {
              required,
              email
          },
            state_number: {
              required,
            },

            mileage: {
                required,
            },

            connection: {
              required,
            },

            agree: {
                consent(answer) {
                    return answer;
                }
            }

        },

        created() {
            this.getModel();
        },

        mounted () {
            let im = new Inputmask("+38 (999) 99-99-999");
            im.mask(document.getElementById('phone'));
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);

        },

        watch: {
            date(){
                return this.date;
            }
        },

        methods: {
            getModel() {
                axios({
                    method: 'get',
                    url: "http://lara.toyota.nikolaev.ua/ajax/all_model",
                }).then( (response) => {
                    this.models = response.data;
                } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные модели");
                        console.log(error);
                    })
            },

            onSubmit() {
                const requestToService = {
                    model: this.model.name,
                    service: this.service,
                    gender: this.gender,
                    phone: this.phone,
                    firstName: this.firstName,
                    secondName: this.secondName,
                    lastName: this.lastName,
                    email: this.eMail,
                    state_number: this.state_number,
                    vin_number: this.vin_number,
                    mileage: this.mileage,
                    date: this.date,
                    time: this.time,
                    connection: this.connection,
                    call_time: `від ${this.call_time_start} до ${this.call_time_end}`,
                    comment: this.comment,
                    agree: this.agree,
                };
                axios.post(
                    "http://lara.toyota.nikolaev.ua/ajax/service",
                    requestToService,
                )
                    .then( () => {
                        console.log("Данные переданы успешно!");
                        this.success = true;
                        setTimeout( () => {this.success = false}, 2500 );
                    } )
                    .catch( (error) => {
                        console.log("Ошибка передачи формы");
                        console.log(error);
                        this.error = true;
                        setTimeout( () => {this.error = false}, 2500 );
                    } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/_variables';
    
    main {
        header.container-fluid {
            width: 100%;
            height: 80vh;
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/1600%D1%85900_Toyota_Service_1_tcm-3046-1797152.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1.container {
                padding: 70px 15px;
                font-size: 5.2rem;
                color: #ffffff;
                font-weight: bolder;
                span {
                    display: inline-block;
                    padding-top: 16px;
                    font-size: 3.4rem;
                }
            }
        }

        .body.container {
            h2 {
                font-size: 3.4rem;
                padding: 68px 0;
            }

            form {
                .row {
                    .field.form-group {
                        padding: 0 15px 28px;
                        margin-bottom: 10px;
                        text-align: left;
                        label {
                            display: block;
                            font-size: 1.3rem;
                            color: #6c7073;
                            margin-bottom: 13px;
                            span {
                                color: #E50000;
                                font-size: 1.5rem;
                            }
                        }
                        input {
                            @include inputForm;
                        }
                        select {
                            @include inputForm;
                            padding: 10px 35px 11px 16px;
                        }
                        textarea {
                            @include inputForm;
                        }
                        &.checkbox {
                            @include checkbox;
                        }
                        .invalid-feedback {
                            font-size: 1.3rem;
                        }
                        button {
                            @include button;
                            background-color: #E50000;
                            width: auto;
                            padding: 10px 30px;
                        }

                        &.call_time {
                            .wrap {
                                span {
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }

                    p {
                        font-size: 1.3rem;
                        color: #6c7073;
                        text-align: left;
                        padding: 0 15px 28px;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main {
            header.container-fluid {
                max-height: 60vw;
            }

            .body.container {
                h2 {
                    font-size: 3.0rem;
                }

                form {
                    .row {
                        width: 100% !important;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header.container-fluid {
                height: 56vw;
                max-height: 480px;
                h1.container {
                    padding: 30px 15px;
                    font-size: 3.5rem;
                    color: #ffffff;
                    font-weight: bolder;
                    span {
                        display: inline-block;
                        padding-top: 16px;
                        font-size: 3rem;
                    }
                }
            }

            .body.container {
                h2 {
                    font-size: 3.0rem;
                }

                form {
                    .row {
                        width: 100% !important;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) and  (max-width: 767.9px) {
        main {
            min-width: 350px;
            header.container-fluid {
                height: 56vw;
                max-height: 380px;
                h1.container {
                    padding: 30px 15px;
                    font-size: 3rem;
                    color: #ffffff;
                    font-weight: bolder;
                    span {
                        display: inline-block;
                        padding-top: 16px;
                        font-size: 2.5rem;
                    }
                }
            }

            .body.container {
                min-width: 100%;
                width: 100% !important;
                h2 {
                    font-size: 2.5rem;
                    padding: 30px 0;
                }

                form {
                    .row {
                        width: 100% !important;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            min-width: 350px;
            header.container-fluid {
                height: 56vw;
                max-height: 380px;
                h1.container {
                    padding: 30px 10px;
                    font-size: 6vw;
                    color: #ffffff;
                    font-weight: bolder;
                    span {
                        display: inline-block;
                        padding-top: 16px;
                        font-size: 4vw;
                    }
                }
            }

            .body.container {
                h2 {
                    font-size: 2.0rem;
                    padding: 30px 0;
                }

                form {
                    .row {
                        width: 100% !important;
                    }
                }
            }
        }
    }

</style>