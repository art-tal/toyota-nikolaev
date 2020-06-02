<template>
    <div class="interior container">
        <div class="row">
            <div class="materialName col-md-4 col-12 font-weight-bold text-left">
                {{selectedInterior.interior_name}}
<!--                ({{selectedInterior.interior_code}})-->
            </div>

            <ul class="sampleOfInterior col-md-8 col-12 text-left">
                <li class="sample" v-for="(inter, key) in interiors"
                    :key="key"
                    @click="setInterior(inter, key)"
                >
                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + inter.interior_image" alt="img">

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
    // import {eventEmitter} from "@/app";//        for Laravel

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

        mounted() {
            this.$store.state.showInterior = true;
            console.log('showInterior = ' + this.$store.state.showInterior);
        },
        beforeDestroy() {
            this.$store.state.showInterior = false;
            console.log('showInterior = ' + this.$store.state.showInterior);
        },

        methods: {
            getInteriors() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/mod_interior',
                {params: {id: this.mod_id}}
                )
                .then( (response) => {
                    this.interiors = response.data;
                    this.checkInterior();
                    console.log(this.interiors);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки интерьера");
                    console.log(error);
                } );
            },

            checkInterior() {
                try {
                    let interior = JSON.parse( localStorage.interior );
                    this.interiors.forEach( (inter, index) => {
                        if (inter.interior_id === interior.interior_id ) {
                            console.log(index);
                            this.setInterior(inter, index);
                            console.log(this.selectedInterior, index);
                            // return true;
                        }
                    } );
                }
                catch (e) {
                    console.log("localStorage interior is empty");
                    localStorage.interior = '';
                }
                if(!localStorage.interior) {
                    this.setInterior(this.interiors[0], 0);
                }

            },

            setInterior(interior, key) {
                // this.interiors.forEach( interior => {this.$set(interior, "checked", false)} );
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