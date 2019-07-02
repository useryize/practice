# JavaScript深入之执行上下文栈

> JavaScript深入系列第三篇，讲解执行上下文栈的是如何执行的.

## 顺序执行？

如果要问到 JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行，毕竟：

变量提升
```js
var foo = function () {
    console.log('foo1');
}
foo(); // foo1

var foo = function () {
    console.log('foo2');
}
foo(); // f002
```

函数提升
```js
function foo() {
    console.log('foo1');
}
foo() // foo2
function foo() {
    console.log('foo2')
}
foo() // foo2
```

打印的结果却是两个 `foo2`。

刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。

但是本文真正想让大家思考的是：这个“一段一段”中的“段”究竟是怎么划分的呢？

到底JavaScript引擎遇到一段怎样的代码时才会做“准备工作”呢？

## 可执行代码

这就要说到javaScript 的可执行代码（executable code）的类型有哪些了？

其实很简单，就三种，全局代码，函数代码，eveal代码。

举个例子，当执行到一个函数的时候，就会进行准备工作，这里的‘准备工作’，让我们用个更专业的说法，就叫做“执行上下文（execution context）”

## 执行上下文栈

接下来问题来了，我们写的函数多了去了，如何管理创建的那么多函数呢？

所以JavaScript 引擎创建了执行上下文栈(Execution context stack，ECS)来管理执行上下文

为了模拟执行上下文栈的行文，让我们定义执行上下文栈是一个数组：

```js
EXStack = [];
```

试想 JavaScript 遇到下面的这段代码了：

```js
function fun3() {
    console.log("fun3");
}
function fun2() {
    fun3()
}
function fun1() {
    fun2()
}
fun1()
```

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这断代码：

```js
// 伪代码

// fun1()
ECStack.push(<fun1>, functionContext);

// fun1调用fun2, 还要创建fun2的执行上下文
ECStack.push(<fun2>, functionContext);

// fun2调用了fun3
ECStack.push(<fun3>, functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript 接着执行下面的代码， 但是ECStack底层永远只有个globalContext

``` 