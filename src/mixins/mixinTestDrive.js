import axios from "axios";

export default {
    data() {
        return {
            carsForTestDrive: [],
            disableButton: true,
        }
    },

    mounted() {
        this.getCarForTestDrive();
    },

    computed: {
        disableButtonDrive() {
            return this.disableButton;
        },

        titleButton() {
            if(this.disableButtonDrive) {
                return "Нажаль на даний момент цей автомобіль не доступний для тест-драйву у нашому автосалоні"
            } else {
                return "Залишити заявку на тест драйв"
            }
        }
    },

    methods: {
        getCarForTestDrive() {
            axios.get(
                "http://lara.toyota.nikolaev.ua/ajax/test_drive_car"
            )
                .then( (response) => {
                    this.carsForTestDrive = response.data;
                    console.log(this.carsForTestDrive);
                } )
                .then( () => {this.toggleTestDriveButton()})
        },

        toggleTestDriveButton() {
            for( let i=0; i < this.carsForTestDrive.length; ++i) {
                if( this.carsForTestDrive[i].toLowerCase().includes(this.model.name.toLowerCase() ) ) {
                    console.log(this.carsForTestDrive[i]);
                    console.log(this.model.name);
                    this.disableButton = false;
                    break;
                } else {
                    console.log("disable");
                    this.disableButton = true;
                }
            }
            // this.carsForTestDrive.forEach( car => {
            //     if( car.toLowerCase().includes(this.model.name.toLowerCase() ) ) {
            //         console.log(car);
            //         console.log(this.model.name);
            //         this.disableButton = false;
            //         return 0;
            //     } else {
            //         console.log("disable");
            //         this.disableButton = true;
            //     }
            // } )
        },
    },
}