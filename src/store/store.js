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
        interior: {},
        selectedAccessories: [],
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

        accessories(state) {
            return state.selectedAccessories;
        },

    },

    mutations: {
        addAccessories(state, payload) {
            state.selectedAccessories.push(payload);
            localStorage.selectedAccessories = JSON.stringify(state.selectedAccessories);
        },

        delAccessories(state, payload) {
            let index = state.selectedAccessories.findIndex( arr => arr.type === payload.type && arr.id === payload.id);
            state.selectedAccessories.splice(index, 1);
            // console.log(state.selectedAccessories);
            localStorage.selectedAccessories = JSON.stringify(state.selectedAccessories);
        },



    },

    actions: {

    },


})