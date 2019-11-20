import {RouteConfig} from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@Base/views/login/index.vue'], resolve),
  },
  {
    path: '/setting',
    name: 'setting',
    component: (resolve) => require(['@Base/views/baseApiSetting/index.vue'], resolve),
  },
]
