import { defineComponent, CSSProperties, computed, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'

const footerProps = {
  height: {
    type: Number as PropType<number>,
    default: 0,
  },
}

export type FooterProps = Partial<ExtractPropTypes<typeof footerProps>>

export default defineComponent({
  name: 'LFooter',
  props: footerProps,
  setup(props, { slots }) {
    const styles = computed(() => {
      const style: CSSProperties = {}

      if (props.height) {
        style.height = `${props.height}px`
      }

      return style
    })

    return () => (
      <div class="l-footer" style={styles.value}>
        {slots.default?.()}
      </div>
    )
  },
})
