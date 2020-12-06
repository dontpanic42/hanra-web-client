export default {
    name: 'Pagination',
    props: {
        'numPages': {
            type: Number,
            default: 20
        },

        'currentPage': {
            type: Number,
            default: 10
        }
    },
    emits: [
        'changePage'
    ],
    data: () => {
        return {}
    },
    methods: {
        navigateTo(page) {
            if (page >= 0 && page < this.numPages && page != this.currentPage) {
                this.$emit('changePage', page);
            }
        }
    },
    computed: {
        hasNextPage: function () {
            return this.currentPage < (this.numPages - 1);
        },

        hasPreviousPage: function () {
            return this.currentPage > 0;
        },

        sequence: function () {
            var delta = 2,
                range = [],
                rangeWithDots = [],
                l;

            range.push(1);

            if (this.numPages <= 1) {
                return [{ text: '1', type: 'page', page: 0, isActive: this.currentPage == 0 }];
            }

            for (let i = (this.currentPage + 1) - delta; i <= (this.currentPage + 1) + delta; i++) {
                if (i < this.numPages && i > 1) {
                    range.push(i);
                }
            }

            range.push(this.numPages);

            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push({ text: l + 1, page: l, type: 'page', isActive: this.currentPage == l });
                    } else if (i - l !== 1) {
                        rangeWithDots.push({ text: '...', type: 'ellipsis' });
                    }
                }
                rangeWithDots.push({ text: i, page: i - 1, type: 'page', isActive: this.currentPage == (i - 1) });
                l = i;
            }

            return rangeWithDots;
        }
    }
};
