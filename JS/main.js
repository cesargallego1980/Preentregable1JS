function mostrarRegistros(tipo) {
    if (tipo == 1) {
      let dataRow = document.getElementById("tablaAreaRow");
      let init = document.getElementById("init");
  
      let tablaAreas = "<table width='100%' border='1'>"
      tablaAreas += `<tr><td>Lado</td><td>Area del cuadrado</td></tr>`
      fetch("../db/dataCuad.json")
  
        .then(response => response.json())
        .then(data => {
          
          init.style.display = 'block';
          let inittimer = 600;
          data.forEach(cuadrado => {
          
          setTimeout(() => {
            
              dataRow.innerHTML += `<tr><td><strong>${cuadrado.lado}</strong></td><td><strong>${cuadrado.area}</td></tr>`
            }, inittimer)
            inittimer+= 500;
          })
         
          tablaAreas += "</table>";
         
        })
  
    }
    if (tipo == 2) {
      let dataRow = document.getElementById("tablaAreaRow2");
      let init = document.getElementById("init2");
      let tablaAreas = "<table width='100%' border='1'>"
      fetch("../db/dataRect.json")
  
        .then(response => response.json())
        .then(data => {
          init.style.display = 'block';
          let inittimer = 600;
          data.forEach(rectangulo => {
  
            setTimeout(() => {
              dataRow.innerHTML += `<tr><td><strong>${rectangulo.lado1}</strong></td><td><strong>${rectangulo.lado2}</td><td><strong>${rectangulo.area}</td></tr>`
            }, inittimer)
            inittimer+=500;
            
          })
          tablaAreas += "</table>";
          
        })
  
    }
    if (tipo == 3) {
      let tablaAreas = "<table width='100%' border='1'>"
      tablaAreas += `<tr><td>Base</td><td>Altura</td><td>Area</td></tr>`
      fetch("../db/dataTri.json")
  
        .then(response => response.json())
        .then(data => {
          data.forEach(triangulo => {
            tablaAreas += `<tr><td><strong>${triangulo.base}</strong></td><td><strong>${triangulo.altura}</td><td><strong>${triangulo.area}</td></tr>`
  
          })
          tablaAreas += "</table>";
          document.getElementById("tablaAreasTri").innerHTML = tablaAreas;
        })
  
    }
    if (tipo == 4) {
      let tablaAreas = "<table width='100%' border='1'>"
      tablaAreas += `<tr><td>Radio</td><td>Area del circulo</td></tr>`
      fetch("../db/dataCirc.json")
  
        .then(response => response.json())
        .then(data => {
          data.forEach(circulo => {
            tablaAreas += `<tr><td><strong>${circulo.radio}</strong></td><td><strong>${circulo.area}</td></tr>`
  
          })
          tablaAreas += "</table>";
          document.getElementById("tablaAreasCirc").innerHTML = tablaAreas;
        })
    }
    if (tipo == 5) {
      let tablaAreas = "<table width='100%' border='1'>"
      tablaAreas += `<tr><td>Base 1</td><td>Base 2</td><td>Altura</td><td>Area del Trapecio</td></tr>`
      fetch("../db/dataTrap.json")
  
        .then(response => response.json())
        .then(data => {
          data.forEach(trapecio => {
            tablaAreas += `<tr><td><strong>${trapecio.base1}</strong></td><td><strong>${trapecio.base2}</td><td><strong>${trapecio.altura}</td><td><strong>${trapecio.area}</td></tr>`
  
          })
          tablaAreas += "</table>";
          document.getElementById("tablaAreasTrapecio").innerHTML = tablaAreas;
        })
  
    }
  }
  function alertaError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar un valor correcto mayor a 0!",
  
    });
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
        const filtrados = cuadradosSave.filter((cuadradoz) => cuadradoz.Area && cuadradoz.Area <= areaMax.value)
        if (filtrados.length == 0) {
          document.getElementById("AreaCuadMaxima").innerText = "No hay registros"
        }
        else {
          let filtradosMostrar = "";
          filtrados.forEach(f => {
            filtradosMostrar += `Area Maxima: ${f.Area} <br/>`;
  
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