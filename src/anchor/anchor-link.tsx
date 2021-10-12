import { defineComponent, h } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
const anchorLinkProps = {
  title: {
    type: String as PropType<string>,
    default: '',
  },
  href: {
    type: String as PropType<string>,
    default: '',
  },
}

export type AnchorLinkProps = Partial<ExtractPropTypes<typeof anchorLinkProps>>

export default defineComponent({
  name: 'LAnchorLink',
  props: anchorLinkProps,
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
