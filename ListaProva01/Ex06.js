function calcularMontante(capital, taxa, tempo) {
    const juros = taxa / 100;
    return capital * Math.pow(1 + juros, tempo);
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o capital inicial: ', valor => {
    const capital = parseFloat(valor);
  
    readline.question('Digite a taxa de juros mensal (em %): ', valor => {
      const taxa = parseFloat(valor);
  
      readline.question('Digite o tempo do investimento (em meses): ', valor => {
        const tempo = parseInt(valor);
  
        if (isNaN(capital) || capital <= 0 ||
            isNaN(taxa) || taxa < 0 ||
            isNaN(tempo) || tempo <= 0) {
          console.log('Erro: valores inválidos.');
          return;
        }
  
        const montante = calcularMontante(capital, taxa, tempo);
        console.log(`O montante do investimento é: R$ ${montante.toFixed(2)}`);
        readline.close();
      });
    });
  });
  