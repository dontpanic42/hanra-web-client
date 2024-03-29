import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        set: undefined,
        setId: undefined,
        setIsLoading: false,
        setHasLoadingError: false,
        setHasLoadingErrorReason: undefined,

        createCardModalVisible: false,
        createCardModalIsSaving: false,
        createCardModalCardIndex: undefined,
        createCardModalHasSavingError: false,
        createCardModalHasSavingErrorReason: undefined,

        cards: undefined,
        cardsSearchText: '',
        cardsPage: 0,
        cardsNumPages: undefined,
        cardsNumTotal: 0,
        cardsIsLoading: false,
        cardsHasLoadingError: false,
        cardsHasLoadingErrorReason: undefined,

        deleteCardIsLoading: false,
        deleteCardHasHrror: false,
        deleteCardHasErrorReason: false
    },

    getters,
    mutations,
    actions,
    namespaced: true
}

export default module;