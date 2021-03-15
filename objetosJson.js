var pessoa = {
    "nome": "João",
    idade: 40,
    telefone: "(99) 9999-9999",
    temCarro: true,
    animaisDeEstimacao:[
        "Totó",
        "Bob"
    ],
    pai: {
        nome: "José",
        idade: 68
    }
};
//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.pai.nome);
//pessoa.animaisDeEstimacao.push("Billy");
//console.log(pessoa);
//pessoa.nome = pessoa.nome + " Silva";
//console.log(pessoa);

/*function salvarDadosPessoa(pessoa){
    console.log(pessoa);
}
salvarDadosPessoa(pessoa);*/

pessoa.mae = {
    nome: "Maria",
    idade: 68
};

//console.log(JSON.stringify(pessoa));
//JSON.parse()