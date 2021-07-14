const  init_010 = (): void => {
    class A {
        name: number = 0;
        color: number = 0;
        say() {
            // console.error(this.name);
        }
    }
    let a = new A();
    a.name = 1;
    a.color = 2;
    a.say();

    //  class B<T = {}> {
    //     name: T
    //     say() {
    //         console.error(this.name);
    //     }
    // }
    // let b = new B();
    // b.name = true;
    // b.say();
    
    // function b<T>(a: T): T {
    //     console.error(a);

    //     return a;
    // }
    // b(false)
}
init_010();

