//operador de reposo
const obj = {
  name: 'ivan',
  age: 21,
  country: 'PE'
};
let { country, ...all } = obj;
console.log(all);

// propagación
const obj = {
  name: "ivan",
  age: 21
}

const obj1 = {
  ...obj,
  country: 'PE'
}

console.log(obj1);


//Promise.finally podemos saber cuando ha terminado el llamado para realizar una lógica.

const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        true
          ? setTimeout(() => resolve("helloWorld"), 3000)
          : reject(new Error("Test Error"));
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizo'))


// Mejoras en el manejo de RegExp
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);