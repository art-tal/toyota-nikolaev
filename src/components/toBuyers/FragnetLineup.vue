<template>
    <section class="lineup container-fluid text-left">
        <header class="container">
            <h1>Широкий модельний ряд. Розвинена дилерська мережа</h1>
        </header>
        <footer class="container">
            <!--                <button class="btn btn-light">Открой для себя Toyota Hybrid</button>-->
            <router-link
                    tag="button"
                    exact
                    class="btn btn-light"
                    active-class="active"
                    to=""
            >
                Відкрий для себе Toyota Hybrid
            </router-link>
        </footer>
    </section>
</template>

<script>
    export default {
        name: "FragnetLineup"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    section.lineup.container-fluid {
        height: 56vh;
        background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/rav4-hybrid-1600x450_tcm-3046-707555.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
    header {
    /*width: 1170px;*/
    /*margin: auto;*/
    h1 {
        padding-top: 150px;
        padding-bottom: 100px;
        font-size: 4.5rem;
        color: #ffffff;
        font-weight: bolder;
    }
    }
    footer {
    /*width: 1170px;*/
    /*margin: auto;*/
    button.btn {
    @include button;
        background-color: #f0f0f0;
    &:hover {
         background-color: #E50000;
         color: #ffffff;
     }
    }
    }
    }


    @media (max-width: 991.9px) {
            section.lineup.container-fluid {
                height: 40vw;
                min-height: 380px;
                header {
                    h1 {
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                }
            }
        }


    @media (max-width: 575.9px) {

            section.lineup.container-fluid {
                max-height: 380px;
                height: 56vw;
                min-height: 220px;
                header {
                    h1 {
                        font-size: 5vw;
                        padding-top: 30px;
                        padding-bottom: 30px;
                    }
                }
            }
    }

</style>