<template>
    <main class="container-fluid">
        <header>
            <h1 class="container text-left">Спеціальні фінансові рішення</h1>
        </header>


    </main>
</template>

<script>
    export default {
        name: "Special_solutions",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | `,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | `
                    },
                    // {
                    //     vmid: "description",
                    //     name: "description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "description",
                    //     property: "og:description",
                    //     content: `Добро пожаловать на Toyota Николаев. Узнайте больше о наших новых автомобилях, а также предложения по всем вашим любимым моделям. Обратитесь к нам для получения дополнительной информации.`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     name: "keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                    // {
                    //     vmid: "keywords",
                    //     property: "og:keywords",
                    //     content: `Toyota Nikolaev, Toyota, модельный ряд toyota, домашняя страница, акции, новости, модели, автомобиль, новый автомобиль, мой автомобиль, безопасные автомобили, экологически автомобили, безопасный автомобиль, идеальный автомобиль, семейный автомобиль, городской автомобиль, внедорожник, кроссовер, хэтчбек, модельный ряд toyota, домашняя страница, акции, новости, модели`
                    // },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        padding: 0;
        color: $font_color;
        header {
            height: 80vh;
            width: 100%;
            padding-top: 70px;
            background-image: url('//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/business-customers-finance-1600x900_tcm-3046-663250.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1 {
                font-size: 5.4rem;
                font-weight: bolder;
                color: #ffffff;
            }
        }
    }

</style>