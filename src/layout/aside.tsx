import { defineComponent, computed, CSSProperties } from 'vue'

export default defineComponent({
  name: 'LAside',
  props: {
    width: {
      type: Number,
      default: 300,
    },
  },
  setup(props, { slots }) {
    const styles = computed(() => {
      const style: CSSProperties = {}

      if (props.width) {
        style.width = `${props.width}px`
      }

      return style
    })

    return () => (
      <div class="l-aside" style={styles.value}>
        {slots.default?.()}
      </div>
    )
  },
})
