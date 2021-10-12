import { defineComponent, inject, computed, CSSProperties, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import className from '../_util/className'

const colProps = {
  span: {
    type: Number as PropType<number>,
    default: 24,
  },
  offset: {
    type: Number as PropType<number>,
    default: 0,
  },
}

export type ColProps = Partial<ExtractPropTypes<typeof colProps>>

export default defineComponent({
  name: 'LCol',
  props: colProps,
  setup(props, { slots }) {
    const gutter = inject('gutter', { value: [0, 0] })

    const styles = computed(() => {
      const style: CSSProperties = {}

      if (gutter.value[0]) {
        const horizontalGutter = gutter.value[0] / 2 + 'px'
        style.paddingLeft = horizontalGutter
        style.paddingRight = horizontalGutter
      }

      if (gutter.value[1]) {
        const verticalGutter = gutter.value[1] / 2 + 'px'
        style.paddingTop = verticalGutter
        style.paddingBottom = verticalGutter
      }
      return style
    })

    const classNames = computed(() => {
      return className(
        'l-col',
        `l-col-${props.span}`,
        `l-col-offset-${props.offset}`,
      )
    })

    return () => (
      <div class={classNames.value} style={styles.value}>
        {slots.default?.()}
      </div>
    )
  },
})
