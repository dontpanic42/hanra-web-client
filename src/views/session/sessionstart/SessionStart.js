import types from '../../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'SessionStart',
    props: {},
    data: () => {
        return {}
    },
    created() {
        const setId = this.$route.params.setId;
        this.loadSession(setId);
    },
    methods: {
        ...mapActions({
            'loadSession': types.SRS_LOAD_SESSION
        })
    },
    computed: {
        ...mapGetters({
            'cards': types.SRS_GET_CARDS,
            'isLoading': types.SRS_GET_CARDS_IS_LOADING,
            'hasLoadingError': types.SRS_GET_CARDS_HAS_LOADING_ERROR,
        })
    }
};
