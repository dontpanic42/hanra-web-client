import appconf from '../../config/config.js';
import request from '../../utils/httprequest.js';

export default {
    /**
    * Loads a new session for the given setId
    * @param {*} param0 
    * @param {*} setId 
    */
    async loadSettings({ commit, getters }) {
        
        // If the settings are already loaded we don't need to reload them
        if(getters['isLoaded']) {
            return;
        }
        
        try {
            commit('setSettings', {});
            
            commit('setIsLoaded', false);
            commit('setIsLoading', true);
            commit('setHasLoadingError', false);
            commit('setHasLoadingErrorReason', undefined);
            
            let url = appconf.api.baseUrl + appconf.api.ep.getSettings;
            const result = await request.get(url);
            
            commit('setSettings', result);
            commit('setIsLoaded', true);
        } catch (e) {
            commit('setHasLoadingError', true);
            commit('setHasLoadingErrorReason', e);
            console.log('Error while loading user settings', e);
        } finally {
            commit('setIsLoading', false);
        }
    },
    
    async saveSettings({commit}, settings) {
        try {
            commit('setIsSaving', true);
            commit('setHasSavingError', false);
            commit('setHasSavingErrorReason', false);
            
            let url = appconf.api.baseUrl + appconf.api.ep.saveSettings;
            await request.post(url, {}, settings);

            commit('setSettings', settings);
        }catch (e) {
            commit('setHasSavingError', true);
            commit('setHasSavingErrorReason', e);
            console.log('Error while saving user settings', e);
        } finally {
            commit('setIsSaving', false);
        }
    }
}