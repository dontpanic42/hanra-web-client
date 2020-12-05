

export default {
    name: 'CardView',
    props: {},
    data: () => {
        return {
            isResolved: false
        }
    },
    methods: {
        resolve() {
            this.isResolved = true;
        },
        next(answerCorrect) {
            console.log('answer was', answerCorrect);
            this.isResolved = false;
        }
    },
    components: {
    }
};
