import types from '../../store/types';
import HanziText from '../../components/hanzitext/HanziText.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'RandomCard',
    props: {},
    data: () => {
        return {}
    },
    created() {
        // if(!this.card) {
        //     // On page reload the session is lost, so we need to start from the beginning
        //     console.warn('No card found, redirecting to session start!');
        //     this.$router.replace(`/sets/${this.$route.params.setId}/learn`);
        // }
        this.reloadCard();
    },
    components: {
        HanziText
    },
    data: function() {
        return {
            isRevealed: false,
            internalType: 'all',
        }
    },
    watch: {
        '$route.params.type': function() {
            this.reloadCard();
        }
    },
    methods: {
        ...mapActions({
            'loadCard': types.RND_FETCH_CARD,
        }),

        showAnswer() {
            this.isRevealed = true;
        },

        reloadCard() {
            this.isRevealed = false;
            this.loadCard({
                setId: this.currentSet,
                type: this.currentType
            });
        },
        next(type) {
            console.log('calling next card with', type);

            if(type == this.currentType) {
                this.reloadCard();
            } else {
                this.internalType = type;
                this.$router.replace(`/sets/${this.currentSet}/random/${type}`);
            }
        }
    },
    computed: {
        ...mapGetters({
            'card': types.RND_GET_CARD,
            'hasCard': types.RND_GET_HAS_CARD,
            'isLoading': types.RND_GET_IS_LOADING,
            'hasLoadingError': types.RND_GET_HAS_LOADING_ERROR
        }),

        currentSet() {
            return this.$route.params.setId
        },

        currentType() {
            return typeof(this.$route.params.type) === 'undefined' ? this.internalType : this.$route.params.type;
        },

        hasNoNewCard() {
            return false;
        }
    }
};
