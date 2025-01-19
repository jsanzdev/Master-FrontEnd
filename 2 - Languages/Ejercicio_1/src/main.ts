import "./style.css";

// Array Operations
function head<T>([first]: T[]): T | undefined {
  return first;
}

function tail<T>([, ...rest]: T[]): T[] {
  return rest;
}

function init<T>(array: T[]): T[] {
  return array.slice(0, -1);
}

function last<T>(array: T[]): T {
  return array[array.length - 1];
}

const numeros = [1, 2, 3, 4];
const primerNumero = head(numeros);
const restoNumeros = tail(numeros);
const numerosInit = init(numeros);
const ultimoNumero = last(numeros);

console.log(numeros);
console.log(primerNumero);
console.log(restoNumeros);
console.log(numerosInit);
console.log(ultimoNumero);

// Concat

function concat<T>(array1: T[], array2: T[]): T[] {
  return [...array1, ...array2];
}

const numeros2 = [5, 6, 7, 8];
const numerosConcatenados = concat(numeros, numeros2);

console.log(numerosConcatenados);
