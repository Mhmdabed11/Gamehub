import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({

  state: {
    i: "",
    j: "",
    i1: "",
    j1: "",
    i2: "",
    j2: "",
    i3: "",
    j3: "",
    i4: "",
    j4: "",
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
    geti2(state) {
      return state.i2;
    },
    getj2(state) {
      return state.j2;
    },
    geti3(state) {
      return state.i3;
    },
    getj3(state) {
      return state.j3;
    },
    geti4(state) {
      return state.i4;
    },
    getj4(state) {
      return state.j4;
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
    seti2(state, payload) {
      state.i2 = payload;
    },
    setj2(state, payload) {
      state.j2 = payload;
    },
    seti3(state, payload) {
      state.i3 = payload;
    },
    setj3(state, payload) {
      state.j3 = payload;
    },
    seti4(state, payload) {
      state.i4 = payload;
    },
    setj4(state, payload) {
      state.j4 = payload;
    },
    setprevi(state, payload) {
      state.previ = payload;
    },
    setprevj(state, payload) {
      state.prevj = payload;
    },
    setcolor(state, payload) {
      state.color = payload
    },
    saveScore(state, payload) {
      // var xhr = new XMLHttpRequest();
      // xhr.open("POST", `http://localhost:8888/saveScore`, true);
      // var data = "username=" + payload.username + '&game=' + payload.game + '&score=' + payload.score;
      // //Send the proper header information along with the request
      // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      // xhr.onreadystatechange = function () {
      //   //Call a function when the state changes.
      //   if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      //     alert(xhr.responseText);
      //   }
      // };
      // xhr.send(data);
      axios({
        method: 'post',
        url: 'http://localhost:8888/saveScore',
        data: {
          username: payload.username,
          game: payload.game,
          score: payload.score
        },
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }


  },


});
