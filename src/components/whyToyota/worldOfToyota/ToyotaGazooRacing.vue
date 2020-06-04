<template>
    <section class="container-fluid">
        <header>
            <h1 class="text-center">Драйвове пересування будь-якими дорогами
                <h2 class="text-center">Автомобілі, створені за концепцією Ever Better Cars (автомобілі, кращі у всьому)</h2>
                <img src="//d1hu588lul0tna.cloudfront.net/toyotaone/uaua/TGR-HeaderLogo_tcm-3046-781341.png" alt="TOYOTA GAZOO Racing logo">
            </h1>
        </header>

        <div class="body container">
            <h3 class="text-center">На гоночних треках або ділянках ралі по всьому світу є ціла низка автомобільних перегонів, які викликають в автолюбителів радісне хвилювання гримучою сумішшю скаженої швидкості, пронизливого виску гальм та неабиякої хоробрості гонщиків. Багата історія автоспорту Toyota налічує сім десятирічь, і сьогодні ми об'єднали всі наші міжнародні заходи під однією назвою: TOYOTA GAZOO Racing.</h3>

            <div class="video">


                <div class="img_button" @click="openVideo()">
<!--                    <img src="https://img.youtube.com/vi/AmvjLpmK844/sddefault.jpg" alt="/">-->

                    <button class="btn btn-play">
                        <i class="fas fa-play"></i>
                    </button>
                </div>

                <div class="open-video" v-if="showVideo">
                    <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AmvjLpmK844" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="parallax_block text-center">
<!--            <div>-->
                <img class="parallax_image" src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/2-TGR-Pushing-limits-optimized_tcm-3046-778407.jpg" alt="photo">
<!--            </div>-->
            <h2 class="font-weight-bolder">Розширюючи межі в ім'я кращого</h2>
            <p>
                TOYOTA GAZOO Racing втілює<br>
                прагнення TOYOTA до подолання<br>
                будь-яких перешкод на шляху до створення кращих автомобілів.<br>
                Щоб підкорити нові технології та знайти актуальні рішення<br>
                в суворих умовах автоспорту,<br>
                ми ніколи не зупинимося впроваджувати нові розробки.<br>
                Ми випробовуємо наші автомобілі, щоб бути спроможними<br>
                приймати найскладніші виклики.<br>
                Ми змагаємося будь-якими дорогами,<br>
                незважаючи на важкість виклику.<br>
                Це надихає нас на створення кращих автомобілів.<br>
                Ми розроблюємо майбутню структуру TOYOTA.<br>
                Ми будемо продовжувати змагитися, щоб надати свободи,<br>
                пригодницького настрою та радості від водіння кожному з наших прихильників.
            </p>
        </div>

        <div class="body container right_side">
            <h4>Нова назва, бувалі нестримні пориви</h4>
            <p>Ще у 50-х роках засновник компанії Toyota Кіічіро Тойода був настільки впевнений у перевагах, які змагання надають його компанії, що навіть проголосив:</p>
            <p>"Автоспорт є не тільки розвагою. Він життєво важливий для всієї автомобільної промисловості Японії. Як атлети випробовують свої можливості, докладаючи всіх зусиль на Олімпіаді, так і виробники автомобілів використовують автоспорт як інструмент доведення характеристик автомобіля до межі його можливостей та боротьби за першорядність. Завдяки такому підходу виробники спроможні відкривати нові шляхи вдосконалення автомобільних технологій.</p>
            <p>Йдеться не лише про дослідження. Щоб відкрити справжні можливості автомобіля, потрібно знайти гармонію між механізмами та людьми. Це як робота чотирьох коліс – рух уперед можливий, тільки якщо автоспорт й автомобільна промисловість будуть існувати пліч-о-пліч."</p>
<!--        </div>-->


            <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/3-TGR-New-name_tcm-3046-778412.jpg" alt="/">

