<template>
    <section class="to_result container">
        <div class="row">
            <article class="col-md-6 col-12 text-left">
                <header>
                    <h1>Дальнейшие шаги</h1>
                </header>
                <div class="body">
                    <p>
                        Перейдите к итоговой странице, чтобы посмотреть полную информацию о выбранном автомобиле
                    </p>
                </div>
                <footer>
                    <router-link
                            tag="button"
                            class="btn btn-danger"
                            exact
                            to="/configurator/result"
                    >
                        <span>Перейтик итогам</span>
                        <i class="fas fa-chevron-right"></i>
                    </router-link>
                </footer>
            </article>

            <div class="image col-md-6 col-12">
                <img src="https://webcarconfig.toyota-europe.com/toyota/img/toyota-visual.jpg" alt="photo">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ToReesult",

        mounted() {
            setTimeout(() => {this.$store.commit("setShowPreload", false);}, 1500)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.to_result.container {
        padding: 68px 30px;
        display: table;
        article {
            align-self: center;
            margin-bottom: 40px;
            header {
                h1 {
                    font-size: 3.4rem;
                    color: $font_color;
                }
            }
            .body {
                p {
                    font-size: 2.25rem;
                    color: #595D60;
                    margin-bottom: 24px;
                }
            }
            footer {
                button {
                    @include button;
                    background-color: #E50000;
                    span {
                        display: inline-block;
                        margin-right: 10px;
                    }

                }
            }
        }
        .image {
            img {
                width: 100%;
            }
        }
    }

</style>