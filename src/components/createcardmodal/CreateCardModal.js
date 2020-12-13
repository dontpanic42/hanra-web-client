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
            'saveCard': types.CURSET_SAVE_CARD,
            'updateCard': types.CURSET_UPDATE_CARD
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
                id: this.isEditModal ? this.cards[this.cardIndex].id : undefined,
                question: this.cardQuestion,
                answerLine1: this.cardAnswer1,
                answerLine2: this.cardAnswer2.normalize()
            });

            if(!this.hasSavingError) {

                // If this is an edit modal, we need to write the new values back
                // to the state so they are displayed elsewhere
                if(this.isEditModal) {
                    this.cards[this.cardIndex].question = this.cardQuestion;
                    this.cards[this.cardIndex].answerLine1 = this.cardAnswer1;
                    this.cards[this.cardIndex].answerLine2 = this.cardAnswer2;
                }

                this.clear();
                this.setVisible(false);
            }
        },

        onVisible() {
            setTimeout(() => {
                // When this is an edit modal, we need to copy the initial values
                // of the reference card to the form
                if(this.isEditModal) {
                    this.cardQuestion = this.cards[this.cardIndex].question;
                    this.cardAnswer1 = this.cards[this.cardIndex].answerLine1;
                    this.cardAnswer2 = this.cards[this.cardIndex].answerLine2;
                }

                // Focus the first item 
                if(this.$el) {
                    this.$el.querySelector('.focus-on-enter').focus();
                }
            });
        }
    },
    watch: {
        'isVisible': function(newValue, oldValue) {
            if(newValue && newValue != oldValue) {
                this.onVisible();
            }
        }
    },
    computed: {
        ...mapGetters({
            'isVisible': types.CURSET_GET_CREATE_CARD_MODAL_VISIBLE,
            'cardIndex': types.CURSET_GET_CREATE_CARD_MODAL_CARD_INDEX,
            'isSaving': types.CURSET_GET_CREATE_CARD_MODAL_IS_SAVING,
            'hasSavingError': types.CURSET_GET_CREATE_CARD_MODAL_HAS_SAVING_ERROR,
            'set': types.CURSET_GET_CURRENT_SET,
            'cards': types.CURSET_GET_CARDS
        }),

        /**
         * True when this modal is currently used to edit a card instead of creating a new one
         */
        isEditModal() {
            return typeof(this.cardIndex) == 'number';
        },

        inputError() {
            return  this.cardQuestion.trim().length < 1 ||
                    this.cardAnswer1.trim().length < 1 || 
                    this.cardAnswer2.trim().length < 1; 
        }
    }
};
