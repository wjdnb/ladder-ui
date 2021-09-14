<template>
  <main>
    <aside>
      <l-menu :options="sidebarOptions" @title="handleTitle"></l-menu>
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
            >
            </l-anchor-link>
          </l-anchor>
        </nav>
      </div>
      <footer></footer>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import anchors from './anchor'
import { docList, componentList } from './link'

const route = computed(() => useRoute())

const sidebarOptions = computed(() => {
  if (route.value.path.includes('component')) {
    console.log(componentList)
    return componentList
  } else if (route.value.path.includes('docs')) {
    console.log(docList)
    return docList
  }

  return []
})

const title = useTitle()

const handleTitle = (val: string) =>
  (title.value = `${val ?? 'L'}  | Ladder UI`)

let pageAnchor = computed(() => {
  const anchor = anchors.filter(item => item.name === route.value.name)
  return anchor ? anchor[0]?.anchor : ''
})
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

main {
  display: flex;
  padding-top: 30px;

  aside {
    width: 300px;
    background: #fff;
    border-right: 1px solid $border;
    flex: 0 0 300px;
  }

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
