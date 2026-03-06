//Exemplo exercicio 9: Calcular a area do losango

alert("Área do Losango");

let diagonalMaior = parseFloat(prompt("Digite o valor da diagonal maior do losango: "));
let diagonalMenor = parseFloat(prompt("Digite o valor da diagonal menor do losango: "));

let area = (diagonalMaior * diagonalMenor) / 2;

alert("A área do losango é: " + area);