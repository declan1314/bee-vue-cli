<template>
  <div class="setting">
    <el-form ref="setting" :model="{busApiBase}">
      <div>
        提示：<br/>
        1. 设置cookie中的busApiBase<br/>
        2. 内容格式如http://10.192.10.62:9002/, https://webdev.bee2c.com/oppouiapi/<br/>
        3. 为空时还原
      </div>
      <div class="mt20">
        <el-form-item prop="busApiBase" :rules="[{pattern: /^(http|https):\/\/((\w|\.|\/|:)+)$/, message: '内容格式错误', trigger: 'blur'}]">
          <el-input v-model="busApiBase"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <el-button type="primary" @click="sure" class="mt20">确定</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import {Form} from 'element-ui'

@Component({
  components: {
  }
})
export default class Dashboard extends Vue {
  public busApiBase: string = ''

  public sure() {
    (this.$refs['setting'] as Form).validate((valid) => {
      if (valid) {
        Cookies.set('busApiBase', this.busApiBase)
        if (Cookies.get('busApiBase') === this.busApiBase) {
          this.$alert('设置成功')
        }
      }
    })
  }

  created() {
    this.busApiBase = Cookies.get('busApiBase')
  }
}
</script>

<style lang="scss" scoped>
.setting {
  width: 700px;
  padding: 20px;
}
</style>