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


<!--            <div class="swiper-button-prev" slot="button-prev"></div>-->
            <button id="button-next" class="btn" @click="nextSlide()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>






<!--        <div class="row navbar-colors" id="navbarNav">-->

<!--                        <ul class="sampleOfColor navbar-nav">-->
<!--                            <li v-for="(color, index) in colors"-->
<!--                                :key="index"-->
<!--                                class="nav-item sample"-->
<!--                                @click="setColor(color, index)"-->
<!--                            >-->

<!--                                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"-->
<!--                                         :alt="color.color_name"-->
<!--                                         :title="color.color_name + ' (' + color.color_code + ')'"-->
<!--                                    >-->
<!--                                    <div class="check text-center" v-if="color.selected">-->
<!--                                        <i class="fas fa-check"></i>-->
<!--                                    </div>-->
<!--                            </li>-->

<!--                        </ul>-->
<!--        </div>-->


    </div>

</template>

<script>
    import axios from 'axios';
    import $ from "jquery";


    export default {
        name: "ColorsPanel",

        components: {

        },

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
            this.mod_id = localStorage.mod_id;
            this.getColors();
        },


        computed: {
            get_mod_id() {
                return this.mod_id;
            },

            colored() {
                return this.colors;
            },
        },

        methods: {
            getColors() {
              axios.get(
                  `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                  {params: {id: this.get_mod_id} },//
              )
              .then( (response) => {
                  this.colors = response.data;
                  this.colors.forEach( (c) => { this.$set(c, "selected", false); } );

                      this.colors[0].selected = true;
                      this.selectedColor = this.colors[0];
                      localStorage.color = JSON.stringify( this.selectedColor );
                      this.$store.state.color = this.selectedColor;
                      console.log(this.selectedColor);
                  // }
                  this.slides = $('#slides').width() / 3 * this.colors.length;
                  // eventEmitter.$emit('selectedColor', this.selectedColor.rgb);
              } )
              .catch( (error) => {
                  console.log("Ошибка, не возможно загрузить доступные цвета");
                  console.log(error);
              } )
          },

            setColor(color, index) {
                color.selected = true;
                this.colors.forEach( (c) => { c.selected = false} );
                console.log(this.colors);
                this.colors[index].selected = true;
                this.$store.state.color = color;
                localStorage.color = JSON.stringify( color );
                // console.log(key);
            },

            prevSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.colors.length;
                this.x = this.x - $('.slide_wrapper').width();
                if ( this.x < 0 ) {
                    if(this.colors.length % 3){
                        this.x = this.slides - ( ($('.slide_wrapper').width() / 3) * (this.colors.length % 3));
                        console.log(this.x);
                    } else {
                        this.x = this.slides - $('.slide_wrapper').width();
                        console.log(this.x);
                    }

                }
                $('#slides').css("transform", `translateX(-${this.x}px)`);
            },

            nextSlide() {
                this.slides = $('.slide_wrapper').width() / 3 * this.colors.length;
                this.x = this.x + $('.slide_wrapper').width();
                console.log($('.slide_wrapper').width());
                console.log(this.x , this.slides);
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
                /*flex: 6;*/

            }


            button.btn {
                align-self: center;
                align-content: center;
                /*flex: 1;*/
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







    /*@media (min-width: 992px) and (max-width: 1199.9px) {*/
    /*    .carColors {*/
    /*        padding: 0;*/
    /*        margin: 0;*/
    /*        width: 100%;*/
    /*        position: relative;*/
    /*        z-index: 100;*/
    /*        .sample {*/
    /*                    padding: 5px;*/
    /*                    position: relative;*/
    /*                    z-index: 101;*/
    /*                    img {*/
    /*                        width: 50px;*/
    /*                        height: 50px;*/
    /*                        border-radius: 50%;*/
    /*                        border: 2px solid #cccccc;*/
    /*                    }*/


    /*                }*/
    /*        .swiper {*/
    /*            .swiper-button-prev {*/
    /*                z-index: 110;*/
    /*            }*/
    /*            .swiper-button-next {*/
    /*                z-index: 110;*/
    /*            }*/
    /*        }*/

    /*    }*/
    /*}*/

    /*@media (min-width: 768px) and (max-width: 991.9px) {*/
    /*    .carColors {*/
    /*        padding: 0;*/
    /*        margin: 20px 0;*/
    /*        width: 100% !important;*/

    /*        .sample {*/
    /*            cursor: pointer;*/
    /*            width: auto !important;*/
    /*            img {*/
    /*                width: 50px;*/
    /*                height: 50px;*/
    /*                border-radius: 50%;*/
    /*                border: 2px solid #cccccc;*/
    /*            }*/
    /*            .check {*/
    /*                color: red;*/
    /*                width: 15px;*/
    /*                height: 15px;*/
    /*                border-radius: 50%;*/
    /*                border: 1px solid #cccccc;*/
    /*                background-color: #fff;*/
    /*                position: absolute;*/
    /*                top: 5px;*/
    /*                left: 5px;*/
    /*            }*/
    /*            &:hover,*/
    /*            &.active {*/
    /*                img {*/
    /*                    box-shadow: 0 0 5px 2px #eeeeee;*/
    /*                    transform: scale(1.1);*/
    /*                    transition: all 500ms;*/
    /*                }*/
    /*            }*/
    /*        }*/
    /*    }*/
    /*    .swiper-container {*/
    /*        .swiper-wrapper {*/
    /*            width: auto !important;*/
    /*            justify-content: center;*/

    /*        }*/
    /*    }*/
    /*    .swiper {*/
    /*        .swiper-button-prev {*/
    /*            display: none;*/

    /*        }*/
    /*        .swiper-button-next {*/
    /*            display: none;*/

    /*        }*/
    /*    }*/

    /*}*/

    /*@media (min-width: 576px) and (max-width: 767.9px) {*/
    /*    .carColors {*/
    /*        margin-right: 0;*/
    /*        .sample {*/
    /*            img {*/
    /*                width: 50px;*/
    /*                height: 50px;*/
    /*            }*/
    /*        }*/
    /*            }*/

    /*    .swiper-container {*/
    /*        .swiper-wrapper {*/
    /*            justify-content: center;*/

    /*        }*/
    /*    }*/

    /*    .swiper {*/
    /*        .swiper-button-prev {*/
    /*            display: none;*/

    /*        }*/
    /*        .swiper-button-next {*/
    /*            display: none;*/

    /*        }*/
    /*    }*/

    /*}*/

    /*@media (max-width: 575.9px) {*/
    /*    .carColors {*/
    /*        margin-right: 0;*/
    /*        .sample {*/
    /*            img {*/
    /*                width: 50px;*/
    /*                height: 50px;*/
    /*            }*/
    /*        }*/
    /*    }*/

    /*    .swiper-container {*/
    /*        .swiper-wrapper {*/
    /*            justify-content: center;*/

    /*        }*/
    /*    }*/

    /*    .swiper {*/
    /*        height: 60px;*/
    /*        padding: 0 20px;*/
    /*        width: 100%;*/
    /*        !*padding: 0;*!*/
    /*        overflow: hidden;*/

    /*        .swiper-slide {*/
    /*            display: flex;*/
    /*            justify-content: center;*/
    /*            align-items: center;*/
    /*            text-align: center;*/
    /*            font-weight: bold;*/

    /*            width: auto !important;*/
    /*            margin: 0 2px 0 2px;*/

    /*        }*/


    /*        .swiper-button-prev {*/
    /*            top: 15px;*/
    /*            left: 0;*/
    /*            width: 30px;*/
    /*            height: 30px;*/
    /*            border-radius: 50%;*/
    /*            background-color: rgba(255,255,255, 0.5);*/
    /*            &::after {*/
    /*                font-size: 20px;*/
    /*                font-weight: bold;*/
    /*            }*/

    /*        }*/
    /*        .swiper-button-next {*/
    /*            top: 15px;*/
    /*            right: 0;*/
    /*            width: 30px;*/
    /*            height: 30px;*/
    /*            border-radius: 50%;*/
    /*            background-color: rgba(255,255,255, 0.5);*/
    /*            &::after {*/
    /*                font-size: 20px;*/
    /*                font-weight: bold;*/
    /*            }*/

    /*        }*/
    /*    }*/
    /*}*/



    /*@media (max-width: $container-width) {
        .swiper-button-next {
            right: 20px;
            transform: rotate(90deg);
        }
        .swiper-button-prev {
            left: 20px;
            transform: rotate(90deg);
        }
    }*/

</style>