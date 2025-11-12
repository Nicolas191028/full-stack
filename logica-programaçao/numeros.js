/*
Enunciado:
Crie um programa que peça um número e mostre uma mensagem 
dizendo se ele é positivo, negativo ou igual a zero.
*/

num = Number(prompt("Digite um número"));

if (num > 0) {
    document.write("Este número é positivo")
} else if (num < 0) {
    document.write("Este número é negativo")
} else {
    document.write("Este número é zero")
}