<!--        <div class="body container right_side">-->
            <p>Сьогодні “GAZOO” є синонімом автосервісу: дуже задушевного місця, де люди разом працюють над удосконаленням найдрібніших деталей кращих автомобілів і супутніх послуг на радість кожного покупця в кожному автосервісі. Отже, вже сама назва втілює той самий дух, що надихає команду TOYOTA GAZOO Racing.</p>
            <p>До заходів з автоспорту, об'єднаних назвою TOYOTA GAZOO Racing, належать: передовий Чемпіонат світу на витривалість World Endurance Championship, повернення до престижного Чемпіонату світу з ралі World Rally Championship у 2017 році, найскладніший марафон "24 години Нюрбургрингу" (цього року Toyota вдесяте братиме участь у цьому надзвичайно важкому змаганні), а також пам'ятаймо про початок проекту Five Continents Drive Project – захід, в межах якого співробітники Toyota до 2020 року подорожують п'ятьма континентами, щоб не тільки створювати кращі автомобілі, але й вдосконалювати вміння людей, які забезпечують виробничу діяльність.</p>
        </div>

        <div class="parallax_block text-center">
            <img class="parallax_image" src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Parallax-1_tcm-3046-778415.jpg" alt="foto">
        </div>


        <div class="body container right_side">
            <h4>Проектування майбутньої структури Toyota</h4>

            <p>Запальний, карколомний та захоплюючий World Endurance Championship (WEC) – це апофеоз інновацій, надійності та командної праці. Охопивши дев'ять перегонів по всьому світу, зокрема відомі 24 години Ле-Мана, TOYOTA GAZOO Racing є учасником відомого Ле-Мана з 1985 року і знову бере участь у чемпіонаті у 2012 році. Згодом, у 2016 році Toyota увісімнадцяте бере участь у 24 годинах Ле-Мана та, на жаль, команда перетнула фінішну смугу із затримкою у декілька секунд після змаху клітчастим прапором. Але TOYOTA GAZOO Racing запевняє, що продувжуватиме боротися на шляху до ще більших перемог.</p>
<!--        </div>-->

            <img src="//t1-cms-2.images.toyota-europe.com/toyotaone/uaua/toyota-ts050-gazoo-racing_tcm-3046-778418.jpg" alt="photo">

<!--        <div class="body container right_side">-->
            <p>У шаленій боротьбі, яка триватиме від шести до двадцяти чотирьох годин, візьмуть участь два передові автомобілі для перегонів на витривалість TS050 HYBRID з потужністю близько 1000 к.с. Використовуючи потужність комбінованого джерела енергії для вибухового прискорення, ККД та досягнення швидкостей понад 330 км/год, ці високотехнологічні гібридні автомобілі (такі як автомобілі Toyota загального користування) відновлюють енергію, що поглинається гальмами, яка накопичується в акумуляторі для подальшого використання.</p>
<!--        </div>-->


            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/6-TGR-WEC-mosaic_tcm-3046-778421.jpg" alt="photo">

<!--        <div class="body container right_side">-->
            <p>Досвід, який ми здобули з моменту першого перегону WEC у 2012 році й до перемоги у чемпіонаті у 2014 році, значною мірою вплинув на розвиток гібридної технології, застосованої в наших дорожніх автомобілях. Такі інновації, як зменшення об'єму двигуна, яке компенсується наддувом, та система охолодження, втілюють у життя наше прагнення до створення кращих автомобілів і задоволення від водіння.</p>

        </div>



        <div class="parallax_block text-center">
            <img class="parallax_image" src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Parallax-2_tcm-3046-778422.jpg" alt="photo">
        </div>


        <div class="body container right_side">
            <h4>Вишкіл подоланням</h4>

            <p>Для створення світових гоночних автомобілів однієї теорії недостатньо. Щоб повністю перевірити здатність автомобіля адаптуватися до будь-яких доріг, потрібна особлива майстерність, підкріплена справжнім особистим досвідом та знаннями. Пом'ятаючи про це, TOYOTA GAZOO Racing здійснить феєричне повернення до престижного World Rally Championship (WRC) у 2017 році після 17-річної перерви.</p>

            <p>Захоплюючі перегони на високій швидкості шляхами, які тільки можна собі уявити – від треків, усипаних щебнем, до доріг, вкритих льодом. WRC відкриває заворожливі панорами з видом на автомобілі, які легко впізнати, наприклад, Yaris.</p>

            <div class="video">

                <div class="img_button second" @click="openVideo()">
