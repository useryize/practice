"use strict";
var init_003 = function () {
    var a = 13;
    var b = function (parmas) {
        // console.log(parmas.length); // 非共有属性
        console.log(parmas.toString()); // 共有属性
    };
    b(132);
    var c = [13];
};
init_003();
