export default {

    /**
     * Add a new set to the set list
     * @param {*} state 
     * @param {*} set 
     */
    addSet(state, set) {
        state.sets.push(set);
    },

    setSetList(state, sets) {
        state.sets.length = 0;
        state.sets.push(...sets);
    },

    setLoaded(state, val) {
        state.loaded = val;
    },

    setLoading(state, val) {
        state.loading = val;
    },

    setLoadingError(state, val) {
        state.error = val;
    },

    setLoadingErrorReason(state, val) {
        state.errorReason = val;
    },

    // Modal /////////////////////////////////////////////

    setNewSetModalVisible(state, val) {
        state.newSetModalVisible = val;
    },

    setNewSetModalSaving(state, val) {
        state.newSetModalSaving = val;
    },

    setNewSetModalSavingError(state, val) {
        state.newSetModalSavingError = val;
    },

    setNewSetModalSavingErrorReason(state, val) {
        state.newSetModalSavingErrorReason = val;
    }
}