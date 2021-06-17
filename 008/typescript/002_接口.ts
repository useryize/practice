
// 定义一个普通的方法 接受一个对象 且有一个name类型为string的的属性;
function init(params: { name: string }) {
    console.log(params.name);
}
// init({ name: '123' }); // ok
// init({name: 132}); // error name类型为string


// 已接口形式 重写init方法
interface params2 {
    name: string
}

function init2(params: params2): void {
    console.log(params.name);
}
// init2({name: '132'}) // ok

// ### 可选属性
interface params3 {
    title?: string,
    name?: string,
    num?: Number,
}

function init3(params: params3): void {
    params.name = '1'; // ok
    console.log(params.name);
}
// init3({ name: '1313' });

// ### 只读属性
interface params4 {
    readonly color?: string,
    readonly name: string,
}

let init4 = (params: params4) => {
    // params.name = '1'; // error
    console.log(params.name);
}
init4({name: '123'})
