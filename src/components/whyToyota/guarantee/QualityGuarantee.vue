<template>
    <main>
        <guarantee-menu></guarantee-menu>

        <header class="container-fluid">
            <h1 class="container text-center">Гарантія якості
                <h2 class="text-center">Продукції Toyota</h2>
            </h1>
        </header>
        
        <div class="body container">

            <blockquote>
                <h4>
                    Я хочу, щоб з цього моменту ми об’єднали свої зусилля та знайшли спосіб створювати автомобілі найвищої якості.
                </h4>
                <cite>Киічіро Тойода, засновник «Тойота Мотор Корпорейшн»</cite>
                <div class="date">Травень 1939 р.</div>
            </blockquote>

            <h3>Нема меж досконалості.</h3>
            <p>Саме тому ми постійно прагнемо покращувати все, що робимо. І це не гасло, і не пафосна заява, що висить на стіні, забута усіма. Просто ми так чинимо. У нас для цього є особливе слово — «кайдзен», що означає «безперервне вдосконалення». Це поняття є основоположним принципом, яким ми керуємося, щоб досягти абсолютної якості.</p>

            <p>Така прихильність до якості приносить відчутні плоди — плоди, що покращують якість вашого життя. Про це говорять дані незалежних опитувань з вивчення рівня задоволеності клієнтів, в яких ви знову і знову віддаєте свої переваги «Тойоті». Крім того, це видно з блискучих результатів, що їх демонструють автомобілі марки Toyota у випробуваннях, які проводить Європейський інститут оцінювання безпеки нових автомобілів (<a href="https://www.euroncap.com/ru">Euro NCAP</a>).</p>

            <p>Але найбільше нам про це відомо тому, що ми спеціально займаємося вивченням побажань наших клієнтів, щоб надати їм можливість отримати справжню насолоду від володіння автомобілями марки Toyota, починаючи з моменту їх придбання і аж до моменту їхнього подальшого продажу.</p>

            <p>Особисто для вас це означає, що щоразу, сідаючи в крісло водія автомобіля марки Toyota і запускаючи двигун, ви почуватиметеся цілковито впевненими, знаючи, що автомобіль, за кермом якого ви сидите, спроектовано і виготовлено відповідно до найвищих нормативів контролю якості та надійності. Для компанії «Тойота» якість — це не обіцянка, а стиль життя!</p>

        </div>
    </main>
</template>

<script>
    import GuaranteeMenu from "./../../../components/whyToyota/guarantee/GuaranteeMenu";

    export default {
        name: "QualityGuarantee",

        components: {
            GuaranteeMenu
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }
    
    main {
        header.container-fluid {
            @include header-xl;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/quality-header_tcm-3046-164060.jpg);
            color: #ffffff;
        }

        .body.container {
            margin: 68px auto;
            color: $font_color;
            text-align: left;
            blockquote {
                font-size: 1.4rem;
                margin-bottom: 68px;
                h4 {
                    font-size: 2.5rem;
                    &::before {
                        content: "\201C";
                        display: block;
                        text-align: left;
                        font-size: 4rem;
                        height: 30px;
                    }
                    &::after {
                        content: "\201D";
                        display: block;
                        text-align: right;
                        font-size: 4rem;
                        height: 30px;
                    }
                }
                cite {
                    margin: 24px 0;
                }
                .date {
                    margin: 24px 0;
                }
            }

            h3 {
                font-size: 1.8rem;
                font-weight: bold;
                margin-bottom: 24px;
            }
            p {
                font-size: 1.5rem;
                color: #595D60;
                margin-bottom: 24px;
                a {
                    color: $font_color;
                    text-decoration: underline;
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
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header.container-fluid {
                @include header-sm;
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header.container-fluid {
                @include header-xs;
            }

            .body.container {
                margin: 30px auto;
                padding: 0 15px;
                blockquote {
                    font-size: 1.4rem;
                    margin-bottom: 30px;
                    h4 {
                        font-size: 1.8rem;
                        &::before {
                            content: "\201C";
                            display: block;
                            text-align: left;
                            font-size: 4rem;
                            height: 30px;
                        }
                        &::after {
                            content: "\201D";
                            display: block;
                            text-align: right;
                            font-size: 4rem;
                            height: 30px;
                        }
                    }
                }
            }
        }
    }

</style>