/*
    Enunciado:
    Crie um programa que peça a idade de uma pessoa e mostre 
    uma mensagem dizendo se ela pode votar ou ainda não pode votar.
*/ 

let idade = Number(prompt("Digite sua idade"));

if (idade < 16) {
    document.write("Não pode votar");
} else if ( idade >= 16 && idade < 18){
    document.write("Voto opcional");
} else {
    document.write("Voto obrigatório")
}

/* 
    ✅ Desafio extra:

    Adicione mais uma condição:

    Se a idade for menor que 16, mostre "Não pode votar".

    Se for entre 16 e 17, mostre "Voto opcional".

    Se for 18 ou mais, mostre "Voto obrigatório".
*/