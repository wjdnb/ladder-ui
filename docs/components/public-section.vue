<template>
  <div class="public-section">
    <main>
      <div class="main">
        <router-view></router-view>
      </div>
      <div v-if="pageAnchor" class="sidenav">
        <l-anchor>
          <l-anchor-link
            v-for="item in pageAnchor"
            :key="item.title"
            :title="item.title"
            :href="item.href"
          ></l-anchor-link>
        </l-anchor>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import anchors from './anchor'
export default defineComponent({
  setup() {
    const route = computed(() => useRoute())

    let pageAnchor = computed(() => {
      const anchor = anchors.filter(item => item.name === route.value.name)
      return anchor ? anchor[0]?.anchor : ''
    })

    let activeIndex = ref(-1)

    const handleClick = (e: any) => {
      console.log(e)
    }

    return {
      pageAnchor,
      activeIndex,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../style/var.scss';

.public-section {
  padding: 0 20px 0 60px;
}

main {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  .main {
    flex: 1 1 auto;
  }

  .sidenav {
    margin-left: 40px;
    flex: 0 1 150px;
  }
}

footer {
  margin: 150px -20px 0 -60px;

  height: 300px;
  background: $theme;
}
</style>
