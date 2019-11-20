<template>
  <div>
    <div class="border-shadow">
      <div  class="nav">
        <!-- <div class="nav-top">
          <div class="nav__myinfo-right">
            <span>结算</span>
            <b class="line"></b>
            <span>报表</span>
            <b class="line"></b>
            <span><a :href="$basePageUrl('admin')" target="_blank">系统管理</a></span>
          </div>
        </div> -->
        <div class="nav-bottom">
          <div class="nav__logo">
            <img src="@Base/assets/img/main_logo.png" alt="">
          </div>
          <div class="nav__menu">
            <el-menu class="el-menu-demo" mode="horizontal"  :default-active="getActiveIndex()" active-text-color="#01b273" text-color="#7c7c7c" >
              <el-menu-item index="1"><span><a :href="`${$basePageUrl('main')}`">首页</a></span></el-menu-item>
              <el-menu-item index="2"><bee-zone resource="11000"><a :href="`${$basePageUrl('domair')}`" >国内机票</a></bee-zone></el-menu-item>
              <el-menu-item index="3"><bee-zone resource="12000"><a :href="`${$basePageUrl('intair')}`">国际机票</a></bee-zone></el-menu-item>
              <el-menu-item index="4" style="border:none;"><bee-zone resource="18000"><a :href="`${$basePageUrl('visa')}`" >签证</a></bee-zone></el-menu-item>
              <el-menu-item index="5"><bee-zone resource="19000"><a :href="`${$basePageUrl('main')}#/errandBill/list`" >出差</a></bee-zone></el-menu-item>
              <el-menu-item index="6"><bee-zone resource="20000"><a :href="`${$basePageUrl('main')}#/workflow/list`" >审批</a></bee-zone></el-menu-item>
            </el-menu>
          </div>
          <div class="employee_info">
            <div class="head-portrait__employeeName">
              {{ $myInfo().employeeName }}
            </div>
            <div class="head-portrait pointer">
              <img src="@Base/assets/img/avatar.png" alt="">
              <div class="head-portrait__position">
                <ul>
                  <li ><a :href="`${$basePageUrl('domair')}#/order/list`">我的商旅</a></li>
                  <!-- <li>帮助中心</li> -->
                  <li  @click="logout" ><a href="javascript:void(0)" >注销</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 签证导航条 -->
    <div class="visa__nav-box" v-if="getActiveIndex() === '4' && childElementCount !== 0">
      <div class="visa-nav-box--width" id="navBox">
        <bee-zone resource="18200"><a :href="`${$basePageUrl('visa')}#/visaApply`" >签证申请</a></bee-zone>
        <bee-zone resource="18300"><a :href="`${$basePageUrl('visa')}#/myApply`">我的签证</a></bee-zone>
        <bee-zone resource="18400"><a :href="`${$basePageUrl('visa')}#/taskProcess`" >签证处理</a></bee-zone>
        <bee-zone resource="18410"><a :href="`${$basePageUrl('visa')}#/taskProcessXZ`" >签证处理</a></bee-zone>
        <bee-zone resource="18100"><a :href="`${$basePageUrl('visa')}#/signGuide`" >办签指南</a></bee-zone>
        <bee-zone resource="18500"><a :href="`${$basePageUrl('visa')}#/problem`" >常见问题</a></bee-zone>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import { logout } from '@Base/utils/user'
@Component({
  components: {
    // BeeSubmenu
  }
})
export default class Nav extends Vue {
  
  public childElementCount:number = 1
  public getActiveIndex() {
    const hrefWithoutTimestamp = window.location.href
    if (hrefWithoutTimestamp === `${this.$basePageUrl('main')}#/dashboard`) {
      return '1'
    }
    if (hrefWithoutTimestamp === `${this.$basePageUrl('domair')}#/dashboard` || hrefWithoutTimestamp.includes(`${this.$basePageUrl('domair')}#/order/book`)) {
      return '2'
    }
    if (hrefWithoutTimestamp.includes(`${this.$basePageUrl('intair')}#/quotation`)) {
      return '3'
    }
    if (hrefWithoutTimestamp.includes(`${this.$basePageUrl('visa')}`)) {
      return '4'
    }
    if (hrefWithoutTimestamp.includes(`${this.$basePageUrl('main')}#/errandBill`)) {
      return '5'
    }
    if (hrefWithoutTimestamp.includes(`${this.$basePageUrl('main')}#/workflow`)) {
      return '6'
    }
  }
  
