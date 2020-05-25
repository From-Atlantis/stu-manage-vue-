import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        modal: false,
        item: {},
        count: null,
        stuList: []
    },
    mutations: {
        showModal(state, bool) {
            state.modal = bool;
        },
        editItem(state, item) {
            state.item = item;
        },
        getCount(state, count) {
            state.count = count;
        },
        getStuList(state, stuList) {
            state.stuList = stuList;
        }
    },
    actions: {}
});