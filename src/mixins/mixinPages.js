import axios from "axios"

export default {
    data() {
        return {
            pageBody: "",
            isActive: false,
        }
    },

    created() {
        this.getPageBody(this.id);
    },

    mounted() {
        setTimeout(() => {
            this.$store.commit("setShowPreload", false);
            }, 1500)
    },

    methods: {
        getPageBody(id) {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/pages",
                    {params: {id: id}}
                )
                    .then( (response) => {
                        this.pageBody = response.data[0];
                    } )
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
                        // console.log(this.pageBody.body);
                    } )
                    .catch( (error) => {
                        console.log("Ошибка загрузки тела страницы");
                        console.log(error);
                    } )

        },

    },
}