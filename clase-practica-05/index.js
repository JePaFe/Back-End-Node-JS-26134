// console.log("Hola, Node.js");

// console.log(__dirname);

// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// export const __dirname = dirname(__filename);

// console.log(__dirname);

// console.log(import.meta.dirname);

// import "./prueba/prueba.js";

// ---

// require("./prueba/prueba.js");

// console.log(__dirname);

// ---

// import fs from "fs";

// if (!fs.existsSync("prueba3")) {
//   fs.mkdirSync("prueba3");
// }

// ---

const { saludar } = require("./prueba/saludar.js");

const nombre = process.argv[2]

console.log(saludar(nombre));
