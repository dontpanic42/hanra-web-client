import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        cards: [],
        currentCardIndex: 0,

        statistics: [],

        cardsIsLoading: false,
        cardsHasLoadingError: false,
        cardsHasLoadingErrorReason: undefined,

        reviewIsSaving: false,
        reviewHasSavingError: false,
        reviewHasSavingErrorReason: undefined
    },

    getters,
    mutations,
    actions,
    namespaced: true
}

export default module;