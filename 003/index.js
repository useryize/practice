function Person() {};
var person = new Person();
person.name = 'person_name';
console.log(person.name); // person_name

function Person() {
    this.name = 'Person_name';
};
var person = new Person();
person.name = 'person_name';
console.log(person.name); // person_name