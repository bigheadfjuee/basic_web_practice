// my-component.js

const template = `
<div>
<label>{{count}}</label>
<button @click="count++">Count++</button>
</div>

<div>
<input type="text" v-model="text">
<label id="label">{{text}}</label>
</div>

<div>
<ul>
  <li v-for="item in array">{{item}}</li>
</ul>
</div>
`

export default {
  template, // template: template
  data() {
    return {
      count: 0,
      text: "text",
      array: [1, 2, 3, 4, 5, 6],
    }
  }
}

