// 数组的类型
const init_005 = (): void => {
    let a: number[] = [132465, 456465];
    let b: string[] = ['132', '465']
    let c: Array<any> = [13, '46', true, {}];

    // 用接口表示数组
    interface D {
        [index: number]: any
    }
    let d: D = ['1', 1, true, '', {}, undefined];

}
init_005();