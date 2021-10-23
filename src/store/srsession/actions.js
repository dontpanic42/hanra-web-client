import appconf from '../../config/config.js';
import request from '../../utils/httprequest.js';

const DEFAULT_PAGE_SIZE = 10;

export default {

    /**
     * Loads a new session for the given setId
     * @param {*} param0 
     * @param {*} setId 
     */
    async loadSession({ commit }, setId) {

        try {
            commit('setCards', []);
            commit('resetSession');

            commit('setCardsIsLoading', true);
            commit('setCardsHasLoadingError', false);
            commit('setCardsHasLoadingErrorReason', undefined);

            let url = appconf.api.baseUrl + appconf.api.ep.getSession;
            const result = await request.get(url, {':setId': setId});

            commit('setCards', result.cards);
        } catch (e) {
            commit('setCardsHasLoadingError', true);
            commit('setCardsHasLoadingErrorReason', e);
            console.log('Error while loading sr session', e);
        } finally {
            commit('setCardsIsLoading', false);
        }
    },

    /**
     * Marks the current card for review by adding a copy at the end of the session.
     * @param {*} param0 
     */
    async markCurrentCardForReview({ commit }) {

        // Flag card as review to prevent future rating/updating
        commit('flagCurrentCardAsReview');
        // Append the card
        commit('appendCurrentCard');
    },

    /**
     * Updates the current SR card with a rating
     * @param {*} param0 
     * @param {*} param1 
     */
    async updateSRItem({ commit, getters }, {setId, rating}) {

        const cardId = parseInt(getters['getCurrentCard'].id, 10);
        setId = parseInt(setId, 10);
        rating = parseFloat(rating);

        try {
            if(isNaN(setId)) {
                throw new Error('Invalid setId ' + setId);
            }

            if(isNaN(cardId)) {
                throw new Error('Invalid cardId ' + cardId);
            }

            if(isNaN(rating)) {
                throw new Error('Invalid rating ' + rating);
            }

            // Save the rating in the statistics
            commit('putStatisticReview', rating);

            commit('setReviewIsSaving', true);
            commit('setReviewHasSavingError', false);
            commit('setReviewHasSavingErrorReason', undefined);

            let url = appconf.api.baseUrl + appconf.api.ep.setCardReview;
            await request.post(url, {
                ':setId': setId,
                ':cardId': cardId
            }, {
                'performanceRating': rating
            });

        } catch (e) {
            commit('setReviewHasSavingError', true);
            commit('setReviewHasSavingErrorReason', e);
            console.log('Error while saving review', e);
        } finally {
            commit('setReviewIsSaving', false);
        }
    }
}