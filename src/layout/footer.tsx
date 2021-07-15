import { defineComponent, CSSProperties, computed } from 'vue'

export default defineComponent({
  name: 'LFooter',
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
      <footer class="l-footer" style={styles.value}>
        {slots.default?.()}
      </footer>
    )
  },
})
