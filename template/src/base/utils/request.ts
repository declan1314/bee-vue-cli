import axios from './axios'
import { AxiosPromise } from 'axios';
import UiApiCommonReqVo from '@Base/models/api/UiApiCommonReqVo';
import UiApiJsonRespVo from '@Base/models/api/UiApiJsonRespVo';
import Vue from 'vue'
import { logout } from '@Base/utils/user'

export default (url, data = null, sign = ''): AxiosPromise<UiApiJsonRespVo<any>> => {
  const param: UiApiCommonReqVo<any> = {
    data,
    sign,
    source: 'PC',
  }

  return axios.post<UiApiJsonRespVo<any>>(url, param).then((response) => {
    if (UiApiJsonRespVo.isFail(response.data)) {
      Vue.prototype.$alert(response.data.message, '错误提示')
      throw new Error('handled')
    }
    if (UiApiJsonRespVo.isNoLogin(response.data)) {
      logout(false)
      throw new Error('handled')
    }
    if (UiApiJsonRespVo.isNoPermission(response.data)) {
      Vue.prototype.$alert(response.data.message, '错误提示')
      throw new Error('handled')
      // TODO 未授权处理
    }
    return response
  }).catch((error) => {
    if (error.message !== 'handled') {
      Vue.prototype.$alert(error.message, '异常提示')
    }
    throw error
  })
}
