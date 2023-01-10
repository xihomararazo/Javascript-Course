let person =  {
    name: "Lucas",
    age: "27",
    profession:"Developer",
}
function propertiesToArray (obj) {
    let array = [];
    Object.keys(obj).forEach((prop)=> array.push(String(prop)));
    return array;
}

let propertiesArray = propertiesToArray(person);
console.log(propertiesArray);
document.getElementById("propertiesArray").innerHTML = "Result: "+ String(propertiesArray);