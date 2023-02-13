<!-- *.vue Single-File Components (SFC)-->
<template>
  <h1>{{ title }}</h1>

  <div>
    <label>{{ count }}</label>
    <button @click="count++">Count++</button>
  </div>

  <div>
    <input type="text" v-model="text">
    <label id="label">{{ text }}</label>
  </div>

  <div>
    <button @click="getApiData">Get API Data</button>
    <ul>
      <li v-for="item in array" key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
// Vue3 Composition API + setup 語法糖 就像在寫一般的 js 
import { ref } from 'vue'
const title = 'VueLoader'
const count = ref(0)
const text = ref('text')
const array = ref([])

const getApiData = () => {
  array.value = []
  const base = Date.now();
  for (let i = 0; i < 5; i++) {
    array.value.push(base + i)
  }
}
</script>