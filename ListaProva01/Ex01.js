function calcularTempo(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= 1 + taxaCrescimentoA / 100;
        populacaoB *= 1 + taxaCrescimentoB / 100;
        anos++;
    }
    return anos;
}
const populacaoA = 80000;
const taxaCrescimentoA = 3;
const populacaoB = 200000;
const taxaCrescimentoB = 1.5;

const anosNecessarios = calcularTempo(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
