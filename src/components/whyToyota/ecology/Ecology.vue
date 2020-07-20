<template>
    <main>
        <menu-ecology></menu-ecology>
        <header>
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                        style="background-color: rgba(0,0,0,.1);"
                >
                    <router-link
                            tag="div"
                            exact
                            to="/environmental_mission"
                    >
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/new_banner_EC_tcm-3046-617965.jpg" alt="Екологічна місія для кращого майбутнього">
                    </router-link>

                </swiper-slide>

                <swiper-slide>
                    <router-link
                            tag="div"
                            exact
                            to="/better_air"
                    >
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Environment-compressor_tcm-3046-617964.jpg" alt="Краще повітря">
                        <h1 style="color: #202020">Краще повітря
                            <h2>Забезпечення сталої мобільності для всіх</h2>
                        </h1>
                    </router-link>

                </swiper-slide>

                <swiper-slide
                        style="color: #ffffff;"
                >
                    <router-link
                            tag="div"
                            exact
                            to="/best_planet"
                    >
                    <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/Butterfly%201_tcm-3046-617969.jpg" alt="best_planet">
                    <h1>Краща планета
                        <h2>Гармонійне майбутнє для людей, продуктів і планети</h2>
                    </h1>
                    </router-link>
                </swiper-slide>

                <swiper-slide
                        style="color: #ffffff;"
                >
                    <router-link
                            tag="div"
                            exact
                            to="/better_life"
                    >
                    <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/BL_Homepage_Carousel_Picture1-1V2_tcm-3046-617970.jpg" alt="better_life">
                    <h1>Краще життя
                        <h2>Створення майбутнього суспільства в гармонії з природою</h2>
                    </h1>
                    </router-link>
                </swiper-slide>

                <swiper-slide
                        style="color: #202020; background-color: #C4DAEF"
                >
                    <router-link
                            tag="div"
                            exact
                            to="/just_better"
                    >
                    <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame4_tcm-3046-628343.jpg" alt="just_better">
                    <h1>Просто краще
                        <h2>Безпечний, відповідальний та легальний бізнес</h2>
                    </h1>
                    </router-link>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </header>

        <div class="body container text-left">
            <h3>Toyota взяла на себе зобов'язання бути лідерами у захисті та поліпшенні стану довкілля.</h3>

            <p>Ми дбаємо про довкілля, у цьому - сенс нашого існування. Toyota налаштована постійно зменшувати вплив нашого бізнесу на навколишній світ і прагне впроваджувати прогресивні технології, продукти та методи роботи, дружні для довкілля та корисні для суспільства в цілому.</p>
            <p>Toyota вже має багату історію екологічних досягнень - приміром, Toyota стала першою компанією, яка заснувала окремий бізнес з переробки автомобілів, першими облаштували завод, який не відправляє відходів на сміттєзвалище, і першими почали випускати гібридне авто на водневих паливних елементах, яке не спричиняє шкідливих викидів. Toyota вже чимало досягла, але хоче зробити ще більше, надихати інших, встановлюючи перед собою нові, більш амбітні екологічні цілі, аби побудувати краще майбутнє.</p>

            <article>
                <header>
                    <h1>Виклики Toyota щодо навколишнього середовища до 2050 року</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Екологічна місія для кращого майбутнього</h4>
                        <p>Хоча Toyota і пишається своїми інноваційними розробками екологічних технологій, але вважає, що може досягти ще набагато більше. Toyota розробила пакет амбітних завдань, над виконанням яких буде працювати до 2050 року, аби не лише дотримуватися правила нульового впливу на довкілля, а й забезпечити екологічні вигоди.</p>
                        <p>Глобальна мета нашої місії полягає в тому, щоб поліпшити життя, використовуючи нові технології, нові методи роботи та нові підходи до скорочення викидів, збільшення глибини переробки, захисту природних ресурсів та використання екологічно чистих відновлюваних джерел енергії, допомагаючи людям у всьому світі жити та працювати у гармонії з природою.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Section-2_Picture-frame1_tcm-3046-617975.jpg" alt="Екологічна місія для кращого майбутнього">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Краще повітря</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Забезпечення сталої мобільності для всіх</h4>
                        <p>Toyota, як один з провідних світових виробників автомобілів, дуже добре усвідомлює свою відповідальність за стан довкілля. Це усвідомлення має практичні результати, зокрема у вигляді створення транспортних засобів, що мають мінімальний вплив на навколишній природний світ. Це наші провідні світові гібриди, електромобілі та Mirai, перше у світі серійне авто на водневих паливних елементах.</p>
                        <p>Toyota також досліджує альтернативні види палива з відновлюваних джерел та працює з партнерами у напрямку розробки більш екологічно чистих і ефективних інтегрованих транспортних систем.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/better%20air_tcm-3046-617972.jpg" alt="Краще повітря">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Краща планета</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Гармонійне майбутнє для людей, продуктів і планети</h4>
                        <p>Toyota постійно знаходиться у пошуку шляхів зменшення негативного впливу на довкілля. Це стосується не лише транспортних засобів, які ми виробляємо, але й процесу їхнього виготовлення та ресурсів, які в ньому використовуються. Аби забезпечити ощадливе використання природних ресурсів, збільшення корисності наших продуктів та розширення можливостей для переробки та компенсації витраченої енергії ми відштовхуємося від чотирьох головних постулатів, чотирьох рятівних човнів - скорочення, вторинне використання, переробка та відновлення.</p>
                        <p>У всьому світі Toyota нарощує використання низьковуглецевих, поновлюваних джерел енергії, а також створює нові низьковуглецеві матеріали з органічних продуктів.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Butterfly%201_tcm-3046-617973.jpg" alt="Краща планета">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Краще життя</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Суспільство, де люди та природа перебувають у гармонії</h4>
                        <p>Може здатися дивним, що гасло "Повертаючись до природи" проголосила саме автомобільна компанія. Але насправді цей заклик цілком логічний, якщо взяти до уваги наше тверде рішення у своїй діяльності завжди дбати про довкілля. Ми прагнемо здійснити позитивний вплив на суспільство, на планету та її людей, залишаючи стан речей кращим, ніж ми отримали.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/ImageGEN_BetterLiving_555x249_tcm-3046-617976.jpg" alt="Краще життя">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Просто краще</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Безпечний, відповідальний та легальний бізнес</h4>
                        <p>Toyota прагне до захисту та покращення стану довкілля, тому не лише розробляє власні керівні принципи для безпечної і відповідальної діяльності, а також пильнує за дотриманням екологічних стандартів усюди, де працюють виробництва і продаються автомобілі Toyota.</p>
                        <p>Такий підхід передбачає оцінку впливу транспортного засобу на довкілля протягом усього його життєвого циклу, від проектування і виготовлення до використання споживачами й процесу утилізації. Ми також певні, що застосовуємо належні процедури для усунення всіх екологічних ризиків та небезпек.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Section-1_Picture-frame4_tcm-3046-628343.jpg" alt="Просто краще">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Сертифікат</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>ISO 14001 в ПІІ «Тойота-Україна»</h4>
                        <p>Ми цінуємо сертифікат ISO 14001 та запропоновані ним інструменти, які допомагають на шляху до постійного вдосконалення екологічної діяльності. Починаючи з 2013 року ПІІ «Тойота -Україна» щорічно проходить сертифікацію згідно міжнародного стандарту ISO 14001 Система екологічного менеджменту.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/iso-14001_tcm-3046-1427326.jpg" alt="ISO">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Еко-акція</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>«Купив машину? Посади дерево!»</h4>
                        <p>Щороку в Києві проходить еко-акція «Купив машину? Посади дерево!», ініційована ПІІ «Тойота-Україна» спільно з міжнародним благодійним фондом «Україна! Я за тебе!». Активну участь в озелененні міста щороку приймають співробітники ПІІ «Тойота-Україна» та члени їх сімей, також акція підтримується клієнтами та співробітниками Тойота Центр Київ «Сіті Плаза».</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/tree-planting-555x249_tcm-3046-1561735.jpg" alt="Еко-акція">
                    </div>
                </div>
            </article>

            <article>
                <header>
                    <h1>Соціально-екологічна акція</h1>
                </header>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4>Всесвітній день прибирання</h4>
                        <p>Кожного року у вересні відбувається «Всесвітній день прибирання» – світова екологічна акція з прибирання сміття та очищення зелених зон і насаджень від забруднення. Захід активно підтримують співробітники ПІІ «Тойота-Україна» разом зі своїми сім’ями. Працівники дилерських центрів також залюбки долучаються до ініціативи та присвячують свій час очищенню довкілля заради спільної мети – зробити світ чистим.</p>
                    </div>

                    <div class="col-md-6 col-12">
                        <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/World-Clean-up-day_tcm-3046-1771604.png" alt="Соціально-екологічна акція">
                    </div>
                </div>
            </article>

        </div>
    </main>
