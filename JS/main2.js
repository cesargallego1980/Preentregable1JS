



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
  mensaje = alertaError()
  try {
    if ((document.getElementById("distancia").value != "") && (document.getElementById("tiempo").value != "") && (document.getElementById("distancia").value > 0) && (document.getElementById("tiempo").value > 0)) {

      const velocidadSave = JSON.parse(localStorage.getItem("listaVelocidad")) || [];
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
      Swal.fire({
        title: "Buen Trabajo!",
        text: "Velocidad Calculada!",
        icon: "success"
      });
    }
    else {
      throw new Error(mensaje)
    }
  }
  catch (err) {
    mensaje
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
  mensaje = alertaError()
  try {
    if ((document.getElementById("velocidadIni").value != "") && (document.getElementById("velocidadFin").value != "") && (document.getElementById("tiempoAce").value != "") && (document.getElementById("velocidadIni").value > 0) && (document.getElementById("velocidadFin").value > 0) && (document.getElementById("tiempoAce").value > 0)) {

      const aceleracionSave = JSON.parse(localStorage.getItem("listaAceleracion")) || [];


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
      Swal.fire({
        title: "Buen Trabajo!",
        text: "Aceleracion Calculada!",
        icon: "success"
      });
    }
    else {
      throw new Error(mensaje)

    }
  }
  catch (err) {
    mensaje
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
  mensaje = alertaError()
  try {
    if ((document.getElementById("masa").value != "") && (document.getElementById("aceleracion1").value != "") && (document.getElementById("masa").value > 0) && (document.getElementById("aceleracion1").value > 0)) {

      const fuerzaSave = JSON.parse(localStorage.getItem("listaFuerza")) || [];


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
      
      Swal.fire({
        title: "Buen Trabajo!",
        text: "Fuerza Calculada!",
        icon: "success"
      });
    }
    else {
      throw new Error(mensaje)
    }
  }
  catch (err) {
    mensaje
  }



}


function calculaAreas(tipo) {
  class calculaAreas {
    static id = 0
    constructor(lado1, lado2, base1, base2, altura, radio) {
      this.id = ++calculaAreas.id
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
    try {
      mensaje = alertaError()
      if (document.getElementById("lado").value != "" && document.getElementById("lado").value > 0) {
        
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
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Area Calculada!",
          icon: "success"
        });
      }
      else {

        throw new Error(mensaje)
      }
    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 2) {
    try {
      mensaje = alertaError()
      if ((document.getElementById("ladoRectangulo").value != "") && (document.getElementById("anchoRectangulo").value != "") && (document.getElementById("anchoRectangulo").value > 0) && (document.getElementById("ladoRectangulo").value != "")) {
        
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
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Area Calculada!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)
      }
    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 3) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("baseTri").value != "") && (document.getElementById("alturaTri").value != "") && (document.getElementById("baseTri").value > 0) && (document.getElementById("alturaTri").value > 0)) {
        
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
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Area Calculada!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)
      }
    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 4) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("radioCirculo").value != "") && (document.getElementById("radioCirculo").value > 0)) {
        
        const circulosSave = JSON.parse(localStorage.getItem("listaCirculos")) || [];
        let radioCirculo = document.getElementById("radioCirculo").value;
        const _circulo = new calculaAreas(0, 0, 0, 0, 0, radioCirculo);
        area = _circulo.cargarCirculos(radioCirculo);
        circulosSave.push({ radio: radioCirculo, area: area });
        localStorage.setItem("listaCirculos", JSON.stringify(circulosSave));
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
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Area Calculada!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)

      }
    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 5) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("base1").value != "") && (document.getElementById("base2").value != "") && (document.getElementById("alturaT").value != "") && (document.getElementById("base1").value > 0) && (document.getElementById("base2").value > 0) && (document.getElementById("alturaT").value > 0)) {
        
        const trapeciosSave = JSON.parse(localStorage.getItem("listaTrapecios")) || [];
        let base1 = document.getElementById("base1").value;
        let base2 = document.getElementById("base2").value;
        let alturaT = document.getElementById("alturaT").value;
        const _trapecio = new calculaAreas(0, 0, base1, base2, alturaT, 0);
        area = _trapecio.cargarTrapecios(base1, base2, alturaT);
        trapeciosSave.push({ base: base1, base2: base2, altura: alturaT, area: area });
        localStorage.setItem("listaTrapecios", JSON.stringify(trapeciosSave));

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
        
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Area Calculada!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)
      }
    }
    catch (err) {
      mensaje
    }


  }
}

