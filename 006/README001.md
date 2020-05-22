#### 你应该知道的13个数组技巧  【略骚】

> 数组是javascript最常见的概念之一，他为我们提供了处理数据的许多可能性。您可以在编程开始之初就了解它，我想向您展示一些可能不知道并且可能非常有用的技巧。有助于编程。



######  1. 数组去重

> 这是一个非常流行的关于javascript数组的采访问题，数组去重。这里有一个快速简单的解决方案，可以使用一个新的Set().我向您展示两种可能的方法,一种是使用。form()，您一种是使用spred操作符（...）。

```js
var list = [1,2,3,4,5,6,7,7,7];
var newList = Array.from(new Set(list));
console.log(newList);
// return [1, 2, 3, 4, 5, 6, 7];

var newList2 = [...new Set(list)];
console.log(newList2);
// return [1, 2, 3, 4, 5, 6, 7];

```
