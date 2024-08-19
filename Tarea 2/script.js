function sumAll() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);
  let p = document.createElement("p");
  p.textContent = numero1 + numero2;
  document.body.appendChild(p);
}

function convertirFahrenheit() {
  let celsius = parseFloat(document.getElementById("celsiu").value);
  let fahrenheit = parseFloat(((celsius * 9) / 5 + 32).toFixed(1));
  let p = document.createElement("p");
  p.textContent = `${celsius}°C es igual a ${fahrenheit}°F`;
  document.body.appendChild(p);
}

function convertirCelsius() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let celsius = parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(1));
  let p = document.createElement("p");
  p.textContent = `${fahrenheit}°F es igual a ${celsius}°C`;
  document.body.appendChild(p);
}

function esBisiesto() {
  let anio = parseInt(document.getElementById("anio").value);
  let p = document.createElement("p");

  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    p.textContent = `${anio} es un año bisiesto.`;
  } else {
    p.textContent = `${anio} no es un año bisiesto.`;
  }

  document.body.appendChild(p);
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
