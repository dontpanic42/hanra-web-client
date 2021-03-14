import appconf from '../../config/config.js';
import request from '../../utils/httprequest.js';

const DEFAULT_PAGE_SIZE = 10;

export default {

    /**
     * Loads a new card for the given setId
     * @param {*} param0 
     * @param {*} setId 
     */
    async loadCard({ commit }, { setId, type }) {

        try {
            commit('setCard', {});

            commit('setIsLoading', true);
            commit('setHasLoadingError', false);
            commit('setHasLoadingErrorReason', undefined);
            commit('setHasCard', false);

            let url = appconf.api.baseUrl + appconf.api.ep.getRandomCard;
            const result = await request.get(url, {':setId': setId}, {'type': type});

            commit('setHasCard', result.hasOwnProperty('card'));
            commit('setCard', result.card);
        } catch (e) {
            commit('setHasLoadingError', true);
            commit('setHasLoadingErrorReason', e);
            console.log('Error while loading random card', e);
        } finally {
            commit('setIsLoading', false);
        }
    }
}