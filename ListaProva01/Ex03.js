const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

function calcularEstatisticas() {
    const menorValor = Math.min(...numeros);
    const maiorValor = Math.max(...numeros);
    const somaValores = numeros.reduce((acc, curr) => acc + curr, 0);

    console.log(`Menor valor: ${menorValor}`);
    console.log(`Maior valor: ${maiorValor}`);
    console.log(`Soma dos valores: ${somaValores}`);
}

function pedirNumero() {
    rl.question(`Digite um número ou 'fim' para terminar: `, (input) => {
        if (input.toLowerCase() === 'fim') {
            if (numeros.length === 0) {
                console.log("Nenhum número foi inserido.");
            } else {
                calcularEstatisticas();
            }
            rl.close();
        } else {
            const numero = parseFloat(input);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                console.log("Por favor, insira um número válido.");
            }
            pedirNumero();
        }
    });
}
console.log("Digite 'fim' quando terminar de inserir os números.");
pedirNumero();
