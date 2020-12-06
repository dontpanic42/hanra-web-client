import { createStore } from 'vuex';

import sets from './sets/index';
import currentset from './currentset/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sets,
    currentset
  },
});
