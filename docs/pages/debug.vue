<template>
  <h1>here</h1>
  <l-button @click="add">go</l-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      size: 'large',
      num: 0,
    }
  },
  mounted() {
    console.log('here')
  },

  methods: {
    add() {
      this.num++
      console.log(this.num)
    },
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
