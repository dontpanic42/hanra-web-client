export default {
    setSettings(state, settings) {
        state.settings = settings;
    },

    setIsLoaded(state, val) {
        state.isLoaded = val;
    },

    setIsLoading(state, val) {
        state.isLoading = val;
    },

    setHasLoadingError(state, val) {
        state.hasLoadingError = val;
    },

    setHasLoadingErrorReason(state, val) {
        state.hasLoadingErrorReason = val;
    },

    setIsSaving(state, val) {
        state.isSaving = val;
    },

    setHasSavingError(state, val) {
        state.hasSavingError = val;
    },

    setHasSavingErrorReason(state, val) {
        state.hasSavingErrorReason = val;
    }
}