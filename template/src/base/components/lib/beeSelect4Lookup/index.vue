<template>
  <el-select v-model="selectCode" placeholder="请选择" @change="selectValue" :disabled="disabled" clearable class="bee-select-4-lookup">
    <el-option 
      v-if="hasAll"
      label="全部"
      value="">
    </el-option>
    <el-option
      v-for="item in options"
      :key="item.lookupCode"
      :label="item.lookupName"
      :value="item.lookupCode">
    </el-option>
  </el-select>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import {fetchLookupValueList} from '@Base/utils/lookup'

@Component({
})
export default class BeeSelect4Lookup extends Vue {
  public options = []
  @Prop({default: '', type: String}) lookupType
  @Prop({default: '', type: String}) value
  @Prop({default: false, type: Boolean}) disabled
  @Prop({default: false, type: Boolean}) hasAll

  public selectCode: string = ''

  @Watch('value', {immediate: true, deep: true}) watchValue(val, oldVal) {
    this.selectCode = val
  }

  @Watch('selectCode', {immediate: true, deep: true}) watchSelectCode(val, oldVal) {
    this['dispatch']('ElFormItem', 'el.form.blur')
  }

  private async getLookup() {
    let result = await fetchLookupValueList(this.lookupType)
    this.options = result
  }
  
  public selectValue(value) {
    this.$emit('input', this.selectCode)
  }

  mounted() {
    this.getLookup()
  }
}
</script>
<style lang='scss'>
.bee-select-4-lookup {
  width: 100%;
}
</style>
