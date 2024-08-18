function sumAll() {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let resultadoElement = document.getElementById("resultadoSumAll");
  resultadoElement.innerHTML = parseInt(numero1) + parseInt(numero2);
}

function convertirFahrenheit() {
  let celsius = parseFloat(document.getElementById("celsiu").value);
  let fahrenheit = parseFloat(((celsius * 9) / 5 + 32).toFixed(1));
  document.getElementById("resultadoCelsius").innerHTML =
    celsius + "°C es igual a " + fahrenheit + "°F";
}

function convertirCelsius() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let celsius = parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(1));
  document.getElementById("resultadoFahrenheit").innerHTML =
    fahrenheit + "°F es igual a " + celsius + "°C";
}

function esBisiesto() {
  let anio = parseInt(document.getElementById("anio").value);
  let resultado;

  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    resultado = anio + " es un año bisiesto.";
  } else {
    resultado = anio + " no es un año bisiesto.";
  }

  document.getElementById("resultadoBisiesto").innerHTML = resultado;
}

let numeros = [];

function sumarNumero() {
  let numero = parseInt(document.getElementById("numero3").value);

  numeros.push(numero);

  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }

  console.log("La suma de los elementos es:", sum);

  document.getElementById("numero3").value = "";
}
