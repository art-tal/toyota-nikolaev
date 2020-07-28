<template>
    <main class="container-fluid">
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container">Технічне обслуговування автомобілів</h1>-->
<!--        </header>-->
<!--        -->
<!--        <div class="body container">-->
<!--            <h3>Ви зможете спокійно зосередитися на отриманні задоволення від їзди, а фахівці дилерських центрів Toyota-->
<!--                подбають про підтримання вашої Toyota в ідеальному стані.</h3>-->
<!--            <h2>Сервіс найвищої якості!</h2>-->
<!--            <div class="p">Працівники дилерських центрів проходять підготовку із залученням усіх необхідних ресурсів виробника, суворо дотримуються регламенту виконання робіт та використовують лише оригінальні запасні частини і витратні матеріали Toyota, щоб Ви отримали сервіс найвищої якості.</div>-->
<!--            <div class="p">Дотримуючись рекомендованого проміжку між обслуговуваннями вашої Toyota (12 місяців або 15 тис. км пробігу залежно від того, що настане раніше), ви зможете бути впевненими у своєму автомобілі.</div>-->
<!--            <div class="p">Персонал дилерських центрів Toyota спілкується із клієнтами, адже ваша думка про рівень обслуговування є важливою для подальшого покращення.</div>-->
<!--            <div class="p">Дізнайтесь що нового у найближчого дилера Toyota, для того щоб завжди бути в курсі останніх подій.</div>-->
<!--        </div>-->
    </main>
</template>

<script>
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "Principles",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 9,
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Технічне обслуговування автомобілів Toyota`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Технічне обслуговування автомобілів Toyota`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворих нормативів Toyota. Якість - перш за все!`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворих нормативів Toyota. Якість - перш за все!`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                    },
                ],
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main.container-fluid {
        padding: 0;
    }

    main.container-fluid ::v-deep div {
        padding: 0;
        color: $font_color;

        header {
            height: 80vh;
            max-height: 60vw;
            background-image: url('//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-aftersales-2017-service-promise-header_tcm-3046-1058645.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            margin-bottom: 50px;

            h1 {
                padding-top: 350px;
                font-size: 5.2rem;
                color: #ffffff;
                font-weight: bolder;
            }
        }

        .body.container {
            color: $font_color;
            margin-bottom: 68px;
            h3 {
                font-size: 2.2rem;
                margin: 68px 0;
            }
            h2 {
                font-size: 4.5rem;
                font-weight: bolder;
                text-align: left;
                margin-bottom: 40px;
            }
            .p {
                font-size: 1.6rem;
                color: #595D60;
                margin-bottom: 30px;
                text-align: left;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        main.container-fluid ::v-deep div {
            header {
                max-height: 60vw;
                h1 {
                    width: 100%;
                    padding-top: 250px;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid ::v-deep div {
            header  {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                    padding-top: 200px;
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
        main.container-fluid ::v-deep div{
            header  {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3rem;
                    padding-top: 150px;
                }
            }

        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid ::v-deep div {
            header {
                width: 100%;
                height: 56vw;
                min-height: 180px;
                max-height: 320px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    font-size: 2.5rem;
                    padding-top: 20vw;
                }
            }
            .body.container {
                margin-bottom: 30px;
                h3 {
                    font-size: 1.8rem;
                    margin: 30px 0;
                }
                h2 {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .p {
                    font-size: 1.4rem;
                    margin-bottom: 20px;
                }
            }
        }
    }



</style>