<!--                    <img class="w-100" src="https://img.youtube.com/vi/cpE3U_wSoPA/sddefault.jpg" alt="/">-->

                    <button class="btn btn-play">
                        <i class="fas fa-play"></i>
                    </button>
                </div>

                <div class="open-video" v-if="showVideo">
                    <div class="close text-right"><i class="fas fa-times" @click="openVideo()"></i></div>

                    <iframe  src="https://www.youtube.com/embed/cpE3U_wSoPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>



        <div class="body container right_side">
            <p>У січні після багатьох місяців інтенсивних випробувань новісінький Yaris WRC викочується до стартової рампи у Монте Карло, готовий до виснажливого графіку перегонів. У корпусі розміщені зовсім новий 1,6-літровий двигун з прямим впорскуванням (380 к.с.) та ходова частина, відрегульована на основі передового моделювання, випробувань та виробничих технологій.</p>
<!--        </div>-->

            <img src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/toyota-yaris-gazoo-racing_tcm-3046-778440.jpg" alt="photo">

<!--        <div class="body container right_side">-->
            <p>Долаючи гірські повороти, різкі підйоми та переліски, вкриті снігом, потрібен не тільки швидкісний автомобіль, але й ініціативна і талановита команда поруч. До команди Томмі Мякінена, чотириразового чемпіону світу з ралі, який очолює майстерні TOYOTA GAZOO Racing WRC в Пуполі, Фінляндія, входять дуже віддані спеціалісти та справжні любителі ралі.</p>

            <p>Разом з Yaris WRC вони створюють потужний тандем – ми вже не можемо дочекатися початку сезону!</p>

        </div>


        <div class="parallax_block text-center">
            <img class="parallax_image" src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/9-NUR-C-HR-Pit_tcm-3046-778444.jpg" alt="photo">
        </div>


        <div class="body container right_side">
            <h4>Найскладніший марафон світу</h4>

            <p>Вперше GAZOO Racing взяла участь у чемпіонаті на витривалість "24 години Нюрнбургрінгу" у 2007 році. У цьому чемпіонаті, який вважається найскладнішим марафоном у світі, що проходив на 25-кілометровому треку, відомому як «Зелене Пекло», що у Німеччині, змагалися як заводські команди, так і самостійні.</p>
<!--        </div>-->

            <img src="//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/10-NUR-Toyota-C-HR_tcm-3046-778447.jpg" alt="photo">

<!--        <div class="body container right_side">-->
            <p>Цього року в десятому перегоні за нашої участі та 44-му перегоні взагалі до команди TOYOTA GAZOO Racing увійдуть три автомобілі: зовсім новий Toyota C-HR Racing, Lexus RC та Lexus RC F. Toyota C-HR Racing – це адаптована для ралі версія кросовера Toyota C-HR. Він буде керований командою з чотирьох водіїв. Після 24 виснажливих годин команда посіла вельми задовільне 84-те місце у перегонах та третє місце у класі.</p>
<!--        </div>-->

            <img src="//t1-cms-1.images.toyota-europe.com/toyotaone/uaua/11-NUR-Mosaic_tcm-3046-778448.jpg" alt="photo">

