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
        // selectedAccessories: [],

        showInterior: false,
        showEquipment:false,
        showPreloader: true,

        openConsultation: false,

        consultation: {
            model: {},
            engineType: "",
            preview: "",
        },

        requestToService: {},

        testDrive: {},

        testCar: {},

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

        // equip() {
        equip(state) {
            return state.equipment;
            // return JSON.parse(localStorage.equipment);
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
        //
        // getWheels(state) {
        //     return state.wheels;
        // },

        getInterior(state) {
            return state.interior;
        },

        getShowInterior(state) {
            return state.showInterior;
        },

        // accessories(state) {
        //     return state.selectedAccessories;
        // },

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

        getTestDrive(state) {
            return state.testDrive;
        },

        getTestCar(state) {
            return state.testCar;
        },

        getServiceCar(state) {
            return state.requestToService;
        },



    },

    mutations: {
        setModel(state, model) {
            state.model = model;
        },

        setEquipment(state) {
            state.equipmet = JSON.parse(localStorage.equipment);
        },

        setColor(state) {
            state.color = JSON.parse(localStorage.color);
        },
        setColorDefault(state, color) {
            state.color = color;
        },

        setWheels(state) {
            state.wheels = JSON.parse(localStorage.wheels);
        },

        setEngineAndGear(state) {
            state.engineAndGear = JSON.parse(localStorage.transmission);
        },

        setInterior(state) {
            state.interior = JSON.parse(localStorage.interior);
        },

        addAccessories(state, payload) {
            state.selectedAccessories.push(payload);
            localStorage.selectedAccessories = JSON.stringify(state.selectedAccessories);
        },

        // delAccessories(state, payload) {
        //     let index = state.selectedAccessories.findIndex( arr => arr.type === payload.type && arr.id === payload.id);
        //     state.selectedAccessories.splice(index, 1);
        //     // console.log(state.selectedAccessories);
        //     localStorage.selectedAccessories = JSON.stringify(state.selectedAccessories);
        // },

        setShowInterior(state, show) {
            state.showInterior = show;
        },

        setShowEquipment(state, show) {
            state.showEquipment = show;
        },

        setShowPreload(state, show) {
            state.showPreloader = show;
        },

        setService(state) {
            state.requestToService = JSON.parse( localStorage.requestToService );
        },

        setTestDrive(state) {
            state.testDrive = JSON.parse(localStorage.testDrive);
        },

        setTestCar(state) {
            state.testCar = JSON.parse(localStorage.testCar);
        },

        recordTotalCost(state, payload) {
            state.totalCost = payload;
        },




    },

    actions: {

    },


})