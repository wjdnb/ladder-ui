import { defineComponent, computed, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import className from '../_util/className'
import styleName from '../_util/styleName'
import { Size, Type } from '../_util/type'

const buttonProps = {
  type: {
    type: String as PropType<Type>,
    default: 'default',
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium',
  },
  space: {
    type: Number as PropType<number>,
    default: 0,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

const buttonPadding = new Map([
  ['mini', 'padding: 4px 7px'],
  ['small', 'padding: 6px 12px'],
  ['medium', 'padding: 8px 14px'],
  ['large', 'padding: 10px 22px'],
])

const textSize = new Map([
  ['mini', 'font-size: 12px'],
  ['small', 'font-size: 14px'],
  ['medium', 'font-size: 14px'],
  ['large', 'font-size: 15px'],
])

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>

export default defineComponent({
  name: 'LButton',
  props: buttonProps,
  setup(props, { slots }) {
    const buttonClass = computed(() => {
      if (props.disabled) {
        return className('l-button', `l-button--disabled`)
      } else {
        return className('l-button', `l-button--${props.type}`)
      }
    })

    const buttonStyle = computed(() => {
      const padding = buttonPadding.get(props.size)
      const round = props.round ? 'border-radius: 18px' : ''

      return styleName(padding, round)
    })

    const icon = computed(() => {
      if (!slots || !slots.icon) return {}

      return <span class="l-button__icon">{slots.icon()}</span>
    })

    const textStyle = computed(() => {
      return styleName(
        `letter-spacing: ${props.space}px`,
        `text-indent: ${props.space}px`,
        textSize.get(props.size),
      )
    })
    return () => (
      <button
        class={buttonClass.value}
        style={buttonStyle.value}
        disabled={props.disabled}
      >
        {icon.value}
        <span class="l-button__text" style={textStyle.value}>
          {slots.default?.()}
        </span>
      </button>
    )
  },
})
