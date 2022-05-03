// Iteración 1 - buscar el máximo
function numMax(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

let num1 = 4, num2 = 3;
let max = numMax(num1, num2);
console.log("El máximo de " + num1 + " y " + num2 + " es", max);

// Iteración 2 - buscar la palabra más larga
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(list) {
    let elem = "";

    for (let i = 0; i < list.length; i++) {
        if (list[i].length > elem.length)
            elem = list[i];        
    }

    return elem;
}

let wordLongest = findLongestWord(avengers);

console.log("El elemento más largo del array es: " + wordLongest);

// Iteración 3 - calcular la suma de los elementos de un array
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let sum = sumAll(numbers);
console.log("La suma de los elementos del array es:", sum);

// Iteración 4 - calcular el promedio
const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    let med = 0;

    for (let i = 0; i < array.length; i++) {
        med += array[i];        
    }

    med /= array.length;

    return med;
}

let med = average(numbers2);

console.log("La media de los elementos del array es:", med);

// Iteración 5 - calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
// y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let sum = 0;

    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === "string") 
            sum += param[i].length;

        else 
            sum += param[i];
    }

    sum /= param.length;

    return sum;
}

let media = averageWord(mixedElements);

console.log("Media de los elementos del array con strings y números:", media);

// Iteración 6 - eliminar los elementos duplicados de un array
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potato',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(param) {
    let withoutDuplicates = [];
  
    for (let i = 0; i < param.length; i++) {
        if (!withoutDuplicates.includes(param[i]))
            withoutDuplicates.push(param[i]);
    }

    return withoutDuplicates;
}

console.log("Array sin duplicados: ", removeDuplicates(duplicates));

// Iteración 7 - Crea una función que reciba por parámetro un array y el valor que desea comprobar 
// que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true 
// y la posición de dicho elemento y por la contra un false.
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(array, elem) {

    if (array.includes(elem))
        console.log("El elemento " + elem + " está en el array en la posición " + array.indexOf(elem));

    else
        console.log("El elemento no está en el array");   
}

finderName(nameFinder, "Clint");

// Iteración 8 - contar el número de repeticiones de cada elemento de un array
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(param) {
    let cont = [];
    let is = false;

    for (let i = 0; i < param.length; i++) {
        is = false;
        for (let j = 0; j < cont.length; j++) {
            if (cont[j].elem === param[i]) {
                cont[j].num++;
                is = true;
            }
        }

        if (!is) {
            cont.push({elem: param[i], num: 1});
        }
    }

    return cont;
}

console.log("Array repeticiones: ", repeatCounter(counterWords));