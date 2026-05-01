// console.log("Inicio");

// setTimeout(() => {
//   console.log("Después");
// }, 0);

// console.log("Fin");

// ---

// function cocinar(callback) {
//   setTimeout(() => {
//     console.log("Pizza lista");
//     callback();
//   }, 2000);
// }

// cocinar(() => {
//   console.log("Servir mesa");
// });

// ---

// function saludar(nombre, callback) {
//   console.log("Hola " + nombre);

//   callback();
// }

// function despedirse() {
//   console.log("Chau!");
// }

// saludar("Fede", despedirse);

// ---

// function cocinar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Pizza quemada");
//     }, 2000);
//   });
// }

// cocinar()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("A comer"));

// ---

// async function ejecutar() {
//   try {
//     const response = await cocinar();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('A comer')
//   }
// }

// ejecutar();

// ---

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));

// ---

// async function personajes() {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// personajes();

// ---

// const product = { title: "New Product", price: 29.99 };

// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(product),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function createProduct(product) {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const data = await response.json();

  console.log(data);
}

const product = { title: "New Product", price: 29.99 };

createProduct(product);