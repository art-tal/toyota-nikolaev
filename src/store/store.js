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

        consultation: {
            model: {},
            engineType: "",

        }
        // consultModel: {},
        // consultEngine: {},
    },

    getters: {
        getModelId(state) {
            return state.model.id;
        },

        getModel(state) {
            return state.model;
        },

        modelImage(state) {
            return 'http://lara.toyota.nikolaev.ua/storage/' + state.model.image;
        },

        equip(state) {
            return state.equipment;
        },

        getEngineAndGear(state) {
            return state.engineAndGear;
        },

        colored(state) {
            return state.color;
        },

        getWheels(state) {
            return state.wheels;
        },

        getInterior(state) {
            return state.interior;
        },

        accessories(state) {
            return state.selectedAccessories;
        },

        getConsultation(state) {
            return state.consultation;
        },

        // getConsultModel(state) {
        //     return state.consultModel;
        // },
        //
        // getConsultEngine(state) {
        //     return state.consultEngine;
        // }


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