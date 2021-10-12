import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'LAnchor',
  setup(props, { slots }) {
    return () => <div class="l-anchor">{slots.default?.()}</div>
  },
})
