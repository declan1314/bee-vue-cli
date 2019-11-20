import { getTimeStamp } from '@Base/utils/user'
// tslint:disable-next-line:no-var-requires
const devServer = require('@Base/../../build/dev-server')
import Cookies from 'js-cookie'

export const basePageUrl = (server= process.env.PROJECT) => {
  if (process.env.SELF_NODE_ENV === 'development') {
    return window.location.href.replace(/^(http:\/\/(localhost|(\d|\.)+):).*$/, '$1') + devServer.devServerPort(server) + '/' + `?t=${getTimeStamp()}`
  } else {
    return window.location.href.replace(/^(.+\/tmcpc\/).*$/, '$1') + server + '/' + `?t=${getTimeStamp()}`
  }
}

export const baseApiUrl = () => {
  if (Cookies.get('busApiBase')) {
    return Cookies.get('busApiBase')
  }

  if (process.env.SELF_NODE_ENV === 'production') {
    return location.origin + '/uiapi/'
  }

  return __CONFIG__.baseUrl
}
