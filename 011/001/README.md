### 1
#### 合并两个有序数组


> 8. 合并两个有序数组
>给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

>请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

>注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

```js
const fun = (nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3) => {
    let p1 = m - 1;
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1]
            p1--
        } else {
            nums1[p] = nums2[p2]
            p2--
        }
        p--;
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }

    return nums1
}

console.log(fun([1, 2, 3, 0, 0, 0], 3, [2, 3, 5, 6, 7, 8, 9], 6))
```


### 2
#### 移除元素

> 移除元素
> 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。

> 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：

> 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
> 返回 k。

```js
const fun = (list, val) => {
    if (!list) return
    let newList = [];
    let newList2 = [];
    let k = 0
    list.forEach(i => {
        if (i !== val) {
            newList = [...newList, i]
            k++
        } else {
            newList2 = [...newList2, '_']
        }

    });

    return { k, newList: [...newList, ...newList2] }
}
console.log(fun([0, 1, 2, 2, 3, 0, 4, 2], 2))
```