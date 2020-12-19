import { mapActions, mapMutations, mapGetters } from "vuex";
import types from "../../store/types";

export default {
    name: 'SettingsLearn',
    props: [],
    data: () => {
        return {
            srSessionSize: 0,
            srSessionNewItemsRatio: 0,
            srSessionNewCutoffDays: 0
        }
    },
    async created() {
        await this.loadSettings();
        this.reset();
    },
    methods: {
        ...mapActions({
            'loadSettings': types.SETTINGS_LOAD_SETTINGS,
            'saveSettings': types.SETTINGS_SAVE_SETTINGS
        }),
        
        reset() {
            this.srSessionSize = this.settings.srSessionSize || 0;
            this.srSessionNewItemsRatio = Math.round(this.settings.srSessionNewItemsRatio * 100) || 0;
            this.srSessionNewCutoffDays = this.settings.srSessionNewCutoffDays || 0;
        },
        
        async save() {
            if(!this.hasInputError) {
                const settings = {
                    srSessionSize: this.srSessionSize,
                    srSessionNewItemsRatio: this.srSessionNewItemsRatio / 100.0,
                    srSessionNewCutoffDays: this.srSessionNewCutoffDays
                }
                
                await this.saveSettings(settings)
                
                this.reset();
            }
        }
    },
    computed: {
        ...mapGetters({
            'settings': types.SETTINGS_GET_SETTINGS,
            'isLoading': types.SETTINGS_IS_LOADING,
            'hasLoadingError': types.SETTINGS_HAS_LOADING_ERROR,
            'isSaving': types.SETTINGS_IS_SAVING,
            'hasSavingError': types.SETTINGS_HAS_SAVING_ERROR
        }),
        
        srSessionSizeHasInputError() {
            const val = parseInt(this.srSessionSize, 10);
            return isNaN(val) || val < 0 || val > 100;
        },
        
        srSessionNewCutoffDaysHasInputError() {
            const val = parseInt(this.srSessionNewCutoffDays, 10);
            return isNaN(val) || val < 0 || val > 360;
        },
        
        srSessionNewItemsRatioHasInputError() {
            const val = parseInt(this.srSessionNewItemsRatio, 10);
            return isNaN(val) || val < 0 || val > 100;
        },
        
        hasInputError() {
            return this.srSessionNewCutoffDaysHasInputError ||
            this.srSessionNewItemsRatioHasInputError ||
            this.srSessionSizeHasInputError;
        }
    }
};
