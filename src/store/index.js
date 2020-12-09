import { createStore } from 'vuex';

import sets from './sets/index';
import currentset from './currentset/index';
import srsession from './srsession/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sets,
    currentset,
    srsession
  },
});
