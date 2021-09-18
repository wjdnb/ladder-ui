<template>
  <div id="app">
    <div class="container">
      <l-input placeholder="here" :type="type"></l-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: document.title,
      type: 'password',
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px;
}
</style>