<!--        <div class="body container right_side">-->
            <p>Окрім неоціненної зворотної інформації для безперервного розвитку наших дорожних автомобілів, перегони також дають змогу професійно розвиватися нашому персоналу. Щороку наші штатні інженери та механіки залучаються до розроблення гоночних автомобілів, які братимуть участь у перегонах цього року, а також беспосередьо під час самих перегонів. Це дає можливість набувати безцінних знань, якими можна поділитися з колегами з метою вдосконалення та покращення виробництва автомобілів у майбутньому.</p>
        </div>


        <div class="parallax_block text-center">
            <img class="parallax_image" src="//t1-cms-3.images.toyota-europe.com/toyotaone/uaua/Parallax-5_tcm-3046-778455.jpg" alt="photo">
        </div>



        <div class="body container right_side">
            <h4>Проект Five Continents Drive Project</h4>

            <p>Народжений із взаємного захоплення приймати виклики, які встановлює автоспорт, проект Toyota 5 Continents Drive Project вимагає від працівників Toyota мандрувати п'ятьма континентами за кермом Toyota до кінця 2020 року. Нещадний марафон крізь культури та клімати надає нашим працівникам особистого досвіду, який відкриває сутність концепції "задоволення від водіння". Це досвід, на якому ми можемо зосередитися, щоб створювати кращі автомобілі сьогодні та у майбутньому.</p>

            <p>Поряд з короткостроковими цілями, такими як цьогорічна перемога у 24 годинах Ле-Ману, після такої близької перемоги минулого разу, та багатонадійне повернення до WRC, важливо пом'ятати, що ми продовжуємо впроваджувати тенденції GAZOO в усе, що ми робимо, та ділитися радістю перегонів із нашими покупцями й автолюбителями – тими людьми, які розділяють з нами захоплення автоспортом.</p>
        </div>





    </section>
</template>

