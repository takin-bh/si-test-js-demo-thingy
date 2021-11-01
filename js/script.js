// Variables
var number1 = document.getElementById('number-1');
var number2 = document.getElementById('number-2');
var the_result = document.getElementById('the_result');
var calculate_button = document.getElementById('calculate');

console.log(number1, number2, the_result, calculate_button)

function outPutTheCurrentValue(theInputNumber, thePassedInValue) {
    console.log('number ' + theInputNumber + ' input value is changing.', thePassedInValue)
}



number1.addEventListener('change', function (e) {
    outPutTheCurrentValue(1, e.target.value)
});


number2.addEventListener('change', function (e) {
    outPutTheCurrentValue(2, e.target.value)
});


calculate_button.addEventListener('click', function () {
    var number1Value = number1.value;
    var number2Value = number2.value;

    the_result.innerHTML = number1Value * number2Value;
});