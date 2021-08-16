<template>
  <div class="public-section">
    <main>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="sidenav">
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let pageAnchor = ref([
      { title: 'asdasd', href: '#asd' },
      { title: 'asdas', href: '#qwe' },
    ])

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
  margin: 0 -20px 0 -60px;

  height: 300px;
  background: $theme;
}
</style>
