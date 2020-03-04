<template>
    <section>

            <div class="container">
                <div class="row">
                    <header class="col-md-3 col-sm-12">
                            <div class="row">
                                <div class="col-md-12 col-sm-9">
                                    <h2 class="">{{car.model}}</h2>
                                    <h3 class="">{{car.equipment}}
                                        <span class="">{{car.bodyType}}</span>
                                    </h3>
                                </div>
                                <div class="col-md-12 col-sm-3">
                                <a href="#" class="">
                                    <i class="fas fa-sync-alt"></i>
                                    <span>Змінити комплектацію</span>
                                </a>
                            </div>
                            </div>

                        </header>
                    <div class="col-md-5 col-sm-6">
                            <img :src="car.bigPhoto">
                        </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="">
                            <h5 class="">Стандартное оборудование</h5>
                            <ul class="">
                                <li v-for="(equip, key) in car.equipment.standart"
                                    :key="key"
                                >{{equip}}</li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-grey btn-small">
                            <span>Показать стандартное оборудование</span>
                        </button>
                    </div>
                </div>
            </div>

    </section>
</template>

<script>
    export default {
        name: "SelectedEngine"
    }
</script>

<style scoped>

</style>