<template>

    <footer class="container">
        <div class="row">
            <div class="col-6 legal_links">
                    <a href="#" class="contact">Связаться с нами</a>
                    <a href="#" class="legalInformation">Юридическая информация</a>
                    <a href="#" class="privacySetting">Настройки приватности</a>
            </div>

            <div class="map col-6 text-right">
                <a href="#app" class="up">Верх</a>
                <div class="mapSite">
                    <a href="#">
                        <span>Карта сайта</span>
                        <i class="fas fa-chevron-down"></i>
                    </a>
                    <div class="mapSiteDown">

                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-6 text-left law">
                <p>© 2020 ПІІ «Тойота-Україна». Усі права зберігаються за правовласником. <br>
                    Розміщена на цьому сайті інформація щодо характеристик продукції, (орієнтовних) цін, інших умов її продажу, а також умов надання будь-яких послуг не є пропозицією укласти договір (офертою). Така інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.
                </p>
            </div>
            <div class="col-6 text-right social">
                <a href="#">
                    <img src="../..//img/icons8-youtube-squared.png" alt="icons8-youtube-squared.svg">
                </a>
                <a href="#">
                    <img src="../..//img/icons8-facebook-old.png" alt="icons8-facebook-old.svg">
                </a>
                <a href="#">
                    <img src="../../img/icons8-instagram.png" alt="icons8-instagram.svg">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    footer {
        margin: 68px auto;
        .row {
            .legal_links {
                display: flex;
                justify-content: space-between;
                a {
                    display: block;
                    margin-bottom: 24px;
                    /*padding-right: 24px;*/
                    color: $font_color;
                    font-size: 1.5rem;
                }
            }
            .map {
                font-size: 1.5rem;
                a {
                    color: $font_color;
                }
                .mapSite {
                    margin-left: 25px;
                    display: inline-block;
                    i {
                        color: #E50000;
                        margin-left: 5px;
                        margin-top: 5px;
                        font-size: 1rem;
                        vertical-align: top;
                    }
                }
            }
            .law {
                font-size: 1.3rem;
                color: #595D60;
            }
            .social {
                a {
                    width: 32px;
                    height: 32px;
                    padding-left: 10px;
                    img {
                        width: 32px;
                        opacity: 0.5;
                    }
                    &:hover {
                        img {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
</style>