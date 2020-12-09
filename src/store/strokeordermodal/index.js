import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module = {
    state: {
        isVisible: false,
        character: 'f'
    },

    getters,
    mutations,
    actions,
    namespaced: true
}

export default module;