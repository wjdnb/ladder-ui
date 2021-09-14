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
              'sidebar-active': route.path === group.path,
            }"
          >
            <a @click="handleRouteChange(group)"> {{ group.path }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Props {
  options: any[]
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
})

const emit = defineEmits<{
  (e: 'title', title: string): void
}>()

const route = useRoute()
const router = useRouter()

const handleRouteChange = (group: any) => {
  nextTick(() => {
    router.push({
      path: group?.path ?? '/',
    })

    emit('title', group?.en ?? '/')
  })
}
</script>
