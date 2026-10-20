///RESUELVE LOS EJERCICIOS AQUÍ

//EJERCICIO-1//
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;

console.log(ana); // { name: "Ana", email: "Ana@gmail.com" }

//EJERCICIO-2//
const [{ email: emailLuis }] = empleados;

console.log(emailLuis); // "Luis@gmail.com"

//EJERCICIO-3//
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 5

//EJERCICIO-4//
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);    // 35
console.log(maximaManana); // 32

//EJERCICIO-5//
function sumEveryOther(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(sumEveryOther(6, 8, 2, 3, 1)); // 20
console.log(sumEveryOther(11, 3, 12));     // 26

//EJERCICIO-6//
function addOnlyNums(...argumentos) {
  return argumentos
    .filter(elemento => typeof elemento === 'number')
    .reduce((total, n) => total + n, 0);
}

console.log(addOnlyNums(1, "perro", 2, 4)); // 7

//EJERCICIO-7//
function countTheArgs(...argumentos) {
  return argumentos.length;
}

console.log(countTheArgs("gato", "perro"));                // 2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); // 4
console.log(countTheArgs());                               // 0

//EJERCICIO-8//
function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log(combineTwoArrays([1, 2, 3], [4, 5]));    // [1, 2, 3, 4, 5]
console.log(combineTwoArrays(['a', 'b'], ['c']));    // ['a', 'b', 'c']
console.log(combineTwoArrays([], [7, 8]));           // [7, 8]

//EJERCICIO-9//
function onlyUniques(...elementos) {
  return [...new Set(elementos)];
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); // ["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));            // [1, 2, 3, 6, 7, 8]

//EJERCICIO-10//
function combineAllArrays(...arrays) {
  return arrays.reduce((resultado, array) => [...resultado, ...array], []);
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
// [3, 6, 7, 8, 2, 7, 3, 1]

console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//EJERCICIO-11//
function sumAndSquare(...numeros) {
  return numeros
    .map(n => n ** 2)
    .reduce((total, n) => total + n, 0);
}

console.log(sumAndSquare(1, 2, 3));  // 14  (1 + 4 + 9)
console.log(sumAndSquare(4, 5));     // 41  (16 + 25)
console.log(sumAndSquare(-3));       // 9
console.log(sumAndSquare());         // 0