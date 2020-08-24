// FOR
let arr = [1,2,3,4];
arr.forEach((item) => {
});


var a = [1,2];
// a.forEach(function(current, i, arr){
//     console.log(current);
//     console.log(i);
//     console.log(arr);
// })


Array.prototype.fakeForEach = function(fn, thisArg){
    let arr = this;
    let len = arr.length;
    for(let i=0; i<len; i++){
        if(i in arr){//判断当前的index是否已初始化
            fn.call(thisArg, arr[i], i, arr);
        }
    }
}

arr.fakeForEach(function(current, i, arr){
    console.log(current);
    console.log(i);
    console.log(arr);
});