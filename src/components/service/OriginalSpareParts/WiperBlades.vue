<template>
    <section class="container-fluid">
        <sidebar></sidebar>
        <menu-to-spare-parts/>
        <div v-html="pageBody"></div>
<!--        <header>-->
<!--            <h1 class="container">Щітки склоочисників Toyota</h1>-->
<!--            <h2>Сприймай світ яскравішим</h2>-->
<!--        </header>-->

<!--        <div class="body container text-left">-->
<!--            <p>Під час подорожей для водія, зосередженого на дорозі, та для пасажира, який насолоджується краєвидами, кристально чисте скло це не розкіш, а невід’ємна необхідність при експлуатації автомобіля.</p>-->
<!--            <h3 class="font-weight-bold">Оригінальні щітки склоочисників Toyota - продукт найвищої якості, головне призначення якого постійне підтримання гарної видимості за несприятливих погодних умов. Переваги вибору оригінальних щіток склоочисника Toyota:</h3>-->

<!--            <div class="row">-->
<!--                <article class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Icon-1_tcm-3046-839534.jpg" alt=" Еластична гума з тривалим терміном експлуатації.">-->

<!--                    <h4 class="font-weight-bold">Найвища якість</h4>-->

<!--                    <div class="p">Еластична гума з тривалим терміном експлуатації.</div>-->
<!--                    <div class="p">Стійка гума вздовж усієї мікро-кромки, що контактує зі склом.</div>-->
<!--                    <div class="p">Не піддається впливу масла, хімічних речовин, бруду, льоду, низьких і високих температур.</div>-->
<!--                </article>-->

<!--                <article class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Icon-2_tcm-3046-839535.jpg" alt="Безпека водія та пасажирів">-->

<!--                    <h4 class="font-weight-bold">Безпека водія та пасажирів</h4>-->

<!--                    <div class="p">Очищують одним рухом на відміну від неоригінальніх аналогів.</div>-->
<!--                    <div class="p">Якісно прибирають воду та бруд, покращуючи видимість задля вашої безпеки.</div>-->
<!--                </article>-->

<!--                <article class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Icon-3_tcm-3046-839536.jpg" alt="Безшумна робота щіток склоочисніків">-->

<!--                    <h4 class="font-weight-bold">Тиха робота</h4>-->

<!--                    <div class="p">Не відволікає увагу водія від управління автомобілем.</div>-->
<!--                    <div class="p">Покращують враження від керування.</div>-->
<!--                </article>-->

<!--                <article class="col-lg-3 col-md-6 col-12">-->
<!--                    <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Icon-4_tcm-3046-839537.jpg" alt="Тривалий срок експлуатації">-->

<!--                    <h4 class="font-weight-bold">Тривалий строк експлуатації</h4>-->

<!--                    <div class="p">Працюють ефективно при кожному протиранні скла.</div>-->
<!--                    <div class="p">Під час дощу склоочисники спрацьовують близько 7,200 раз на годину</div>-->
<!--                </article>-->
<!--            </div>-->

<!--            <article>-->
<!--                <header>-->
<!--                    <h1 class="text-center">Модельний ряд оригінальних щіток склоочисників Toyota</h1>-->
<!--                </header>-->

<!--                <h3 class="font-weight-bold">Новий модельний ряд щіток склоочисників, який поєднує в собі новітні технології і тенденції, був розроблений для того, щоб забезпечити найприємніші враження від керування.</h3>-->
<!--                <div class="row">-->
<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">КАРКАСНІ ЩІТКИ СКЛООЧИСНИКА</h3>-->
<!--                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Wiper-1_tcm-3046-840009.jpg" alt="КАРКАСНІ ЩІТКИ СКЛООЧИСНИКА">-->
<!--                        <div class="p">Двоточкова конструкція надає можливість оптимально розподіляти тиск.</div>-->
<!--                        <div class="p">Універсальний роз'єм підходить до багатьох важелів склоочисників</div>-->
<!--                        <div class="p">Довжина від 350 до 700 мм.</div>-->
<!--                        <div class="p">Випробовані та схвалені згідно зі стандартами якості Toyota.</div>-->
<!--                    </div>-->

