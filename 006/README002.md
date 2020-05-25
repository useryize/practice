### ES2020 已定稿！赶紧上手实践一下吧（真实场景例子）

#### 可选链式操作符

> 对我个人来说，这是ES2020最令人兴奋的特点之一，我已近编写了很多程序，这些程序将会从这个新特性中获益匪浅。      
可选链操作符允许您安全的访问对象的深嵌套属性，而不必检查每个属性是否存在。让我们看看这个特性对我们有什么帮助。


>  拥有可选链操作符之前 <font color="green"> Some green text </font>

```js
  
  let obj = {
    name: "name",
    age: 18,
    adds: {
      add1: {
        add2: {
          add3: {
            name: "adds"
          }
        }
      }
    }
  }
  if (obj && obj.adds && obj.adds.add1 && obj.adds.add1.add2 && obj.adds.add1.add2.add3 && obj.adds.add1.add2.add3.name) {
    console.log(obj.adds.add1.add2.add3.name)
  }
  
  
```

> 正如您在上面看到的，必须检查每个级别中是否存在该属性,已避免出现无法读取的未定义属性 “po”的错误。 随着嵌套级别的增加，手动检查的属性数量也会增加。这以为这我们必须检查每个级别，已确保不会在遇到未定义或空对象是崩溃。



> 拥有可选链式操作符之后

> 随着可选链式操作符的引用，我们前端的工作变得容易了。通过简单的使用可选链式操作符 ' ?. ' 我们可以访问身深嵌套的对象，而不必要检查未定义或空对象。

```js
  
  let obj = {
    name: "name",
    age: 18,
    adds: {
      add1: {
        add2: {
          add3: {
            name: "adds"
          }
        }
      }
    }
  }
  if (obj?.adds?.add1?.add2?.add3?.name) {
    console.log(obj.adds.add1.add2.add3.name)
  }
  
  
```

ES2020成功的通过引入一个单独的代码操作符  ?.   来减少代码


---


#### 空置合并操作符


> 空值合并操作符允许您检查  nullish  值而不是  falsey  值。 Nullish 值是指  null 或 undefined 的值。 而 falsey 值是诸如空字符串、数字0、  undefined 、  null 、  false 、  NaN  等等的值。 这对你来说可能听起来没什么不同，但是在现实中，这意味着很多。让我们看看这是怎么回事。



> 在有空值合并操作符之前


> 我最近做了一个项目，我需要允许黑暗模式（Dark Mode）切换功能。 我必须检查输入是  true 还是  false 。 如果用户没有设置任何值，则默认为  true 。 下面就是我如何在有空值合并操作符之前实现它的：


```js
const darkModePreference1 = true;
const darkModePreference2 = false;
const darkModePreference3 = undefined;
const darkModePreference4 = null;
const getUserDarkModePreference = (darkModePreference) => {
  if (darkModePreference || darkModePreference === false) {
    return darkModePreference;
  }
  return true;
};
getUserDarkModePreference(darkModePreference1);
// true
getUserDarkModePreference(darkModePreference2);
// false
getUserDarkModePreference(darkModePreference3);
// true
getUserDarkModePreference(darkModePreference4);
// true
```


> 在有空值合并操作符之后
在有空值合并操作符之后，您所要做的就是使用  ??  操作符。不需要  if  语句：

```js
const darkModePreference1 = true;
const darkModePreference2 = false;
const darkModePreference3 = undefined;
const darkModePreference4 = null;
const getUserDarkModePreference = (darkModePreference) => {
  return darkModePreference ?? true;
};
getUserDarkModePreference(darkModePreference1);
// true
getUserDarkModePreference(darkModePreference2);
// false
getUserDarkModePreference(darkModePreference3);
// true
getUserDarkModePreference(darkModePreference4);
// true

```

> 复制代码这里基本上发生的情况是，如果变量 darkModePreference 包含一个  nullish  值，那么将值 true 赋给它。 简单，简短，易于理解。

---


#### 动态 import