  public async logout() {
    logout()
  }

  public gotoAdmin() {
    window.location.href = `${this.$basePageUrl('admin')}#/view?page=homePage&redirect=${encodeURIComponent(window.location.href)}`
  }

  public handleSelect(key, href) {
    window.location.href = href
  }
  mounted() {
    setTimeout(() => {
      let navBox = document.getElementById('navBox')
      this.childElementCount = navBox && navBox.childElementCount
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
  // .border-shadow{
    // // border-bottom: solid 1px #e9e9e9;
    // box-shadow: 0px 0px 6px 0px rgba(114, 114, 114, 0.15);
  // }
  .visa__nav-box{
    height:36px;
    line-height: 36px;
    font-size:14px;
    color:#fff;
    background: $--color-main-theme;
    span{
      color:#fff;
      padding:3px 10px;
      margin: 0 10px;
      cursor: pointer;
    }
    span:hover{
      background: #fff;
      color:$--color-main-theme;
    }
  }
  .visa_top-img{
    display: block;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .visa-nav-box--width{
    width:1200px;
    margin: 0 auto;
    padding-left:268px;
    box-sizing: border-box;
  }
  .line{
    display: inline-block;
    width: 1px;
    height: 13px;
    background-color: #afafaf;
    margin: 0 8px;
    vertical-align: middle;
  }
  .nav {
    width:1200px;
    margin: 0 auto;
  }
  .nav-top{
    text-align: right;
    height:20px;
    width:1200px;
    margin: 0 auto;
  }
  .nav-bottom{
    display: flex;
    align-items: center;
    position: relative;
  }
  .nav__logo{
    display: inline-block;
    margin-right:56px;
    width:160px;
    height:38px;
    text-align: center;
  }
  .nav__menu{
    display: inline-block;
    a{
      font-size: 16px;
    }
  }
  .head-portrait{
    display: inline-block;
    position: relative;
    height: 60px;
    img{
      vertical-align: middle;
    }
  }
  .head-portrait__employeeName{
    display: inline-block;
    vertical-align: middle;
    margin-right:18px;
  }
  .head-portrait:hover .head-portrait__position{
    display: block;
  }
  .head-portrait__position{
    background: #fff;
    position: absolute;
    width:100px;
    left:-21px;
    top:59px;
    display: none;
    z-index: 10;
    transition: all 0.5s;
    box-shadow: 0px 0px 9px 0px rgba(114, 114, 114, 0.15);
    ul{
      list-style-type: none;
      padding: 0;
      margin: 0;
      li{
        cursor: pointer;
        height:50px;
        line-height: 50px;
        text-align: center;
        color:#303030;
      }
    }
  }
  .head-portrait__position li:hover{
    background: #01b273;
    color:#fff;
  }
  .nav__myinfo-right{
    height:20px;
    line-height: 20px;
    vertical-align: middle;
    span{
      display: inline-block;
      vertical-align: middle;
    }
  }
  .employee_info{
    position: absolute;
    right: 0;
    top:21px;
  }
</style>

<style lang="scss">
  .el-tabs__content {
    overflow: initial !important;
  }
  .border-shadow .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  .nav .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow{
    display: none;
  }
  .nav .el-menu--horizontal > .el-menu-item{
    font-size: 16px;
    line-height: 90px;
    height: 90px;
    color: #363636;
  }
  .nav .el-menu-item.is-active{
    font-weight: 600;
  }
  .nav .el-menu--horizontal > .el-menu-item.is-active{
    border-bottom-width: 3px;
  }
  .nav .el-menu--horizontal > .el-submenu .el-submenu__title{
    line-height: 90px;
    height: 90px;
  }
  .el-menu-item:empty{
    display: none;
  }
</style>

