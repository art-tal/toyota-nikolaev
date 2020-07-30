
// import {eventEmitter} from "./../app";

import {eventEmitter} from "./../main";
import $ from "jquery";

export default {
    mounted() {
        $(".linked").on("click", this.close);
    },

    methods: {
        close() {
            console.log("click");
            eventEmitter.$emit("closeNavbar");
        },
    },

}