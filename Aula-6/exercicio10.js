//Exemplo exercicio 10: Calcular a area do circulo

alert("Área do Círculo");

let raio = parseFloat(prompt("Digite o valor do raio do círculo: "));

let area = Math.PI * Math.pow(raio, 2);

alert("A área do círculo é: " + area.toFixed(2));