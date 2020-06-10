<template>
    <div class="successful_msg">
        <h4>Заявка успішно відправлено</h4>
    </div>
</template>

<script>
    export default {
        name: "Successful"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .successful_msg {
        position: fixed;
        top: 30%;
        left: calc(50% - 300px);
        width: auto;

        h4 {
            text-align: center;
            width: 600px;
            padding: 25px;
            font-size: 2.2rem;
            color: $font_color;
            background-color: #fff;
            border-radius: 15px;
            box-shadow:  0 0 12px 2px #6CD136;
        }

    }

</style>