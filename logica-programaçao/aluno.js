/*
    🧮 Exercício: Verificar se o aluno foi aprovado

    Enunciado:
    Crie um programa que peça a nota de um aluno (de 0 a 10) e mostre:

    "Aprovado" se a nota for maior ou igual a 6

    "Reprovado" se a nota for menor que 6
*/

let nota = Number(prompt("Digite sua nota"));

if (nota >= 6) {
    document.write("Aprovado")
} else {
    document.write("Reprovado")
}