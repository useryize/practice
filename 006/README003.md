
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

```

#### 节流

> 控制流量，单位时间内事件只能触发一次

```js
  function throttle(fun, time){
    let key;
    return function() {
      if (key) return;
      key = setTimeout(() => {
        fun.apply(this);
        key = null;
      }, time);
    }
  }

```
