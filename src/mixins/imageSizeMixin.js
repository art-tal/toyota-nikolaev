export default {
    data() {
        return {
            dirImg: "images",
            dirBG: "background",
        }
    },

    created() {
        this.identifyDevice();
    },

    methods: {
        identifyDevice() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

                console.log("Вы используете мобильное устройство (телефон или планшет).");
                this.dirImg = "image-sm";
                this.dirBG = "background-sm"

            } else {
                console.log("Вы используете ПК.");
                this.dirImg = "images";
                this.dirBG = "background"
            }
        },
    },
}