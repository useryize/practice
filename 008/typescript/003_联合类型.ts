const init_003 = (): void => {
    let a: number | string = 13;

    let b = (parmas: number | string): void => {
        // console.log(parmas.length); // 非共有属性
        console.log(parmas.toString()); // 共有属性
    }
    b(132);

    let c: number | string | Array<number> = [13];
}
init_003();