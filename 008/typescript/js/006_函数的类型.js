"use strict";
var init_006 = function () {
    function a(x, y) {
        return x + y;
    }
    var b = function (x, y) {
        return x + y;
    };
    var c = function (x, y) {
        return x + y;
    };
    var d;
    d = function (x, y) {
        return x + y;
    };
    // 可选参数 可选参数后面不允许再出现必需参数了
    function f(x, y) {
        return typeof y === 'number' ? x + y : x;
    }
    // TypeScript 会将添加了默认值的参数识别为可选参数
    function g(x, y) {
        if (x === void 0) { x = 123; }
        return y;
    }
    // 剩余参数  rest参数必须是数组类型
    function h(x) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        console.log(items);
    }
};
init_006();
