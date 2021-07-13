const init_010 = (): void => {
    class A {
        name: number = 0;
        color: number = 0;
        say() {
            console.error(this.name);
        }
    }
    let a = new A();
    a.name = 1;
    a.color = 2;
    a.say();
}
init_010();

