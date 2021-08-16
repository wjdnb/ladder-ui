<template>
  <main>
    <aside>
      <l-menu :options="sidebarOptions"></l-menu>
    </aside>

    <section>
      <div class="main">
        <router-view></router-view>
        <nav v-if="pageAnchor" class="nav-anchor">
          <l-anchor>
            <l-anchor-link
              v-for="item in pageAnchor"
              :key="item.title"
              :title="item.title"
              :href="item.href"
            ></l-anchor-link>
          </l-anchor>
        </nav>
      </div>
      <footer></footer>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import anchors from './anchor'
import { docList, componentList } from './link'
export default defineComponent({
  setup() {
    const route = computed(() => useRoute())

    const routePath = computed(() => route.value.path)

    const sidebarOptions = computed(() => {
      if (route.value.path.includes('component')) {
        return componentList
      } else if (route.value.path.includes('docs')) {
        return docList
      }

      return []
    })

    let pageAnchor = computed(() => {
      console.log(route.value.name)
      const anchor = anchors.filter(item => item.name === route.value.name)
      return anchor ? anchor[0]?.anchor : ''
    })

    const handleClick = (e: any) => {
      console.log(e)
    }

    return {
      routePath,
      pageAnchor,
      sidebarOptions,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

aside {
  width: 300px;
  background: #fff;
  border-right: 1px solid $border;
}

main {
  display: flex;
  padding-top: 30px;

  section {
    flex: 1 1 auto;

    .main {
      display: flex;
      min-height: 100vh;

      .doc {
        flex: 1 1 auto;
        padding-left: 50px;
        padding-right: 40px;
      }

      .nav-anchor {
        width: 200px;
      }
    }
  }
}

footer {
  height: 300px;
  background: $danger;

  margin-top: 50px;
}
</style>

<style lang="scss">
@import '../style/markdown.scss';
</style>
