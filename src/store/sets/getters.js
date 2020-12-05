export default {

    /**
     * Return the list of all sets available to the user
     * @param {} state 
     */
    setList(state) {
        return state.sets;
    },

    isLoaded(state) {
        return state.isLoaded;
    },

    isLoading(state) {
        return state.isLoading;
    },

    isLoadingError(state) {
        return state.isLoadingError;
    },

    loadingErrorReason(state) {
        return state.loadingErrorReason;
    },

    // Modal ////////////////////////////////////////////////

    isNewSetModalVisible(state) {
        return state.newSetModalVisible;
    },

    isNewSetModalSaving(state) {
        return state.newSetModalSaving;
    },

    isNewSetModalSavingError(state) {
        return state.newSetModalSavingError;
    },

    newSetModalSavingErrorReason(state) {
        return state.newSetModalSavingErrorReason;
    }
}