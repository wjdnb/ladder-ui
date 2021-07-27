<template>
  <header>
    <div class="nav-logo">
      <router-link to="/">Ladder UI</router-link>
    </div>
    <div class="nav-menu">
      <nav>
        <ul>
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="{
              'nav-active': routePath.includes(item.sign),
            }"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
      <span><button class="language" @click="translate">English</button></span>
      <span>
        <a target="_blank" href="https://github.com/Hgwxxdd/ladder-ui">
          <img src="./assets/image/GitHub-Mark-32px.png" alt="Github" />
        </a>
      </span>
    </div>
  </header>
  <div class="wrapper">
    <aside v-if="!isHomePage">
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
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const componentList = [
  {
    groupName: '布局组件',
    groups: [
      { name: '分割线', link: '/component/divider' },
      { name: '栅格', link: '/component/grid' },
      { name: '布局', link: '/component/layout' },
      { name: '间距', link: '/component/space' },
    ],
  },
]

const docList = [
  {
    groupName: '介绍',
    groups: [
      {
        name: 'Ladder UI',
        link: '/docs/introduction',
      },
    ],
  },
  {
    groupName: '快速上手',
    groups: [
      {
        name: '安装',
        link: '/docs/install',
      },
    ],
  },
]

export default defineComponent({
  setup() {
    const route = useRoute()

    const navList = ref([
      {
        name: '文档',
        link: '/docs/introduction',
        sign: 'docs',
      },
      {
        name: '组件',
        link: '/component/divider',
        sign: 'component',
      },
    ])

    const sidebarList = computed(() => {
      if (route.path.includes('component')) {
        return componentList
      } else if (route.path.includes('docs')) {
        return docList
      }

      return []
    })

    const isHomePage = computed((): boolean => route.name === 'homepage')

    const routePath = computed(() => {
      return route.path
    })

    const translate = () => {
      alert('完善中✍️')
    }

    return {
      navList,
      isHomePage,
      routePath,
      sidebarList,
      componentList,
      docList,
      translate,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './style/var.scss';

header {
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  padding: 0 40px;

  height: 64px;
  line-height: 64px;

  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .nav-logo {
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;

    a {
      font-size: 18px;
    }
  }

  .nav-menu {
    display: flex;
    justify-content: space-around;

    nav {
      ul {
        display: flex;
        justify-content: space-around;

        li {
          position: relative;

          margin: 0px 0px -2px 26px;
          border-bottom: 2px solid;
          border-bottom-color: transparent;
          padding: 0 8px;

          text-align: center;
          cursor: pointer;
          user-select: none;

          transition: all 0.2s ease-in-out;

          &.nav-active {
            border-bottom-color: $theme;

            a {
              color: $theme;
            }
          }

          &:hover {
            border-bottom-color: $theme;

            a {
              color: $theme;
            }
          }

          a {
            font-weight: 500;
            text-decoration: none;

            transition: all 0.2s;

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

    span {
      margin-left: 26px;

      button {
        border: 1px solid #efefef;
        padding: 4px 10px;
        cursor: pointer;
      }

      img {
        vertical-align: middle;
        width: 20px;
      }
    }
  }
}

.wrapper {
  display: flex;
  margin-top: 40px;

  aside {
    flex: 0 1 300px;
    background: #fff;
    border-right: 1px solid $border;

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

  section {
    flex: 1 1 auto;
  }
}
</style>

<style lang="scss">
@import './style/var.scss';
* {
  color: $text;
  box-sizing: border-box;

  &:not(h1, h2, h3, h4, h5, h6) {
    font-size: 14px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  text-decoration: none;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

button {
  outline: none;
  margin: 0;
  background: transparent;
}

@font-face {
  font-family: 'Timmana';
  src: url('./assets/font/Timmana.woff2'); /* IE9 Compat Modes */
  src: url('./assets/font/Timmana.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('./assets/font/Timmana.woff') format('woff'),
    /* Modern Browsers */ url('./assets/font/Timmana.ttf') format('truetype'); /* Safari, Android, iOS */
}
</style>
