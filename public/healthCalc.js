'use strict';

console.log("healthCalc.js is running.");


function calcBMR(sex) {
	var result = 0;
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	var age = document.getElementById("age").value;
	// The formula for Basal Metabolic Rate is calculate differently based on sex.
	if (sex == "male") {
		result = (66 + (6.3 * weight) + (12.9 * height) - (6.8 * age));
	} else if (sex == "female") {
		result = (655 + (4.3 * weight) + (4.7 * height) - (4.7 * age));
	} else {
		result = "Error"
	}
	// Display the result in the document.
	document.getElementById("bmr").innerHTML = result;
	alert("Your BMR is:" + result);
}

