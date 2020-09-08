// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const twoSun = function(nums, target) {
    let arr = [];
    nums.map((item, index) => {
        nums.map((itemSub, indexSub) => {
            if (item + itemSub === target && indexSub > index) {
                // indexSub > index 减少重复 去除已经比对项
                arr.push(nums.indexOf(item), nums.indexOf(itemSub));
            }
        })
    });
    console.log(arr);
};

twoSun([2, 7, 11, 15], 18);



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums, target) {
  const _arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        _arr.push(i, j);
      }
    }
  }
//   return _arr;
console.log(_arr);
};


// twoSum2([2, 7, 11, 15], 18);

