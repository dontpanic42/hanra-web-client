export default {
    name: 'PerformanceRating',
    props: {
        modelValue: {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
        range: {
            type: Array,
            default: [0, 1, 2, 3, 4, 5]
        },
        interactive: {
            type: Boolean,
            default: true
        },
        classes: {
            type: Object,
            default: {
                0: 'has-text-danger',
                1: 'has-text-warning',
                2: 'has-text-warning',
                3: 'has-text-success',
                4: 'has-text-success',
                5: 'has-text-success'
            }
        }
    },
    emits: [
        'update:modelValue'
    ],
    data: () => {
        return {
            displayedRating: 0.0,
            selectedRating: 0.0
        }
    },
    created() {
        this.displayedRating = this.modelValue;
        this.selectedRating = this.modelValue;
    },
    watch: {
        modelValue: function (newValue) {
            this.selectedRating = Math.ceil(newValue);
        }
    },
    methods: {
        selectRating(rating) {
            if (!this.disabled && this.interactive) {
                this.selectedRating = rating;
                this.displayedRating = rating;
                this.$emit('update:modelValue', this.selectedRating);
            }
        },

        hover(item, direction) {
            if (!this.disabled && this.interactive) {
                if (direction == 'leave') {
                    this.displayedRating = this.selectedRating;
                } else {
                    this.displayedRating = item;
                }
            } else {
                this.displayedRating = this.selectedRating;
            }
        }
    },
    computed: {

    }
};