<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">ГІБРИДНІ ЩІТКИ СКЛООЧИСНИКА</h3>-->
<!--                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Wiper-2_tcm-3046-840011.jpg" alt="ГІБРИДНІ ЩІТКИ СКЛООЧИСНИКА">-->
<!--                        <div class="p">Тонка, майже непомітна гумова частина та аеродинамічний каркас надають сучасного вигляду.</div>-->
<!--                        <div class="p">Гума стійка до впливу масла, хімічних речовин, бруду, піску, низьких та високих температур і миючих засобів.</div>-->
<!--                        <div class="p">Випробовані та схвалені згідно зі стандартами якості Toyota.</div>-->
<!--                        <div class="p">Довжина від 350 до 700 мм.</div>-->
<!--                    </div>-->

<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">БЕЗКАРКАСНІ ЩІТКИ СКЛООЧИСНИКА</h3>-->
<!--                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Wiper-3_tcm-3046-840013.jpg" alt="БЕЗКАРКАСНІ ЩІТКИ СКЛООЧИСНИКА">-->
<!--                        <div class="p">Вбудована металева вісь забезпечує рівномірний розподіл тиску по всій довжині, а також сприяє найкращій якості очищення та тривалій експлуатації.</div>-->
<!--                        <div class="p">Відсутність рухомих металевих елементів у конструкції запобігає замерзанню і, як наслідок, покращується прилягання щітки до скла.</div>-->
<!--                        <div class="p">Вбудована накладка покращує аеродинамічні характеристики.</div>-->
<!--                        <div class="p">Матеріал на основі синтетичного каучуку забезпечує оптимальну якість очищення і покращену стійкість до зношення та пошкоджень.</div>-->
<!--                        <div class="p">Має привабливіший дизайн конструкції.</div>-->
<!--                        <div class="p">Вбудований фіксатор покращує дизайн та полегшує заміну щіток склоочисника.</div>-->
<!--                        <div class="p">Випробовані та схвалені згідно зі стандартами якості Toyota.</div>-->
<!--                    </div>-->


<!--                </div>-->
<!--            </article>-->

<!--            <article>-->
<!--                <header>-->
<!--                    <h1 class="text-center">Заміна щіток склоочисників</h1>-->
<!--                </header>-->

<!--                <h3 class="font-weight-bold">Замінювати щітки склоочисників просто, коли знаєш, як. Вам лише необхідно звернути увагу на основні ознаки закінчення терміну експлуатації щіток склоочисників:</h3>-->
<!--                -->
<!--                <div class="row">-->
<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">ПОЯВА СЛІДІВ</h3>-->
<!--                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Img-1_tcm-3046-688586.jpg" alt="ПОЯВА СЛІДІВ">-->
<!--                        <h4><strong>Проблеми, що виникають:</strong></h4>-->
<!--                        <div class="p">На склі з’являються тонкі неочищенні смуги внаслідок появи сторонніх предметів на щітках або зношення гуми.</div>-->
<!--                        <h4><strong>Рішення:</strong></h4>-->
<!--                        <div class="p">Очистіть щітку склоочиника, і якщо ви не побачите ніяких поліпшень, встановіть нові щітки склоочисників.</div>-->
<!--                    </div>-->

<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">ВІБРАЦІЯ ТА ШУМ</h3>-->
<!--                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Img-2_tcm-3046-688587.jpg" alt="ВІБРАЦІЯ ТА ШУМ">-->
<!--                        <h4><strong>Проблеми, що виникають:</strong></h4>-->
<!--                        <div class="p">Щітки рухаються по склу із шумом та вібрацією через наявність на ньому воску або деформації гуми на щітках склоочисника.</div>-->
<!--                        <h4><strong>Рішення:</strong></h4>-->
<!--                        <div class="p">Очистіть щітку склоочиника, і якщо ви не побачите ніяких поліпшень, встановіть нові щітки склоочисників.</div>-->
<!--                    </div>-->

