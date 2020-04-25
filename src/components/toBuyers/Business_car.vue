<template>
    <section>
        <header class="container-fluid">
            <h1>Користувачам службових автомобілів</h1>
        </header>
        
        <div class="body container">
            <p>З Toyota BusinessPlus вибір службового авто став простішим. Якість авто гарантує йому надійність та легкість в користуванні. Наші консультанти завжди готові надати Вам персональну консультацію чи пропозицію на шляху до прийняття важливих рішень.</p>
            <h2>Причини працювати з Toyota BusinessPlus</h2>
            <img src="https://collection.toyota.ua/toyota-bp.jpg" alt="collection.toyota.ua">
            
            <ul class="row text-left p-0">
                <li class="col-md-6 col-12 px-5">
                    <h3>Переваги для Вашого бізнесу</h3>
                    <p>Низька вартість володіння завдяки надійним двигунам та комплектуючим деталям, висока залишкова вартість, невеликі витрати на утримання автомобіля.</p>
                </li>
                <li class="col-md-6 col-12 px-5">
                    <h3>Якість Toyota</h3>
                    <p>Загальновідомі характеристики Toyota: якість, надійність та довговічність.</p>
                </li>
                <li class="col-md-6 col-12 px-5">
                    <h3>Наш гібридний модельний ряд</h3>
                    <p>Світовий лідер з виробництва гібридних автомобілів з наймешним рівнем викидів.</p>
                </li>
                <li class="col-md-6 col-12 px-5">
                    <h3>Дилерська мережа</h3>
                    <p>Завдяки використанню оригінальних запасних частин, якісному сервісному обслуговуванню та унікальному досвіду дилерська мережа надовго збереже належний технічний стан Вашого автомобіля.</p>
                </li>
                <li class="col-md-6 col-12 px-5">
                    <h3>Модельний ряд, що стане вам у нагоді</h3>
                    <p>Модельний ряд з пасажирських та комерційних автомобілей, оснащених ефективними гібридними, бензиновими та дизельними двигунами.</p>
                </li>
                <li class="col-md-6 col-12 px-5">
                    <h3>Додадкові вигоди</h3>
                    <p>Якість Toyota, наш гібридний модельний ряд разом забезпечують Вас всім необхідним для отримання максимальної вигоди</p>
                </li>
            </ul>

            <div class="wrap text-left mb-5">
                <button class="btn btn-danger">Офіційні дилери</button>
            </div>

        </div>

        <fragnet-lineup></fragnet-lineup>
    </section>
</template>

<script>
    import FragnetLineup from "../toBuyers/FragnetLineup";

    export default {
        name: "Business_car",

        components: {
            FragnetLineup,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section {
        header.container-fluid {
            background-image: url('//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/business-customers-company-car-1600x900_tcm-3046-663239.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            height: 80vh;
            padding: 95px 0;
            h1 {
                font-size: 5.2rem;
                color: #ffffff;
                font-weight: bolder;
            }
        }

        .body.container {
            margin-top: 68px;
            color: $font_color;
            p {
                font-size: 2rem;
                margin-bottom: 68px;
            }
            h2 {
                font-size: 4.4rem;
                font-weight: bolder;
                margin-bottom: 40px;
            }
            img {
                width: 100%;
                height: auto;
                margin-bottom: 40px;
            }

            ul {
                list-style-type: none;
                li {
                    margin: 68px 0;
                    h3 {
                        font-size: 1.8rem;
                        margin-bottom: 24px;
                        font-weight: bold;
                    }
                    p {
                        font-size: 1.6rem;
                        color: #595D60;
                        margin-bottom: 0;
                    }
                }
            }


            button.btn.btn-danger {
                @include button;
                background-color: #E50000;
                width: auto;
                margin: 0;

            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section {
            header.container-fluid {
                height: 80vh;
                max-height: 60vw;
                h1 {
                    font-size: 5.0rem;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section {
            header.container-fluid {
                min-height: 180px;
                height: 56vh;
                max-height: 480px;
                h1 {
                    font-size: 3.4rem;
                }
            }

            .body.container {
                margin-top: 30px;
                p {
                    font-size: 2rem;
                    margin-bottom: 30px;
                }
                h2 {
                    font-size: 3.5rem;
                    margin-bottom: 30px;
                }

                ul {
                    li {
                        margin: 0 0 24px;
                        h3 {
                            font-size: 1.6rem;
                            margin-bottom: 12px;
                        }
                        p {
                            font-size: 1.6rem;
                            color: #595D60;
                            margin-bottom: 0;
                        }
                    }
                }

            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section {
            header.container-fluid {
                min-height: 180px;
                height: 56vw;
                max-height: 480px;
                padding: 20px 0;
                h1 {
                    font-size: 3.4rem;
                }
            }

            .body.container {
                margin-top: 30px;
                p {
                    font-size: 2rem;
                    margin-bottom: 30px;
                }
                h2 {
                    font-size: 3.5rem;
                    margin-bottom: 30px;
                }

                ul {
                    li {
                        margin: 0 0 24px;
                        h3 {
                            font-size: 1.6rem;
                            margin-bottom: 12px;
                        }
                        p {
                            font-size: 1.6rem;
                            color: #595D60;
                            margin-bottom: 0;
                        }
                    }
                }

                button.btn.btn-danger {
                    width: 100%;
                }

            }
        }
    }

    @media (max-width: 575.9px) {
        section {
            header.container-fluid {
                min-height: 180px;
                height: 56vw;
                max-height: 480px;
                padding: 20px 0;
                h1 {
                    font-size: 7vw;
                }
            }

            .body.container {
                margin-top: 30px;
                p {
                    font-size: 1.8rem;
                    margin-bottom: 30px;
                }
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                }

                ul {
                    li {
                        margin: 0 0 24px;
                        h3 {
                            font-size: 1.6rem;
                            margin-bottom: 12px;
                        }
                        p {
                            font-size: 1.6rem;
                            color: #595D60;
                            margin-bottom: 0;
                        }
                    }
                }

                button.btn.btn-danger {
                    width: 100%;
                }

            }
        }
    }

</style>
