const sumar = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    throw new Error("Ambos parametros deben ser numeros");
  }

  return a + b;
};

let suma = sumar(3, 5);
console.log(suma);

suma = sumar("e", 6);
console.log(suma);

suma = sumar("e", true);
console.log(suma);
