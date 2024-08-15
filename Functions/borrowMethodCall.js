// Write a function using call() to borrow a method from another object.

const person= {
    name:'Jone',
    greet: function(){
        return `Hello ${this.name}`;
    }
};

const anotherPerson = {
    name:'Doe'
};
// Using call() to borrow the greet method from person object.

console.log(person.greet.call(anotherPerson)); 