// const precios = [100, 30, 150, 120, 200];

// precios.forEach((precio) => console.log(precio));

// ---

// Función declarada
// function saludar(nombre) {
//   return "Hola " + nombre;
// }

// Función expresada
// const saludar = function (nombre) {
//   return "Hola " + nombre;
// }

// Función flecha
// const saludar = (nombre) => {
//   return "Hola " + nombre;
// };

// const saludar = nombre => "Hola " + nombre;

// let mensaje = saludar("Juan");
// console.log(mensaje);

// ---

const precios = [100, 30, 150, 120, 200];

// function calculo(precio) {
//   return precio * 1.21;
// }

// const calculo = function (precio) {
//   return precio + 1;
// }

// const calculo =  (precio) => {
//   return precio + 1;
// }

// const calculo = precio => precio * 1.21;

const preciosIva = precios.map(precio => precio * 1.21);

console.log(precios, preciosIva);
