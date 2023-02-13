// my-component.js

const template = `
<h1>

<div>
<label>{{count}}</label>
<button @click="count++">Count++</button>
</div>

<div>
<input type="text" v-model="text">
<label>{{text}}</label>
</div>

<div>
<button @click="getApiData">Get API Data</button>
<ul>
  <li v-for="item in array">{{item}}</li>
</ul>
</div>
`    

import { ref } from 'vue' 

export default {
  name:'MyComponent',
  template,
  setup() {
    const title = ref('Vue - ES Module')
    const count = ref(0)
    const text = ref('text')
    const array = ref([])

    function getApiData() {
      array.value = [] // clear

      const base = Date.now();
      for (let i = 0; i < 5; i++) {
        array.value.push(base + i)
      }
    }

    return { count, text, array, getApiData }
  }
}

