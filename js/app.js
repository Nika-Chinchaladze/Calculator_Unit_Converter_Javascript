// Clear Function:
function clearInput() {
    var screen = document.getElementById("result");
    var screenValue = screen.value;
    screen.value = screenValue.slice(0,screenValue.length-1);
}

// Display Function:
function displayButton(number) {
    var screen = document.getElementById("result");
    screen.value += number;
}

// Display Function For: * / +
function showOperationSign(sign) {
    var screen = document.getElementById("result");
    if (screen.value.includes("*") == true) {
        screen.value = screen.value;
    }
    else if (screen.value.includes("/") == true) {
        screen.value = screen.value;
    }
    else if (screen.value.includes("+") == true) {
        screen.value = screen.value;
    }
    else {
        screen.value += sign;
    }
}

// Display Function For: -
function showSubstract() {
    var screen = document.getElementById("result");
    if (screen.value.includes("*") == true) {
        screen.value = screen.value;
    }
    else if (screen.value.includes("/") == true) {
        screen.value = screen.value;
    }
    else if (screen.value.includes("+") == true) {
        screen.value = screen.value;
    }
    else if ((screen.value.match(/-/g) || []).length >= 2) {
        screen.value = screen.value;
    }
    else if (screen.value[screen.value.length - 1] == "-") {
        screen.value = screen.value;
    }
    else {
        screen.value += "-";
    }
}

// Common Round Function:
function roundNumber() {
    var screenNumber = document.getElementById("result");
    screenNumber.value = Math.round(parseFloat(screenNumber.value));
}

// Round Floor Function:
function floorNumber() {
    var screenNumber = document.getElementById("result");
    screenNumber.value = Math.floor(parseFloat(screenNumber.value));
}

// Round Ceil Function:
function ceilNumber() {
    var screenNumber = document.getElementById("result");
    screenNumber.value = Math.ceil(parseFloat(screenNumber.value));
}

// Find Percent Function:
function percentNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = parseFloat(screenValue.value) / 100;
    screenValue.value = screenValue.value.toString() + "%";
}

// x² Function:
function doubleNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = Math.pow(parseFloat(screenValue.value),2);
}

// √x Function:
function sqrtNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = Math.sqrt(parseFloat(screenValue.value));
}

// |x| Function:
function moduleNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = screenValue.value.toString();
    if (screenValue.value.includes("-")) {
        screenValue.value = parseFloat(screenValue.value) * (-1);
    }
    else {
        screenValue.value = screenValue.value;
    }
}

// 1/x Function:
function rotateNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = 1 / parseFloat(screenValue.value);
}

// x! Funtion:
function factorialNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = parseInt(screenValue.value) + 1;
    var answer = 1;
    for (var i = 1; i < screenValue.value; i++) {
        answer *= i;
    }
    screenValue.value = answer;
}

// ± Function:
function changeNumber() {
    var screenValue = document.getElementById("result");
    screenValue.value = parseFloat(screenValue.value) * (-1);
}

// Calculate Function:
function calculateOperation() {
    var screenValue = document.getElementById("result");
    screenValue.value = screenValue.value.toString();
    if (screenValue.value.includes("**")) {
        var myArray = screenValue.value.split("**");
        var first = parseInt(myArray[0]);
        var second = parseInt(myArray[1]);
        var answer = Math.pow(first, second);
        screenValue.value = answer;
    }
    else if (screenValue.value.includes("*")) {
        var myArray = screenValue.value.split("*");
        var answer = parseFloat(myArray[0]) * parseFloat(myArray[1]);
        screenValue.value = answer;
    }
    else if (screenValue.value.includes("/")) {
        var myArray = screenValue.value.split("/");
        if (myArray[1] == 0) {
            screenValue.value = "Zero Division!";
        }
        else {
            var answer = parseFloat(myArray[0]) / parseFloat(myArray[1]);
            screenValue.value = answer;
        }
    }
    else if (screenValue.value.includes("+")) {
        var myArray = screenValue.value.split("+");
        var answer = parseFloat(myArray[0]) + parseFloat(myArray[1]);
        screenValue.value = answer;
    }
    else if ((screenValue.value.match(/-/g) || []).length == 1) {
        var myArray = screenValue.value.split("-");
        var answer = parseFloat(myArray[0]) - parseFloat(myArray[1]);
        screenValue.value = answer;
    }
    else if ((screenValue.value.match(/-/g) || []).length == 2) {
        var myArray = screenValue.value.split("-");
        var answer = (parseFloat(myArray[1]) * (-1)) - parseFloat(myArray[2]);
        screenValue.value = answer;
    }
}