<template>
  <el-submenu :popperClass="popperClass" :class="beeSubmenuClass" :index="index" :popper-append-to-body="false">
    <template slot="title"><slot name="title"/></template>
    <slot />
  </el-submenu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class BeeSubMenu extends Vue {
  @Prop({ default: false, type: Boolean }) isHorizontal: boolean
  // @Prop({ default: false, type: Boolean }) isForceOpen: boolean
  public index: string = ''

  public created() {
  }

  get beeSubmenuClass() {
    const beeSubmenuClass = {
      // 'is-opened': this.isForceOpen
    }

    return _.join(_.keys(_.mapKeys(beeSubmenuClass, (value, key, object) => value ? key: '')), ' ')
  }

  get popperClass() {
    const popperClass = {
      'bee-submenu--horizontal': this.isHorizontal,
      // 'bee-submenu--force-open': this.isForceOpen
    }

    return _.join(_.keys(_.mapKeys(popperClass, (value, key, object) => value ? key: '')), ' ')
  }
}
</script>

<style lang="scss">
  // .bee-submenu--horizontal.el-menu--horizontal {
  //   // left: 0 !important;
  //   // right: 0 !important;
  //   .el-menu .el-menu-item {
  //     float: left;
  //     background: $--color-main-layout-theme;
  //     color: $--color-white;
  //     // &:first-child {
  //     //   margin-left: 400px;
  //     // }
  //   }
  //   .el-menu--popup-bottom-start {
  //     margin-top: 0px;
  //     background: $--color-main-layout-theme;
  //   }
  // }
  // .bee-submenu--force-open {
  //   display: block !important;
  // }
</style>