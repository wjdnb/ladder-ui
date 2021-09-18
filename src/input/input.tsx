import { defineComponent, computed } from 'vue'
import type { ExtractPropTypes, CSSProperties, PropType } from 'vue'
const inputProps = {
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  type: {
    type: String as PropType<string>,
    default: 'text',
  },
}

export type IpaceProps = Partial<ExtractPropTypes<typeof inputProps>>

export default defineComponent({
  props: inputProps,
  setup(props, { slots }) {
    return () => (
      <div class="l-input">
        <input placeholder={props.placeholder} type={props.type} />
      </div>
    )
  },
})
