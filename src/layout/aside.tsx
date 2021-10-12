import { defineComponent, computed, CSSProperties, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'

const asideProps = {
  width: {
    type: Number as PropType<number>,
    default: 300,
  },
}

export type AsideProps = Partial<ExtractPropTypes<typeof asideProps>>

export default defineComponent({
  name: 'LAside',
  props: asideProps,
  setup(props, { slots }) {
    const styles = computed(() => {
      const style: CSSProperties = {}

      if (props.width) {
        style.width = `${props.width}px`
      }

      return style
    })

    return () => (
      <div class="l-aside" style={styles.value}>
        {slots.default?.()}
      </div>
    )
  },
})
