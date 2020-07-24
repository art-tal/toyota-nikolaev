import axios from "axios"
import $ from "jquery";
import formattedPrice from "../filters/price_format";


export default {
    data() {
        return {

            id: 0,
            model: {},
            showEquipment: true,
            equipments: [],
            equipment: {},


            modelTitle: "",
            equipmentTitle: "",

            modelColor: "#fff",

            fontColor: "#202020",

            colors: [],
            selectedColor: {},
            x: 0,
            slides: 0,

            mousePress: false,
            mouseX: 0,
            xNow: 0,
        }
    },

    filters: {
        formattedPrice,
    },

    mounted() {
        this.showEquipment = false;
    },

    computed: {
        computedEquipment() {
            return this.$store.getters.equip;
        },

        computedColor() {
            return this.$store.getters.colored;
        },

        fontColored() {
            return this.getFontColor();
        },

        checkId() {
            this.$forceUpdate();
            return this.$route.params.id;
        },
    },

    watch: {
        showEquipment() {
            return this.showEquipment;
        },

        equipmentTitle() {
            return  this.equipmentTitle;
        },

        modelColor() {
            try {
                this.modelColor = JSON.parse( localStorage.color );
            }
            catch (e) {
                console.log("error model color watch - 431");

            }
            this.getFontColor();
            return this.modelColor;
        },


    },

    methods: {

        choice() {
            this.showEquipment = !this.showEquipment;
        },

        changeTitle() {
            this.equipmentTitle = this.computedEquipment.mod_name;
        },

        descriptionList() {
            try {
                return this.computedEquipment.description.split('\n');
            }
            catch (e) {
                // console.log(e);
            }

        },

        getEquipment() {
            axios.get(`http://lara.toyota.nikolaev.ua/ajax/id_mod`,
                {params: {id: this.getID}})
                .then( (response) => {
                    this.equipments = response.data;
                    this.equipment = this.equipments[0];
                    this.equipmentTitle = this.equipment.mod_name;
                } )

                .then( () => {this.getPrices();} )
                .then( () => {this.getColors();} )
                .then( () => {this.getEngine();} )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные модификации");
                    console.log(error);
                } );
        },

        checkEquipment() {
            let equipFromJson = JSON.parse(localStorage.equipment);
            console.log(equipFromJson);

            if (Object.keys(equipFromJson) > 0) {
                if(equipFromJson.model_name_pivot.toLowerCase().includes(this.model.name.toLowerCase())) {

                    this.equipments.forEach( equip => {
                        if ( equip.mod_id === equipFromJson.mod_id ) {
                            this.equipment = equip;
                            localStorage.mod_id = this.equipment.mod_id;
                            localStorage.equipment = JSON.stringify( this.equipment );
                            this.$store.commit("setEquipment");
                            return true;
                        }
                    });

                }
            }


            this.equipment = this.equipments[0];
            localStorage.equipment = JSON.stringify( this.equipment );
            this.$store.commit("setEquipment");
        },

        getPrices() {
            console.log(this.equipment.mod_id);
            axios.get(
                `http://lara.toyota.nikolaev.ua/ajax/id_mod_price`,
                {params: {id: this.equipment.mod_id}}
            )
                .then( (response) => {
                    this.prices = response.data;
                    console.log(response.data);

                    this.setPrice();
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки цен");
                    console.log(error);
                } )
        },

        setPrice() {
            let keysPrice = Object.keys(this.prices);
            console.log(keysPrice);

            this.equipments.forEach( (equip) => {
                keysPrice.forEach( (pr) => {
                    if(equip.model_name_pivot.toLowerCase() === pr.toLowerCase()) {
                        this.$set(equip, "equipPrice", this.prices[pr] );
                    }
                } );
            } );

            console.log(this.equipments);
            this.checkEquipment();

        },

        getEngine() {
            axios.get(
                'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',
                {params: {id: this.id_equip} },
            )
                .then( (response) => {
                    this.transmissions = response.data;
                    console.log(this.transmissions);
                    this.transmission = this.transmissions[0];
                    localStorage.transmission = JSON.stringify( this.transmission);
                    console.log(this.id_equip, this.transmission);
                    if (!this.transmission) {
                        this.transmission = {
                            eng_name: "none",
                        }
                    }
                } )
                .catch( (error) => {
                    console.log("Ошибка, невозможно загрузить информацию о двигателях и КПП");

                    console.log(error);
                } );
        },

        activated(trans) {
            this.$store.state.engineAndGear = trans;
            localStorage.transmission = JSON.stringify(trans);

            $(".trans").on('click', function () {
                $(".trans").removeClass('active');
                $(this).addClass('active');
            })
        },

        getColors() {
            axios.get(
                `http://lara.toyota.nikolaev.ua/ajax/mod_color`,
                {params: {id: this.equipment.mod_id} },//
            )
                .then( (response) => {
                    this.colors = response.data;
                    console.log(this.colors);
                    this.colors.forEach( (c) => { this.$set(c, "selected", false) } );
                    // this.setColor(this.colors[0]);
                } )
                .then( () => {this.slides = $('#slides').width() / 3 * this.colors.length;} )
                .then( () => { this.checkColor() } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные цвета");
                    console.log(error);
                } )
        },

        checkColor() {
            this.colors.forEach( color => {
                if(this.computedColor.color_id === color.color_id) {
                    console.log("yes");
                    return this.setColor(color);
                }
            });
            this.setColor(this.colors[0]);
        },

        setColor(color) {
            this.colors.forEach( (c) => { c.selected = false} );
            console.log(color.preview);
            let index = this.colors.indexOf(color);
            this.colors[index].selected = true;
            this.selectedColor = color;
            this.$store.commit("setColorDefault", color);
            localStorage.color = JSON.stringify( color );
            this.getFontColor();
        },

        getFontColor() {
            try{
                switch(this.computedColor.rgb.toLowerCase()){
                    case '#000000'.toLowerCase():
                    case '#030303'.toLowerCase():
                    case '#182B66'.toLowerCase():
                    case '#1d50aa'.toLowerCase():
                    case '#5C5653'.toLowerCase():
                    case '#60101e'.toLowerCase():
                    case '#740310'.toLowerCase():
                    case '#7a766f'.toLowerCase():
                    case '#7c7a7a'.toLowerCase():
                    case '#7d8489'.toLowerCase():
                    case '#817e6e'.toLowerCase():
                    case '#8c0414'.toLowerCase():
                    case '#97a4ac'.toLowerCase():
                    case '#aeabac'.toLowerCase():
                    case '#b4ae9c'.toLowerCase():
                    case '#ff0000'.toLowerCase():
                        return this.fontColor = '#FFFFFF';
                    case '#727270'.toLowerCase():
                    case '#d7dcd9'.toLowerCase():
                    case '#EDE7E1'.toLowerCase():
                    case '#f2f2f0'.toLowerCase():
                    case '#fafafa'.toLowerCase():
                    case '#FFFFFF'.toLowerCase():
                        return this.fontColor = '#202020';
                }
            } catch (e) {
                // console.log( "Шрифты пролетели" );
            }

        },

        lightenDarkenColor(col, amt) {

            let usePound = false;

            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }

            let num = parseInt(col,16);

            let r = (num >> 16) + amt;

            if (r > 255) r = 255;
            else if  (r < 0) r = 0;

            let b = ((num >> 8) & 0x00FF) + amt;

            if (b > 255) b = 255;
            else if  (b < 0) b = 0;

            let g = (num & 0x0000FF) + amt;

            if (g > 255) g = 255;
            else if (g < 0) g = 0;

            return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

        },

        getGradient(rgb){
            try{
                switch(rgb.toLowerCase()){
                    case '#000000'.toLowerCase():
                    case '#030303'.toLowerCase():
                        return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 70) +  ")";
                    case '#182B66'.toLowerCase():
                    case '#1d50aa'.toLowerCase():
                    case '#5C5653'.toLowerCase():
                    case '#60101e'.toLowerCase():
                    case '#727270'.toLowerCase():
                    case '#740310'.toLowerCase():
                    case '#7a766f'.toLowerCase():
                    case '#7c7a7a'.toLowerCase():
                    case '#7d8489'.toLowerCase():
                    case '#817e6e'.toLowerCase():
                    case '#8c0414'.toLowerCase():
                    case '#97a4ac'.toLowerCase():
                    case '#aeabac'.toLowerCase():
                    case '#b4ae9c'.toLowerCase():
                    case '#c9021a'.toLowerCase():
                    case '#ff0000'.toLowerCase():

                        return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 50) +  ")";
                    case '#d7dcd9'.toLowerCase():
                    case '#EDE7E1'.toLowerCase():
                    case '#f2f2f0'.toLowerCase():
                    case '#fafafa'.toLowerCase():
                    case '#FFFFFF'.toLowerCase():
                        return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, -50) + ")";
                    default:
                        return "linear-gradient( to bottom, " + rgb + ", " + this.lightenDarkenColor(rgb, 20) +  ")";
                }
            } catch (e) {
                // console.log( "Градиетны пролетели" );
            }
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