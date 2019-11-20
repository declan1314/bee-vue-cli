<template>
  <el-autocomplete
    class="bee-select-auto"
    v-model="selectdVal[`${getLabelPositionKey()}`]"
    :value-key="`${getLabelPositionValue()}`"
    :fetch-suggestions="querySearch"
    placeholder="请输入关键词"
    :trigger-on-focus="true"
    @select="((item)=>selectItem(item))"
    @blur="inputBlur"
    @focus="inputFocus"
    @clear="clear"
    clearable
    :popper-class="popperClass"
    :disabled="disabled"
    @change.native="changeV"
  >
    <template slot-scope="{ item }">
      <slot :item="item"></slot>
      <!-- {{ item }} -->
    </template>
  </el-autocomplete>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop} from 'vue-property-decorator'
import { setTimeout } from 'timers';
@Component({
})
export default class BeeSelect4Auto extends Vue {
  @Prop({}) value: object|string|number
  @Prop({default: 'tmp'}) labelPosition: string | object
  @Prop({}) valuePosition: string | object
  @Prop({ default: '', type: String }) query: string
  @Prop({ default: false, type: Boolean }) disabled: boolean
  @Prop({ default: false, type: Boolean }) onlySelect: boolean
  @Prop({ type: Function }) fetApi
  @Prop({ default: () => {}, type: Object }) extParam
  @Prop({default: '请输入关键词', type: String}) placeholder: string
  @Prop({ default: true, type: Boolean }) execSearch: boolean
  @Prop({ default: '', type: String }) popperClass: string

  public selectdVal = {}
  
  public loading:boolean = false
  
  public byAutoInfo =  {
    con: {
      input: '',
      ...this.extParam
    },
    pageNo: 1,
    pageSize: 100,
  }

  @Watch('value', {immediate: true, deep: true}) watchValue(val, oldVal) {
    if (typeof this.valuePosition === 'object') {
      this.selectdVal = val
    } else {
      Vue.set(this.selectdVal, this.valuePosition as string, val)
      if (!val) {
        Vue.set(this.selectdVal, this.labelPosition as string,  null)
      }
    }
  }

  public changeV(e) {
    _.keys(this.valuePosition).forEach((e) => {
      if (this.getLabelPositionKey() !== e) {
        this.selectdVal[`${e}`] = null
      }
    })
  }

  private tempValue = null

  public inputFocus() {
    if (this.onlySelect) {
      this.tempValue = this.selectdVal[`${this.getLabelPositionKey()}`]
    }
  }

  public inputBlur() {
    if (this.onlySelect && this.selectdVal[`${this.getLabelPositionKey()}`] !== this.tempValue) {
      this.selectdVal[`${this.getLabelPositionKey()}`] = null
    }
  }

  private getLabelPositionKey() {
    if (typeof this.labelPosition === 'object') {
      return _.keys(this.labelPosition)[0]
    } else {
      return this.labelPosition
    }
  }

  private getLabelPositionValue() {
    if (typeof this.labelPosition === 'object') {
      return this.labelPosition[this.getLabelPositionKey()]
    } else {
      return this.labelPosition
    }
  }

  public clear() {
    if (typeof this.valuePosition === 'object') {
      _.keys(this.valuePosition).forEach((e) => {
        this.selectdVal[`${e}`] = null
      })
    } else {
      this.selectdVal[this.labelPosition as string] = null
      this.$emit('input', null)
    }
  }

  public async querySearch(query, cb) {
    if (!query) {
      query = ''
    }
    let options = await this.handleFetApi(query)
    cb(options)
  }

  public selectItem(item) {
    if (typeof this.valuePosition === 'object') {
      _.keys(this.valuePosition).forEach((e) => {
        this.selectdVal[`${e}`] = this.getValueByPosition(item, this.valuePosition[e])
      })
    } else {
      this.selectdVal[this.labelPosition as string] = item[this.labelPosition as string]
      this.$emit('input', item[`${this.valuePosition}`])
    }

    setTimeout(() => {
      this['dispatch']('ElFormItem', 'el.form.blur')
    }, 50)
  }

  public getValueByPosition(item, position) {
    if (!item) {
      return item
    }
    const index = position.indexOf('.')
    if (index === -1) {
      return item[position]
    }
    return this.getValueByPosition(item[position.slice(0, index)], position.slice(index + 1))
  }

  private async handleFetApi(query) {
    if (!this.execSearch) {
      return []
    }
    this.byAutoInfo.con.input = query
    _.keys(this.extParam).forEach(el => {
      this.byAutoInfo.con[el] = this.extParam[el]
    });

    let {data:{data: result}} = await this.fetApi(this.byAutoInfo)

    return result.list
  }
}
</script>
<style lang='scss'>
.bee-select-auto{
  .el-input__inner{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
