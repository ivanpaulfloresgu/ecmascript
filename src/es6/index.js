// PRUEBA 1

function newFunction (name, age, country) {
  var name = name || 'ivan';
  var age = age || 21;
  var country = country || 'PE'
  console.log(name, age, country);
}

// es6 
function newFunction2(name = 'Ivan', age=21, country='PE'){
  console.log(name, age, country);
}

newFunction2(); // Parámetros por defecto
newFunction2('Paul', 22, 'PE');

// PRUEBA 2

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6 templates   alt + 96 = `` 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// PRUEBA 3 - multilíneas

let lorem = "Holi asfas. Oeqtp. paasfaj uwu faeo \n"
+ "otra frase épica."

// es6
let lorem2 = `otra frase épica que necesitamos
ahora es otra fase épica
`;

console.log(lorem);
console.log(lorem2);

// PRUEBA 4

let person = {
  'name': 'ivan',
  'age': 21,
  'country': 'PE'
}
console.log(person.name, person.age);

// es6 - destructuración de elementos
let { name, age } = person;
console.log(name, age);

// PRUEBA 5 // es6 - operador de propagación

let team1 = ['ivan', 'bendy', 'julio'];
let team2 = ['kiara', 'diana', 'kelly'];

let education = ['Pedro', ...team1, ...team2];

console.log(education);

// También se agregó LET y CONST

// PRUEBA 6 - Propiedad de objetos mejorada

let name = 'ivan';
let age = 21;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age};
console.log(obj2);

// PRUEBA 7 - Arrow Functions

const names = [
  {name: 'ivan', age: 21},
  {name: 'stephany', age: 23}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //código
}

const listOfNames4 = name => {
  //código
}

const square = num => num * num;


// PRUEBAS 8 - Promesas

const helloPromise = () => {
  return new Promise ((resolve, reject) => {
    if(true){
      resolve('Hey!');
    } else {
      reject('Ups!!!');
    }
  });
}

helloPromise()
  .then(response =>console.log(response))
  .catch(error => console.log(error));


// PRUEBAS 9 - Clases
class calculator {
  constructor() {
    // scope
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc. sum(2,2));


// PRUEBAS 10 - Módulos (import, export)
import { hello } from './module'; // importando del módulo

hello();
