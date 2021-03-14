export default Object.freeze({
    api: {
        baseUrl: process.env.VUE_APP_API_BASEURL,
        ep: {
            getSetList: 'set',
            getSetDetails: 'set/:setId',

            getAllCards: 'set/:setId/card',
            createCard: 'set/:setId/card',
            updateCard: 'set/:setId/card/:cardId',
            deleteCard: 'set/:setId/card/:cardId',

            getSession: 'set/:setId/sr',
            setCardReview: 'set/:setId/sr/:cardId',

            getSettings: 'settings',
            saveSettings: 'settings',

            getRandomCard: 'set/:setId/random'
        }
    }
});