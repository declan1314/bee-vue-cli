import request from '@Base/utils/request'
import { AxiosPromise } from 'axios'
import UiApiJsonRespVo from '@Base/models/api/UiApiJsonRespVo';
import PaginationReqVo from '@Base/models/api/PaginationReqVo';
import Pagination from '@Base/models/api/Pagination';
import WfwWorkFlowListRespVo from '@Base/models/work-flow/WfwWorkFlowListRespVo';
import WfwWorkFlowByBillRespVo from '@Base/models/work-flow/WfwWorkFlowByBillRespVo';
import DacFindOrderByErrandRespVo from '@Base/models/work-flow/DacFindOrderByErrandRespVo';
import DacFindOrderByIdRespVo from '@Base/models/work-flow/DacFindOrderByIdRespVo';
import WfwApprovalVo from '@Base/models/work-flow/WfwApprovalVo';
import WfwWorkFlowWaitParamDto from '@Base/models/work-flow/WfwWorkFlowWaitParamDto';
import IacFindOrderByErrandRespVo from '@Base/models/work-flow/IacFindOrderByErrandRespVo';
import IacFindOrderByIdRespVo from '@Base/models/work-flow/IacFindOrderByIdRespVo';
import WfwWfbillApproveReqVo from '@Base/models/work-flow/WfwWfbillApproveReqVo';
import BeeDataIdReqVo from '@Base/models/work-flow/BeeDataIdReqVo.ts'
import BaseRespVo from '@Base/models/base/BaseRespVo';
import RelationDataVo from '@Base/models/work-flow/RelationDataVo';
import WfwWfbillHisVo from '@Base/models/work-flow/WfwWfbillHisVo';

// 审批历史
export const fetchHistoryByData = (data: RelationDataVo, sign: string): AxiosPromise<UiApiJsonRespVo<WfwWfbillHisVo[]>> => {
  return request('/workflow/wfbill/findhistorybydata', data, sign)
}

// 流程单历史
export const fetchHistoryByWfbill = (data: number, sign: string): AxiosPromise<UiApiJsonRespVo<WfwWfbillHisVo[]>> => {
  return request('/workflow/wfbill/findhistorybywfbill', data, sign)
}

// 待审
export const fetchFindWorkFlowWait = (param: PaginationReqVo<WfwWorkFlowWaitParamDto>): AxiosPromise<UiApiJsonRespVo<Pagination<WfwApprovalVo>>> => {
  return request('/workflow/wfbill/findwait', param)
}
// 已审
export const fetchFindWorkFlowHad = (param: PaginationReqVo<WfwWorkFlowWaitParamDto>): AxiosPromise<UiApiJsonRespVo<Pagination<WfwApprovalVo>>> => {
  return request('/workflow/wfbill/findhad', param)
}
// 通过出差单查找关联的 国内机票
export const fetchFindOrderByErrandBillId = (data: string, sign: string): AxiosPromise<UiApiJsonRespVo<DacFindOrderByErrandRespVo>> => {
  return request('/domair/order/findbyerrandbillid', data, sign)
}

// 通过审批 出差单查找关联的 国内机票
export const fetchFindByids = (param: BeeDataIdReqVo[]): AxiosPromise<UiApiJsonRespVo<DacFindOrderByIdRespVo>> => {
  return request('/domair/order/findbyids', param)
}

// 通过出差单查找关联的 国际机票
export const fetchIntFindOrderByErrandBillId = (data: string, sign: string): AxiosPromise<UiApiJsonRespVo<IacFindOrderByErrandRespVo>> => {
  return request('/intair/order/findbyerrandbillid', data, sign)
}

// 通过审批 出差单查找关联的 国际机票
export const fetchIntFindByids = (param: BeeDataIdReqVo[]): AxiosPromise<UiApiJsonRespVo<IacFindOrderByIdRespVo>> => {
  return request('/intair/order/findbyids', param)
}
// 审批 同意/不同意
export const fetchApprove = (param: WfwWfbillApproveReqVo, sign): AxiosPromise<UiApiJsonRespVo<BaseRespVo>> => {
  return request('/workflow/wfbill/approve', param, sign)
}
