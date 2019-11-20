import { State } from './state';

export default {
  showLoading(state: State, loading: boolean) {
    state.loading = loading
  },
  // 导航avtive
  setNavMenuIndex(state: State, navMenuIndex) {
    state.navMenuIndex = navMenuIndex
  },
};
