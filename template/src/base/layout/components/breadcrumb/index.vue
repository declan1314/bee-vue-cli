<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb" v-if="$route.meta.breadcrumb">
    <el-breadcrumb-item :to="path && { path: path }" v-for="({path, name}, index) in $route.meta.breadcrumb" :key="index">{{ name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Breadcrumb extends Vue {
  
}
</script>

<style lang="scss">
  .breadcrumb {
    padding: 10px 0;
  }
</style>
