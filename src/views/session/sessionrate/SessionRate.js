import types from '../../../store/types';
import PerformanceRating from '../../../components/performancerating/PerformanceRating.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'SessionRate',
    props: {},
    data: () => {
        return {}
    },
    created() {
        if (!this.card) {
            // On page reload the session is lost, so we need to start from the beginning
            console.warn('No card found, redirecting to session start!');
            this.$router.replace(`/sets/${this.$route.params.setId}/learn`);
        }
    },
    components: {
        PerformanceRating
    },
    data: function () {
        return {
            rating: 5,
            buttonClass: {
                0: 'fa-skull-crossbones',
                1: 'fa-sad-cry',
                2: 'fa-flushed',
                3: 'fa-grin-beam-sweat',
                4: 'fa-laugh-beam',
                5: 'fa-medal'
            },
            isLoading: false
        }
    },
    methods: {
        ...mapActions({
            'updateRating': types.SRS_UPDATE_RATING
        }),
        ...mapMutations({
            'nextCard': types.SRS_SET_NEXT_CARD
        }),
        async save() {
            // Save the rating
            await this.updateRating({
                setId: this.$route.params.setId,
                rating: (this.rating == 0) ? 0.0 : parseFloat(this.rating) / 5.0
            });

            console.log('done saving', this.hasSavingError, this.hasNextCard);

            // When there was no error during saving
            if (!this.hasSavingError) {
                // When the current session is not finisehd
                if (this.hasNextCard) {
                    // Go to the next card
                    this.nextCard();
                    // Go back to the "question" view
                    this.$router.push(`/sets/${this.$route.params.setId}/learn-view`);
                } else {
                    // The session is finished, go to the summary page
                    this.$router.push(`/sets/${this.$route.params.setId}/learn-summary`);
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            'card': types.SRS_GET_CURRENT_CARD,
            'isSaving': types.SRS_GET_REVIEW_IS_SAVING,
            'hasSavingError': types.SRS_GET_REVIEW_HAS_SAVING_ERROR,
            'hasNextCard': types.SRS_GET_HAS_NEXT_CARD
        })
    }
};
