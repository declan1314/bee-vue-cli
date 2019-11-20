<template>
  <el-row class="bee-row bgw">
    <slot v-if="noTitle" />
    <template v-else>
      <el-col :span="2" class="bee-row__title">
        <slot name="title" />&nbsp;
      </el-col>
      <el-col :span="22">
        <slot />
      </el-col>
    </template>
  </el-row>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class BeeRow extends Vue {
  @Prop({ default: false, type: Boolean }) noTitle: boolean
}
</script>
<style lang="scss" scoped>
  $row-gutter: 20px;
  .bee-row {
    padding: $row-gutter;
    margin: 10px 0;
    color: #777777;
    &:first-child {
      margin-top: 0
    }
    &:last-child {
      margin-bottom: 0
    }
  }
  .bee-row__title {
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #333333;
    // line-height: 40px;
  }
  .bee-sub-row {
    &:last-child {
      padding-bottom: 0;
    }
    padding-bottom: $row-gutter;
    padding-left: $row-gutter;
    padding-right: $row-gutter;
    display: flex;
    align-items: center;
  }
</style>

