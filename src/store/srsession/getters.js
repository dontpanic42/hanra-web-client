export default {
    getCards(state) {
        return state.cards;
    },

    getCurrentCard(state) {
        return state.cards[state.currentCardIndex];
    },

    getHasNextCard(state) {
        return (state.currentCardIndex + 1) < state.cards.length;
    },

    getStatisticAverageRating(state) {
        let stat = state.statistics.reduce((prev, cur) => prev + cur.rating, 0,0);
        stat = parseFloat(stat);
        stat = stat / state.statistics.length;
        return stat;
    },

    getStatisticNumCorrect(state) {
        return state.statistics.reduce((prev, cur) => {
            return prev + ((cur.rating > 0.5)? 1 : 0);
        }, 0.0);
    },

    // Returns the number of cards *including* review cards
    getNumCards(state) {
        return state.cards.length;
    },

    getNumCardsLeft(state) {
        return Math.max(0, state.cards.length - (state.currentCardIndex + 1)); 
    },

    // Returns the number of cards *without* review cards
    getStatisticNumCards(state) {
        return state.statistics.length
    },

    getCardsIsLoading(state) {
        return state.cardsIsLoading;
    },

    getCardsHasLoadingError(state) {
        return state.cardsHasLoadingError
    },

    getCardsHasLoadingErrorReason(state) {
        return state.cardsHasLoadErroringReason; 
    },

    getReviewIsSaving(state) {
        return state.reviewIsSaving;
    },

    getReviewHasSavingError(state) {
        return state.reviewHasSavingError;
    },

    getReviewHasSavingErrorReason(state) {
        return state.reviewHasSavingErrorReason;
    }
}