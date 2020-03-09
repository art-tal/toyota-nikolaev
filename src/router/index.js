import VueRouter from "vue-router";
import SelectModel from "@/components/SelectModel";
import Configurator from "@/components/configurator/Configurator";
import Engine from "@/components/configurator/Engine";
import ColorAndOption from "@/components/configurator/ColorAndOption";
import Result from "@/components/configurator/Result";
import EditEquipment from "@/components/configurator/EditEquipment";
import Colors from "@/components/configurator/options/Сolors";
import Wheels from "@/components/configurator/options/Wheels";
import Interior from "@/components/configurator/options/Interior";
import Lineup from "@/components/MainNav/Lineup";


export default new VueRouter({
    routes: [
        {
            path: '/lineup',
            name: 'Lineup',
            component: Lineup,
            children: [
                {
                    path: '/lineup/select_model',
                    name: 'SelectModel',
                    component: SelectModel
                },
            ]
        },








        {
            path: '/configurator',
            name: 'Configurator',
            component: Configurator,
            children: [
                {
                    path: 'selected_engine',
                    component: Engine
                },
                {
                    path: 'color_and_option',
                    name: "color_and_option",
                    component: ColorAndOption,
                    children: [
                        {
                            path: 'colors',
                            name: 'colors',
                            component: Colors,
                        },
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
        }
    ],

    mode: 'history'
})