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
    const scroll = (id: any) => {
      // let height = ref<HTMLElement | null>(null)
      const height = document.querySelector(`#${id}`)
      console.log(height?.scrollHeight)
    }

    return () => (
      <div class="l-anchor-link">
        <span onClick={() => scroll(props.href)}>{props.title}</span>
      </div>
    )
  },
})
