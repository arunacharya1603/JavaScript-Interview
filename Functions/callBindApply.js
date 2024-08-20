const person = {
    name: 'Jone',
    greet: function (greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const anotherPerson = {
    name: 'Doe'
};

person.greet.call(anotherPerson, 'John');
person.greet.apply(anotherPerson,["Hello"]);

const boundGreet = person.greet.bind(anotherPerson);
boundGreet('John');
// Output: John, my name is Doe