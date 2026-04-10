// const precios = [100, 30, 150, 120, 200];

// const preciosIva = precios.map((precio) => precio * 1.21);

// console.log(precios, preciosIva);

// ---

// function saludar(nombre) {
//   const texto = "Hola " + nombre;
//   return texto;
// }

// const mensaje = saludar("Juan");
// console.log(mensaje);

// Función declarada
// function calcularIva(precio) {
//   const precioConIva = precio * 1.21;
//   return precioConIva;
// }

// Función expresada
// const calcularIva = function (precio) {
//   const precioConIva = precio * 1.21;
//   return precioConIva;
// }

// Función flecha
// const calcularIva = (precio) => {
//   const precioConIva = precio * 1.21;
//   return precioConIva;
// };

const calcularIva = (precio) => precio * 1.21;

// const resultado = calcularIva(100);
// console.log("El precio con IVA es: " + resultado);

// ---

// const numbers = [100, 150, 10, 4, 67];

// console.log(numbers[1]);
// console.log(numbers.length);

// numbers.push(88);

// numbers[3] = 33;

// // numbers.splice(2, 0, 5);

// console.log(numbers);

// const num = numbers.pop() // numbers[4];
// console.log(num);

// console.log(numbers);

// ---

// const nombres = ["Juan", "María", "Pedro", "Ana"];

// // function mostrar(item) {
// //   console.log(item);
// // }

// // const mostrar = function (item) {
// //   console.log(item);
// // };

// // const mostrar = (item) => console.log(item);

// // nombres.forEach((item) => console.log(item)); // recorrer

// const names = nombres.map((nombre) => nombre + "!!!");

// console.log(nombres, names);

// ---

const precios = [100, 50, 30, 10, 99];

// precios.forEach((precio) => console.log(precio));

// const preciosConIva = precios.map((precio) =>
//   Number((precio * 1.21).toFixed(2)),
// );

// // console.log(precios, preciosConIva);

// // function mostrar(item) {
// //   console.log(item);
// // }

// preciosConIva.forEach((item) => console.log(item));

// ---

const preciosFiltrados = precios.filter(precio => precio >= 0);

console.log(preciosFiltrados);
