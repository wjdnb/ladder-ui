import { defineComponent, CSSProperties, computed, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'

const headerProps = {
  height: {
    type: Number as PropType<number>,
    default: 0,
  },
}

export type HeaderProps = Partial<ExtractPropTypes<typeof headerProps>>

export default defineComponent({
  name: 'LHeader',
  props: headerProps,
  setup(props, { slots }) {
    const styles = computed(() => {
      const style: CSSProperties = {}

      if (props.height) {
        style.height = `${props.height}px`
      }

      return style
    })

    return () => (
      <div class="l-header" style={styles.value}>
        {slots.default?.()}
      </div>
    )
  },
})
