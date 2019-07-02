var foo = function () {
    console.log('foo1')
}
// foo() // foo2

var foo = function () {
    console.log('foo2')
}
// foo()

function foo() {
    console.log('foo1');
}
foo() // foo2
function foo() {
    console.log('foo2')
}
foo() // foo2