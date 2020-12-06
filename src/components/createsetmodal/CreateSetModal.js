import types from '../../store/types';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'CreateSetModal',
    props: {},
    data: () => {
        return {
            setName: '',
            setDescription: '',
        }
    },
    components: {
    },
    methods: {
        ...mapActions({
            'saveSet': types.SETS_SAVE_NEW_SET
        }),

        ...mapMutations({
            'setVisible': types.SETS_SET_NEW_SET_MODAL_VISIBLE,
            'setSaving': types.SETS_SET_NEW_SET_MODAL_SAVING
        }),

        clear() {
            this.setName = '';
            this.setDescription = '';
        },

        cancel() {
            if(!this.isSaving) {
                this.clear();
                this.setVisible(false);
            }
        },

        async save() {
            await this.saveSet({
                setName: this.setName,
                setDescription: this.setDescription
            });

            if(!this.hasSavingError) {
                this.clear();
                this.setVisible(false);
            }
        }
    },
    computed: {
        ...mapGetters({
            'isVisible': types.SETS_GET_NET_SET_MODAL_VISIBLE,
            'isSaving': types.SETS_GET_NEW_SET_MODAL_SAVING,
            'hasSavingError': types.SETS_GET_NEW_SET_MODAL_SAVING_ERROR
        }),

        nameInputError() {
            const name = this.setName.trim();
            return name.length < 3;
        }
    }
};
