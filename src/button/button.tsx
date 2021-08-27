import { defineComponent, computed } from 'vue'
import className from '@/_util/className'
import styleName from '@/_util/styleName'




export default defineComponent({
  name: 'LButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'medium',
    },
    space: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
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
