// Calculadora com Switch
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let opcoes = prompt("Selecione a operação: \n \n" +
    "+: Adição \n" +
    "-: Subtração \n" +
    "*: Multiplicação \n" +
    "/: Divisão");

switch (opcoes) {
    case "+":
        alert("O resultado da operação é: " + (numero1 + numero2));
        break;
    case "-":
        alert("O resultado da operação é: " + (numero1 - numero2));
        break;
    case "*":
        alert("O resultado da operação é: " + (numero1 * numero2));
        break;
    case "/":
        if (numero2 !== 0) {
            alert("O resultado da operação é: " + (numero1 / numero2));
        } else {
            alert("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        alert("Opção inválida. Por favor, selecione uma operação válida.");
}
