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
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const navList = ref([
      {
        name: '文档',
        link: '/docs/introduction',
        sign: 'docs',
      },
      {
        name: '组件',
        link: '/component/button',
        sign: 'component',
      },
    ])

    const routePath = computed(() => useRoute().path)

    const translate = () => {
      alert('完善中✍️')
    }
    return {
      navList,
      routePath,
      translate,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;

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
            border-bottom-color: $danger;

            a {
              color: $danger;
            }
          }

          &:hover {
            border-bottom-color: $danger;

            a {
              color: $danger;
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
  position: relative;
  padding-top: 64px;
}
</style>

<style lang="scss">
@import '@style/var.scss';
* {
  color: $text;
  box-sizing: border-box;

  &:not(h1, h2, h3, h4, h5, h6) {
    font-size: 14px;
  }
}

a {
  text-decoration: none;
}

body {
  margin: 0;
}

button {
  outline: none;
  margin: 0;
  background: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

@font-face {
  font-family: 'Timmana';
  src: url('./assets/font/Timmana.woff2'); /* IE9 Compat Modes */
  src: url('./assets/font/Timmana.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('./assets/font/Timmana.woff') format('woff'),
    /* Modern Browsers */ url('./assets/font/Timmana.ttf') format('truetype'); /* Safari, Android, iOS */
}
</style>
