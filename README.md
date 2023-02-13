# basic_web_practice
To practice html, css, js

## 使用簡單範例比較差別
html 的部份都一樣，只差在 \<script>\</script>中的內容
* 按鈕累加計數
* 偵測 input 內容變化，並同步輸出至 label
* 按鈕模擬呼叫 api 後，取得回傳資料 array 動態列出內容

### [1pure_js.html](1pure_js.html)
純 js 的寫法

### [2jquery.html](2jquery.html)
借用 jQuery 來簡化 純js 的寫法

### [vue_1GlobalBuild.html](vue_1GlobalBuild.html)
使用 Vue.js 框架來達成

## 下面二個因為 CORS policy 的關係
無法直接用 Chrome, Edge, FireFox 直接開啟，要間接使用如 Live Server 之類的 Extension

### [vue_2ESModule.html](vue_2ESModule.html)
使用 ES Module 配合 import 元件.js 的方式

### [vue_3VueLoader.html](vue_3VueLoader.html)
使用 vue3-sfc-loader 直接使用 單一元件檔.vue (SFC - Single File Component)
(Vue SFC 常使用在 Vue CLI 處理大專案時)