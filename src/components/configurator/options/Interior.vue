<template>
    <div class="interior container">
        <div class="row">
            <div class="materialName col-md-4 col-12 font-weight-bold text-left">
                {{selectedInterior.material_name}} ({{selectedInterior.material_code}})
            </div>

            <ul class="sampleOfInterior col-md-8 col-12 text-left">
                <li class="sample" v-for="(inter, key) in interiors"
                    :key="key"
                    @click="setInterior(inter, key)"
                >
                    <img :src="inter.image" :alt="inter.material_name">

                    <div class="check text-center" v-if="inter.checked">
                        <i class="fas fa-check"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    // import {eventEmitter} from "@/main";
    export default {
        name: "Interior",

        data() {
            return {
                mod_id: null,
                interiors: [],
                selectedInterior: {},
            }
        },

        created() {
            this.mod_id = localStorage.mod_id;
            this.getInteriors();
        },

        methods: {
            getInteriors() { //ЗАГЛУШКА
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_'
                )
                .then(

                )
                .catch( () => {
                    this.interiors = [
                        {
                        material_name: "Чорная ткань",
                        material_code: "FA20",
                        image: '//t1-carassets.toyota-europe.com/25e31065-9cdc-4699-bf7d-e92d3d22bd0b.PNG',
                        checked: true,
                    }
                    ];
                    this.selectedInterior = this.interiors[0];
                    localStorage.interior = JSON.stringify( this.selectedInterior );
                    this.$store.state.interior = this.selectedInterior;
                    console.log(this.interior);
                } );
            },

            setInterior(interior, key) {
                this.interiorChecker(key);
                this.selectedInterior = interior;
                this.$store.state.interior = interior;
                localStorage.interior = JSON.stringify( this.selectedInterior );
            },

            interiorChecker(key) {
                this.interiors.forEach( (i) => {i.checked = false} );
                this.interiors[key].checked = true;
            },
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