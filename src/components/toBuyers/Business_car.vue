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
                <li class="col-6 px-5">
                    <h3>Переваги для Вашого бізнесу</h3>
                    <p>Низька вартість володіння завдяки надійним двигунам та комплектуючим деталям, висока залишкова вартість, невеликі витрати на утримання автомобіля.</p>
                </li>
                <li class="col-6 px-5">
                    <h3>Якість Toyota</h3>
                    <p>Загальновідомі характеристики Toyota: якість, надійність та довговічність.</p>
                </li>
                <li class="col-6 px-5">
                    <h3>Наш гібридний модельний ряд</h3>
                    <p>Світовий лідер з виробництва гібридних автомобілів з наймешним рівнем викидів.</p>
                </li>
                <li class="col-6 px-5">
                    <h3>Дилерська мережа</h3>
                    <p>Завдяки використанню оригінальних запасних частин, якісному сервісному обслуговуванню та унікальному досвіду дилерська мережа надовго збереже належний технічний стан Вашого автомобіля.</p>
                </li>
                <li class="col-6 px-5">
                    <h3>Модельний ряд, що стане вам у нагоді</h3>
                    <p>Модельний ряд з пасажирських та комерційних автомобілей, оснащених ефективними гібридними, бензиновими та дизельними двигунами.</p>
                </li>
                <li class="col-6 px-5">
                    <h3>Додадкові вигоди</h3>
                    <p>Якість Toyota, наш гібридний модельний ряд разом забезпечують Вас всім необхідним для отримання максимальної вигоди</p>
                </li>
            </ul>

            <button class="btn btn-danger">Офіційні дилери</button>
        </div>


    </section>
</template>

<script>
    export default {
        name: "Business_car"
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
            padding: 50px 0;
            h1 {
                font-size: 5.2rem;
                color: #ffffff;
                font-weight: bolder;
            }
        }
    }

</style>
