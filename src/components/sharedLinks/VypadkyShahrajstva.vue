<template>
    <main>
        <header class="container-fluid">
            <h1 class="text-center">Шановні клієнти
                <h2 class="text-center">Перевіряйте інформацію щодо розіграшу авто</h2>
            </h1>
        </header>
        
        <div class="body container text-left">
            <h3>У зв`язку з тим, що кількість випадків шахрайства за допомогою смс розсилок та мережі Інтернет постійно зростає, просимо Вас бути пильними та уважними.</h3>

            <h3>Ще раз підтверджуємо, що вся інформація, в тому числі і про акційні пропозиції, опублікована на сайтах:</h3>

            <ul>
                <li><a href="http://www.ukr-autocenter.com/" target="_blank">http://www.ukr-autocenter.com/</a></li>
                <li><a href="http://www.ukr-autoclub.com/" target="_blank">http://www.ukr-autoclub.com/</a></li>
                <li><a href="http://www.dealer-toyota.com.ua/" target="_blank">http://www.dealer-toyota.com.ua/</a></li>
                <li><a href="http://www.toyota-delivery.com.ua/" target="_blank">http://www.toyota-delivery.com.ua/</a></li>
                <li><a href="http://www.toyota-drive.com.ua/" target="_blank">http://www.toyota-drive.com.ua/</a></li>
                <li><a href="http://www.toyota-desire.com.ua/" target="_blank">http://www.toyota-desire.com.ua/</a></li>
                <li><a href="http://www.toyota-samid.com.ua" target="_blank">http://www.toyota-samid.com.ua</a></li>
            </ul>

                <h3>не має ніякого відношення до ПІІ «Тойота-Україна» або уповноважених дилерів Toyota в Україні.</h3>

                <p>У разі отримання будь-якого смс, в якому Вам пропонують перерахувати кошти або надіслати Ваші персональні дані з метою приймання участі в розіграші або будь-яких інших заходах, в яких фігурує бренд Toyotа, радимо Вам:       - перевірити інформацію про акції та маркетингові заходи офіційної дилерської мережі Toyota в Україні на сайті
                    <a href="https://www.toyota.ua/" target="_blank">www.toyota.ua</a>, а також на сайтах офіційних дилерів Toyota в Україні у разі, якщо ви постраждали від дій шахраїв, безвідкладно звертайтесь до відділу поліції.</p>

                <h3>Також хочемо звернути Вашу увагу на те, що:
                </h3>

                <ul>
                    <li>інформація про всі дилерські центри Toyota в Україні міститься на сайті за посиланням</li>
                    <li>всі дилерські центри Toyota в Україні мають стаціонарний номер телефону, перевіряти необхідно саме за ним, а не за мобільними номерами </li>
                    <li>якщо ви свідомо не брали участі у конкурсі чи опитуванні, де пропонувався автомобіль в якості приза, виграш автомобіля є підозрілим </li>
                    <li>вимоги або пропозиції негайно/протягом декількох годин переказати гроші на рахунки невідомих осіб без належно оформлених платіжних документів є підозрілими</li>
                </ul>

        </div>
    </main>
</template>

<script>
    export default {
        name: "VypadkyShahrajstva",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Звертаємо Вашу увагу на випадки шахрайства!`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Звертаємо Вашу увагу на випадки шахрайства!`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Шановні клієнти Toyota! Кількість випадків шахрайства за допомогою смс та Інтернет постійно зростає, тому просимо Вас бути пильними та уважними.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Шановні клієнти Toyota! Кількість випадків шахрайства за допомогою смс та Інтернет постійно зростає, тому просимо Вас бути пильними та уважними.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, клієнти,Toyota,СМС,розсилка,виграш,корола,Corolla, 5.20 Dealers&#39; news`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, клієнти,Toyota,СМС,розсилка,виграш,корола,Corolla, 5.20 Dealers&#39; news`
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    * {
        margin: 0;
        padding: 0;
    }

    main {
        header.container-fluid {
            @include header-xl;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Header-1600x900_tcm-3046-712523.jpg);
            text-align: center;
            h1 {
                color: $font_color;
            }

        }

        .body.container {
            margin: 68px auto;
            padding: 0 15px;
            color: $font_color;
            h3 {
                font-size: 1.6rem;
                font-weight: bold;
                margin-bottom: 24px;
            }

            ul {
                margin-left: 20px;
                margin-bottom: 40px;
                li {
                    font-size: 1.4rem;
                    margin-bottom: 10px;
                    a {
                        color: #595D60;
                    }
                }
            }

            p {
                font-size: 1.4rem;
                color: #595D60;
                margin-bottom: 24px;
                margin-top: 40px;
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
                h1 {
                    color: #FFFFFF !important;
                }

            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        main {
            header.container-fluid {
                @include header-md;
                h1 {
                    color: #FFFFFF !important;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        main {
            header.container-fluid {
                @include header-sm;
                h1 {
                    color: #FFFFFF !important;
                }
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    margin-bottom: 20px;
                }

                ul {
                    margin-left: 15px;
                    margin-bottom: 20px;
                }

                p {
                    margin-bottom: 15px;
                    margin-top: 20px;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        main {
            header.container-fluid {
                @include header-xs;
                h1 {
                    color: #FFFFFF !important;
                }
            }

            .body.container {
                margin: 30px auto;
                h3 {
                    margin-bottom: 20px;
                }

                ul {
                    margin-left: 15px;
                    margin-bottom: 20px;
                }

                p {
                    margin-bottom: 15px;
                    margin-top: 20px;
                }
            }
        }
    }

</style>