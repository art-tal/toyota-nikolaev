import VueRouter from "vue-router";
import SelectModel from "@/components/SelectModel";
import Configurator from "@/components/Configurator";
import Engine from "@/components/Engine";
import ColorAndOption from "@/components/ColorAndOption";
import Result from "@/components/Result";
import EditEquipment from "@/components/EditEquipment";

export default new VueRouter({
    routes: [
        {
            path: '/select_model',
            name: 'SelectModel',
            component: SelectModel
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
                    component: ColorAndOption
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