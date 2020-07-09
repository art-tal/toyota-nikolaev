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
        showEquipment:false,
        showPreloader: true,

        openConsultation: false,

        consultation: {
            model: {},
            engineType: "",
            preview: "",
        },

        totalCost: 0,
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

        showEquip(state) {
            return state.showEquipment;
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
            return state.openConsultation;
        },

        getTotalCost(state) {
            return state.totalCost;
        },

        preloader(state) {
            return state.showPreloader;
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

        setEquipment(state, equipment) {
            if(equipment) {
                console.log(equipment);
                state.equipment = equipment;
            } else {
                state.equipment = JSON.parse(localStorage.equipment);
            }

        },

        setColor(state, color) {
            if(color) {
                console.log(color);
                state.color = color;
            } else {
                state.color = JSON.parse(localStorage.color);
            }

        },




    },

    actions: {
        setColorAction({context}, color) {
            context.commit("setColor", color);
        },
    },


})