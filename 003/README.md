# JavaScript 深入之从原型到原型链

> avaScript深入系列的第一篇，从原型与原型链开始讲起，如果你想知道构造函数的实例的原型，原型的原型，原型的原型的原型是什么，就来看看这篇文章吧。

## 构造函数创建对象

我们先使用构造函数创建一个对象

```js
function Person() {}
var person = new Person();
person.name='person_name';
console.log(person.name); // person_name
```

在这个例子中，Person就是一个构造函数，我们使用 new 创建了一个实例对象 person。

## prototype

每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype 比如

```js
function Person(){

}

// 注意prototype 是函数才有的属性

Person.prototype.name = 'Person_prototype_name';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name); //Person_prototype_name
console.log(person2.name); // Person_prototype_name

```

那这个函数的 prototype 属性到底指向的是什么呢？ 是这个函数的原型吗？

其实，函数的 prototype 属性指向了一个对象，这个对象正式调用该构造函数而创建的**实例**的原型，也就是这个例子中方的person1和person2的原型。

那什么是原型呢？ 你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

让我们用一张图表示构造函数和实例原型之间的关系：

[构造函数和实例原型的关系图](https://github.com/useryize/practice/blob/master/003/images/prototype1.png)