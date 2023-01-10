class InvertirCadena {
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
  }

  cadenaInvertir = "";

  reverseText = (_) => {
    try {
      if (this.cadenaInvertir == null) {
        throw new SyntaxError(
          "Error, el parámetro de la cadena cadenaInvertir no se definio"
        );
      }
      if (this.cadenaInvertir == "") {
        throw new SyntaxError(
          "Error, el parámetro de la cadena cadenaInvertir es vacío"
        );
      }
      let splitString = this.cadenaInvertir.split("");
      let reverseArray = splitString.reverse();
      let joinArray = reverseArray.join("");
      return joinArray;
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.log("Syntax Error: " + err.message);
      }
    }
  };
}

//1 si la cadena no es declarada como parametro se imprime
//"Error, el parámetro de la cadena cadenaInvertir no se definio"
const invertirCadenaNull = new InvertirCadena();
console.log(invertirCadenaNull.reverseText());

//2 si la cadena existe y no tine caracteres se imprime
//"Error, el parámetro de la cadena cadenaInvertir es vacío"
const invertirCadenaVacia = new InvertirCadena("");
console.log(invertirCadenaVacia.reverseText());

//3 si la cadena esta fefinida y es diferente a ""
const invertirCadena = new InvertirCadena("Hola mundo");
console.log(invertirCadena.reverseText());

//4 cuando el metodo no existe y no queremos que de error
const invertirCadenaMetodo = new InvertirCadena("algo");
try {
  console.log(invertirCadenaMetodo.nuevoMetodo());
} catch (error) {
  console.log("El metodo solicitado no existe.");
}
