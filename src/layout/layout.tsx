import { defineComponent, VNode, Component, computed, h } from 'vue'
import className from '@/_util/className'
export default defineComponent({
  name: 'LLayout',
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some(vNode => {
          const componentName = (vNode.type as Component).name
          return componentName === 'LHeader' || componentName === 'LFooter'
        })
      }
      return false
    })

    const classNames = computed(() =>
      className('l-layout', isVertical.value ? 'is-vertical' : ''),
    )

    return () => <div class={classNames.value}>{slots.default?.()}</div>
  },
})
