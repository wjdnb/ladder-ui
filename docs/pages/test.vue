<template>
  <div class="test">
    <l-space>
      <l-button type="primary" size="mini" @click="here">Mini</l-button>
      <l-button type="primary" size="small">Small</l-button>
      <l-button type="primary" size="medium">Medium</l-button>
      <l-button type="primary" :size="size">Large</l-button>
      <l-button round type="primary" size="mini">Mini</l-button>
      <l-button round type="primary" size="small">Small</l-button>
      <l-button round type="link" size="medium" disabled>Medium</l-button>
      <l-button round type="primary" :size="size">Large</l-button>
    </l-space>

    <l-space> </l-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      size: 'large',
    }
  },
  methods: {
    here() {
      this.size = 'medium'
      console.log('asdas')
    },
  },
})
</script>

<style lang="scss" scoped>
.test {
  margin-top: 200px;
  margin-left: 200px;
}
</style>
