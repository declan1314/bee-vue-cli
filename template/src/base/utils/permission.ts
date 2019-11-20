import { fetchZones } from '@Base/api/zas/permission.api'

export const hasZone =  async (resource): Promise<boolean> => {
  const zoneMap = await getZoneMap()
  return zoneMap[resource] === 'Y'
}

export const getZoneMap = async () => {
  const cacheZoneMap = JSON.parse(localStorage.getItem('zone'))
  if (cacheZoneMap) {
    return cacheZoneMap
  } else {
    const {data: {data: zoneMap}} = await fetchZones()
    localStorage.setItem('zone', JSON.stringify(zoneMap))
    return zoneMap
  }
}

export const removeZone =  () => {
  localStorage.removeItem('zone')
}
