import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LAnchorLink',
  props: {
    title: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => (
      <div class="l-anchor-link">
        <span>{props.title}</span>
      </div>
    )
  },
})
