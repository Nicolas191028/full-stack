// Criar um programa, para verificar o ano de nascimento
const anoAtual = 2025;
const idade = Number(prompt("Digite sua idade"));

document.write("<strong>" + "Você nasceu no ano de: " + "</strong>","<strong>" , anoAtual - idade, "<br>" + "</strong>")
document.write("<small>" + "Logo você tem: " + idade + "</small>")

// Diego, 35 anos
document.write("<strong>" + "<br><br>" + "Diego nasceu em: " + "</strong>","<strong>" ,  anoAtual - 35, "<br>" + "</strong>")
document.write("<small>" + "Logo Diego tem: " + 35 + "</small>")
// Juliana, 10 anos
document.write("<strong>" + "<br><br>" + "Juliana nasceu em: " + "</strong>","<strong>" ,  anoAtual - 10, "<br>" + "</strong>")
document.write("<small>" + "Logo Juliana tem: " + 10 + "</small>")
// João, 17 anos
document.write("<strong>" + "<br><br>" + "João nasceu em: " + "</strong>","<strong>" ,  anoAtual - 17, "<br>" + "</strong>")
document.write("<small>" + "Logo João tem: " + 17 + "</small>")