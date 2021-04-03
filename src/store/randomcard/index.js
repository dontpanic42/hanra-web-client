import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        cards: [],

        currentCardIndex: 0,
        
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