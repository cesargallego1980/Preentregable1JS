// // Definir el tamaño del array
let acum =0
let promedio = 0
let numMayor = 0
let numMenor = 9999999999999999999999999999
let size = parseInt(prompt("Ingrese el tamaño del arreglo"))
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
console.log("El promedio es " + promedio)
console.log("El maximo es "+ numMayor + "El minimo es " + numMenor)
// // Mostrar el contenido del array usando otro ciclo
for (let i = 0; i < size; i++) {
    console.log("Elemento en la posición " + i + ": " + datos[i]);
 }

 