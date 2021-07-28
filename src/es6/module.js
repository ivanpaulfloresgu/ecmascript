// PRUEBAS 1 - Módulos (import, export)

const hello = () => {
  return 'hello'
}

export default hello; // exportando el módulo

// PRUEBA 2 - Generadores

function* helloWorld(){
  if(true){
    yield 'Hello, ';
  }
  if (true){
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);