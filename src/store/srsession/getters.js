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
        console.log(state.statistics)
        return state.statistics.reduce((prev, cur) => {
            return prev + ((cur.rating > 0.5)? 1 : 0);
        }, 0.0);
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