<!--                    <div class="col-md-4 col-12">-->
<!--                        <h3 class="font-weight-bold text-center">РОЗВОДИ/СМУГИ</h3>-->
<!--                        <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Img-3_tcm-3046-688588.jpg" alt="РОЗВОДИ/СМУГИ">-->
<!--                        <h4><strong>Проблеми, що виникають:</strong></h4>-->
<!--                        <div class="p">Після протирання на склі залишаються розводи, через деформацію або зношення важеля щіток склоочисника або гумової мікро-кромки щіток склоочисника.</div>-->
<!--                        <h4><strong>Рішення:</strong></h4>-->
<!--                        <div class="p">Необхідно встановити нові щітки склоочисників.</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </article>-->

<!--        </div>-->


        <div class="video">

            <div class="img_button" @click="openVideo()">
                <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Video_tcm-3046-688589.jpg" alt="Заміна щіток склоочисників">
            </div>

            <div class="open-video" v-if="showVideo">
                <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                <!--                    <iframe width="100%" height="50%" src="https://www.youtube.com/embed/Skn0N-g7Arw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            </div>
        </div>

    </section>
</template>

<script>
    import Sidebar from "../../permanent/Sidebar";
    import MenuToSpareParts from "./../../../components/service/OriginalSpareParts/MenuToSpareParts";
    import PageBody from "../../../mixins/mixinPages"
    export default {
        name: "WiperBlades",

        components: {
            Sidebar,
            MenuToSpareParts
        },

        mixins: [
            PageBody
        ],

        data() {
            return {
                id: 20,
                // showVideo: false,
            }
        },

        metaInfo() {
            return {
                // title:  `Toyota Nikolaev | Оригінальні щітки склоочисників | Toyota Україна`,
                title: `Toyota Nikolaev | ${this.pageTitle}`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        // content: `Toyota Nikolaev | Оригінальні щітки склоочисників | Toyota Україна`
                        content: `Toyota Nikolaev | ${this.pageTitle}`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        // content: `Під час подорожей для водія, зосередженого на дорозі, та для пасажира, який насолоджується краєвидами, кристально чисте скло це не розкіш, а невід’ємна необхідність при експлуатації автомобіля.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        // content: `Під час подорожей для водія, зосередженого на дорозі, та для пасажира, який насолоджується краєвидами, кристально чисте скло це не розкіш, а невід’ємна необхідність при експлуатації автомобіля.`
                        content: this.meta_description,
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
//                         content: `Toyota Nikolaev, тойота, автомобілі Тойота, тойота Україна, toyota Україна, придбати тойота, придбати toyota, toyota ціни, тойота ціни, ціна на тойота, ціна на toyota, модельний ряд тойота, тойота всі моделі, машина тойота, машини тойота, дилери тойота, дилери toyota, офіційний сайт тойота, офіційний сайт toyota, чисте скло, склоочисник, переваги, щітки, щітки склоочисника, оригінал, високоякісна гума, стійкість до пошкоджень, якість, корозія, довготривала експлуатація,тойота, автомобили Тойота, тойота украина, toyota украина, купить тойота, купить toyota, toyota цены, тойота цены, цена на тойота, цена на toyota, модельный ряд тойота, тойота все модели, машина тойота, машины тойота, дилеры тойота, дилеры toyota, официальный сайт тойота, официальный сайт toyota, чистое стекло, стеклоочиститель, преимущества, щетки, щетки стеклоочистителя, оригинал, высококачественная резина, устойчивость к повреждениям, качество, коррозия, длительная эксплуатация, Genuine Parts, Genuine Accessories`
                        content: this.meta_keywords,
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
//                         content: `Toyota Nikolaev, тойота, автомобілі Тойота, тойота Україна, toyota Україна, придбати тойота, придбати toyota, toyota ціни, тойота ціни, ціна на тойота, ціна на toyota, модельний ряд тойота, тойота всі моделі, машина тойота, машини тойота, дилери тойота, дилери toyota, офіційний сайт тойота, офіційний сайт toyota, чисте скло, склоочисник, переваги, щітки, щітки склоочисника, оригінал, високоякісна гума, стійкість до пошкоджень, якість, корозія, довготривала експлуатація,тойота, автомобили Тойота, тойота украина, toyota украина, купить тойота, купить toyota, toyota цены, тойота цены, цена на тойота, цена на toyota, модельный ряд тойота, тойота все модели, машина тойота, машины тойота, дилеры тойота, дилеры toyota, официальный сайт тойота, официальный сайт toyota, чистое стекло, стеклоочиститель, преимущества, щетки, щетки стеклоочистителя, оригинал, высококачественная резина, устойчивость к повреждениям, качество, коррозия, длительная эксплуатация, Genuine Parts, Genuine Accessories`
                        content: this.meta_keywords,
                    },
                ],
            }
        },

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        // },
        //
        // methods: {
        //     openVideo() {
        //         this.showVideo = !this.showVideo;
        //         console.log(this.showVideo);
        //     },
        // }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        padding: 0;
        margin: 0;
    }


    section.container-fluid ::v-deep div {
        /*padding: 0;*/
        /*margin: 0;*/

        header {
            @include header-xl;
            height: 420px;
            /*width: 100%;*/
            padding-top: 100px;
            background-image: url(//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/Header_tcm-11-688578_tcm-3046-688578.jpg);
            /*background-repeat: no-repeat;*/
            /*background-position: center center;*/
            /*-webkit-background-size: cover;*/
            /*background-size: cover;*/
            color: #ffffff;

            h1 {
                text-align: center;
                /*font-size: 5.4rem;*/
                /*font-weight: bolder;*/
                /*text-align: left;*/
            }

            h2 {
                text-align: center;
                /*font-size: 3.4rem;*/
                /*margin-top: 16px;*/
            }
        }

        .body.container {
            color: $font_color;

            .p {
                font-size: 2.2rem;
                margin: 68px 0;
            }
            h3 {
                font-size: 1.8rem;
            }

            .row {
                margin: 68px 0;
                article {
                    img {
                        width: 100%;
                    }
                    h4 {
                        font-size: 1.6rem;
                        color: #000000;
                        margin-bottom: 24px;
                        margin-top: 15px;
                    }
                    .p {
                        font-size: 1.5rem;
                        margin: 20px 0;
                    }

                }
            }

            article {
                header {
                    background: none;
                    padding: 0;
                    height: auto;
                    margin-bottom: 68px;
                    h1 {
                        color: $font_color;
                        font-size: 4.4rem;
                    }
                }

                h3 {
                    font-size: 1.8rem;
                    margin-bottom: 24px;
                }
                img {
                    width: 100%;
                    margin-bottom: 20px;
                }

                .p {
                    font-size: 1.5rem;
                    margin: 20px 0;
                }

                .row {
                    padding: 0;
                    margin: 68px 0;
                    div {
                    }
                }
            }
        }
    }

    .video {
        margin: 20px 0;
        padding: 0;
        .img_button {
            width: 100%;
            img {
                width: 100%;
                height: auto;
            }
        }
        .open-video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            height: 100vh;
            background-color: #fff;
            .close {
                width: 100%;
                padding: 10px 20px;
                background-color: #000000;
                color: #f0f0f0;
                font-size: 2rem;
                opacity: 1;
            }
            iframe {
                width: 100%;
                height: calc(100% - 40px);
            }
        }
    }

    @media (max-width: 767.9px) {
        section.container-fluid ::v-deep div {

            header {
                @include header-sm;
                /*min-height: 180px;*/
                max-height: 420px;
                /*height: 56vw;*/
                padding-top: 20px;

                h1 {
                    font-size: 3rem;
                }
                /*h2 {*/
                /*    font-size: 2.5rem;*/
                /*}*/
            }

            .body.container {

                .p {
                    font-size: 2rem;
                    margin: 30px 0;
                }
                h3 {
                    font-size: 1.8rem;
                }

                .row {
                    margin: 30px 0;
                    article {
                        margin-bottom: 40px;
                        h4 {
                            margin-top: 0;
                        }
                        .p {
                            font-size: 1.5rem;
                            margin: 10px 0;
                        }

                    }
                }

                article {
                    header {
                        margin-bottom: 30px;
                        height: auto;
                        min-height: auto;
                        h1 {
                            color: $font_color;
                            font-size: 3rem;
                        }
                    }

                    h3 {
                        margin-bottom: 15px;
                    }
                    img {
                        margin-bottom: 10px;
                    }

                    .p {
                        margin: 10px 0;
                    }

                    .row {
                        margin: 30px 0;
                        div {
                            margin: 20px 0;
                        }
                    }

                }

            }
        }
    }



</style>