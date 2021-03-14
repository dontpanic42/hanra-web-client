import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        card: {},
        hasCard: false,
        
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