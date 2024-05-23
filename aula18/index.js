const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala()

// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa ('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa ('João', 'Moreira', 55);
// const pessoa4 = criaPessoa ('Junior', 'Lara', 45);
// const pessoa5 = criaPessoa ('Jean', 'Miranda', 69);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);