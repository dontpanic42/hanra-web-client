import { mapMutations, mapGetters } from 'vuex'
import types from '../../store/types'
import HanziWriter from 'hanzi-writer/dist/hanzi-writer.js';

export default {
    name: 'StrokeOrderModal',
    props: [],
    data: () => {
        return {
            width: 250,
            height: 250,
            writer: undefined,
            isLoading: true,
            hasLoadingError: false
        }
    },
    watch: {
        'character': function(newValue, oldValue) {
            if(newValue != oldValue) {
                this.loadCharacter(newValue);
            }
        }
    },
    methods: {
        ...mapMutations({
            'setVisible': types.SOM_SET_VISIBLE
        }),

        loadCharacter(char) {
            if(this.$el) {
                this.isLoading = true;
                this.hasLoadingError = false;

                if(!this.writer) {
                    this.writer = HanziWriter.create(this.$el.querySelector('.hanzi-writer-canvas'),char, {
                        width: this.width,
                        height: this.height,
                        onLoadCharDataError: (e) => this.onLoadError(e),
                        onLoadCharDataSuccess: () => this.onLoadSuccess(),
                    })
                } else {
                    this.writer.setCharacter(char);
                }
            }
        },

        onLoadSuccess() {
            this.isLoading = false;
            this.hasLoadingError = false;
            this.startAnimation();
        },

        onLoadError() {
            this.isLoading = false;
            this.hasLoadingError = true;
        },

        startAnimation() {
            if(this.writer) {
                this.writer.animateCharacter();
            }
        }
    },
    computed: {
        ...mapGetters({
            'isVisible': types.SOM_GET_IS_VISIBLE,
            'character': types.SOM_GET_CHARARCTER
        })
    }
};
