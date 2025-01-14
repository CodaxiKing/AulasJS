const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const  inputPeso = e.target.querySelector('#peso');
    const  inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado ('Peso Inválido!', false);
        return;
    }

    if (!altura) {
        setResultado ('Altura Inválido!', false);
        return;
    }


});

function criaP (className) {
const p = document.createElement('p');
return p;
}

function setResultado (msg, isValid) {
 const resultado = document.querySelector('#resultado');
 resultado.innerHTML = '';

 const p = criaP();
 resultado.appendChild(p)
}