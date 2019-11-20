<template>
  <span v-if="isShow">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { hasZone } from '@Base/utils/permission'

@Component({})
export default class BeeZone extends Vue {

  @Prop({ default: '', type: String}) resource: string

  public isShow = false

  public async hasZone() {
    this.isShow = await hasZone(this.resource)
  }
  created() {
    this.hasZone()
  }
}
</script>
