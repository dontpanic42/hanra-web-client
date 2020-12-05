import appconf from '../../config/config.js';

export default {

    /**
     * Load a list of sets
     * @param {*} param0 
     * @param {*} forceReload 
     */
    async loadSetList({ commit, getters }, forceReload = false) {
        if(getters['isLoaded'] && !forceReload) {
            console.log('Not loading set list - already loaded');
        }

        const url = appconf.api.baseUrl + appconf.api.ep.getSetList;
        const fetchOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        };

        try {
            commit('setLoadingError', false);
            commit('setLoadingErrorReason', undefined);
            commit('setLoading', true);
            const response = await fetch(url, fetchOptions);
            const data = await response.json();

            commit('setSetList', data.sets || []);
            commit('setLoaded', true);
        } catch (e) {
            commit('setLoadingError', true);
            commit('setLoadingErrorReason', e);
            console.log('Error while loading set list', e);
        } finally {
            commit('setLoading', false);
        }
    },

    /**
     * Save a given set
     * @param {*} param0 
     * @param {*} newSet 
     */
    async saveNewSet({commit}, newSet) {
        const url = appconf.api.baseUrl + appconf.api.ep.getSetList;
        const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            body: JSON.stringify(newSet)
        };

        try {
            commit('setNewSetModalSavingError', false);
            commit('setNewSetModalSavingErrorReason', undefined);
            commit('setNewSetModalSaving', true);    
            
            const response = await fetch(url, fetchOptions);
            const data = await response.json();

            // Set id for new set before adding it...
            newSet.id = data.setId;

            commit('addSet', newSet);

        } catch (e) {
            commit('setNewSetModalSavingError', true);
            commit('setNewSetModalSavingErrorReason', e);
            console.log('Error while saving saving new set', e);
        } finally {
            commit('setNewSetModalSaving', false);
        }
    }
}