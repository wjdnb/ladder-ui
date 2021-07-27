import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LMain',
  setup(props, { slots }) {
    return () => <main class="l-main">{slots.default?.()}</main>
  },
})