> 这个特性将帮助您的应用程序更加高效的执行， 动态 import 允许您将 JS 文件作为原生应用用程序中的模块动态导入。 在 ES2020之前，不管是否使用模块，都应该导入模块。
例如，假设我们需要添加一个功能来下载 pdf 格式的文件。
让我们看看如何在 动态 import 之前和之后实现这一点。


> 在 动态 import  之前
实际上，不会所有的页面访问者使用下载 pdf 的选项。 但是，无论我们的访客是否使用它，它仍然需要被导入。 这意味着这个 pdf 模块也可以在页面加载期间被下载。

```js
import { exportAsPdf } from "./export-as-pdf.js";
const exportPdfButton = document.querySelector(".exportPdfBtn");
exportPdfButton.addEventListener("click", exportAsPdf);

```

> 在动态导入（动态 import）之后

```js
const exportPdfButton = document.querySelector('.exportPdfBtn');
exportPdfButton.addEventListener('click', () => {
  import('./export-as-pdf.js')
    .then(module => {
      module.exportAsPdf()
    })
    .catch(err => {
      // handle the error if the module fails to load
    })
})

```


> 正如您在上面的代码中看到的，现在只有在需要模块时才延迟加载模块。 从而减少开销和页面加载时间。

---

### Promise.allSettled


> 如果你有一个场景，在所有 Promise 都完成之后必须执行一个任务，那么你可能使用  Promise.all() 方法。 但是这个方法有一个缺点。 当你的任何一个 Promise 被 Rejected 时，Promise 方法就会抛出一个错误。 这意味着您的代码不会等到所有的 Promise 都完成。
这可能不是你想要的。 如果你想要这样的东西: “我不在乎他们的结果。 只需全部运行” ，那么你可以使用新的  Promise.allSettled() 方法。 这种方法只有在你的所有 Promise 都  settled ーー 要么  Resolved ，要么  Rejected ーー 时才会  Resolved 。
在拥有 Promise.allSettled 之前


```js
const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.all(PromiseArray)
  .then((data) =>
    console.log("all resolved! here are the resolve values:", data)
  )
  .catch((err) => console.log("got rejected! reason:", err));
//got rejected! reason: null

```


> 如上所述，当其中一个 Promise 被  rejected 时， Promise 就会抛出错误。

> 在拥有 Promise.allSettled 之后


```js
const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.allSettled(PromiseArray)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
//[
//  {status: "fulfilled", value: 100},
//  {status: "rejected", reason: null},
//  {status: "fulfilled", value: "Data release"},
//  {status: "rejected", reason: Error: Something went wrong ...}
//]

```

> 尽管有些 Promise 被 rejected 了，Promise.allSettled 返回了所有的 Promise 的结果。

---


### globalThis

> globalThis  包含对全局对象的引用，与环境无关。 在浏览器中，全局对象是  window 对象。 在 Node 环境中，全局对象是   global 或者 Web workers 中的  self。

> 在拥有 globalThis 之前
我们在工作中会有需要编写一份同时运行在 Node 和浏览器中的通用代码，当我们要取得全局对象时，通常需要做很多工作和逻辑判断：

```js
beforeGlobalThis = (typeof window !== "undefined"
? window
: (typeof process === 'object' &&
   typeof require === 'function' &&
   typeof global === 'object')
    ? global
    : this);

beforeGlobalThis.tuture = '小若燕雀，亦可一展宏图';

```

> 在拥有 globalThis 之后
我们可以直接使用 globalThis 去引用全局对象，而不用去担心环境的问题：


```js
globalThis.tuture = '小若燕雀，亦可一展宏图';
```

> 上面的代码在浏览器或者 Node 环境中都是通用的，你可以放心使用！

---

### BigInt

> 允许您使用大于 Javascript 中允许的最大值的数字。 这个数字是  pow(2,53)-1 。 尽管这不能向后兼容，因为传统的数字系统(IEEE 754)不能支持这种大小的数字。


### String.matchall

> matchAll() 是一个与正则表达式相关的方法。 此方法返回与正则表达式匹配的字符串的所有结果的迭代器，包括捕获组。 这个方法已经被添加到 String 原型中。








