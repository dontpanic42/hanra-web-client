import { mapActions, mapGetters, mapMutations } from 'vuex';
import CardListItem from '../../components/cardlistitem/CardListItem.vue';
import CreateCardModal from '../../components/createcardmodal/CreateCardModal.vue'
import Pagination from '../../components/pagination/Pagination.vue'
import types from '../../store/types';
import debounce from '../../utils/debounce';

export default {
    name: 'SetDashboard',
    props: {},
    data: () => {
        return {
        }
    },
    created() {
        const setId = this.$route.params.setId;

        // Reset search query on enter
        this.fulltextSearch = '';

        this.loadSet(setId);
        this.loadCards({
            setId, 
            pageNo:0
        });
    },
    components: {
        CardListItem,
        CreateCardModal,
        Pagination
    },
    methods: {
        ...mapActions({
            'loadSet': types.CURSET_LOAD_SET,
            'loadCards': types.CURSET_LOAD_CARDS_PAGE,
            'deleteCard': types.CURSET_DELETE_CARD
        }),

        ...mapMutations({
            'showCreateCardModal': types.CURSET_SET_CREATE_CARD_MODAL_VISIBLE,
            'showEditCardModal': types.CURSET_SET_CREATE_CARD_MODAL_UPDATE_VISIBLE,
            'setCardsSearchText': types.CURSET_SET_CARDS_SEARCH_TEXT
        }),

        showModal() {
            this.showCreateCardModal(true);
        },

        showCardPage(pageNo) {
            this.loadCards({
                setId: this.currentSetId, 
                pageNo
            });
        },

        reloadCards() {
            const setId = this.$route.params.setId;
            this.loadCards({
                setId, 
                pageNo:0
            });
        },

        reloadCardsDebounced: debounce(function() {
            this.reloadCards();
        }, 500)
    },
    computed: {
        ...mapGetters({
            'currentSet': types.CURSET_GET_CURRENT_SET,
            'currentSetId': types.CURSET_GET_CURRENT_SET_ID,
            'isLoading': types.CURSET_GET_SET_IS_LOADING,
            'hasLoadingError': types.CURSET_GET_SET_HAS_LOADING_ERROR,
            'cards': types.CURSET_GET_CARDS,
            'cardsPage': types.CURSET_GET_CARDS_PAGE,
            'cardsSearchText': types.CURSET_GET_CARDS_SEARCH_TEXT,
            'cardsNumPages': types.CURSET_GET_CARDS_NUM_PAGES,
            'cardsNumTotal': types.CURSET_GET_CARDS_NUM_TOTAL,
            'cardsHasLoadingError': types.CURSET_GET_CARDS_HAS_LOADING_ERROR,
            'cardsHasDeletingError': types.CURSET_GET_DELETE_CARD_HAS_ERROR
        }),

        isSearching() {
            return this.fulltextSearch.trim().length != 0;
        },

        fulltextSearch: {
            get() {
                return this.cardsSearchText;
            },

            set(value) {
                this.setCardsSearchText(value);
                if(value.trim() == '') {
                    this.reloadCards();
                } else {
                    this.reloadCardsDebounced();
                }
            }
        }
    }
};
