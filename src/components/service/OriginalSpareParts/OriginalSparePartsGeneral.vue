<template>
    <section class="container-fluid">
        <header>
            <h1 class="container">Оригінальні запчастини</h1>
        </header>

        <div class="body container text-left">
            <h2 class="text-center">
                Оригінальні запасні частини до автомобілів Toyota відповідають найсуворішим нормативам якості та стануть запорукою тривалої експлуатації вашого автомобіля Toyota.
            </h2>

            <p>
                Для того, щоб бути на 100 % впевненими у своєму автомобілі, ми рекомендуємо використовувати оригінальні запасні частини Toyota. Всі оригінальні вузли та запасні деталі Toyota схвалені до використання конструкторськими бюро, які створили ваш автомобіль. Ці запчастини:
            </p>

            <ul>
                <li>сконструйовані спеціально для вашого автомобіля;</li>
                <li>відповідають суворим нормативам компанії «Тойота», що висуваються до якості виконання та надійної експлуатації;</li>
                <li>покриваються офіційною гарантією Toyota (щонайменше на 12 місяців з дати встановлення);</li>
                <li>встановлюються лише спеціально підготовленими технічними працівниками.</li>
            </ul>

            <p>Бездоганна репутація компанії «Тойота» у сфері якості має за основу продуману конструкцію, бездоганне виконання та експлуатаційну надійність наших автомобілів. Ці ж принципи поширюються на наші оригінальні запасні частини. Вони виготовляються із якісних матеріалів та у відповідності до таких самих високих виробничих нормативів, які було застосовано до виробництва вузлів та агрегатів вашого автомобіля під час збірки. Крім того, ви завжди зможете покластися на нас: ми гарантуємо оперативну доставку запасних частин та якісне технічне обслуговування.</p>

            <p>Для безпечної та безпроблемної експлуатації обирайте оригінальні запасні частини Toyota! З метою придбання запчастин, будь ласка, звертайтеся до офіційних дилерів Toyota.</p>


        </div>


    </section>
</template>

<script>
    export default {
        name: "OriginalSparePartsGeneral",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Оригінальні запчастини | Toyota Україна`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Оригінальні запчастини | Toyota Україна`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Для безпроблемної екпслуатації автомобілів Toyota ми рекомендуємо використовувати оригінальні запасні частині та витратні матеріали.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Для безпроблемної екпслуатації автомобілів Toyota ми рекомендуємо використовувати оригінальні запасні частині та витратні матеріали.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота, запасні частини, запчастини, вибір, купити, замовити, дилер, якість, гарантія, toyota, Genuine Parts`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота, запасні частини, запчастини, вибір, купити, замовити, дилер, якість, гарантія, toyota, Genuine Parts`
                    },
                ],
            }
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;
        header {
            height: 80vh;
            width: 100%;
            padding-top: 50px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-aftersales-2014-genuine-parts-focus_tcm-3046-65770.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                color: $font_color;
            }
        }

        .body.container {
            color: $font_color;
            h2 {
                font-size: 2.5rem;
                margin: 68px 0;
            }

            p {
                font-size: 1.8rem;
                color: #595D60;
                margin-bottom: 25px;
            }

            ul {
                margin: 20px 0;
                padding: 10px 0 10px 20px;
                list-style-type: none;
                border-top: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
                li {
                    font-size: 1.6rem;
                    margin: 10px 0;
                }
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid {
            header {
                height: 80vh;
                max-height: 60vw;
                h1 {
                    font-size: 5rem;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid {
            header {
                height: 56vw;
                min-height: 180px;
                max-height: 480px;
                padding-top: 30px;
                h1 {
                    font-size: 4.5rem;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main.container-fluid {
            header {
                height: 40vh;
                min-height: 180px;
                padding-top: 20px;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body.container {
                h2 {
                    font-size: 2.2rem;
                    margin: 30px 0;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid {
            header {
                height: 30vh;
                min-height: 180px;
                max-height: 380px;
                padding-top: 15px;
                h1 {
                    font-size: 3.5rem;
                }
            }

            .body.container {
                h2 {
                    font-size: 2.0rem;
                    margin: 30px 0;
                }

                p {
                    font-size: 1.6rem;
                }
            }
        }
    }


</style>