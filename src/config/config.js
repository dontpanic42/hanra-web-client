export default Object.freeze({
    api: {
        baseUrl: process.env.VUE_APP_API_BASEURL,
        ep: {
            getSetList: 'set',
            getSetDetails: 'set/:setId',

            getAllCards: 'set/:setId/card',
            createCard: 'set/:setId/card',
            deleteCard: 'set/:setId/card/:cardId',

            getSession: 'set/:setId/sr',
            setCardReview: 'set/:setId/sr/:cardId'
        }
    }
});