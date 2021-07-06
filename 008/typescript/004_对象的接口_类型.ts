// 对象的类型——接口
const init_004 = (): void => {
    interface A {
        name: string,
        color: string,
    }
    let a: A = {
        name: '13',
        color: '#000'
    }

    // 可选属性
    interface B {
        name: string,
        color?: string,
    }
    let b: B = {
        name: '132'
    }


    // 任意属性
    interface C {
        [propsName: string]: string,
    }
    let c: C = {
        name: '132',
    }

    interface D {
        name: number,
        [propsName: string]: number,
    }
    let d: D = {
        name: 123,
        color: 123
    }

    // 只读属性
     interface F {
         readonly name: string,
     }
     let f: F = {
         name: '132'
     }
    //  f.name = '465' // 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
     console.error(f);
     
}
init_004();