// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
  }
  const myPerson: Person = {
    name: "Xihomara",
    age: 28,
    profession: "Diseñador digital interactivo",
  };
  type propiedades = string | number;
  
  let getParametros = (obj: Person): Array<propiedades> => Object.values(obj);
  
  console.log(getParametros(myPerson));
  
// Ejercicio 2
function sumOrConcatenate(v1: string | number, v2: string | number) {
  if (typeof v1 === "number" && typeof v2 === "number") {
    return v1 + v2;
  } else if (typeof v1 === "string" && typeof v2 === "string") {
    return v1 + "-" + v2;
  } else {
    return v1 + ":" + v2;
  }
}
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", 4));
console.log(sumOrConcatenate("hello", "world"));

// Ejercicio 3
interface Car {
  tires: number;
  turnOnEngine: () => void;
  pressPedal: () => void;
}
interface Motorcycle {
  tires: number;
  turnOnEngine: () => void;
  openThrottle: () => void;
}
const myCar: Car = {
  tires: 4,
  turnOnEngine: function () {
    console.log("turnOnEngine");
  },
  pressPedal: function () {
    console.log("pressPedal");
  },
};
const myMotorcycle: Motorcycle = {
  tires: 4,
  turnOnEngine: function () {
    console.log("turnOnEngine");
  },
  openThrottle: function () {
    console.log("openThrottle");
  },
};

type carOrMotorcycle = Car | Motorcycle;

function isCar(obj: carOrMotorcycle): obj is Car {
  return (obj as Car).pressPedal !== undefined;
}
function acive(obj: carOrMotorcycle) {
  obj.turnOnEngine();
  if (isCar(obj)) {
    obj.pressPedal();
  } else {
    obj.openThrottle();
  }
}
acive(myCar);
acive(myMotorcycle);

// Ejercicio 4
type stringOrNumber = string | number;

function removeFirstEntry<T extends keyof stringOrNumber | string | number>(
  curentArray: Array<T>
): Array<T> {
  return curentArray.slice(1, curentArray.length);
}

const strArray: string[] = [
  "Hello",
  "World",
  "Im",
  "a",
  "Full",
  "Stack",
  "Developer",
];
const newStrArray = removeFirstEntry(strArray);
console.log(newStrArray); //["World", "Im", "a", "Full", "Stack", "Developer"]

const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const newNumArray = removeFirstEntry(numArray);
console.log(newNumArray); //[2, 3, 4, 5, 6, 7]

const mixedArray: Array<number | string> = ["Hello", "I", "have", 3, "tasks"];
const newMixedArray = removeFirstEntry(mixedArray);
console.log(newMixedArray); //["I", "have", 3, "tasks"]

//const unsupportedArray = [{ name: "Lucas", surname: "Fernandez" }, "Hello", 22]; --> will fail
// Argument of type '(string | number | { name: string; surname: string; })[]' is not assignable to parameter of type '(string | number)[]'.
// Type 'string | number | { name: string; surname: string; }' is not assignable to type 'string | number'.
// Type '{ name: string; surname: string; }' is not assignable to type 'string | number'.

