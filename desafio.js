/*1.Função que retorna o nome do funcionário que tem o maior salário da empresa.
2.Função que retorna o nome do funcionário que tem o menor salário da empresa.
3.Função que retorna a média salarial da empresa.
4.Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do setor informado.
5.Função  que  recebe  um  setor  como  parâmetro  e  retorna  o  funcionário  de  menor salário do setor informado.
6.Função  que  recebe  um  setor  como  parâmetro  e  retorna  a  média  salarial  do setor informado.*/

var fs = require("fs");
var funcionario = "funcionarios.json";

fs.readFile(funcionario, "utf-8", function(err, data){
    if(err){
        console.log(err);
    }else{
        var obj = JSON.parse(data);
            console.log(obj);

            function maiorSalarioDaEmpresa(){
                var maiorSalario = obj.funcionarios[0].salario;
                var nomeFuncionario = obj.funcionarios[0].nome;
            
                for(var i = 0; i < obj.funcionarios.length; i++){
                    if(obj.funcionarios[i].salario > maiorSalario){
                    maiorSalario = obj.funcionarios[i].salario;
                    nomeFuncionario = obj.funcionarios[i].nome;
                }
             }
            console.log("Funcionário com o maior salário da empresa: " + nomeFuncionario);
        }
        maiorSalarioDaEmpresa();

    function menorSalarioDaEmpresa(){
            var menorSalario = obj.funcionarios[0].salario;
            var nomeFuncionario = obj.funcionarios[0].nome;
        
            for(var i = 0; i < obj.funcionarios.length; i++){
                if(obj.funcionarios[i].salario < menorSalario){
                menorSalario = obj.funcionarios[i].salario;
                nomeFuncionario = obj.funcionarios[i].nome;
            }
         }
        console.log("Funcionário com o menor salário da empresa: " + nomeFuncionario);
    }
    menorSalarioDaEmpresa();

    function mediaSalarial(){
        var soma = 0;
        var media = 0;
    
        for(var i = 0; i < obj.funcionarios.length; i++){
            soma += obj.funcionarios[i].salario;
        }
    console.log("Média salarial da empresa: " + mediaSalarial);
    }
    mediaSalarial();

    function mediaSalarialSetor(){
        var soma = 0;
        var media = 0;
        var empregados = 0;
        var setorEmpresa = "Comercial";
    
        for(var i = 0; i < obj.funcionarios.length; i++){
            if(obj.funcionarios[i].setor === setorEmpresa){
                soma += obj.funcionarios[i].salario;
                empregados++;
            }
    }
    media = soma/empregados;
    console.log("Media salarial do setor " + setorEmpresa + " é: " + media);
    //console.log(empregados);
    }
    mediaSalarialSetor();
    }
});

