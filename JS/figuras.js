// // Definir el tamaño del array
// let size = 5; // Puedes cambiar el tamaño según sea necesario

// // Crear un array vacío
// let arr = new Array(size);

// // Insertar elementos en el array usando un ciclo
// for (let i = 0; i < size; i++) {
//   arr[i] = prompt("Introduce un valor para la posición " + i); // Pedir un valor para cada posición
// }

// // Mostrar el contenido del array usando otro ciclo
// for (let i = 0; i < size; i++) {
//   console.log("Elemento en la posición " + i + ": " + arr[i]);
// }

function cubo () {
  let lado = parseInt(prompt("Ingrese el lado del cubo"))
  let resultado = lado * lado * lado
  alert("El volumen del cubo es" + resultado)
}

function paralelepipedo () {
    let long = parseInt(prompt("Ingrese la longitud"))
    let ancho = parseInt(prompt("Ingrese el ancho"))
    let altura = parseInt(prompt("Ingrese la altura"))
    let resultado = long * ancho * altura
    alert("El volumen del paralelepipedo es" + resultado)
  }
  
  function prisma () {
    let base = parseInt(prompt("Ingrese el area de la base del prisma"))
    let altura = parseInt(prompt("Ingrese la altura del prisma"))
    let resultado = (altura * base)
    alert("El area del triangulo es" + resultado)
  }

  function cilindro () {
    let radio = parseInt(prompt("Ingrese el radio del cilindro"))
    let altura = parseInt(prompt("Ingrese la altura del cilindro"))
    let resultado = 3.1416 * (radio*radio) * altura
    alert("El volumen del cilindro es " + resultado)
  }

  function piramide () {
    let base = parseInt(prompt("Ingrese el area base de la piramide"))
    let altura = parseInt(prompt("Ingrese la altura de la piramide"))
    let resultado = (base * altura)*(1/3)
    alert("El volumen de la piramide es " + resultado)
  }

  function esfera () {
    let radio = parseInt(prompt("Ingrese el radio de la esfera"))
    let resultado = (4/3)* 3.1416 * (radio*radio*radio)
    alert("El volumen de la esfera es " + resultado)
  }
let menu = parseInt(prompt("Elija una opcion: \n 1-Cubo \n 2-Paralelepipedo \n 3-Prisma \n 4-Cilindro \n 5-Piramide \n 6-Esfera \n 7-Salir"))

while(menu !== 7) {
    switch(menu) {
        case 1:
            cubo()
            break
        case 2:
            paralelepipedo()
            break
        case 3: 
            prisma()
            break
        case 4:
            cilindro()
            break
        case 5:
            piramide()
            break
        case 6:
            esfera()
            break
        default:
            alert("opcion incorrecta")
            break
    }
    menu = parseInt(prompt("Elija una opcion: \n 1-Cubo \n 2-Paralelepipedo \n 3-Prisma \n 4-Cilindro \n 5-Piramide \n 6-Esfera \n 7-Salir"))
    
}

alert("Finalizando programa, enter para cerrar")