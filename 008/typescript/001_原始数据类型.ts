// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。


const init_type = (): void => {
    // ### 布尔值
    let a: boolean = false;

    // 数值
    let b: number = 132;


    // 字符串
    let c: string = '123';

    // null
    let d: null = null;

    // undefined
    let e: undefined = undefined;

    let f: Array<number> = [1, 213];

    enum G { a, b };
    let h = G.a;
    // console.log(h);

    // 空值

    function I(): void {
        console.error(465);
    }
    I();

}
init_type();