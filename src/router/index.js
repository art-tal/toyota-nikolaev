import VueRouter from "vue-router";
import SelectModel from "@/components/MainNav/SelectModel";
import Configurator from "@/components/configurator/Configurator";
import Engine from "@/components/configurator/options/Engine";
import ColorAndOption from "@/components/configurator/ColorAndOption";
import Result from "@/components/configurator/Result";
import EditEquipment from "@/components/configurator/EditEquipment";
import Colors from "@/components/configurator/options/Colors";
import Wheels from "@/components/configurator/options/Wheels";
import Interior from "@/components/configurator/options/Interior";
import Lineup from "@/components/MainNav/Lineup";
import Equipment from "@/components/configurator/Equipment";
// import ToBuyers from "@/components/MainNav/ToBuyers";
import ToTheOwners from "@/components/MainNav/ToTheOwners";
import SouvenirProducts from "@/components/MainNav/SouvenirProducts";
import WhyToyota from "@/components/MainNav/WhyToyota";
import ToyotaInNikolaev from "@/components/MainNav/ToyotaInNikolaev";
import MobilityForEveryone from "@/components/MainNav/MobilityForEveryone";
import Accessories from "@/components/configurator/options/Accessories";
import Price from "@/components/configurator/options/Price";
import ToResult from "@/components/configurator/options/ToResult";
import Consult from "@/components/configurator/Сonsult"
import Step1 from "@/components/configurator/consultSteps/Step1";
import Step2 from "@/components/configurator/consultSteps/Step2";
import Home from "@/components/Home";
import Insurance from "@/components/toBuyers/Insurance";

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
                        {
                            path: "/configurator/consultation",
                            name: 'consultation',
                            component: Consult,
                            children: [
                                {
                                    path: "/configurator/consultation/step_1",
                                    name: "step_1",
                                    component: Step1,
                                },
                                {
                                    path: "/configurator/consultation/step_2",
                                    name: "step_2",
                                    component: Step2,
                                },
                            ]
                        },
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
            path: "/to_the_owners",
            name: "ToTheOwners",
            component: ToTheOwners,
        },

        {
            path: "/souvenir_products",
            name: "SouvenirProducts",
            component: SouvenirProducts,
        },

        {
            path: "/why_toyota",
            name: "WhyToyota",
            component: WhyToyota,
        },

        {
            path: "/toyota_in_nikolaev",
            name: "toyota_in_nikolaev",
            component: ToyotaInNikolaev,
        },

        {
            path: "/mobility_for_everyone",
            name: "MobilityForEveryone",
            component: MobilityForEveryone,
        },
    ],

    mode: 'history'
})