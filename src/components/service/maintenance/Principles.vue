<template>
    <main class="container-fluid">
        <menu-to-maintenance/>
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
    import MenuToMaintenance from "./../../../components/service/maintenance/MenuToMaintenance";
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "Principles",

        components: {
            MenuToMaintenance
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 9,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Технічне обслуговування автомобілів Toyota`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Технічне обслуговування автомобілів Toyota`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворих нормативів Toyota. Якість - перш за все!`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Обслуговуючий персонал центрів та технічні фахівці пройшли повний курс підготовки відповідно до суворих нормативів Toyota. Якість - перш за все!`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        // content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        // content: `техобслуговування, тойота, то, технічне обслуговування, оригінальні масла, toyota, сервіс, сервісний центр, спеціаліст, запасні частини, сервісне обслуговування, офіційний сервіс тойота, сервіс тойота`
                        content: this.meta_keywords,
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
            @include header-xl;
            max-height: 60vw;
            /*background-image: url(//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-aftersales-2017-service-promise-header_tcm-3046-1058645.jpg);*/
            background-image: url(../../../img/background/toyota-aftersales-2017-service-promise-header_tcm-3046-1058645.jpg);
            margin-bottom: 50px;

            h1 {
                padding-top: 350px;
                color: #ffffff;
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
                @include header-lg;
                h1 {
                    padding-top: 250px;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main.container-fluid ::v-deep div {
            header  {
                @include header-md;
                h1 {
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
                @include header-sm;
                h1 {
                    font-size: 3rem;
                    padding-top: 150px;
                }
            }

        }
    }

    @media (max-width: 575.9px) {
        main.container-fluid ::v-deep div {
            header {
                @include header-xs;
                width: 100%;
                height: 56vw;
                max-height: 320px;
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