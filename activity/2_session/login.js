class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login = (_) => {
    try {
      if (this.username == null || this.password == null) {
        throw new SyntaxError("Error, uno o mas parametros no estan definidos");
      }
      if (this.username !== "admin" || this.password !== "passwd") {
        alert("El usuario o la contraseña son incorrectas");
        return "El usuario o la contraseña son incorrectas";
      } else {
        alert("Login exitoso");
        return "Login exitoso";
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.log("Error: " + err.message);
      }
    }
  };
}
function tryToLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let loginRes = new Login(username, password).login();

  document.getElementById("loginRes").innerHTML = loginRes;
  console.log(loginRes);
  console.log("carga funcion");
}

document.getElementById("tryToLogin").addEventListener("click", () => {
  console.log("pressed");
  tryToLogin();
});

//Ejercicio 5
document.getElementById("loginSuccess").addEventListener("click", () => {
  console.log("loginSuccess");
  let loginRes = new Login("admin", "passwd").login();
});

document.getElementById("loginFailure").addEventListener("click", () => {
  console.log("loginFailure");
  let loginRes = new Login("x", "x").login();
});

//Ejercicio 6
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

document
  .getElementById("loginSuccessAsync")
  .addEventListener("click", async () => {
    try {
      let res = await loginWitUsername("admin", "passwd");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });

document
  .getElementById("loginFailureAsync")
  .addEventListener("click", async () => {
    try {
      await loginWitUsername("x", "x");
    } catch (err) {
      console.log(err);
    }
  });
