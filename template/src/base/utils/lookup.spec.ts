import { expect } from 'chai'
import Cookies from 'js-cookie'
import { fetchLookupValueList, fetchLookupValue } from './lookup'

describe('lookup工具类', () => {
  // mockXHR()
  it('根据类型查询字典列表', async () => {
    const result = await fetchLookupValueList('DAC_ORDER_STATUS')
    console.info(result)
  }).timeout(10000)

  it('根据类型和编码查询字典', async () => {
    const result = await fetchLookupValue('DAC_ORDER_STATUS', '10401')
    console.info(JSON.stringify(result))
  }).timeout(10000)
})
