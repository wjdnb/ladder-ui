<template>
  <div class="container">
    <section>
      <div class="ladder">
        <div class="ladder-content">
          <p>&nbsp;</p>
          <p>LADDER UI</p>
        </div>
        <div class="ladder-content">
          <p>LADDER UI</p>
          <p>A Vue3 Library</p>
        </div>
        <div class="ladder-content">
          <p>A Vue3 Library</p>
          <p>have fun !</p>
        </div>
      </div>
    </section>
    <section>
      <button @click="toDocument">get started ></button>
    </section>
  </div>
  <footer></footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    toDocument() {
      this.$router.push({
        name: 'introduction',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../style/var.scss';

$left-offset: 32px;

.container {
  display: flex;
  justify-content: space-between;

  padding: 10% 30% 0 8%;
  min-height: 100vh;

  p {
    margin: 0;
  }
}

section {
  &:nth-child(1) {
    .ladder {
      &:hover {
        p {
          color: $theme;
          transform: translateY(-56px);
        }
      }

      p {
        font-size: 56px;
        font-weight: 900;
        text-transform: uppercase;
        font-smooth: antialiased;

        color: $nav-focus;
        transition: all 0.4s ease-in-out;
      }

      &-content {
        height: 56px;
        line-height: 56px;
        position: relative;
        overflow: hidden;

        &:nth-child(odd) {
          transform: skew(60deg, -30deg) scaleY(0.66667);
        }

        &:nth-child(even) {
          transform: skew(0deg, -30deg) scaleY(1.33333);
        }

        @for $i from 1 through 6 {
          &:nth-child(#{$i}) {
            left: $left-offset * $i;
          }
        }
      }
    }
  }

  &:nth-child(2) {
    padding-top: 8%;

    button {
      position: relative;
      margin: 10px;
      padding: 24px 20px;
      overflow: hidden;

      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;

      color: #fff;
      background: $theme;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:after {
        content: '';
        position: absolute;
        left: -1px;
        bottom: -1px;

        width: 24px;
        height: 24px;
        clip-path: polygon(0 30%, 100% 100%, 0 100%);
        background-color: #fff;
      }
    }
  }
}

footer {
  width: 100%;
  height: 300px;
  background: $theme;
}
</style>
