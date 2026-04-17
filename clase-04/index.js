// const productos = [
//   { nombre: "Mouse", precio: 100 },
//   { nombre: "Teclado", precio: 200 },
// ];

// ---

// const usuario = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 33,
//   admin: true,
//   roles: ["editor", "vendedor"],
//   direccion: {
//     calle: "Falsa",
//     numero: 123,
//   },
// };

// usuario.nombre = "Juan Pablo";
// // usuario.direccion = "Calle 123";
// console.log(usuario.direccion.numero);

// ---

// const productos = [
//   { id: 1, nombre: "Mouse", precio: 100, categoria: "Perifericos" },
//   { id: 2, nombre: "Monitor", precio: 300, categoria: "Monitores" },
//   { id: 3, nombre: "Teclado", precio: 200, categoria: "Perifericos" },
//   { id: 4, nombre: "Impresora", precio: 400, categoria: "Impresoras" },
// ];

// forEach - Recorrer
// productos.forEach((item) => console.log(item.nombre));

// map - recorre el array y genera uno nuevo
// const nuevoArray = productos.map((p) => {
//   return {
//     nombre: p.nombre,
//     precio: p.precio * 1.21,
//   };
// });
// // const nuevoArray = productos;

// nuevoArray.push({ nombre: "Monitor LG", precio: 350 });

// console.log(nuevoArray, productos);

// filter - filtrar
// const filtrados = productos.filter(
//   (p) => p.categoria === "Perifericos" && p.precio < 150,
// );
// console.log(filtrados);

// productos.forEach((p) =>
//   console.log(`El producto ${p.nombre} valor $${p.precio}`),
// );

// console.log(productos);
// productos.forEach((p, i) => (productos[i] = p.nombre));
// console.log(productos);

// --

// const usuario = {
//   nombre: "María",
//   apellido: "Gracia",
//   imprimir(simbolo) {
//     return `${this.nombre} ${this.apellido} ${simbolo}`;
//   },
// };

// console.log(usuario, usuario.imprimir("!!!!"));

// --- Clases

// const user1 = { nombre: "Juan", admin: false };
// const user2 = { nombre: "María", admin: false };

// class Usuario {
//   constructor(nombre) {
//     this.nombre = nombre;
//     this.admin = false;
//   }

//   imprimir(simbolo) {
//     return `${this.nombre} ${simbolo}`;
//   }
// }

// const user1 = new Usuario("Juan");
// console.log(user1);
// console.log(user1.imprimir("!!"));

// const user2 = new Usuario("María");
// console.log(user2);

// --- Destructuring

// const user = {
//   nombre: "Juan",
//   edad: 30,
// };

// // let nombre = user.nombre;
// // nombre = "Juan Pablo";
// // const edad = user.edad;

// const { edad, nombre } = user;
// console.log(nombre, edad, user);

// const nombres = ["Juan", "María", "Pedro", "Ana"];

// const [name1, name2] = nombres;

// console.log(name1, name2);

// --- Spread Operator

// const user = { nombre: "Juan", edad: 33 };

// const adminUser = { ...user, edad: 40, admin: true };

// console.log(user, adminUser);

// const numbers1 = [1, 3, 5];
// const numbers2 = [2, 4, 6];

// const numbers = [...numbers2, ...numbers1];

// console.log(numbers1);
// console.log(numbers2);
// console.log(numbers);

// ---

const productos = [
  { id: 1, nombre: "Mouse", precio: 100, categoria: "Perifericos" },
  { id: 2, nombre: "Monitor", precio: 300, categoria: "Monitores" },
  { id: 3, nombre: "Teclado", precio: 200, categoria: "Perifericos" },
  { id: 4, nombre: "Impresora", precio: 400, categoria: "Impresoras" },
];

// const productosConIVA = productos.map((p) => {
//   return {
//     ...p,
//     precio: p.precio * 1.21,
//   };
// });

const productosConIVA = productos.map((p) => ({
  ...p,
  precio: p.precio * 1.21,
}));

console.log(productos, productosConIVA);
