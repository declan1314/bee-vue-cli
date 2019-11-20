<template>
  <div class="bee-block" :class="blockClass">
    <div class="bee-block__wrapper">
      <div class="fl bee-block__label" :style="{width: `${labelWidth}`}">
        <label :class="{'bee-block__label-aligh-right': labelAlignRight}"><span v-if="required" class="toRed">*</span><slot name="label" /></label>
      </div>
      <div :style="{width: `calc(100% - ${labelWidth})`}" class="bee-block__value fl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class BeeBlock extends Vue {
  @Prop({ default: false, type: Boolean }) required: boolean
  @Prop({ default: false, type: Boolean }) labelAlignRight: boolean
  @Prop({ default: '80px', type: String }) labelWidth: string
  @Prop({ default: 24, type: Number }) span: number

  get blockClass() {
    return [
      `bee-block-${this.span}`
    ]
  }
}
</script>
<style lang="scss" scoped>
  .bee-block {
    // &:not(:last-child) {
    //   margin-bottom: 10px;
    // }
    // min-height: 40px;
    display: flex;
    line-height: 40px; 
  }
  .bee-block__label {
    color: #7c7c7c;
    white-space: nowrap;
  }
  .bee-block__value {
    color: #7c7c7c;
  }
  .bee-block__label-aligh-right {
    float: right;
    padding-right: 20px;
  }
  @for $i from 0 through 24 {
    .bee-block-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }
  }
  .bee-block__wrapper {
    display: inline-block;
    width: 100%;
  }
</style>
