import { mapActions, mapGetters, mapMutations } from 'vuex';
import CardListItem from '../../components/cardlistitem/CardListItem.vue';
import CreateCardModal from '../../components/createcardmodal/CreateCardModal.vue'
import Pagination from '../../components/pagination/Pagination.vue'
import types from '../../store/types';

export default {
    name: 'SetDashboard',
    props: {},
    data: () => {
        return {}
    },
    created() {
        const setId = this.$route.params.setId;

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
            'showEditCardModal': types.CURSET_SET_CREATE_CARD_MODAL_UPDATE_VISIBLE
        }),

        showModal() {
            this.showCreateCardModal(true);
            console.log('setting visible')
        },

        showCardPage(pageNo) {
            this.loadCards({
                setId: this.currentSetId, 
                pageNo
            });
        }
    },
    computed: {
        ...mapGetters({
            'currentSet': types.CURSET_GET_CURRENT_SET,
            'currentSetId': types.CURSET_GET_CURRENT_SET_ID,
            'isLoading': types.CURSET_GET_SET_IS_LOADING,
            'hasLoadingError': types.CURSET_GET_SET_HAS_LOADING_ERROR,
            'cards': types.CURSET_GET_CARDS,
            'cardsPage': types.CURSET_GET_CARDS_PAGE,
            'cardsNumPages': types.CURSET_GET_CARDS_NUM_PAGES,
            'cardsHasLoadingError': types.CURSET_GET_CARDS_HAS_LOADING_ERROR,
            'cardsHasDeletingError': types.CURSET_GET_DELETE_CARD_HAS_ERROR
        })
    }
};
