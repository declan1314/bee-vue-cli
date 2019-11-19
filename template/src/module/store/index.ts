import VuexPersistence from 'vuex-persist'
import state, { State } from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
})

export default {
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
}
