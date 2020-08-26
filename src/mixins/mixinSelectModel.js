import axios from "axios"
import $ from "jquery";
import formattedPrice from "../filters/price_format";
import {eventEmitter} from "../main";

// import {eventEmitter} from "./../app";


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

            transmission: {},
            transmissions: [],

            modelColor: "#fff",

            modelVideo: {
                poster: '',
                link: "",
                header: "",
                info: "",
                photo: "",
            },

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

        eventEmitter.$on('selectedEquipment', //this.choice
            () => {
                this.showEquipment = false;
                this.changeTitle();
                this.getEngine();
            }
        );
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

        idEquip() {
            return localStorage.mod_id;
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
                // console.log("error model color watch - 431");

            }
            this.getFontColor();
            return this.modelColor;
        },


        transmissions() {
            return this.transmissions;
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
            let setEquip = false;

            if (Object.keys(equipFromJson) > 0) {
                if(equipFromJson.model_name_pivot.toLowerCase().includes(this.model.name.toLowerCase())) {

                    this.equipments.forEach( equip => {
                        if ( equip.mod_id === equipFromJson.mod_id ) {
                            this.equipment = equip;
                            localStorage.mod_id = this.equipment.mod_id;
                            localStorage.equipment = JSON.stringify( this.equipment );
                            this.$store.commit("setEquipment");
                            setEquip = true;
                            return true;
                        }
                    });
                    if (!setEquip) {
                        this.equipment = this.equipments[0];
                        localStorage.equipment = JSON.stringify( this.equipment );
                        this.$store.commit("setEquipment");
                    }

                }
            } else {
                this.equipment = this.equipments[0];
                localStorage.equipment = JSON.stringify( this.equipment );
                this.$store.commit("setEquipment");
            }



        },

        getPrices() {
            axios.get(
                `http://lara.toyota.nikolaev.ua/ajax/id_mod_price`,
                {params: {id: this.equipment.mod_id}}
            )
                .then( (response) => {
                    this.prices = response.data;
                    // console.log(response.data);

                    this.setPrice();
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки цен");
                    console.log(error);
                } )
        },

        setPrice() {
            let keysPrice = Object.keys(this.prices);
            // console.log(keysPrice);

            this.equipments.forEach( (equip) => {
                keysPrice.forEach( (pr) => {
                    if(equip.model_name_pivot.toLowerCase() === pr.toLowerCase()) {
                        this.$set(equip, "equipPrice", this.prices[pr] );
                    }
                } );
            } );

            this.checkEquipment();

        },

        getEngine() {
            axios.get(
                'http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear',
                // {params: {id: this.id_equip} },
                {params: {id: this.computedEquipment.mod_id} },
            )
                .then( (response) => {
                    this.transmissions = response.data;
                    // console.log(this.transmissions);
                    this.transmission = this.transmissions[0];
                    localStorage.transmission = JSON.stringify( this.transmission);
                    // console.log(this.idEquip, this.transmission);
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
                    // console.log(this.colors);
                    this.colors.forEach( (c) => { this.$set(c, "selected", false) } );

                } )
                .then( () => {this.slides = $('#slides').width() / 3 * this.colors.length;} )
                .then( () => { this.checkColor() } )
                .catch( (error) => {
                    console.log("Ошибка, не возможно загрузить доступные цвета");
                    console.log(error);
                } )
        },

        checkColor() {
            let findColor = false;

            this.colors.forEach( color => {
                if(this.computedColor.color_id === color.color_id) {
                    this.setColor(color);
                    findColor = true;
                }
            });
            if ( !findColor ) {
                this.setColor(this.colors[0]);
            }

        },

        setColor(color) {
            this.colors.forEach( (c) => { c.selected = false} );
            let index = this.colors.indexOf(color);
            this.colors[index].selected = true;
            this.selectedColor = color;
            this.$store.commit("setColorDefault", color);
            localStorage.color = JSON.stringify( color );
            this.getFontColor();
        },

        getVideo() {
            try {
                switch(this.model.name.toLowerCase()) {

                    case 'yaris':
                        // this.modelVideo.poster = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-yaris-2019-video-poster_tcm-3046-1618618.jpg";
                        // this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-yaris-2019-video.mp4_tcm-3046-1622631.mp4";
                        this.modelVideo.header = "Створений для міського життя";
                        this.modelVideo.info = "Завдяки низці інтелектуальних функцій ви отримаєте ще більше задоволення від Yaris.";
                        break;

                    case 'corolla':
                        // this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-corolla-sedan-2019-video-poster_tcm-3046-1559760.jpg";
                        this.modelVideo.poster = "toyota-corolla-sedan-2019-video-poster_tcm-3046-1559760.jpg";//
                        this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-corolla-sedan-2019-movie_tcm-3046-1681827.mp4";
                        // this.modelVideo.link = "../../video/toyota-corolla-sedan-2019-movie_tcm-3046-1681827.mp4";
                        this.modelVideo.header = "Новий рівень керування гібридом";
                        this.modelVideo.info = "Седан Corolla вперше представлено у гібридній варіації. Автомобіль напрочуд швидкий та спритний завдяки застосуванню інноваційного самозарядного гібридного двигуна. Інженери запровадили абсолютно новий підхід до дизайну та проєктування. Завдяки цьому найбільш продавана модель у світі відтепер має нові характеристики: витончений екстер’єр, повністю оновлений інтер’єр, низку удосконалених технологій та, що найважливіше, поліпшені функції безпеки. Седан Corolla повертається – відтепер він ще кращий.\n";
                        // this.modelVideo.photo = "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/corolla-sedan-road-assistance-desktop-1440x560_tcm-3046-1833946.jpg"
                        this.modelVideo.photo = "corolla-sedan-road-assistance-desktop-1440x560_tcm-3046-1833946.jpg";
                        break;

                    case 'camry':
                        // this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-camry-2019-video-poster_tcm-3046-1592534.jpg";
                        this.modelVideo.poster = "toyota-camry-2019-video-poster_tcm-3046-1592534.jpg";
                        this.modelVideo.link = "http://t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-camry-2019-video.mp4_tcm-3046-1690156.mp4";
                        // this.modelVideo.link = "../../video/toyota-camry-2019-video.mp4_tcm-3046-1690156.mp4";
                        this.modelVideo.header = "Нова Toyota Camry";
                        this.modelVideo.info = "Нова Camry Hybrid являє собою ідеальну комбінацію. Модель поєднує всі переваги елегантного седана та гібрида Toyota. Автомобіль гарантує чудову динаміку руху, що виводить гібрид на наступний рівень.";
                        // this.modelVideo.photo = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/camry-road-assistance-desktop-1440x560_tcm-3046-1842879.jpg"
                        this.modelVideo.photo = "camry-road-assistance-desktop-1440x560_tcm-3046-1842879.jpg";
                        break;

                    case 'c-hr':
                        // this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-c-hr-2019-video-poster_tcm-3046-1775577.jpg";
                        this.modelVideo.poster = "toyota-c-hr-2019-video-poster_tcm-3046-1775577.jpg";
                        this.modelVideo.link = "http://t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-c-hr-2019-video_tcm-3046-1777521.mp4";
                        // this.modelVideo.link = "../../video/toyota-c-hr-2019-video_tcm-3046-1777521.mp4";
                        this.modelVideo.header = "Залиште звичне позаду";
                        this.modelVideo.info = "Вийдіть за рамки у світі, сповненому звичного.Порушуйте умовності та довіряйте неординарності. Toyota C-HR – емоційний, елегантний, прогресивний міський кросовер – діамант модельного ряду Toyota.";
                        // this.modelVideo.photo = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/c-hr-road-assistance-desktop-1440x560_tcm-3046-1842884.jpg"
                        this.modelVideo.photo = "c-hr-road-assistance-desktop-1440x560_tcm-3046-1842884.jpg";
                        break;

                    case 'rav4':
                        // this.modelVideo.poster = "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-rav4-2019-video-poster-v2_tcm-3046-1528190.jpg";
                        this.modelVideo.poster = "toyota-rav4-2019-video-poster-v2_tcm-3046-1528190.jpg";
                        this.modelVideo.link = "http://t1-cms-4.images.toyota-europe.com/toyotaone/uaua/toyota-rav4-2019-video_tcm-3046-1688758.mp4";
                        // this.modelVideo.link = "../../video/toyota-rav4-2019-video_tcm-3046-1688758.mp4";
                        this.modelVideo.header = "Жодних компромісів";
                        this.modelVideo.info = "RAV4 створено бути керованим, а дизайн розроблений, щоб виділитися. Завдяки самозарядному та потужному гібридному приводу, ви насолоджуєтеся всіма перевагами електродвигуна, без незручностей. Просторий та зручний інтер’єр, надає відчуття комфорту під час подорожей по місту.";
                        // this.modelVideo.photo = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/rav4-road-assistance-desktop1440x560_tcm-3046-1833947.jpg"
                        this.modelVideo.photo = "rav4-road-assistance-desktop1440x560_tcm-3046-1833947.jpg";
                        break;

                    case 'highlander':
                        this.modelVideo.poster = "001_highlander-exterior-1920x1080_tcm-3046-1705128.jpg";
                        this.modelVideo.link = "";
                        this.modelVideo.header = "";
                        this.modelVideo.info = "";
                        // this.modelVideo.photo = "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/highlander-1440x560_tcm-3046-1842893.jpg"
                        this.modelVideo.photo = "highlander-1440x560_tcm-3046-1842893.jpg";
                        break;

                    case 'land cruiser prado':
                        // this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-2019-video-poster_tcm-3046-1694671.jpg";
                        this.modelVideo.poster = "toyota-land-cruiser-2019-video-poster_tcm-3046-1694671.jpg";
                        this.modelVideo.link = "http://t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-2019-video.mp4_tcm-3046-1703639.mp4";
                        // this.modelVideo.link = "../../video/toyota-land-cruiser-2019-video.mp4_tcm-3046-1703639.mp4";
                        this.modelVideo.header = "Функції, на які можна покластися";
                        this.modelVideo.info = "Окрім легендарних характеристик, Land Cruiser підтримує низку унікальних функцій.";
                        // this.modelVideo.photo = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/LCP-road-assistance-desktop-1440x560_tcm-3046-1843473.jpg"
                        this.modelVideo.photo = "LCP-road-assistance-desktop-1440x560_tcm-3046-1843473.jpg";
                        break;

                    case 'land cruiser 200':
                        // this.modelVideo.poster = "//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-v8-2019-video-poster_tcm-3046-1705028.jpg";
                        this.modelVideo.poster = "toyota-land-cruiser-v8-2019-video-poster_tcm-3046-1705028.jpg";
                        this.modelVideo.link = "http://t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-land-cruiser-v8-2019-movie.mp4_tcm-3046-1705078.mp4";
                        // this.modelVideo.link = "../../video/toyota-land-cruiser-v8-2019-movie.mp4_tcm-3046-1705078.mp4";
                        this.modelVideo.header = "Функції, на які можна розраховувати";
                        this.modelVideo.info = "Новий Land Cruiser 200 підтримує безліч передових функцій та поєднує потужність і практичність.";
                        // this.modelVideo.photo = "//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/LC200-road-assistance-desktop-1440x560_tcm-3046-1843751.jpg"
                        this.modelVideo.photo = "LC200-road-assistance-desktop-1440x560_tcm-3046-1843751.jpg";
                        break;

                    case 'hilux':
                        // this.modelVideo.poster = "//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-hilux-2019-video-poster_tcm-3046-1703624.jpg";
                        this.modelVideo.poster = "toyota-hilux-2020-gallery-01.jpg";
                        this.modelVideo.link = "http://t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-hilux-2019-movie-full.mp4_tcm-3046-1703620.mp4";
                        // this.modelVideo.link = "../../video/toyota-hilux-2019-movie-full.mp4_tcm-3046-1703620.mp4";
                        this.modelVideo.header = "Впорається з будь-яким випробуванням";
                        this.modelVideo.info = "У Hilux поєднуються міцність і потужність пікапа та інноваційні технології. Це новий досвід водіння.";
                        // this.modelVideo.photo = "//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/noviy-hilux-1600x900_tcm-3046-2029831.jpg"
                        this.modelVideo.photo = "toyota-hilux-2020-gallery-02-full_tcm-3046-2017443.jpg";
                        break;
                }
            } catch (e) {
                console.log("Видео пролетело");
            }

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