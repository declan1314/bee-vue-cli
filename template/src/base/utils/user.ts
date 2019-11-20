import { fetch as fetchMyInfo } from '@Base/api/zas/myinfo.api'
import FbpCurrentLoginEmployeeRespVo from '@Base/models/zas/FbpCurrentLoginEmployeeRespVo'
import Cookies from 'js-cookie'
import { logout as logoutApi } from '@Base/api/login/login.api'
import Vue from 'vue'
import { login as loginApi, adminLogin, vendorLogin } from '@Base/api/login/login.api'
import { getZoneMap } from '@Base/utils/permission'
import router from '@/router'

export const saveMyInfo = async () => {
  const {data: {data: myInfo}} = await fetchMyInfo()
  localStorage.setItem('myInfo', JSON.stringify(myInfo))
}

export const getMyInfo = (): FbpCurrentLoginEmployeeRespVo => {
  const myInfo = localStorage.getItem('myInfo')
  if (!myInfo) {
    return {}
  }
  return JSON.parse(myInfo)
}

export const saveTimeStamp = () => {
  Cookies.set('timestamp', new Date().getTime())
}

export const getTimeStamp = (): string => {
  const timestamp = Cookies.get('timestamp')
  if (!timestamp) {
    return ''
  }
  return JSON.parse(timestamp)
}


export const logout = (isRequest = true) => {
  if (isRequest) {
    logoutApi()
  }
  const sourcelogin = sessionStorage.getItem('sourcelogin')
  localStorage.clear()
  sessionStorage.clear()
  if (sourcelogin) {
    location.href = sourcelogin
  } else {
    router.push('/login')
  }
}

export const isAdminLogin = () => {
  const hrefWithoutTimestamp = window.location.href.replace(/\/\?t=\d*#\//, '/#/')
  return hrefWithoutTimestamp.includes(`${Vue.prototype.$basePageUrl('admin')}#/login`.replace(/\/\?t=\d*#\//, '/#/'))
}

export const isVendorLogin = () => {
  const hrefWithoutTimestamp = window.location.href.replace(/\/\?t=\d*#\//, '/#/')
  return hrefWithoutTimestamp.includes(`${Vue.prototype.$basePageUrl('vendor')}#/login`.replace(/\/\?t=\d*#\//, '/#/'))
}

export const login = async (account, password, captcha, uid, randomCode) => {
  if (isAdminLogin()) {
    await adminLogin(account, password, captcha, uid, randomCode)
  } else if (isVendorLogin()) {
    await vendorLogin(account, password, captcha, uid)
  } else {
    await loginApi(account, password, captcha, uid)
  }
  await saveMyInfo()
  saveTimeStamp()
  await getZoneMap()
  const href = window.location.href.split('#')[0] + '#/'
  window.location.href = href.replace(/\/(\?t=\d*)?#\//, `/?t=${getTimeStamp()}#/`)
}
