<template>
  <div class="test">
    <l-tooltip>
      <template #title>qwe</template>
      <l-button>Default</l-button>
      <LDemo>asdasd</LDemo>
    </l-tooltip>
  </div>

  <l-space>
    <l-button>asd</l-button>
    <l-button>asd</l-button>
    <l-button>asdasd</l-button>
  </l-space>

  <l-row>
    <l-col :span="8"><div class="grid">2</div></l-col>
    <l-col :span="8"><div class="grid">3</div></l-col>
    <l-col :span="8"><div class="grid">4</div></l-col>
  </l-row>
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

.grid {
  padding: 8px;
  border-radius: 20px;
  background-color: #333;
  margin: 0 20px;
}
</style>
