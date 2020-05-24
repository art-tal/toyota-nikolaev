<template>
    <div class="carColors">

<!--        <swiper class="swiper" ref="swiper" :options="swiperOption">-->
        <swiper class="swiper" ref="swiper" :options="swiperOption">
            <swiper-slide
                    v-for="(color, index) in colors"
                    :key="index"
            >

                <div
                    class="nav-item sample"
                    @click="setColor(color, index)"
                >

                    <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.color_image"
                         :alt="color.color_name"
                         :title="color.color_name + ')'"
                    >
                    <div class="check text-center" v-if="color.selected">
                        <i class="fas fa-check"></i>
                    </div>
                </div>

            </swiper-slide>


            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>






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
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    // import {eventEmitter} from "@/main";
    // import {eventEmitter} from "@/app";//        for Laravel

    export default {
        name: "ColorsPanel",

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                renderComponent: 0,

                mod_id: 0,
                colors: [],
                selectedColor: {},

                swiperOption: {
                    slidesPerView: 3,
                    // centeredSlides: true,
                    spaceBetween: 15,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },


                // swiperOption: {
                //     slidesPerView: 2,
                //     spaceBetween: 10,
                //     direction: 'horizontal',
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev'
                //     },
                //     on: {
                //         resize: () => {
                //             this.$refs.swiper.$swiper.changeDirection(
                //                 window.innerWidth <= 960
                //                     ? 'vertical'
                //                     : 'horizontal'
                //             )
                //         }
                //     }
                // },
            }
        },

        mounted() {
            this.renderComponent = 0;
            // this.mod_id = this.$store.state.equipment.mod_id;
            this.mod_id = localStorage.mod_id;
            // setTimeout( () => {}, 20);
            this.getColors();

                // eventEmitter.$emit('selectedColor', this.colors[0]);
        },

        computed: {
            get_mod_id() {
                return this.mod_id;

            },
        },

        watch: {
            $route(toR, fromR) {
                location.reload();///костыль, так делать нельзя но по другому не получается
                fromR;
                // this.$forceUpdate();
                this.id = toR.params['id'];
            },

            // mod_id() {
            //     console.log(this.mod_id);
            //     this.getColors();
            //     return this.mod_id;
            // },

            colors() {
                return this.colors;
            },
        },

        methods: {
            getColors() {
              console.log(this.mod_id);

              axios.get(
                  `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                  {params: {id: this.get_mod_id} },//
              )
              .then( (response) => {
                  this.colors = response.data;
                  this.colors.forEach( (c) => { this.$set(c, "selected", false); } );

                  // if (localStorage.color) {
                  //     this.selectedColor = JSON.parse( localStorage.color );
                  //     let index = this.colors.findIndex( col => col.color_code.toLowerCase() === this.selectedColor.color_code.toLowerCase() );
                  //     this.colors[index].selected = true;
                  //     this.selectedColor = this.colors[index];
                  //     localStorage.color = JSON.stringify( this.colors[index] );
                  // } else {
                      this.colors[0].selected = true;
                      this.selectedColor = this.colors[0];
                      localStorage.color = JSON.stringify( this.selectedColor );
                      this.$store.state.color = this.selectedColor;
                      console.log(this.selectedColor);
                  // }

                  // eventEmitter.$emit('selectedColor', this.selectedColor.rgb);
              } )
              .catch( (error) => {
                  console.log("Ошибка, не возможно загрузить доступные цвета");
                  console.log(error);
              } )
          },

            setColor(color, index) {
                // eventEmitter.$emit('selectedColor', color);
                color.selected = true;
                this.colors.forEach( (c) => { c.selected = false} );
                console.log(this.colors);
                this.colors[index].selected = true;
                this.$store.state.color = color;
                localStorage.color = JSON.stringify( color );
                // console.log(key);
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
        padding: 0;
        margin: 20px 0;

        .sample {
            cursor: pointer;
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
                            top: 5px;
                            left: 5px;
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

    .swiper {
        height: 60px;
        padding: 0 20px;
        width: 100%;
        /*padding: 0;*/
        overflow: hidden;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: bold;

            width: auto !important;
            margin: 0 2px 0 2px;

        }


        .swiper-button-prev {
            top: 15px;
            left: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgba(255,255,255, 0.5);
            &::after {
                font-size: 20px;
                font-weight: bold;
            }

        }
        .swiper-button-next {
            top: 15px;
            right: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgba(255,255,255, 0.5);
            &::after {
                font-size: 20px;
                font-weight: bold;
            }

        }
    }






    @media (min-width: 1200px) and (max-width: 1439.9px) {

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        .carColors {
            padding: 0;
            margin: 0;
            width: 100%;
            position: relative;
            z-index: 100;
            .sample {
                        padding: 5px;
                        position: relative;
                        z-index: 101;
                        img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            border: 2px solid #cccccc;
                        }


                    }
            .swiper {
                .swiper-button-prev {
                    z-index: 110;
                }
                .swiper-button-next {
                    z-index: 110;
                }
            }

        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        .carColors {
            padding: 0;
            margin: 20px 0;
            width: 100% !important;

            .sample {
                cursor: pointer;
                width: auto !important;
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
                    top: 5px;
                    left: 5px;
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
        .swiper-container {
            .swiper-wrapper {
                width: auto !important;
                justify-content: center;

            }
        }
        .swiper {
            .swiper-button-prev {
                display: none;

            }
            .swiper-button-next {
                display: none;

            }
        }

    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        .carColors {
            margin-right: 0;
            .sample {
                img {
                    width: 50px;
                    height: 50px;
                }
            }
                }

        .swiper-container {
            .swiper-wrapper {
                justify-content: center;

            }
        }

        .swiper {
            .swiper-button-prev {
                display: none;

            }
            .swiper-button-next {
                display: none;

            }
        }

    }

    @media (max-width: 575.9px) {
        .carColors {
            margin-right: 0;
            .sample {
                img {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        .swiper-container {
            .swiper-wrapper {
                justify-content: center;

            }
        }

        .swiper {
            height: 60px;
            padding: 0 20px;
            width: 100%;
            /*padding: 0;*/
            overflow: hidden;

            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-weight: bold;

                width: auto !important;
                margin: 0 2px 0 2px;

            }


            .swiper-button-prev {
                top: 15px;
                left: 0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: rgba(255,255,255, 0.5);
                &::after {
                    font-size: 20px;
                    font-weight: bold;
                }

            }
            .swiper-button-next {
                top: 15px;
                right: 0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: rgba(255,255,255, 0.5);
                &::after {
                    font-size: 20px;
                    font-weight: bold;
                }

            }
        }
    }



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