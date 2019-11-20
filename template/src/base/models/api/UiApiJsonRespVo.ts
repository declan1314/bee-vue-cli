export default class UiApiJsonRespVo<T> {
  public static readonly SUCCESS = 200

  public static readonly NO_LOGIN = 401

  public static readonly FAIL = 999

  public static readonly NO_PERMISSION = 403

  public static isSuccess(result: UiApiJsonRespVo<any>): boolean {
    return result.status === UiApiJsonRespVo.SUCCESS
  }

  public static isFail(result: UiApiJsonRespVo<any>): boolean {
    return result.status === UiApiJsonRespVo.FAIL
  }

  public static isNoLogin(result: UiApiJsonRespVo<any>): boolean {
    return result.status === UiApiJsonRespVo.NO_LOGIN
  }

  public static isNoPermission(result: UiApiJsonRespVo<any>): boolean {
    return result.status === UiApiJsonRespVo.NO_PERMISSION
  }

  public status: number // 200成功、500服务器内部错误、401未登录、403没有权限

  public message: string // 返回消息提示

  public data: T // 业务数据
}
