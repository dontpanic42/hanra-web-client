import types from '../../store/types';
import CardContentTable from '../../components/cardcontenttable/CardContentTable.vue';
import CardMetaTags from '../../components/cardmetatags/CardMetaTags.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'RandomCard',
    props: {},
    data: () => {
        return {}
    },
    created() {
        this.reloadCard();
    },
    components: {
        CardContentTable,
        CardMetaTags
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
            'hasLoadingError': types.RND_GET_HAS_LOADING_ERROR,
            'currentCardIndex': types.RND_GET_CURRENT_CARD_INDEX,
            'numCards': types.RND_GET_NUM_CARDS
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
