import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LMain',
  setup(props, { slots }) {
    return () => <div class="l-main">{slots.default?.()}</div>
  },
})
