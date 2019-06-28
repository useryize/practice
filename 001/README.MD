## 001
---

### 1
### [js] [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值]

```
// ### [js] [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值]
// a) 生成一个空数组arr。
// b) 生成一个（2－32）之间的随机整数rand。
// c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
// d) 最终输出一个长度为5，且内容不重复的数组arr。


// Math.random()生成[0,1)的数，所以
// Math.random()*5生成{0,5)的数。
// 通常期望得到整数，所以要对得到的结果处理一下。
// parseInt()，Math.floor()，Math.ceil()和Math.round()都可得到整数。
// parseInt()和Math.floor()结果都是向下取整。
// 所以Math.random()*5生成的都是[0,4] 的随机整数。

// 生成[min,max]的随机数，公式如下：
// // max - 期望的最大值
// // min - 期望的最小值
// parseInt(Math.random()*(max-min+1)+min,10);
// Math.floor(Math.random()*(max-min+1)+min);


let arr = [];
function addArr(num) {
    let rand = Math.floor(Math.random() * 31 + 2);
    if (arr.length >= 5) {
        console.log(arr);
        return;
    }
    if (!arr.includes(rand)) {
        arr.push(rand);
    }
    addArr()
}
addArr();

// 检测随机数是否正确
function isRand() {
    setInterval(() => {
        let m = Math.floor(Math.random() * 31 + 2);
        if (i > 10000) {
            return;
        }
        if (a > 32 || a < 2) {
            console.log('===================');
            return;
        }
        i++;
        console.log(i, m);
    });
}

```
### 2
### [html] [**页面导入样式时，使用link和@import有什么区别？**]

> 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

> 区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)

> 区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持(不兼容ie5以下)。

> 区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。

### 3
### [css] [圣杯布局和双飞翼布局的理解和区别，并用代码实现]

> 圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部float浮动，但左右两栏加上负margin让其跟中间栏div并排，以形成三栏布局。

> 不同在于解决”中间栏div内容不被遮挡“问题的思路不一样：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。

> 双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。多了1个div，少用大致4个css属性（圣杯布局中间divpadding-left和padding-right这2个属性，加上左右两个div用相对布局position: relative及对应的right和left共4个属性，一共6个；而双飞翼布局子div里用margin-left和margin-right共2个属性，6-2=4），个人感觉比圣杯布局思路更直接和简洁一点。

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
