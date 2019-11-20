<template>
  <div class="login">
    <div class="login__logo">
      <img src="@Base/assets/img/logo.png" alt="">
    </div>
    <div class="login__wrapper">
      <div class="login__wrapper-title">欢迎登录</div>
      <div class="mb24">
        <el-input v-model="account" placeholder="账号"></el-input>
      </div>
      <div class="mb24">
        <el-input v-model="password" type="password"  placeholder="密码"></el-input>
      </div>
      <div  class="login__logo-code mb24">
        <el-input  type="text"  placeholder="验证码" v-model="captcha" @keyup.enter.native="login"></el-input>
        <span class="login__logo-code-img pointer" @click="refresh">
          <img :src="img" alt="">
        </span>
      </div>
      <div  class="login__dynamic-code" v-if="isAdmin">
        <el-input  type="text"  placeholder="动态码" class="login__dynamic-input" v-model="randomCode" @keyup.enter.native="login"></el-input>
        <span class="login__dynamic-btn pointer" @click="haveCode" id="codeText" :class="(isSend && codeLoading)? '': 'isActive'">获取动态码</span>
      </div>
      <div class="login__btn">
        <el-button type="primary" @click="login" id="loginText" v-if="isLogin">登录</el-button>
        <span v-else class="login__btn--span">
          <img src="@Base/assets/img/logining.gif" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { captcha, fetchByaccount } from '@Base/api/login/login.api'
import { login, isAdminLogin } from '@Base/utils/user'

@Component({})
export default class Login extends Vue {
  
  public account: string = ''
  public password: string = ''
  public captcha: string = ''
  public randomCode: string = ''

  public codeLoading: boolean = true
  public img = ''
  public uid = ''
  public isAdmin: boolean = false
  public isSend: boolean = true
  public isLogin: boolean = true
  @Watch('account', {immediate: true, deep: true}) watchResultList(val, oldVal) {
    this.password = ''
  }

  public async login() {
    try {
      this.isLogin = false
      await login(this.account, this.password, this.captcha, this.uid, this.randomCode)
    } catch(e) {
      this.isLogin = true
      this.getCaptcha()
    }
  }
  public async getCaptcha() {
    let {data: {data: result}} = await captcha()
    this.img = result['img']
    this.uid = result['uid']
  }
  public refresh() {
    this.getCaptcha()
  }
  public async haveCode() {
    if (!this.account) {
      this.$alert('请输入账号', '提示信息', {
        confirmButtonText: '确定', 
      }).catch((err) => {
        console.log(err)
      })
    } else if (!this.captcha) {
      this.$alert('请输入验证码', '提示信息', {
        confirmButtonText: '确定',
        callback: action => {
          this.getCaptcha()
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      try {
        const param = {
          account: this.account,
          captcha: this.captcha,
          randomType: 'ADMINLOGIN',
          receiveType: 'SMS',
          uid: this.uid
        }
        let codeText = document.getElementById('codeText')
        this.codeLoading = false
        codeText.innerText = '正在获取中'
        let {data: {data: result}} = await fetchByaccount(param)
        this.codeLoading = true
        let time = 60
        if (this.isSend) {
          this.isSend = false
          codeText.innerText = `重新获取(${time})`
          let timer = setInterval(() => {
            time--
            codeText.innerText = `重新获取(${time})`
            if (time === 0) {
              clearInterval(timer)
              this.isSend = true
              codeText.innerText = '重新获取'
            }
          }, 1000)
        }
      } catch {
        this.getCaptcha()
        this.codeLoading = true
        let codeText = document.getElementById('codeText')
        codeText.innerText = '重新获取'
      }
    }
  }
  mounted() {
    this.getCaptcha()
    this.isAdmin = isAdminLogin()
  }
}
</script>
<style lang="scss">
  input:-webkit-autofill{
    -webkit-box-shadow: 0 0 0 1000px white inset;  /*---- 设置内阴影 ----*/
  }
  .login {
    display: flex;
    width:1200px;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    .bee-block__label {
      font-size: 14px;
      color: #ffffff;
    }
  }
  .login__logo{
    width: 480px;
    text-align: center;
    img{
      // height:300px;
    }
  }
  .login__wrapper {
    background: #f0f0f0;
    width: 450px;
    background: #f0f0f0;
    padding: 40px 48px;
    box-sizing: border-box;
    .login__logo-code{
      display: flex;
      justify-content: space-between;
      .el-input{
        width:225px;
        display: inline-block;
      }
      .login__logo-code-img{
        display: inline-block;
        width: 110px;
        height:50px;
        background: #fff;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .el-input{
      width: 100%;
      input{
        height:50px;
        font-size: 22px;
      }
    }
  }
  .login__btn {
    margin-top: 40px;
    text-align: center;
    button {
      width: 100%;
      font-size:26px;
      padding:14px 20px;
    }
  }
  .login__wrapper-title{
    font-size:20px;
    color: #545454;
    margin-bottom: 33px;
    font-weight: 600;
  }
  .login__dynamic-code{
    background: #fff;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    .login__dynamic-input{
      display: inline-block;
      width:220px;
      vertical-align: middle;
      input{
        border: none;
      }
    }
    .login__dynamic-btn{
      display: inline-block;
      width:116px;
      height:40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      border-radius: 4px;
      color:#fff;
      background: $--color-main-theme;
      vertical-align: middle;
    }
    .isActive{
      background:#f0f0f0;
      color:#646464; 
      cursor: default;
    }
  }
  .login__btn--span{
    display: block;
    border-radius: 4px;
    height: 56px;
    overflow: hidden;
    img {
      width: 100%;
    }
    // text-align: center;
    // height:56px;
    // line-height: 56px;
    // border: 1px solid #DCDFE6;
    // box-sizing: border-box;
    // font-size: 20px;
    // border-radius: 4px;
    // background: #ddd;
    // color:#929292;
  }
</style>
