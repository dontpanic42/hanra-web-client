export default {
    setCards(state, cards) {
        state.cards = cards;
    },

    nextCard(state) {
        state.currentCardIndex++;
    },

    resetSession(state) {
        state.currentCardIndex = 0;
        state.statistics = [];
    },

    putStatisticReview(state, rating) {
        const stat = state.statistics[state.currentCardIndex] || {};
        stat['rating'] = rating;
        state.statistics[state.currentCardIndex] = stat;
        console.log('blah', state.statistics);
    },

    setCardsIsLoading(state, value) {
        state.cardsIsLoading = value;
    },

    setCardsHasLoadingError(state, value) {
        state.cardsHasLoadingError = value;
    },

    setCardsHasLoadingErrorReason(state, value) {
        state.cardsHasLoadingErrorReason = value;
    },

    setReviewIsSaving(state, value) {
        state.reviewIsSaving = value;
    },

    setReviewHasSavingError(state, value) {
        state.reviewHasSavingError = value;
    },

    setReviewHasSavingErrorReason(state, value) {
        state.reviewHasSavingErrorReason = value;
    }
}