</template>

<script>
    import MenuEcology from "./../../../components/whyToyota/ecology/MenuEcology";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "Ecology",

        components: {
            MenuEcology,
            Swiper,
            SwiperSlide
        },

        metaInfo() {
            return {
                title:  `Toyota | Турбота про навколишнє середовище`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota | Турбота про навколишнє середовище`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Ми  зобов&#39;язані бути лідером у справі захисту та поліпшення довкілля. Дізнайтеся про екологічні досягнення, якими ми пишаємося, та нашу екологічну місію.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Ми  зобов&#39;язані бути лідером у справі захисту та поліпшення довкілля. Дізнайтеся про екологічні досягнення, якими ми пишаємося, та нашу екологічну місію.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `toyota, екологія, турбота, гібрид, автомобілі, захист, зелені технології, тойота, тайота, Enviroment, Social projects`
                    },
                ],
            }
        },

        data() {
        return {
            swiperOption: {
                spaceBetween: 0,
                slidesPerView: 1,
                centeredSlides: true,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main {
        header {
            width: 100%;
            height: auto;
            padding: 0;
            margin: 0;
            .swiper {
                height: auto;
                width: 100%;

                .swiper-slide {
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-weight: bold;
                    position: relative;
                    /*font-size: $font-size-huge * 2;
                    background-color: $white;*/
                    div {
                        width: 100%;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        h1 {
                            position: absolute;
                            top: 100px;
                            left: 100px;
                            text-align: left;
                            font-size: 5.2rem;
                            font-weight: bold;
                            margin-bottom: 15px;
                            width: auto;
                            h2 {
                                font-size: 3.5rem;
                                font-weight: bold;
                            }
                        }
                    }

                }

                .swiper-button-prev, .swiper-button-next {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: rgba(0,0,0, 0.6);
                    &:after {
                        font-size: 2.0rem;
                        font-weight: 900;
                        color: #f0f0f0;
                        padding: 10px;
                    }
                }

                .swiper-button-prev {
                    left: 50px;
                }
                .swiper-button-next {
                    right: 50px;
                }
            }
        }

        .body.container {
            color: $font_color;
            margin: 68px auto;
            h3 {
                font-size: 3.4rem;
                margin-bottom: 68px;
                text-align: center;
            }
            p {
                font-size: 1.4rem;
                color: #595D60;
                margin-bottom: 30px;
            }

            article {
                margin-top: 68px;
                header {
                    h1 {
                        font-size: 4.4rem;
                        font-weight: bold;
                        margin-bottom: 40px;
                    }
                }
                .row {
                    div {
                        h4 {
                            font-size: 1.6rem;
                            font-weight: bold;
                            margin-bottom: 20px;
                        }
                        img {
                            width: 100%;
                        }
                    }

                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 2.4rem;
                    margin-bottom: 30px;
                }

                article {
                    margin-top: 30px;
                    header {
                        h1 {
                            font-size: 2.2rem;
                            margin-bottom: 20px;
                        }
                    }
                    .row {
                        h4 {
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 767.9px) {
        main {
            header {
                .swiper {
                    .swiper-slide {
                        h1 {
                            top: 5vw;
                            left: 5vw;
                            font-size: 3.5rem;
                            margin-bottom: 15px;
                            h2 {
                                font-size: 2.5rem;
                            }
                        }
                    }
                }
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                }

                article {
                    margin-top: 40px;
                    header {
                        h1 {
                            font-size: 3rem;
                            margin-bottom: 20px;
                        }
                    }
                    .row {
                        div {
                            h4 {
                                font-size: 1.6rem;
                                margin-bottom: 20px;
                            }
                            img {
                                width: 100%;
                            }
                        }

                    }
                }
            }
        }
    }


</style>