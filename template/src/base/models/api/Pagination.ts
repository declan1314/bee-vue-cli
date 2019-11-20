export default class Pagination<T> {
  public pageNo?: number
  public pageSize?: number
  public totalRecord?: number
  public totalPage?: number
  public list?: T[]
}
