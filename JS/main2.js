

          
          const carrito = JSON.parse(localStorage.getItem("carrito")) || []
          
// Figura Cuadrado
          function calcularAreaCuadrado() {
            class Cuadrado {

                static id = 0
                constructor (lado, area= null) {
                    this.id = ++Cuadrado.id
                    this.lado = lado
                    if(area)
                      this.area = area
                }
                  cargarCuadrados = (lado) => {
                    let resultado = lado*lado;
                    return resultado
                }
              
              
              
              }
            const cuadradosSave = JSON.parse(localStorage.getItem("listaCuadrados")) || [];
            let ladoCuadrado = document.getElementById("lado").value;
            const _cuadrado =  new Cuadrado(ladoCuadrado);
            area =  _cuadrado.cargarCuadrados(ladoCuadrado);
            cuadradosSave.push(new Cuadrado(ladoCuadrado, area));

            localStorage.setItem("listaCuadrados",JSON.stringify(cuadradosSave));
            localStorage.setItem("ladoCuadrado", ladoCuadrado);
            localStorage.setItem("AreaCuadrado", area);
            document.getElementById("resultado").innerText = `El área del cuadrado es: ${area}`;
            let tablaAreas = "<table width='100%' border='1'>";
               tablaAreas += `<tr><td>Lado</td><td>Area del cuadrado</td></tr>`

              
            cuadradosSave.forEach(f=>{
              tablaAreas += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.area}</td></tr>`

              //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            });
            tablaAreas+="</table>";
            document.getElementById("tablaAreas").innerHTML = tablaAreas;
            const total = cuadradosSave.reduce((contador, cuadrado) => contador + cuadrado.area, 0)
            let promedio = total/cuadradosSave.length
            document.getElementById("promCuadrado").innerText = `Promedio: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }

          function BuscarAreaCuadrado(cuadradosSave){
            let areaMax = document.getElementById("buscarAreaCuad")
            const filtrados = cuadradosSave.filter((cuadrado) => cuadrado.area <= areaMax)
            document.getElementById("AreaCuadMaxima").innerText=`Area Maxima: ${filtrados}`
            

          }
// Figura Rectangulo
          function calcularAreaRectangulo() {
            class Rectangulo {

                static id = 0
                constructor (lado1, lado2, area= null) {
                    this.id = ++Rectangulo.id
                    this.lado1 = lado1
                    this.lado2 = lado2
                    if(area)
                      this.area = area
                }
              
                // area = () => {
                //     this.area = this.lado * this.lado
                //     alert("Area del Cuadrado: $ "+this.area)
                // }
                  cargarRectangulos = (lado1, lado2) => {
                    let resultado = lado1*lado2;
                    return resultado
                }
              
              
              
              }
              
              const rectangulosSave = JSON.parse(localStorage.getItem("listaRectangulos")) || [];
            let ladoRect = document.getElementById("ladoRectangulo").value;
            let anchoRect = document.getElementById("anchoRectangulo").value;
            const _rectangulo =  new Rectangulo(ladoRect, anchoRect);
            area =  _rectangulo.cargarRectangulos(ladoRect, anchoRect);
            rectangulosSave.push(new Rectangulo(ladoRect, anchoRect, area));
            localStorage.setItem("listaRectangulos",JSON.stringify(rectangulosSave));
            localStorage.setItem("ladoRectangulo", ladoRect)
            localStorage.setItem("anchoRectangulo", anchoRect)
            localStorage.setItem("areaRectangulo", area)
            document.getElementById("resultadoRect").innerText = `El área del rectangulo es: ${area}`;
            // rectangulosSave.forEach(f=>{
            //   // document.getElementById("tablaAreas").innerHTML = `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

            //    document.getElementById("tablaAreasRectangulo").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            let tablaAreasRectangulo = "<table width='100%' border='1'>";
            tablaAreasRectangulo += `<tr><td>Largo</td><td>Ancho</td><td>Area del rectangulo</td></tr>`
            rectangulosSave.forEach(f=>{
              tablaAreasRectangulo += `<tr><td>${f.lado1}</td><td>${f.lado2}</td><td>${f.area}</td></tr>`;

              //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            })
            tablaAreasRectangulo += "</table>";
            document.getElementById("tablaAreasRectangulo").innerHTML = tablaAreasRectangulo;
            const total = rectangulosSave.reduce((contador, rectangulo) => contador + rectangulo.area, 0)
            let promedio = total/rectangulosSave.length
            document.getElementById("promRectangulo").innerText = `Promedio Rectangulo: ${promedio}`

            
          }

          function calcularAreaTriangulo() {
            class Triangulo {

                static id = 0
                constructor (base, altura, area= null) {
                    this.id = ++Triangulo.id
                    this.base = base
                    this.altura = altura
                    if(area)
                      this.area = area
                }
              
                  cargarTriangulos = (base, altura) => {
                    let resultado = (base * altura)/2;
                    return resultado
                }
              
              
              
              }
              const triangulosSave = [];
            let baseTri = document.getElementById("baseTri").value;
            let alturaTri = document.getElementById("alturaTri").value;
            const _triangulo =  new Triangulo(baseTri, alturaTri);
            area =  _triangulo.cargarTriangulos(baseTri, alturaTri);
            triangulosSave.push(new Triangulo(baseTri, alturaTri, area));
            localStorage.setItem("baseTriangulo", baseTri);
            localStorage.setItem("alturaTriangulo", alturaTri);
            localStorage.setItem("AreaTriangulo", area);
            document.getElementById("resultadoTri").innerText = `El área del triangulo es: ${area}`;
            let tablaAreasTri = "<table width='100%' border='1'>";
               tablaAreasTri += `<tr><td>Base</td><td>Altura</td></td><td>Area</td></tr>`

              
            triangulosSave.forEach(f=>{
              tablaAreasTri += `<tr><td><strong>${f.base}</strong></td><td><strong>${f.altura}</td><td><strong>${f.area}</td></tr>`

              //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            });
            tablaAreasTri+="</table>";
            document.getElementById("tablaAreasTri").innerHTML = tablaAreasTri;
            // cuadradosSave.forEach(f=>{
            //   document.getElementById("tablaAreasTri").innerText = `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;


            //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            const total = triangulosSave.reduce((contador, triangulo) => contador + triangulo.area, 0)
            let promedio = total/triangulosSave.length
            document.getElementById("promTriangulo").innerText = `Promedio Triangulo: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }

          function calcularAreaCirculo() {
            class Circulo {

                static id = 0
                constructor (radio, area= null) {
                    this.id = ++Circulo.id
                    this.radio = radio
                    if(area)
                      this.area = area
                }
              
                
                  cargarCirculos = (radio) => {
                    let resultado = (radio * radio)*3.1416;
                    return resultado
                }
              
              
              
              }
              const circulosSave = [];
            let radioCirculo = document.getElementById("radioCirculo").value;
            const _circulo =  new Circulo(radioCirculo);
            area =  _circulo.cargarCirculos(radioCirculo);
            circulosSave.push(new Circulo(radioCirculo, area));
            localStorage.setItem("radioCirculo", radioCirculo);
            localStorage.setItem("AreaCirculo", area);
            document.getElementById("resultadoCirc").innerText = `El área del circulo es: ${area}`;
            let tablaAreasCirc = "<table width='100%' border='1'>";
               tablaAreasCirc += `<tr><td>Radio</td><td>Area del cicrculo</td></tr>`

              
            circulosSave.forEach(f=>{
              tablaAreasCirc += `<tr><td><strong>${f.radio}</strong></td><td><strong>${f.area}</td></tr>`

              //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            });
            tablaAreasCirc+="</table>";
            document.getElementById("tablaAreasCirc").innerHTML = tablaAreasCirc;
            
            document.getElementById("promCirculo").innerText = `Promedio Circulo: ${promedio}`
            // circulosSave.forEach(f=>{
            //   document.getElementById("tablaAreasCirc").innerText = `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

            //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            const total = circulosSave.reduce((contador, circulo) => contador + circulo.area, 0)
            let promedio = total/circulosSave.length
            document.getElementById("promCirculo").innerText = `Promedio Circulo: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }

          const trapeciosSave = [];
          function calcularAreaTrapecio() {
            class Trapecio {

                static id = 0
                constructor (base1, base2, alturaT,area= null) {
                    this.id = ++Trapecio.id
                    this.base1 = base1
                    this.base2 = base2
                    this.alturaT = alturaT
                    if(area)
                      this.area = area
                }
              
                
                  cargarTrapecios = (base1, base2, alturaT) => {
                    let resultado = (1/2)*(parseInt(base1) + parseInt(base2))*alturaT;
                    return resultado
                }
              
              
              
              }
           
            let base1 = document.getElementById("base1").value;
            let base2 = document.getElementById("base2").value;
            let alturaT = document.getElementById("alturaT").value;
            const _trapecio =  new Trapecio(base1, base2, alturaT);
            area =  _trapecio.cargarTrapecios(base1, base2, alturaT);
            trapeciosSave.push(new Trapecio(base1, base2, alturaT, area));
            localStorage.setItem("base1Trapecio", base1);
            localStorage.setItem("base2Trapecio", base2);
            localStorage.setItem("alturaTrapecio", alturaT);
            localStorage.setItem("AreaTrapecio", area);
            document.getElementById("resultadoTrapecio").innerText = `El área del trapecio es: ${area}`;
              let tablaAreasTrapecio = "<table width='100%' border='1'>";
          tablaAreasTrapecio += "<tr><td>base 1</td><td>Base 2</td><td>Altura</td><td>Area</td></tr>";
            trapeciosSave.forEach(f=>{
              tablaAreasTrapecio += `<tr><td>${f.base1}</td><td>${f.base2}</td><td>${f.alturaT}</td><td>${f.area}</td></tr>`;

              //document.getElementById("tablaAreasTrapecio").innerText = `Lado: <strong>${f.base1}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            })
            tablaAreasTrapecio += "</table>";
            document.getElementById("tablaAreasTrapecio").innerHTML = tablaAreasTrapecio;
            const total = trapeciosSave.reduce((contador, trapecio) => contador + trapecio.area, 0)
            let promedio = total/trapeciosSave.length
            document.getElementById("promTrapecio").innerText = `Promedio Trapecio: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }
//Figura Cubo
          function calcularVolumenCubo() {
            class Cubo {

                static id = 0
                constructor (lado, volumen= null) {
                    this.id = ++Cubo.id
                    this.lado = lado
                    if(volumen)
                      this.volumen = volumen
                }
              
                
                  cargarCubos = (lado) => {
                    let resultado = lado*lado*lado;
                    return resultado
                }
              
              
              
              }
              const cubosSave = JSON.parse(localStorage.getItem("listaCubos")) || [];
              // const cubosSave = [];
            let ladoCubo = document.getElementById("ladoCubo").value;
            const _cubo =  new Cubo(ladoCubo);
            volumen =  _cubo.cargarCubos(ladoCubo);
            cubosSave.push(new Cubo(ladoCubo, volumen));
            localStorage.setItem("listaCubos",JSON.stringify(cubosSave));
            localStorage.setItem("ladoCubo", ladoCubo);
            localStorage.setItem("VolumenCubo", volumen);
            document.getElementById("resultadoCubo").innerText = `El volumen del cubo es: ${volumen}`;
            let tablaVolCubo = "<table width='100%' border='1'>";
               tablaVolCubo += `<tr><td>Lado</td><td>Volumen del Cubo</td></tr>`

              
            cubosSave.forEach(f=>{
              tablaVolCubo += `<tr><td><strong>${f.lado}</strong></td><td><strong>${f.volumen}</td></tr>`

              //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

              // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
              // console.log("item->", f.lado, f.area)
            });
            tablaVolCubo+="</table>";
            document.getElementById("tablaVolumenCubo").innerHTML = tablaVolCubo;
            // cubosSave.forEach(f=>{
            //   document.getElementById("tablaVolumenCubo").innerText = `Lado: <strong>${f.ladoCubo}</strong><br>El área del cuadrado es: <strong>${f.volumen}</strong>`;


            //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            const total = cubosSave.reduce((contador, cubo) => contador + cubo.volumen, 0)
            let promedio = total/cubosSave.length
            document.getElementById("promCubo").innerText = `Volumen Promedio: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }
// Funcion Volumen Piramide
          function calcularVolumenPiramide() {
            class Piramide {

                static id = 0
                constructor (baseP, alturaP, volumen= null) {
                    this.id = ++Piramide.id
                    this.baseP = baseP
                    this.alturaP = alturaP
                    if(volumen)
                      this.volumen = volumen
                }
              
                
                  cargarPiramides = (baseP,alturaP) => {
                    let resultado = (baseP * alturaP)*(1/3);
                    return resultado
                }
              
              
              
              }
              const piramidesSave = JSON.parse(localStorage.getItem("listaPiramides")) || [];
              
            let basePir = document.getElementById("basePir").value;
            let alturaPir = document.getElementById("alturaPir").value;
            const _piramide =  new Piramide(basePir, alturaPir);
            volumen =  _piramide.cargarPiramides(basePir, alturaPir);
            piramidesSave.push(new Piramide(basePir, alturaPir, volumen));
            localStorage.setItem("listaPiramides",JSON.stringify(piramidesSave));
            localStorage.setItem("basePiramide", basePir);
            localStorage.setItem("alturaPiramide", alturaPir);
            document.getElementById("resultadoPir").innerText = `El volumen de la piramide es: ${volumen}`;
            let tablaVolPir = "<table width='100%' border='1'>";
            tablaVolPir += `<tr><td>Base</td><td>Altura</td><td>Volumen</td></tr>`

           
         piramidesSave.forEach(f=>{
           tablaVolPir += `<tr><td><strong>${f.baseP}</strong></td><td><strong>${f.alturaP}</td><td><strong>${f.volumen}</td></tr>`

           //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
           // console.log("item->", f.lado, f.area)
         });
         tablaVolPir+="</table>";
         document.getElementById("tablaVolumenPiramide").innerHTML = tablaVolPir;
            // piramidesSave.forEach(f=>{
            //   document.getElementById("tablaVolumenPiramide").innerText = `Lado: <strong>${f.basePir}</strong><br>El volumen de la piramide es: <strong>${f.volumen}</strong>`;

            //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            const total = piramidesSave.reduce((contador, piramide) => contador + piramide.volumen, 0)
            let promedio = total/piramidesSave.length
            document.getElementById("promPiramide").innerText = `Volumen Promedio: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }

          function calcularVolumenCilindro() {
            class Cilindro {

                static id = 0
                constructor (radioCil, alturaCil, volumen= null) {
                    this.id = ++Cilindro.id
                    this.radioCil = radioCil
                    this.alturaCil = alturaCil
                    if(volumen)
                      this.volumen = volumen
                }
              
                
                  cargarCilindros = (radioCil,alturaCil) => {
                    let resultado = 3.1416 * (radioCil*radioCil) * alturaCil
                    return resultado
                }
              
              
              
              }
              const cilindrosSave = JSON.parse(localStorage.getItem("listaCilindros")) || [];
              //const piramidesSave = [];
            let radioCil = document.getElementById("radioCil").value;
            let alturaCil = document.getElementById("alturaCil").value;
            const _cilindro =  new Cilindro(radioCil, alturaCil);
            volumen =  _cilindro.cargarCilindros(radioCil, alturaCil);
            cilindrosSave.push(new Cilindro(radioCil, alturaCil, volumen));
            localStorage.setItem("listaCilindros",JSON.stringify(cilindrosSave));
            localStorage.setItem("radioCilindro", radioCil);
            localStorage.setItem("alturaCilindro", alturaCil);
            document.getElementById("resultadoVolCil").innerText = `El volumen del cilindro es: ${volumen}`;
            let tablaVolCil = "<table width='100%' border='1'>";
            tablaVolCil += `<tr><td>Radio</td><td>Altura</td><td>Volumen</td></tr>`

           
         cilindrosSave.forEach(f=>{
           tablaVolCil += `<tr><td><strong>${f.radioCil}</strong></td><td><strong>${f.alturaCil}</td><td><strong>${f.volumen}</td></tr>`

           //document.getElementById("tablaAreas").innerHTML += `Lado: <strong>${f.ladoCuadrado}</strong><br>El área del cuadrado es: <strong>${f.area}</strong>`;

           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
           // console.log("item->", f.lado, f.area)
         });
         tablaVolCil+="</table>";
         document.getElementById("tablaVolumenCil").innerHTML = tablaVolCil;
            // piramidesSave.forEach(f=>{
            //   document.getElementById("tablaVolumenPiramide").innerText = `Lado: <strong>${f.basePir}</strong><br>El volumen de la piramide es: <strong>${f.volumen}</strong>`;

            //   // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
            //   // console.log("item->", f.lado, f.area)
            // })
            const total = cilindrosSave.reduce((contador, cilindro) => contador + cilindro.volumen, 0)
            let promedio = total/cilindrosSave.length
            document.getElementById("promVolCil").innerText = `Volumen Promedio: ${promedio}`
           // document.getElementById("tablaAreas").innerText=`Lado: ${f.ladoCuadrado}`;
          }