# basic_web_practice

To practice html, css, js
___
## styles 使用 sass

配合 VS Code - Extension : Live Sass Compiler 產出 css 檔
___

# 使用簡單範例比較差別

html 的部份幾乎都一樣，只差在 \<script>\</script>中，用 js 實作功能的內容
* 按鈕累加計數
* 偵測 input 內容變化，並同步輸出至 label
* 按鈕模擬呼叫 api 後，取得回傳資料 array 動態列出內容

## 不用框架的作法
1. [pure_js.html](pure_js.html)
傳統純 js 的寫法

2. [jquery.html](jquery.html)
借用 jQuery 來簡化 純js 的寫法

3. [js_innerHtml.html](js_innerHtml.html)
html 只產生一個 \<div id="app">\ 其它內容用 innerHTML 配合 \`字串內容\` 來產生 
(模擬前端框架動態 render )

## 使用 Vue.js 框架來達成一樣的功能

1. [Vue 1GlobalBuild.html](./vue/vue_1GlobalBuild.html)
配合 CDN 使用 Global Build 的 Vue

*注意：下面二個檔案因為 CORS policy 的關係不能直接開*

無法直接用 Chrome, Edge, FireFox 等瀏覽器 直接開啟， VS Code 要間接使用如 Live Server 之類的 Extension

2. [Vue - 2ESModule.html](./vue/vue_2ESModule.html)
使用 ES Module 配合 import 元件.js 的方式

3. [Vue - 3VueLoader.html](./vue/vue_3VueLoader.html)
使用 vue3-sfc-loader 直接使用 單一元件檔.vue (SFC - Single File Component)

*(Vue SFC 常使用在 Vue CLI 處理較複雜的專案時使用)*

## 使用 React 來達成一樣的功能

1. [React - 1CreateElement](./react/react_1CreateElement.html)
使用原生 React.createElement 的寫法

2. [React - 2ImportComponent](./react/react_2ImportComponent.html)
引入 React Class Component (.js) 的寫法

3. [React - 3JSX](./react/react_3JSX.html)
引入 babel 後，就可直接使用 JSX (語法糖) 的寫法 - 簡化 render 的部份 和 增加可讀性

4. [React - 4Hooks](./react/react_4Hooks.html)
改用 Function Component 配合 Hook 的寫法 - 讓 React 的 state 處理更加簡潔