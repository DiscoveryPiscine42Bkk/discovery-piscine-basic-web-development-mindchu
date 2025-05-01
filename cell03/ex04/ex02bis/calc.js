$(document).ready(function() {
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);

    $('#calculate').click(function() {
        var operator = $('#operator').val();
        var first_num_str = $('#first_number').val();
        var second_num_str = $('#second_number').val();

        var first_num = checkInt(first_num_str);
        var second_num = checkInt(second_num_str);

        if (first_num === false || second_num === false) {
            return alert("Error :(");
        }

        var result;
        switch (operator) {
            case '+':
                result = add(first_num, second_num);
                break;
            case '-':
                result = subtract(first_num, second_num);
                break;
            case '*':
                result = multiply(first_num, second_num);
                break;
            case '/':
                result = divide(first_num, second_num);
                if (!isFinite(result)) {
                    console.log(result);
                    return alert("It's over 9000!");
                }
                break;
            case '%':
                result = modulo(first_num, second_num);
                if (!isFinite(result)) {
                    console.log(result);
                    return alert("It's over 9000!");
                }
        }
        console.log(result);
        alert(result);
    });

    function checkInt(number) {
        var num = parseInt(number);
        return (isNaN(num) || num < 0) ? false : num;
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function modulo(num1, num2) {
        return num1 % num2;
    }
});