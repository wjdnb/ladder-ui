import { defineComponent, provide, computed, PropType, h } from 'vue'
import { JustifyContent, AlignItems } from '@/_util/type'
import { isArray, isNumber } from '@/_util/assertion'
import className from '@/_util/className'

export default defineComponent({
  name: 'LRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String as PropType<JustifyContent>,
      default: 'flex-start',
    },
    align: {
      type: String as PropType<AlignItems>,
      default: 'flex-start',
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => {
      if (isNumber(props.gutter)) {
        return [props.gutter, 0]
      } else if (isArray(props.gutter)) {
        return props.gutter
      } else {
        return [0, 0]
      }
    })

    provide('gutter', gutter)

    const classNames = computed(() => {
      return className(
        'l-row',
        props.justify ? `is-justify-${props.justify}` : '',
        props.align ? `is-align-${props.align}` : '',
      )
    })

    return () => <div class={classNames.value}>{slots.default?.()}</div>
  },
})
