import { defineComponent, ref, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'

const tooltipProps = {}

export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>

export default defineComponent({
  name: 'LTooltip',
  props: tooltipProps,
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
