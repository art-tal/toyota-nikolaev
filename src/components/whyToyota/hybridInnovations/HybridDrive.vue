<template>
    <main>
        <header class="container-fluid">
            <img src="../../../img/hybrid_dryve.png" alt="hybrid_drive">
            <h1 class="container text-center">Зробіть тест драйв Hybrid Drive.<br>
                Дізнайтесь скільки часу протягом тест драйву Ви рухались в електрорежимі</h1>

            <div class="time_in_electric_mode">
                <img src="../../../img/chart.png" alt="" class="bkg_chart">
                <div class="percent">
                    <h2>56%</h2>
                    <h5>Часу<br>в електрорежимі</h5>
                </div>
                <img src="../../../img/chart_weight.png" alt="" class="chart_weight">

                <p>Середній показник часу, виражений у відсотках, протягом якого учасники тест драйвів Hybrid Drive рухались в електрорежимі (EV).</p>
            </div>
        </header>

        <div class="body">
            <h4 class="container">При звичайному тест драйві гібридного автомобіля неможливо вирахувати скільки саме часу автомобіль рухався в електрорежимі (EV), а скільки за рахунок бензинового двигуна. Тому було створено <strong>Hybrid Drive</strong> – інноваційний тест драйв гібридних автомобілей Toyota, завдяки якому Ви можете дізнатися який відсоток часу та дистанції протягом тест драйву ви рухались в електрорежимі (EV).</h4>

            <div class="advantages container row">
                <div class="eco col-2">
                    <img src="../../../img/picto_eco.png" alt="eco">
                    <h5>Екологічність</h5>
                </div>

                <div class="dots col-2"></div>

                <div class="without_power col-2">
                    <img src="../../../img/picto_branchement.png" alt="branchement">
                    <h5>Не потребує електромережі</h5>
                </div>

                <div class="dots col-2"></div>

                <div class="choiсe col-2">
                    <img src="../../../img/picto_zen.png" alt="zen">
                    <h5>Вибір мільйонів</h5>
                </div>

            </div>

            <div class="capabilities container-fluid">
                <img src="../../../img/frieze_cars.png" alt="freez cars">
                <h3>
                    Відкрийте можливості гібрида!<br>
                    Завітайте до офіційного дилера Toyota в Україні та дізнайтесь який відсоток часу<br>
                    Ви проїхали в електрорежимі (EV).
                </h3>
                <router-link
                        exact
                        tag="button"
                        class="btn btn-danger"
                        to="/consultation/step_1"
                >
                    Замовити тест драйв
                </router-link>
            </div>

            <div class="quantity-drive container-fluid">
                <div class="background">
                    <h3 class="font-weight-bold">13 034 кількість водіїв які вже здійснили<br>
                        Hybrid Drive</h3>
                    <hr>
<!--                    <div class="line"></div>-->

                   <div class=" info container d-flex">

                       <div class="total_distance">
                           <h2>123651</h2>
                           <p>км.</p>
                       </div>

                       <div class="percents">
                           <h2>56%</h2>
                       </div>

                       <div class="cool">
                           <img src="../../../img/thumb-on_ita.png" alt="cool">
                           <img src="../../../img/thumb-on_ita.png" alt="cool">
                           <img src="../../../img/thumb-on_ita.png" alt="cool">
                           <img src="../../../img/thumb-on_ita.png" alt="cool">
                           <img src="../../../img/thumb-on_ita.png" alt="cool">
                       </div>

                   </div>
                </div>
                <div class="info_second container d-flex">

                    <div class="total_distance">
                        <p>Загальна відстань</p>
                    </div>

                    <div class="percents">
                        <p>відсоток часу в електрорежимі (EV)</p>
                    </div>

                    <div class="cool">
                        <p>Середній рівень задоволеності</p>
                    </div>

                </div>
                <img src="../../../img/shdw.png" alt="shadow" class="shdw">
            </div>

        </div>


    </main>
</template>

