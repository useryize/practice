const init_007 = (): void => {
    interface A {
        name: number,
    }
    interface B {
        color: string
    }
    function a(a: A | B): number | string {
        return (a as A).name
    }
};
init_007()