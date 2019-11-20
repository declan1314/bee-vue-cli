 /**
  * 接口统一请求参数
  */
export default class UiApiCommonReqVo<T> {
  public source?: string // "请求来源:PC电脑端/MB移动端/MBA安卓/MBIIOS"

  public sign?: string // 数据签名

  public data?: T  // 请求业务参数
}
