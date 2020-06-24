<template>
    <div class="fast_connection">
        <div class="show_contacts" @click="chowContacts()">
            <img src="../../img/toyota-ico-01.png" alt="icon">
        </div>

        <div class="contacts">
            <div class="d-flex justify-content-center">
                <div class="cont"
                     v-for="(cont, key) in contacts"
                     :key="key"
                >
                    <div class="photo" :title="cont.name">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + cont.photo" :alt="cont.name">
                    </div>
                    <ul>
                        <li v-if="cont.isVisibleMessenger">
                            <a :href="viber://chat?number=+380676174872"></a>
                        </li>
                    </ul>
                </div>
            </div>
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

        methods: {
            chowContacts() {
                this.show = !this.show;
                console.log(this.show);
            },

            getContacts() {
                axios.get(
                    "http://lara.toyota.nikolaev.ua/ajax/workers",
                )
                .then( (response) => {
                    this.contacts = response.data.filter( (contact) => {
                        return  contact.isFront === 1;
                    } );
                    console.log(this.contacts);
                } )
                .catch( (error) => {
                    console.log("Ошибка загрузки контактов");
                    console.log(error);
                } )
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';
    
    @keyframes rotate_icon {
        from {
            transform: rotateY(0);
        }
        to {
            transform: rotateY(360deg);
        }
    }

    .fast_connection {
        .show_contacts {
            position: fixed;
            bottom: 50px;
            right: 50px;
            z-index: 200;
            width: 100px;
            animation-name: rotate_icon;
            animation-duration: 5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-delay: 0ms;
            animation-play-state: running;
            cursor: pointer;
            img {
                width: 100%;
            }
        }

        .contacts {
            width: 700px;
            padding: 10px;
            background-color: rgba(0,0,0,0.5);
            position: fixed;
            top: 30vh;
            left: calc(50% - 350px);
            z-index: 150;
            div {
                .cont {
                    flex: 1;
                    padding: 10px;
                    .photo {
                        position: relative;
                        width: 100%;
                        padding-top: 100%;
                        border-radius: 50%;
                        overflow: hidden;
                        img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

</style>