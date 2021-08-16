import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'LTooltip',
  setup(props, { slots }) {
    const tooltip = ref<HTMLElement | null>(null)

    onMounted(() => {
      console.log(tooltip.value)
    })

    return () => (
      <div class="l-tooltip" ref="tooltip">
        <div class="l-tooltip__title">{slots.title?.()}</div>
        {slots.default?.()}
      </div>
    )
  },
})
