<template>
    <main>
        <guarantee-menu></guarantee-menu>
        <header class="container-fluid">
            <h1 class="text-center">
                Гарантія
                <h2 class="text-center">Три роки або 100 тис. км</h2>
            </h1>
        </header>

        <div class="body container">
            <h3 class="text-center">Гарантійному обслуговуванню на території України підлягають лише автомобілі, придбані в офіційній дилерській мережі Toyota в Україні (надалі – «Дилерська мережа»).</h3>

            <h4 class="text-center">Умови гарантії</h4>
            <p>Гарантія Виробника поширюється на ремонт несправностей чи пошкоджень автомобіля, що спричинені дефектами матеріалів або збирання автомобіля Виробником.</p>
            
            <div class="manufacturers_warranty w-lg-75 w-100">
                <h4>Виробник встановлює наступні гарантійні терміни експлуатації:</h4>

                <ul>
                    <li>на нові автомобілі, продані через Дилерську мережу, 36 (тридцять шість) місяців або 100 000 км пробігу, в залежності від того, що наступить раніше, починаючи з дати продажу (дати поставки) першому Власнику, яка фіксується в сервісній книжці.</li>
                    <li>на гібридну систему автомобілів гарантійний термін становить 60 (шістдесят) місяців або 100 000 км пробігу, в залежності від того, що наступить раніше, починаючи з дати продажу (дати поставки) першому власнику, яка фіксується в сервісній книжці.</li>
                    <li>на випадки корозії поверхні чи пошкодження лакофарбованого покриття на будь-яких пофарбованих деталях кузова внаслідок дефектів матеріалів чи виробництва - 36 (тридцять шість) місяців або 100 000 км пробігу, в залежності, що наступить раніше, починаючи з дати продажу (дати поставки) першому власнику, яка фіксується в сервісній книжці.</li>
                    <li>на оригінальні запасні частини придбані та встановлені в Дилерській мережі гарантійний термін складає 12 (дванадцять) місяців без обмеження пробігу, починаючи з дати ремонту сплаченого Власником, під час якого були проведені роботи по встановленню такої оригінальної запасної частини.</li>
                    <li>на придбані та встановлені у Дилера оригінальні аксесуари гарантійний термін визначається залишковим строком гарантії на Автомобіль, але не менше, ніж 12 (дванадцять) місяців з дати встановлення. Якщо на Автомобіль вже не розповсюджуються гарантійні зобов’язання Виробника, то гарантія на придбані та встановлені оригінальні аксесуари на такий Автомобіль дійсна впродовж 12 (дванадцяти) місяців без обмеження пробігу, починаючи з дати встановлення.</li>
                </ul>
            </div>

            <div class="warranty">
                <h4 class="text-center">Дія гарантії</h4>
                <p>Гарантія розповсюджується на оригінальні запасні частини та аксесуари, придбані та встановлені виключно в Дилерській мережі.</p>
                <p>При виявленні протягом зазначених вище термінів експлуатації недоліків автомобіля офіційний дилер Toyota, при дотриманні умов, викладених у книжці «Сервіс та гарантія», здійснить ремонт або заміну відповідних деталей, вузлів або агрегатів.</p>
                <p>Гарантійні зобов’язання Виробника діють у разі своєчасного проходження в повному обсязі регламентного технічного обслуговування автомобіля на станціях технічного обслуговування (СТО) офіційних дилерів Toyota в Україні.</p>
                <p>З повним переліком відомостей щодо дії гарантійних зобов’язань, включаючи обмеження гарантійних зобов’язань та обов’язкові умови для надання гарантійного обслуговування, Ви можете ознайомитися в офіційному дилерському центрі Toyota. Такі відомості містяться також у книжці «Сервіс та гарантія», що надається покупцю разом з автомобілем при його купівлі.</p>
            </div>

            <h2>В Україні 30 офіційних сервісних станцій Toyota, де можна придбати та встановити оригінальні аксесуари.</h2>

        </div>
    </main>
</template>

<script>
    import GuaranteeMenu from "./../../../components/whyToyota/guarantee/GuaranteeMenu";

    export default {
        name: "WarrantyService",

        components: {
            GuaranteeMenu,
        },

        metaInfo() {
            return {
                title:  `Toyota | Гарантія  на автомобілі Тойота (Toyota)`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota | Гарантія  на автомобілі Тойота (Toyota)`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `На автомобілі марки Toyota, що були придбані у офіційних дилерів Toyota в Україні, надається гарантія терміном на три роки або 100 тис. км пробігу.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `На автомобілі марки Toyota, що були придбані у офіційних дилерів Toyota в Україні, надається гарантія терміном на три роки або 100 тис. км пробігу.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Гарантія, тойота, гарантія тойота Україна, умови гарантії, тойота, Україна, дія гарантії, гарантійні зобов’язання, тойота, Україна, гарантія, термін, Toyota, тойота`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Гарантія, тойота, гарантія тойота Україна, умови гарантії, тойота, Україна, дія гарантії, гарантійні зобов’язання, тойота, Україна, гарантія, термін, Toyota, тойота`
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }

    main {
        header.container-fluid {
            @include header-xl;
            background-image: url(//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/%D1%82%D0%BE%D0%B9%D0%BE%D1%82%D0%B0_%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82%D1%96%D1%8F_tcm-3046-246829.jpg);
            padding-top: 25vh;
        }

        .body.container {
            margin: 68px auto;
            text-align: left;
            h3 {
                font-size: 2.5rem;
                margin-bottom: 68px;
            }
            h4 {
                font-size: 1.8rem;
                font-weight: bolder;
                margin-bottom: 5px;
            }
            p {
                font-size: 1.6rem;
                color: #595D60;
            }

            .manufacturers_warranty {
                margin: 40px 0;
                ul {
                    margin: 20px 0;
                    border-top: 1px solid #f0f0f0;
                    border-bottom: 1px solid #f0f0f0;
                    padding: 20px 0;
                    list-style-type: none;
                    li {
                        font-size: 1.6rem;
                        color: #595D60;
                        margin-bottom: 15px;
                    }
                }
            }

            .warranty {
                margin: 40px 0 68px;
                h4 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.6rem;
                    margin-bottom: 15px;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main {
            header.container-fluid {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header.container-fluid {
                @include header-md;
                padding-top: 20vh;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header.container-fluid {
                @include header-sm;
                padding-top: 10vh;
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 2rem;
                    margin-bottom: 30px;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header.container-fluid {
                @include header-xs;
                padding-top: 5vh;
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }
                h4 {
                    font-size: 1.6rem;
                }
                p {
                    font-size: 1.4rem;
                }

                .manufacturers_warranty {
                    margin: 30px 0;
                    ul {
                        margin: 15px 0;
                        padding: 15px 0;
                        li {
                            font-size: 1.4rem;
                        }
                    }
                }

                .warranty {
                    margin: 30px 0 30px;
                    h4 {
                        font-size: 1.6rem;
                        margin-bottom: 15px;
                    }
                    p {
                        font-size: 1.4rem;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }

</style>