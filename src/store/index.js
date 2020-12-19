import { createStore } from 'vuex';

import sets from './sets/index';
import currentset from './currentset/index';
import srsession from './srsession/index';
import strokeordermodal from './strokeordermodal/index';
import usersettings from './usersettings/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sets,
    currentset,
    srsession,
    strokeordermodal,
    usersettings
  },
});
