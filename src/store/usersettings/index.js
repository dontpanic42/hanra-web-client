import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        settings: {},

        isSaving: false,
        hasSavingError: false,
        hasSavingErrorReason: undefined,

        isLoaded: false,
        isLoading: false,
        hasLoadingError: false,
        hasLoadingErrorReason: undefined
    },

    getters,
    mutations,
    actions,
    namespaced: true
}

export default module;