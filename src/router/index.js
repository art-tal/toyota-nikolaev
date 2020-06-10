import VueRouter from "vue-router";

import Home from "../components/Home";
import Lineup from "../components/cars/Lineup";

import DownloadBrochures from "../components/sharedLinks/DownloadBrochures";
import FAQ from "../components/sharedLinks/FAQ";
import FormFeedBack from "../components/sharedLinks/FormFeedBack";
import VypadkyShahrajstva from "../components/sharedLinks/VypadkyShahrajstva";


import NewCars from "../components/cars/NewCars";
import Model from "../components/cars/Model";
import SelectModel from "../components/cars/SelectModel";
import EnginesAndCharacteristics from "../components/cars/EnginesAndCharacteristics";
import Prices from "../components/cars/Prices";
import ReliabilityAndGuarantee from "../components/cars/ReliabilityAndGuarantee";

import Equipment from "../components/configurator/Equipment";
import Configurator from "../components/configurator/Configurator";
import Engine from "../components/configurator/options/Engine";
import ColorAndOption from "../components/configurator/ColorAndOption";
import Result from "../components/configurator/Result";
import EditEquipment from "../components/configurator/EditEquipment";
import Colors from "../components/configurator/options/Colors";
import Wheels from "../components/configurator/options/Wheels";
import Interior from "../components/configurator/options/Interior";
import ToResult from "../components/configurator/options/ToResult";
import Price from "../components/configurator/options/Price";
import Accessories from "../components/configurator/options/Accessories";
import Consultation from "../components/configurator/Consultation";
import Step1 from "../components/configurator/consultSteps/Step1";
import Step2 from "../components/configurator/consultSteps/Step2";


// import SouvenirProducts from "../components/cars/SouvenirProducts";
import Insurance from "../components/toBuyers/Insurance";
import Credit from "../components/toBuyers/Credit";
import Corporate_sales from "../components/toBuyers/Corporate_sales";
import Business_car from "../components/toBuyers/Business_car";
import Business_owner from "../components/toBuyers/Business_owner";
import Corporate_clients from "../components/toBuyers/Corporate_clients";
import General from "../components/toBuyers/General";

import SignUpForService from "../components/service/SignUpForService";

import News from "../components/whyToyota/worldOfToyota/News";
import Article from "../components/whyToyota/worldOfToyota/Article";
import WorldOfToyota from "../components/whyToyota/worldOfToyota/WorldOfToyota";
import Toyota2000GT from "../components/whyToyota/worldOfToyota/sportCars/Toyota2000GT";
import ToyotaCelica from "../components/whyToyota/worldOfToyota/sportCars/ToyotaCelica";
import ToyotaSupra from "../components/whyToyota/worldOfToyota/sportCars/ToyotaSupra";
import ToyotaCorolla from "../components/whyToyota/worldOfToyota/sportCars/ToyotaCorolla";
import ToyotaMR2 from "../components/whyToyota/worldOfToyota/sportCars/ToyotaMR2";
import ToyotaGT86 from "../components/whyToyota/worldOfToyota/sportCars/ToyotaGT86";
import IdeasForFuture from "../components/whyToyota/worldOfToyota/sportCars/IdeasForFuture";

import SubMenuNikolaev from "../components/ToyotaInNikolaev/SubMenuNikolaev";
import CustomerService from "../components/ToyotaInNikolaev/CustomerService";
import ToyotaMykolaiv from "../components/ToyotaInNikolaev/ToyotaMykolaiv";
import CarsAvailable from "../components/ToyotaInNikolaev/CarsAvailable";
import Car from "../components/ToyotaInNikolaev/Car";
import Workers from "../components/ToyotaInNikolaev/Workers";
import About from "../components/ToyotaInNikolaev/About";
import Where from "../components/ToyotaInNikolaev/Where";


