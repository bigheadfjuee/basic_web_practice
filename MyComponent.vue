<!-- *.vue Single-File Components (SFC)-->
<template>
  <div>
    <label>{{ count }}</label>
    <button @click="count++">Count++</button>
  </div>

  <div>
    <input type="text" v-model="text">
    <label id="label">{{ text }}</label>
  </div>

  <div>
    <ul>
      <li v-for="item in array">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { ref, reactive } from 'vue'
const count = ref(0)
const text = ref('text')
const array = [1, 2, 3, 4, 5, 6]

</script>