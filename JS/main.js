
   
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

  function validarValor(mensageIni, mensajeerror){
    let isValid = false;
    let valor;
    let mensageInicial = mensageIni;
    while(!isValid){
      valor =  parseInt(prompt(mensageInicial));
      if(isNaN(valor)){
        mensageInicial = mensajeerror;
      }else{
        isValid = true;
      }
    }
    return  valor;
  }

while(menu !== 12) {
    switch(menu) {
        case 1:
            let lado = validarValor('Ingrese el lado del cuadrado','El valor del lado para el cuadro es erroneo intenta con otro valor');
            cuadrado(lado)
            break
        case 2:
            let largo = validarValor('Ingrese el lado del rectangulo','El valor del lado para el rectangulo es erroneo intenta con otro valor');
            let ancho = validarValor('Ingrese el ancho del rectangulo','El valor del ancho para el rectangulo es erronio intenta con otro valor');
            rectangulo(largo, ancho)
            break
        case 3: 
            let base = validarValor('Ingrese la base del triangulo','El valor de la base del triangulo es erroneo intenta con otro valor');
            let altura = validarValor('Ingrese la altura del triangulo','El valor de la altura del triangulo es erronea intenta con otro valor');
            triangulo(base, altura)
            break
        case 4:
          let radio = validarValor('Ingrese el radio del circulo','El valor del radio del circulo es erroneo intenta con otro valor');
            
            circulo(radio)
            break
        case 5:
          let base1 = validarValor('Ingrese la primera base del trapecio','El valor de la primera base es erroneo intenta con otro valor');
          let base2 = validarValor('Ingrese la segunda base del trapecio','El valor de la segunda base es erroneo intenta con otro valor');
          let alturaT = validarValor('Ingrese la altura del trapecio','El valor de la altura es erroneo intenta con otro valor');
          trapecio(base1, base2, alturaT)
          break
        case 6:
          let D1 = validarValor('Ingrese la diagonal mayor','El valor de la diagonal mayor es erroneo intenta con otro valor');
          let D2 = validarValor('Ingrese la diagonal menor','El valor de la diagonal menor es erroneo intenta con otro valor');
          rombo(D1, D2)
          break
        case 7:
            let size = validarValor('Ingrese el tamaño del arreglo','El valor del tamaño es erroneo intenta con otro valor');
            promedio(size)
            break
        case 8:
            let ladoCubo = validarValor('Ingrese el lado del cubo','El valor del lado del cubo es erroneo intenta con otro valor');
            cubo(ladoCubo)
            break
        case 9:
            let long = validarValor('Ingrese la longitud del cubo','El valor de la longitud del cubo es erroneo intenta con otro valor');
            let anchoP = validarValor('Ingrese el ancho del cubo','El valor del ancho del cubo es erroneo intenta con otro valor');
            let alturaP = validarValor('Ingrese la altura del cubo','El valor de la altura del cubo es erroneo intenta con otro valor');
            paralelepipedo (long, anchoP, alturaP)
            break
        case 10:
          let basePiramide = validarValor('Ingrese el area base de la piramide','El valor del area base es erroneo intenta con otro valor');
          let alturaPiramide = validarValor('Ingrese la altura de la piramide','El valor de la altura de la piramide es erroneo intenta con otro valor');
          piramide(basePiramide, alturaPiramide)
          break
        case 11:
          let radioCil = validarValor('Ingrese el radio del cilindro','El valor del radio es erroneo intenta con otro valor');
          let alturaCil = validarValor('Ingrese la altura del cilindro','El valor de la altura es erroneo intenta con otro valor');
          cilindro(radioCil, alturaCil)
          break
        default:
            alert("opcion incorrecta")
            break
    }

    menu = parseInt(prompt("Elija una opcion: \n 1-Cuadrado \n 2-Rectangulo \n 3-Triangulo \n 4-Circulo \n 5-Trapecio \n 6-Rombo \n 7-Promedio \n 8-Cubo \n 9-Paralelepipedo \n 10-Piramide \n 11-Cilindro \n 12-Salir"))
}

alert("Finalizando programa, enter para cerrar")