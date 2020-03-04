<template>
    <section class="configurator">
        <header class="container">
            <div class="row justify-content-center">
                <a href="#" class="col-4 align-self-center active">
                    <b class="font-weight-bold">1</b>
                    <span>Комплектация и двигатель</span>
                </a>
                <a href="#" class="col-3 align-self-center">
                    <b class="font-weight-bold">2</b>
                    <span>Цвет и коплектация</span
                    ></a>
                <a href="#" class="col-2 align-self-center">
                <b class="font-weight-bold">3</b>
                <span>Итог</span>
            </a>
            </div>
        </header>
    </section>
</template>

<script>
    export default {
        name: "ConfiguratorOfEngine"
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .configurator {
        width: 100%;
        height: 56px;
        border-bottom: $border;
            header {
                color: $font_color;
                height: 100%;
                div.row {
                    height: 100%;
                    a {
                        height: 100%;
                        padding: 14px 25px 16px;
                        display: inline-block;
                        color: $font_color;
                        vertical-align: middle;
                        b {
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background-color: #ccc;
                            display: inline-block;
                            margin-right: 10px;
                        }
                    }
                }

            }


    }
</style>