import Maintenance from "../components/service/maintenance/Maintenance";
import Principles from "../components/service/maintenance/Principles";
import MaintenanceGeneral from "../components/service/maintenance/MaintenanceGeneral";
import Guarantee from "../components/service/maintenance/Guarantee";
import Lubricants from "../components/service/maintenance/Lubricants";
// import Calc from "../components/service/maintenance/Calc";
import SpecialCompany from "../components/service/maintenance/SpecialCompany";

import OriginalAccessories from "../components/service/originalAccessories/OriginalAccessories";
import AccessoriesGeneral from "../components/service/originalAccessories/AccessoriesGeneral";
import EntertainmentSystem from "../components/service/originalAccessories/EntertainmentSystem";
import ToyotaProTect from "../components/service/originalAccessories/ToyotaProTect";
import ToyotaTouch2 from "../components/service/originalAccessories/ToyotaTouch2";
import BabyCarSeats from "../components/service/originalAccessories/BabyCarSeats";

import OriginalSpareParts from "../components/service/OriginalSpareParts/OriginalSpareParts";
import OriginalSparePartsGeneral from "../components/service/OriginalSpareParts/OriginalSparePartsGeneral";
import ChooseOriginal from "../components/service/OriginalSpareParts/ChooseOriginal";
import AirFiltersOfSalon from "../components/service/OriginalSpareParts/AirFiltersOfSalon";
import RechargeableBatteries from "../components/service/OriginalSpareParts/RechargeableBatteries";
import OriginalLamps from "../components/service/OriginalSpareParts/OriginalLamps";
import WiperBlades from "../components/service/OriginalSpareParts/WiperBlades";
import ToyotaAdBlueLiquid from "../components/service/OriginalSpareParts/ToyotaAdBlueLiquid";
import BrakeDiscsAndPads from "../components/service/OriginalSpareParts/BrakeDiscsAndPads";
import OriginalWindshields from "../components/service/OriginalSpareParts/OriginalWindshields";
import FuelSystemCleaner from "../components/service/OriginalSpareParts/FuelSystemCleaner";

import ToyotaAssistance from "../components/service/RoadsideAssistance/ToyotaAssistance";
import ToyotaAssistancePlus from "../components/service/RoadsideAssistance/ToyotaAssistancePlus";

import OlympicPartnership from "../components/whyToyota/worldOfToyota/OlympicPartnership";
import ToyotaGazooRacing from "../components/whyToyota/worldOfToyota/ToyotaGazooRacing";
import ToyotaAtRally from "../components/whyToyota/worldOfToyota/ToyotaAtRally";
import HistoryOfToyotaSportsCars from "../components/whyToyota/worldOfToyota/sportCars/HistoryOfToyotaSportsCars";
import ToyodaAA from "../components/whyToyota/worldOfToyota/ToyodaAA";
import WarrantyService from "../components/whyToyota/guarantee/WarrantyService";
import QualityGuarantee from "../components/whyToyota/guarantee/QualityGuarantee";
import ClientsCharter from "../components/whyToyota/guarantee/ClientsCharter";
import HybridInnovations from "../components/whyToyota/hybridInnovations/HybridInnovations";
import HybridDrive from "../components/whyToyota/hybridInnovations/HybridDrive";
import ToyotaIchiban from "../components/ToyotaInNikolaev/ToyotaIchiban";
import CorporateResponsibility from "../components/ToyotaInNikolaev/CorporateResponsibility";
import Ecology from "../components/whyToyota/ecology/Ecology";
import EnvironmentalMission from "../components/whyToyota/ecology/EnvironmentalMission";
import BetterAir from "../components/whyToyota/ecology/BetterAir";
import BestPlanet from "../components/whyToyota/ecology/BestPlanet";
import BetterLife from "../components/whyToyota/ecology/BetterLife";
import JustBetter from "../components/whyToyota/ecology/JustBetter";
import ISO from "../components/whyToyota/ecology/ISO";


// import TheLookingAround from "@/components/cars/TheLookingAround";



