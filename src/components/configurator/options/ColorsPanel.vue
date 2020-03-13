<template>
    <div class="colors container">
        <article>ColorsPanel</article>
        <div class="row">COLORS
                        <div class="colorName col-4 font-weight-bold text-left">
                            {{selectedColor.color_name}} ({{selectedColor.color_code}})
                        </div>
                        <ul class="sampleOfColor col-8 text-left">
                            <li v-for="(color, key) in colors"
                                :key="key"
                                class="sample"
                                @click="setColor(color)"
                            >
                                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"
                                         :alt="color.color_name">
                                    <div class="check text-center" v-if="color.selected">
                                        <i class="fas fa-check"></i>
                                    </div>
                            </li>

                        </ul>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import {eventEmitter} from "@/main";

    export default {
        name: "ColorsPanel",

        props: ['mod_id'],

        data() {
            return {
                colors: [],
                selectedColor: {},//colors[0],
            }
        },

        created() {
            this.getColors();
            this.selectedColor = this.colors[0];
        },

        watch: {
            mod_id() {
                // console.log(this.mod_id);
                this.getColors();
                return this.mod_id;
            },
        },

        methods: {
            getColors() {
              console.log(this.mod_id);
              axios.get(
                  // `lara.toyota.nikolaev.ua/ajax/mod_color`,
                  `lara.toyota.nikolaev.ua/ajax/mod_color?id=33`,
                  // {id: 33},//this.mod_id
              )
              .then( (response) => {
                  this.colors = response.data;
                  console.log(this.colors);
              } )
              .catch( (error) => {
                  console.log("Ошибка, не возможно загрузить доступные цвета");
                  console.log(error);
              } )
          },

            setColor(color) {
                eventEmitter.$emit('selectedColor', color.rgb);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .colors {
        background-color: #fff;
        padding: 15px;
        div.row {
            .colorName {
                font-size: 1.5rem;

            }
            ul.sampleOfColor {
                list-style-type: none;
                padding: 0;
                li.sample {
                    display: inline-block;
                    padding: 15px;
                    position: relative;
                    padding: 15px;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    .check {
                        color: red;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                        background-color: #fff;
                        position: absolute;
                        top: 15px;
                        left: 15px;
                    }

                }
            }
        }
    }

</style>