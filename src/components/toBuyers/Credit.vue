<template>
    <main>
        <sidebar></sidebar>

        <header class="container-fluid">
            <h1>Програма «Тойота Кредит»
                <h2>Кредити на придбання автомобілів Toyota</h2>
            </h1>
        </header>
        
        <article class="container">
            <header>
                <h1>Профінансуйте свою Toyota</h1>
            </header>
            <div class="body">
                <p>При купівлі автомобіля в офіційного дилера Ви можете скористатись умовами програми фінансування покупки автомобілів марки Toyota під назвою «Тойота Кредит», яка допоможе зробити придбання будь-якої моделі Toyota зручним для кожного!</p>
                <p>Докладніше про програму «Тойота Кредит» можна дізнатися на <a href="https://credit-agricole.ua/for-you/car-loans/toyota" title="КРЕДИ АГРИКОЛЬ БАНК">окремій сторінці</a> на веб-сайті банку-партнера «АТ «КРЕДІ АГРІКОЛЬ БАНК1» або у кредитних консультантів у салонах <a href="https://www.toyota.ua/forms/forms.json?tab=pane-dealer" title="Офіційні дилери Toyota">офіційних дилерів Toyota</a>.</p>

                <div class="corolla">
                    <h3>Спеціальні умови на моделі Corolla. Умови діють з 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Строк кредиту</th>
                            <th colspan="6">Відсоткові ставки у гривні</th>
                            <th rowspan="3">Одноразова комісія</th>
                        </tr>
                        <tr>
                            <th colspan="6">Одноразова комісія</th>
                        </tr>
                        <tr>
                            <th>від 15.00 %</th>
                            <th>від 20.00 %</th>
                            <th>від 30.00 %</th>
                            <th>від 50.00 %</th>
                            <th>від 60.00 %</th>
                            <th>від 70.00 %</th>
                        </tr>

                        <tr>
                            <td>0-12 міс.</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>12-24 міс.</td>
                            <td>6.99%</td>
                            <td>6.99%</td>
                            <td>6.99%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>24-36 міс.</td>
                            <td>10.99%</td>
                            <td>10.99%</td>
                            <td>10.99%</td>
                            <td>9,99%</td>
                            <td>8.99%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>37-84 міс.</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>0.00%</td>
                        </tr>
                    </table>

                    <small>Для моделі Corolla;</small>
                    <small>**Разова комісія 1.99% для кредитів на строк до 12 м. з авансовим внеском від 50%.</small>
                    <small>**Разова комісія 1.99% для кредитів на строк до 24 м. з авансовим внеском від 60%.</small>

                    <button class="btn btn-danger" @click="testDrive('Corolla')">Замовити Тест-драйв</button>
                </div>

                <div class="highlander_">
                    <h3>Спеціальні умови на моделі HIGHLANDER, C-HR, RAV4, CAMRY, YARIS. Умови діють з 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Строк кредиту</th>
                            <th colspan="6">Відсоткові ставки у гривні</th>
                            <th rowspan="3">Одноразова комісія</th>
                        </tr>
                        <tr>
                            <th colspan="6">Початковий внесок</th>
                        </tr>
                        <tr>
                            <th>від 15.00 %</th>
                            <th>від 20.00 %</th>
                            <th>від 30.00 %</th>
                            <th>від 50.00 %</th>
                            <th>від 60.00 %</th>
                            <th>від 70.00 %</th>
                        </tr>

                        <tr>
                            <td>0-12 міс.</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>13-24 міс.</td>
                            <td>6.99%</td>
                            <td>6.99%</td>
                            <td>6.99%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>25-36 міс.</td>
                            <td>10.99%</td>
                            <td>10.99%</td>
                            <td>10.99%</td>
                            <td>9,99%</td>
                            <td>8.99%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>37-84 міс.</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>13.99%</td>
                            <td>0.00%</td>
                        </tr>
                    </table>

                    <small>Для моделей HIGHLANDER, C-HR, RAV4, CAMRY, YARIS.;</small>
                    <small>**Разова комісія 1.99% для кредитів на строк до 12 м. з авансовим внеском від 50%.</small>
                    <small>**Разова комісія 1.99% для кредитів на строк до 24 м. з авансовим внеском від 60%</small>

                </div>

                <div class="land-cruiser">
                    <h3>Спеціальні умови на всі моделі LAND CRUISER 200, LAND CRUISER PRADO, HILUX, PROACE. Умови діють з 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Строк кредиту</th>
                            <th colspan="6">Відсоткові ставки у гривні</th>
                            <th rowspan="3">Одноразова комісія</th>
                        </tr>
                        <tr>
                            <th colspan="6">Початковий внесок</th>
                        </tr>
                        <tr>
                            <th>від 15.00 %</th>
                            <th>від 20.00 %</th>
                            <th>від 30.00 %</th>
                            <th>від 50.00 %</th>
                            <th>від 60.00 %</th>
                            <th>від 70.00 %</th>
                        </tr>

                        <tr>
                            <td>0-12 міс.</td>
                            <td>3.99%</td>
                            <td>3.49%</td>
                            <td>2.99%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>0.01%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>13-24 міс.</td>
                            <td>8.99%</td>
                            <td>8.99%</td>
                            <td>8.49%</td>
                            <td>6.99%</td>
                            <td>5.99%</td>
                            <td>4.49%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>25-36 міс.</td>
                            <td>11.59%</td>
                            <td>11.49%</td>
                            <td>11.29%</td>
                            <td>10,49%</td>
                            <td>9.59%</td>
                            <td>8.49%</td>
                            <td>2.99%</td>
                        </tr>

                        <tr>
                            <td>37-48 міс.</td>
                            <td>14.49%</td>
                            <td>14.49%</td>
                            <td>14.29%</td>
                            <td>13.59%</td>
                            <td>13.29%</td>
                            <td>12.49%</td>
                            <td>0.00%</td>
                        </tr>

                        <tr>
                            <td>49-60 міс.</td>
                            <td>14.99%</td>
                            <td>14.59%</td>
                            <td>14.49%</td>
                            <td>13.99%</td>
                            <td>13.59%</td>
                            <td>12.99%</td>
                            <td>0.00%</td>
                        </tr>

                        <tr>
                            <td>61-72 міс.</td>
                            <td>14.99%</td>
                            <td>14.99%</td>
                            <td>14.59%</td>
                            <td>14.29%</td>
                            <td>13.99%</td>
                            <td>13.49%</td>
                            <td>0.00%</td>
                        </tr>

                        <tr>
                            <td>73-84 міс.</td>
                            <td>14.99%</td>
                            <td>14.99%</td>
                            <td>14.99%</td>
                            <td>14.49%</td>
                            <td>14.29%</td>
                            <td>13.99%</td>
                            <td>0.00%</td>
                        </tr>
                    </table>

                    <small>Для всіх моделей окрімLAND CRUISER 200, LAND CRUISER PRADO, HILUX, PROACE</small>
                    <small>**Разова комісія 1.99% для кредитів на строк до 12 м. з авансовим внеском від 60%.</small>

                </div>

                <div class="info">
                    <h3 class="d-flex justify-content-between" @click="blockInfo()"><span>Додаткова інформація</span>
                        <i class="fas fa-chevron-down text-right" v-if="showInfo"></i>
                        <i class="fas fa-chevron-up text-right" v-else></i>
                    </h3>
                    <div class="info_block" v-if="!showInfo">

                        <p><strong>Форма видачі кредиту:</strong> перерахування коштів на поточний рахунок автосалону. <strong>Сума кредиту</strong> - від 40 000 до 2 600 000 гривень. <strong>Мінімальний перший внесок:</strong></p>
                        <ul>
                            <li>для ФОП мінімальний перший внесок складає 20%;</li>
                            <li>якщо вартість автомобіля більше 1 000 000 гривень, мінімальний перший внесок для фізичної особи - 30%, для ФОП - 35%.</li>
                        </ul>

                        <h4>Метод погашення кредиту та процентів:</h4>
                        <ul>
                            <li>щомісячно, платежі за кредитом розраховуються за ануїтетним методом;</li>
                            <li>щомісячно, тіло кредиту погашається рівними частками, проценти нараховуються на залишок заборгованості за кредитом.</li>
                        </ul>

                        <p><strong>Погашення кредиту та відсотків:</strong> відбувається шляхом внесення готівки в касу банку або шляхом перерахування коштів за реквізитами, вказаними в кредитному договорі. <strong>Дострокове погашення кредиту:</strong> можливе вже з першого місяця від моменту отримання кредиту, без комісії. <strong>Забезпечення:</strong> застава придбаного автомобіля. <strong>Обов'язкове страхування:</strong></p>
                        <ul>
                            <li>повне КАСКО (можливо включити в тіло кредиту*), страхування цивільної відповідальності, страхування життя та здоров'я позичальника.</li>
                        </ul>

                        <h4>Додаткові витрати</h4>
                        <ul>
                            <li>комісія за операції в Державному реєстрі – одноразово 750 грн;</li>
                            <li>страхування Цивільної відповідальності у партнера програми;</li>
                            <li>страхування КАСКО у партнера програми;</li>
                            <li>страхування життя та здоров’я позичальника– 1.99% від суми кредиту.</li>
                            <li>НОТАРІАЛЬНО ПОСВІДЧЕННЯ ДОГОВОРУ ЗАСТАВИ - ВІДСУТНЕ</li>
                        </ul>

                        <p><strong>Реальна річна процентна ставка:</strong> від <strong>2,95%</strong> річних (розрахована виходячи із строку кредитування 24 місяці по процентній ставці 0,01%, стандартний графік погашення). Фактичне значення реальної річної процентної ставки за кредитом буде залежати від індивідуальних умов кредитування (суми кредиту, строку, спеціальних умов за продуктом тощо). <strong> Повний перелік необхідних документів</strong> 1. Мінімальний перший внесок для ФОП складає 20%. Якщо вартість автомобіля <strong>більше 1 000 000 гривень</strong>, мінімальний перший внесок для фізичної особи - <strong>30%</strong>, для ФОП - <strong>35%</strong>. * Договір страхування КАСКО можливо включити в тіло кредиту тільки для кредитів на строк від 37 місяців та передплаті за автомобіль від 30%.</p>
                    </div>
                </div>

                <small><sup>1</sup>Кредитує АТ «Креді Агріколь Банк», реєстраційний №149 в державному реєстрі банків. Уся інформація щодо умов кредитування вказана згідно наданих банком-партнером відомостей</small>

                <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/ca-logo-new_tcm-3046-1815792.png" alt="«Креді Агріколь Банк»">



            </div>
        </article>
    </main>
