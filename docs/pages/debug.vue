<template>
  <div id="app">
    <input v-model="title" type="text" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: document.title,
    }
  },
  // watch: {
  //   title: {
  //     handler(val) {
  //       document.title = val
  //       console.log('here', val)
  //     },
  //   },
  // },
}
</script>
