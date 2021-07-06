"use strict";
// 对象的类型——接口
var init_004 = function () {
    var a = {
        name: '13',
        color: '#000'
    };
    var b = {
        name: '132'
    };
    var c = {
        name: '132',
    };
    var d = {
        name: 123,
        color: 123
    };
    var f = {
        name: '132'
    };
    //  f.name = '465' // 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    console.error(f);
};
init_004();
