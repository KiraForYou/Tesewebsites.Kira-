function bmi () {
    var num1, num2, result;
    num1 = document.getElementById('firstnum').value;
    num1 = parseFloat(num1);

    num2 = document.getElementById('secondnum').value;
    num2 = parseFloat(num2);

    result = num1 / (num2 * num2);

    document.getElementById('five_result').innerHTML = result.toFixed(1);
}