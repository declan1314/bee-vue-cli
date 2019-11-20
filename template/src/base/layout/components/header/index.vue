<template>
  <el-row class="header">
    <el-col :span="8" :offset="16" class="header__link"><bee-zone resource="10000">报表</bee-zone><bee-zone resource="10001">结算</bee-zone><span>帮助中心</span><bee-zone resource="10002"><a href="javascript:void(0)" @click="gotoAdmin()">系统管理</a></bee-zone></el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
  

  public gotoAdmin() {
    window.location.href = `${this.$basePageUrl('admin')}#/view?page=homePage&redirect=${encodeURIComponent(window.location.href)}`
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #525357;
    padding: 4px 0;
  }
  .header__link {
    color: $--color-white;
    span {
      padding: 0 9px;
      &:not(:last-child) {
        border-right: 1px solid $--color-white;
      }
    }
  }
</style>
