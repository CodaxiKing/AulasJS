let varA = 'A';
let varB = 'B';
let varC = 'C';

//[varA, varB, varC] = [varB, varC, varA];

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);