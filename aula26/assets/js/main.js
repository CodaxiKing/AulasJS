const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function setResultado (msg) {
 const resultado = document.querySelector('#resultado');
 resultado.innerHTML = '';
 const p = document.createElement('p');
 p.classList.add ('paragrafo-resultado');
 p.innerHTML = 'Qualquer coisa';
 resultado.appendChild(p);
}