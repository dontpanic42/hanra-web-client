import types from '../../../store/types';
import PerformanceRating from '../../../components/performancerating/PerformanceRating.vue';
import CardContentTable from '../../../components/cardcontenttable/CardContentTable.vue';
import CardMetaTags from '../../../components/cardmetatags/CardMetaTags.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'SessionView',
    props: {},
    data: () => {
        return {}
    },
    created() {
        if(!this.card) {
            // On page reload the session is lost, so we need to start from the beginning
            console.warn('No card found, redirecting to session start!');
            this.$router.replace(`/sets/${this.$route.params.setId}/learn`);
        }
    },
    components: {
        PerformanceRating,
        CardContentTable,
        CardMetaTags
    },
    data: function() {
        return {
            isRevealed: false
        }
    },
    methods: {
        showAnswer: function () {
            this.isRevealed = true;
        }
    },
    computed: {
        ...mapGetters({
            'card': types.SRS_GET_CURRENT_CARD
        })
    }
};
