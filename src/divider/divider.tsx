import { defineComponent, computed, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import className from '../_util/className'

const dividerProps = {
  dashed: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  textAlign: {
    type: String as PropType<string>,
    default: 'center',
  },
}

export type DividerProps = Partial<ExtractPropTypes<typeof dividerProps>>

export default defineComponent({
  name: 'LDivider',
  props: dividerProps,

  setup(props, { slots }) {
    return () => {
      const classNames = computed(() => {
        return className(
          'l-divider',
          props.dashed ? 'l-divider--dashed' : '',
          slots.default?.()
            ? `l-divider__text--${props.textAlign}`
            : 'l-divider__line-no-text',
        )
      })

      if (!slots || !slots.default) return <div class={classNames.value} />

      return (
        <div class={classNames.value}>
          <div class="l-divider__line--left"></div>
          <div class="l-divider__text">{slots.default()}</div>
          <div class="l-divider__line--right"></div>
        </div>
      )
    }
  },
})
