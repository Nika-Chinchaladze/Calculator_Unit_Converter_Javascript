// LENGTH TAB SECTION
// Display - From:
function displayFrom(buttonText) {
    var screenFrom = document.getElementById("leftQuantity1");
    screenFrom.value = buttonText;
}

// Display - To:
function displayTo(buttonText) {
    var screenFrom = document.getElementById("rightQuantity1");
    screenFrom.value = buttonText;
}

// Convert Functionality:
function convertLength() {
    var chosenValue = document.getElementById("activeQuantity1");
    var answerValue = document.getElementById("answerInput1");
    var fromValue = document.getElementById("leftQuantity1");
    var toValue = document.getElementById("rightQuantity1");
    var answer = 0;
    // centimeter logic:
    if (fromValue.value == "Centimeter" && toValue.value == "Centimeter") {
        answer = parseFloat(chosenValue.value);
    }
    else if (fromValue.value == "Centimeter" && toValue.value == "Meter") {
        answer = parseFloat(chosenValue.value) * 0.01;
    }
    else if (fromValue.value == "Centimeter" && toValue.value == "Kilometer") {
        answer = parseFloat(chosenValue.value) / 100000;
    }
    // meter logic:
    if (fromValue.value == "Meter" && toValue.value == "Centimeter") {
        answer = parseFloat(chosenValue.value) * 100;
    }
    else if (fromValue.value == "Meter" && toValue.value == "Meter") {
        answer = parseFloat(chosenValue.value);
    }
    else if (fromValue.value == "Meter" && toValue.value == "Kilometer") {
        answer = parseFloat(chosenValue.value) / 1000;
    }
    // kilometer logic:
    if (fromValue.value == "Kilometer" && toValue.value == "Centimeter") {
        answer = parseFloat(chosenValue.value) * 100000;
    }
    else if (fromValue.value == "Kilometer" && toValue.value == "Meter") {
        answer = parseFloat(chosenValue.value) * 1000;
    }
    else if (fromValue.value == "Kilometer" && toValue.value == "Kilometer") {
        answer = parseFloat(chosenValue.value);
    }
    answerValue.value = answer;
}

// TEMPERATURE TAB SECTION
// Display - From:
function displayFrom2(buttonText) {
    var screenFrom = document.getElementById("leftQuantity2");
    screenFrom.value = buttonText;
}

// Display - To:
function displayTo2(buttonText) {
    var screenFrom = document.getElementById("rightQuantity2");
    screenFrom.value = buttonText;
}

// Convert Functionality:
function convertTemperature() {
    var chosenValue = document.getElementById("activeQuantity2");
    var answerValue = document.getElementById("answerInput2");
    var fromValue = document.getElementById("leftQuantity2");
    var toValue = document.getElementById("rightQuantity2");
    var answer = 0;
    // Celsius logic:
    if (fromValue.value == "Celsius" && toValue.value == "Celsius") {
        answer = parseFloat(chosenValue.value);
    }
    else if (fromValue.value == "Celsius" && toValue.value == "Kelvin") {
        answer = parseFloat(chosenValue.value) + 273.15;
    }
    else if (fromValue.value == "Celsius" && toValue.value == "Fahrenheit") {
        answer = (parseFloat(chosenValue.value) * (9/5)) + 32;
    }
    // Kelvin logic:
    if (fromValue.value == "Kelvin" && toValue.value == "Celsius") {
        answer = parseFloat(chosenValue.value) - 273.15;
    }
    else if (fromValue.value == "Kelvin" && toValue.value == "Kelvin") {
        answer = parseFloat(chosenValue.value);
    }
    else if (fromValue.value == "Kelvin" && toValue.value == "Fahrenheit") {
        answer = ((parseFloat(chosenValue.value) - 273.15) * (9/5)) + 32;
    }
    // Fahrenheit logic:
    if (fromValue.value == "Fahrenheit" && toValue.value == "Celsius") {
        answer = (parseFloat(chosenValue.value) - 32) * (5/9);
    }
    else if (fromValue.value == "Fahrenheit" && toValue.value == "Kelvin") {
        answer = ((parseFloat(chosenValue.value) - 32) * (5/9)) + 273.15;
    }
    else if (fromValue.value == "Fahrenheit" && toValue.value == "Fahrenheit") {
        answer = parseFloat(chosenValue.value);
    }
    answerValue.value = answer;
}