function calculaVolumen(tipo) {
  class calculaVolumen {
    static id = 0
    constructor(lado, base, altura, radio) {
      this.id = ++calculaVolumen.id
      this.lado = lado
      this.base = base
      this.altura = altura
      this.radio = radio

    }
    cargarCubos = (lado) => {
      let resultado = lado * lado * lado;
      return resultado

    }
    cargarPiramides = (base, altura) => {
      let resultado = (base * altura) * (1 / 3);
      return resultado
    }
    cargarCilindros = (altura, radio) => {
      let resultado = 3.1416 * (radio * radio) * altura
      return resultado
    }
  }
  if (tipo == 1) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("ladoCubo").value != "") && (document.getElementById("ladoCubo").value > 0)) {
        
        const cubosSave = JSON.parse(localStorage.getItem("listaCubos")) || [];
        
        let ladoCubo = document.getElementById("ladoCubo").value;
        const _cubo = new calculaVolumen(ladoCubo, 0, 0, 0);
        volumen = _cubo.cargarCubos(ladoCubo);
        cubosSave.push({ lado: ladoCubo, Volumen: volumen });
        localStorage.setItem("listaCubos", JSON.stringify(cubosSave));
        localStorage.setItem("ladoCubo", ladoCubo);
        localStorage.setItem("VolumenCubo", volumen);
        document.getElementById("resultadoCubo").innerText = `El volumen del cubo es: ${volumen}`;
        let tablaVolCubo = "<table width='100%' border='1'>";
        tablaVolCubo += `<tr><td>Lado</td><td>Volumen del Cubo</td></tr>`


        cubosSave.forEach(f => {
          tablaVolCubo += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.Volumen}</td></tr>`


        });
        tablaVolCubo += "</table>";
        document.getElementById("tablaVolumenCubo").innerHTML = tablaVolCubo;

        const total = cubosSave.reduce((contador, cubo) => contador + cubo.Volumen, 0)
        let promedio = total / cubosSave.length
        document.getElementById("promCubo").innerText = `Volumen Promedio: ${promedio}`
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Volumen Calculado!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)

      }

    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 2) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("basePir").value != "") && (document.getElementById("alturaPir").value != "") && (document.getElementById("basePir").value > 0) && (document.getElementById("alturaPir").value > 0)) {
        
        const piramidesSave = JSON.parse(localStorage.getItem("listaPiramides")) || [];

        let basePir = document.getElementById("basePir").value;
        let alturaPir = document.getElementById("alturaPir").value;
        const _piramide = new calculaVolumen(0, basePir, alturaPir, 0);
        volumen = _piramide.cargarPiramides(basePir, alturaPir);
        piramidesSave.push({ Base: basePir, Altura: alturaPir, volumen: volumen });
        localStorage.setItem("listaPiramides", JSON.stringify(piramidesSave));
        localStorage.setItem("basePiramide", basePir);
        localStorage.setItem("alturaPiramide", alturaPir);
        document.getElementById("resultadoPir").innerText = `El volumen de la piramide es: ${volumen}`;
        let tablaVolPir = "<table width='100%' border='1'>";
        tablaVolPir += `<tr><td>Base</td><td>Altura</td><td>Volumen</td></tr>`


        piramidesSave.forEach(f => {
          tablaVolPir += `<tr><td><strong>${f.Base}</strong></td><td><strong>${f.Altura}</td><td><strong>${f.volumen}</td></tr>`


        });
        tablaVolPir += "</table>";
        document.getElementById("tablaVolumenPiramide").innerHTML = tablaVolPir;

        const total = piramidesSave.reduce((contador, piramide) => contador + piramide.volumen, 0)
        let promedio = total / piramidesSave.length
        document.getElementById("promPiramide").innerText = `Volumen Promedio: ${promedio}`
        
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Volumen Calculado!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)
      }
    }
    catch (err) {
      mensaje
    }


  }
  if (tipo == 3) {
    mensaje = alertaError()
    try {
      if ((document.getElementById("radioCil").value != "") && (document.getElementById("alturaCil").value != "") && (document.getElementById("radioCil").value > 0) && (document.getElementById("alturaCil").value > 0)) {
        
        const cilindrosSave = JSON.parse(localStorage.getItem("listaCilindros")) || [];
        
        let radioCil = document.getElementById("radioCil").value;
        let alturaCil = document.getElementById("alturaCil").value;
        const _cilindro = new calculaVolumen(0, 0, radioCil, alturaCil);
        volumen = _cilindro.cargarCilindros(radioCil, alturaCil);
        cilindrosSave.push(({ Radio: radioCil, Altura: alturaCil, volumen: volumen }));
        localStorage.setItem("listaCilindros", JSON.stringify(cilindrosSave));
        localStorage.setItem("radioCilindro", radioCil);
        localStorage.setItem("alturaCilindro", alturaCil);
        document.getElementById("resultadoVolCil").innerText = `El volumen del cilindro es: ${volumen}`;
        let tablaVolCil = "<table width='100%' border='1'>";
        tablaVolCil += `<tr><td>Radio</td><td>Altura</td><td>Volumen</td></tr>`


        cilindrosSave.forEach(f => {
          tablaVolCil += `<tr><td><strong>${f.Radio}</strong></td><td><strong>${f.Altura}</td><td><strong>${f.volumen}</td></tr>`


        });
        tablaVolCil += "</table>";
        document.getElementById("tablaVolumenCil").innerHTML = tablaVolCil;

        const total = cilindrosSave.reduce((contador, cilindro) => contador + cilindro.volumen, 0)
        let promedio = total / cilindrosSave.length
        document.getElementById("promVolCil").innerText = `Volumen Promedio: ${promedio}`
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Volumen Calculado!",
          icon: "success"
        });
      }
      else {
        throw new Error(mensaje)

      }
    }
    catch (err) {
      mensaje
    }


  }
}
