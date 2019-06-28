## 20190628
---
### [html] [**页面导入样式时，使用link和@import有什么区别？**]
- 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- 区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)
- 区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持(不兼容ie5以下)。
- 区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。

### [css] [圣杯布局和双飞翼布局的理解和区别，并用代码实现]
- 作用：圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。
- 区别：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。
#### 圣杯布局
> 此布局一般的需求为两边等宽，中间自适应的三栏布局。
```
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    padding: 0 129px;
    box-shadow: 0 0 0 1px #eee;
  }
  section::after {
    content: '';
    display: block;
    clear: both;
  }
  section > div {
    height: 229px;
    line-height: 1.5em;
    padding: 29px 12px;
    text-align: center;
    float: left;
    color: white;
    background: #b4a078;
  }
  section .left, section .right {
    position: relative;
    width: 119px;
  }
  section .left {
    left: -129px;
    margin-left: -100%;
  }
  section .center {
    width: 100%;
    text-align: justify;
    hyphens: auto;
  }
  section .right {
    left: 129px;
    margin-left: -119px;
  }
  /* input range */
  input[type="range"] {
    width: 100%;
    cursor: ew-resize;
  }
</style>
<template>
  <main class="main">
    <input ref="range" type="range" value="100">
    <section :style="{ width }">
      <div class="center">A paragraph of filler text. La la la de dah de dah de dah de la.</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        width: "100%"
      }
    },
    mounted() {
      this.$refs.range.oninput = ({ target: { value } }) => {
        this.width = `${60 + value * .4}%`;
      }
    }
  }
</script>
```
#### 双飞翼布局
> 此布局的需求同圣杯布局一样，都为两边等宽，中间自适应的三栏布局，源自淘宝UED
```
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    box-shadow: 0 0 0 1px #eee;
  }
  section::after {
    content: '';
    display: block;
    clear: both;
  }
  section > div {
    height: 229px;
    line-height: 1.5em;
    text-align: center;
    float: left;
    color: white;
  }
  section .left, section .right {
    width: 119px;
    padding-top: 29px;
    background: #b4a078;
  }
  section .left {
    margin-left: -100%;
  }
  section .center {
    width: 100%;
    text-align: justify;
    hyphens: auto;
  }
  section .center-inner {
    height: 100%;
    margin: 0 129px;
    padding: 29px 12px;
    background: #b4a078;
  }
  section .right {
    margin-left: -119px;
  }
  /* input range */
  input[type="range"] {
    width: 100%;
    cursor: ew-resize;
  }
</style>
<template>
  <main class="main">
    <input ref="range" type="range" value="100">
    <section :style="{ width }">
      <div class="center">
        <div class="center-inner">A paragraph of filler text. La la la de dah de dah de dah de la.</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        width: "100%"
      }
    },
    mounted() {
      this.$refs.range.oninput = ({ target: { value } }) => {
        this.width = `${60 + value * .4}%`;
      }
    }
  }
</script>
```
- [js] [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值]