export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },

        {
            path: '/lineup',
            name: 'Lineup',
            component: Lineup,
        },

        {
            path: '/new_cars',
            name: 'new_cars',
            component: NewCars,
        },

        {
            path: '/model',
            name: 'model',
            component: Model,
        },

        {
            path: '/download_brochures',
            name: 'download_brochures',
            component: DownloadBrochures,
        },

        {
            path: '/faq',
            name: 'faq',
            component: FAQ,
        },

        {
            path: '/form_feed_back',
            name: 'form_feed_back',
            component: FormFeedBack,
        },

        {
            path: '/vypadky_shahrajstva',
            name: 'vypadky_shahrajstva',
            component: VypadkyShahrajstva,
        },





        {
            path: '/select_model/:id',
            name: 'selectModel',
            component: SelectModel,
            children: [

                {
                    path: '/select_model/:id/equipment',
                    name: 'Equipment',
                    component: Equipment,
                },

            ]
        },

        {
            path: '/engines_and_characteristics/:id',
            name: 'engines_and_characteristics',
            component: EnginesAndCharacteristics,
        },

        {
            path: '/prices/:id',
            name: 'prices',
            component: Prices,
        },

        {
            path: '/reliability_and_guarantee/:id',
            name: 'reliability_and_guarantee',
            component: ReliabilityAndGuarantee,
        },


        {
            path: '/configurator',
            // path: '/configurator/:id_params',
            name: 'Configurator',
            component: Configurator,
            children: [
                {
                    path: '/configurator/equipment',
                    name: 'Equipment',
                    component: Equipment,
                },
                {
                    path: '/configurator/selected_engine',
                    name: 'selected_engine',
                    component: Engine
                },
                {
                    path: '/configurator/color_and_option',
                    name: "color_and_option",
                    component: ColorAndOption,
                    children: [
                        {
                            path: '/configurator/color_and_option/colors',
                            name: 'colors',
                            component: Colors,
                        },
                        {
                            path: '/configurator/color_and_option/wheels',
                            name: 'wheels',
                            component: Wheels,
                        },
                        {
                            path: '/configurator/color_and_option/interior',
                            name: 'interior',
                            component: Interior
                        },
                        {
                            path: '/configurator/color_and_option/accessories',
                            name: "accessories",
                            component: Accessories,
                        },
                        {
                            path: '/configurator/color_and_option/price',
                            name: "price",
                            component: Price,
                        },
                        {
                            path: '/configurator/color_and_option/to_result',
                            name: 'to_result',
                            component: ToResult,
                        }
                    ]
                },
                {
                    path: '/configurator/result',
                    name: 'result',
                    component: Result,
                },
                {
                    path: '/configurator/edit_equipment/:id',
                    name: 'edit_equipment',
                    component: EditEquipment,
                },



            ]
        },

        {
            path: "/consultation",
            name: 'consultation',
            component: Consultation,
            children: [
                {
                    path: "/consultation/step_1",
                    name: "step_1",
                    component: Step1,
                },
                {
                    path: "/consultation/step_2",
                    name: "step_2",
                    component: Step2,
                },
            ]
        },




        {
            path: "/insurance",
            name: "insurance",
            component: Insurance
        },

        {
            path: "/credit",
            name: "credit",
            component: Credit,
        },

        {
            path: "/corporate_sales",
            name: "corporate_sales",
            component: Corporate_sales,
            children: [
                {
                    path: "/corporate_sales/general",
                    name: "general",
                    component: General,
                },
                {
                    path: "/corporate_sales/business_car",
                    name: "business_car",
                    component: Business_car,
                },
                {
                    path: "/corporate_sales/business_owner",
                    name: "business_owner",
                    component: Business_owner,
                },
                {
                    path: "/corporate_sales/corporate_clients",
                    name: "corporate_clients",
                    component: Corporate_clients,
                },
                // {
                //     path: "/corporate_sales/special_solutions",
                //     name: "special_solutions",
                //     component: Special_solutions,
                // },
            ],
        },


        {
            path: "/service",
            name: "service",
            component: SignUpForService,
        },

        {
            path: "/maintenance",
            name: "maintenance",
            component: Maintenance,
            children: [
                {
                    path: "/maintenance/maintenance_general",
                    name: "maintenance_general",
                    component: MaintenanceGeneral,
                },
                {
                    path: "/maintenance/principles",
                    name: "principles",
                    component: Principles,
                },
                {
                    path: "/maintenance/guarantee",
                    name: "guarantee",
                    component: Guarantee,
                },
                {
                    path: "/maintenance/lubricants",
                    name: "lubricants",
                    component: Lubricants,
                },
                // {
                //     path: "/maintenance/calc",
                //     name: "calc",
                //     component: Calc,
                // },
                {
                    path: "/maintenance/special_company",
                    name: "special_company",
                    component: SpecialCompany,
                },
            ],
        },

        {
            path: "/original_accessories",
            name: "original_accessories",
            component: OriginalAccessories,
            children: [
                {
                    path: "/original_accessories/accessories_general",
                    name: "accessories_general",
                    component: AccessoriesGeneral,
                },
                {
                    path: "/original_accessories/entertainment_system",
                    name: "entertainment_system",
                    component: EntertainmentSystem,
                },
                {
                    path: "/original_accessories/toyota_pro_tech",
                    name: "toyota_pro_tech",
                    component: ToyotaProTect,
                },
                {
                    path: "/original_accessories/toyota_touch2",
                    name: "toyota_touch2",
                    component: ToyotaTouch2,
                },
                {
                    path: "/original_accessories/baby_car_seats",
                    name: "baby_car_seats",
                    component: BabyCarSeats,
                }
            ],
        },

        {
            path: "/original_spare_parts",
            name: "original_spare_parts",
            component: OriginalSpareParts,
            children: [
                {
                    path: "/original_spare_parts/original_spare_parts_general",
                    name: "original_spare_parts_general",
                    component: OriginalSparePartsGeneral,
                },
                {
                    path: "/original_spare_parts/choose_original",
                    name: "choose_original",
                    component: ChooseOriginal,
                },
                {
                    path: "/original_spare_parts/air_filters_of_salon",
                    name: "air_filters_of_salon",
                    component: AirFiltersOfSalon,
                },
                {
                    path: "/original_spare_parts/rechargeable_batteries",
                    name: "rechargeable_batteries",
                    component: RechargeableBatteries,
                },
                {
                    path: "/original_spare_parts/original_lamps",
                    name: "original_lamps",
                    component: OriginalLamps,
                },
                {
                    path: "/original_spare_parts/wiper_blades",
                    name: "wiper_blades",
                    component: WiperBlades,
                },
                {
                    path: "/original_spare_parts/toyota_ad_blue_liquid",
                    name: "toyota_ad_blue_liquid",
                    component: ToyotaAdBlueLiquid,
                },
                {
                    path: "/original_spare_parts/brake_discs_and_pads",
                    name: "brake_discs_and_pads",
                    component: BrakeDiscsAndPads,
                },
                {
                    path: "/original_spare_parts/original_windshields",
                    name: "original_windshields",
                    component: OriginalWindshields,
                },
                {
                    path: "/original_spare_parts/fuel_system_cleaner",
                    name: "fuel_system_cleaner",
                    component: FuelSystemCleaner,
                }
            ],
        },

        {
            path: "/toyota_assistance",
            name: "toyota_assistance",
            component: ToyotaAssistance,
        },

        {
            path: "/toyota_assistance_plus",
            name: "toyota_assistance_plus",
            component: ToyotaAssistancePlus,
        },


        {
            path: "/world_of_toyota",
            name: "world_of_toyota",
            component: WorldOfToyota,
            children: [
                {
                    path: "/world_of_toyota/news",
                    name: "news",
                    component: News,
                },

                {
                    path: "/world_of_toyota/article/:id",
                    name: "article",
                    component: Article,
                },

                {
                    path: "/world_of_toyota/olympic_partnership",
                    name: "olympic_partnership",
                    component: OlympicPartnership,
                },

                {
                    path: "/world_of_toyota/toyota_gazoo_racing",
                    name: "toyota_gazoo_racing",
                    component: ToyotaGazooRacing,
                },

                {
                    path: "/world_of_toyota/toyota_at_rally",
                    name: "toyota_at_rally",
                    component: ToyotaAtRally,
                },

                {
                    path: "/world_of_toyota/history_of_toyota_sports_cars",
                    name: "history_of_toyota_sports_cars",
                    component: HistoryOfToyotaSportsCars,
                },

                {
                    path: "/world_of_toyota/toyota_2000_gt",
                    name: "toyota_2000_gt",
                    component: Toyota2000GT,
                },

                {
                    path: "/world_of_toyota/toyota_celica",
                    name: "toyota_celica",
                    component: ToyotaCelica,
                },

                {
                    path: "/world_of_toyota/toyota_supra",
                    name: "toyota_supra",
                    component: ToyotaSupra,
                },

                {
                    path: "/world_of_toyota/toyota_corolla",
                    name: "toyota_corolla",
                    component: ToyotaCorolla,
                },

                {
                    path: "/world_of_toyota/toyota_mr2",
                    name: "toyota_mr2",
                    component: ToyotaMR2,
                },

                {
                    path: "/world_of_toyota/toyota_gt86",
                    name: "toyota_gt86",
                    component: ToyotaGT86,
                },

                {
                    path: "/world_of_toyota/IdeasForFuture",
                    name: "IdeasForFuture",
                    component: IdeasForFuture,
                },



                {
                    path: "/world_of_toyota/toyoda_aa",
                    name: "toyoda_aa",
                    component: ToyodaAA,
                },
            ],
        },



        {
            path: "/ecology",
            name: "ecology",
            component: Ecology,
        },
        {
            path: "/environmental_mission",
            name: "environmental_mission",
            component: EnvironmentalMission,
        },
        {
            path: "/better_air",
            name: "better_air",
            component: BetterAir,
        },
        {
            path: "/best_planet",
            name: "best_planet",
            component: BestPlanet,
        },
        {
            path: "/better_life",
            name: "better_life",
            component: BetterLife,
        },
        {
            path: "/just_better",
            name: "just_better",
            component: JustBetter,
        },
        {
            path: "/iso",
            name: "iso",
            component: ISO,
        },









        {
            path: "/warranty_service",
            name: "warranty_service",
            component: WarrantyService,
        },
        {
            path: "/quality_guarantee",
            name: "quality_guarantee",
            component: QualityGuarantee,
        },
        {
            path: "/clients_charter",
            name: "clients_charter",
            component: ClientsCharter,
        },

        {
            path: "/hybrid_innovations",
            name: "hybrid_innovations",
            component: HybridInnovations,
        },
        {
            path: "/hybrid_drive",
            name: "hybrid_drive",
            component: HybridDrive,
        },




        {
            path: "/sub_menu_mykolaiv",
            name: "sub_menu_mykolaiv",
            component: SubMenuNikolaev,
        },

        {
            path: "/toyota_mykolaiv",
            name: "toyota_mykolaiv",
            component: ToyotaMykolaiv,
        },

        {
            path: "/customer_service",
            name: "customer_service",
            component: CustomerService,
        },
        {
            path: "/toyota_ichiban",
            name: "toyota_ichiban",
            component: ToyotaIchiban,
        },
        {
            path: "/corporate_responsibility",
            name: "corporate_responsibility",
            component: CorporateResponsibility,
        },



        {
            path: "/cars_available",
            name: "cars_available",
            component: CarsAvailable,
        },

        {
            path: "/car/:id",
            name: "car",
            component: Car,
        },

        {
            path: "/workers",
            name: "workers",
            component: Workers,
        },

        {
            path: "/about",
            name: "about",
            component: About,
        },

        {
            path: "/where",
            name: "where",
            component: Where,
        },

        ////////////////////Заглушки//////////////////////////


        // {
        //     path: "/souvenir_products",
        //     name: "SouvenirProducts",
        //     component: SouvenirProducts,
        // },


    ],

    mode: 'history'
})