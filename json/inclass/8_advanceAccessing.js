// destructuring
var obj = {
  name: 'Joe',
  food: 'cake'
};


var { name, food } = obj;

console.log(name, food);
























// desturcting with a different name
var obj = {
  name: 'Joe',
  food: 'cake'
};


var obj2 = {
  name: 'Joe',
  food: 'cake'
};

var { name: myName, food: myFood } = obj;
var { name: myName2, food: myFood2 } = obj2;


console.log(myName, myFood);










// Sending Objects are function arguments
var person = {
  name: 'Eddie',
  age: 24
};

function introduce(person) {
  console.log(`I'm ${person.name} and I'm ${person.age} years old!`); // alternate way to concate strings with varibles
}

introduce(person);



















// destructuring can be (and often is) used directly for extracting parameters passed to a function.

var person = {
  name: 'Eddie',
  age: 24
};

function introduce({ name, age }) {
  console.log(`I'm ${name} and I'm ${age} years old!`);
}

introduce(person);


