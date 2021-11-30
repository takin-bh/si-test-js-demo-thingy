// Variables
var number1 = document.getElementById('number-1');
var number2 = document.getElementById('number-2');
var the_result = document.getElementById('the_result');
var calculate_button = document.getElementById('calculate');
var operator_options = document.getElementById('operator_options');
var the_current_operator_type = 'add';


const theLastRecordedCalculation = localStorage.getItem('theSavedValue');
const theLastNumber1InputValue = localStorage.getItem('theLastNumber1InputValue');
const theLastNumber2InputValue = localStorage.getItem('theLastNumber2InputValue');

let number1Value;
let number2Value;

if (theLastNumber1InputValue) {
    number1Value = theLastNumber1InputValue;
} else {
    number1Value = 0;
}

number1.value = number1Value


if (theLastNumber2InputValue) {
    number2Value = theLastNumber2InputValue;
    number2.value = theLastNumber2InputValue
} else {
    number2Value = 0;
}

number2.value = number2Value


if (theLastRecordedCalculation) {
    the_result.innerHTML = theLastRecordedCalculation;
} else {
    the_result.innerHTML = "TBD";
}

function calculateTheValue(first_field_to_calculate, second_field_to_calculate, operator_type) {
    if (operator_type === 'add') {
        return first_field_to_calculate + second_field_to_calculate;
    } else if (operator_type === 'subtract') {
        return first_field_to_calculate - second_field_to_calculate;
    } else if (operator_type === 'divide') {
        return first_field_to_calculate / second_field_to_calculate;
    } else if (operator_type === 'multiply') {
        return first_field_to_calculate * second_field_to_calculate;
    } else {
        return;
    }
}

function outputTheCorrectValue(first_field_value, second_field_value, operator) {
    var theOperationValue = calculateTheValue(first_field_value, second_field_value, operator);


    localStorage.setItem('theSavedValue', theOperationValue);

    the_result.innerHTML = theOperationValue;
}

operator_options.addEventListener('change', function (e) {
    the_current_operator_type = e.target.value;
});

calculate_button.addEventListener('click', function () {

    if (number1.value) {
        number1Value = parseInt(number1.value);
        localStorage.setItem('theLastNumber1InputValue', number1Value);
    }

    if (number2.value) {
        number2Value = parseInt(number2.value);
        localStorage.setItem('theLastNumber2InputValue', number2Value);
    }

    outputTheCorrectValue(number1Value, number2Value, the_current_operator_type);
});
