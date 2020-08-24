<template>
    <main>
        <div v-html="pageBody"></div>


<!--        <header class="container-fluid">-->

<!--            <h1 class="container">Програма «Тойота Кредит»</h1>-->

<!--            <h2 class="container">Кредити на придбання автомобілів Toyota</h2>-->

<!--        </header>-->

<!--        <div class="main_cont container">-->

<!--            <h2 class="top_text">ПРОГРАМА «ТОЙОТА КРЕДИТ»-->

<!--                для всіх моделей, крім Land Cruiser, Land Cruiser Prado</h2>-->

<!--            <table class="cred_table cred_table_first">-->

<!--                <tr>-->

<!--                    <th rowspan="2">Передплата за <br> автомобіль, %*</th>-->

<!--                    <th colspan="7">Строк кредитування, відсоткова ставка в гривнях</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <th>12 міс.</th>-->

<!--                    <th>24 міс.</th>-->

<!--                    <th>36 міс.</th>-->

<!--                    <th>48 міс.</th>-->

<!--                    <th>60 міс.</th>-->

<!--                    <th>72 міс.</th>-->

<!--                    <th>84 міс.</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>15%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>6.49%</td>-->

<!--                    <td>9.39%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>20%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>5.99%</td>-->

<!--                    <td>8.99%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>30%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>5.49%</td>-->

<!--                    <td>8.49%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>40%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>4.99%</td>-->

<!--                    <td>7.99%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>50%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>7.49%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>60%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>6.99%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>70%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td class="td_hr">11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                    <td>11.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td colspan="4">Разова комісія** – 1.99% від суми позики</td>-->

<!--                    <td colspan="4" class="td_hr">Разова комісія – 0% від суми позики</td>-->

<!--                </tr>-->

<!--            </table>-->

<!--            <div class="table_desc">**Разова комісія 0,99% для кредитів на строк 12 м. з авансовим внеском від 40%<br>-->

<!--                **Разова комісія 0,99% для кредитів на строк 24 м. з авансовим внеском від 60%<br>-->

<!--                **Разова комісія 0% для кредитів на строк 24 м. з авансовим внеском від 40% до 49,99%</div>-->

<!--&lt;!&ndash;            <div class="icon_table">&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_1"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_2"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_3"></div>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="text_icon">&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Швидке рішення по кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Без нотаріального посвідчення договорів - заощаджуйте до 5 000 грн.</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Фіксована ставка на весь термін кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <hr class="hr_line">-->

<!--            <h2 class="top_text">ПРОГРАМА «ТОЙОТА КРЕДИТ»-->

<!--                з диференційованою відсотковою ставкою-->

<!--                для всіх моделей, крім Land Cruiser, Land Cruiser Prado*</h2>-->

<!--            <table class="cred_table">-->

<!--                <tr>-->

<!--                    <th rowspan="2">Передплата за <br> автомобіль, %</th>-->

<!--                    <th colspan="5">Строк кредитування, відсоткова ставка в гривнях</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <th>12 міс.</th>-->

<!--                    <th>24 міс.</th>-->

<!--                    <th>36 міс.</th>-->

<!--                    <th>48 міс.</th>-->

<!--                    <th>60 міс.</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>30%</td>-->

<!--                    <td colspan="2">2.99%</td>-->

<!--                    <td colspan="3" rowspan="4">13.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>40%</td>-->

<!--                    <td colspan="2">1.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>50%</td>-->

<!--                    <td colspan="2">0.01%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>60%</td>-->

<!--                    <td colspan="2">0.01%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td colspan="6">Разова комісія – 2.99% від суми позики</td>-->

<!--                </tr>-->

<!--            </table>-->

<!--&lt;!&ndash;            <div class="icon_table">&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_1"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_2"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_3"></div>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="text_icon">&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Швидке рішення по кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Без нотаріального посвідчення договорів - заощаджуйте до 5 000 грн.</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Фіксована ставка на весь термін кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <div class="desc_text">-->

<!--                <b>*УМОВИ КРЕДИТУВАННЯ З ДИФЕРЕНЦІЙОВАНОЮ ВІДСОТКОВОЮ СТАВКОЮ:</b>-->

<!--                <span><br>- Ставка кредитування протягом перших 24-ох місяців кредиту, в залежності від розміру передплати за автомобіль,-->

<!--      незалежно від загального строку кредитування (максимальний строк: 60 місяців);<br>-->

<!--      - З 25-го місяця кредитування фіксована ставка</span>-->

<!--            </div>-->

<!--            <hr class="hr_line">-->

<!--            <h2 class="top_text">ПРОГРАМА «ТОЙОТА КРЕДИТ»-->

