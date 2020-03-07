<template>

    <div class="colors container">
        <div class="row">
            <div class="colorName col-4 font-weight-bold text-left">
                {{selectedColor.name}} ({{selectedColor.colorCode}})
            </div>
            <ul class="sampleOfColor col-8 text-left">
                <li v-for="(color, key) in colors"
                    :key="key"
                    class="sample"
                    @click="setColor(color)"
                >
                        <img :src="color.sampleOfColor" :alt="color.name">
                        <div class="check text-center" v-if="color.selected">
                            <i class="fas fa-check"></i>
                        </div>
                </li>

            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "colors",

        data() {
            return {
                selectedColor: "#EDE7E1",
                colors: [
                    {name: "Черный металик", rgb: "#000000", colorCode: "218", sampleOfColor: "http://t1-carassets-1.toyota-europe.com/8f0c43d2-90d7-4a76-8303-033c448c2560.JPG", selected: false },
                    {name: "Темно-синий металик", rgb: "#182B66", colorCode: "8w7", sampleOfColor: "//t1-carassets-4.toyota-europe.com/c2375475-4cb7-4332-b68a-ea0739ecb570.JPG", selected: false },
                    {name: "Бежевый металик", rgb: "#EDE7E1", colorCode: "4x1", sampleOfColor: "//t1-carassets-2.toyota-europe.com/e65e0089-eafc-46ff-bc3c-f91846ce99ee.JPG", selected: true },
                    {name: "Серебристый металик", rgb: "#F2F2F0", colorCode: "1f7", sampleOfColor: "//t1-carassets-1.toyota-europe.com/05333956-36fc-4c17-95a2-3de514269d0f.JPG", selected: false },
                    {name: "Коричневый металик", rgb: "#5C5653", colorCode: "4x7", sampleOfColor: "//t1-carassets-2.toyota-europe.com/eee65758-a2b9-49ba-9bad-e51e840c5b8b.JPG", selected: false },
                    {name: "Красный металик", rgb: "#740310", colorCode: "3u5", sampleOfColor: "//t1-carassets-2.toyota-europe.com/b6433f4d-ccf4-453d-9e5c-083aedbf2fb5.JPG", selected: false },
                    {name: "Белый металик", rgb: "#FFFFFF", colorCode: "089", sampleOfColor: "//t1-carassets-2.toyota-europe.com/c9d8d6eb-92db-4971-85a4-0c3a3f3ccd91.JPG", selected: false },
                ],
            }
        },

        created() {
            this.selectedColor = this.colors[2];
            this.setColor(this.selectedColor);
        },

        methods: {
            setColor: function (color) {
                this.selectedColor = color;
                // this.car.carColor = color;
                this.colors.forEach( (item) => {item.selected = false;});
                color.selected = true;
                // this.car.bigPhoto = this.getCar(this.car.modelCode, this.car.carColor.colorCode);
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