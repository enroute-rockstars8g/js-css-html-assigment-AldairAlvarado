//Función de Fibonacci
function fibo() {
    const fiboNumber = parseInt(document.getElementById("inputFibo").value);
    let n1 = 0, n2 = 1, nextNum;
    //console.log(fiboNumber);
  
    const numberToShow = [];
  
    for (let i = 0; i < fiboNumber; i++) {
        numberToShow.push(n1);
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum; 
    }
    const container = document.getElementById("fiboContainer");
    const paragraph = document.createElement("p");
    paragraph.innerText = numberToShow.join(",");
    container.appendChild(paragraph);
  }

// Fin de la función Fibonacci

//Funcion de Factorial!
  function factorial() {
    const facts = parseInt(document.getElementById("inputFacto").value);
    const factos = [];

	var total = 1; 
	for (i=1; i<=facts; i++) {
        factos.push();
		total = total * i; 
	}
    console.log(total);
    const container1 = document.getElementById("factsContainer");
    const paragraph1 = document.createElement("p");
    paragraph1.innerText = factos.join(",");
    container1.appendChild(paragraph1);
    
    return total;
}


//Fin de la función Factorial
