import db from "./firebase.js";

import { addDoc, collection, getDocs } from "firebase/firestore";

const productsCollection = collection(db, "products");

// Crear un documento

// const createProduct = async () => {
//   const product = {
//     title: "Notebook",
//     price: 1000.5,
//     stock: 3,
//   };

//   await addDoc(productsCollection, product);

//   console.log("Producto creado");
// };

// createProduct();

// Leer documentos

// const getProducts = async () => {
//   const snapshot = await getDocs(productsCollection);

//   snapshot.forEach((doc) => {
//     console.log({
//       id: doc.id,
//     //   title: doc.data().title,
//       ...doc.data(),
//     });
//   });
// };

// getProducts();

// Seeders

const products = [
  {
    title: "Mouse",
    price: 25000,
    stock: 10,
  },
  {
    title: "Teclado",
    price: 50000,
    stock: 5,
  },
  {
    title: "Monitor",
    price: 150000,
    stock: 2,
  },
];

// const createProducts = async () => {
//   for (const product of products) {
//     await addDoc(productsCollection, product);
//   }
// };

const createProducts = () => {
  products.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });

  //   for (const product of products) {
  //     await addDoc(productsCollection, product);
  //   }
};

createProducts();
