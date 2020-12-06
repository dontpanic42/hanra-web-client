export default Object.freeze({
    api: {
        baseUrl: 'http://localhost:3000/api/',
        ep: {
            getSetList: 'set',
            getSetDetails: 'set/:setId',

            getAllCards: 'set/:setId/card',
            createCard: 'set/:setId/card',
            deleteCard: 'set/:setId/card/:cardId'
        }
    }
});