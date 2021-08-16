/* eslint-disable @typescript-eslint/no-var-requires */
const mdContainer = require('markdown-it-container')

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<l-demo>
        !--demo: ${content}:demo--
        `
      }
      return '</l-demo>'
    },
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}
