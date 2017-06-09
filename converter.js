// convert to celsius function
function toCelsius (inputTemp) {

	// if an inputTemp wasnt given throw an alert
	if (inputTemp === null){
		alert("You did not give a temperature!")
	}

	// otherwise run the calculation
	else {

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

	}
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {

	// debugging
	console.log("function called");

	// assign variables to be used
	const radios = document.getElementsByName("whichTemp");
	const inputTemp = document.getElementById("userTemp");

	// handles if neither radio is checked
	if (radios[0].checked === false && radios[1].checked === false){
		alert("You have not decided on a temperature setting!");
		}

	// handles if FIRST radio button (in this case fahrenheit)
	// is checked
	if (radios[0].checked === true){
		toFahrenheit(inputTemp);
		}

	// handles if SECOND radio button is (in this case celsius)
	// is checked
	if (radios[1].checked === true){
		toCelsius(inputTemp);
		}

	// handles if somehow both radios buttons are checked - should not
	// happen
	if (radios[0].checked === true && radios[1] === true){
		alert("Congrats, you broke it. Please stop");
		}
}

// Assign a function to be executed when the button is clicked
document.getElementById("convert").addEventListener("click", determineConverter);