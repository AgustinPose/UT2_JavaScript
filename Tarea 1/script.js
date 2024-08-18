/* 1. Manipulación de Cadenas*/

function repeatString() {
  let texto = document.getElementById("palabra").value;
  let repeticiones = parseInt(document.getElementById("cantidad").value);

  let resultado = "";

  for (let i = 0; i < repeticiones; i++) {
    resultado += texto + "<br>";
  }

  document.getElementById("resultado").innerHTML = resultado;
}

function reverseString() {
  let palabra = document.getElementById("palabra").value;
  let letras = palabra.split("");
  let palabraInvertida = "";
  let resultado = document.getElementById("resultadoReverse");

  for (let i = letras.length - 1; i >= 0; i--) {
    palabraInvertida += letras[i];
  }
  resultado.innerHTML = palabraInvertida;
}

/*-------------------------------------------------------------------------------------------*/

/* 2. Procesamiento de Arreglos */

let myArray = [1, 2, 3, 4, 5];

function mostrarArray() {
  let resultado = document.getElementById("resultado");
  resultado.textContent = `Array actual: ${myArray.join(", ")}`;
}

function eliminarElemento() {
  let item = document.getElementById("item").value;
  let index = myArray.indexOf(Number(item));

  let resultado = document.getElementById("resultadoEliminar");

  if (index > -1) {
    myArray.splice(index, 1);
    resultado.textContent = `Ítem ${item} eliminado. Array actualizado: ${myArray.join(
      ", "
    )}`;
  } else {
    resultado.textContent = `Ítem ${item} no encontrado en el array.`;
  }
}

function getTheTitles() {
  // Datos de ejemplo
  let books = [
    { title: "El poder de una vez más", author: "Jon Acuff" },
    { title: "El club de la 5AM", author: "Robin Sharma" },
    { title: "Cómo tender tu cama", author: "William H. McRaven" },
  ];

  let titles = [];

  for (let i = 0; i < books.length; i++) {
    titles.push(books[i].title);
  }

  document.getElementById("resultadoTitles").innerHTML = titles.join("<br>");
}

/*-------------------------------------------------------------------------------------------*/

/* 3. Filtrado y Transformación*/

function getOdds() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let odds = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      odds.push(num[i]);
    }
  }

  document.getElementById("resultadoImpares").innerHTML = odds.join("<br>");
}

function duplicates() {
    let num = [1, 2, 3, 3, 3, 5, 3, 7, 8, 9];
  
    let contador = {};
    let duplicados = [];
  
    // Contar las ocurrencias de cada número
    for (let i = 0; i < num.length; i++) {
      if (contador[num[i]]) {
        contador[num[i]]++;
      } else {
        contador[num[i]] = 1;
      }
    }
  
    // Encontrar los números que se repiten y asegurarse de que solo se agreguen una vez
    for (let numero in contador) {
      if (contador[numero] > 1) {
        duplicados.push(numero + " se repite " + contador[numero] + " veces");
      }
    }
  
    // Mostrar duplicados
    document.getElementById("resultadoDuplicados").innerHTML = duplicados.join("<br>");
  
    // Mostrar la cantidad de números duplicados en el elemento con id 'contador'
    document.getElementById("contador").innerHTML =
      "Cantidad de números duplicados: " + duplicados.length;
  }
  
