<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({})
export default class BeeRemoteJS extends Vue {
  @Prop({ required: true, type: String }) src: string

  @Emit('load-js-finish') loadJsFinish(result) {}

  render (createElement) {
    window['address_sources'] = {}
    var self = this
    return createElement('script', {
      attrs: { type: 'text/javascript', src: this.src.split(':')[1] },
      on: {
        load: function () {
          self.loadJsFinish(window)
        }
      }
    })
  }
}
</script>