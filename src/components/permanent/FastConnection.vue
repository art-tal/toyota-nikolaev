<template>
    <div class="fast_connection">
        <div class="show_contacts" @click="chowContacts()">
            <img src="../../img/toyota-ico-01.png" alt="icon">
        </div>

        <div class="contacts" v-if="show">
            <i class="far fa-times-circle" @click="chowContacts()"></i>
            <div class="d-flex justify-content-center">
                <div class="cont"
                     v-for="(cont, key) in contacts"
                     :key="key"
                >
                    <div class="photo" :title="cont.name">
                        <img :src="'http://lara.toyota.nikolaev.ua/storage/' + cont.photo" :alt="cont.name">
                    </div>

                    <ul>
                        <li v-if="cont.isVisibleViber">
                            <a :href="'viber://chat?number=' + formatNumber(cont.viber)">
                                <i class="fab fa-viber"></i>
                            </a>
                        </li>

                        <li v-if="cont.isVisibleMessenger">
                            <a :href="'https://www.messenger.com/t/' + cont.messenger">
                                <i class="fab fa-facebook-messenger"></i>
                            </a>
                        </li>

                        <li v-if="cont.isVisibleSkype">
                            <a :href="'skype:' + cont.skype + '?chat'">
                                <i class="fab fa-skype"></i>
                            </a>
                        </li>

                        <li v-if="cont.isVisibleTelegram">
                            <a :href="'tg://resolve?domain=' + cont.telegram">
                                <i class="fab fa-telegram-plane"></i>
                            </a>
                        </li>

                        <li v-if="cont.isVisibleWhatsApp">
                            <a :href="'whatsapp://send?phone=' + formatNumber(cont.whatsapp)">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import axios from "axios"
    import $ from "jquery"

    export default {
        name: "FastConnection",

        data() {
            return {
                show: false,

                contacts: [],
                }
            },

        created() {
            this.getContacts();
        },

        methods: {
            chowContacts() {
                if (this.show) {
                    $('.contacts').removeClass("show").addClass('close');
                        setTimeout( () => {this.show = false;},2000 );
                } else {
                    this.show = true;
                    setTimeout(() => {
                        $('.contacts').removeClass('close').addClass("show");
                    }, 5);
                    // this.show = true;
                }
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

            formatNumber(phone) {
                let format = "";
                if(phone){
                    for ( let num of phone) {
                        if( num === "+" || /\d/.test(num)){
                            format = format + num;
                        }
                    }
                }

                if(format.startsWith('0')){
                    return '+38' + format;
                }

                if(format.startsWith('8')){
                    return '+3' + format;
                }

                if(format.startsWith('3')){
                    return '+' + format;
                }

                return format;


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

    @keyframes show_contacts {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

    @keyframes close_contacts {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
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
            padding: 10px 10px 0;
            background-color: rgba(240,240,240,0.9);
            border-radius: 30px;
            position: fixed;
            top: 30vh;
            left: calc(50% - 350px);
            z-index: 150;
            transform: rotateY(90deg);
            animation-duration: 1s;
            /*animation-iteration-count: infinite;*/
            animation-timing-function: linear;
            /*animation-delay: 0ms;*/
            /*animation-play-state: paused;*/
            animation-fill-mode: forwards;
            &.show {
                animation-name: show_contacts;
            }
            &.close {
                animation-name: close_contacts;
            }

            .fa-times-circle {
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 25px;
                z-index: 250;
            }
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
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        li {
                            display: inline-block;
                            border-radius: 50%;
                            background-color: #fff;
                            position: relative;
                            top: -20px;
                            margin: 2px;
                            a {
                                display: block;
                                padding: 5px;
                                i {
                                    font-size: 30px;
                                    &.fa-viber {
                                        color: #815DF5;
                                    }
                                    &.fa-facebook-messenger {
                                        color: #1877F2;
                                    }
                                    &.fa-skype {
                                        color: #01AFEB;
                                    }
                                    &.fa-telegram-plane {
                                        color: #2AA1DD;
                                    }
                                    &.fa-whatsapp {
                                        color: #2CC64E;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>