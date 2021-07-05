"use strict";
// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。
var init_type = function () {
    // ### 布尔值
    var a = false;
    // 数值
    var b = 132;
    // 字符串
    var c = '123';
    // null
    var d = null;
    // undefined
    var e = undefined;
    var f = [1, 213];
    var G;
    (function (G) {
        G[G["a"] = 0] = "a";
        G[G["b"] = 1] = "b";
    })(G || (G = {}));
    ;
    var h = G.a;
    // console.log(h);
    // 空值
    function I() {
        console.error(465);
    }
    I();
};
init_type();
