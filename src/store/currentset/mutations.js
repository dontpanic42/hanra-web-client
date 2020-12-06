export default {

    setCurrentSet(state, set) {
        state.set = set;
    },

    setCurrentSetId(state, id) {
        state.setId = id;
    },

    setSetIsLoading(state, val) {
        state.setIsLoading = val;
    },

    setSetHasLoadingError(state, val) {
        state.setHasLoadingError = val;
    },

    setSetHasLoadingErrorReason(state, e) {
        state.setHasLoadingErrorReason = e;
    },

    // Create Card Modal

    setCreateCardModalVisible(state, val) {
        state.createCardModalVisible = val;
    },

    setCreateCardModalIsSaving(state, val) {
        state.createCardModalIsSaving = val;
    },

    setCreateCardModalHasSavingError(state, val) {
        state.createCardModalHasSavingError = val;
    },

    setCreateCardModalHasSavingErrorReason(state, e) {
        state.createCardModalHasSavingErrorReason = e;
    },

    // Card List 

    setCards(state, cards) {
        state.cards = cards;
    },

    setCardsPage(state, page) {
        state.cardsPage = page;
    },

    setCardsNumPages(state, numPages) {
        state.cardsNumPages = numPages;
    },

    setCardsIsLoading(state, val) {
        state.cardsIsLoading = val;
    },

    setCardsHasLoadingError(state, val) {
        state.cardsHasLoadingError = val;
    },

    setCardsHasLoadingErrorReason(state, e) {
        state.cardsHasLoadingErrorReason = e;
    },

    // Delete card

    setDeleteCardIsLoading(state, val) {
        state.deleteCardIsLoading = val;
    },

    setDeleteCardHasError(state, val) {
        state.deleteCardHasError = val;
    },

    setDeleteCardHasErrorReason(state, val) {
        state.deleteCardHasErrorReason = val;
    }
}