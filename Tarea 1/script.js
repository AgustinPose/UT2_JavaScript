/* 1. Manipulación de Cadenas */

function repeatString() {
  let texto = document.getElementById("palabra").value;
  let repeticiones = parseInt(document.getElementById("cantidad").value);
  let p = document.createElement("p");

  let resultado = "";

  for (let i = 0; i < repeticiones; i++) {
    resultado += texto;
  }

  p.textContent = resultado;
  document.body.appendChild(p);
}

function reverseString() {
  let palabra = document.getElementById("palabra2").value;
  let letras = palabra.split("");
  let palabraInvertida = "";

  let p = document.createElement("p");

  for (let i = letras.length - 1; i >= 0; i--) {
    palabraInvertida += letras[i];
  }

  p.textContent = palabraInvertida;
  document.body.appendChild(p);
}

/*-------------------------------------------------------------------------------------------*/

/* 2. Procesamiento de Arreglos */

let myArray = [1, 2, 3, 4, 5];

function mostrarArray() {
  let p = document.createElement("p");
  p.textContent = `Array actual: ${myArray.join(", ")}`;
  document.body.appendChild(p);
}

function eliminarElemento() {
  let item = document.getElementById("item").value;
  let index = myArray.indexOf(Number(item));
  let p = document.createElement("p");

  if (index > -1) {
    myArray.splice(index, 1);
    p.textContent = `Ítem ${item} eliminado. Array actualizado: ${myArray.join(", ")}`;
  } else {
    p.textContent = `Ítem ${item} no encontrado en el array.`;
  }

  document.body.appendChild(p);
}

function getTheTitles() {
  let books = [
    { title: "El poder de una vez más", author: "Jon Acuff" },
    { title: "El club de la 5AM", author: "Robin Sharma" },
    { title: "Cómo tender tu cama", author: "William H. McRaven" },
  ];

  books.forEach(book => {
    let p = document.createElement("p");
    p.textContent = book.title;
    document.body.appendChild(p);
  });
}

/*-------------------------------------------------------------------------------------------*/

/* 3. Filtrado y Transformación */

function getOdds() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  num.forEach(n => {
    if (n % 2 !== 0) {
      let p = document.createElement("p");
      p.textContent = n;
      document.body.appendChild(p);
    }
  });
}

function duplicates() {
  let num = [1, 2, 3, 3, 3, 5, 3, 7, 8, 9];

  let contador = {};
  let duplicados = [];

  for (let i = 0; i < num.length; i++) {
    if (contador[num[i]]) {
      contador[num[i]]++;
    } else {
      contador[num[i]] = 1;
    }
  }

  for (let numero in contador) {
    if (contador[numero] > 1) {
      let p = document.createElement("p");
      p.textContent = `${numero} se repite ${contador[numero]} veces`;
      document.body.appendChild(p);
      duplicados.push(numero);
    }
  }

  let p = document.createElement("p");
  p.textContent = `Cantidad de números duplicados: ${duplicados.length}`;
  document.body.appendChild(p);
}
