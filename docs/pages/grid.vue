<template>
  <div class="grid">
    <div class="abc">
      <h1 id="asd">asdasd</h1>
      <demo-block>
        <template #example>
          <l-space>
            <button @click="add">+</button>
            <button @click="sub">-</button>
            <div>{{ number }}</div>
          </l-space>
        </template>

        <template #code>
          <l-code :code="code" />
        </template>
      </demo-block>

      <h1 id="qwe">sadasdas</h1>
      <demo-block>
        <template #example>
          <l-space>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </l-space>
        </template>
        <template #code>
          <l-code :code="code" />
        </template>
      </demo-block>
    </div>

    <l-tooltip>
      <template #title>qweqweqwe</template>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        obcaecati aut harum magni nesciunt rem atque dolores quae! Provident
        autem voluptatum et exercitationem est magnam itaque cupiditate aperiam
        inventore iste?
      </p>
    </l-tooltip>
  </div>
</template>

<script lang="ts">
import LCode from '../components/l-code'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LCode,
  },
  data() {
    return {
      code: `
<template>
  <l-space>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <div>{{ number }}</div>
  </l-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      let number = ref(0)
      const add = () => {
        number.value++
      }
      const sub = () => {
        number.value--
      }

      return {
        number,
        add,
        sub
      }
    }
  })
<\/script>`,
    }
  },
})
</script>
