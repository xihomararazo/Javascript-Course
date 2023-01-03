let obj = {
    toLowerString : function(txt){
        console.log(txt.toLowerCase());
        return txt.toLowerCase();
    }
}
let formatter = {
    prefix : "Hello ",
    append (txt) {
        console.log(formatter.prefix + txt);
        return formatter.prefix + txt;
    }
}

let objAappend = formatter.append("World");
document.getElementById("objAappend").innerHTML = "Result: " + objAappend.toString();

formatter.__proto__ = obj;

let objToLowerString = formatter.toLowerString("I’m Lucas");
document.getElementById("objToLowerString").innerHTML = "Result: " + objToLowerString.toString();

    