const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numerosPares = 0;
let numerosImpares = 0;

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

function pedirNumero() {
    rl.question(`Digite um número inteiro: `, (numero) => {
        const numeroInteiro = parseInt(numero);
        verificarParOuImpar(numeroInteiro);

        if (numerosPares + numerosImpares < 10) {
            pedirNumero();
        } else {
            console.log(`Quantidade de números pares: ${numerosPares}`);
            console.log(`Quantidade de números ímpares: ${numerosImpares}`);
            rl.close();
        }
    });
}

pedirNumero();