<!--                з диференційованою відсотковою ставкою-->

<!--                для моделей Land Cruiser, Land Cruiser Prado*</h2>-->

<!--            <table class="cred_table">-->

<!--                <tr>-->

<!--                    <th rowspan="2">Передплата за <br> автомобіль, %**</th>-->

<!--                    <th colspan="5">Строк кредитування, відсоткова ставка в гривнях</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <th>12 міс.</th>-->

<!--                    <th>24 міс.</th>-->

<!--                    <th>36 міс.</th>-->

<!--                    <th>48 міс.</th>-->

<!--                    <th>60 міс.</th>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>30%</td>-->

<!--                    <td>0.01%</td>-->

<!--                    <td colspan="4" rowspan="4">13.99%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>40%</td>-->

<!--                    <td>0.01%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>50%</td>-->

<!--                    <td>0.01%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td>60%</td>-->

<!--                    <td>0.01%</td>-->

<!--                </tr>-->

<!--                <tr>-->

<!--                    <td colspan="6">Разова комісія – 2.99% від суми позики</td>-->

<!--                </tr>-->

<!--            </table>-->

<!--&lt;!&ndash;            <div class="icon_table">&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_1"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_2"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                <div class="icon_table_3"></div>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="text_icon">&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Швидке рішення по кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Без нотаріального посвідчення договорів - заощаджуйте до 5 000 грн.</span>&ndash;&gt;-->

<!--&lt;!&ndash;                <span>Фіксована ставка на весь термін кредиту</span>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <div class="desc_text">-->

<!--                <b>*УМОВИ КРЕДИТУВАННЯ З ДИФЕРЕНЦІЙОВАНОЮ ВІДСОТКОВОЮ СТАВКОЮ:</b>-->

<!--                <span><br>- Ставка кредитування протягом перших 12-ох місяців кредиту, в залежності від розміру передплати за автомобіль,-->

<!--      незалежно від загального строку кредитування (максимальний строк: 60 місяців);<br>-->

<!--      - З 13-го місяця кредитування фіксована ставка</span>-->

<!--            </div>-->

<!--            <hr class="hr_line">-->

<!--            <br>-->

<!--            <br>-->

<!--            <br>-->

<!--            <div class="terms text-left row">-->
<!--                <div class="terms_item col-12 col-md-6 order-0">-->

<!--                    <h3>УМОВИ ПОГАШЕННЯ КРЕДИТУ:</h3>-->

<!--                    <ul>-->

<!--                        <li>Ануїтет - щомісячно рівними частинами;</li>-->

<!--                        <li>Стандартний графік - щомісячно, нарахування-->

<!--                            відсотків на залишок суми.</li>-->

<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="terms_item col-12 col-md-6 order-md-2 order-3">-->

<!--                    <h3>ДОСТРОКОВЕ ПОГАШЕННЯ КРЕДИТУ:</h3>-->

<!--                    <ul>-->
<!--                        <li>можливе вже з першого місяця, без обмежень та комісії.</li>-->

<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="terms_item col-12 col-md-6 order-md-3 order-2">-->
<!--                    <h3>ОБОВ’ЯЗКОВЕ СТРАХУВАННЯ:</h3>-->
<!--                    <ul>-->

<!--                        <li>повне КАСКО <br>(<span class="red_text">можливо включити в тіло кредиту***</span>);</li>-->

<!--                        <li>страхування цивільної відповідальності;</li>-->

<!--                        <li>страхування життя та здоров’я позичальника 1,99%-->

<!--                            одноразово (включається в загальну суму кредиту)-->

<!--                        </li>-->

<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="terms_item col-12 col-md-6 order-4">-->
<!--                    <h3>ДОДАТКОВІ ВИТРАТИ:</h3>-->
<!--                    <ul>-->
<!--                        <li>комісія за операції в Держ. реєстрі – 750 грн.;</li>-->

<!--                        <li>страхування КАСКО у партнера програми;</li>-->

<!--                        <li>страхування Цивільної відповідальності.</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="footer_text">** - Для клієнтів, які є ФОП мінімальний перший внесок від 20% від вартості авто.<br>-->

<!--                *** - Договір страхування КАСКО можливо включити в тіло кредиту тільки для кредитів на строк від 37 місяців та-->

<!--                передплаті за автомобіль від 30% <br><br>Ви можете отримати «Авто в кредит» на наступних умовах: максимальний строк-->

<!--                – до 84 місяців, максимальна сума кредиту – до 2600000 грн., процентна ставка – від 0.01 % річних (база нарахування-->

<!--                365 днів у році), комісія за видачу кредиту – від 0 %, комісія за операції в Державному реєстрі – 750 грн. Реальна-->

