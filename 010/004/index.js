// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
//  

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

const add = (list) => {
    let res = [];
    let obj = {}; // 用来标记当前的值是否在本次有排列
    const fun = (arr = []) => {
        if (arr.length === list.length) { // 排列的长度与给的长度相等时 表示已经找到了其中一个排列 return出来 进入下一次递归
            res = [...res, arr]
            return;
        }
        for (let item of list) {
            // if (arr.indexOf(item) > -1) continue; // 此方法耗性能
            if (obj[item]) continue; // 本次已经拿来递归的值 不用拿来排
            obj[item] = true; // 标记本次递归查找已经用了这个值
            fun([...arr, item]); // 本次递归结束后把比较的值还原 进入第二个数的递归查找
            obj[item] = false; // 本次递归完成后把这个值还原 进入下次递归
        }

    }

    fun();
    console.error(res);
}
add([1, 2, 3])
