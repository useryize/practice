// ### [js] [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值]
// a) 生成一个空数组arr。
// b) 生成一个（2－32）之间的随机整数rand。
// c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
// d) 最终输出一个长度为5，且内容不重复的数组arr。


// Math.random()生成[0,1)的数，所以
// Math.random()*5生成{0,5)的数。
// 通常期望得到整数，所以要对得到的结果处理一下。
// parseInt()，Math.floor()，Math.ceil()和Math.round()都可得到整数。
// parseInt()和Math.floor()结果都是向下取整。
// 所以Math.random()*5生成的都是[0,4] 的随机整数。

// 生成[min,max]的随机数，公式如下：
// // max - 期望的最大值
// // min - 期望的最小值
// parseInt(Math.random()*(max-min+1)+min,10);
// Math.floor(Math.random()*(max-min+1)+min);


let arr = [];
function addArr(num) {
    let rand = Math.floor(Math.random() * 31 + 2);
    if (arr.length >= 5) {
        console.log(arr);
        return;
    }
    if (!arr.includes(rand)) {
        arr.push(rand);
    }
    addArr()
}
addArr();

// 检测随机数是否正确
function isRand() {
    setInterval(() => {
        let m = Math.floor(Math.random() * 31 + 2);
        if (i > 10000) {
            return;
        }
        if (a > 32 || a < 2) {
            console.log('===================');
            return;
        }
        i++;
        console.log(i, m);
    });
}

