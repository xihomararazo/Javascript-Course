// Ejercicio 1
console.log("Ejercicio 1");
import "./propertiesToArray.js";

// Ejercicio 2
console.log("Ejercicio 4");
import "./thisExamples.js";
// Ejercicio 3

console.log("Ejercicio 3");
import "./invertirCadena.js";
// Ejercicio 4
console.log("Ejercicio 4");
import "./login.js";
// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};
