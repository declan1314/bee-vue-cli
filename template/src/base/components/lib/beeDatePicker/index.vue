<template>
  <el-date-picker
    class="wp100"
    v-model="date"
    :type="type"
    :value-format="valueFormat"
    :placeholder="placeholder"
    :picker-options="pickerOptions"
    :default-value="defaultValue">
  </el-date-picker>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({})
export default class BeeDatePicker extends Vue {
  public date: string = ''

  @Prop({}) value: number | string
  @Prop({default: 'yyyy-MM-dd', type: String}) valueFormat: string
  @Prop({default: '', type: String}) placeholder: string
  @Prop({default: false, type: Boolean}) isNumber: boolean
  @Prop({default: () => {}, type: Object}) pickerOptions: object
  @Prop({default: 'date', type: String}) type: string
  @Prop({default: '', type: String}) defaultValue: string


  @Watch('value', {immediate: true, deep: true}) watchValue(val, oldVal) {
    if (!val) {
      this.date = ''
      return
    }
    if (this.isNumber) {
      this.date = val + ''
    } else {
      this.date = val
    }
  }

  @Watch('date', {immediate: false, deep: true}) watchDate(val, oldVal) {
    if (this.isNumber) {
      this.$emit('input', parseInt(val))
    } else {
      this.$emit('input', val)
    }
  }
}
</script>