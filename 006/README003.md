
#### 防抖


> 防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零 

```js
  function debounce(fun, time){
    let key;
    return function() {
      clearTimeout(key);
      key = setTimeout(() => {
        fun.apply(this);
      }, time);
    }
  }
const debounce = (fun, time) => {
    let key;
    return function (...args) {
        if (key) {
            clearTimeout(key)
        }
        key = setTimeout(() => {
            fun.call(this, args);
        }, time);
    };
};
```

#### 节流

> 控制流量，单位时间内事件只能触发一次

```js
  function throttle(fun, time){
    let key;
    return function(...args) {
      if (key) return;
      key = setTimeout(() => {
        fun.apply(this,args);
        key = null;
      }, time);
    }
  }

```

```js
// model对话框
const modalInit = (msg, fun) => {
    const div = document.createElement('div')
    div.innerHTML = `<div class="mainBox">
            <div class="mask"></div>
            <div class="center">
                <div>${msg}</div>
                <div class="btn">
                    <div class="clear">关闭</div>    
                    <div class="btn">确定</div>    
                </div>
            <div>
        </div>
        `
    document.body.append(div)

    document.querySelector('.btn').onclick = fun
    document.querySelector('.clear').onclick = function () {
        div.remove()
    }
}
modalInit('封装modal', () => {
    console.log('确定按钮回调')
})
```






