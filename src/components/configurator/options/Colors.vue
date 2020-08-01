<template>
    <div class="carColors container">

        <div class="row">
            <div class="colorName col-md-4 col-12 font-weight-bold text-left">
                {{selectedColor.color_name}}<br>
                <span v-if="selectedColor.metallic">Металік</span>
                <span v-if="selectedColor.pearl">Перламутр</span>
<!--                ({{selectedColor.color_code}})-->
            </div>

            <div class="carousel-wrapper col-md-8 col-12 position-relative">
                <button id="button-prev" class="btn"
                        @click="prevSlideEquip()"
                        :disabled="xSlide?false:true"
                >
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="button-next" class="btn"
                        @click="nextSlideEquip()"
                        :disabled="xSlide == -diferent ? true : false"
                >
                    <i class="fas fa-chevron-right"></i>
                </button>

                <div class="carousel_colors">


                    <ul class="sampleOfColor slides_wrapper d-flex justify-content-start flex-nowrap">
                        <li class="sample"
                            v-for="(color, key) in colors"
                            :key="key"
                            @click="setColor(color, key)"
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
        </div>
    </div>

</template>

<script>

    import $ from "jquery";
    import axios from 'axios';
    import {eventEmitter} from "@/main";
    // import {eventEmitter} from "./../../../app"; //     for Laravel

    export default {
        name: "Colors",

        data() {
            return {
                id_equip: null,
                colors: [],
                selectedColor: {},

                xSlide: 0,
                slideWidth: 0,
                carouselWidth: 0,
                diferent: 0,
                wrapper: 0,
                countSlides: 9,
            }
        },

        created() {
            this.id_equip = localStorage.mod_id;
            this.getColors();
        },

        mounted() {
            $(window).resize(this.carouselSizes);
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500);
        },

        watch: {
            mod_id() {
                this.getColors();
                return this.mod_id;
            },
        },

        methods: {
            getColors() {
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                    {params: {id: this.id_equip}},//
                )
                    .then( (response) => {
                        this.colors = response.data;
                        if (localStorage.color) {
                            this.selectedColor = JSON.parse( localStorage.color );
                            this.$store.state.color = JSON.parse( localStorage.color );
                            let index = this.colors.findIndex( col => col.color_code.toLowerCase() === this.selectedColor.color_code.toLowerCase() );
                            this.colors[index].selected = true;
                        } else {
                            this.colors[0].selected = true;
                            this.selectedColor = this.colors[0];
                            localStorage.color = JSON.stringify( this.selectedColor );
                            this.$store.state.color = this.selectedColor;
                        }
                    } )
                    .then( () => {this.carouselSizes();} )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные цвета");
                        console.log(error);
                    } )
            },


            setColor(color, key) {
                this.colorChecker(key);
                this.selectedColor = color;
                this.$store.state.color = color;
                localStorage.color = JSON.stringify( this.selectedColor );
                eventEmitter.$emit('selectedColor', color.rgb);
            },

            colorChecker(key) {
                this.colors.forEach( (c) => {c.selected = false} );
                this.colors[key].selected = true;
            },



            carouselSizes() {
                this.xSlide = 0;
                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`);

                this.carouselWidth = $('.carousel_colors').width();
                this.countSlides = Math.floor( this.carouselWidth / ($('.sample > img').width() + 20) ) ;

                this.slideWidth = this.carouselWidth / this.countSlides;
                // console.log(this.slideWidth);
                $(".sample").width(this.slideWidth + "px");
                // console.log($(".sample").width());
                this.wrapper = this.slideWidth * this.colors.length;
                this.diferent = this.wrapper - this.carouselWidth;

                if (this.wrapper <= this.carouselWidth) {
                    $(".btn").fadeOut();
                } else {
                    $(".btn").fadeIn();
                }
            },

            prevSlideEquip() {
                this.xSlide = this.xSlide + this.slideWidth;

                if (this.xSlide > 0) {
                    console.log(this.xSlide);
                    this.xSlide = 0;
                    $("#button-prev").attr("disabled", "disabled");
                } else {
                    $("#button-prev").removeAttr("disabled");
                }
                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`)
                    .css("transition", "all 1000ms");
                $("#button-next").removeAttr("disabled");

            },

            nextSlideEquip() {

                this.xSlide = this.xSlide - this.slideWidth;
                if ( this.xSlide <  -this.diferent ) {
                    this.xSlide = -this.diferent;
                    $("#button-next").attr("disabled", "disabled");
                } else {
                    $("#button-next").removeAttr("disabled");
                }

                $('.slides_wrapper').css("transform", `translateX(${this.xSlide}px)`)
                    .css("transition", "all 1000ms");

            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    .carColors.container {
         background-color: #fff;
         padding: 30px;
         div.row {
             .colorName {
                 font-size: 1.5rem;

             }

             .carousel-wrapper {
                 padding: 0 50px;
                 button.btn {
                     position: absolute;
                     top: 11px;
                     z-index: 950;
                     align-self: center;
                     align-content: center;
                     width: 48px !important;
                     height: 48px;
                     box-sizing: border-box;
                     display: inline-block;
                     border-radius: 50%;
                     background-color: rgba(255,255,255, 0.7);
                     font-size: 2.2rem;
                     color: #7a7a7a;
                     &#button-prev {
                         padding: 1px 10px 1px 6px;
                         left: 0px;
                     }
                     &#button-next {
                         padding: 1px 7px 1px 9px;
                         right: 0px;
                     }
                     &[disabled="disabled"] {
                         background-color: rgba(255,255,255,0.2);
                     }
                 }

                 .carousel_colors {
                     overflow: hidden;
                     .sampleOfColor {
                         list-style-type: none;
                         padding: 0;
                         .sample {
                             padding: 10px;
                             position: relative;
                             cursor: pointer;
                             box-sizing: border-box;
                             img {
                                 display: block;
                                 margin: auto;
                                 width: 50px;
                                 height: 50px;
                                 border-radius: 50%;
                                 border: 2px solid #cccccc;
                                 box-sizing: border-box;
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
         }
     }


    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {

    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .carColors.container {
            background-color: #fff;
            padding: 30px;
            div.row {
                flex-wrap: nowrap;
                .colorName {
                    font-size: 1.5rem;

                }
                ul.sampleOfColor {
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
    }

    @media (max-width: 767.9px) {

    }

</style>