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
            isLoading: false,
            reviewWhenRatingLowerThan: 4
        }
    },
    methods: {
        ...mapActions({
            'updateRating': types.SRS_UPDATE_RATING,
            'markForFutureReview': types.SRS_MAKR_FOR_REVIEW
        }),
        ...mapMutations({
            'nextCard': types.SRS_SET_NEXT_CARD
        }),
        async save() {
            // If this card was already rated, we don't need to update the rating
            if (this.card.isReview) {
                return await this.proceed();
            }


            // Save the rating
            await this.updateRating({
                setId: this.$route.params.setId,
                rating: (this.rating == 0) ? 0.0 : parseFloat(this.rating) / 5.0
            });            

            // When there was no error during saving
            if (!this.hasSavingError) {
                await this.proceed();
            }
        },

        // Either go to the next card or end the session.
        async proceed () {
            // If the card was rated as "correct", proceed.
            if (this.rating < this.reviewWhenRatingLowerThan) {
                // Review the card again...
                await this.markForFutureReview();
            }

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
