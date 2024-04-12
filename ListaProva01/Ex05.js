function calcularArea(raio) {
    return Math.PI * raio * raio;
}

function calcularP(raio) {
    return 2 * Math.PI * raio;
}

const raio = 5;
const area = calcularArea(raio);
const perimetro = calcularP(raio);

console.log(`Área do círculo com raio ${raio}: ${area.toFixed(2)}`);
console.log(`Perímetro do círculo com raio ${raio}: ${perimetro.toFixed(2)}`);
