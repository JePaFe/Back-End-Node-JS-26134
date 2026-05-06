// console.log(process.argv);

// const method = process.argv[2];
// const endpoint = process.argv[3];

const [, , method, endpoint, ...args] = process.argv;

console.log(`Method: ${method}`);
console.log(`Endpoint: ${endpoint}`);
console.log(args);

// console.log(endpoint.startsWith("products/"));
// console.log(endpoint.includes("/"));

// const partes = endpoint.split("/");
// const recurso = partes[0]
// const id = partes [1]

// const [recurso, id = -1] = partes;
// console.log(recurso, id);

// GET
// products o products/7

// switch (method) {
//   case "GET":
//     console.log("Handling GET switch request");
//     break;
// }

// if (method === "GET" && endpoint === "products") {
//   console.log("Handling GET if request");

//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((response) => response.json())
//   //     .then((data) => console.log(data));

//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// const product = { title: "New Product", price: 29.99 };

fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// ---

// fetch("https://rickandmortyapi.com/api/character")
//   .then((respuesta) => respuesta.json())
//   .then((datos) => console.log(datos.results.slice(0, 5)))
//   .catch((error) => console.log(error));
