import VueRouter from "vue-router";

import Home from "../components/Home";
import Lineup from "../components/cars/Lineup";

import DownloadBrochures from "../components/sharedLinks/DownloadBrochures";
import FAQ from "../components/sharedLinks/FAQ";
import LegalInformation from "../components/sharedLinks/LegalInformation";
import CookieSettings from "../components/sharedLinks/CookieSettings";
import FormFeedBack from "../components/sharedLinks/FormFeedBack";
import VypadkyShahrajstva from "../components/sharedLinks/VypadkyShahrajstva";


import SelectModel from "../components/cars/SelectModel";
import EnginesAndCharacteristics from "../components/cars/EnginesAndCharacteristics";
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


import Principles from "../components/service/maintenance/Principles";
import MaintenanceGeneral from "../components/service/maintenance/MaintenanceGeneral";
import Guarantee from "../components/service/maintenance/Guarantee";
import Lubricants from "../components/service/maintenance/Lubricants";

import AccessoriesGeneral from "../components/service/originalAccessories/AccessoriesGeneral";
import EntertainmentSystem from "../components/service/originalAccessories/EntertainmentSystem";
import ToyotaTouch2 from "../components/service/originalAccessories/ToyotaTouch2";
import BabyCarSeats from "../components/service/originalAccessories/BabyCarSeats";

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
import ToyotaIchiban from "../components/ToyotaInNikolaev/ToyotaIchiban";
import Ecology from "../components/whyToyota/ecology/Ecology";
import EnvironmentalMission from "../components/whyToyota/ecology/EnvironmentalMission";
import BetterAir from "../components/whyToyota/ecology/BetterAir";
import BestPlanet from "../components/whyToyota/ecology/BestPlanet";
import BetterLife from "../components/whyToyota/ecology/BetterLife";
import JustBetter from "../components/whyToyota/ecology/JustBetter";
import ISO from "../components/whyToyota/ecology/ISO";
import ExclusiveProjects from "../components/ToyotaInNikolaev/ExclusiveProjects";
import ExclusiveCar from "../components/ToyotaInNikolaev/ExclusiveCar";

import Store from "./../store/store"
import TestDriveStep1 from "../components/sharedLinks/test-drive/TestDriveStep1";
import TestDriveStep2 from "../components/sharedLinks/test-drive/TestDriveStep2";




const route = new VueRouter({

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
            path: '/legal_information',
            name: 'legal_information',
            component: LegalInformation,
        },

        {
            path: '/cookie_settings',
            name: 'cookie_settings',
            component: CookieSettings,
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
            path: "/test_drive_step_1",
            name: "test_drive_step_1",
            component: TestDriveStep1,
        },

        {
            path: "/test_drive_step_2",
            name: "test_drive_step_2",
            component: TestDriveStep2,
        },

        {
            path: '/models/:slug',
            name: 'models',
            component: SelectModel,
            children: [

                {
                    path: '/models/:slug/equipment',
                    name: 'Equipment',
                    component: Equipment,
                },

            ]
        },

        {
            path: '/engines_and_characteristics/:slug',
            name: 'engines_and_characteristics',
            component: EnginesAndCharacteristics,
        },


        {
            path: '/reliability_and_guarantee/:slug',
            name: 'reliability_and_guarantee',
            component: ReliabilityAndGuarantee,
        },


        {
            path: '/configurator',
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
        },
        {
            path: "/general",
            name: "general",
            component: General,
        },
        {
            path: "/business_car",
            name: "business_car",
            component: Business_car,
        },
        {
            path: "/business_owner",
            name: "business_owner",
            component: Business_owner,
        },
        {
            path: "/corporate_clients",
            name: "corporate_clients",
            component: Corporate_clients,
        },





        {
            path: "/service",
            name: "service",
            component: SignUpForService,
        },


        {
            path: "/maintenance_general",
            name: "maintenance_general",
            component: MaintenanceGeneral,
        },
        {
            path: "/principles",
            name: "principles",
            component: Principles,
        },
        {
            path: "/guarantee",
            name: "guarantee",
            component: Guarantee,
        },
        {
            path: "/lubricants",
            name: "lubricants",
            component: Lubricants,
        },





        {
            path: "/accessories_general",
            name: "accessories_general",
            component: AccessoriesGeneral,
        },
        {
            path: "/entertainment_system",
            name: "entertainment_system",
            component: EntertainmentSystem,
        },
        {
            path: "/toyota_touch2",
            name: "toyota_touch2",
            component: ToyotaTouch2,
        },

        {
            path: "/baby_car_seats",
            name: "baby_car_seats",
            component: BabyCarSeats,
        },


        {
            path: "/original_spare_parts_general",
            name: "original_spare_parts_general",
            component: OriginalSparePartsGeneral,
        },
        {
            path: "/choose_original",
            name: "choose_original",
            component: ChooseOriginal,
        },
        {
            path: "/air_filters_of_salon",
            name: "air_filters_of_salon",
            component: AirFiltersOfSalon,
        },
        {
            path: "/rechargeable_batteries",
            name: "rechargeable_batteries",
            component: RechargeableBatteries,
        },
        {
            path: "/original_lamps",
            name: "original_lamps",
            component: OriginalLamps,
        },
        {
            path: "/wiper_blades",
            name: "wiper_blades",
            component: WiperBlades,
        },
        {
            path: "/toyota_ad_blue_liquid",
            name: "toyota_ad_blue_liquid",
            component: ToyotaAdBlueLiquid,
        },
        {
            path: "/brake_discs_and_pads",
            name: "brake_discs_and_pads",
            component: BrakeDiscsAndPads,
        },
        {
            path: "/original_windshields",
            name: "original_windshields",
            component: OriginalWindshields,
        },
        {
            path: "/fuel_system_cleaner",
            name: "fuel_system_cleaner",
            component: FuelSystemCleaner,
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
            path: "/exclusive_projects",
            name: "exclusive_projects",
            component: ExclusiveProjects,
        },

        {
            path: "/exclusive_car",
            name: "exclusive_car",
            component: ExclusiveCar,
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

    ],

    mode: 'history'
});

route.beforeResolve( (to, from, next) => {
    next();
    if(to.name) {
        Store.commit("setShowPreload", true);

    }
    // console.log(to, from, next);
    window.scrollTo(pageXOffset, 0);
});



export default route;
