
   
function cuadrado (lado) {
  
  let resultado = lado * lado
  alert("El area del cuadrado es" + resultado)
}

function rectangulo (largo, ancho) {
    
    let resultado = largo * ancho
    alert("El area del rectangulo es" + resultado)
  }
  
  function triangulo (base, altura) {
    
    let resultado = (altura * base)/2
    alert("El area del triangulo es" + resultado)
  }

  function circulo (radio) {
    
    let resultado = (radio*radio)*3.1416
    alert("El area del circulo es" + resultado)
  }

  function trapecio (base1, base2, alturaT) {
    let resultado = (1/2)*(base1+base2)*alturaT
    alert("El area del trapecio es" + resultado)
  }

  function rombo (D1, D2) {
    
    let resultado = D1*D2*(1/2)
    alert("El area del rombo es" + resultado)
  }

  function promedio(size){
    let acum =0
    let promedio = 0
    let numMayor = 0
    let numMenor = 9999999999999999999999999999

    // // Crear un array vacío
    let datos = new Array(size);

    // // Insertar elementos en el array usando un ciclo
for (let i = 0; i < size; i++) {
  datos[i] = prompt("Introduce un valor para la posición " + i); // Pedir un valor para cada posición
  acum = parseInt(acum) + parseInt(datos[i])
  if(datos[i] > numMayor)
  {
    numMayor = parseInt(datos[i])
  }
  if(datos[i]<numMenor)
  {
    numMenor=parseInt(datos[i])
  }
 }
 promedio = acum/size
alert("El promedio es " + promedio)
alert("El maximo es "+ numMayor + "El minimo es " + numMenor)

// // Mostrar el contenido del array usando otro ciclo
for (let i = 0; i < size; i++) {
    console.log("Elemento en la posición " + i + ": " + datos[i]);
 }

 
  }
  function cubo (ladoCubo) {
    
    let resultado = ladoCubo * ladoCubo * ladoCubo
    alert("El volumen del cubo es" + resultado)
  }

  function paralelepipedo (long, anchoP, alturaP) {
    
    let resultado = long * anchoP * alturaP
    alert("El volumen del paralelepipedo es" + resultado)
  }

  function piramide (basePiramide, alturaPiramide) {
    
    let resultado = (basePiramide * alturaPiramide)*(1/3)
    alert("El volumen de la piramide es " + resultado)
  }
  
  function cilindro (radioCil, alturaCil) {
    
    let resultado = 3.1416 * (radioCil*radioCil) * alturaCil
    alert("El volumen del cilindro es " + resultado)
  }
let menu = parseInt(prompt("Elija una opcion: \n 1-Cuadrado \n 2-Rectangulo \n 3-Triangulo \n 4-Circulo \n 5-Trapecio \n 6-Rombo \n 7-Promedio \n 8-Cubo \n 9-Paralelepipedo \n 10-Piramide \n 11-Cilindro \n 12-Salir"))

while(menu !== 12) {
    switch(menu) {
        case 1:
            let lado = parseInt(prompt("Ingrese el lado del cuadrado"))
            cuadrado(lado)
            break
        case 2:
            let largo = parseInt(prompt("Ingrese el lado del rectangulo"))
            let ancho = parseInt(prompt("Ingrese el ancho del rectangulo"))
            rectangulo(largo, ancho)
            break
        case 3: 
            
            let base = parseInt(prompt("Ingrese la base del triangulo"))
            let altura = parseInt(prompt("Ingrese la altura del triangulo"))
            triangulo(base, altura)
            break
        case 4:
            let radio = parseInt(prompt("Ingrese el radio del circulo"))
            circulo(radio)
            break
        case 5:
            let base1 = parseInt(prompt("Ingrese la primera base del trapecio"))
            let base2 = parseInt(prompt("Ingrese la segunda base del trapecio"))
            let alturaT = parseInt(prompt("Ingrese la altura del trapecio"))
            trapecio(base1, base2, alturaT)
            break
        case 6:
          let D1 = parseInt(prompt("Ingrese la diagonal mayor"))
          let D2 = parseInt(prompt("Ingrese la diagonal menor"))
            rombo(D1, D2)
            break
        case 7:
            let size = parseInt(prompt("Ingrese el tamaño del arreglo"))
            promedio(size)
            break
        case 8:
            let ladoCubo = parseInt(prompt("Ingrese el lado del cubo"))
            cubo(ladoCubo)
            break
        case 9:
            let long = parseInt(prompt("Ingrese la longitud"))
            let anchoP = parseInt(prompt("Ingrese el ancho"))
            let alturaP = parseInt(prompt("Ingrese la altura"))
            paralelepipedo (long, anchoP, alturaP)
            break
        case 10:
          let basePiramide = parseInt(prompt("Ingrese el area base de la piramide"))
          let alturaPiramide = parseInt(prompt("Ingrese la altura de la piramide"))
          piramide(basePiramide, alturaPiramide)
          break
        case 11:
          let radioCil = parseInt(prompt("Ingrese el radio del cilindro"))
          let alturaCil = parseInt(prompt("Ingrese la altura del cilindro"))
          cilindro(radioCil, alturaCil)
          break
        default:
            alert("opcion incorrecta")
            break
    }

    menu = parseInt(prompt("Elija una opcion: \n 1-Cuadrado \n 2-Rectangulo \n 3-Triangulo \n 4-Circulo \n 5-Trapecio \n 6-Rombo \n 7-Promedio \n 8-Cubo \n 9-Paralelepipedo \n 10-Piramide \n 11-Cilindro \n 12-Salir"))
}

alert("Finalizando programa, enter para cerrar")