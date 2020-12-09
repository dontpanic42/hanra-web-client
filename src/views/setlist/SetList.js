import SetCard from '../../components/setcard/SetCard.vue';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.vue';
import CreateSetModal from '../../components/createsetmodal/CreateSetModal.vue';
import types from '../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'SetList',
    props: {},
    data: () => {
        return {}
    },
    created() {
        this.loadSetList();
    },
    components: {
        SetCard,
        BreadCrumbs,
        CreateSetModal
    },
    methods: {
        ...mapActions({
            'loadSetList': types.SETS_LOAD_LIST
        }),

        ...mapMutations({
            'showNewSetModal': types.SETS_SET_NEW_SET_MODAL_VISIBLE
        })
    },
    computed: {
        ...mapGetters({
            'setList': types.SETS_GET_LIST,
            'isLoading': types.SETS_GET_IS_LOADING,
            'isLoadingError': types.SETS_GET_IS_LOADING_ERROR,
        })
    }
};
