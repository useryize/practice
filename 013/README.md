#### 给定数中 找出有多少对数的和为100

> 题目描述
> 给定N个整数，找出有多少对数的和为100。对数统计根据下标来，比如说有3个数的数组，2 98 2，下标1和2（1，2）即2 + 98 ＝ 100 符合要求，下标（2，3）即 98 ＋ 2 ＝ 100 也符合要求，（1，3）即2 ＋ 2 != 100 不符合要求，总共有2对，答案为2。显然，（1，2）和（2，1）只算一次。

> 解答要求
> 时间限制：1000ms, 内存限制：100MB
> 输入
> 第一行一个整数N(1 <= N <= 100000)，表示有N个整数。
> 第二行N个整数，整数在-100..100范围内。

> 输出
> 找出这N个整数中和为100的整数的对数。

> 样例
> 输入样例 1 复制

> 5
> 1 99 98 2 2
> 输出样例 1

> 3
> 提示样例 1

```js

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
}

let arr = [];
Array.from({ length: 10 }).map(item => {
    arr = [...arr, randomNum(-100, 100)]
})

// 多层遍历
const add = () => {
    let results = [];
    arr.map((item, index) => {
        arr.map((itemSub, indexSub) => {
            let add = item + itemSub;
            if (add === 100 && index > indexSub) {
                results = [...results, [item, itemSub]]
            }
        })
    })
    console.log(results);
}

// 哈希值 存差值
const add2 = () => {
    let obj = {}; // 存差值
    arr.map((item, index) => {
        // 去重[剔除已存在的差值对]
        if (obj[item] === undefined) {
            obj[100 - +item] = item
        }
    })

    let addArr = [];
    arr.map((item, index) => {
        if (obj[item] !== undefined) {
            addArr = [...addArr, [item, obj[item]]]
        }
    })
    console.log(addArr);
}

// 解决初始值重复不统计的问题
const add3 = () => {
    const obj = {} // 记录每一个数出现的个数
    let res = 0 // 结果
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let temp = String(100 - num)
        if (obj[temp]) {
            res = res + obj[temp]
        }
        obj[num] = obj[num] === undefined ? 1 : obj[num] + 1;
    }
    console.log(res);
}
add2() 
```
