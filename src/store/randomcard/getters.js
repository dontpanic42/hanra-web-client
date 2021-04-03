export default {
    getAllCards(state) {
        return state.cards;
    },

    getCard(state) {
        const index = state.currentCardIndex;
        return state.cards[index];
    },

    getCurrentCardIndex(state) {
        return state.currentCardIndex;
    },

    getCurrentCardType(state) {
        return state.currentCardType;
    },

    getHasCard(state) {
        return state.currentCardIndex < state.cards.length;
    },

    getIsLoading(state) {
        return state.isLoading;
    },

    getHasLoadingError(state) {
        return state.hasLoadingError;
    }
}