var myPerson = {
    name: "Xihomara",
    age: 28,
    profession: "Diseñador digital interactivo"
};
var getParametros = function (obj) { return Object.values(obj); };
console.log(getParametros(myPerson));
// Ejercicio 2
function sumOrConcatenate(v1, v2) {
    if (typeof v1 === "number" && typeof v2 === "number") {
        return v1 + v2;
    }
    else if (typeof v1 === "string" && typeof v2 === "string") {
        return v1 + "-" + v2;
    }
    else {
        return v1 + ":" + v2;
    }
}
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", 4));
console.log(sumOrConcatenate("hello", "world"));
var myCar = {
    tires: 4,
    turnOnEngine: function () {
        console.log("turnOnEngine");
    },
    pressPedal: function () {
        console.log("pressPedal");
    }
};
var myMotorcycle = {
    tires: 4,
    turnOnEngine: function () {
        console.log("turnOnEngine");
    },
    openThrottle: function () {
        console.log("openThrottle");
    }
};
function isCar(obj) {
    return obj.pressPedal !== undefined;
}
function acive(obj) {
    obj.turnOnEngine();
    if (isCar(obj)) {
        obj.pressPedal();
    }
    else {
        obj.openThrottle();
    }
}
acive(myCar);
acive(myMotorcycle);
function removeFirstEntry(curentArray) {
    return curentArray.slice(1, curentArray.length);
}
var strArray = [
    "Hello",
    "World",
    "Im",
    "a",
    "Full",
    "Stack",
    "Developer",
];
var newStrArray = removeFirstEntry(strArray);
console.log(newStrArray); //["World", "Im", "a", "Full", "Stack", "Developer"]
var numArray = [1, 2, 3, 4, 5, 6, 7];
var newNumArray = removeFirstEntry(numArray);
console.log(newNumArray); //[2, 3, 4, 5, 6, 7]
var mixedArray = ["Hello", "I", "have", 3, "tasks"];
var newMixedArray = removeFirstEntry(mixedArray);
console.log(newMixedArray); //["I", "have", 3, "tasks"]
//const unsupportedArray = [{ name: "Lucas", surname: "Fernandez" }, "Hello", 22]; --> will fail
// Argument of type '(string | number | { name: string; surname: string; })[]' is not assignable to parameter of type '(string | number)[]'.
// Type 'string | number | { name: string; surname: string; }' is not assignable to type 'string | number'.
// Type '{ name: string; surname: string; }' is not assignable to type 'string | number'.
