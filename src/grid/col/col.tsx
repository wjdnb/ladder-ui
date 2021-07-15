import { defineComponent, inject, computed, CSSProperties } from 'vue'
import className from '@/_util/className'

export default defineComponent({
  name: 'LCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
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
