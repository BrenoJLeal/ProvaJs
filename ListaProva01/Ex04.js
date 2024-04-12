
function calcularSalarioAtual(salarioInicial) {
    let salario = salarioInicial;
    let percentualAumento = 1.5; 


    for (let ano = 1996; ano <= 2024; ano++) {
        salario += (salario * percentualAumento) / 100; 
        percentualAumento *= 2; 
    }

    return salario;
}
const salarioInicial1995 = 1000;

const salarioAtual1995 = calcularSalarioAtual(salarioInicial1995);
console.log(`A) O salário atual do funcionário contratado em 1995 é R$ ${salarioAtual1995.toFixed(2)}`);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('B) Digite o salário inicial do funcionário: ', (salarioInicialUsuario) => {
    const salarioInicial = parseFloat(salarioInicialUsuario);

    if (!isNaN(salarioInicial) && salarioInicial > 0) {
        const salarioAtual = calcularSalarioAtual(salarioInicial);
        console.log(`C) O salário atual do funcionário é R$ ${salarioAtual.toFixed(2)}`);
    } else {
        console.log('Por favor, insira um valor válido para o salário inicial.');
    }

    readline.close();
});

