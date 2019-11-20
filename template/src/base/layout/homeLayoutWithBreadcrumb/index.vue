<template>
  <div>
    <!-- <layout-header></layout-header> -->
    <layout-nav></layout-nav>
    <div class="home-layout__content">
      <div class="home-layout__center">
        <div class="home-layout__progress" id="homeLayoutProgress"></div>
        <breadcrumb class="home-layout__breadcrumb"></breadcrumb>
        <router-view v-if="isRouterActive" :key="key" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import LayoutNav from '../components/nav/index.vue'
import LayoutHeader from '../components/header/index.vue'
import Breadcrumb from '../components/breadcrumb/index.vue'

@Component({
  components: {
    LayoutNav,
    LayoutHeader,
    Breadcrumb
  }
})
export default class HomeLayout extends Vue {
   public isRouterActive: boolean = true

　　public key: number

    @Watch('$route', {immediate: true, deep: true}) watchRoute(val, oldVal) {
      this.isRouterActive = false;

  　　this.key = Math.random()*1000;

  　　this.$nextTick(()=>(this.isRouterActive = true))
    }
}
</script>

<style lang="scss">
  $row-gutter: 20px;

  .home-layout__content {
    position: relative;
    border:1px solid transparent;
    background: #f4f4f4;
    min-height: -webkit-fill-available;
    padding-bottom: 50px;
  }
  .home-layout__center {
    width: $--layout-center-height;
    margin: 0 auto;
    position: relative;
  }
  .bee-row {
    padding: $row-gutter;
    margin: 10px 0;
    &:first-child {
      margin-top: 0
    }
    &:last-child {
      margin-bottom: 0
    }
  }
  .bee-row-title {
    // text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #333333;
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
  
  .home-layout__progress {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .progress {
    display: flex;
    align-items: center;
    .circle {
      width: 14px;
      height: 14px;
      background: #ddd;
      float: left;
      border-radius: 100%;
      white-space: nowrap;
      line-height: 50px;
      font-size: 12px;
    }
    .circle.selected {
      color: $--color-main-theme;
      background: $--color-main-theme;
    }
    .line {
      float: left;
      width: 52px;
      height: 1px;
      background: #ddd;
    }
  }
  .home-layout__breadcrumb {
    padding-top: 30px;
  }
  
</style>
