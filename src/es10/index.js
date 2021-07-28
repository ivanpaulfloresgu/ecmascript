// Método flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

// FlatMap

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// trimStart

let hello = '                hello world';
console.log(hello);
console.log(hello.trimStart());

// trimEnd

let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd());

// Optional Catch Binding

try {

} catch{
  error 
}

// fromEntries

let entries = [["name", "ivan"], ["age", 32]];

console.log(Object.fromEntries(entries));

// objeto de tipo símbolo

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);