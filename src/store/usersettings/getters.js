export default {
    getSettings(state) {
        return state.settings;
    },

    isLoaded(state) {
        return state.isLoaded;
    },

    isLoading(state) {
        return state.isLoading;
    },

    hasLoadingError(state) {
        return state.hasLoadingError;
    },

    isSaving(state) {
        return state.isSaving;
    },

    hasSavingError(state) {
        return state.hasSavingError;
    }
}