// 题目描述
// 给你一个整数n，将它拆分成他所有最小因子（大于1）的连乘形式，同时遵守最小因子优先的原则，小的因子在前面，如n=6，则输出2*3=6

// 解答要求
// 时间限制：1000ms, 内存限制：64MB
// 输入
// 整数

// 输出
// 因子

// 样例
// 输入样例 1 复制

// 6
// 输出样例 1

// 2*3=6
// 提示样例 1

const init = () => {
    let input = 6; // 输入的值
    let arr = []; // 存储最小因子

    function getFactor(number) {
        for (let x = 2; x < number; x++) {
            // 找出最小因子
            if (number % x === 0) {
                arr = [...arr, x, number / x]
                // 当因子还可以再分时，剔除当前因子
                if (arr.indexOf(number) > -1) {
                    arr.splice(arr.indexOf(number), 1)
                }
                // 递归找剩余因子
                getFactor(number / x)
                break
            }
        }
    }
    getFactor(input);
    let inputText = arr.length && `${arr.join('*')}=${input}` || `${input}=${input}`
    console.error(inputText)
}

// 思路优化 除以本身就不用判断是否剔除当前因子

const init2 = () => {
    let input = 7; // 输入的值
    let arr = []; // 存储最小因子

    function getFactor(number) {
        for (let x = 2; x <= number; x++) {
            // 找出最小因子
            if (number % x === 0) {
                arr = [...arr, x]
                // 递归找剩余因子
                getFactor(number / x)
                break
            }
        }
    }
    getFactor(input);
    console.error(`${arr.join('*')}=${input}`)
}
init2()
