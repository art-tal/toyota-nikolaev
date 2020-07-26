import axios from "axios"
// import $ from "jquery"

export default {
    data() {
        return {
            pageBody: "",
            isActive: false,
        }
    },
    //
    created() {
        this.getPageBody(this.id);
    },

    mounted() {
        // this.$watch( "pageBody", () => {
        //     $("main").addClass("page");
        //     this.$forceUpdate();
        // } );

        setTimeout(() => {
            this.$store.commit("setShowPreload", false);
            }, 1500)
    },

    updated() {
        // console.log(this.pageBody);
        // $("main").addClass("page");
    },

    methods: {
        getPageBody(id) {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/pages",
                    {params: {id: id}}
                )
                    .then( (response) => {
                        this.pageBody = response.data[0];
                        // console.log(response.data);
                        // console.log(this.pageBody.body);
                    } )
                    // .then( () => {
                    //     this.pageBody.body = JSON.parse(this.pageBody.body);
                    // } )
                    .then( () => {
                        while (this.pageBody.body.includes("<p>") ||
                        this.pageBody.body.includes("</p>") ||
                        this.pageBody.body.includes("&lt;") ||
                        this.pageBody.body.includes("&gt;") ||
                        this.pageBody.body.includes("&nbsp;") ||
                        this.pageBody.body.includes("&laquo;") ||
                        this.pageBody.body.includes("&raquo;") ) {

                            this.pageBody.body = this.pageBody.body.replace("<p>", "");
                            this.pageBody.body = this.pageBody.body.replace("</p>", "");
                            this.pageBody.body = this.pageBody.body.replace("&lt;", "<");
                            this.pageBody.body = this.pageBody.body.replace("&gt;", ">");
                            this.pageBody.body = this.pageBody.body.replace("&nbsp;", "");
                            this.pageBody.body = this.pageBody.body.replace("&laquo;", "«");
                            this.pageBody.body = this.pageBody.body.replace("&raquo;", "»");
                        }
                        console.log(this.pageBody.body);
                    } )
                    // .then( () => {
                    //     // this.addStyle();
                    //     // this.isActive = true;
                    //     // console.log(this.isActive);
                    // } )
                    .catch( (error) => {
                        console.log("Ошибка загрузки тела страницы");
                        console.log(error);
                    } )

        },

        // addStyle() {
        //     $("main").addClass("page");
        // },


    },
}