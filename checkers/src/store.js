import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    i: "",
    j: "",
    i1: "",
    j1: "",
    previ: "",
    prevj: "",
    color: ""
  },
  getters: {
    geti(state) {
      return state.i;
    },
    getj(state) {
      return state.j;
    },
    geti1(state) {
      return state.i1;
    },
    getj1(state) {
      return state.j1;
    },
    getprevi(state) {
      return state.previ;
    },
    getprevj(state) {
      return state.prevj;
    },
    getcolor(state) {
      return state.color;
    }
  },
  mutations: {
    seti(state, payload) {
      state.i = payload;
    },
    setj(state, payload) {
      state.j = payload;
    },
    seti1(state, payload) {
      state.i1 = payload;
    },
    setj1(state, payload) {
      state.j1 = payload;
    },
    setprevi(state, payload) {
      state.previ = payload;
    },
    setprevj(state, payload) {
      state.prevj = payload;
    },
    setcolor(state, payload) {
      state.color = payload
    }

  }

});
