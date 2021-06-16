"use strict";
// typescript中的数据类型 上
//布尔类型
var bool = true;
// 数字类型  number
var num = 789456;
// 字符串类型 String
var str = 'asd';
// 数组类型 Arr
var arr = [123];
var arrNUm = [123];
var arrStr = ['123'];
// 元祖类型 tuple
var tup = [123, '456'];
// 枚举类型 enum
var color;
(function (color) {
    color[color["a"] = 0] = "a";
    color[color["b"] = 3] = "b";
    color[color["c"] = 4] = "c";
})(color || (color = {}));
;
var a = color.a; // 取下标
var b = color.b; // 取本值
var c = color.c; // 前下标加1
// console.log(a, b, c);
// 任意类型 any
var d = 123;
d = '123';
d = true;
d = [132];
// console.log(d);
// null 和 undefined
var e = null;
var f = undefined;
// void类型
function VoidInit() {
    console.log('void');
}
// VoidInit()
// never类型
function error(message) {
    throw new Error(message);
}
