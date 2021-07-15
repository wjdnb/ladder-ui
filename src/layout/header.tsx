import { defineComponent, CSSProperties, computed } from 'vue'

export default defineComponent({
  name: 'LHeader',
  props: {
    height: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const styles = computed(() => {
      const style: CSSProperties = {}

      if (props.height) {
        style.height = `${props.height}px`
      }

      return style
    })

    return () => (
      <header class="l-header" style={styles.value}>
        {slots.default?.()}
      </header>
    )
  },
})
