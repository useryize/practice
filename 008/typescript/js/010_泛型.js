"use strict";
var init_010 = function () {
    var A = /** @class */ (function () {
        function A() {
            this.name = 0;
            this.color = 0;
        }
        A.prototype.say = function () {
            // console.error(this.name);
        };
        return A;
    }());
    var a = new A();
    a.name = 1;
    a.color = 2;
    a.say();
    // class B<T = {}> {
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
};
init_010();
