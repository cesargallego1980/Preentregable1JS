
function cuadrado () {
  let lado = parseInt(prompt("Ingrese el lado del cuadrado"))
  let resultado = lado * lado
  alert("El area del cuadrado es" + resultado)
}

function rectangulo () {
    let lado = parseInt(prompt("Ingrese el lado del rectangulo"))
    let ancho = parseInt(prompt("Ingrese el ancho del rectangulo"))
    let resultado = lado * ancho
    alert("El area del rectangulo es" + resultado)
  }
  
  function triangulo () {
    let base = parseInt(prompt("Ingrese la base del triangulo"))
    let altura = parseInt(prompt("Ingrese la altura del triangulo"))
    let resultado = (altura * base)/2
    alert("El area del triangulo es" + resultado)
  }

  function circulo () {
    let radio = parseInt(prompt("Ingrese el radio del circulo"))
    let resultado = (radio*radio)*3.1416
    alert("El area del circulo es" + resultado)
  }

  function trapecio () {
    let B1 = parseInt(prompt("Ingrese la primera base del trapecio"))
    let B2 = parseInt(prompt("Ingrese la segunda base del trapecio"))
    let altura = parseInt(prompt("Ingrese la altura del trapecio"))
    let resultado = (1/2)*(B1+B2)*altura
    alert("El area del trapecio es" + resultado)
  }

  function rombo () {
    let D1 = parseInt(prompt("Ingrese la diagonal mayor"))
    let D2 = parseInt(prompt("Ingrese la diagonal menor"))
    let resultado = D1*D2*(1/2)
    alert("El area del rombo es" + resultado)
  }
let menu = parseInt(prompt("Elija una opcion: \n 1-Cuadrado \n 2-Rectangulo \n 3-Triangulo \n 4-Circulo \n 5-Trapecio \n 6-Rombo \n 7-Salir"))

while(menu !== 7) {
    switch(menu) {
        case 1:
            cuadrado()
            break
        case 2:
            rectangulo()
            break
        case 3: 
            triangulo()
            break
        case 4:
            circulo()
            break
        case 5:
            trapecio()
            break
        case 6:
            rombo()
            break
        default:
            alert("opcion incorrecta")
            break
    }

    menu = parseInt(prompt("Elija una opcion: \n 1-Cuadrado \n 2-Rectangulo \n 3-Triangulo \n 4-Circulo \n 5-Trapecio \n 6-Rombo \n 7-Salir"))
}

alert("Finalizando programa, enter para cerrar")