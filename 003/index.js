// function Person() {};
// var person = new Person();
// person.name = 'person_name';
// Person.prototype.name = 'Person_name';

// console.log(person.name); // person_name
// console.log(Person.prototype.name); // Person_name
// console.log(person.__proto__ === Person.prototype); // true
// console.log(Person === Person.prototype.constructor); // true
// console.log(person.__proto__ === Person.prototype); // true

function Person() {
    name = 'Person_name';
    console.log(name);
    return this;
};
var person = new Person();
console.log(person.name);

