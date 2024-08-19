function generatePassword() {
    let longitud = parseInt(document.getElementById("largo").value);
  
    if (isNaN(longitud) || longitud < 8) {
      alert("La longitud de la contraseña debe ser al menos 8 caracteres.");
      return;
    }
  
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let todosCaracteres = minusculas + mayusculas + numeros + simbolos;
  
    let contrasenia = '';
  
    contrasenia += minusculas[Math.floor(Math.random() * minusculas.length)];
    contrasenia += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    contrasenia += numeros[Math.floor(Math.random() * numeros.length)];
    contrasenia += simbolos[Math.floor(Math.random() * simbolos.length)];
  
    for (let i = contrasenia.length; i < longitud; i++) {
      contrasenia += todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
    }
  
    contrasenia = contrasenia.split('').sort(() => Math.random() - 0.5).join('');
  
    let p = document.createElement("p");
    p.textContent = contrasenia;
    document.body.appendChild(p);
  }
  
  function findTheOldest() {
    let people = [
      { nombre: 'Ana', edad: 30 },
      { nombre: 'Luis', edad: 45 },
      { nombre: 'Carlos', edad: 60 },
      { nombre: 'Maria', edad: 35 }
    ];
  
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
      if (people[i].edad > oldest.edad) {
        oldest = people[i];
      }
    }
  
    let p = document.createElement("p");
    p.textContent = oldest.nombre;
    document.body.appendChild(p);
  }
  