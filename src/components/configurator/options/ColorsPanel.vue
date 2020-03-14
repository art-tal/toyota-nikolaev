<template>
    <div class="carColors container navbar navbar-expand-lg">
        <div class="col row collapse navbar-collapse" id="navbarNav">

                        <ul class="sampleOfColor col-8 navbar-nav text-left">
                            <li v-for="(color, key) in colors"
                                :key="key"
                                class="nav-item sample"
                                @click="setColor(color, key)"
                            >

                                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"
                                         :alt="color.color_name"
                                         :title="color.color_name + ' (' + color.color_code + ')'"
                                    >
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
    // import {eventEmitter} from "@/main";

    export default {
        name: "ColorsPanel",

        data() {
            return {
                mod_id: 0,
                colors: [],
                selectedColor: {},
            }
        },

        created() {
            this.mod_id = this.$store.state.equipment.mod_id;
            this.getColors();
                // eventEmitter.$emit('selectedColor', this.colors[0]);
        },

        computed: {

        },

        watch: {
            mod_id() {
                this.getColors();
                return this.mod_id;
            },
        },

        methods: {
            getColors() {
              // console.log(this.mod_id);
              axios.get(
                  // `lara.toyota.nikolaev.ua/ajax/mod_color`,
                  `http://lara.toyota.nikolaev.ua/ajax/mod_color?id=33`,//${this.mod_id}
                  // {id: 33},//this.mod_id
              )
              .then( (response) => {
                  this.colors = response.data;
                  this.colors.forEach( (c) => { c.selected = false;} );
                  this.selectedColor = this.colors[1];
                  this.selectedColor.selected = true;
                  this.$store.state.color = this.selectedColor;
                      // console.log(this.selectedColor);
                  // eventEmitter.$emit('selectedColor', this.selectedColor.rgb);
              } )
              .catch( (error) => {
                  console.log("Ошибка, не возможно загрузить доступные цвета");
                  console.log(error);
              } )
          },

            // getColorImege(image) {
            //     return this.$store.commit('colorImage', image);
            // },


            setColor(color, key) {
                // eventEmitter.$emit('selectedColor', color);
                this.$store.state.color = color;
                this.colors.forEach( (c) => { c.selected = false;} )
                this.colors[key].selected = true;
                console.log(key);
            },


        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .carColors {
        /*background-color: #fff;*/
        padding: 5px;
        /*filter: brightness(50%);*/
        div.row {
            ul.sampleOfColor {
                list-style-type: none;
                padding: 0;
                display: flex;
                li.sample {
                    /*display: inline-block;*/
                    padding: 5px;
                    position: relative;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 2px solid #cccccc;
                        &:hover,
                        &.active {
                            box-shadow: 0 0 5px 2px #eeeeee;
                            transform: scale(1.1);
                            transition: all 500ms;
                        }
                    }
                    .check {
                        color: red;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                        background-color: #fff;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                    }

                }
            }
        }
    }

</style>