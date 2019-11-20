<template>
  <div class="order-layout">
    <div class="order-layout__menu">
      <h4 :class="{'to36': true, 'menu-selected': window.location.href.includes('#/order/list') || window.location.href.includes('#/quotation/list')}">我的订单</h4>
      <ul class="order-layout__sub-items">
        <li :class="{'toMain': window.location.href === `${$basePageUrl('domair')}#/order/list`}"><a :href="`${$basePageUrl('domair')}#/order/list`">因公国内机票订单</a></li>
        <li :class="{'toMain': window.location.href === `${$basePageUrl('intair')}#/order/list`}"><a :href="`${$basePageUrl('intair')}#/order/list`">因公国际机票订单</a></li>
        <li :class="{'toMain': window.location.href === `${$basePageUrl('intair')}#/quotation/list`}"><a :href="`${$basePageUrl('intair')}#/quotation/list`">因公国际机票需求单</a></li>
        <!-- <li>私人订单</li>
        <li>现付机票订单</li>
        <li>因公国内酒店订单</li>
        <li>因公国际酒店订单</li>
        <li>因公保险订单</li>
        <li>舱意险订单</li>
        <li>因公签证订单</li>
        <li>因公火车票订单</li>
        <li>因公旅游订单</li>
        <li>出差单机票个人报表</li> -->
      </ul>
      <!-- <h4>我的资产</h4>
      <ul class="order-layout__sub-items">
        <li>我的钱包</li>
        <li>我的积分</li>
      </ul> -->
      <h4 :class="{'to36': true, 'menu-selected': window.location.href.includes('#/user/myinfo') || window.location.href.includes('#/useful/passenger/list') || window.location.href.includes('#/useful/address/list')}">个人信息</h4>
      <ul class="order-layout__sub-items">
        <li :class="{'toMain': window.location.href === `${$basePageUrl('zas')}#/user/myinfo`}"><a :href="`${$basePageUrl('zas')}#/user/myinfo`">个人信息</a></li>
        <li :class="{'toMain': window.location.href === `${$basePageUrl('zas')}#/useful/passenger/list`}"><a :href="`${$basePageUrl('zas')}#/useful/passenger/list`">常用旅客</a></li>
        <li :class="{'toMain': window.location.href === `${$basePageUrl('zas')}#/useful/address/list`}"><a :href="`${$basePageUrl('zas')}#/useful/address/list`">常用地址</a></li>
        <!-- <li>常用报销凭证</li>
        <li>常用银行卡</li>
        <li>个人偏好</li>
        <li>酒店收藏</li> -->
      </ul>
    </div>
    <div class="order-layout__content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({})
export default class OrderLayout extends Vue {
}
</script>


<style lang="scss">
  .order-layout {
    display: flex;
    font-size: 14px;
  }
  .order-layout__menu {
    padding: 22px;
    background: #ffffff;
    margin-right: 20px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #7c7c7c;
    height: fit-content;
  }
  .order-layout__content {
    // background: #ffffff;
    flex: 1;
  }
  ul.order-layout__sub-items {
    padding-left: 16px;
    // li {
    //   cursor: pointer;
    // }
  }
  .menu-selected {
    color: $--color-main-theme;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      width: 3px;
      height: 14px;
      background: $--color-main-theme;
      position: absolute;
      left: -10px;
      top: calc(50% - 7px);
    }
  }
</style>