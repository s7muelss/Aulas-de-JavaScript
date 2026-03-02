// Exemplo de condicao ternaria
let texto = "Você é menor de idade";
let idade = 18;
texto = (idade >= 19) ? "Você é maior de idade" : "Você é menor de idade";

document.getElementById("idade").innerHTML = texto;