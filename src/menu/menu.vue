<template>
  <div class="l-menu">
    <ul>
      <li v-for="(item, index) in options" :key="index">
        <div v-if="item.groupName" class="group-title">
          {{ item.groupName }}
        </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  props: { options: { type: Array, default: () => [] } },
  setup() {
    const routePath = computed(() => useRoute().path)

    return {
      routePath,
    }
  },
})
</script>
