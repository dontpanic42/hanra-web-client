import types from '../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PinyinInput from '../pinyininput/PinyinInput.vue';

export default {
    name: 'CreateCardModal',
    props: {},
    data: () => {
        return {
            cardQuestion: '',
            cardAnswer1: '',
            cardAnswer2: ''
        }
    },
    components: {
        PinyinInput
    },
    methods: {
        ...mapActions({
            'saveCard': types.CURSET_SAVE_CARD
        }),

        ...mapMutations({
            'setVisible': types.CURSET_SET_CREATE_CARD_MODAL_VISIBLE,
            'setSaving': types.CURSET_SET_CREATE_CARD_MODAL_SAVING
        }),

        clear() {
            this.cardQuestion = '';
            this.cardAnswer1 = '';
            this.cardAnswer2 = '';
        },

        cancel() {
            if(!this.isSaving) {
                this.clear();
                this.setVisible(false);
            }
        },

        async save() {
            await this.saveCard({
                question: this.cardQuestion,
                answerLine1: this.cardAnswer1,
                answerLine2: this.cardAnswer2
            });

            if(!this.hasSavingError) {
                this.clear();
                this.setVisible(false);
            }
        },

        setFocus() {
            setTimeout(() => {
                if(this.$el) {
                    this.$el.querySelector('.focus-on-enter').focus();
                }
            });
        }
    },
    watch: {
        // Check for visibility changes. When the dialog becomes visible, we want the first
        // input field to be focussed
        'isVisible': function(newValue, oldValue) {
            if(newValue && newValue != oldValue) {
                this.setFocus();
            }
        }
    },
    computed: {
        ...mapGetters({
            'isVisible': types.CURSET_GET_CREATE_CARD_MODAL_VISIBLE,
            'isSaving': types.CURSET_GET_CREATE_CARD_MODAL_IS_SAVING,
            'hasSavingError': types.CURSET_GET_CREATE_CARD_MODAL_HAS_SAVING_ERROR,
            'set': types.CURSET_GET_CURRENT_SET
        }),

        inputError() {
            return  this.cardQuestion.trim().length < 1 ||
                    this.cardAnswer1.trim().length < 1 || 
                    this.cardAnswer2.trim().length < 1; 
        }
    }
};
