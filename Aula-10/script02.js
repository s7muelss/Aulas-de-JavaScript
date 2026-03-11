//Criando meu primeiro objeto
const carro = {marca: "Fiat", modelo: "Strada", ano: 2024, cor: "Red"}

console.log(carro.cor);

//Exemplo 2 de criacao de objeto
const carro2 = {
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 2020,
    cor: "Darkblue"
}

console.log(carro2);

//Exemplo 3 de criacao de objeto
const carro3 = {};

carro3.marca = "BMW";
carro3.modelo = "X1";
carro3.ano = "2025";
carro3.cor = "Preto";

console.log(carro3);

//Exemplo 4 de criacao de objeto
const carro4 = new Object({
    marca: "Honda",
    modelo: "Civic",
    ano: 2008,
    cor: "Prata",
    acelerar: function (){
        return this.modelo + "acelerou";
    },
});

console.log(carro4.acelerar());
