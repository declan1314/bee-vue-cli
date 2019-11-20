<template>
  <div>
    <!-- <layout-header></layout-header> -->
    <layout-nav></layout-nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutNav from '../components/nav/index.vue'
import LayoutHeader from '../components/header/index.vue'

@Component({
  components: {
    LayoutNav,
    LayoutHeader
  }
})
export default class HomeLayout extends Vue {
}
</script>
