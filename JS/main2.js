



// Figura Cuadrado

function calcularAreaCuadrado() {

  class Cuadrado {

    static id = 0
    constructor(lado, area = null) {
      this.id = ++Cuadrado.id
      this.lado = lado
      if (area)
        this.area = area
    }
    cargarCuadrados = (lado) => {
      let resultado = lado * lado;
      return resultado
    }



  }
  if (document.getElementById("lado").value == "") {
    document.getElementById("resultado").innerText = "Ingrese un valor"
  }
  else {
    const cuadradosSave = JSON.parse(localStorage.getItem("listaCuadrados")) || [];
    let ladoCuadrado = document.getElementById("lado").value;
    const _cuadrado = new Cuadrado(ladoCuadrado);
    area = _cuadrado.cargarCuadrados(ladoCuadrado);
    cuadradosSave.push(new Cuadrado(ladoCuadrado, area));

    localStorage.setItem("listaCuadrados", JSON.stringify(cuadradosSave));
    localStorage.setItem("ladoCuadrado", ladoCuadrado);
    localStorage.setItem("AreaCuadrado", area);
    document.getElementById("resultado").innerText = `El área del cuadrado es: ${area}`;
    let tablaAreas = "<table width='100%' border='1'>";
    tablaAreas += `<tr><td>Lado</td><td>Area del cuadrado</td></tr>`


    cuadradosSave.forEach(f => {
      tablaAreas += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.area}</td></tr>`

      //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
      // console.log("item->", f.lado, f.area)
    });
    tablaAreas += "</table>";
    document.getElementById("tablaAreas").innerHTML = tablaAreas;
    const total = cuadradosSave.reduce((contador, cuadrado) => contador + cuadrado.area, 0)
    let promedio = total / cuadradosSave.length
    document.getElementById("promCuadrado").innerText = `Area Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}

function BuscarAreaCuadrado(type) {
  if (type == 1) {
    let areaMax = document.getElementById("buscarAreaCuad");
    if (areaMax.value == "") {
      document.getElementById("AreaCuadMaxima").innerText = "Ingrese un valor a buscar"
    }
    else {
      if (areaMax && !areaMax.value) {
        return;
      }
      const cuadradosSave = JSON.parse(localStorage.getItem("listaCuadrados")) || []
      const filtrados = cuadradosSave.filter((cuadrado) => cuadrado.area && cuadrado.area <= areaMax.value)
      if (filtrados.length == 0) {
        document.getElementById("AreaCuadMaxima").innerText = "No hay registros"
      }
      else {
        let filtradosMostrar = "";
        filtrados.forEach(f => {
          filtradosMostrar += `Area Maxima: ${f.area} <br/>`;
          //document.getElementById("AreaCuadMaxima").innerText=`Area Maxima: ${filtrados}`
          //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

          // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          // console.log("item->", f.lado, f.area)
        })
        document.getElementById("AreaCuadMaxima").innerHTML = filtradosMostrar
      }
    }



  }

  if (type == 2) {
    let areaMax = document.getElementById("buscarAreaRect");
    if (areaMax.value == "") {
      document.getElementById("AreaRectMaxima").innerText = "Ingrese un valor a buscar"
    }
    else {
      if (areaMax && !areaMax.value) {
        return;
      }
      const rectangulosSave = JSON.parse(localStorage.getItem("listaRectangulos")) || []
      const filtrados = rectangulosSave.filter((rectangulo) => rectangulo.area && rectangulo.area <= areaMax.value)
      if (filtrados.length == 0) {
        document.getElementById("AreaRectMaxima").innerText = "No hay registros"
      }
      else {
        let filtradosMostrar = "";
        filtrados.forEach(f => {
          filtradosMostrar += `Area Maxima: ${f.area} <br/>`;
          //document.getElementById("AreaCuadMaxima").innerText=`Area Maxima: ${filtrados}`
          //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

          // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          // console.log("item->", f.lado, f.area)
        })
        document.getElementById("AreaRectMaxima").innerHTML = filtradosMostrar
      }
    }


  }

  if (type == 3) {
    let areaMax = document.getElementById("buscarAreaTri");
    if (areaMax.value == "") {
      document.getElementById("AreaTriMaxima").innerText = "Ingrese un valor a buscar"
    }
    else {
      if (areaMax && !areaMax.value) {
        return;
      }
      const triangulosSave = JSON.parse(localStorage.getItem("listaTriangulos")) || []
      const filtrados = triangulosSave.filter((triangulo) => triangulo.area && triangulo.area <= areaMax.value)
      if (filtrados.length == 0) {
        document.getElementById("AreaTriMaxima").innerText = "No hay registros"
      }
      else {
        let filtradosMostrar = "";
        filtrados.forEach(f => {
          filtradosMostrar += `Area Maxima: ${f.area} <br/>`;
          //document.getElementById("AreaCuadMaxima").innerText=`Area Maxima: ${filtrados}`
          //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

          // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          // console.log("item->", f.lado, f.area)
        })
        document.getElementById("AreaTriMaxima").innerHTML = filtradosMostrar
      }
    }


  }

  if (type == 4) {
    let areaMax = document.getElementById("buscarAreaCirc");
    if (areaMax.value == "") {
      document.getElementById("AreaCircMaxima").innerText = "Ingrese un valor a buscar"
    }
    else {
      if (areaMax && !areaMax.value) {
        return;
      }
      const circulosSave = JSON.parse(localStorage.getItem("listaCirculos")) || []
      const filtrados = circulosSave.filter((circulo) => circulo.area && circulo.area <= areaMax.value)
      if (filtrados.length == 0) {
        document.getElementById("AreaCircMaxima").innerText = "No hay registros"
      }
      else {
        let filtradosMostrar = "";
        filtrados.forEach(f => {
          filtradosMostrar += `Area Maxima: ${f.area} <br/>`;
          //document.getElementById("AreaCuadMaxima").innerText=`Area Maxima: ${filtrados}`
          //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

          // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          // console.log("item->", f.lado, f.area)
        })
        document.getElementById("AreaCircMaxima").innerHTML = filtradosMostrar
      }
    }


  }

  if (type == 5) {
    let areaMax = document.getElementById("buscarAreaTrap");
    if (areaMax.value == "") {
      document.getElementById("AreaTrapMaxima").innerText = "Ingrese un valor a buscar"
    }
    else {
      if (areaMax && !areaMax.value) {
        return;
      }
      const trapeciosSave = JSON.parse(localStorage.getItem("listaTrapecios")) || []
      const filtrados = trapeciosSave.filter((trapecio) => trapecio.area && trapecio.area <= areaMax.value)
      if (filtrados.length == 0) {
        document.getElementById("AreaTrapMaxima").innerText = "No hay registros"
      }
      else {
        let filtradosMostrar = "";
        filtrados.forEach(f => {
          filtradosMostrar += `Area Maxima: ${f.area} <br/>`;

        })
        document.getElementById("AreaTrapMaxima").innerHTML = filtradosMostrar
      }
    }


  }



}
// Figura Rectangulo
function calcularAreaRectangulo() {
  class Rectangulo {

    static id = 0
    constructor(lado1, lado2, area = null) {
      this.id = ++Rectangulo.id
      this.lado1 = lado1
      this.lado2 = lado2
      if (area)
        this.area = area
    }


    cargarRectangulos = (lado1, lado2) => {
      let resultado = lado1 * lado2;
      return resultado
    }



  }
  if ((document.getElementById("ladoRectangulo").value == "") || (document.getElementById("anchoRectangulo").value == "")) {
    document.getElementById("resultadoRect").innerText = "Ingrese un valor"
  }
  else {
    const rectangulosSave = JSON.parse(localStorage.getItem("listaRectangulos")) || [];
    let ladoRect = document.getElementById("ladoRectangulo").value;
    let anchoRect = document.getElementById("anchoRectangulo").value;
    const _rectangulo = new Rectangulo(ladoRect, anchoRect);
    area = _rectangulo.cargarRectangulos(ladoRect, anchoRect);
    rectangulosSave.push(new Rectangulo(ladoRect, anchoRect, area));

    localStorage.setItem("listaRectangulos", JSON.stringify(rectangulosSave));
    localStorage.setItem("ladoRectangulo", ladoRect)
    localStorage.setItem("anchoRectangulo", anchoRect)
    localStorage.setItem("areaRectangulo", area)
    document.getElementById("resultadoRect").innerText = `El área del rectangulo es: ${area}`;

    let tablaAreasRectangulo = "<table width='100%' border='1'>";
    tablaAreasRectangulo += `<tr><td>Largo</td><td>Ancho</td><td>Area del rectangulo</td></tr>`
    rectangulosSave.forEach(f => {
      tablaAreasRectangulo += `<tr><td>${f.lado1}</td><td>${f.lado2}</td><td>${f.area}</td></tr>`;


    })
    tablaAreasRectangulo += "</table>";
    document.getElementById("tablaAreasRectangulo").innerHTML = tablaAreasRectangulo;
    const total = rectangulosSave.reduce((contador, rectangulo) => contador + rectangulo.area, 0)
    let promedio = total / rectangulosSave.length
    document.getElementById("promRectangulo").innerText = `Promedio Rectangulo: ${promedio}`

  }


}

function calcularAreaTriangulo() {
  class Triangulo {

    static id = 0
    constructor(base, altura, area = null) {
      this.id = ++Triangulo.id
      this.base = base
      this.altura = altura
      if (area)
        this.area = area
    }

    cargarTriangulos = (base, altura) => {
      let resultado = (base * altura) / 2;
      return resultado
    }



  }
  if ((document.getElementById("baseTri").value == "") || (document.getElementById("alturaTri").value == "")) {
    document.getElementById("resultadoTri").innerText = "Ingrese un valor"
  }
  else {
    const triangulosSave = JSON.parse(localStorage.getItem("listaTriangulos")) || [];
    let baseTri = document.getElementById("baseTri").value;
    let alturaTri = document.getElementById("alturaTri").value;
    const _triangulo = new Triangulo(baseTri, alturaTri);
    area = _triangulo.cargarTriangulos(baseTri, alturaTri);
    triangulosSave.push(new Triangulo(baseTri, alturaTri, area));
    localStorage.setItem("listaTriangulos", JSON.stringify(triangulosSave));
    localStorage.setItem("baseTriangulo", baseTri);
    localStorage.setItem("alturaTriangulo", alturaTri);
    localStorage.setItem("AreaTriangulo", area);
    document.getElementById("resultadoTri").innerText = `El área del triangulo es: ${area}`;
    let tablaAreasTri = "<table width='100%' border='1'>";
    tablaAreasTri += `<tr><td>Base</td><td>Altura</td></td><td>Area</td></tr>`


    triangulosSave.forEach(f => {
      tablaAreasTri += `<tr><td><strong>${f.base}</strong></td><td><strong>${f.altura}</td><td><strong>${f.area}</td></tr>`

      //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
      // console.log("item->", f.lado, f.area)
    });
    tablaAreasTri += "</table>";
    document.getElementById("tablaAreasTri").innerHTML = tablaAreasTri;
    // cuadradosSave.forEach(f=>{
    //   document.getElementById("tablaAreasTri").innerText = `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;


    //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
    //   // console.log("item->", f.lado, f.area)
    // })
    const total = triangulosSave.reduce((contador, triangulo) => contador + triangulo.area, 0)
    let promedio = total / triangulosSave.length
    document.getElementById("promTriangulo").innerText = `Promedio Triangulo: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}

function calcularAreaCirculo() {
  class Circulo {

    static id = 0
    constructor(radio, area = null) {
      this.id = ++Circulo.id
      this.radio = radio
      if (area)
        this.area = area
    }


    cargarCirculos = (radio) => {
      let resultado = (radio * radio) * 3.1416;
      return resultado
    }



  }
  if ((document.getElementById("radioCirculo").value == "")) {
    document.getElementById("resultadoCirc").innerText = "Ingrese un valor"
  }
  else {
    const circulosSave = JSON.parse(localStorage.getItem("listaCirculos")) || [];
    //const circulosSave = [];
    let radioCirculo = document.getElementById("radioCirculo").value;
    const _circulo = new Circulo(radioCirculo);
    area = _circulo.cargarCirculos(radioCirculo);
    circulosSave.push(new Circulo(radioCirculo, area));
    localStorage.setItem("listaCirculos", JSON.stringify(circulosSave));
    localStorage.setItem("radioCirculo", radioCirculo);
    localStorage.setItem("AreaCirculo", area);
    document.getElementById("resultadoCirc").innerText = `El área del circulo es: ${area}`;
    let tablaAreasCirc = "<table width='100%' border='1'>";
    tablaAreasCirc += `<tr><td>Radio</td><td>Area del cicrculo</td></tr>`


    circulosSave.forEach(f => {
      tablaAreasCirc += `<tr><td><strong>${f.radio}</strong></td><td><strong>${f.area}</td></tr>`

    });
    tablaAreasCirc += "</table>";
    document.getElementById("tablaAreasCirc").innerHTML = tablaAreasCirc;


    const total = circulosSave.reduce((contador, circulo) => contador + circulo.area, 0)
    let promedio = total / circulosSave.length
    document.getElementById("promCirculo").innerText = `Promedio Circulo: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}

//const trapeciosSave = [];
function calcularAreaTrapecio() {
  class Trapecio {

    static id = 0
    constructor(base1, base2, alturaT, area = null) {
      this.id = ++Trapecio.id
      this.base1 = base1
      this.base2 = base2
      this.alturaT = alturaT
      if (area)
        this.area = area
    }


    cargarTrapecios = (base1, base2, alturaT) => {
      let resultado = (1 / 2) * (parseInt(base1) + parseInt(base2)) * alturaT;
      return resultado
    }


  }
  if ((document.getElementById("base1").value == "") || (document.getElementById("base2").value == "") || (document.getElementById("alturaT").value == "")) {
    document.getElementById("resultadoTrapecio").innerText = "Ingrese un valor"
  }
  else {
    const trapeciosSave = JSON.parse(localStorage.getItem("listaTrapecios")) || [];
    let base1 = document.getElementById("base1").value;
    let base2 = document.getElementById("base2").value;
    let alturaT = document.getElementById("alturaT").value;
    const _trapecio = new Trapecio(base1, base2, alturaT);
    area = _trapecio.cargarTrapecios(base1, base2, alturaT);
    trapeciosSave.push(new Trapecio(base1, base2, alturaT, area));
    localStorage.setItem("listaTrapecios", JSON.stringify(trapeciosSave));
    localStorage.setItem("base1Trapecio", base1);
    localStorage.setItem("base2Trapecio", base2);
    localStorage.setItem("alturaTrapecio", alturaT);
    localStorage.setItem("AreaTrapecio", area);
    document.getElementById("resultadoTrapecio").innerText = `El área del trapecio es: ${area}`;
    let tablaAreasTrapecio = "<table width='100%' border='1'>";
    tablaAreasTrapecio += "<tr><td>base 1</td><td>Base 2</td><td>Altura</td><td>Area</td></tr>";
    trapeciosSave.forEach(f => {
      tablaAreasTrapecio += `<tr><td>${f.base1}</td><td>${f.base2}</td><td>${f.alturaT}</td><td>${f.area}</td></tr>`;


    })
    tablaAreasTrapecio += "</table>";
    document.getElementById("tablaAreasTrapecio").innerHTML = tablaAreasTrapecio;
    const total = trapeciosSave.reduce((contador, trapecio) => contador + trapecio.area, 0)
    let promedio = total / trapeciosSave.length
    document.getElementById("promTrapecio").innerText = `Promedio Trapecio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}
//Figura Cubo
function calcularVolumenCubo() {
  class Cubo {

    static id = 0
    constructor(lado, volumen = null) {
      this.id = ++Cubo.id
      this.lado = lado
      if (volumen)
        this.volumen = volumen
    }


    cargarCubos = (lado) => {
      let resultado = lado * lado * lado;
      return resultado
    }



  }
  if ((document.getElementById("ladoCubo").value == "")) {
    document.getElementById("resultadoCubo").innerText = "Ingrese un valor"
  }
  else {
    const cubosSave = JSON.parse(localStorage.getItem("listaCubos")) || [];
    // const cubosSave = [];
    let ladoCubo = document.getElementById("ladoCubo").value;
    const _cubo = new Cubo(ladoCubo);
    volumen = _cubo.cargarCubos(ladoCubo);
    cubosSave.push(new Cubo(ladoCubo, volumen));
    localStorage.setItem("listaCubos", JSON.stringify(cubosSave));
    localStorage.setItem("ladoCubo", ladoCubo);
    localStorage.setItem("VolumenCubo", volumen);
    document.getElementById("resultadoCubo").innerText = `El volumen del cubo es: ${volumen}`;
    let tablaVolCubo = "<table width='100%' border='1'>";
    tablaVolCubo += `<tr><td>Lado</td><td>Volumen del Cubo</td></tr>`


    cubosSave.forEach(f => {
      tablaVolCubo += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.volumen}</td></tr>`

      //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
      // console.log("item->", f.lado, f.area)
    });
    tablaVolCubo += "</table>";
    document.getElementById("tablaVolumenCubo").innerHTML = tablaVolCubo;
    // cubosSave.forEach(f=>{
    //   document.getElementById("tablaVolumenCubo").innerText = `Lado: <strong>${f.ladoCubo}</strong><br>El área del cuadrado es: <strong>${f.volumen}</strong>`;


    //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
    //   // console.log("item->", f.lado, f.area)
    // })
    const total = cubosSave.reduce((contador, cubo) => contador + cubo.volumen, 0)
    let promedio = total / cubosSave.length
    document.getElementById("promCubo").innerText = `Volumen Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}
// Funcion Volumen Piramide
function calcularVolumenPiramide() {
  class Piramide {

    static id = 0
    constructor(baseP, alturaP, volumen = null) {
      this.id = ++Piramide.id
      this.baseP = baseP
      this.alturaP = alturaP
      if (volumen)
        this.volumen = volumen
    }


    cargarPiramides = (baseP, alturaP) => {
      let resultado = (baseP * alturaP) * (1 / 3);
      return resultado
    }



  }
  if ((document.getElementById("basePir").value == "") || (document.getElementById("alturaPir").value == "")) {
    document.getElementById("resultadoPir").innerText = "Ingrese un valor"
  }
  else {
    const piramidesSave = JSON.parse(localStorage.getItem("listaPiramides")) || [];

    let basePir = document.getElementById("basePir").value;
    let alturaPir = document.getElementById("alturaPir").value;
    const _piramide = new Piramide(basePir, alturaPir);
    volumen = _piramide.cargarPiramides(basePir, alturaPir);
    piramidesSave.push(new Piramide(basePir, alturaPir, volumen));
    localStorage.setItem("listaPiramides", JSON.stringify(piramidesSave));
    localStorage.setItem("basePiramide", basePir);
    localStorage.setItem("alturaPiramide", alturaPir);
    document.getElementById("resultadoPir").innerText = `El volumen de la piramide es: ${volumen}`;
    let tablaVolPir = "<table width='100%' border='1'>";
    tablaVolPir += `<tr><td>Base</td><td>Altura</td><td>Volumen</td></tr>`


    piramidesSave.forEach(f => {
      tablaVolPir += `<tr><td><strong>${f.baseP}</strong></td><td><strong>${f.alturaP}</td><td><strong>${f.volumen}</td></tr>`

      //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
      // console.log("item->", f.lado, f.area)
    });
    tablaVolPir += "</table>";
    document.getElementById("tablaVolumenPiramide").innerHTML = tablaVolPir;

    const total = piramidesSave.reduce((contador, piramide) => contador + piramide.volumen, 0)
    let promedio = total / piramidesSave.length
    document.getElementById("promPiramide").innerText = `Volumen Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}

function calcularVolumenCilindro() {
  class Cilindro {

    static id = 0
    constructor(radioCil, alturaCil, volumen = null) {
      this.id = ++Cilindro.id
      this.radioCil = radioCil
      this.alturaCil = alturaCil
      if (volumen)
        this.volumen = volumen
    }


    cargarCilindros = (radioCil, alturaCil) => {
      let resultado = 3.1416 * (radioCil * radioCil) * alturaCil
      return resultado
    }



  }

  if ((document.getElementById("radioCil").value == "") || (document.getElementById("alturaCil").value == "")) {
    document.getElementById("resultadoVolCil").innerText = "Ingrese un valor"
  }
  else {
    const cilindrosSave = JSON.parse(localStorage.getItem("listaCilindros")) || [];
    //const piramidesSave = [];
    let radioCil = document.getElementById("radioCil").value;
    let alturaCil = document.getElementById("alturaCil").value;
    const _cilindro = new Cilindro(radioCil, alturaCil);
    volumen = _cilindro.cargarCilindros(radioCil, alturaCil);
    cilindrosSave.push(new Cilindro(radioCil, alturaCil, volumen));
    localStorage.setItem("listaCilindros", JSON.stringify(cilindrosSave));
    localStorage.setItem("radioCilindro", radioCil);
    localStorage.setItem("alturaCilindro", alturaCil);
    document.getElementById("resultadoVolCil").innerText = `El volumen del cilindro es: ${volumen}`;
    let tablaVolCil = "<table width='100%' border='1'>";
    tablaVolCil += `<tr><td>Radio</td><td>Altura</td><td>Volumen</td></tr>`


    cilindrosSave.forEach(f => {
      tablaVolCil += `<tr><td><strong>${f.radioCil}</strong></td><td><strong>${f.alturaCil}</td><td><strong>${f.volumen}</td></tr>`


    });
    tablaVolCil += "</table>";
    document.getElementById("tablaVolumenCil").innerHTML = tablaVolCil;

    const total = cilindrosSave.reduce((contador, cilindro) => contador + cilindro.volumen, 0)
    let promedio = total / cilindrosSave.length
    document.getElementById("promVolCil").innerText = `Volumen Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}


function calcularVelocidad() {
  class Velocidad {

    static id = 0
    constructor(distancia, tiempo, velocidad = null) {
      this.id = ++Velocidad.id
      this.distancia = distancia
      this.tiempo = tiempo
      if (velocidad)
        this.velocidad = velocidad
    }


    cargarVelocidad = (distancia, tiempo) => {
      let resultado = distancia / tiempo
      return resultado
    }



  }

  if ((document.getElementById("distancia").value == "") || (document.getElementById("tiempo").value == "")) {
    document.getElementById("resultadoVelocidad").innerText = "Ingrese un valor"
  }
  else {
    const velocidadSave = JSON.parse(localStorage.getItem("listaVelocidad")) || [];
    //const piramidesSave = [];

    let distancia = document.getElementById("distancia").value;
    let tiempo = document.getElementById("tiempo").value;
    const _velocidad = new Velocidad(distancia, tiempo);
    let velocidad = _velocidad.cargarVelocidad(distancia, tiempo);
    velocidadSave.push(new Velocidad(distancia, tiempo, velocidad));
    localStorage.setItem("listaVelocidad", JSON.stringify(velocidadSave));
    localStorage.setItem("distancia", distancia);
    localStorage.setItem("tiempo", tiempo);
    localStorage.setItem("velocidad", velocidad);
    document.getElementById("resultadoVelocidad").innerText = `La velocidades es: ${velocidad}`;
    let tablaVelocidad = "<table width='100%' border='1'>";
    tablaVelocidad += `<tr><td>Distancia</td><td>Tiempo</td><td>Velocidad</td></tr>`


    velocidadSave.forEach(f => {
      tablaVelocidad += `<tr><td><strong>${f.distancia}</strong></td><td><strong>${f.tiempo}</td><td><strong>${f.velocidad}</td></tr>`


    });
    tablaVelocidad += "</table>";
    document.getElementById("tablaVelocidad").innerHTML = tablaVelocidad;

    const total = velocidadSave.reduce((contador, velocidad) => contador + velocidad.velocidad, 0)
    let promedio = total / velocidadSave.length
    document.getElementById("promVelocidad").innerText = `Velocidad Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}


function calcularAceleracion() {
  class Aceleracion {

    static id = 0
    constructor(velocIni, veloFin, tiempo, aceleracion = null) {
      this.id = ++Aceleracion.id
      this.velocIni = velocIni
      this.veloFin = veloFin
      this.tiempo = tiempo
      if (aceleracion)
        this.aceleracion = aceleracion
    }


    cargarAceleracion = (velocIni, veloFin, tiempo) => {
      let resultado = (veloFin - velocIni) / tiempo
      return resultado
    }



  }

  if ((document.getElementById("velocidadIni").value == "") || (document.getElementById("velocidadFin").value == "") || (document.getElementById("tiempoAce").value == "")) {
    document.getElementById("resultadoAce").innerText = "Ingrese un valor"
  }
  else {
    const aceleracionSave = JSON.parse(localStorage.getItem("listaAceleracion")) || [];
    //const piramidesSave = [];

    let veloIni = document.getElementById("velocidadIni").value;
    let veloFin = document.getElementById("velocidadFin").value;
    let tiempoAce = document.getElementById("tiempoAce").value;
    const _aceleracion = new Aceleracion(veloIni, veloFin);
    let aceleracion = _aceleracion.cargarAceleracion(veloIni, veloFin, tiempoAce);
    aceleracionSave.push(new Aceleracion(veloIni, veloFin, tiempoAce, aceleracion));
    localStorage.setItem("listaAceleracion", JSON.stringify(aceleracionSave));
    localStorage.setItem("VelocidadIni", veloIni);
    localStorage.setItem("VelocidadFin", veloFin);
    localStorage.setItem("Tiempo", tiempoAce);
    document.getElementById("resultadoAce").innerText = `La aceleracion es: ${aceleracion}`;
    let tablaAceleracion = "<table width='100%' border='1'>";
    tablaAceleracion += `<tr><td>Velocidad Inicial</td><td>Velocidad Final</td><td>Tiempo</td><td>Aceleracion</td></tr>`


    aceleracionSave.forEach(f => {
      tablaAceleracion += `<tr><td><strong>${f.velocIni}</strong></td><td><strong>${f.veloFin}</td><td><strong>${f.tiempo}</td><td><strong>${f.aceleracion}</td></tr>`


    });
    tablaAceleracion += "</table>";
    document.getElementById("tablaAceleracion").innerHTML = tablaAceleracion;

    const total = aceleracionSave.reduce((contador, aceleracion) => contador + aceleracion.aceleracion, 0)
    let promedio = total / aceleracionSave.length
    document.getElementById("promAceleracion").innerText = `Aceleracion Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}



function calcularFuerza() {
  class Fuerza {

    static id = 0
    constructor(masa, aceleracion1, fuerza = null) {
      this.id = ++Fuerza.id
      this.masa = masa
      this.aceleracion1 = aceleracion1

      if (fuerza)
        this.fuerza = fuerza
    }


    cargarFuerza = (masa, aceleracion1) => {
      let resultado = (masa * aceleracion1)
      return resultado
    }



  }

  if ((document.getElementById("masa").value == "") || (document.getElementById("aceleracion1").value == "")) {
    document.getElementById("resultadoFuerza").innerText = "Ingrese un valor"
  }
  else {
    const fuerzaSave = JSON.parse(localStorage.getItem("listaFuerza")) || [];
    //const piramidesSave = [];

    let masa = document.getElementById("masa").value;
    let aceleracion1 = document.getElementById("aceleracion1").value;

    const _fuerza = new Fuerza(masa, aceleracion1);
    let fuerza = _fuerza.cargarFuerza(masa, aceleracion1);
    fuerzaSave.push(new Fuerza(masa, aceleracion1, fuerza));
    localStorage.setItem("listaFuerza", JSON.stringify(fuerzaSave));
    localStorage.setItem("masa", masa);
    localStorage.setItem("aceleracion", aceleracion1);
    localStorage.setItem("Fuerza", fuerza);
    document.getElementById("resultadoFuerza").innerText = `La fuerza es es: ${fuerza}`;
    let tablaFuerza = "<table width='100%' border='1'>";
    tablaFuerza += `<tr><td>Masa</td><td>Aceleracion</td><td>Fuerza</td></tr>`


    fuerzaSave.forEach(f => {
      tablaFuerza += `<tr><td><strong>${f.masa}</strong></td><td><strong>${f.aceleracion1}</td><td><strong>${f.fuerza}</td></tr>`


    });
    tablaFuerza += "</table>";
    document.getElementById("tablaFuerza").innerHTML = tablaFuerza;

    const total = fuerzaSave.reduce((contador, fuerza) => contador + fuerza.fuerza, 0)
    let promedio = total / fuerzaSave.length
    document.getElementById("promFuerza").innerText = `Fuerza Promedio: ${promedio}`
    // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
  }

}


function calculaAreas(tipo) {
  class calculaAreas {
    static id = 0
    constructor(lado1, lado2, base1, base2, altura, radio) {
      this.is = ++calculaAreas.id
      this.lado1 = lado1
      this.lado2 = lado2
      this.base1 = base1
      this.base2 = base2
      this.altura = altura
      this.radio = radio

    }
    cargarCuadrados = (lado1) => {
      let resultado = lado1 * lado1;
      return resultado
    }
    cargarRectangulos = (lado1, lado2) => {
      let resultado = lado1 * lado2;
      return resultado
    }
    cargarTriangulos = (base1, altura) => {
      let resultado = (base1 * altura) / 2;
      return resultado
    }
    cargarCirculos = (radio) => {
      let resultado = (radio * radio) * 3.1416;
      return resultado
    }

    cargarTrapecios = (base1, base2, altura) => {
      let resultado = (1 / 2) * (parseInt(base1) + parseInt(base2)) * altura;
      return resultado
    }
  }


  if (tipo == 1) {
    if (document.getElementById("lado").value == "") {
      document.getElementById("resultado").innerText = "Ingrese un valor"
    }
    else {
      const cuadradosSave = JSON.parse(localStorage.getItem("listaCuadrados")) || [];
      let ladoCuadrado = document.getElementById("lado").value;
      const _cuadrado = new calculaAreas(ladoCuadrado, 0, 0, 0, 0, 0);
      area = _cuadrado.cargarCuadrados(ladoCuadrado);
      cuadradosSave.push({ lado: ladoCuadrado, Area: area });
      localStorage.setItem("listaCuadrados", JSON.stringify(cuadradosSave));
      document.getElementById("resultado").innerText = `El área del cuadrado es: ${area}`;
      let tablaAreas = "<table width='100%' border='1'>";
      tablaAreas += `<tr><td>Lado</td><td>Area del cuadrado</td></tr>`


      cuadradosSave.forEach(f => {
        tablaAreas += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.Area}</td></tr>`
      });
      tablaAreas += "</table>";
      document.getElementById("tablaAreas").innerHTML = tablaAreas;
      const total = cuadradosSave.reduce((contador, cuadrado) => contador + cuadrado.Area, 0)
      let promedio = total / cuadradosSave.length
      document.getElementById("promCuadrado").innerText = `Area Promedio: ${promedio}`
      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
    }
  }
  if (tipo == 2) {
    if ((document.getElementById("ladoRectangulo").value == "") || (document.getElementById("anchoRectangulo").value == "")) {
      document.getElementById("resultadoRect").innerText = "Ingrese un valor"
    }
    else {
      const rectangulosSave = JSON.parse(localStorage.getItem("listaRectangulos")) || [];
      let ladoRect = document.getElementById("ladoRectangulo").value;
      let anchoRect = document.getElementById("anchoRectangulo").value;
      const _rectangulo = new calculaAreas(ladoRect, anchoRect, 0, 0, 0, 0);
      area = _rectangulo.cargarRectangulos(ladoRect, anchoRect);
      rectangulosSave.push({ lado: ladoRect, ancho: anchoRect, area: area });
      localStorage.setItem("listaRectangulos", JSON.stringify(rectangulosSave));
      document.getElementById("resultadoRect").innerText = `El área del rectangulo es: ${area}`;

      let tablaAreasRectangulo = "<table width='100%' border='1'>";
      tablaAreasRectangulo += `<tr><td>Largo</td><td>Ancho</td><td>Area del rectangulo</td></tr>`
      rectangulosSave.forEach(f => {
        tablaAreasRectangulo += `<tr><td>${f.lado}</td><td>${f.ancho}</td><td>${f.area}</td></tr>`;


      })
      tablaAreasRectangulo += "</table>";
      document.getElementById("tablaAreasRectangulo").innerHTML = tablaAreasRectangulo;
      const total = rectangulosSave.reduce((contador, rectangulo) => contador + rectangulo.area, 0)
      let promedio = total / rectangulosSave.length
      document.getElementById("promRectangulo").innerText = `Promedio Rectangulo: ${promedio}`
    }
  }
  if (tipo == 3) {
    if ((document.getElementById("baseTri").value == "") || (document.getElementById("alturaTri").value == "")) {
      document.getElementById("resultadoTri").innerText = "Ingrese un valor"
    }
    else {
      const triangulosSave = JSON.parse(localStorage.getItem("listaTriangulos")) || [];
      let baseTri = document.getElementById("baseTri").value;
      let alturaTri = document.getElementById("alturaTri").value;
      const _triangulo = new calculaAreas(0, 0, baseTri, 0, alturaTri, 0);
      area = _triangulo.cargarTriangulos(baseTri, alturaTri);
      triangulosSave.push({ base: baseTri, altura: alturaTri, area: area });
      localStorage.setItem("listaTriangulos", JSON.stringify(triangulosSave));
      document.getElementById("resultadoTri").innerText = `El área del triangulo es: ${area}`;
      let tablaAreasTri = "<table width='100%' border='1'>";
      tablaAreasTri += `<tr><td>Base</td><td>Altura</td></td><td>Area</td></tr>`


      triangulosSave.forEach(f => {
        tablaAreasTri += `<tr><td><strong>${f.base}</strong></td><td><strong>${f.altura}</td><td><strong>${f.area}</td></tr>`


      });
      tablaAreasTri += "</table>";
      document.getElementById("tablaAreasTri").innerHTML = tablaAreasTri;

      const total = triangulosSave.reduce((contador, triangulo) => contador + triangulo.area, 0)
      let promedio = total / triangulosSave.length
      document.getElementById("promTriangulo").innerText = `Promedio Triangulo: ${promedio}`

    }
  }
  if (tipo == 4) {
    if ((document.getElementById("radioCirculo").value == "")) {
      document.getElementById("resultadoCirc").innerText = "Ingrese un valor"
    }
    else {
      const circulosSave = JSON.parse(localStorage.getItem("listaCirculos")) || [];
      let radioCirculo = document.getElementById("radioCirculo").value;
      const _circulo = new calculaAreas(0, 0, 0, 0, 0, radioCirculo);
      area = _circulo.cargarCirculos(radioCirculo);
      circulosSave.push({ radio: radioCirculo, area: area });
      localStorage.setItem("listaCirculos", JSON.stringify(circulosSave));
      // localStorage.setItem("radioCirculo", radioCirculo);
      // localStorage.setItem("AreaCirculo", area);
      document.getElementById("resultadoCirc").innerText = `El área del circulo es: ${area}`;
      let tablaAreasCirc = "<table width='100%' border='1'>";
      tablaAreasCirc += `<tr><td>Radio</td><td>Area del cicrculo</td></tr>`


      circulosSave.forEach(f => {
        tablaAreasCirc += `<tr><td><strong>${f.radio}</strong></td><td><strong>${f.area}</td></tr>`

      });
      tablaAreasCirc += "</table>";
      document.getElementById("tablaAreasCirc").innerHTML = tablaAreasCirc;


      const total = circulosSave.reduce((contador, circulo) => contador + circulo.area, 0)
      let promedio = total / circulosSave.length
      document.getElementById("promCirculo").innerText = `Promedio Circulo: ${promedio}`
      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
    }
  }
  if (tipo == 5) {
    if ((document.getElementById("base1").value == "") || (document.getElementById("base2").value == "") || (document.getElementById("alturaT").value == "")) {
      document.getElementById("resultadoTrapecio").innerText = "Ingrese un valor"
    }
    else {
      const trapeciosSave = JSON.parse(localStorage.getItem("listaTrapecios")) || [];
      let base1 = document.getElementById("base1").value;
      let base2 = document.getElementById("base2").value;
      let alturaT = document.getElementById("alturaT").value;
      const _trapecio = new calculaAreas(0,0,base1, base2, alturaT,0);
      area = _trapecio.cargarTrapecios(base1, base2, alturaT);
      trapeciosSave.push({base:base1,base2:base2,altura:alturaT, area:area});
      localStorage.setItem("listaTrapecios", JSON.stringify(trapeciosSave));
      // localStorage.setItem("base1Trapecio", base1);
      // localStorage.setItem("base2Trapecio", base2);
      // localStorage.setItem("alturaTrapecio", alturaT);
      // localStorage.setItem("AreaTrapecio", area);
      document.getElementById("resultadoTrapecio").innerText = `El área del trapecio es: ${area}`;
      let tablaAreasTrapecio = "<table width='100%' border='1'>";
      tablaAreasTrapecio += "<tr><td>base 1</td><td>Base 2</td><td>Altura</td><td>Area</td></tr>";
      trapeciosSave.forEach(f => {
        tablaAreasTrapecio += `<tr><td>${f.base}</td><td>${f.base2}</td><td>${f.altura}</td><td>${f.area}</td></tr>`;


      })
      tablaAreasTrapecio += "</table>";
      document.getElementById("tablaAreasTrapecio").innerHTML = tablaAreasTrapecio;
      const total = trapeciosSave.reduce((contador, trapecio) => contador + trapecio.area, 0)
      let promedio = total / trapeciosSave.length
      document.getElementById("promTrapecio").innerText = `Promedio Trapecio: ${promedio}`
      // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
    }
  }
}