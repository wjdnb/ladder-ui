<template>
  <div class="test">
    <l-tooltip>
      <template #title>qwe</template>
      <l-button>Default</l-button>
      <LDemo>asdasd</LDemo>
    </l-tooltip>
  </div>
</template>

<script lang="ts">
import LDemo from '../components/l-demo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    LDemo,
  },
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
