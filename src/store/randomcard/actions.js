import appconf from '../../config/config.js';
import request from '../../utils/httprequest.js';

const DEFAULT_BATCH_SIZE = 100;

export default {

    /**
     * Loads a new card for the given setId
     * @param {*} param0 
     * @param {*} setId 
     */
    async loadCards({ commit }, { setId, type }) {

        try {
            commit('setCards', []);

            commit('setIsLoading', true);
            commit('setHasLoadingError', false);
            commit('setHasLoadingErrorReason', undefined);
            commit('setCurrentCardType', type);

            let url = appconf.api.baseUrl + appconf.api.ep.getRandomCard;
            const result = await request.get(url, {':setId': setId}, {
                'type': type,
                'max': DEFAULT_BATCH_SIZE
            });

            commit('setCards', result.cards);
        } catch (e) {
            commit('setHasLoadingError', true);
            commit('setHasLoadingErrorReason', e);
            console.log('Error while loading random card', e);
        } finally {
            commit('setIsLoading', false);
        }
    },

    /**
     * 
     * @param {*} default methods
     * @param { setId, type } meta Information to be passed to loadCards if neccessary
     */
    async fetchCard({ getters, commit, dispatch }, meta) {
        // Get the requested card type
        const { type } = meta;
        // Get the current card type
        const currentCardType = getters['getCurrentCardType'];

        // Get the current card array
        const cards = getters['getAllCards'];
        // Get the next card index
        let nextCardIndex = getters['getCurrentCardIndex'] + 1;

        // When the index is out of range, we'll need to reload a new set of cards
        // We'll also need to reload when the card type (all vs new) changed
        if(nextCardIndex >= cards.length || type !== currentCardType) {
            // Reset the index
            nextCardIndex = 0;
            // Reload cards
            await dispatch('loadCards', meta);
        }
        // Save the next index as current index
        commit('setCurrentCardIndex', nextCardIndex);
    }
}