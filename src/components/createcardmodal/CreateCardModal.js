import types from '../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PinyinInput from '../pinyininput/PinyinInput.vue';

export default {
    name: 'CreateCardModal',
    props: {},
    data: () => {
        return {
            cardQuestion: '',
            cardAnswerWordPinyin: '',
            cardAnswerWordHanzi: '',
            cardAnswerMeasurePinyin: '',
            cardAnswerMeasureHanzi: '',
            cardAnswerExample: '',
            activeTab: 'word'
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
            this.cardAnswerWordPinyin = '';
            this.cardAnswerWordHanzi = '';
            this.cardAnswerMeasurePinyin = '';
            this.cardAnswerMeasureHanzi = '';
            this.cardAnswerExample = '';

            this.setActiveTab('word');
        },

        cancel() {
            if(!this.isSaving) {
                this.clear();
                this.setVisible(false);
            }
        },

        setActiveTab(tab) {
            this.activeTab = tab;
        },

        normalize(value) {
            if(typeof(value) === 'string') {
                return value.normalize();
            }

            return value;
        },

        async save() {
            await this.saveCard({
                id: this.isEditModal ? this.cards[this.cardIndex].id : undefined,
                question: this.cardQuestion,
                answerWordPinyin: this.cardAnswerWordPinyin,
                answerWordHanzi: this.normalize(this.cardAnswerWordHanzi),
                answerMeasurePinyin: this.cardAnswerMeasurePinyin,
                answerMeasureHanzi: this.normalize(this.cardAnswerMeasureHanzi),
                answerExample: this.normalize(this.cardAnswerExample)
            });

            if(!this.hasSavingError) {

                // If this is an edit modal, we need to write the new values back
                // to the state so they are displayed elsewhere
                if(this.isEditModal) {
                    this.cards[this.cardIndex].question = this.cardQuestion;
                    this.cards[this.cardIndex].answerWordPinyin = this.cardAnswerWordPinyin;
                    this.cards[this.cardIndex].answerWordHanzi = this.cardAnswerWordHanzi;
                    this.cards[this.cardIndex].answerMeasurePinyin = this.cardAnswerMeasurePinyin;
                    this.cards[this.cardIndex].answerMeasureHanzi = this.cardAnswerMeasureHanzi;
                    this.cards[this.cardIndex].answerExample = this.cardAnswerExample;
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
                    this.cardAnswerWordPinyin = this.cards[this.cardIndex].answerWordPinyin;
                    this.cardAnswerWordHanzi = this.cards[this.cardIndex].answerWordHanzi;
                    this.cardAnswerMeasurePinyin = this.cards[this.cardIndex].answerMeasurePinyin;
                    this.cardAnswerMeasureHanzi = this.cards[this.cardIndex].answerMeasureHanzi;
                    this.cardAnswerExample = this.cards[this.cardIndex].answerExample;
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
                    this.cardAnswerWordPinyin.trim().length < 1 || 
                    this.cardAnswerWordHanzi.trim().length < 1; 
        }
    }
};
