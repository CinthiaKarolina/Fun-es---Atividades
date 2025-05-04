
/*
function mostrarAlerta () {
    let nome = "Márcio"
    alert("Seja bem-vindo(a), " +nome)
}
mostrarAlerta ()
*/



/*
function somar (valorA, valorB) {
    alert(valorA + valorB)
}
somar(20, 12)
*/



/*
function mensagemBoasVindas (nome, cargo) {
    return `Seja bem vindo(a) ${cargo} ${nome}`
}

let nome = prompt("Digite o nome do funcionário: ")
let cargo = prompt("Digite o cargo do funcionário: ")

alert(mensagemBoasVindas(nome, cargo))
console.log(mensagemBoasVindas(nome, cargo))

*/


/*
function multiplicacao (numero1, numero2) {
    return numero1 * numero2
}
    
    let multiplicacao1 = multiplicacao (6, 7)
    let multiplicacao2 = multiplicacao (9, 10)
    let multiplicacao3 = multiplicacao (12, 25)
    
    console.log(multiplicacao1)
    console.log(multiplicacao2)
    console.log(multiplicacao3)
*/



function parOuImpar (numero) {
    if (numero % 2 === 0) {
        return "PAR"
    } else {
    return "ÍMPAR"
    }
}
console.log(parOuImpar (0))