import types from '../../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PerformanceRating from '../../../components/performancerating/PerformanceRating.vue';

export default {
    name: 'SessionSummary',
    props: {},
    data: () => {
        return {}
    },
    components: {
        PerformanceRating
    },
    created() {
        if (!this.card) {
            // On page reload the session is lost, so we need to start from the beginning
            console.warn('No card found, redirecting to session start!');
            this.$router.replace(`/sets/${this.$route.params.setId}/learn`);
        }
    },
    data: function() {
        return {
        }
    },
    methods: {
    },
    computed: {
        ...mapGetters({
            'card': types.SRS_GET_CURRENT_CARD,
            'cards': types.SRS_GET_CARDS,
            'statAvgRating': types.SRS_GET_STAT_AVG_RATING,
            'statNumCorrect': types.SRS_GET_STAT_NUM_CORRECT
        }),

        statAvgRatingDisplayValue() {
            let val = this.statAvgRating;
            val = (val * 5) + 1;
            val = Math.round(10 * val) / 10
            return val;
        }
    }
};
