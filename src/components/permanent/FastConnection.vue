<template>
    <div class="fast_connection">
        <div class="show_contacts" @click="chowContacts()">
            <img src="../../img/toyota-ico-01.png" alt="icon">
        </div>
        <div class="contacts">
    </div>


    </div>
</template>

<script>
    import axios from "axios"
    // import $ from "jquery"

    export default {
        name: "FastConnection",

        data() {
            return {
                chown: false,

                contacts: [],
                }
            },

        created() {
            this.getContacts();
        },

        mounted() {
            // setInterval( () => {
            //     $('.show_contacts').css('transform', "rotate(0, 360deg)")
            //     .css("transition-property", "transform")
            //     .css("transition-duration", "2s")}, 2000 )

        },

        methods: {
            chowContacts() {
                this.show = !this.show;
            },

            getContacts() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/workers",
                )
                .then( (response) => {
                    this.contacts = response.data.filter( (contact) => {
                        return  contact.isFront === 1;
                    } )
                } )
                .catch( () => {} )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .fast_connection {
        .show_contacts {
            position: absolute;
            bottom: 50px;
            right: 50px;
            z-index: 200;
            width: 150px;
            transform: rotateY(360deg);
            transform-origin: center;
            transition: rotateY 2s linear infinite;
            img {
                width: 100%;
            }
        }
    }

</style>