//Definicao padrao de funcao
function soma (a,b){
    return (a + b);
}

let a = soma (30, 70);
console.log(a);

//Funcao armazenada em variavel
const multiplicar = function(a, b){
    return (a * b)
}

let b = multiplicar(3, 4);
console.log(b); 

//Arrow Function (Funcao Seta)
let subtracao = (a,b) => (a - b);

let c = subtracao(5, 2);
console.log(c); 