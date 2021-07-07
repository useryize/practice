const init_006 = (): void => {
    function a(x: number, y: number): number {
        return x + y;
    }
    let b = (x: number, y: number): number => {
        return x + y;
    }
    let c: (x: number, y: number) => number = (x: number, y: number): number => {
        return x + y;
    }

    interface D {
        (x: number, y: number): number,
    }

    let d: D;
    d = (x: number, y: number): number => {
        return x + y;
    }

    // 可选参数 可选参数后面不允许再出现必需参数了
    function f(x: number, y?: number): number {
        return typeof y === 'number' ? x + y : x;
    }

    // TypeScript 会将添加了默认值的参数识别为可选参数
    function g(x: number = 123, y: number): number {
        return y;
    }

    // 剩余参数  rest参数必须是数组类型
    function h(x: number, ...items: number[]): void {
        console.log(items);

    }


    
};
init_006();