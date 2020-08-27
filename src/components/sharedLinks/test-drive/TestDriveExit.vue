<template>
    <section>
        <header>
            <h1>Дякуємо!</h1>
        </header>
        <div class="body">
            <h2>Ваш запит вшдправлено. Незабаром з вами зв'яжеться представник Тойота Центр Миколаїв «КиТ-Т»</h2>
            <div class="row">
                <div class="col-md-6 col-12">
                    <img :src="getTestDrive.photo" alt="car">
                </div>

                <div class="col-md-6 col-12">
                    <article class="row">
                        <div class="col-1">
                            <i class="fas fa-car"></i>
                        </div>
                        <div class="col-11">
                            <h3>Оберіть модель та двигун</h3>
                            <p>{{getTestDrive.model}}, {{getTestDrive.engineType}}</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TestDriveExit",

        computed: {
            getTestDrive() {
                return this.$store.getters.getTestDrive;
            },
        },
    }
</script>

<style scoped>

</style>