<script>
    export default {
        name: "HybridDrive"
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    main {
        header.container-fluid {
            @include header-xl;
            height: 480px;
            background-image: url(../../../img/bkg_presentation.jpg);
            position: relative;
            h1 {
                margin-top: 200px;
                color: #FFFFFF;
                font-size: 3.4rem;
            }
            img {
                display: block;
                width: 400px;
                position: absolute;
                top: 0;
                left: calc(50% - 200px);
                z-index: 10;
            }

            .time_in_electric_mode {
                width: 100vw;
                height: 380px;
                position: absolute;
                bottom: -260px;
                left: 0;
                img.bkg_chart {
                    /*text-align: center;*/
                    width: 555px;
                    left: calc(50% - 277px);
                    position: absolute;
                    top: 0;
                }
                img.chart_weight {
                    width: 290px;
                    height: 290px;
                    position: absolute;
                    top: 22px;
                    left: calc(50% - 145px);
                }
                .percent {
                    width: 116px;
                    position: absolute;
                    text-align: center;
                    top: 115px;
                    left: calc(50% - 58px);
                    color: #343e46;
                    z-index: 15;
                    h2 {
                        font-size: 5rem;
                        margin-bottom: 0;
                        font-weight: bold;
                    }
                    h5 {
                        font-size: 1.5rem;
                    }
                }
                p {
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    font-size: 1.5rem;
                    color: #CCCCCC;
                    font-weight: bold;
                }
            }
        }

        .body {
            margin: 300px auto 68px;

            h4 {
                font-size: 2.2rem;
                color: #343e46;
                padding: 20px 0;
                line-height: 1.6;
            }

            .advantages.container.row {
                margin: 20px auto 100px;
                justify-content: space-around;
                align-items: center;
                div {
                    /*flex: 1;*/
                    img {
                        width: 100%;
                    }
                    h5 {
                        font-size: 2.2rem;
                        color: #343e46;
                        margin-top: 25px;
                    }
                    &.dots {
                        width: 100%;
                        height: 70px;
                        background-image: url(../../../img/dot.png);
                        -webkit-background-size: 20px;
                        background-size: 25px;
                        background-repeat: repeat-x;
                    }
                }
            }

            .capabilities.container-fluid {
                background-color: #edf0f5;
                padding: 0 0 140px;
                img {
                    width: 1200px;
                    margin: auto;
                    display: block;
                    position: relative;
                    top: -60px;
                }
                h3 {
                    font-size: 2.6rem;
                    color: #00293E;
                    line-height: 1.6;
                    margin-bottom: 40px;
                }
                button.btn.btn-danger {
                    @include button;
                    background-color: #E50000;
                }

            }

            .quantity-drive.container-fluid {
                margin: 0 0 300px;
                padding: 0 0 133px;
                position: relative;
                .background {
                    background-image: url(../../../img/quantity_drive.jpg);
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    width: 100%;
                    height: 480px;
                    padding: 0;
                    margin: 0;
                    position: relative;
                    h3 {
                        padding: 80px 0 20px;
                        font-size: 3.2rem;
                        color: #FFFFFF;
                        text-shadow: 2px 2px rgba(0,0,0,0.2);
                    }
                    /*.line {}*/
                    hr {
                        width: 200px;
                        margin: 40px auto;
                        border: 1px solid #FFFFFF;
                        box-shadow: 2px 2px rgba(0,0,0,0.2);
                    }
                    .info.container {
                        position: absolute;
                        bottom: 0;
                        left: calc(50vw - 570px);
                        width: 100%;
                        background-color: #434b4f;
                        padding: 0;
                        div {
                            flex: 1;
                            height: 190px;
                            &.total_distance {
                                padding-top: 43px;
                                h2 {
                                    font-size: 5rem;
                                    color: #FFC000;
                                    margin: 10px;
                                }
                                p {
                                    font-size: 1.4rem;
                                    color: #FFFFFF;
                                    font-weight: bold;
                                }
                            }
                            &.percents {
                                padding-top: 47px;
                                border-left: 1px solid rgba(0,0,0,0.2);
                                border-right: 1px solid rgba(0,0,0,0.2);
                                h2 {
                                    font-size: 2.6rem;
                                    font-weight: bolder;
                                    color: #FFFFFF;
                                }
                            }
                            &.cool{
                                padding: 72px 0;
                                img {
                                    width: 40px;
                                    margin: 0 4px;
                                }
                            }
                        }

                    }

                }
                .info_second.container {
                    background-color: #f0f0f0;
                    padding: 0;
                    position: absolute;
                    left: calc(50vw - 570px);
                    z-index: 10;
                    div {
                        padding: 53px 0;
                        flex: 1;
                        &.percents {
                            border-left: 1px solid rgba(0,0,0,0.2);
                            border-right: 1px solid rgba(0,0,0,0.2);
                        }
                        p {
                            font-size: 1.8rem;
                            margin: 0;
                        }
                    }
                }
                img.shdw {
                    width: 1200px;
                    position: absolute;
                    left: calc(50vw - 570px);
                    bottom: -40px;

                }
            }
        }
    }
</style>