<template>
    <div class="interior container">
        <div class="row">
            <div class="materialName col-4 font-weight-bold text-left">
                {{interior.materialName}}
            </div>

            <ul class="sampleOfInterior col-8 text-left">
                <li class="sample" v-for="(inter, key) in interiors" :key="key">
                    <img :src="inter.image" :alt="inter.materialName">

                    <div class="check text-center" v-if="interior.selected">
                        <i class="fas fa-check"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Interior",

        data() {
            return {
                mod_id: null,
                interiors: [],
                interior: {},
            }
        },

        created() {
            this.mod_id = localStorage.mod_id;
            this.getInterior();
        },

        methods: {
            getInterior() { //ЗАГЛУШКА
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_'
                )
                .then(

                )
                .catch( () => {
                    this.interior = {
                        materialName: "Чорна тканина (FA20)",
                        image: '//t1-carassets.toyota-europe.com/25e31065-9cdc-4699-bf7d-e92d3d22bd0b.PNG',
                        selected: true,
                    };
                    this.interiors.push(this.interior);
                    localStorage.interior = this.interior;
                    console.log(this.interior);
                } );
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .interior.container {
        background-color: #fff;
        padding: 30px;
        div.row {
            .materialName {
                font-size: 1.5rem;
            }
            ul.sampleOfInterior{
                list-style-type: none;
                padding: 0;
                li.sample {
                    display: inline-block;
                    padding: 10px;
                    position: relative;
                    cursor: pointer;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 2px solid #cccccc;
                    }
                    .check {
                        color: red;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                        background-color: #fff;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                    }

                }
            }
        }
    }

</style>