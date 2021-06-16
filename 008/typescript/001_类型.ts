// typescript中的数据类型 上

//布尔类型
let bool: Boolean = true;

// 数字类型  number
let num: Number = 789456;

// 字符串类型 String
let str: string = 'asd';

// 数组类型 Arr
let arr: number[] = [123];
let arrNUm: Array<number> = [123];
let arrStr: Array<string> = ['123'];

// 元祖类型 tuple
let tup: [number, string] = [123, '456'];

// 枚举类型 enum
enum color { a, b = 3, c };
let a: color = color.a; // 取下标
let b: color = color.b; // 取本值
let c: color = color.c; // 前下标加1
// console.log(a, b, c);

// 任意类型 any
let d: any = 123;
d = '123';
d = true;
d = [132];
// console.log(d);



// null 和 undefined

let e: null = null;
let f: undefined = undefined;

// void类型

function VoidInit(): void {
    console.log('void');
}
// VoidInit()

// never类型
function error(message: string): never {
    throw new Error(message);
}