<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input v-model="newTodo" data-test="new-todo" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TodoApp',

  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false,
        },
      ],
    }
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      })
    },
  },
})
</script>