<!--                процентна ставка становить від 13,63% річних. Кредит надається у відділеннях Банку на всій території України за-->

<!--                виключенням тимчасово окупованої території АР Крим та зони проведення ООС. Банк залишає за собою право змінювати-->

<!--                умови кредитування. Про детальні умови кредитування дізнайтесь на сайті www.credit-agricole.ua або за телефоном:-->

<!--                0800305555. Умови дійсні з 07.07.2020-->

<!--            </div>-->

<!--            <div class="footer_text2">ПЕРЕЛІК НЕОБХІДНИХ ДОКУМЕНТІВ ДЛЯ ОТРИМАННЯ КРЕДИТУ ВИ МОЖЕТЕ ОТРИМАТИ У ВІДДІЛЕННІ АТ-->

<!--                «КРЕДІ АГРІКОЛЬ БАНК» АБО У ПАРТНЕРА ПРОГРАМИ</div>-->

<!--            <div class="logo_footer">-->

<!--                <div class="logo_left"></div>-->

<!--                <div class="logo_right"></div>-->

<!--            </div>-->

<!--            <div class="p">Докладніше про програму «Тойота Кредит» можна дізнатися на окремій <a href="https://credit-agricole.ua/for-you/car-loans/toyota" target="_blank"> сторінці на веб-сайті банку-партнера </a> або у кредитного консультанта у салоні нашого дилерського центру ;</div>-->

<!--            <br>-->

<!--            <div class="contact">-->

<!--                <div class="p">Яцина Дар’я  <a href="mailto:Daria.Yatsyna@kit-t.toyota.ua" target="_blank">Daria.Yatsyna@kit-t.toyota.ua</a>, тел.: <a href="tel:+380676174872">+38 (067) 617 48 72</a>  </div>-->

<!--                <div class="p">Леонова Тетяна <a href="mailto:Tatiana.Leonova@kit-t.toyota.ua" target="_blank">Tatiana.Leonova@kit-t.toyota.ua</a>, тел.: <a href="tel:+380676174874">+38 (067)  617 48 74</a>  </div>-->

<!--                <div class="p">Богатюк Юлія <a href="mailto:Julia.Bogatyuk@kit-t.toyota.ua" target="_blank">Julia.Bogatyuk@kit-t.toyota.ua</a>, тел.: <a href="tel:+380676174871">+38 (067) 617 48 71</a>  </div>-->

<!--            </div>-->

<!--        </div>-->


    </main>
</template>

