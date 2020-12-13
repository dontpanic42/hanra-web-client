export default {

    getCurrentSet(state) {
        return state.set;
    },

    getCurrentSetId(state) {
        return parseInt(state.setId, 10);
    },

    getSetIsLoading(state) {
        return state.setIsLoading;
    },

    getSetHasLoadingError(state) {
        return state.getSetHasLoadingError;
    },

    getSetHasLoadingErrorReason(state) {
        return state.getSetHasLoadingErrorReason
    },

    getCreateCardModalVisible(state) {
        return state.createCardModalVisible;
    },

    getCreateCardModalCardIndex(state) {
        return state.createCardModalCardIndex;
    },

    getCreateCardModalIsSaving(state) {
        return state.createCardModalIsSaving;
    },

    getCreateCardModalHasSavingError(state) {
        return state.createCardModalHasSavingError
    },

    getCards(state) {
        return state.cards;
    },

    getCardsPage(state) {
        return state.cardsPage;
    },

    getCardsSearchText(state) {
        return state.cardsSearchText;
    },

    getCardsNumPages(state) {
        return state.cardsNumPages;
    },

    getCardsIsLoading(state) {
        return  state.cardsIsLoading;
    },

    getCardsHasLoadingError(state) {
        return state.cardsHasLoadingError;
    },

    getDeleteCardIsLoading(state) {
        return state.deleteCardIsLoading;
    },

    getDeleteCardHasError(state) {
        return state.deleteCardHasError;
    },

    getDeleteCardHasErrorReason(state) {
        return state.deleteCardHasErrorReason;
    }
}