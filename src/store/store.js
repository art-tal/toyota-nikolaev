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
        showInterior: false,
        // modelImage: "",

        openConsultation: false,

        consultation: {
            model: {},
            engineType: "",
        },

        totalCost: 0,
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

        getShowInterior(state) {
            return state.showInterior;
        },

        accessories(state) {
            return state.selectedAccessories;
        },

        getConsultation(state) {
            return state.consultation;
        },

        getOpenConsultation(state) {
            console.log(state.openConsultation);
            return state.openConsultation;
        },

        getTotalCost(state) {
            console.log(state.openConsultation);
            return state.totalCost;
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

        recordTotalCost(state, payload) {
            state.totalCost = payload;
        },





    },

    actions: {

    },


})