<script>
    import PageBody from "../../mixins/mixinPages"

    export default {
        name: "credit",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 3,
                showInfo: false,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Toyota Кредит - фінансування купівлі автомобілів Toyota`,
                title:  `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Toyota Кредит - фінансування купівлі автомобілів Toyota`,
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `В офіційній дилерскій мережі ПІІ «Тойота-Україна» діє єдина програма фінансування купівлі автомобілів марки Toyota під назвою «Тойота Кредит».`,
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `В офіційній дилерскій мережі ПІІ «Тойота-Україна» діє єдина програма фінансування купівлі автомобілів марки Toyota під назвою «Тойота Кредит».`,
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota,кредит,купити,тойота україна,королла,ауріс,камрі,ленд крузер,кредит,гривня,тойота кредит,індекс банк, ставки,тойота-україна,строк,кредитування,проценти,axa,аха,страхування,тойота, credit agricole, креди агріколь, креди агріколь банк, кредит агриколь,toyota, yaris,auris, corolla, camry,avensis, rav4, prado, land cruiser, highlander, hilux`,
                        content: this.meta_keywords,

                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota,кредит,купити,тойота україна,королла,ауріс,камрі,ленд крузер,кредит,гривня,тойота кредит,індекс банк, ставки,тойота-україна,строк,кредитування,проценти,axa,аха,страхування,тойота, credit agricole, креди агріколь, креди агріколь банк, кредит агриколь,toyota, yaris,auris, corolla, camry,avensis, rav4, prado, land cruiser, highlander, hilux`,
                        content: this.meta_keywords,

                    },
                ],
            }
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
    
    main ::v-deep div{
    /*main {*/
        padding: 0;
        header.container-fluid  {
            @include header-xl;
            padding-top: 70px;
            /*background-image: url('//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/credit-1600x900_tcm-3046-165545.jpg');*/
            background-image: url(../../img/background/credit-1600x900_tcm-3046-165545.jpg);
        }

        .main_cont.container {
            .top_text {
                margin: 30px 0;
                padding: 0;
                background: none;
                height: auto;
                font-size: 2.5rem;
                text-align: center;
            }

            table.cred_table {
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

            .table_desc {
                text-align: left;
                font-size: 1rem;
                display: block;
                margin: 10px 0;
            }

            .desc_text {
                text-align: left;
                b {
                    font-size: 1.6rem;
                }
                span {
                    font-size: 1.4rem;
                    color: #595D60;
                    margin-bottom: 24px;
                }
            }

            .terms {
                h3 {
                    font-size: 2.0rem;
                }
                ul {
                    padding-left: 10px;
                    li {
                        font-size: 1.6rem;
                    }
                }
            }

            .footer_text {
                text-align: left;
                font-size: 1.4rem;
                display: block;
                margin: 10px 0;
            }

            .footer_text2 {
                font-size: 1.6rem;
                text-align: left;
                margin-bottom: 30px;
            }

            .p {
                text-align: left;
                font-size: 1.6rem;
                color: #595D60;
                margin-bottom: 24px;
                a {
                    color: #595D60;
                    text-decoration: underline;
                    white-space: nowrap;
                }
            }

            .contact {
                margin-top: 30px;
            }


            /*.body {
                text-align: left;


                div.contact {
                    margin-top: 60px;

                    .p {
                        margin-top: 10px;
                        a {
                            color: $font_color;
                            &:hover {
                                color: #E50000;
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


            }*/
        }
    }

    /*main {
        .info {
            margin: 0 auto 30px;
            border-bottom: 1px solid #cccccc;
            text-align: left;
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
                .p {
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
    }*/






    @media (min-width: 992px) and (max-width: 1199.9px) {
        main ::v-deep div{
            header.container-fluid  {
                @include header-lg
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main ::v-deep div{
            header.container-fluid  {
                @include header-md;
                h1 {
                    font-size: 3.5rem;
                }
                h2 {
                    font-size: 2.2rem;
                }
            }

        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main ::v-deep div {
            header.container-fluid  {
                @include header-sm;
                background-image: url(../../img/background-sm/credit-1600x900_tcm-3046-165545.jpg);
                h1 {
                    font-size: 3rem;

                }
                h2 {
                    width: 100%;
                    font-size: 2.0rem;
                }
            }

            .main_cont.container {
                .top_text {
                    font-size: 2.2rem;
                }

                table.cred_table {
                    font-size: 1.3rem;
                    margin-bottom: 15px;
                }

                .terms {
                    h3 {
                        font-size: 2.0rem;
                    }
                    ul {
                        padding-left: 20px;
                        li {
                            font-size: 1.6rem;
                        }
                    }
                }


                .contact {
                    .p {
                        font-size: 2.0rem;
                    }
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main ::v-deep div {
            header.container-fluid  {
                @include header-xs;
                background-image: url(../../img/background-sm/credit-1600x900_tcm-3046-165545.jpg);
                width: 100%;
                h1 {
                    width: 100%;
                    padding: 10px 15px 10px;
                    color: $font_color;
                }
            }

            .main_cont.container {
                .top_text {
                    font-size: 2.2rem;
                }
                .wrap_credit_table {
                    overflow: scroll;
                    table.cred_table {
                        /*overflow: scroll;*/
                        /*width: 100%;*/
                        font-size: 1.2rem;
                        margin-bottom: 20px;
                        th {
                            box-sizing: border-box;
                            padding: 2px;
                        }
                        td {
                            padding: 2px;
                        }
                    }
                }

                .table_desc {
                    text-align: left;
                    font-size: 1rem;
                    display: block;
                    margin: 10px 0;
                }

                .desc_text {
                    text-align: left;
                    b {
                        font-size: 1.6rem;
                    }
                    span {
                        font-size: 1.4rem;
                        color: #595D60;
                        margin-bottom: 24px;
                    }
                }

                .terms {
                    h3 {
                        font-size: 2.0rem;
                    }
                    ul {
                        padding-left: 10px;
                        li {
                            font-size: 1.6rem;
                        }
                    }
                }

                .footer_text {
                    text-align: left;
                    font-size: 1.4rem;
                    display: block;
                    margin: 10px 0;
                }

                .footer_text2 {
                    font-size: 1.6rem;
                    text-align: left;
                    margin-bottom: 30px;
                }

                .p {
                    text-align: left;
                    font-size: 1.6rem;
                    color: #595D60;
                    margin-bottom: 24px;
                    a {
                        color: #595D60;
                        text-decoration: underline;
                        white-space: nowrap;
                    }
                }

                .contact {
                    margin-top: 30px;
                }


                /*.body {
                    text-align: left;


                    div.contact {
                        margin-top: 60px;

                        .p {
                            margin-top: 10px;
                            a {
                                color: $font_color;
                                &:hover {
                                    color: #E50000;
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


                }*/
            }
        }
    }

</style>