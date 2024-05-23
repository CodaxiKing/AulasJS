/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores Copiados

Referência (mutável) - Arrays, Object, function - Valores passadors por referência
*/

// Mutável

let a = [1, 2, 3]; 
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);


// Imutável

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'outra coisa'; // Não é possível alterar o valor de uma string
// console.log(a, b);

