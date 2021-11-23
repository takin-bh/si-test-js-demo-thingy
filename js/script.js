// Variables
var number1 = document.getElementById('number-1');
var number2 = document.getElementById('number-2');
var the_result = document.getElementById('the_result');
var calculate_button = document.getElementById('calculate');
var operator_options = document.getElementById('operator_options');
var the_current_operator_type = 'add';
var number1Value = 0;
var number2Value = 0;

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

    the_result.innerHTML = theOperationValue;
}

operator_options.addEventListener('change', function (e) {
    the_current_operator_type = e.target.value;
});

calculate_button.addEventListener('click', function () {

    if (number1.value) {
        number1Value = parseInt(number1.value);
    }

    if (number2.value) {
        number2Value = parseInt(number2.value);
    }

    outputTheCorrectValue(number1Value, number2Value, the_current_operator_type);
});
