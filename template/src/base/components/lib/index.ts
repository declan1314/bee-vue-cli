
// export { default as BeeSubmenu } from './beeSubmenu/index.vue'
// export { default as BeeBlock } from './beeBlock/index.vue'
// export { default as BeeRow } from './beeRow/index.vue'


import Submenu from './beeSubmenu/index.vue'
import Row from './beeRow/index.vue'
import BlockOp from './beeBlockOp/index.vue'
import RowOp from './beeRowOp/index.vue'
import Select4Lookup from './beeSelect4Lookup/index.vue'
import Name4Lookup from './beeName4Lookup/index.vue'
import Select4Auto from './beeSelect4Auto/index.vue'
import DatePicker from './beeDatePicker/index.vue'
import Zone from './beeZone/index.vue'
import Input4Encryption from './beeInput4Encryption/index.vue'
import RemoteJs from './beeRemoteJs/index.vue'

// export class BeeSubmenu extends Submenu {}
// export class BeeRow extends Row {}
// export class BeeBlockOp extends BlockOp {}
// export class BeeRowOp extends RowOp {}

const BeeUI = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install: (Vue) => {
    Vue.component('BeeSubmenu', Submenu)
    Vue.component('BeeRow', Row)
    Vue.component('BeeBlockOp', BlockOp)
    Vue.component('BeeRowOp', RowOp)
    Vue.component('BeeSelect4Lookup', Select4Lookup)
    Vue.component('BeeName4Lookup', Name4Lookup)
    Vue.component('BeeSelect4Auto', Select4Auto)
    Vue.component('BeeDatePicker', DatePicker)
    Vue.component('BeeZone', Zone)
    Vue.component('BeeInput4Encryption', Input4Encryption)
    Vue.component('BeeRemoteJs', RemoteJs)
  },
}
export default BeeUI

// const components = [
//   BeeSubMenu,
// ]

// const install = (Vue, opts = {}) => {
//   // locale.use(opts.locale);
//   // locale.i18n(opts.i18n);

//   components.forEach((component) => {
//     Vue.component(component.name, component);
//   });

  // Vue.use(InfiniteScroll);
  // Vue.use(Loading.directive);

  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;
// };

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// export default {
//   BeeSubMenu
// }
