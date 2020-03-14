import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store ({

    state: {
        model: {},
        equipment: {},
        color: {},
        wheels: {},
        engineAndGear: {},
        description: {},
        maxSpeed: 0,
        fuelConsumption: 0,
        maxPower: 0,
        // modelImage: "",
    },

    getters: {
        modelImage(state) {
            return 'http://lara.toyota.nikolaev.ua/storage/' + state.model.image;
        },

        equip(state) {
            return state.equipment;
        },

        colored(state) {
            return state.color;
        },

    },

    mutations: {},

    actions: {},


})