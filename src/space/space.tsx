import { defineComponent, computed } from 'vue'
import type { ExtractPropTypes, CSSProperties, PropType, VNode } from 'vue'
import className from '../_util/className'
import { Size, AlignItems, JustifyContent } from '../_util/type'
import { isString, isNumber } from '../_util/assertion'

const spaceProps = {
  align: {
    type: String as PropType<AlignItems>,
    default: 'center',
  },
  split: {
    type: [String, Number],
  },
  size: {
    type: [Number, String] as PropType<number | Size>,
    default: 'medium',
  },
  justify: {
    type: String as PropType<JustifyContent>,
    default: 'flex-start',
  },
}

const sizeMap = new Map([
  ['mini', 4],
  ['small', 8],
  ['medium', 12],
  ['large', 16],
])

export type SpaceProps = Partial<ExtractPropTypes<typeof spaceProps>>

export default defineComponent({
  props: spaceProps,
  setup(props, { slots }) {
    const gap = computed(() => {
      let margin

      if (isString(props.size)) {
        margin = sizeMap.get(props.size as string)
          ? sizeMap.get(props.size as string)
          : 0
      } else if (isNumber(props.size)) {
        margin = props.size as number
      }

      return (margin as number) / 2
    })

    const classNames = computed(() => {
      return className(
        'l-space',
        `is-justify-${props.justify}`,
        `is-align-${props.align}`,
      )
    })

    return () => {
      const spaceItems = computed(() => {
        if (!slots || !slots.default) return null

        const slotsDefault: VNode[] = slots.default()
        const length: number = slotsDefault.length

        if (length < 2) {
          return (
            <div class="l-space-item">
              <div class="l-space-item__content">{slotsDefault}</div>
            </div>
          )
        } else {
          return slotsDefault.map((item, index) => {
            const style: CSSProperties = {}

            if (index === 0) {
              style.marginRight = `${gap.value}px`
              return (
                <div class="l-space-item">
                  <div class="l-space-item__content" style={style}>
                    {item}
                  </div>
                  <div class="l-space-item__split">{props.split}</div>
                </div>
              )
            } else if (index === length - 1) {
              style.marginLeft = `${gap.value}px`

              return (
                <div class="l-space-item">
                  <div class="l-space-item__content" style={style}>
                    {item}
                  </div>
                </div>
              )
            } else {
              style.marginLeft = `${gap.value}px`
              style.marginRight = `${gap.value}px`
              return (
                <div class="l-space-item">
                  <div class="l-space-item__content" style={style}>
                    {item}
                  </div>
                  <div class="l-space-item__split">{props.split}</div>
                </div>
              )
            }
          })
        }
      })

      return <div class={classNames.value}>{spaceItems.value}</div>
    }
  },
})