<script>
    import $ from "jquery"

    export default {
        name: "ToyotaGazooRacing",


        data() {
            return {
                showVideo: false,

                scrollTop: 0,
                windowTop: 0,
                windowBottom: 0,

            }
        },

        metaInfo() {
        return {
            title:  `Toyota | Команда TOYOTA GAZOO Racing | Toyota Nikolaev`,
            meta: [
                {
                    vmid: "title",
                    property: "og:title",
                    content: `Toyota | Команда TOYOTA GAZOO Racing | Toyota Nikolaev`
                },
                {
                    vmid: "description",
                    name: "description",
                    content: `На гоночних треках або ділянках ралі по всьому світу є ціла низка автомобільних перегонів, які запалюють автолюбітелів. Сьогодні ми об&#39;єднали всі наші міжнародні заходи під одною назвою: TOYOTA GAZOO Racing.`
                },
                {
                    vmid: "description",
                    property: "og:description",
                    content: `На гоночних треках або ділянках ралі по всьому світу є ціла низка автомобільних перегонів, які запалюють автолюбітелів. Сьогодні ми об&#39;єднали всі наші міжнародні заходи під одною назвою: TOYOTA GAZOO Racing.`
                },
                {
                    vmid: "keywords",
                    name: "keywords",
                    content: `Toyota Gazoo Racing, автоспорт, C-HR, автосервіс, Чемпіонату світу з ралі, Чемпіонат світу на витривалість, 24 години Нюрбургрингу, 24 години Ле-Ману, TS050 Hybrid, Yaris WRC, motorsports, garage, world rally championship, world endurance championship, Nurburgring 24 hours, 24 hours of Le Mans, Sports events, Heritage, Yaris`
                },
                {
                    vmid: "keywords",
                    property: "og:keywords",
                    content: `Toyota Gazoo Racing, автоспорт, C-HR, автосервіс, Чемпіонату світу з ралі, Чемпіонат світу на витривалість, 24 години Нюрбургрингу, 24 години Ле-Ману, TS050 Hybrid, Yaris WRC, motorsports, garage, world rally championship, world endurance championship, Nurburgring 24 hours, 24 hours of Le Mans, Sports events, Heritage, Yaris`
                },
            ],
        }
    },

        created() {
            this.windowTop = window.scrollY;
            this.windowBottom = window.innerHeight + this.windowTop;

        },

        mounted() {
            $(window).on('scroll', () => {this.checkParallax();} );
            // $(window).on('scroll', this.parallax());
        },

        methods: {
            openVideo() {
                this.showVideo = !this.showVideo;
                console.log(this.showVideo);
            },




            checkParallax() {
                this.windowBottom = window.innerHeight + this.windowTop;
                let blocks = document.querySelectorAll('.parallax_block');
                // console.log( blocks );

                blocks.forEach( (block) => {
                    if (block.getBoundingClientRect().top + window.scrollY < window.scrollY + window.innerHeight) {
                        console.log( block.getBoundingClientRect().top + window.scrollY );
                        this.parallax( block );
                    }
                });


            },

            // checkParallax() {
            //     this.windowBottom = window.innerHeight + this.windowTop;
            //     // let blocks = $('.parallax_block');
            //     console.log($('.parallax_block') );
            //
            //     $.each( $('.parallax_block'), function() {
            //         // console.log( $(this).offset().top );
            //         if ( $(this).offset().top < window.scrollY + window.innerHeight ) {
            //                     // console.log( $(this).offset().top);
            //                     this.parallax( $(this) );
            //                 }
            //     });
            // },

            parallax(block) {
                let blockTop = block.getBoundingClientRect().top + window.scrollY;
                let blockEnd = blockTop + block.innerHeight;

                let img = block.querySelector('.parallax_image');
                let heightImg = img.innerHeight;
                img.style.top = -heightImg + 'px';

                this.scrollTop = window.scrollY;
                this.windowTop = window.scrollY;
                this.windowBottom = window.innerHeight + this.windowTop;


                if ( blockTop < this.windowBottom  &&  blockEnd > this.windowTop ) {
                    img.style.top = -heightImg + this.scrollTop/2 + 'px';
                }

            },

            // parallax() {
            //     let blockTop = $('.parallax_block').offset().top;
            //     let blockEnd = blockTop + $('.parallax_block').height();
            //
            //     let img = $('.parallax_image');
            //     let heightImg = img.height();
            //     img.css('top', -heightImg + 'px');
            //
            //     this.scrollTop = window.scrollY;
            //     this.windowTop = window.scrollY;
            //     this.windowBottom = window.innerHeight + this.windowTop;
            //
            //     if ( blockTop < this.windowBottom  &&  blockEnd > this.windowTop ) {
            //         // console.log(this.scrollTop);
            //         $('.parallax_image').css('top', (-heightImg + this.scrollTop/2) + 'px')
            //     }
            //
            // }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables';

    section.container-fluid {
        margin: 0;
        padding: 0;

        header {
            @include header-xl;
            padding-top: 100px;
            background-image: url(//t1-cms-4.images.toyota-europe.com/toyotaone/uaua/Header_tcm-3046-778346.jpg);

            h1 {
                color: #ffffff;
            }
        }

        .body.container {
            color: $font_color;

            h3 {
                font-size: 2.2rem;
                margin: 68px 0;
            }
            .video {
                margin: 68px 0;
                padding: 0;
                height: 600px;
                .img_button {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-image: url(https://img.youtube.com/vi/AmvjLpmK844/sddefault.jpg);
                    background-repeat: no-repeat;
                    background-position: center center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    &.second {
                        background-image: url(https://img.youtube.com/vi/cpE3U_wSoPA/sddefault.jpg);
                    }
                    img {
                        width: 100%;
                        height: auto;
                    }

                    button.btn.btn-play {
                        display: block;
                        position: absolute;
                        top: calc(50% - 48px);
                        left: calc(50% - 48px);
                        width: 96px;
                        height: 96px;
                        border-radius: 50%;
                        background-color: rgba(0,0,0,0.7);
                        color: #ffffff;
                        font-size: 3rem;
                        padding-left: 10px;
                        box-shadow: 0 0 8px 8px rgba(255,255,255, 0.2);
                    }
                }
                .open-video {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 999;
                    .close {
                        width: 100%;
                        padding: 10px 20px;
                        background-color: #000000;
                        color: #f0f0f0;
                        font-size: 2rem;
                        opacity: 1;
                    }
                    iframe {
                        width: 100%;
                        height: calc(100% - 40px);
                    }
                }

            }

            &.right_side {
                margin-top: 68px;
                /*padding-left: 20%;*/
                text-align: left;
            }

            h4 {
                padding-left: 20%;
                margin-bottom: 40px;
                font-size: 1.8rem;
                font-weight: bold;
            }

            p {
                padding-left: 20%;
                font-size: 1.8rem;
                margin-bottom: 68px;
                margin-top: 68px;
            }

            img {
                width: 100%;
            }
        }

        .parallax_block {
            position: relative;
            margin: 0;
            width: 100vw;
            height: 540px;
            overflow: hidden;
            img.parallax_image {
                width: 100%;
                height: auto;
                display: block;
                position: absolute;
                left: 0;
                z-index: -1;
            }
            h2 {
                color: #ffffff;
                font-size: 4.4rem;
                padding: 50px 0 30px;
            }
            p {
                font-size: 1.6rem;
                color: #ffffff;
                line-height: 26px;
            }
        }

        

    }

    @media (min-width: 992px) and (max-width: 1199.9px) {
        section.container-fluid {
            header {
                @include header-lg;
                padding-top: 100px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                @include header-md;
                padding-top: 100px;
                h1 {
                    img {
                        width: 100%;
                    }
                }
            }

            .body.container {

                h3 {
                    margin: 30px 0;
                }
                .video {
                    margin: 30px 0;
                    height: 56vw;
                    .img_button {
                    }
                }

                &.right_side {
                    margin-top: 68px;
                    text-align: left;
                }

                h4 {
                    padding-left: 0;
                    margin-bottom: 30px;
                }

                p {
                    padding-left: 0;
                    margin-bottom: 30px;
                    margin-top: 30px;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid {
            header {
                @include header-sm;
                padding-top: 50px;
                h1 {
                    img {
                        width: 100%;
                    }
                }
        }

            .body.container {

                h3 {
                    font-size: 2rem;
                    margin: 30px 0;
                }
                .video {
                    width: 100%;
                    margin: 30px 0;
                    height: 56vw;
                    .img_button {
                        width: 100%;
                        img {
                            width: 100% !important;
                        }
                    }
                }

                &.right_side {
                    margin-top: 30px;
                }

                h4 {
                    padding-left: 0;
                    margin-bottom: 30px;
                }

                p {
                    padding-left: 0;
                    margin-bottom: 30px;
                    margin-top: 30px;
                }
            }

            .parallax_block {
                h2 {
                    font-size: 3.0rem;
                    padding: 20px 0 20px;
                }
                p {
                    font-size: 1.5rem;
                    line-height: 22px;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid{
            header {
                @include header-xs;
                h1 {
                    img {
                        width: 100%;
                    }
                }
            }

            .body.container {
                h3 {
                    font-size: 1.8rem;
                    margin: 30px 0;
                }
                .video {
                    width: 100%;
                    padding: 0;
                    margin: 30px 0;
                    height: 56vw;
                    .img_button {
                        width: 100%;
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                }

                &.right_side {
                    margin-top: 30px;
                }

                h4 {
                    padding-left: 0;
                    margin-bottom: 20px;
                }

                p {
                    padding-left: 0;
                    font-size: 1.6rem;
                    margin-bottom: 30px;
                    margin-top: 30px;
                }

                img {
                    width: 100%;
                }
            }

            .parallax_block {
                width: 100%;
                height: auto;
                h2 {
                    color: #ffffff;
                    font-size: 2.5rem;
                    padding: 10px 0;
                }
                p {
                    font-size: 1.2rem;
                    color: #ffffff;
                    line-height: 20px;
                }
            }
        }
    }


</style>