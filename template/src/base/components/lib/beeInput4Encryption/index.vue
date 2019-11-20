<template>
  <span v-if="isText">{{ input }}</span>
  <el-input v-model="input" @keyup.native="change" :placeholder="placeholder" v-else></el-input>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class BeeInput4Encryption extends Vue {
  @Prop({ default: '', type: String }) value: string

  @Prop({ default: false, type: Boolean }) isText: boolean

  @Prop({ default: '', type: String }) placeholder: string

  public input: string = ''

  public encryptStr: string = ''

  public regExp = /^(.*)(【.*】)(.*)$/

  @Watch('value', {immediate: true, deep: true}) watchLookupCode(val, oldVal) {
    if (!val) {
      this.input = ''
      return
    }
    this.encryptStr = _.replace(val, this.regExp, '$2')
    if (this.encryptStr) {
      this.input = _.replace(val, this.regExp, '$1****$3')
    }
  }

  @Watch('input', {immediate: false, deep: true}) watchInput(val, oldVal) {
    this.$emit('input', _.replace(val, /^(.*)\*\*\*\*(.*)$/, `$1${this.encryptStr}$2`))
  }

  public change() {
    if (this.input.includes('*')) {
      this.input = ''
    }
  }
}
</script>
