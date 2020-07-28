<template>
    <section class="container-fluid">
        <div v-html="pageBody.body"></div>
<!--        <header>-->
<!--            <h1 class="container">-->
<!--                Модульна Розважальна Система для пасажирів-->
<!--            </h1>-->
<!--            <h2>Подорожуйте із задоволенням!</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <h3 class="text-center">Модульна Розважальна Система зробить подорож Ваших пасажирів веселою та цікавою.</h3>-->

<!--            <h4>Функціонал</h4>-->
<!--            <div class="p">Модульна Розважальна Система зробить подорож Ваших пасажирів веселою та цікавою.</div>-->
<!--            <div class="p">Функціонал системи надає можливість переглядати фотографії, дивитись відео, слухати музику або грати в ігри. Ви можете адаптувати Модульну Розважальну Систему згідно з побажаннями Ваших пасажирів завдяки вибору екрана та комбінацій підключення.</div>-->

<!--            <h4>Можливість вибору екрана</h4>-->
<!--            <div class="p">До Вашої уваги пропонується кріплення для iPad (АйПад) або DVD-екран (ДВД-екран), також Ви можете встановити і те й інше на дві різні спинки сидінь. DVD-екрани (ДВД-екрани) можуть відображати однаковий або різний контент, що дозволить кожному із пасажирів насолоджуватись саме тими функціями, які вони оберуть самостійно.</div>-->

<!--            <h4>Зручність для користувача</h4>-->
<!--            <div class="p">Пульт дистанційного керування забезпечує зручність в управлінні, що дозволяє користувачу користуватись системою без зайвого регулювання ременів безпеки. Завдяки простому інтерфейсу та великим кнопкам система буде зрозумілою та легкою для користувача.</div>-->
<!--            <div class="p">За допомогою підключення безпровідних навушників до Модульної Розважальної Системи користувач не буде відволікати водія та інших пасажирів.</div>-->

<!--            <div class="p">* Більш детально про Модульну Розважальну Систему, її компоненти, вартість, порядок придбання та встановлення тощо Ви можете дізнатись, звернувшись до найближчого офіційного дилера Toyota.</div>-->
<!--        </div>-->
    </section>
</template>

<script>
    import PageBody from "@/mixins/mixinPages";

    export default {
        name: "EntertainmentSystem",

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 12,
            }
        },

        metaInfo() {
            return {
                title:  `Toyota Nikolaev |Модульна Розважальна Система для пасажирів`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Модульна Розважальна Система для пасажирів`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Функціонал  модульної розважальної системи надає можливість переглядати фотографії, дивитись відеозаписи, слухати аудіозаписи чи музику або грати в ігри.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Функціонал  модульної розважальної системи надає можливість переглядати фотографії, дивитись відеозаписи, слухати аудіозаписи чи музику або грати в ігри.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, toyota, розважальна система, модуль, модульна розважальна система, задні пасажири, тойота, програвач, контент, екран, пульт, пасажири, купити`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, toyota, розважальна система, модуль, модульна розважальна система, задні пасажири, тойота, програвач, контент, екран, пульт, пасажири, купити`
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
    @import '../../../styles/variables';

    section.container-fluid ::v-deep div {
        padding: 0;
        color: $font_color;

        header {
            height: 80vh;
            max-height: 60vw;
            background-image: url(//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/rear-entertainment-system-header_tcm-3046-273547.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            margin-bottom: 50px;
            color: #ffffff;

            h1 {
                padding-top: 200px;
                font-size: 5.2rem;
                font-weight: bolder;
            }
            h2 {
                font-size: 3.4rem;
                font-weight: bold;
            }
        }

        .body.container {
         margin: 68px auto;
         h3 {
             font-size: 2.2rem;
             margin-bottom: 68px;
         }
         h4 {
             font-size: 1.8rem;
             font-weight: bold;
             margin-bottom: 24px;
         }
         .p {
             font-size: 1.6rem;
             color: #595D60;
             margin-bottom: 24px;
         }
     }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid ::v-deep div {
            header {
                height: 80vh;
                max-height: 60vw;
                h1 {
                    width: 100%;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid ::v-deep div {
            header {
                height: 56vh;
                min-height: 180px;
                max-height: 480px;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    font-size: 3.5rem;
                }
                h2 {
                    font-size: 2.2rem;
                    padding-top: 10px;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid ::v-deep div {
            header {
                min-height: 180px;
                height: 56vw;
                padding-top: 15px;
                h1 {
                    width: 100%;
                    padding-top: 100px;
                    font-size: 3rem;
                }
                h2 {
                    font-size: 2.0rem;
                    padding-top: 5px;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid ::v-deep div {
            header {
                width: 100%;
                height: 56vw;
                max-height: 380px;
                min-height: 180px;
                padding-top: 10px;
                h1 {
                    width: 100%;
                    padding: 70px 15px;
                    font-size: 2.5rem;
                }
                h2 {
                    font-size: 1.8rem;
                    padding-top: 5px;
                }
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }
            }
        }
    }

</style>