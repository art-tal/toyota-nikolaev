<template>
    <main class="insurance container-fluid">
        <sidebar></sidebar>


        <div v-html="pageBody"></div>

<!--        <section>-->
<!--            <header>-->
<!--                <h1>Тойота Страхування</h1>-->
<!--                <h2>Оперативне врегулювання збитків</h2>-->
<!--            </header>-->

<!--            <div class="body">-->
<!--                <h3>В офіційній дилерській мережі ПІІ «Тойота-Україна» діє страхова програма під назвою «Тойота Страхування». Вона спрямована на якісне та оперативне врегулювання збитків при настанні страхових випадків і дозволить вам убезпечити свій автомобіль на вигідних умовах.</h3>-->

<!--                <div class="p">Страхування за програмою «Тойота Страхування» здійснює СК  <a href="https://arx.com.ua/">«Страхова компанія« ARX »</a>,« * (Страхування за програмою «Тойота Страхування» здійснює СК </div>-->

<!--                <div class="p">Страховий продукт «Тойота Страхування» доступний для власників автомобілів марки Toyota, придбаних у офіційного дилера. Його метою є забезпечити <strong>зручність, якість, швидкість та індивідуальний підхід</strong> до кожного клієнта.</div>-->

<!--                <div class="p">Головними характеристиками програми «Тойота Страхування» є прозорі, доступні та вигідні умови страхування для всіх клієнтів, які купують автомобілі Toyota в офіційній дилерській мережі ПІІ «Тойота-Україна».</div>-->
<!--                -->
<!--                <h3 class="text-left">Програма «Тойота Страхування» надає клієнту:</h3>-->
<!--                <ul>-->
<!--                    <li>можливість вибору одного з трьох видів франшизи;</li>-->
<!--                    <li>відсутність обмежень за водійським стажем при виборі виду франшизи.</li>-->
<!--                </ul>-->

<!--                <div class="p">При настанні страхового випадку ремонт автомобіля може бути здійснений на сервісних станціях офіційних дилерських центрів Toyota із суворим дотриманням нормативів фірми-виробника з ремонту та використанням лише оригінальних запасних частин. Наведене дозволяє забезпечити гідну якість ремонтних робіт та високу залишкову вартість автомобіля у процесі його експлуатації.</div>-->

<!--                <div class="p">Власник автомобіля Toyota має можливість укласти договір страхування КАСКО та придбати поліс обов’язкового страхування цивільної відповідальності власників автомобілів у будь-якому автосалоні офіційного дилера Toyota в рамках програми «Тойота Страхування».</div>-->

<!--                <h3 class="text-left">Для того, щоб укласти договір страхування необхідно надати мінімальний комплект документів:</h3>-->

<!--                <ul>-->
<!--                    <li>свідоцтво про реєстрацію ТЗ (техпаспорт) або довідку-рахунок на автомобіль;</li>-->
<!--                    <li>водійське посвідчення;</li>-->
<!--                    <li>громадянський паспорт та ідентифікаційний код.</li>-->
<!--                </ul>-->

<!--                <div class="p">Процедура оформлення приємно здивує вас оперативністю.</div>-->
<!--                <div class="p">Страхові агенти виконають всі необхідні формальності та зроблять процес оформлення договору максимально швидким і приємним.</div>-->
<!--                <div class="p">Детальніше про страхову програму «Тойота Страхування», що представлена «Страхова компанія «ARX»*, можна дізнатися у салонах офіційних дилерів Toyota в Україні.</div>-->

<!--                <em>*До 21 червня 2019 року - «AXA Страхування»</em>-->
<!--                -->
<!--            </div>-->

<!--            -->
<!--        </section>-->
    </main>
</template>

<script>
    import PageBody from "../../mixins/mixinPages"
    // import Sidebar from "../permanent/Sidebar";
    import Sidebar from "./../../components/permanent/Sidebar"; //               for Laravel

    export default {
        name: "Insurance",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 2,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Страхування - Оперативне врегулювання збитків`,
                title:  `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Страхування - Оперативне врегулювання збитків`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "og:description",
                        // content: `Унікальна страхова програма «Тойота Страхування», спрямована на якісне та оперативне врегулювання збитків при настанні страхових випадків.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "description",
                        // content: `Унікальна страхова програма «Тойота Страхування», спрямована на якісне та оперативне врегулювання збитків при настанні страхових випадків.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `тойота, страхування, тойота страхування, страховка, аха страхування, ліцензія, послуги, страховий випадок, збитки, дтп, ремонт, виплати, франшиза, toyota, axa страхування, тариф, страховий тариф, каско, автоцивілка, поліс`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `тойота, страхування, тойота страхування, страховка, аха страхування, ліцензія, послуги, страховий випадок, збитки, дтп, ремонт, виплати, франшиза, toyota, axa страхування, тариф, страховий тариф, каско, автоцивілка, поліс`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },

        components: {
            Sidebar
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    
    main.container-fluid ::v-deep div {
        margin: 0;
        padding: 0;
        section {
            header {
                @include header-xl;
                margin: 0;
                /*width: 100%;*/
                /*height: 80vh;*/
                padding: 70px 15px 20px;

                background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/insurance-header_tcm-3046-165896.jpg');
                /*background-repeat: no-repeat;*/
                /*-webkit-background-size: cover;*/
                /*background-size: cover;*/
                /*background-position: center center;*/
                color: #ffffff;
                h1 {
                    font-size: 4.4rem;
                    /*font-weight: bolder;*/
                    padding-bottom: 16px;
                    text-align: center;
                }
                h2 {
                    /*font-size: 3.4rem;*/
                    font-weight: bold;
                    text-align: center;
                }
            }
            .body {
                padding: 68px 15px;
                text-align: left;
                color: #595D60;
                h3 {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 40px;
                    text-align: center;
                    color: $font_color;
                }
                .p {
                    margin-bottom: 40px;
                    font-size: 1.6rem;
                    a {
                        color: #595D60;
                        text-decoration: underline;
                    }
                }

                ul {
                    padding: 0 0 10px 20px;
                    li{
                        font-size: 1.6rem;
                        margin-bottom: 10px;
                    }
                }

                em {
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid ::v-deep div {
            section {
                header {
                    @include header-sm;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid ::v-deep div {
            section {
                header {
                    @include header-xs;
                }
            }
        }
    }

</style>