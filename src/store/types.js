export default Object.freeze({
    // sets actions
    SETS_LOAD_LIST: 'sets/loadSetList',
    SETS_SAVE_NEW_SET: 'sets/saveNewSet',
    // sets getters
    SETS_GET_LIST: 'sets/setList',
    SETS_GET_IS_LOADED: 'sets/isLoaded',
    SETS_GET_IS_LOADING: 'sets/isLoading',
    SETS_GET_IS_LOADING_ERROR: 'sets/isLoadingError',
    SETS_GET_LOADING_ERROR_REASON: 'sets/loadingErrorReason',
    SETS_GET_NET_SET_MODAL_VISIBLE: 'sets/isNewSetModalVisible',
    SETS_GET_NEW_SET_MODAL_SAVING: 'sets/isNewSetModalSaving',
    SETS_GET_NEW_SET_MODAL_SAVING_ERROR: 'sets/isNewSetModalSavingError',
    SETS_GET_NEW_SET_MODAL_SAVING_ERROR_REASON: 'sets/newSetModalSavingErrorReason',
    // sets mutations
    SETS_SET_NEW_SET_MODAL_VISIBLE: 'sets/setNewSetModalVisible',
    SETS_SET_NEW_SET_MODAL_SAVING: 'sets/setNewSetModalSaving',
    SETS_SET_NEW_SET_MODAL_SAVING_ERROR: 'sets/setNewSetModalSavingError',
    SETS_SET_NWE_SET_MODAL_SAVING_ERROR_REASON: 'sets/setNewSetModalSavingErrorReason',

    // current set actions
    CURSET_LOAD_SET: 'currentset/loadCurrentSet',
    CURSET_SAVE_CARD: 'currentset/saveCard',
    CURSET_LOAD_CARDS_PAGE: 'currentset/loadCardListPage',
    CURSET_DELETE_CARD: 'currentset/deleteCard',
    // currentset getters
    CURSET_GET_CURRENT_SET: 'currentset/getCurrentSet',
    CURSET_GET_CURRENT_SET_ID: 'currentset/getCurrentSetId',
    CURSET_GET_SET_IS_LOADING: 'currentset/getSetIsLoading',
    CURSET_GET_SET_HAS_LOADING_ERROR: 'currentset/getSetHasLoadingError',
    CURSET_GET_SET_HAS_LOADING_ERROR_REASON: 'currentset/getSetHasLoadingErrorReason',
    CURSET_GET_CREATE_CARD_MODAL_VISIBLE: 'currentset/getCreateCardModalVisible',
    CURSET_GET_CREATE_CARD_MODAL_IS_SAVING: 'currentset/getCreateCardModalIsSaving',
    CURSET_GET_CREATE_CARD_MODAL_HAS_SAVING_ERROR: 'currentset/getCreateCardModalHasSavingError',
    CURSET_GET_CARDS: 'currentset/getCards',
    CURSET_GET_CARDS_PAGE: 'currentset/getCardsPage',
    CURSET_GET_CARDS_NUM_PAGES: 'currentset/getCardsNumPages',
    CURSET_GET_CARDS_IS_LOADING: 'currentset/getCardsIsLoading',
    CURSET_GET_CARDS_HAS_LOADING_ERROR: 'currentset/getCardsHasLoadingError',
    CURSET_GET_DELETE_CARD_IS_LOADING: 'currentset/getDeleteCardIsLoading',
    CURSET_GET_DELETE_CARD_HAS_ERROR: 'currentset/getDeleteCardHasError',
    CURSET_GET_DELETE_CARD_HAS_ERROR_REASON: 'currentset/getDeleteCardHasErrorReason',
    // currentset mutations
    CURSET_SET_CREATE_CARD_MODAL_VISIBLE: 'currentset/setCreateCardModalVisible',
    CURSET_SET_CREATE_CARD_MODAL_SAVING: 'currentset/setCreateCardModalIsSaving'
});