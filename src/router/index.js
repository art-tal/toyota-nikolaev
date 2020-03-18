import VueRouter from "vue-router";
import SelectModel from "@/components/MainNav/SelectModel";
import Configurator from "@/components/configurator/Configurator";
import Engine from "@/components/configurator/Engine";
import ColorAndOption from "@/components/configurator/ColorAndOption";
import Result from "@/components/configurator/Result";
import EditEquipment from "@/components/configurator/EditEquipment";
// import Colors from "@/components/configurator/options/Сolors";
import Wheels from "@/components/configurator/options/Wheels";
import Interior from "@/components/configurator/options/Interior";
import Lineup from "@/components/MainNav/Lineup";
import Equipment from "@/components/configurator/Equipment";
import ToBuyers from "@/components/MainNav/ToBuyers";
import ToTheOwners from "@/components/MainNav/ToTheOwners";
import SouvenirProducts from "@/components/MainNav/SouvenirProducts";
import WhyToyota from "@/components/MainNav/WhyToyota";
import ToyotaInNikolaev from "@/components/MainNav/ToyotaInNikolaev";
import MobilityForEveryone from "@/components/MainNav/MobilityForEveryone";


export default new VueRouter({
    routes: [
        {
            path: '/lineup',
            name: 'Lineup',
            component: Lineup,
            children: [

            ]
        },

        {
            path: '/select_model/:id',
            // path: '/select_model',
            name: 'selectModel',
            component: SelectModel,
            children: [
                {
                    path: '/select_model/:id/equipment',
                    // path: '/select_model/equipment',
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
                    path: '/configurator/selected_engine',
                    // path: '/configurator/:id_params/selected_engine',
                    component: Engine
                },
                {
                    path: '/configurator/color_and_option',
                    // path: '/configurator/:id_params/color_and_option',
                    name: "color_and_option",
                    component: ColorAndOption,
                    children: [
                        // {
                        //     path: 'colors',
                        //     name: 'colors',
                        //     component: Colors,
                        // },
                        {
                            path: 'wheels',
                            name: 'wheels',
                            component: Wheels,
                        },
                        {
                            path: 'interior',
                            name: 'interior',
                            component: Interior
                        }
                    ]
                },
                {
                    path: 'result',
                    component: Result
                },
                {
                    path: 'edit_equipment',
                    component: EditEquipment
                }
            ]
        },

        {
            path: '/to_buyers',
            name: "ToBuyers",
            component: ToBuyers,
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
            name: "ToyotaInNikolaev",
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