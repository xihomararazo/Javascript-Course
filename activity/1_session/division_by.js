var ej4 = "";
function divisionBy(number) {
    ej4 = "";
	for (let i = 0; i < 100; i++) {
	    if (i % number == 0) {
	      console.log(i);
          ej4+= i+"</br> ";
	    }
	}

}
divisionBy(7);
document.getElementById("divisionBy").innerHTML = ej4;