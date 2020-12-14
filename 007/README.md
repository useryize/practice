
#### 1
#### 两数之和

```js

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

```

```js

const twoSun = function(nums, target) {
    let arr = [];
    nums.map((item, index) => {
        nums.map((itemSub, indexSub) => {
            if (item + itemSub === target && indexSub > index) {
                //  indexSub > index 减少重复 去除已经比对项
                arr.push(nums.indexOf(item), nums.indexOf(itemSub));
            }
        })
    });
    console.log(arr);
    return arr;
};

twoSun([2, 7, 11, 15], 18); // [ 1, 2 ]


// 优化 哈希表

const twoSum3 = function (nums, target) {
    if (!nums || !(nums instanceof Array)) return;

    let obj = {};

    // 列出nums中每项相加等于target的值
    for (let i = 0; i < nums.length; i++) {
        // 去重
        if (obj[nums[i]] === undefined) {
            obj[target - nums[i]] = nums[i];
        }
    }

    // 找出相加等于target的两数
    for (let j = 0; j < nums.length; j++) {
        if (obj[nums[j]] !== undefined) {
            console.log([nums.indexOf(obj[nums[j]]), nums.indexOf(nums[j])]);
            // return [nums.indexOf(obj[nums[j]]), nums.indexOf(nums[j])]
        }
    }
};

twoSum3([2, 7, 11, 15], 18)  



```


#### 2
#### 三数之和为0

```js
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
```

```js

const threeAdd = function (nums, type) {
    let _arr = [];
    if (!nums || !(nums instanceof Array)) return;

    // 梯次遍历
    type === 1 && nums.map((item1, index1) => {
        nums.map((item2, index2) => {
            nums.map((item3, index3) => {
                if (item1 + item2 + item3 === 0 && index1 < index2 && index2 < index3) {
                    //  && index1 < index2 && index2 < index3 去除重复项
                    _arr.push([item1, item2, item3]);
                }
            });
        });
    });

    // 优化 减少遍历
    if (type === 2) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        _arr.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
    }
    console.log(_arr);
    return _arr; //  [ [ -1, 0, 1 ], [ -1, 2, -1 ], [ 0, 1, -1 ] ]
}
threeAdd([-1, 0, 1, 2, -1, -4], 2);
```
