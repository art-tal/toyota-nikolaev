<template>
    <menu>
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-lg-center text-left">

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/warranty_service"
                        >
                            Гарантійнe обслуговування
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/toyota_assistance"
                        >Toyota Assistance</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/toyota_assistance_plus"
                        >Toyota Assistance Plus</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link"
                                active-class="active"
                                tag="a"
                                exact
                                to="/clients_charter"
                        >Хартія Клієнтів</router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </menu>
</template>

<script>
    export default {
        name: "GuaranteeMenu",

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    menu {
        width: 100%;
        /*padding-left:30px;*/
        position: sticky;
        top: 0;
        z-index: 998;
        left: 0;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        padding: 5px 10px 5px 50px;
        margin: 0;
    nav.navbar {
        background-color: #fff;
        font-size: 1.5rem;

    .collapse.navbar-collapse {
    ul.navbar-nav {
    li.nav-item {
        padding: 0 15px;
    }
    }
    }
    }
    }

</style>