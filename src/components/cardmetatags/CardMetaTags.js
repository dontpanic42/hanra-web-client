import HanziText from '../hanzitext/HanziText.vue';

export default {
    name: 'CardMetaTags',
    props: {
        'card': {
            type: Object,
            required: true
        },
        'isNew': {
            type: Boolean
        }
    },
    computed: {
        tags() {
            const mytags = [];

            if( typeof(this.card.type) == 'string' && 
                this.card.type == 'new') {
                mytags.push('Neu!');
            }

            if( typeof(this.card.answerMeasureHanzi) == 'string' && 
                this.card.answerMeasureHanzi.trim().length) {
                mytags.push('ZW');
            }

            if( typeof(this.card.answerExample) == 'string' && 
                this.card.answerExample.trim().length) {
                mytags.push('EX');
            }

            return mytags;
        }
    }
};
