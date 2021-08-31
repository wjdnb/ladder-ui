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
      const element = document.querySelector(`#${id}`)
      const headerHeight = document.querySelector('header')?.clientHeight ?? 0
      element?.scrollIntoView()

      const scrolledY = window.scrollY

      if (scrolledY) {
        window.scroll(0, scrolledY - headerHeight - 20)
      }
    }

    return () => (
      <div class="l-anchor-link">
        <span onClick={() => scroll(props.href)}>{props.title}</span>
      </div>
    )
  },
})
