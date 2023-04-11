
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
  const debounce = (func, delay) => {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(context, args)
      }, delay)
    }
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


```js
// 全排列
const add = (list) => {
    let res = [];
    let obj = {};
    const fun = (arr = []) => {
        if (arr.length === list.length) {
            res = [...res, arr]
            return;
        }
        for (let item of list) {
            if (obj[item]) continue;
            obj[item] = true;
            fun([...arr, item]);
            obj[item] = false;
        }

    }
    fun();
    return res
}
console.log(add([1, 2, 3]));

```


```js
// 转换类型
var obj = [
    { id: 3, parent: 2 },
    { id: 1, parent: null },
    { id: 2, parent: 1 },
]




const transf = (info) => {
    const newInfo = [...info];
    return newInfo.filter(item => {
        const children = newInfo.filter(itemChild => {
            if (item.id === itemChild.parent) {
                itemChild.isChild = true
            }
            return item.id === itemChild.parent
        })
        if (children.length) {
            item.children = children
        }
        return !item.isChild
    }).find(item => !item.isChild)
}
console.log(transf(obj))



```

```js
// 防抖
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
document.addEventListener("scroll", debounce(() => console.error(" 防抖执行了 "), 1000));


// 节流
function throttle(fun, time) {
    let key;
    return function (...args) {
        if (key) return;
        key = setTimeout(() => {
            fun.apply(this, args);
            key = null;
        }, time);
    }
}
document.addEventListener("scroll", throttle(() => console.error(" 防抖执行了 "), 1000));
```



