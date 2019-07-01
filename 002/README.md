### 20190701
---

### 1
### 实现一个数组去重的方法


#### 利用ES6 Set去重（ES6中最常用)

```
/**
 * @param {利用ES6 Set去重（ES6中最常用)}
 * Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
 * 关于Array.from()用法的说明(https://www.jianshu.com/p/f4554f74de95)
 */
let arr = [0,1,2,3,4,5,6,0,1,2,3,4,5,6];

function setArr (arr) {
    return [...new Set(arr)];
    // return Array.from(new Set(arr));
}
// console.log(setArr(arr));
```

#### 利用for嵌套for，然后splice去重（ES5中最常用)
```
/**
 * 
 * @param {利用for嵌套for，然后splice去重（ES5中最常用)}
 * 
 */
function forArr (arr) {
    for (let i = 0; i< arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
// console.log(forArr(arr), arr);
```

#### 利用indexOf去重

```
/**
 * @param {利用indexOf去重}
 * Array.isArray 用于确定传递的值是否是一个 Array。如果对象是 Array 则返回true，否则为false。
 * indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 */

 function indexOfArr (arr) {
     if (!Array.isArray(arr)) {
         console.log('type error!')
         return;
     }
     let newArr = [];
     for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
     }
     return newArr;
 }
//  console.log(indexOfArr(arr));
```
#### 利用sort()

```
/**
 * 
 * @param {利用sort()}  先排序 在去重
 * 
 */
function sortArr (arr) {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return
    }
    let newArr = [], arrSort = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arrSort[i] !== arrSort[i-1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(sortArr(arr));
```
#### 利用对象的属性不能相同的特点进行去重

```
/**
 * 
 * @param {利用对象的属性不能相同的特点进行去重}
 */
function objArr (arr) {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return
    }
    let newArr=[], obj = {};
    for (let i = 0; i< arr.length; i++) {
        if (!obj[arr[i]]) {
            newArr.push(arr[i]);
            obj[arr[i]] = 1; // NUmber:0比较特殊 !0: true 所以将obj取值为定值 而不是 i;
        }
    }
    return newArr;
}
// console.log(objArr(arr));

```

### 利用includes

```
/**
 * 
 * @param {利用includes}
 */
function includesArr (arr) {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return
    }
    let newArr=[];
    for (let i = 0; i< arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(includesArr(arr));

```