<template>
    <main class="container text-left">
        <header>
            <h1>Форма зворотнього зв`язку</h1>
        </header>

        <div class="body">
            <p>Ми завжди прагнемо надавати на сайті всебічну та актуальну інформацію.<br>
                Якщо у вас виникли запитання, на які ви не знайшли відповідь на сайті, бажаєте щось нам порадити або висловити критику, заповніть поля цієї форми, щоб написати у відділ з обслуговування клієнтів ПІІ «Тойота-Україна».</p>

            <div class="row">
                <div class="col-md-6 col-12 text-left">
                    <form name="call_back" @submit.prevent="onSubmit()">

                        <div class="field">
                            <label for="firstName">Ім’я <span>*</span></label>
                            <input id="firstName"
                                   type="text"
                                   class="form-control"
                                   v-model="firstName"
                                   placeholder="Ім’я"
                                   :class="{'is-invalid' : $v.firstName.$error}"
                                   @blur="$v.firstName.$touch()"
                            >
                            <div class="invalid-feedback"  v-if="!$v.firstName.required">Це поле є обов'язковим для заповненя.</div>
                            <div class="invalid-feedback"  v-if="!$v.firstName.alfaValidate">Для введення допускається тільки букви.</div>
                        </div>

                        <div class="field">
                            <label for="lastName">Прізвище <span>*</span></label>
                            <input id="lastName"
                                   type="text"
                                   class="form-control"
                                   v-model="lastName"
                                   placeholder="Прізвище"
                                   :class="{'is-invalid' : $v.lastName.$error}"
                                   @blur="$v.lastName.$touch()"
                            >
                            <div class="invalid-feedback"  v-if="!$v.lastName.required">Це поле є обов'язковим для заповненя.</div>
                            <div class="invalid-feedback"  v-if="!$v.lastName.alfaValidate">Для введення допускається тільки букви.</div>
                        </div>

                        <div class="field">
                            <label for="phone">Контактний номер телефону: <span>*</span></label>
                            <input id="phone"
                                   type="tel"
                                   class="form-control"
                                   v-model="phone"
                                   placeholder="+38 (___) __-__-___"
                                   :class="{'is-invalid' : $v.phone.$error}"
                                   @blur="$v.phone.$touch()"
                            >
                            <div class="invalid-feedback"  v-if="!$v.phone.required">Це поле є обов'язковим для заповненя.</div>
                            <div class="invalid-feedback"  v-if="!$v.phone.minLength || !$v.phone.maxLength">Невірний формат номеру.</div>
                        </div>

                        <div class="field">
                            <label for="email">Електронна адреса: <span>*</span></label>
                            <input id="email"
                                   type="email"
                                   class="form-control"
                                   v-model="eMail"
                                   placeholder="user@user.com"
                                   :class="{'is-invalid' : $v.eMail.$error}"
                                   @blur="$v.eMail.$touch()"
                            >
                            <div class="invalid-feedback" v-if="!$v.eMail.required">Це поле є обов'язковим для заповненя.</div>
                            <div class="invalid-feedback" v-if="!$v.eMail.email">Введіть дійсниу електронну пошту</div>
                        </div>

                        <div class="field">
                            <label for="message">Текст повідомлення <br/>(до 1 тис. друкованих знаків)</label>
                            <textarea name="message"
                                      id="message"
                                      class="form-control"
                                      v-model="userMsg"
                                      placeholder="Текст"
                                      maxlength="1000"
                            ></textarea>
                        </div>

                        <div class="info" :class="{ 'expand_info' : expandBlock }">
                            <p>Проставляючи цю відмітку я надаю згоду на обробку своїх наведених вище персональних даних (прізвища, імені, міста перебування/проживання, контактного номеру телефону, електронної адреси) та інших даних, що міститимуться в текстовій частині мого запиту, ПІІ «Тойота-Україна», код ЄДРПОУ 32589471, проспект Степана Бандери, 24-Б, м. Київ 04073 (надалі - «Володілець») з метою покращення сервісу Володільця та/або його офіційних дилерів на наступних умовах: Надані мною персональні дані, в межах зазначеної вище мети обробки персональних даних, можуть бути передані афілійованим особам Володільця (будь-яким компаніям групи Toyota, незалежно від країни), офіційним дилерам Володільця (які також можуть виступати як розпорядники персональних даних).</p>

                            <ul>
                                <li>
                                    <p>Ця згода чинна протягом строку, необхідного для реалізації передбаченої нею мети обробки персональних даних, та може бути відкликана шляхом направлення повідомлення Володільцю. Відкликання цієї згоди матиме наслідком припинення обробки моїх персональних даних.</p>
                                </li>

                                <li>
                                    <p>Я повідомлений(а) про Володільця моїх персональних даних, склад та зміст, мету обробки моїх персональних даних та осіб, яким передаються мої персональні дані. Поширення, передача та надання доступу до персональних даних іншим особам в рамках цієї згоди , не потребуватимуть отримання окремої згоди на такі дії або надання мені окремого повідомлення.</p>
                                </li>

                                <li>
                                    <p>Будь-які звернення стосовно обробки моїх персональних даних мають бути направлені на зазначену вище адресу Володільця.</p>
                                </li>

                                <li>
                                    <p>Я повідомлений(а) про те, що маю наступні права суб'єкта персональних даних, передбачені ст. 8 Закону України «Про захист персональних даних», а саме:</p>

                                    <ul>
                                        <li><span>знати про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки, місцезнаходження або місце проживання (перебування) володільця чи розпорядника персональних даних або дати відповідне доручення щодо отримання цієї інформації уповноваженим ним особам, крім випадків, встановлених законом;</span></li>

                                        <li><span>отримувати інформацію про умови надання доступу до персональних даних, зокрема інформацію про третіх осіб, яким передаються мої персональні дані;</span></li>

                                        <li><span>на доступ до своїх персональних даних;</span></li>

                                        <li><span>отримувати не пізніш як за тридцять календарних днів з дня надходження запиту, крім випадків, передбачених законом, відповідь про те, чи обробляються мої персональні дані, а також отримувати зміст таких персональних даних;</span></li>

                                        <li><span>пред’являти вмотивовану вимогу володільцю персональних даних із запереченням проти обробки своїх персональних даних;</span></li>

                                        <li><span>пред’являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних будь-яким володільцем та розпорядником персональних даних, якщо ці дані обробляються незаконно чи є недостовірними;</span></li>

                                        <li><span>на захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення, пошкодження у зв’язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням, а також на захист від надання відомостей, що є недостовірними чи ганьблять честь, гідність та ділову репутацію фізичної особи;</span></li>

                                        <li><span>звертатися із скаргами на обробку своїх персональних даних до Уповноваженого Верховної Ради України з прав людини або до суду;</span></li>

                                        <li><span>застосовувати засоби правового захисту в разі порушення законодавства про захист персональних даних;</span></li>

                                        <li><span>вносити застереження стосовно обмеження права на обробку своїх персональних даних під час надання згоди;</span></li>

                                        <li><span>відкликати згоду на обробку персональних даних;</span></li>

                                        <li><span>знати механізм автоматичної обробки персональних даних;</span></li>

                                        <li><span>на захист від автоматизованого рішення, яке має для нього правові наслідки.</span></li>

                                    </ul>
                                </li>
                            </ul>

                            <p>Даний ресурс не є офіційним каналом для звернень від представників державних служб та відомств, чи інших юридичних осіб.</p>

                        </div>

                        <div class="open_info text-right">
                            <button class="btn btn-link"
                                    v-if="expandBlock"
                                    @click.prevent="expand()"
                            >Детальніше</button>
                            <button class="btn btn-link"
                                    v-else
                                    @click.prevent="expand()"
                            >Згорнути</button>
                        </div>

                        <div class="field form-group checkbox col-12 text-center">
                            <input class="form-control"
                                   id="agree" type="checkbox"
                                   value="true"
                                   v-model="agree"
                            >
                            <label for="agree"><span class="check"><i class="fas fa-check"></i></span>Я згоден на збір та обробку моїх персональних даних <span>*</span></label>

                            <div class="invalid-feedback">Це поле є обов'язковим для заповненя.</div>
                        </div>

                        <div class="field form-group text-center">
                            <button type="submit"
                                    class="btn btn-danger"
                                    :disabled="$v.$invalid"
                            >Надіслати</button>
                        </div>

                    </form>
                </div>
                
                

                <div class="col-md-6 col-12">
                    <div class="row raffle">
                        <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/uvaga_tcm-3046-1418372.png" alt="Інформація про розіграші." class="d-block col-3">
                        <h2 class="col-9">Інформація про розіграші.
                            <span>Будь ласка ознайомтеся з інформацією щодо
                                <router-link
                                        exact
                                        tag="a"
                                        to="/vypadky_shahrajstva"
                                >розіграшу авто</router-link>.
                            </span>
                        </h2>

                    </div>
                </div>
            </div>

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
        name: "FormFeedBack",

        components: {
            ErrorMessage,
            Successful,

        },

        data() {
            return {
                firstName: "",
                lastName: "",
                phone: "",
                eMail: "",
                userMsg: "",
                agree: false,

                success: false,
                error: false,

                expandBlock: true,
            }
        },

        metaInfo() {
            return {
                title:  "Toyota Nikolaev | Форма зворотнього зв`язку з Тойота Центр Миколаїв «КіТ-Т»",
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: "Toyota Nikolaev | Форма зворотнього зв`язку з Тойота Центр Миколаїв «КіТ-Т»"
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Залишились питання? Знайдіть відповідь на своє питання самостійно або зв&#39;яжіться з офіційним імпортером автомобілів в Toyota Україні ПІІ &quot;Тойота-Україна&quot;.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Залишились питання? Знайдіть відповідь на своє питання самостійно або зв&#39;яжіться з офіційним імпортером автомобілів в Toyota Україні ПІІ &quot;Тойота-Україна&quot;.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, Напишіть нам,Зворотній зв&#39;язок ,toyota,  yaris, auris, auris touring sports, corolla, avensis, camry, rav4, highlander, land cruiser prado, land cruiser 200, hilux, ch-r, hybrid, тойта, яріс, ауріс, ауріс універсал, королла, корола, авенcіс, кармрі, рав4, хайлендер, ленд крузер, лендкрузер,  лендкрузер прадо, ленд крузер прадо`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, Напишіть нам,Зворотній зв&#39;язок ,toyota,  yaris, auris, auris touring sports, corolla, avensis, camry, rav4, highlander, land cruiser prado, land cruiser 200, hilux, ch-r, hybrid, тойта, яріс, ауріс, ауріс універсал, королла, корола, авенcіс, кармрі, рав4, хайлендер, ленд крузер, лендкрузер,  лендкрузер прадо, ленд крузер прадо`
                    },
                ],
            }
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

            phone: {
                required,
                minLength: minLength(12),
                maxLength: maxLength(19),
            },

            eMail: {
                required,
                email,
            },

            agree: {
                consent(answer) {
                    return answer;
                }
            },

        },

        mounted () {
            let im = new Inputmask("+38 (999) 99-99-999");
            im.mask(document.getElementById('phone'));
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)

        },

        methods: {
            expand() {
                this.expandBlock = !this.expandBlock;
            },

            onSubmit() {
                const feedback = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phone: this.phone,
                    eMail: this.eMail,
                    userMsg: this.userMsg,
                    agree: this.agree,
                };
                this.$store.state.openConsultation = !this.$store.state.openConsultation
                axios.post(
                    'http://lara.toyota.nikolaev.ua/ajax/feedback',
                    feedback,
                )
                .then( () => {
                    console.log("Данные переданы успешно!");
                    this.success = true;
                    setTimeout( () => {this.success = false}, 2500 );
                    // this.clearForm();
                    this.$router.push({name: "feed_back_exit"});

                } )
                .catch( (error) => {
                    console.log(" Ошибка передачи данных");
                    console.log(error);
                    this.error = true;
                    setTimeout( () => {this.error = false}, 2500 );
                } );


            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container {
        color: $font_color;
        header {
            margin: 68px 0;
            h1 {
                font-size: 4.4rem;
                font-weight: bolder;
            }
        }

        .body {
            p {
                color: #595D60;
                font-size: 1.8rem;
                margin: 68px 0;
            }

            .row {
                border-top: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
                padding: 50px 0;
                div {
                    form {
                        .field {
                            margin-bottom: 20px;
                            label {
                                color: #6c7073;
                                font-size: 1.8rem;
                                margin-bottom: 8px;
                                span {
                                    color: #E50000;
                                }
                            }
                            input {
                                @include inputForm;
                            }
                            textarea {
                                @include inputForm;
                            }
                            &.checkbox {
                                @include checkbox;
                            }

                            button {
                                @include button;
                                width: auto;
                                padding-left: 30px;
                                padding-right: 30px;
                                background-color: #E50000;
                                &[disable="true"] {
                                    background-color: #ccc;
                                }
                            }
                        }

                        .open_info {
                            width: 100%;
                            margin-bottom: 30px;
                            button.btn.btn-link {
                                font-size: 1.4rem;
                                text-decoration: underline;
                                color: $font_color;
                            }
                        }

                        .info {
                            margin: 68px 0 10px;
                            color: #6c7073;
                            p {
                                font-size: 1rem;
                                line-height: 2rem;
                                margin: 0;
                            }

                            ul {
                                margin: 10px 0 30px;
                                padding-left: 20px;
                                li {
                                    margin: 10px 0;
                                }
                            }

                            &.expand_info {
                                height: 80px;
                                overflow: hidden;
                            }
                        }
                    }

                    .raffle.row {
                        margin: 40px 0;
                        border: none;
                        background-color: #f0f0f0;
                        border-radius: 15px;
                        padding: 50px 10px;
                        h2 {
                            font-size: 2.5rem;
                            color: #595D60;
                        }
                        span {
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
    }


</style>