<template>
    <div id="car" class="or-car-container">
        <div class="or-disabled-overlay" style="display:none">
            <div class="or-content or-preloader-modal or-d-flex or-justify-content-center or-align-items-center">
                <div class="or-d-inline-flex or-mx-3">
                    <div class="or-preloader or-d-inline-flex or-mx-auto">
                        <div class="or-loading loading">

                        </div>
                    </div>
                </div>
                <div class="or-d-inline-flex or-description">
                    <span>Дані завантажуються, будь ласка, зачекайте.</span>
                </div>
            </div>
            <div class="or-overlay"></div>
        </div>
        <div class="t1-grey-section or-relative">
            <canvas id="snow" class="" width="1839" height="495"></canvas>
            <div class="container">
                <section class="">
                    <div class="or-car-section">
                        <header class="or-car-header or-pb-2 or-mt-3 or-pt-3 or-pb-md-3">
                            <div class="row"><div class="col-sm-4"><div class="or-relative">
                                <div class="or-car-header-info">
                                    <h1 class="or-d-h1 or-pb-0">Camry</h1>
                                    <h4 class="or-h5">Comfort - Седан бізнес-класу</h4>
                                </div>
                            </div>
                            </div>
                                <div class="text-right or-d-none or-d-lg-block col-sm-3 col-sm-offset-5">
                                    <button type="button" class="btn-link or-text-gray or-mr-0 or-btn-fullscreen">
                                        <span>На весь екран</span>
                                        <i class="icon icon-resize-full or-ml-2 " aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div style="display:block">
                        <div class="row">
                            <div class="or-relative col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-2 col-xs-12">
                                <div class="or-spin-player">
                                    <div class="or-spin-feedback or-spin-rotate" style="position:absolute;z-index:10">
                                        <i class="icon icon-refresh " aria-hidden="true"></i>
                                        <span>Перетягніть, щоб повернути</span>
                                    </div>
                                    <img src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg 1x,
                                              https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2480/height/940/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg 2x"
                                         style="position:absolute;top:0;left:0;pointer-events:none;user-select:none;width:100%;height:auto;opacity:0;transition:opacity 0.3s;z-index:5"
                                         alt="previous">
                                    <img src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1160/height/446/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg 1x,
                                              https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2480/height/940/scale-mode/1/padding/10/background-colour/F0F0F0/image-quality/75/day-exterior-3_8W7_FA20.jpg 2x"
                                         sizes=""
                                         alt="Frame 3"
                                         style="position:absolute;top:0;left:0;pointer-events:none;user-select:none;width:100%;height:auto;opacity:1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:none">
                        <div class="or-spin-interior interior-premium or-outside-box">
                            <div class="or-spin-gallery">
                                <div class="or-spin-images">
                                    <img src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg 1x,
                                             https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2460/height/1094/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg 2x"
                                         sizes=""
                                         class="or-img-fluid or-spin-img"
                                         style="position:absolute;top:0;left:0;pointer-events:none;user-select:none;width:100%;height:auto;transition:opacity 0.3s;opacity:0;z-index:5"
                                         alt="Interior gallery image">
                                    <img alt="Interior premium spin"
                                         class="or-img-fluid or-spin-img"
                                         style="transition:margin-left 0.3s;margin-left:0"
                                         src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg 1x,
                                             https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2460/height/1094/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-0_8W7_FA20.jpg 2x"
                                         sizes="">
                                    <img alt="Interior premium spin"
                                         class="or-img-fluid or-spin-img"
                                         style="transition:margin-left 0.3s;margin-left:100%"
                                         src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-1_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-1_8W7_FA20.jpg 1x,
                                             https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2460/height/1094/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-1_8W7_FA20.jpg 2x"
                                         sizes="">
                                    <img alt="Interior premium spin"
                                         class="or-img-fluid or-spin-img"
                                         style="transition:margin-left 0.3s;margin-left:100%"
                                         src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-2_8W7_FA20.jpg"
                                         srcset="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1230/height/547/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-2_8W7_FA20.jpg 1x,
                                             https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/2460/height/1094/scale-mode/1/padding/0/background-colour/F0F0F0/image-quality/75/static-day-interior-2_8W7_FA20.jpg 2x"
                                         sizes="">
                                </div>
                                <nav class="or-spin-nav">
                                    <a class="or-nav-item or-active">
                                        <span class="sr-only">1</span>
                                    </a>
                                    <a class="or-nav-item">
                                        <span class="sr-only">2</span>
                                    </a>
                                    <a class="or-nav-item">
                                        <span class="sr-only">3</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="row">
                    <div class="text-center col-sm-12">
                        <div class="or-tabs btn-group">
                            <button type="button" class="or-btn-default or-tab or-btn-active btn btn-link">
                                <span>Колір</span>
                            </button>
                            <button type="button" class="or-btn-default or-tab btn btn-link">
                                <span>Колеса</span>
                            </button>
                            <button type="button" class="or-btn-default or-tab btn btn-link">
                                <span>Інтер'єр</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="or-panel or-personalize-panel panel panel-default">
                            <div class="panel-body">
                                <div class="or-row">
                                    <div class="or-col-md-9 or-order-1 or-order-md-2">
                                        <nav class="or-slickslider or-swatches colour">
                                            <div class="slick-initialized slick-slider">
                                                <div class="slick-list">
                                                    <div class="slick-track  slick-animated"
                                                         style="width: 616px; left: 0px; right: auto; margin-left: 0px; margin-right: auto;">
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current selected">
                                                                <div class="or-swatch-title or-small">Металік</div>
                                                                <a class="or-swatch-link" href="#Темно-синій металік (8W7)">
                                                                        <span class="or-swatch-item" style="background-image:url(//t1-carassets.toyota-europe.com/c2375475-4cb7-4332-b68a-ea0739ecb570.JPG)">
                                                                            <span class="or-swatch-active">
                                                                                <i class="icon icon-ok " aria-hidden="true"></i>
                                                                            </span>
                                                                        </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current "><a class="or-swatch-link" href="#Чорний металік (218)">
                                                                    <span class="or-swatch-item"
                                                                          style="background-image:url(//t1-carassets.toyota-europe.com/8f0c43d2-90d7-4a76-8303-033c448c2560.JPG)">

                                                                    </span>
                                                            </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current ">
                                                                <a class="or-swatch-link" href="#Бежевий металік (4X1)">
                                                                        <span class="or-swatch-item"
                                                                              style="background-image:url(//t1-carassets.toyota-europe.com/e65e0089-eafc-46ff-bc3c-f91846ce99ee.JPG)">
                                                                        </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current ">
                                                                <a class="or-swatch-link" href="#Сріблястий металік (1F7)">
                                                                        <span class="or-swatch-item" style="background-image:url(//t1-carassets.toyota-europe.com/05333956-36fc-4c17-95a2-3de514269d0f.JPG)">

                                                                        </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current "><a class="or-swatch-link" href="#Коричневий металік (4X7)">
                                                                    <span class="or-swatch-item" style="background-image:url(//t1-carassets.toyota-europe.com/eee65758-a2b9-49ba-9bad-e51e840c5b8b.JPG)">

                                                                    </span>
                                                            </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current ">
                                                                <a class="or-swatch-link" href="#Червоний металік (3U5)">
                                                                        <span class="or-swatch-item"
                                                                              style="background-image:url(//t1-carassets.toyota-europe.com/b6433f4d-ccf4-453d-9e5c-083aedbf2fb5.JPG)"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="or-swatches-colour slick-slide " style="width: 88px;">
                                                            <div class="or-swatch slick-current ">
                                                                <div class="or-swatch-title or-small">Перламутр</div>
                                                                <a class="or-swatch-link" href="#Білий (089)">
                                                                        <span class="or-swatch-item"
                                                                              style="background-image:url(//t1-carassets.toyota-europe.com/c9d8d6eb-92db-4971-85a4-0c3a3f3ccd91.JPG)"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="or-col-md-3 or-order-2 or-order-md-1">
                                        <div class="row">
                                            <div class="product-description col-sm-12 col-xs-6">
                                                <div class="or-pb-1">
                                                    <strong>
                                                        <span class="product-title">Темно-синій металік (8W7)</span>
                                                    </strong>
                                                </div>
                                            </div>
                                            <div class="or-text-right or-text-md-left col-sm-12 col-xs-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="or-pt-4 or-car-options">
            <div class="or-container">
                <div class="or-d-xl-flex or-row">
                    <div class="or-col-sm-12 or-col-lg-8">
                        <section class="or-car-extras">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h3 class="or-h2 or-d-h2 or-d-inline-block or-title-font-bold">Найпопулярніші</h3>
                                    <p class="or-mt-3 or-mb-4 or-pt-1">Відкрийте для себе наші найпопулярніші аксесуари для Camry</p>
                                </div>
                            </div>
                            <div class="or-result-group or-basic or-d-flex or-flex-wrap or-align-self-stretch row">
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100">
                                        <div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox"><input type="checkbox" readonly="">
                                                    <label class="check" for="6fbdf50c-44ef-483f-b6d9-7ec25a2035e1"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;"><svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                        <g fill="#A8AAAC" opacity="0.5">
                                                            <g fill-rule="evenodd" clip-rule="evenodd">
                                                                <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z">

                                                                </path>
                                                                <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path></g><path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z">

                                                        </path>
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG" alt="Накладки порогів з ілюмінацією" class="or-img-fluid or-img-square " style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0"><div class="or-card-title or-small">
                                                <div class="">
                                                    <div class="or-font-bold or-d-inline-block">Накладки порогів з ілюмінацією</div>
                                                </div>
                                            </div>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100"><div class="product product-grid">
                                        <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                            <div class="or-checkbox">
                                                <input type="checkbox" readonly="">
                                                <label class="check" for="ca3d671f-1648-4fa7-8753-15eff41c1a3f"></label>
                                            </div>
                                            <div class="or-img-loader">
                                                <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                    <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                        <g fill="#A8AAAC" opacity="0.5">
                                                            <g fill-rule="evenodd" clip-rule="evenodd">
                                                                <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path><path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path></g><path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z">

                                                        </path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <img src="//t1-carassets.toyota-europe.com/9b31bc45-2228-40dc-9f60-1490680a9b77.JPG"
                                                     alt="Секретні гайки"
                                                     class="or-img-fluid or-img-square "
                                                     style="z-index:0">
                                            </div>
                                        </div>
                                        <header class="or-card-header or-border-0">
                                            <div class="or-card-title or-small">
                                                <div class="or-pr-3 or-position-relative">
                                                    <div class="or-font-bold or-d-inline-block">Секретні гайки</div>
                                                    <div class="or-item-description">
                                                        <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                            <a href="#" class="or-link or-has-icon">
                                                                <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    </article>
                                </div>
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100">
                                        <div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="1313baf8-339e-4aef-810a-bb5c54510148"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                        <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                            <g fill="#A8AAAC" opacity="0.5">
                                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                                    <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z">

                                                                    </path>
                                                                    <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                </g>
                                                                <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG"
                                                         alt="Гумові килимки салона, чорні"
                                                         class="or-img-fluid or-img-square "
                                                         style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0">
                                                <div class="or-card-title or-small">
                                                    <div class="or-pr-3 or-position-relative">
                                                        <div class="or-font-bold or-d-inline-block">Гумові килимки салона, чорні</div>
                                                        <div class="or-item-description">
                                                            <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                <a href="#" class="or-link or-has-icon">
                                                                    <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100">
                                        <div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="6bd7285f-b968-4973-a8dd-ed2ab517ac08"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                        <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                            <g fill="#A8AAAC" opacity="0.5">
                                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                                    <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z">

                                                                    </path>
                                                                    <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                </g>
                                                                <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG"
                                                         alt="Вертикальна сітка кріплення вантажу"
                                                         class="or-img-fluid or-img-square "
                                                         style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0">
                                                <div class="or-card-title or-small">
                                                    <div class="">
                                                        <div class="or-font-bold or-d-inline-block">Вертикальна сітка кріплення вантажу</div>
                                                    </div>
                                                </div>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100">
                                        <div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="cb1ba02b-046a-472c-88f3-89dc00987de9"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;"><svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                        <g fill="#A8AAAC" opacity="0.5">
                                                            <g fill-rule="evenodd" clip-rule="evenodd">
                                                                <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path></g><path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG" alt="Дефлектор капота" class="or-img-fluid or-img-square " style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0">
                                                <div class="or-card-title or-small">
                                                    <div class="">
                                                        <div class="or-font-bold or-d-inline-block">Дефлектор капота</div>
                                                    </div>
                                                </div>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                                <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                    <article class="or-card or-card-option or-w-100">
                                        <div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="bf2f076d-ed34-44ab-8fd3-a6fd4757d16e"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                        <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                            <g fill="#A8AAAC" opacity="0.5">
                                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                                    <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                    <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                </g>
                                                                <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG"
                                                         alt="Дефлектор вікон з хромованим окантуванням "
                                                         class="or-img-fluid or-img-square "
                                                         style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0">
                                                <div class="or-card-title or-small"
                                                ><div class="">
                                                    <div class="or-font-bold or-d-inline-block">Дефлектор вікон з хромованим окантуванням </div>
                                                </div>
                                                </div>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section class="or-car-extras">
                            <div class="row">
                                <div class="or-pb-4 col-sm-12">
                                    <div class="row">
                                        <div class="or-mb-2 col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                            <div class="or-bb-1">
                                                <button type="button" class="or-extras-filter-toggle-button">
                                                        <span class="or-extras-filter-icon">
                                                            <i class="icon icon-filter filter" aria-hidden="true"></i>
                                                        </span>
                                                    <span class="or-font-bold">Фільтр аксесуарів</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="text-right col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form or-mb-3 or-mb-md-0">
                                                <div class="or-search">
                                                    <label class="sr-only">Пошук</label>
                                                    <input type="text" id="searchInput" value="" placeholder="Шукати за назвою">
                                                    <a href="" class="or-icon-search">
                                                        <i class="icon icon-search " aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h3 class="or-h2 or-d-h2 or-d-inline-block">Всі аксесуари</h3>
                                    <p class="or-lead lead compact">Перегляньте та додайте додаткові аксесуари до вашого автомобіля</p>
                                </div>
                            </div>
                            <section class="or-result-group or-basic or-pb-3">
                                <header class="section-header or-pb-3 row">
                                    <div class="col-xs-8">
                                        <h4 class="or-h5 compact">Екстер’єр</h4>
                                    </div
                                    ><div class="text-right col-xs-4">
                                    <span>10 аксесуарів</span>
                                </div>
                                </header>
                                <div class="or-result-group or-basic or-d-flex or-flex-wrap or-align-self-stretch row">
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="fcbfcb65-689d-4d70-9d96-8f38c7abfcca"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z">
                                                                        </path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z">

                                                                        </path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/9fbb5166-d006-41c0-9a8f-2539a1b6453d.JPG"
                                                             alt="Чохол для шин"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="">
                                                            <div class="or-font-bold or-d-inline-block">Чохол для шин</div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly=""
                                                        ><label class="check" for="ccba2d0d-d5bf-4880-b557-0587dcaf5421"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/3ecc1883-c7e6-4b77-8834-44817958a08e.PNG" alt="Бризковики" class="or-img-fluid or-img-square " style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Бризковики</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon">
                                                                        <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid"><div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="bf2f076d-ed34-44ab-8fd3-a6fd4757d16e">

                                                    </label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;"><svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                        <g fill="#A8AAAC" opacity="0.5">
                                                            <g fill-rule="evenodd" clip-rule="evenodd"><path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path></g><path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                        </g>
                                                    </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/f3ad94a4-393c-4643-9e28-4da573a1f54f.PNG"
                                                         alt="Дефлектор вікон з хромованим окантуванням "
                                                         class="or-img-fluid or-img-square "
                                                         style="z-index:0">
                                                </div>
                                            </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="">
                                                            <div class="or-font-bold or-d-inline-block">Дефлектор вікон з хромованим окантуванням </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100"><div class="product product-grid">
                                            <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                <div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="cb1ba02b-046a-472c-88f3-89dc00987de9"></label>
                                                </div>
                                                <div class="or-img-loader">
                                                    <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                        <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                            <g fill="#A8AAAC" opacity="0.5">
                                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                                    <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                    <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                </g>
                                                                <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <img src="//t1-carassets.toyota-europe.com/170c381a-da3e-4428-acc1-d25a2c73d652.PNG" alt="Дефлектор капота" class="or-img-fluid or-img-square " style="z-index:0">
                                                </div>
                                            </div>
                                            <header class="or-card-header or-border-0">
                                                <div class="or-card-title or-small">
                                                    <div class="">
                                                        <div class="or-font-bold or-d-inline-block">Дефлектор капота</div>
                                                    </div>
                                                </div>
                                            </header>
                                        </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="6545240f-e2a6-428f-be70-6695d2dfa571"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/2f52dcc1-cf50-43c4-aa35-3b111ac809a1.jpg"
                                                             alt="Засіб для захисту легкосплавних дисків Toyota ProTect"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Засіб для захисту легкосплавних дисків Toyota ProTect</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon">
                                                                        <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article
                                        ></div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="294f61cd-d3fd-490f-90e0-27c43cdf4b43"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/ddaee2dc-f31f-4840-911a-4a2df3f891c4.jpg"
                                                             alt="Засіб для тривалого захисту кузова Toyota ProTect"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Засіб для тривалого захисту кузова Toyota ProTect</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon"><i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-pt-3 or-pb-4 text-center clearboth col-sm-12">
                                        <button class="btn btn-toggle btn-simple or-btn">
                                            <span>Показати аксесуари екстер'єру</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section class="or-result-group or-basic or-pb-3">
                                <header class="section-header or-pb-3 row">
                                    <div class="col-xs-8">
                                        <h4 class="or-h5 compact">Інтер’єр</h4>
                                    </div>
                                    <div class="text-right col-xs-4">
                                        <span>9 аксесуарів</span>
                                    </div>
                                </header>
                                <div class="or-result-group or-basic or-d-flex or-flex-wrap or-align-self-stretch row">
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="ac6e4330-2566-4c8c-a006-e72211fd5657"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd"><path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path><path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path></g><path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/4e6580ff-e064-4937-a456-99cb936cbea0.JPG" alt="Універсальний тримач для планшета" class="or-img-fluid or-img-square " style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Універсальний тримач для планшета</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon">
                                                                        <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer"><div class="or-checkbox">
                                                    <input type="checkbox" readonly="">
                                                    <label class="check" for="6fbdf50c-44ef-483f-b6d9-7ec25a2035e1"></label>
                                                </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/66a2b9c9-30ad-4af0-8ea3-e32d4f7cc896.JPG" alt="Накладки порогів з ілюмінацією" class="or-img-fluid or-img-square " style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="">
                                                            <div class="or-font-bold or-d-inline-block">Накладки порогів з ілюмінацією</div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="c7501230-b5f1-4264-bd91-b3aee0aa16b0"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/468f660b-84c0-48cb-a8f6-8dc8bd5a48f8.JPG"
                                                             alt="Попільничка&nbsp;— маленький бокс"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Попільничка&nbsp;— маленький бокс</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon">
                                                                        <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="6bd7285f-b968-4973-a8dd-ed2ab517ac08"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"><g fill="#A8AAAC" opacity="0.5">
                                                                <g fill-rule="evenodd" clip-rule="evenodd">
                                                                    <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                    <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                </g>
                                                                <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                            </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/520d8111-e01f-4ae4-9a02-ffe021a5a1cb.JPG" alt="Вертикальна сітка кріплення вантажу" class="or-img-fluid or-img-square " style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="">
                                                            <div class="or-font-bold or-d-inline-block">Вертикальна сітка кріплення вантажу</div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="9029724c-1379-4ae9-a435-00eff1267bfa"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/75a95b2b-a0ee-4936-b473-f9f5e2bb4a7a.JPG"
                                                             alt="Органайзер"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="">
                                                            <div class="or-font-bold or-d-inline-block">Органайзер</div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-col-xs-12 or-col-sm-6 or-col-md-4 or-result-col or-d-flex">
                                        <article class="or-card or-card-option or-w-100">
                                            <div class="product product-grid">
                                                <div class="or-card-img or-img-placeholder form or-cursor-pointer">
                                                    <div class="or-checkbox">
                                                        <input type="checkbox" readonly="">
                                                        <label class="check" for="1313baf8-339e-4aef-810a-bb5c54510148"></label>
                                                    </div>
                                                    <div class="or-img-loader">
                                                        <div style="background-color: rgb(255, 255, 255); top: 0px; width: 100%; height: 100%; position: absolute; z-index: 1; transition: opacity 0.3s ease 0s; opacity: 0;">
                                                            <svg viewBox="0 0 126 126" style="z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
                                                                <g fill="#A8AAAC" opacity="0.5">
                                                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                                                        <path d="M106.698 21h3.552c8.698 0 15.75 7.052 15.75 15.75v63c0 8.699-7.052 15.75-15.75 15.75h-94.5a15.76 15.76 0 01-4.21-.569L21.6 105h88.65a5.25 5.25 0 005.25-5.25v-63a5.25 5.25 0 00-5.25-5.25H96.06L106.699 21zm-96.147 79.485a5.303 5.303 0 01-.051-.735v-63c0-2.9 2.35-5.25 5.25-5.25h64.668L91.052 21H15.75C7.052 21 0 28.052 0 36.75v63c0 3.182.943 6.143 2.566 8.619l7.985-7.884z"></path>
                                                                        <path d="M75.742 51.556C80.762 55.394 84 61.444 84 68.25c0 11.598-9.402 21-21 21-6.904 0-13.03-3.332-16.858-8.475l7.623-7.525A10.498 10.498 0 0063 78.75c5.799 0 10.5-4.701 10.5-10.5 0-3.94-2.17-7.373-5.38-9.17l7.622-7.524zM42.031 69.402c-.02-.381-.031-.765-.031-1.152 0-11.598 9.402-21 21-21 .477 0 .95.016 1.419.047L42.03 69.402zM85.72 26.265l7.932-7.832-3.324-7.123a10.5 10.5 0 00-9.515-6.06H45.187a10.5 10.5 0 00-9.515 6.06L26.25 31.5h11.587l7.35-15.75h35.626l4.907 10.515zM96.06 31.5l2.526-2.493L99.75 31.5h-3.69z"></path>
                                                                    </g>
                                                                    <path d="M119.663 19.913a5.25 5.25 0 00-7.425-7.425L10.313 114.413a5.25 5.25 0 007.425 7.425L119.663 19.913z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img src="//t1-carassets.toyota-europe.com/0821eb1c-a388-4b47-9d82-d89f599e71d8.JPG"
                                                             alt="Гумові килимки салона, чорні"
                                                             class="or-img-fluid or-img-square "
                                                             style="z-index:0">
                                                    </div>
                                                </div>
                                                <header
                                                        class="or-card-header or-border-0">
                                                    <div class="or-card-title or-small">
                                                        <div class="or-pr-3 or-position-relative">
                                                            <div class="or-font-bold or-d-inline-block">Гумові килимки салона, чорні</div>
                                                            <div class="or-item-description">
                                                                <div class="or-d-inline-block or-relative or-list-with-bulletpoints">
                                                                    <a href="#" class="or-link or-has-icon">
                                                                        <i class="icon icon-info-sign or-text-light or-popover-icon or-icon-lg" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="or-pt-3 or-pb-4 text-center clearboth col-sm-12">
                                        <button class="btn btn-toggle btn-simple or-btn">
                                            <span>Показати аксесуари інтер'єру</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                    <div class="or-col-sm-12 or-col-lg-4 or-d-none or-d-lg-block or-sticky-wrapper">
                        <div class="SidebarWrapperStyles__Wrapper-dqh37f-0 eTvGEk or-fixed-scroll" width="349.984375">
                            <div class="or-d-none or-d-md-block"><div class="or-basket-tabs">
                                <button class="or-basket-tab active">
                                    <span class="or-type">Ціна</span>
                                </button>
                            </div>
                            </div>
                            <div class="or-basket-container or-relative or-basket-customise t1-grey-section">
                                <div class="or-panel-basket">
                                    <header class="or-panel-header or-pb-1">
                                        <p class="or-pb-2 or-basket-description">Camry Седан бізнес-класу Comfort 2,5&nbsp;л Dual VVT-i (181&nbsp;к.&nbsp;с.) 6-ступ. автомат. (Передній привод) </p>
                                        <a href="#" class="or-basket-close or-d-block or-d-lg-none" title="">
                                            <i class="icon icon-remove " aria-hidden="true"></i>
                                        </a>
                                    </header>
                                    <div class="or-panel-body">
                                        <table class="table or-basket-table">
                                            <tbody>
                                            <tr>
                                                <td>Темно-синій металік (8W7)</td>
                                                <td colspan="2" class="text-right or-whitespace-pre">

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Чорна тканина (FA20)</td><td colspan="2" class="text-right or-whitespace-pre">

                                            </td>
                                            </tr>
                                            <tr>
                                                <td>17-дюймові легкосплавні колісні диски з десятьма спицями</td>
                                                <td colspan="2" class="text-right or-whitespace-pre">

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-12">
                                            <div class="or-panel-button"></div>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-12">

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-12">

                                        </div>
                                    </div>
                                    <div class="or-pb-3 visible-sm">
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-md-offset-0 col-sm-6 col-sm-offset-6 col-xs-12">
                                            <a href="?path=summary/b6866060-c84a-4a43-b968-25947907b9cc/97b1f1c6-0aab-4963-a46c-01bc214d6781&amp;u=214de403-424f-466d-bfb0-65a489e097ca&amp;financeOption=cash"
                                               class="btn-block btn btn-action-primary or-mr-0">
                                                <span>Перейти до підсумків</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-12 text-center">
                                        <div class="or-my-3">
                                            <a href="#" class="or-basket-image">
                                                <div class="or-card-car or-car-summary or-mb-0">
                                                    <div class="or-card-img">
                                                        <img src="https://images.toyota-europe.com/ua/product-token/e460cecd-1792-4c02-8749-96bc28a572ae/vehicle/97b1f1c6-0aab-4963-a46c-01bc214d6781/options/16163/width/1140/height/426/scale-mode/0/padding/50/background-colour/f0f0f0/image-quality/75/day-exterior-3_8W7_FA20.jpg"
                                                             class="or-img-fluid "
                                                             alt="Camry Седан бізнес-класу Comfort 2,5&nbsp;л Dual VVT-i (181&nbsp;к.&nbsp;с.) 6-ступ. автомат.">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-8 or-pt-3 or-pb-4">
                        <h2 class="or-h4 or-pb-2 or-text-left or-text-xs or-text-bold or-disclaimer-title">
                            <span>Зверніть увагу</span>
                        </h2>
                        <div class="collapsible-group clearfix">
                            <div class="or-disclaimer or-text-sm collapsible-panel or-not-collapsed-content " id="genericDisclaimer" style="height: 100%;">
                                <div>
                                    <div class="or-text-sm or-description or-pb-1">
                                        <ul>
                                            <li>Конфігуратор автомобілів Toyota призначений для надання користувачам інформації, що відображає специфікацію та вартість автомобілів, що їх цікавлять.</li>
                                            <li>Зображення, що подано у конфігураторі автомобілів, можуть містити додаткове обладнання, яке не входить до складу обладанння типової комплектації. За довідками про актуальні технічні характеристики та наявність просимо звертатися до офіційного дилерського центру Toyota.</li>
                                            <li>Звертаємо вашу увагу на те, що на сайті не вказано ціни на вартість встановлення додаткового обладнання (аксесуарів). </li>
                                            <li>Стосовно додаткового обладнання / аксесуарів вказано ціни, які дилерам рекомендовано не перевищувати (рекомендовані), з урахуванням ПДВ (20%). </li>
                                            <li>Усі ціни вказані без врахування вартості додаткових опцій та/або послуг та спеціальних акцій і пропозицій, які можуть діяти на момент придбання продукції. Інформація може не бути остаточною і підлягає уточненню у відповідного дилерського центру Toyota.</li>
                                            <li>Нами було докладено всіх зусиль до подання точної інформації, але при цьому ми зберігаємо за собою право без попередження вносити зміни до технічних характеристик, складу обладнання та вилучати з асортименту певні позиції. Ця інформація не має трактуватися як безпомилкова, й як така не являє собою ні оферти на продаж конкретного транспортного засобу (або додаткового обладнання / аксесуарів), ані переліку його технічних характеристик. </li>
                                            <li>Усі права зберігаються за правовласником. Назви комплектацій є суто умовними, використовуються виключно заради зручності в розподілі наборів параметрів автомобіля та можуть відрізнятися або бути відсутніми в інших документах або матеріалах.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="t1-grey-section or-py-3 or-py-lg-5">
            <div class="or-container">
                <div class="or-row">
                    <div class="or-col-xs-12 or-col-md-5 or-mb-4 or-mb-md-0">
                        <div class="or-h-100 or-d-md-flex or-flex-column or-justify-content-md-center">
                            <h2 class="or-h2 or-mb-2">
                                <span>Подальші кроки</span>
                            </h2>
                            <p class="or-lead or-color-body lead or-mb-3">
                                <span>Перейдіть до підсумкової сторінки, щоб подивитися повну інформацію про вибраний автомобіль</span>
                            </p>
                            <a href="?path=summary/b6866060-c84a-4a43-b968-25947907b9cc/97b1f1c6-0aab-4963-a46c-01bc214d6781&amp;u=214de403-424f-466d-bfb0-65a489e097ca&amp;financeOption=cash"
                               class="btn btn-action-primary or-align-self-start">
                                <span>Перейти до підсумків</span>
                                <i class="icon icon-chevron-right or-ml-0" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div class="or-col-xs-12 or-col-md-6 col-md-push-1 or-d-md-flex or-align-items-md-center">
                        <img src="https://webcarconfig.toyota-europe.com/toyota/img/toyota-visual.jpg"
                             class="or-img-fluid" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "trash"
    }
</script>

<style scoped>

</style>