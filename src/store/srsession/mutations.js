export default {
    setCards(state, cards) {
        state.cards = cards;
    },

    // Set the 'isReview' flag on the current card
    flagCurrentCardAsReview(state) {
        const card = state.cards[state.currentCardIndex];
        card.isReview = true;
    },

    // Takes the current card and appends it at the end of the card deck
    // (without removing or deep cloning)
    appendCurrentCard(state) {
        const card = state.cards[state.currentCardIndex];
        state.cards = state.cards.concat(card);
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