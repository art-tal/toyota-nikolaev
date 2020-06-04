<template>
    <main class="container-fluid">
        <header class="position-relative">
            <h1>Тойота Центр Миколаїв «КіТ-Т»
                <h2>офіційний дилер Тойота в Миколаєві</h2>
            </h1>
        </header>

        <section class="body container">
            <header>
                <h1>Приємної прогулянки :)</h1>
            </header>

            <iframe src="https://www.google.com/maps/embed?pb=!4v1588865419952!6m8!1m7!1sCAoSLEFGMVFpcE5ONk02N21HUU1jeHNfOGlkWEhQcElVVEhzNmthRk5NeXNRVWZR!2m2!1d46.95159516762597!2d32.06385679543018!3f247.85048111043818!4f4.923560909555931!5f0.7820865974627469"
                    width="600"
                    height="450"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"></iframe>

        </section>

    </main>
</template>

<script>
    export default {
        name: "ToyotaMykolaiv",

        metaInfo() {
            return {
                title:  `Toyota Nikolaev | Тойота Центр Миколаїв «КіТ-Т» | Віртуальний 3d тур`,
                meta: [
                    {
                        vmid: "title",
                        property: "og:title",
                        content: `Toyota Nikolaev | Тойота Центр Миколаїв «КіТ-Т» | Віртуальний 3d тур`
                    },
                    {
                        vmid: "description",
                        name: "description",
                        content: `Тойота Центр Миколаїв «КіТ-Т», Віртуальний 3d тур.`
                    },
                    {
                        vmid: "description",
                        property: "og:description",
                        content: `Тойота Центр Миколаїв «КіТ-Т», Віртуальний 3d тур.`
                    },
                    {
                        vmid: "keywords",
                        name: "keywords",
                        content: `Toyota Nikolaev, тойота україна, купити, Toyota, Yaris, Auris, Corolla, Avensis, Prius, Camry, RAV4, Highlander, Land Cruiser Prado, Land Cruiser 200, Hilux, Тойота, Ярис, Аурис, Королла, Авенсис, Пріус, Хайлендер, Корола, Кемри, Камри, Кэмри, Камрі, РАВ4, Ленд Крузер, Прадо, Ленд Крузер 200, Хайлакс, Хайлюкс, машини, автомобілі, дилери тойота, офіційний дилер тойота, гібрид, гібридний, приус, prius, toyota prius, toyota ukraine, тойота Миколаїв купити, c-hr`
                    },
                    {
                        vmid: "keywords",
                        property: "og:keywords",
                        content: `Toyota Nikolaev, тойота україна, купити, Toyota, Yaris, Auris, Corolla, Avensis, Prius, Camry, RAV4, Highlander, Land Cruiser Prado, Land Cruiser 200, Hilux, Тойота, Ярис, Аурис, Королла, Авенсис, Пріус, Хайлендер, Корола, Кемри, Камри, Кэмри, Камрі, РАВ4, Ленд Крузер, Прадо, Ленд Крузер 200, Хайлакс, Хайлюкс, машини, автомобілі, дилери тойота, офіційний дилер тойота, гібрид, гібридний, приус, prius, toyota prius, toyota ukraine, тойота Миколаїв купити, c-hr`
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    main.container-fluid {
        margin: 0;
        padding: 0;

        header {
            margin-bottom: 68px;
            width: 100%;
            height: 80vh;
            background-image: url(../../img/toyota-nikolaev-.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            -webkit-background-size: cover;
            background-size: cover;
            h1 {
                font-size: 5.2rem;
                font-weight: bolder;
                color: #ffffff;
                h2 {
                    font-size: 0.8em;
                }
            }
        }

        section.body.container {
            header {
                background: none;
                height: auto;
                h1 {
                    color: $font_color;
                }
            }

            iframe {
                width: 100%;
                height: 800px;
            }
        }

    }


    @media (min-width: 768px) and (max-width: 1199.9px) {
        main.container-fluid {
            header {
                max-height: 60vw;
            }
        }
    }


    @media (max-width: 767.9px) {
        main.container-fluid {
            header {
                height: 56vw;
                margin-bottom: 30px;
                h1 {
                    font-size: 3.5rem;
                    /*padding-top: 50px;*/
                }
            }
        }
    }

</style>