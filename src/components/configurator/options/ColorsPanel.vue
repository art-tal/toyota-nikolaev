<template>
    <div class="carColors">


        <div class="carousel_wrapper d-flex justify-content-between">

            <button id="button-prev" class="btn" @click="prevSlide()">
                <i class="fas fa-chevron-left"></i>
            </button>

            <div class="slide_wrapper">
                <div id="slides" class="slides ">
                    <div class="slide d-inline-block"
                         v-for="(color, key) in colors"
                         :key="key"
                    >

                        <div
                                class="nav-item sample"
                                @click="setColor(color, key)"
                        >

                            <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"
                                 :alt="color.color_name"
                                 :title="color.color_name + ')'"
                            >
                            <div class="check text-center" v-if="color.selected">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <button id="button-next" class="btn" @click="nextSlide()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

    </div>

</template>

<script>
    import axios from 'axios';
    import $ from "jquery";


    export default {
        name: "ColorsPanel",

        data() {
            return {
                mod_id: 0,
                colors: [],
                selectedColor: {},
                x: 0,
                slides: 0,

                mousePress: false,
                mouseX: 0,
                xNow: 0,
            }
        },

        created() {
                this.mod_id = this.$store.getters.equip.mod_id;
        },

        mounted() {
            this.getColors();
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)

        },




        methods: {
            getColors() {
              axios.get(
                  `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                  {params: {id: this.mod_id} },//
              )
              .then( (response) => {
                  this.colors = response.data;
                  this.colors.forEach( (c) => { this.$set(c, "selected", false) } );
                  this.setColor(this.colors[0]);
                  this.slides = $('#slides').width() / 3 * this.colors.length;
              } )
              .catch( (error) => {
                  console.log("Ошибка, не возможно загрузить доступные цвета");
                  console.log(error);
              } )
          },

            setColor(color) {
                this.colors.forEach( (c) => { c.selected = false} );
                console.log(color);
                let index = this.colors.indexOf(color);
                this.colors[index].selected = true;
                this.$store.commit("setColorDefault", color);
                localStorage.color = JSON.stringify( color );
            },

            prevSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.colors.length;
                this.x = this.x - $('.slide_wrapper').width();
                if ( this.x < 0 ) {
                    if(this.colors.length % 3){
                        this.x = this.slides - ( ($('.slide_wrapper').width() / 3) * (this.colors.length % 3));
                    } else {
                        this.x = this.slides - $('.slide_wrapper').width();
                    }

                }
                $('#slides').css("transform", `translateX(-${this.x}px)`);
            },

            nextSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.colors.length;
                this.x = this.x + $('.slide_wrapper').width();
                if ( this.x >= this.slides ) {
                    this.x = 0;
                }
                $('#slides').css("transform", `translateX(-${this.x}px)`);
            },


        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    *{
        margin: 0;
        padding: 0;
    }

    .carColors {
        padding: 0 20px;
        margin: 20px 0;
        overflow: visible !important;

        .carousel_wrapper {
            .slide_wrapper {
                overflow: hidden;
                width: 180px;
                .slides {
                    white-space: nowrap;
                    .slide {
                        position: relative;
                        margin: 10px;
                        .sample {
                            cursor: pointer;
                            margin: auto;
                            img {
                                width: 40px;
                                height: 40px;
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
                                top: 0;
                                left: 0;
                            }
                            &:hover,
                            &.active {
                                img {
                                    box-shadow: 0 0 5px 2px #eeeeee;
                                    transform: scale(1.1);
                                    transition: all 500ms;
                                }
                            }
                        }
                    }
                }
            }

            button.btn {
                align-self: center;
                align-content: center;
                width: 30px !important;
                height: 30px;
                box-sizing: border-box;
                display: inline-block;
                border-radius: 50%;
                background-color: rgba(255,255,255, 0.5);
                font-size: 1.9rem;
                color: #7a7a7a;
                &#button-prev {
                    padding: 1px 10px 1px 6px;
                }
                &#button-next {
                    padding: 1px 7px 1px 9px;
                }
            }
        }
    }

</style>