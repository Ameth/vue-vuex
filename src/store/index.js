import { createStore } from "vuex";

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
});

export default store;