</template>

<script>
    // import Sidebar from "../permanent/Sidebar";
    import Sidebar from "./../../components/permanent/Sidebar";//           for Laravel

    export default {
        name: "credit",

        data() {
            return {
                showInfo: false,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Toyota Кредит - фінансування купівлі автомобілів Toyota`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Toyota Кредит - фінансування купівлі автомобілів Toyota`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `В офіційній дилерскій мережі ПІІ «Тойота-Україна» діє єдина програма фінансування купівлі автомобілів марки Toyota під назвою «Тойота Кредит».`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `В офіційній дилерскій мережі ПІІ «Тойота-Україна» діє єдина програма фінансування купівлі автомобілів марки Toyota під назвою «Тойота Кредит».`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota,кредит,купити,тойота україна,королла,ауріс,камрі,ленд крузер,кредит,гривня,тойота кредит,індекс банк, ставки,тойота-україна,строк,кредитування,проценти,axa,аха,страхування,тойота, credit agricole, креди агріколь, креди агріколь банк, кредит агриколь,toyota, yaris,auris, corolla, camry,avensis, rav4, prado, land cruiser, highlander, hilux`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota,кредит,купити,тойота україна,королла,ауріс,камрі,ленд крузер,кредит,гривня,тойота кредит,індекс банк, ставки,тойота-україна,строк,кредитування,проценти,axa,аха,страхування,тойота, credit agricole, креди агріколь, креди агріколь банк, кредит агриколь,toyota, yaris,auris, corolla, camry,avensis, rav4, prado, land cruiser, highlander, hilux`
                    },
                ],
            }
        },

        components: {
            Sidebar
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            blockInfo() {
                this.showInfo = !this.showInfo;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    
    main{
        padding: 0;
        margin: 0;
        header.container-fluid  {
            width: 100%;
            height: 80vh;
            padding-top: 70px;
            background-image: url('//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/credit-1600x900_tcm-3046-165545.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            color: $font_color;
            h1 {
                width: 1200px;
                padding: 15px;
                margin: 0 auto;
                font-size: 5.2rem;
                font-weight: bolder;
                text-align: left;
                h2 {
                    font-size: 3.4rem;
                    text-align: left;
                    padding-top: 16px;
                }
            }
        }
        article.container {
            header {
                margin: 68px 0;
                padding: 0;
                background: none;
                height: auto;
                h1 {
                    font-size: 3.4rem;
                    text-align: center;
                }
            }
            .body {
                /*width: 1200px;*/
                /*margin: 0 auto;*/
                /*padding: 0 15px;*/
                text-align: left;
                p {
                    font-size: 1.6rem;
                    color: #595D60;
                    margin-bottom: 24px;
                    a {
                        color: #595D60;
                        text-decoration: underline;
                    }
                }

                div {
                    margin-top: 60px;
                    h3 {
                        font-size: 1.8rem;
                        margin-bottom: 24px;
                        font-weight: bold;
                    }

                    table {
                        width: 100%;
                        font-size: 1.5rem;
                        margin-bottom: 30px;
                        th {
                            border: 2px solid #595D60;
                            padding: 10px;
                            text-align: center;
                        }
                        td {
                            border: 1px solid #595D60;
                            padding: 10px;
                            text-align: center;
                            &:first-child {
                                font-weight: bold;
                            }

                        }
                    }
                    small {
                        font-size: 1rem;
                        display: block;
                        margin: 10px 0;
                    }
                    button {
                        @include button;
                        margin-top: 30px;
                        text-transform: uppercase;
                        background-color: #E50000;
                    }
                }

                .info {
                    border-bottom: 1px solid #cccccc;
                    margin-bottom: 30px;
                    h3 {
                        font-size: 2.1rem;
                        margin: 20px 0;
                        i {
                            color: #E50000;
                            font-size: 1.5rem;
                        }
                    }
                    .info_block {
                        margin: 68px 0;
                        p {
                            font-size: 1.8rem;
                            margin: 0;
                            color: $font_color;
                        }
                        ul {
                            padding: 0 0 10px 20px;
                            li {
                                color: #595D60;
                                font-size: 1.6rem;
                                margin-bottom: 10px;
                            }
                        }

                        h4 {
                            color: $font_color;
                            font-size: 1.8rem;
                            font-weight: bold;
                        }
                    }
                }

                small {
                    font-size: 1rem;
                    margin-bottom: 24px;
                }
                img {
                    width: 300px;
                    height: 95px;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main{
            header.container-fluid  {
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main{
            header.container-fluid  {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                    h2 {
                        font-size: 2.2rem;
                        padding-top: 10px;
                    }
                }
            }
            article.container {
                header {
                    margin: 40px 0;
                    h1 {
                        font-size: 3.0rem;
                    }
                }
                .body {
                    div {
                        margin-top: 40px;
                        button {
                            margin-top: 15px;
                        }
                    }

                    small {
                        display: block;
                    }

                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main{
            header.container-fluid  {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3rem;
                    h2 {
                        width: 70%;
                        font-size: 2.0rem;
                        padding-top: 5px;
                    }
                }
            }
            article.container {
                width: 100%;
                max-width: 100%;
                margin: 0;
                header {
                    margin: 30px 0;
                    h1 {
                        font-size: 3.0rem;
                    }
                }
                .body {
                    div {
                        width: 100%;
                        margin-top: 30px;
                        h3 {
                            font-size: 1.8rem;
                        }
                        table {
                            width: 100%;
                            font-size: 1.2rem;
                            margin-bottom: 30px;
                            th {
                                border: 2px solid #595D60;
                            }
                        }
                        small {
                            display: block;
                            margin: 5px 0;
                        }
                    }

                    .info {
                        border-bottom: 1px solid #cccccc;
                        margin-bottom: 30px;
                        h3 {
                            font-size: 2.1rem;
                            margin: 20px 0;
                            i {
                                color: #E50000;
                                font-size: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main{
            header.container-fluid  {
                width: 100%;
                height: auto;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    padding: 10px 15px 120px;
                    font-size: 2.5rem;
                    color: $font_color;
                    h2 {
                        font-size: 1.8rem;
                        padding-top: 5px;
                    }
                }
            }
            article.container {
                width: 100%;
                header {
                    margin: 30px 0;
                    h1 {
                        font-size: 3rem;
                    }
                }
                .body {
                    width: 100%;
                    p {
                        font-size: 1.6rem;
                        margin-bottom: 15px;
                    }

                    div {
                        overflow: auto;
                        max-width: 100%;
                        margin-top: 30px;
                        h3 {
                            font-size: 1.8rem;
                            margin-bottom: 24px;
                        }

                        table {
                            width: 100%;
                            max-width: 100%;
                            font-size: 1.2rem;
                            th {
                                border: 2px solid #595D60;
                                padding: 5px;
                            }
                            td {
                                border: 1px solid #595D60;
                                padding: 10px;
                                text-align: center;
                                &:first-child {
                                    font-weight: bold;
                                }

                            }
                        }
                        small {
                            font-size: 1rem;
                            display: block;
                            margin: 10px 0;
                        }
                        button {
                            @include button;
                            margin-top: 30px;
                            text-transform: uppercase;
                            background-color: #E50000;
                        }
                    }

                    .info {
                        border-bottom: 1px solid #cccccc;
                        margin-bottom: 30px;
                        h3 {
                            font-size: 2.1rem;
                            margin: 20px 0;
                            i {
                                color: #E50000;
                                font-size: 1.5rem;
                            }
                        }
                        .info_block {
                            margin: 68px 0;
                            p {
                                font-size: 1.8rem;
                                margin: 0;
                                color: $font_color;
                            }
                            ul {
                                padding: 0 0 10px 20px;
                                li {
                                    color: #595D60;
                                    font-size: 1.6rem;
                                    margin-bottom: 10px;
                                }
                            }

                            h4 {
                                color: $font_color;
                                font-size: 1.8rem;
                                font-weight: bold;
                            }
                        }
                    }

                    small {
                        font-size: 1rem;
                        margin-bottom: 24px;
                    }
                    img {
                        width: 300px;
                        height: 95px;
                    }
                }
            }
        }
    }

</style>