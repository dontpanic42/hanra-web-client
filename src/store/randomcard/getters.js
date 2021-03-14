export default {
    getCard(state) {
        return state.card;
    },

    getHasCard(state) {
        return state.hasCard;
    },

    getIsLoading(state) {
        return state.isLoading;
    },

    getHasLoadingError(state) {
        return state.hasLoadingError;
    }
}