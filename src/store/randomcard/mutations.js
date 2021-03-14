export default {
    setCard(state, card) {
        state.card = card;
    },

    setHasCard(state, value) {
        state.hasCard = value;
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