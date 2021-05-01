import HanziText from '../hanzitext/HanziText.vue';

export default {
    name: 'CardContentTable',
    props: {
        'card': {
            type: Object,
            required: true
        }
    },
    components: {
        HanziText
    }
};
