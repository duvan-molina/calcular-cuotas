const calcularCuota = (valorInicial, numeroDeCouta, tasaDeInteres = 0.02) => {
  const value1 = tasaDeInteres * valorInicial;
  const value2 = 1 - (1 + tasaDeInteres) ** -numeroDeCouta;
  return value1 / value2;
};

// valores iniciales
const result = calcularCuota(30000000, 60, 0.01);

console.log(result.toFixed(2));
