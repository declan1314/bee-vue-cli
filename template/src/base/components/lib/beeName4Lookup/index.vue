<template>
  <span>{{ lookupName }}</span>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import {fetchLookupValue} from '@Base/utils/lookup'

@Component({})
export default class BeeName4Lookup extends Vue {
  @Prop({ default: '', type: String }) lookupType
  @Prop({ default: '', type: String }) lookupCode

  public lookupName: string = ''

  @Watch('lookupCode', {immediate: true, deep: true}) watchLookupCode(val, oldVal) {
    this.handleFetchLookupValue(val)
  }

  public async handleFetchLookupValue(lookupCode) {
    if (!lookupCode) {
      return
    }
    const { lookupName } = await fetchLookupValue(this.lookupType, lookupCode)
    this.lookupName = lookupName
  }
}
</script>
