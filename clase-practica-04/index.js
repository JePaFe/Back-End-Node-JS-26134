const automoviles = [
  { id: 1, marca: "Toyota", modelo: "Corolla", anio: 2020, color: "Blanco" },
  { id: 2, marca: "Honda", modelo: "Civic", anio: 2019, color: "Negro" },
  { id: 3, marca: "Ford", modelo: "Mustang", anio: 2021, color: "Rojo" },
  { id: 4, marca: "Chevrolet", modelo: "Spark", anio: 2018, color: "Azul" },
  { id: 5, marca: "Nissan", modelo: "Sentra", anio: 2022, color: "Gris" },
  { id: 6, marca: "Volkswagen", modelo: "Golf", anio: 2017, color: "Verde" },
  { id: 7, marca: "Hyundai", modelo: "Tucson", anio: 2023, color: "Plata" },
  { id: 8, marca: "Kia", modelo: "Sportage", anio: 2016, color: "Naranja" },
  { id: 9, marca: "BMW", modelo: "Serie 3", anio: 2024, color: "Blanco" },
  { id: 10, marca: "Mercedes", modelo: "Clase C", anio: 2015, color: "Negro" },
];

// console.log(automoviles);

// let total = 0;

// automoviles.forEach(({ color }) => {
//   //   console.log(color);
//   if (color == "Negro") {
//     total++;
//   }
// });

// console.log(total);

// ---

// function colorAutomovil(color) {
//   let count = 0;
//   for (const { color: autoColor } of automoviles) {
//     if (autoColor === color) {
//       count++;
//     }
//   }
//   console.log(
//     `La cantidad de automoviles con el color '${color}' son: ${count}`,
//   );
// }

// colorAutomovil('Blanco')

// ---

// const autos = [
//   { marca: "Ford", modelo: "Fiesta", año: 2010, color: "Rojo" },
//   { marca: "Chevrolet", modelo: "Cruze", año: 2015, color: "Negro" },
//   { marca: "Toyota", modelo: "Corolla", año: 2018, color: "Blanco" },
//   { marca: "Honda", modelo: "Civic", año: 2020, color: "Gris" },
//   { marca: "Volkswagen", modelo: "Golf", año: 2012, color: "Azul" },
//   { marca: "Renault", modelo: "Clio", año: 2016, color: "Rojo" },
//   { marca: "Nissan", modelo: "Sentra", año: 2014, color: "Plateado" },
//   { marca: "Hyundai", modelo: "Elantra", año: 2019, color: "Blanco" },
//   { marca: "Kia", modelo: "Rio", año: 2013, color: "Negro" },
//   { marca: "Mazda", modelo: "Rio", año: 2017, color: "Azul" },
// ];

// const colorAuto = (color) => {
//   const autosFiltrados = autos.filter(
//     (auto) => auto.color.toLowerCase() === color.toLowerCase(),
//   );

//   autosFiltrados.forEach((auto) => {
//     const { color, marca, modelo, año } = auto;
//     console.log(`Los autos de color ${color} son: ${marca} ${modelo} ${año}`);
//   });
// };

// colorAuto("Negro");

// ---

// function colorAuto1(color, autos) {
//   return autos.reduce(
//     (total, auto) => (auto.color == color ? total + 1 : total),
//     0,
//   );
// }

// const total = colorAuto1("Negro", automoviles);
// console.log(total)

// ---

// function contarColor(color, array) {
//   let total = 0;
// //                          10
//   for (let i = 0; i < array.length; i++) { // i = 0
//     const { color: colorFor } = array[i];
//     // console.log(colorFor);

//     if (color == colorFor) {
//       total++;
//     }
//   }

//   console.log(`El total es: ${total}`);
// }

// contarColor("Blanco", automoviles);

// ---

// let hoy = Date.now();
// // console.log(hoy);

// let fecha = new Date();

// console.log(fecha.getUTCHours());

// ---

// let num = 3;

// console.log(num);

// const user = {
//   name: "Juan",
// };

// ---

const num = 10;

eval("let x = 5; console.log(x);");

console.log(num, x);