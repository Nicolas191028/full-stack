const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    if (inputNome.value === "" || inputEmail.value === "" ||inputTelefone.value === "" ) {
        alert("Digite todos os campos");
        return false;
    }

    console.log("Nome" , inputNome.value);
    console.log("Email" , inputEmail.value);
    console.log("Telefone" , inputTelefone.value);
});