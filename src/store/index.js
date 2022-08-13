import { createStore } from "vuex";
import { getUser } from "@/api";

const store = createStore({
  state() {
    return {
      username: "AmethGabriel",
    };
  },
  getters: {
    upperName(state) {
      return state.username.toUpperCase();
    },
    reversa(state) {
      return state.username.split("").reverse().join("");
    },
    recortar: (state) => (cant) => {
      return state.username.substring(0, cant);
    },
  },
  mutations: {
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
  },
  actions: {
    async obtenerUsername({ commit }) {
      const res = await fetch(`https://api.generadordni.es/v2/person/username`);
      const data = await res.json();
      //Un numero aleatorio del 0 al 9
      const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      //   console.log(data);
      commit("updateUsername", data[n]);
    },
    async getUsername() {
      const user = await getUser(1);
      console.log(user);
      // commit("updateUsername", data[n]);
    },
  },
});

export default store;
