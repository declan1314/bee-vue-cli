<template>
  <div :class="{'bee-row': true, 'bee-row__concat-top': concatTop, 'bee-row__concat-bottom': concatBottom}">
    <div class="bee-row__title mb15">
      <slot name="title"/>
    </div>
    <div class="bee-row__first-layer">
      <slot name="firstLayer"/>
      <slot/>
    </div>
    <div class="bee-row__second-layer">
      <slot name="secondLayer"/>
    </div>
    <div class="bee-row__third-layer">
      <slot name="thirdLayer"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class BeeRow extends Vue {
  @Prop({ default: false, type: Boolean }) noTitle: boolean

  @Prop({ default: false, type: Boolean }) concatTop: boolean

  @Prop({ default: false, type: Boolean }) concatBottom: boolean
}
</script>
<style lang="scss">
  $row-gutter: 20px;
  .bee-row {
    box-shadow: 0px 0px 8px 0px 
		rgba(27, 27, 27, 0.16);
    padding: $row-gutter;
    margin: 10px 0;
    color: #7c7c7c;
    background: #ffffff;
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
    color: $--color-main-theme;
    // margin-bottom: 10px;
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
  .bee-row__first-layer {
    position: relative;
  }
  .bee-row__second-layer {
    background: #f1f1f1;
  }
  .bee-row.bee-row__concat-top {
    margin-top: 0px;
    box-shadow: 0px 4px 8px 0px rgba(27, 27, 27, 0.16);
  }
  .bee-row.bee-row__concat-bottom {
    margin-bottom: 0px;
    box-shadow: 0px 0px 8px 0px rgba(27, 27, 27, 0.16);
  }
</style>

