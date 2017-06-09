// convert to celsius function
function toCelsius (inputTemp) {

	// if an inputTemp wasnt given throw an alert
	if (inputTemp === null){
		alert("You did not give a temperature!")
	}

	// otherwise run the calculation
	else {
		return ((inputTemp-32)*5/9);
	}
}

// convert to farhenheit function
function toFahrenheit (inputTemp) {

	// if an inputTemp wasnt given throw an alert
	if (inputTemp === null){
		alert("You did not give a temperature!")
	}

	// otherwise run the calculation
	else {
		return (inputTemp*9/5+32);
	}
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {

	// debugging
	// console.log("function called");

	// assign variables to be used
	const radios = document.getElementsByName("whichTemp");
	let inputTemp = document.getElementById("userTemp").value;
	let outputTemp;

	// more debugging
	console.log("input temp: ", inputTemp);

	// handles if neither radio is checked
	if (radios[0].checked === false && radios[1].checked === false){
		alert("You have not decided on a temperature setting!");
		}

	// handles if FIRST radio button (in this case fahrenheit)
	// is checked
	if (radios[0].checked === true){
		outputTemp = toFahrenheit(inputTemp);
		dumptToHTML(outputTemp);
		}

	// handles if SECOND radio button (in this case celsius)
	// is checked
	if (radios[1].checked === true){
		outputTemp = toCelsius(inputTemp);
		dumptToHTML(outputTemp);
		}

	// handles if somehow both radios buttons are checked - should not
	// happen. done because I had to give up on trying to use switch:
	// and that bothered me
	if (radios[0].checked === true && radios[1] === true){
		alert("Congrats, you broke it. Please stop");
		}
}

// clear the input box - as required
function clear(){
	document.getElementById("userTemp").value = "";
}

// take the converted temperature and cram it into the DOM
function dumptToHTML(outputTemp){

	// get the output location in the DOM and store it
	let temperatureLocation = document.getElementById("temperatureResult");

	// clear previous conversions
	temperatureLocation.innerHTML = "";
	// temperatureLocation.removeClass(*);

	// create a textNode then append to an element which is
	// then appended to the output location
	let temperatureNode = document.createTextNode(outputTemp);
	let temperatureElement = document.createElement("p");
	temperatureElement.appendChild(temperatureNode);
	temperatureLocation.appendChild(temperatureElement);

}

// Assign a function to be executed when the button is clicked
document.getElementById("convert").addEventListener("click", determineConverter);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("userTemp").addEventListener("keydown", function(){
	var keyResult = event.which;
	if (keyResult === 13) {determineConverter()}
});