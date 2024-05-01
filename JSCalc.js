//store previous value
let oldVal = "";

//store new value/value we are working with
let newVal = "";

//store the math operator we are working with
let operator = "";

//store the final value after the calculation
let finalVal = "";

//store intermediary value
let intermediaryValue = "";

//function for storing and using the math operator
function mathButPress(mathSign) {
    //if no previous calculation done
    if (!finalVal) {
        oldVal = newVal;
        //reset newVal to allow new number to be stored
        newVal = "";
        //reset final value to 0
        finalVal = "";
        //store operator pressed
        operator = mathSign;
    } else {
        //if previously calculation done, continue from there
        oldVal = newVal;
        //reset newVal to allow new number to be stored
        newVal = "";
        //reset final value to 0
        finalVal = "";
        //store operator pressed
        operator = mathSign;
    }
    document.getElementById("entry").value = oldVal + mathSign;

}

//do final calculations and display results
function equalButPress(num) {
    //converting other types to float
    oldVal = parseFloat(oldVal);
    newVal = parseFloat(newVal);

    switch (operator) {
        //for addition
        case " + ":
            finalVal = oldVal + newVal;

            break;
        //for subtraction
        case " - ":
            finalVal = oldVal - newVal;

            break;
        //for multiplication
        case " * ":
            finalVal = oldVal * newVal;

            break;
        //for division
        case " / ":
            finalVal = oldVal / newVal;

            break;
        //deafult if no operator choosen 
        default:
            finalVal = newVal
    }
    //store final value as new value if needed to continue calculation
    newVal = finalVal
    document.getElementById("entry").value = finalVal

}

//reset all varaibles to empty or 0
function clearButPress() {
    let oldVal = "";

    let newVal = "";


    let operator = "";


    let finalVal = "";


    let intermediaryValue = "";

    document.getElementById("entry").value = "0";
}

//storing numbers accordingly when pressed
function numButPress(value) {
    //if previous calculation already done, continue from there
    if (finalVal) {
        //number pressed will be new value
        newVal = value;
        //final value reset to 0
        finalVal = "";
    }
    //if new calculation
    else {
        //number pressed will be set to new value
        newVal += value;
    }
    document.getElementById("entry").value = newVal;
}

//Store value displayed to use later
function copyButPress(num) {
    intermediaryValue = document.getElementById("entry").value;
}

//Paste previously stored value to display
function pasteButPress(num) {
    if (intermediaryValue) {
        document.getElementById("entry").value = intermediaryValue;
        newVal = intermediaryValue;
    }
}
