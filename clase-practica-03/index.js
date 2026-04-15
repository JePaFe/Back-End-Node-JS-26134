const numeros = [10, 20, 30, 20, 5];

// const resultado = numeros.map((numero) => numero * 2);
// resultado.forEach(item => console.log(`El resultado es: ${item}`))

// const mayores = numeros.filter((numero) => numero > 15);
// console.log(mayores);

// const numero = numeros.find((n) => n == 20);
// console.log(numero);

// ---

// //                         5
// for (let i = 0; i < numeros.length; i++) { // i = 0
//   if (numeros[i] == 20) {
//     console.log(i, numeros[i]);
//     break;
//   }
// }

// ---

const productos = [
  { id: 1, nombre: "Teclado", precio: 100, activo: false },
  { id: 2, nombre: "Mouse", precio: 50, stock: 10 },
  { id: 3, nombre: "Monitor" },
  { id: 4, nombre: "Impresora", precio: 150 },
];

// productos.forEach((producto) =>
//   console.log(producto.nombre, producto["precio"]),
// );

// console.log(productos[1].precio, productos[1]["precio"]);

// ---

// const keys = Object.keys(productos[2]);
// console.log(keys, keys.includes("stock"));

// const values = Object.values(productos[2]);
// console.log(values);
