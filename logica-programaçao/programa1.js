/*
Vamos criar um programa, que o usuário executa uma função
e dentro dessa função existe uma frase.
Pode pular linhas 
*/ 

function executarFrases(frase) {
    document.write(frase);
}

function pularLinha() {
    document.write("<br>");
}

executarFrases("JavaScript com lógica");
pularLinha();
pularLinha();
executarFrases("Olá Rodrigo Popecho");