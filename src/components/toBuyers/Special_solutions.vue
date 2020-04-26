<template>
    <main class="container-fluid">
        <header>
            <h1 class="container text-left">Спеціальні фінансові рішення</h1>
        </header>


    </main>
</template>

<script>
    export default {
        name: "Special_solutions"
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