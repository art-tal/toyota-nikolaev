<template>
    <section class="container">
        <header class="container text-left font-weight-bolder">
            <h1>Виберіть комплектацію</h1>
        </header>

        <div class="body">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(equip, key) in equipments" :key="key">
                    <article class="swip text-left" @click="goToSelect(equip)">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + color.preview"
                             :alt="equip.model_name_pivot"
                        >
                        <h3 class="font-weight-bolder">
                            {{equip.model_name_pivot}}
                            <span class="font-weight-normal">{{equip.body_type}}</span>
                        </h3>
                        <p>{{equip.gross_price | formattedPrice}} &#8372;</p>
<!--                        <button class="btn btn-light my-4">Прийняти</button>-->
                    </article>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
<!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import axios from "axios"
    import formattedPrice from "../../filters/price_format";

    export default {
        name: "EditEquipment",
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                id: 0,
                mod_id: 0,

                equipments: [],
                color: {},

                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }

                // swiperOption: {
                //     slidesPerView: 3,
                //     spaceBetween: 30,
                //     slidesPerGroup: 3,
                //     loop: true,
                //     loopFillGroupWithBlank: true,
                //     pagination: {
                //         el: '.swiper-pagination',
                //         clickable: true
                //     },
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev'
                //     }
                // }
            }
        },

        filters: {
            formattedPrice,
        },

        created() {
            this.id = this.$route.params.id;
            this.getEquipment();
            // this.mod_id = this.equipments[0].id_mod;
            // this.getColor();
        },

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },

        methods: {
            getEquipment() {
                axios.get(
                    'http://lara.toyota.nikolaev.ua/ajax/id_mod',
                    {params: {id: this.id}},
                )
                .then( (response) => {
                    this.equipments = response.data;
                    console.log(this.equipments);
                    this.mod_id = this.equipments[0].mod_id;
                    this.getColor();
                })
                .catch( (error) => {
                    console.log('Ошибка загрузки конфигураций');
                    console.log(error);
                })
            },

            getColor() {
                // console.log(this.mod_id);
                axios.get(
                    `http://lara.toyota.nikolaev.ua/ajax/mod_color?`,//id=${this.mod_id}`,
                    {params: {id: this.mod_id} },//
                )
                    .then( (response) => {
                        this.colors = response.data;
                        // this.colors.forEach( (c) => { this.$set(c, "selected", false); } );
                        // this.colors[0].selected = true;
                        this.color = this.colors[0];
                        // localStorage.color = JSON.stringify( this.selectedColor );
                        // this.$store.state.color = this.selectedColor;
                        console.log(this.mod_id);
                        console.log(response.data);
                        // eventEmitter.$emit('selectedColor', this.selectedColor.rgb);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка, не возможно загрузить доступные цвета");
                        console.log(error);
                    } )
            },

            goToSelect(equip) {
                console.log('push');
                this.$store.state.equipment = equip;
                localStorage.equipment = JSON.stringify(equip);
                this.$router.push({name: "selected_engine"});
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    /*@import './base.scss';*/

    section.container {
        color: $font_color;
        header {
            h1 {
                font-size: 3.4rem;
            }
        }

        .body {
            .swiper {
                article.swip {
                    padding: 20px 15px 0;
                    border-bottom: 2px solid #dcdddd;
                    position: relative;
                    z-index: 900;
                    img {
                        width: 100%;
                    }
                    h3 {
                        font-size: 1.6rem;
                        margin-top: 30px;
                    }
                    p {
                        font-size: 1.6rem;
                        color: #6c7073;
                    }
                    &:hover {
                        border-bottom: 3px solid #E50000;
                        cursor: pointer;
                    }
                }

                .swiper-button-prev {
                    left: 0;
                }
                .swiper-button-next {
                    right: 0;
                }
            }
        }
    }

</style>