import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      groups: 0,
      globalInterval: null,
    },
    mutations: {
      setGroup(state, groups) {
        state.groups = { ...groups }
      },
      setGlobalInterval(state, id) {
        state.globalInterval = id
      }
    },
    actions: {
      startFetch({ commit, state }) {
        if (state.globalInterval !== null) {
          return
        }
        const interval = setInterval(async () => {
          const groups = await this.$axios.$get(
            "https://tomcat.it.kmitl.ac.th:5000"
          );
          commit('setGroup', groups)
        }, 900)
        commit('setGlobalInterval', interval)
      },
      stopFetch({ commit, state }) {
        clearInterval(state.globalInterval)
        commit('setGlobalInterval', null)
      }
    },
    getters: {
      groupSort(state, getters) {
        const groups = [];
        for (const group in state.groups.c) {
          groups.push(state.groups.c[group]);
        }
        groups.sort((a, b) => {
          if (a.username < b.username) {
            return -1;
          }
          if (a.username > b.username) {
            return 1;
          }
          return 0;
        });
        return groups
      }
    }
  })
}

export default createStore