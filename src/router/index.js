import VueRouter from "vue-router";
import SelectModel from "../components/MainNav/SelectModel";
import Configurator from "../components/configurator/Configurator";
import Engine from "../components/configurator/options/Engine";
import ColorAndOption from "../components/configurator/ColorAndOption";
import Result from "../components/configurator/Result";
import EditEquipment from "../components/configurator/EditEquipment";
import Colors from "../components/configurator/options/Colors";
import Wheels from "../components/configurator/options/Wheels";
import Interior from "../components/configurator/options/Interior";
import Lineup from "../components/MainNav/Lineup";
import Equipment from "../components/configurator/Equipment";
// import ToTheOwners from "../components/MainNav/ToTheOwners";
import SouvenirProducts from "../components/MainNav/SouvenirProducts";
// import WhyToyota from "../components/MainNav/WhyToyota";
// import ToyotaInNikolaev from "../components/MainNav/ToyotaInNikolaev";
// import MobilityForEveryone from "../components/MainNav/MobilityForEveryone";
import Accessories from "../components/configurator/options/Accessories";
import Price from "../components/configurator/options/Price";
import ToResult from "../components/configurator/options/ToResult";
import Consult from "../components/configurator/Consult";
import Step1 from "../components/configurator/consultSteps/Step1";
import Step2 from "../components/configurator/consultSteps/Step2";
import Home from "../components/Home";
import Insurance from "../components/toBuyers/Insurance";
import Credit from "../components/toBuyers/Credit";
import Corporate_sales from "../components/toBuyers/Corporate_sales";
import Business_car from "../components/toBuyers/Business_car";
import Business_owner from "../components/toBuyers/Business_owner";
import Corporate_clients from "../components/toBuyers/Corporate_clients";
// import Special_solutions from "../components/toBuyers/Special_solutions";
import General from "../components/toBuyers/General";
import SignUpForService from "../components/service/SignUpForService";
import News from "../components/whyToyota/News";
import Article from "../components/whyToyota/Article";
import WorldOfToyota from "../components/whyToyota/WorldOfToyota";
import SubMenuNikolaev from "../components/ToyotaInNikolaev/SubMenuNikolaev";
import CarsAvailable from "../components/ToyotaInNikolaev/CarsAvailable";
import Car from "../components/ToyotaInNikolaev/Car";
import Maintenance from "../components/service/maintenance/Maintenance";
import Principles from "../components/service/maintenance/Principles";
import MaintenanceGeneral from "../components/service/maintenance/MaintenanceGeneral";
import Guarantee from "../components/service/maintenance/Guarantee";
import Lubricants from "../components/service/maintenance/Lubricants";
import Calc from "../components/service/maintenance/Calc";
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
                    children: [
                        // {
                        //     path: "/configurator/consultation",
                        //     name: 'consultation',
                        //     component: Consult,
                        //     children: [
                        //         {
                        //             path: "/configurator/consultation/step_1",
                        //             name: "step_1",
                        //             component: Step1,
                        //         },
                        //         {
                        //             path: "/configurator/consultation/step_2",
                        //             name: "step_2",
                        //             component: Step2,
                        //         },
                        //     ]
                        // },
                    ]
                },
                {
                    path: 'edit_equipment',
                    component: EditEquipment
                },



            ]
        },

        {
            path: "/consultation",
            name: 'consultation',
            component: Consult,
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


        // {
        //     path: '/to_buyers',
        //     name: "ToBuyers",
        //     component: ToBuyers,
        // },

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
                {
                    path: "/maintenance/calc",
                    name: "calc",
                    component: Calc,
                },
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
            ],
        },

        {
            path: "/sub_menu_mykolaiv",
            name: "sub_menu_mykolaiv",
            component: SubMenuNikolaev,
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







        ////////////////////Заглушки//////////////////////////

        // {
        //     path: "/to_the_owners",
        //     name: "ToTheOwners",
        //     component: ToTheOwners,
        // },

        {
            path: "/souvenir_products",
            name: "SouvenirProducts",
            component: SouvenirProducts,
        },

        // {
        //     path: "/why_toyota",
        //     name: "WhyToyota",
        //     component: WhyToyota,
        // },

        // {
        //     path: "/toyota_in_nikolaev",
        //     name: "toyota_in_nikolaev",
        //     component: ToyotaInNikolaev,
        // },

        // {
        //     path: "/mobility_for_everyone",
        //     name: "MobilityForEveryone",
        //     component: MobilityForEveryone,
        // },
    ],

    mode: 'history'
})