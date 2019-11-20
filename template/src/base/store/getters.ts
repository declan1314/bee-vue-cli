import { GetterTree } from 'vuex';
import { State } from './state';
const getters: GetterTree<any, any> = {
  // 导航avtive
  getNavMenuIndex(state: State) {
    return state.navMenuIndex
  },
  isLoading(state: State) {
    return state.loading;
  },
};

export default getters;
