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
    CURSET_GET_CREATE_CARD_MODAL_CARD_INDEX: 'currentset/getCreateCardModalCardIndex',
    CURSET_GET_CREATE_CARD_MODAL_IS_SAVING: 'currentset/getCreateCardModalIsSaving',
    CURSET_GET_CREATE_CARD_MODAL_HAS_SAVING_ERROR: 'currentset/getCreateCardModalHasSavingError',
    CURSET_GET_CARDS: 'currentset/getCards',
    CURSET_GET_CARDS_SEARCH_TEXT: 'currentset/getCardsSearchText',
    CURSET_GET_CARDS_PAGE: 'currentset/getCardsPage',
    CURSET_GET_CARDS_NUM_PAGES: 'currentset/getCardsNumPages',
    CURSET_GET_CARDS_NUM_TOTAL: 'currentset/getCardsNumTotal',
    CURSET_GET_CARDS_IS_LOADING: 'currentset/getCardsIsLoading',
    CURSET_GET_CARDS_HAS_LOADING_ERROR: 'currentset/getCardsHasLoadingError',
    CURSET_GET_DELETE_CARD_IS_LOADING: 'currentset/getDeleteCardIsLoading',
    CURSET_GET_DELETE_CARD_HAS_ERROR: 'currentset/getDeleteCardHasError',
    CURSET_GET_DELETE_CARD_HAS_ERROR_REASON: 'currentset/getDeleteCardHasErrorReason',
    // currentset mutations
    CURSET_SET_CARDS_SEARCH_TEXT: 'currentset/setCardsSearchText',
    CURSET_SET_CREATE_CARD_MODAL_VISIBLE: 'currentset/showCreateCardModal',
    CURSET_SET_CREATE_CARD_MODAL_UPDATE_VISIBLE: 'currentset/showCreateCardModalUpdate',
    CURSET_SET_CREATE_CARD_MODAL_SAVING: 'currentset/setCreateCardModalIsSaving',

    // srsession
    // actions
    SRS_LOAD_SESSION: 'srsession/loadSession',
    SRS_UPDATE_RATING: 'srsession/updateSRItem',
    // getter
    SRS_GET_CARDS: 'srsession/getCards',
    SRS_GET_CURRENT_CARD: 'srsession/getCurrentCard',
    SRS_GET_HAS_NEXT_CARD: 'srsession/getHasNextCard',
    SRS_GET_CARDS_IS_LOADING: 'srsession/getCardsIsLoading',
    SRS_GET_CARDS_HAS_LOADING_ERROR: 'srsession/getCardsHasLoadingError',
    SRS_GET_REVIEW_IS_SAVING: 'srsession/getReviewIsSaving',
    SRS_GET_REVIEW_HAS_SAVING_ERROR: 'srsession/getReviewHasSavingError',
    SRS_GET_STAT_AVG_RATING: 'srsession/getStatisticAverageRating',
    SRS_GET_STAT_NUM_CORRECT: 'srsession/getStatisticNumCorrect',
    // srsession mutations
    SRS_SET_NEXT_CARD: 'srsession/nextCard',
    SRS_SET_RESET: 'srsession/resetSession',

    // strokeordermodal
    // getter
    SOM_GET_IS_VISIBLE: 'strokeordermodal/getIsVisible',
    SOM_GET_CHARARCTER: 'strokeordermodal/getCharacter',
    // strokeordermodal mutations
    SOM_SET_VISIBLE: 'strokeordermodal/setVisible',
    SOM_SET_SHOW_CHARACTER: 'strokeordermodal/showCharacter',

    // User settings

    // actions
    SETTINGS_LOAD_SETTINGS: 'usersettings/loadSettings',
    SETTINGS_SAVE_SETTINGS: 'usersettings/saveSettings',
    // getters
    SETTINGS_GET_SETTINGS: 'usersettings/getSettings',
    SETTINGS_IS_LOADING: 'usersettings/isLoading',
    SETTINGS_HAS_LOADING_ERROR: 'usersettings/hasLoadingError',
    SETTINGS_IS_SAVING: 'usersettings/isSaving',
    SETTINGS_HAS_SAVING_ERROR: 'usersettings/hasSavingError',

    // Random Card
    // actions
    RND_FETCH_CARD: 'randomcard/fetchCard',
    // getter
    RND_GET_CARD: 'randomcard/getCard',
    RND_GET_HAS_CARD: 'randomcard/getHasCard',
    RND_GET_IS_LOADING: 'randomcard/getIsLoading',
    RND_GET_HAS_LOADING_ERROR: 'randomcard/getHasLoadingError',
});