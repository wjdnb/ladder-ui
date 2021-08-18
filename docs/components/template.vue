<template>
  <main>
    <aside>
      <ul>
        <li v-for="(item, index) in sidebarList" :key="index">
          <div class="group-title">{{ item.groupName }}</div>
          <ul>
            <li
              v-for="(group, key) in item.groups"
              :key="key"
              :class="{
                'sidebar-active': routePath === group.link,
              }"
            >
              <router-link :to="group.link">{{ group.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
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

    const sidebarList = computed(() => {
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

      sidebarList,

      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../style/var.scss';

aside {
  width: 300px;
  background: #fff;
  border-right: 1px solid $border;
  // height: calc(100vh + 400px);
  overflow-y: scroll;

  .group-title {
    position: relative;

    color: #00000073;
    font-size: 13px;
    font-weight: bold;
    padding: 8px 16px 8px 40px;

    &:after {
      position: absolute;
      bottom: 0;
      left: 15px;
      content: '';

      width: calc(100% - 30px);
      height: 1px;
      background: $border;
    }
  }

  ul {
    li {
      ul {
        li {
          position: relative;

          height: 40px;
          line-height: 40px;
          padding: 0 20px 0 40px;
          border-right: 2px solid;
          border-right-color: transparent;
          margin: 10px 0 10px 0px;

          cursor: pointer;

          transition: all 0.2s ease-in-out;

          &.sidebar-active {
            border-right-color: $theme;
            a {
              color: $theme;
            }
          }

          &:hover {
            a {
              color: $theme;
            }
          }

          a {
            &:after {
              position: absolute;
              top: 0;
              left: 0;

              content: '';

              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
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
        // position: fixed;
        // right: 0;
        // top: 100px;

        width: 200px;
      }
    }
  }
}

footer {
  height: 300px;
  background: $theme;

  margin-top: 100px;
}
</style>

<style>
@import '../style/markdown.css';
</style>
