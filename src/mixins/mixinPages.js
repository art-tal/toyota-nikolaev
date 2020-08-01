import axios from "axios"

export default {
    data() {
        return {
            page: {},
            pageBody: "",
            pageTitle: "",
            pageExcerpt: "",
            meta_description: "",
            meta_keywords: "",

            showVideo: false,

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
                        this.page = response.data[0];
                    } )
                    .then( () => {
                        while (this.page.body.includes("<p>") ||
                        this.page.body.includes("</p>") ||
                        this.page.body.includes("&lt;") ||
                        this.page.body.includes("&gt;") ||
                        this.page.body.includes("&nbsp;") ||
                        this.page.body.includes("&laquo;") ||
                        this.page.body.includes("&raquo;") ) {

                            this.page.body = this.page.body.replace("<p>", "");
                            this.page.body = this.page.body.replace("</p>", "");
                            this.page.body = this.page.body.replace("&lt;", "<");
                            this.page.body = this.page.body.replace("&gt;", ">");
                            this.page.body = this.page.body.replace("&nbsp;", "");
                            this.page.body = this.page.body.replace("&laquo;", "«");
                            this.page.body = this.page.body.replace("&raquo;", "»");
                        }
                    } )
                    .then( () => {
                        this.pageBody = this.page.body;
                        this.pageTitle = this.page.title;
                        this.pageExcerpt = this.page.excerpt;
                        this.meta_description = this.page.meta_description;
                        this.meta_keywords = this.page.meta_keywords;
                    } )
                    .catch( (error) => {
                        console.log("Ошибка загрузки тела страницы");
                        console.log(error);
                    } )

        },

        openVideo() {
            this.showVideo = !this.showVideo;
        },

    },
}