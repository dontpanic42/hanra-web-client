import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        sets: [],
        loaded: false,
        loading: false,
        loadingError: false,
        loadingErrorReason: undefined,

        newSetModalVisible: false,
        newSetModalSaving: false,
        newSetModalSavingError: false,
        newSetModalSavingErrorReason: undefined
    },

    getters,
    mutations,
    actions,
    namespaced: true
}

export default module;