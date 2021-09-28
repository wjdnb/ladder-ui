import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  name: 'LTooltip',
  setup(props, { slots }) {
    const titleVisible = ref(false)

    const handleTitleVisible = () => {
      titleVisible.value = !titleVisible.value
    }

    return () => (
      <div
        class="l-tooltip"
        ref="tooltip"
        onMouseenter={handleTitleVisible}
        onMouseleave={handleTitleVisible}
      >
        <div class="l-tooltip__title">
          {titleVisible.value ? slots.title?.() : {}}
        </div>
        {slots.default?.()}
      </div>
    )
  },
})
