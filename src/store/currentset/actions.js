import appconf from '../../config/config.js';
import request from '../../utils/httprequest.js';

const DEFAULT_PAGE_SIZE = 10;

export default {

    /**
     * Load a set into the 'currentSet' state
     * @param {*} param0 
     * @param {*} forceReload 
     */
    async loadCurrentSet({ commit }, setId) {

        let url = appconf.api.baseUrl + appconf.api.ep.getSetDetails;
        url = url.replace(':setId', parseInt(setId, 10));

        const fetchOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        };

        try {
            commit('setCurrentSet', {});
            commit('setSetIsLoading', true);
            commit('setSetHasLoadingError', false);
            commit('setSetHasLoadingErrorReason', undefined);
            commit('setCurrentSetId', setId);
            const response = await fetch(url, fetchOptions);
            const data = await response.json();

            commit('setCurrentSet', data);
        } catch (e) {
            commit('setSetHasLoadingError', true);
            commit('setSetHasLoadingErrorReason', e);
            console.log('Error while loading set details', e);
        } finally {
            commit('setSetIsLoading', false);
        }
    },

    /**
     * Loads all cards (paged) for a given setId and page number
     * @param {*} param0 
     * @param {*} setId 
     * @param {*} pageNo 
     */
    async loadCardListPage({ commit, getters }, {setId, pageNo}) {
        setId = parseInt(setId, 10);
        setId = isNaN(setId) ? parseInt(getters['getCurrentSetId'], 10) : setId;

        let query = getters['getCardsSearchText'];

        pageNo = parseInt(pageNo, 10);

        try {
            if(isNaN(setId)) {
                throw new Error('Cannot load cards - setid invalid! ' + setId);
            }
    
            if(isNaN(pageNo)) {
                throw new Error('Cannot load cards - pageno invalid! ' + pageNo);
            }

            commit('setCardsPage', pageNo);
            commit('setCardsIsLoading', true);
            commit('setCardsHasLoadingError', false);

            let url = appconf.api.baseUrl + appconf.api.ep.getAllCards;
            const result = await request.get(url, {':setId': setId}, {
                'page': pageNo, 
                'pageSize': DEFAULT_PAGE_SIZE,
                'query': query
            });

            commit('setCards', result.cards);
            commit('setCardsPage', result.page);
            commit('setCardsNumPages', result.numPages);
            commit('setCardsNumTotal', result.numCards);

        } catch (e) {
            commit('setCardsHasLoadingError', true);
            commit('setCardsHasLoadingErrorReason', e);
            console.log('Error while loading cards', e);
        } finally {
            commit('setCardsIsLoading', false);
        }
    },

    /**
     * Saves the given card, either
     *  - as new card, when card.id is not a number
     *  - as an update to an existing card, when card.id is a number
     * @param {*} param0 
     * @param {*} card 
     */
    async saveCard({ commit, getters, dispatch }, card) {
        const setId = parseInt(getters['getCurrentSetId'], 10);
        
        try {
            commit('setCreateCardModalIsSaving', true);
            commit('setCreateCardModalHasSavingError', false);
            commit('setCreateCardModalHasSavingErrorReason', undefined);

            if(typeof(card.id) == 'number') {
                const url = appconf.api.baseUrl + appconf.api.ep.updateCard;
                await request.put(url, {':setId': setId, ':cardId': card.id}, card);
            } else {
                const url = appconf.api.baseUrl + appconf.api.ep.createCard;
                await request.post(url, {':setId': setId}, card);
                // Reload cards
                dispatch('loadCardListPage', {setId, pageNo: 0});
            }

        } catch (e) {
            commit('setCreateCardModalHasSavingError', true);
            commit('setCreateCardModalHasSavingErrorReason', e);
            console.log('Error while saving cards', e);
        } finally {
            commit('setCreateCardModalIsSaving', false);
        }
    },

    async deleteCard({ commit, getters, dispatch }, card) {
        const cardId = card.id;
        const setId = parseInt(getters['getCurrentSetId'], 10);

        try {
            commit('setDeleteCardIsLoading', true);
            commit('setDeleteCardHasError', false);
            commit('setDeleteCardHasErrorReason', undefined);

            let url = appconf.api.baseUrl + appconf.api.ep.deleteCard;
            await request.del(url, {
                ':setId': setId,
                ':cardId': cardId
            });

            // Reload cards
            dispatch('loadCardListPage', {setId, pageNo: 0});

        } catch (e) {
            commit('setDeleteCardHasError', true);
            commit('setDeleteCardHasErrorReason', e);
            console.log('Error while deleting card', e);
        } finally {
            commit('setDeleteCardIsLoading', false);
        }
    }
}