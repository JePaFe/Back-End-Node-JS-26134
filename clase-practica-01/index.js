// let num = 0;
// num = 2;

// const numbers = [1, "Dos", true];

// numbers[0] = 20;
// numbers[1] = 10;

// console.log(numbers[2]);

// ---

// const user = {
//   id: 1,
//   name: "Juan",
//   email: "juan@example.com",
//   admin: true,
// };

// console.log(user)

// console.log(user.email)

// ---

// try {
//   throw new Error("Mensaje de error");
// } catch (error) {
//   console.log(error.message);
// }

// ---

function User(name) {
  this.name = name;
  this.admin = false;
}

const usuario = new User("María");

console.log(usuario);
