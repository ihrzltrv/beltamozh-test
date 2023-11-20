import Vue from 'vue';
import Vuex from 'vuex';
import { personProfiles } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
        peopleList: [],
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setPeopleList(state, list) {
            state.peopleList = list;
        },
    },
    actions: {
        async getAllPeopleList({ commit }) {
            try {
                commit('setLoading', true);

                const { data } = await personProfiles.getAll();
                commit('setPeopleList', data);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async getFilteredPeople({ commit }, filters) {
            try {
                commit('setLoading', true);

                const { data } = await personProfiles.get(filters);
                commit('setPeopleList', data);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async createNewPerson({ commit }, person) {
            try {
                commit('setLoading', true);

                await personProfiles.create(person);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async updatePerson({ commit }, payload) {
            const { id } = payload;

            try {
                commit('setLoading', true);

                await personProfiles.update(id, payload);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async deletePersonProfile({ commit }, id) {
            try {
                commit('setLoading', true);

                await personProfiles.delete(id);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
    },
    getters: {
        peopleList: state => state.peopleList,
        isLoading: state => state.isLoading,
    },
});
