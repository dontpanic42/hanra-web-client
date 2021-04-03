export default {
    setCards(state, cards) {
        state.cards = cards;
    },

    setCurrentCardIndex(state, index) {
        state.currentCardIndex = index;
    },

    setCurrentCardType(state, type) {
        state.currentCardType = type;
    },

    setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
    },

    setHasLoadingError(state, hasLoadingError) {
        state.hasLoadingError = hasLoadingError;
    },

    setHasLoadingErrorReason(state, hasLoadingErrorReason) {
        state.hasLoadingErrorReason = hasLoadingErrorReason;
    }
}