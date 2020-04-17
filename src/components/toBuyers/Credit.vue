<template>
    <main>
        <sidebar></sidebar>

        <header class="container-fluid">
            <h1>Программа "Toyota Кредит"
                <h2>Кредиты на приобретение автомобилей Toyota</h2>
            </h1>
        </header>
        
        <article class="container">
            <header>
                <h1>Профинансируйте свою Toyota</h1>
            </header>
            <div class="body">
                <p>При покупке автомобиля у официального дилера Вы можете воспользоваться условиями программы финансирования покупки автомобилей марки Toyota под названием «Тойота Кредит», которая поможет сделать приобретение любой модели Toyota удобным для каждого!</p>
                <p>Подробнее о программе «Тойота Кредит» можно узнать на <a href="https://credit-agricole.ua/for-you/car-loans/toyota" title="КРЕДИ АГРИКОЛЬ БАНК">отдельной странице</a> веб-сайте банка-партнера «АО« КРЕДИ АГРИКОЛЬ БАНК1 »или в кредитных консультантов в салонах <a href="https://www.toyota.ua/forms/forms.json?tab=pane-dealer" title="Офіційні дилери Toyota">официальных дилеров Toyota</a>.</p>

                <div class="corolla">
                    <h3>Специальные условия на модели Corolla. Условия действуют с 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Срок кредита</th>
                            <th colspan="6">Процентные ставки в гривне</th>
                            <th rowspan="3">Одноразовая комисия</th>
                        </tr>
                        <tr>
                            <th colspan="6">Начальный взнос</th>
                        </tr>
                        <tr>
                            <th>от 15.00 %</th>
                            <th>от 20.00 %</th>
                            <th>от 30.00 %</th>
                            <th>от 50.00 %</th>
                            <th>от 60.00 %</th>
                            <th>от 70.00 %</th>
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

                    <small>Для модели Corolla;</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 12 м. с авансовым взносом от 50%.</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 24 м. с авансовым взносом от 60%.</small>

                    <button class="btn btn-danger" @click="testDrive('Corolla')">Заказать Тест-драйв</button>
                </div>

                <div class="highlander_">
                    <h3>Специальные условия на модели HIGHLANDER, C-HR, RAV4, CAMRY, YARIS. Условия действуют с 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Срок кредита</th>
                            <th colspan="6">Процентные ставки в гривне</th>
                            <th rowspan="3">Одноразовая комисия</th>
                        </tr>
                        <tr>
                            <th colspan="6">Начальный взнос</th>
                        </tr>
                        <tr>
                            <th>от 15.00 %</th>
                            <th>от 20.00 %</th>
                            <th>от 30.00 %</th>
                            <th>от 50.00 %</th>
                            <th>от 60.00 %</th>
                            <th>от 70.00 %</th>
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

                    <small>Для модели HIGHLANDER, C-HR, RAV4, CAMRY, YARIS;</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 12 м. с авансовым взносом от 50%.</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 24 м. с авансовым взносом от 60%.</small>

                    <button class="btn btn-danger" @click="testDrive('highlander_')">Заказать Тест-драйв</button>
                </div>

                <div class="land-cruiser">
                    <h3>Специальные условия на модели LAND CRUISER 200, LAND CRUISER PRADO, HILUX, PROACE. Условия действуют с 12.02.2020</h3>

                    <table>
                        <tr>
                            <th rowspan="3">Срок кредита</th>
                            <th colspan="6">Процентные ставки в гривне</th>
                            <th rowspan="3">Одноразовая комисия</th>
                        </tr>
                        <tr>
                            <th colspan="6">Начальный взнос</th>
                        </tr>
                        <tr>
                            <th>от 15.00 %</th>
                            <th>от 20.00 %</th>
                            <th>от 30.00 %</th>
                            <th>от 50.00 %</th>
                            <th>от 60.00 %</th>
                            <th>от 70.00 %</th>
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

                    <small>Для модели LAND CRUISER 200, LAND CRUISER PRADO, HILUX, PROACE;</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 12 м. с авансовым взносом от 50%.</small>
                    <small>**Разовая комисия 1.99% для кредитов на срок до 24 м. с авансовым взносом от 60%.</small>

                    <button class="btn btn-danger" @click="testDrive('land_ruiser')">Заказать Тест-драйв</button>
                </div>

                <div class="info">
                    <h3 class="d-flex justify-content-between" @click="blockInfo()"><span>Дополнительная информация</span>
                        <i class="fas fa-chevron-down text-right" v-if="showInfo"></i>
                        <i class="fas fa-chevron-up text-right" v-else></i>
                    </h3>
                    <div class="info_block" v-if="!showInfo">

                        <p><strong>Форма выдачи кредита:</strong> перечисление средств на текущий счет автосалона. <strong>Сумма кредита</strong> - от 40 000 до 2600000 гривен. <strong>Минимальный первый взнос:</strong></p>
                        <ul>
                            <li>для ФЛП минимальный первый взнос составляет 20%;</li>
                            <li>если стоимость автомобиля больше 1000000 гривен, минимальный первый взнос для физического лица - 30%, для ФЛП - 35%.</li>
                        </ul>

                        <h4>Метод погашения кредита и процентов:</h4>
                        <ul>
                            <li>ежемесячно, платежи по кредиту рассчитываются по аннуитету;</li>
                            <li>ежемесячно, тело кредита погашается равными частями, проценты начисляются на остаток задолженности по кредиту.</li>
                        </ul>

                        <p><strong>Погашение кредита и процентов:</strong> происходит путем внесения наличных в кассу банка или путем перечисления средств по реквизитам, указанным в кредитном договоре. <strong>Досрочное погашение кредита:</strong> возможно уже с первого месяца с момента получения кредита, без комиссии. <strong>Обеспечение:</strong> залог приобретаемого автомобиля. <strong>Обязательное страхование:</strong></p>
                        <ul>
                            <li>полное КАСКО (возможно включить в тело кредита *), страхование гражданской ответственности, страхование жизни и здоровья заемщика.</li>
                        </ul>

                        <h4>Дополнительные затраты:</h4>
                        <ul>
                            <li>комиссия за операции в Государственном реестре - однократно 750 грн;</li>
                            <li>страхование гражданской ответственности у партнера программы;</li>
                            <li>страхование КАСКО у партнера программы;</li>
                            <li>страхование жизни и здоровья позичальника- 1.99% от суммы кредита.</li>
                            <li>Нотариальное удостоверение договора залога - отсутствует</li>
                        </ul>

                        <p><strong>Реальная годовая процентная ставка:</strong> от <strong>2,95%</strong> годовых (рассчитана исходя из срока кредитования 24 месяца процентной ставке 0,01%, стандартный график погашения). Фактическое значение реальной годовой процентной ставки по кредиту будет зависеть от индивидуальных условий кредитования (суммы кредита, срока, специальных условий по продукту и т.д.). <strong>Полный перечень необходимых документов</strong> 1. Минимальный первоначальный взнос для ФЛП составляет 20%. Если стоимость автомобиля <strong>больше 1000000 гривен</strong>, минимальный первый взнос для физического лица - <strong>30%</strong>, для ФЛП - <strong>35%</strong>. * Договор страхования КАСКО можно включить в тело кредита только для кредитов на срок от 37 месяцев и подписке за автомобиль от 30%.</p>
                    </div>
                </div>

                <small><sup>1</sup>Кредитует АТ «Креди Агриколь Банк», регистрационный №149 в государственном реестре банков. Вся информация относительно условий кредитования указана согласно представленых банком-партнером сведений</small>

                <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/ca-logo-new_tcm-3046-1815792.png" alt="«Креді Агріколь Банк»">



            </div>
        </article>
    </main>
</template>

<script>
    import Sidebar from "@/components/permanent/Sidebar";
    export default {
        name: "credit",

        data() {
            return {
                showInfo: false,
            }
        },

        components: {
            Sidebar
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