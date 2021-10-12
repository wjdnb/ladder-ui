import { defineComponent, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
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

export type InputProps = Partial<ExtractPropTypes<typeof inputProps>>

export default defineComponent({
  name: 'LInput',
  props: inputProps,
  setup(props) {
    return () => (
      <div class="l-input">
        <input placeholder={props.placeholder} type={props.type} />
      </div>
    )
  },
})
