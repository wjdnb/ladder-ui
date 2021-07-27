<template>
  <div class="public-section">
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '../style/var.scss';

.public-section {
  padding: 0 20px 0 60px;
}

main {
  min-height: 100vh;
}

footer {
  margin: 0 -20px 0 -60px;

  height: 300px;
  background: $theme;
}
</style>
