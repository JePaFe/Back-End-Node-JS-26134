// const { sumar, restar } = require("./math");
// const cowsay = require("cowsay");

// // console.log(restar);

// const suma = sumar(3, 4);
// console.log(suma);

// const resta = restar(10, 8);
// console.log(resta);

// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   }),
// );

// ---

const args = process.argv.slice(2);

// console.log(args[0] + "...");

// (GET, POST, PUT, DELETE);
switch (args[0]) {
  case "GET":
    console.log("GET...");
    break;
  case "POST":
    console.log("POST...");
    break;
  case "PUT":
    console.log("PUT...");
    break;
  case "DELETE":
    console.log("DELETE...");
    break;
  default:
    console.log("Method not allowed");
}

// console.log(args);
