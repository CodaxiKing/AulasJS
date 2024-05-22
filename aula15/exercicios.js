const numero = Number(prompt('Digite um número:')); //Colocando "Number" indica que sempre será um Number
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const texto6 = document.getElementById('texto6');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math. sqrt(numero)}.</p>`;
texto2.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto3.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto4.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto5.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto6.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;




