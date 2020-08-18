<template>
    <main>
        <menu-nikolaev/>
        <div v-html="pageBody"></div>

<!--        <header></header>-->

<!--        <div class="body container text-left">-->
<!--            <p><b>Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві</b>, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.</p>-->
<!--            <p>У салоні представлений повний модельний ряд автомобілів марки Toyota. На території дилерського центру розташовані станція технічного обслуговування, що надає послуги з гарантійного і післягарантійного обслуговування автомобілів, а також широка база оригінальних запасних частин і аксесуарів, малярна ділянка, ділянка кузовних робіт, автомобільна мийка.</p>-->
<!--            <p>Купуючи автомобіль в нашому дилерському центрі «Тойота Центр Миколаїв», Ви отримаєте наступні переваги:</p>-->

<!--            <ul>-->
<!--                <li>легальність і чесність угоди;</li>-->
<!--                <li>автомобілі японського якості;</li>-->
<!--                <li>заводська гарантія, яка діє 3 роки або 100 тис. км пробігу;</li>-->
<!--                <li>ремонт автомобілів за стандартами Toyota;</li>-->
<!--                <li>офіційна сервісна історія;</li>-->
<!--                <li>служба допомоги в дорозі Toyota Assistance;</li>-->
<!--                <li>унікальна клієнтська служба;</li>-->
<!--                <li>великий вибір оригінальних запасних частин;</li>-->
<!--                <li>кредитні програми;</li>-->
<!--                <li>можливість тест-драйву всього модельного ряду.</li>-->
<!--            </ul>-->

<!--            <p>Офіційний дилерський центр Тойота Центр Миколаїв «Кіт-Т» надасть Вам можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і до моменту їх подальшого продажу.</p>-->
<!--            <p>Ми цінуємо кожного клієнта і щодня строго дотримуємося основного правила - «Клієнт - понад усе».</p>-->
<!--            <p><strong>Особисто для Вас це означає, що кожен раз, сідаючи в крісло водія автомобіля марки Toyota і запускаючи двигун, Ви будете почувати себе повністю впевненими, знаючи, що автомобіль, за кермом якого Ви сидите, спроектовано та виготовлено згідно з найвищими нормативами контролю якості та надійності. Для компанії «Тойота» якість - це не обіцянка, а стиль життя!</strong></p>-->
<!--        </div>-->
    </main>
</template>

<script>
    import MenuNikolaev from "./../../components/ToyotaInNikolaev/MenuNikolaev";
    import PageBody from "../../mixins/mixinPages"

    export default {
        name: "About",

        components: {
            MenuNikolaev
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 38,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Про нас | Тойота Центр Миколаїв «КиТ-Т»`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Про нас | Тойота Центр Миколаїв «КиТ-Т»`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Тойота Центр Миколаїв «КіТ-Т» - офіційний дилер Тойота в Миколаєві, є сучасним 3S-концептуальним (Sale - продажу, Service - сервіс, Spareparts - запчастини) автомобільним центром Тойота в м.Миколаєві, який відповідає всім високим корпоративним стандартам Toyota. У 2017 році дилерський центр отримав Срібну нагороду стандартів обслуговування клієнтів Toyota.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `Toyota Nikolaev, про нас, Тойота Центр Миколаїв «КиТ-Т»`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `Toyota Nikolaev, про нас, Тойота Центр Миколаїв «КиТ-Т»`
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
    @import '../../styles/variables';

    *{
        margin: 0;
        padding: 0;
        color: $font_color;
    }
    
    main ::v-deep div {
        header {
            @include header-xl;
            background-image: url(../../img/background/toyota_ng.jpg);
        }

        .body.container {
            margin: 68px auto;

            .p {
                font-size: 1.8rem;
                margin: 30px 0;
            }

            ul {
                list-style-type: none;
                padding: 0;
                li {
                    font-size: 1.8rem;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main ::v-deep div {
            header {
                @include header-lg;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main ::v-deep div {
            header {
                @include header-md;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main ::v-deep div {
            header {
                @include header-sm;
            }
        }
    }

    @media (max-width: 575.9px) {
        main ::v-deep div {
            header {
                @include header-xs;
            }

            .body.container {
                margin: 30px auto;

                .p {
                    font-size: 1.6rem;
                    margin: 30px 0;
                }

                ul {
                    li {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }

</style>