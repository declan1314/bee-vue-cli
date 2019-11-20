import FbpLookupValueListRespVo from '@Base/models/zas/FbpLookupValueListRespVo';
import { fetchLookupValueList as fetchLookupValueListApi } from '@Base/api/zas/lookup-value.api'

export const fetchLookupValueList =  async (lookupType: string): Promise<FbpLookupValueListRespVo[]> => {
  const lookupMap4All = JSON.parse(localStorage.getItem('lookup')) || {}
  if (lookupMap4All && lookupMap4All[lookupType]) {
    return _.values(lookupMap4All[lookupType])
  } else {
    const {data: {data: arr}} = await fetchLookupValueListApi(lookupType)
    lookupMap4All[lookupType] = arr
    localStorage.setItem('lookup', JSON.stringify(lookupMap4All))
    return arr
  }
}
export const fetchLookupValue =  async (lookupType: string, lookupCode: string): Promise<FbpLookupValueListRespVo> => {
  const LookupValueList = await fetchLookupValueList(lookupType)
  return _.filter(LookupValueList, {lookupCode})[0]
}
