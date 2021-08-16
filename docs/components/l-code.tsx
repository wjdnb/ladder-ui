import { defineComponent, computed } from 'vue'
import hljs from 'highlight.js/lib/common'
import className from '@/_util/className'
export default defineComponent({
  props: {
    language: {
      type: String,
      default: '',
    },
    autodetect: {
      type: Boolean,
      default: true,
    },
    code: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const autodetect = computed(() => props.autodetect && !props.language)

    const escapeHtml = (value: string): string =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')

    const highlightedCode = computed((): string => {
      if (autodetect.value) {
        return hljs.highlightAuto(props.code).value
      } else {
        if (hljs.getLanguage(props.language)) {
          return hljs.highlight(props.code, {
            language: props.language,
            ignoreIllegals: true,
          }).value
        } else {
          console.warn('unknown language')
          return escapeHtml(props.code)
        }
      }
    })

    const classNames = computed(() => className('hljs', props.language))

    return () => {
      return (
        <pre>
          <code
            class={classNames.value}
            innerHTML={highlightedCode.value}
          ></code>
        </pre>
      )
    }
  },
})
