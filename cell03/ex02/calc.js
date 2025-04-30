setInterval(()=>{alert("Please, use me...")}, 30000)

function calculator() {
    operator = document.getElementById("operator").value;

    first_num = document.getElementById("first_number").value;
    second_num = document.getElementById("second_number").value;
    first_num = check_int(first_num);
    second_num = check_int(second_num);
    if (first_num === false || second_num === false) {
        return alert("Error :(");
    }

    if (operator == "+") {
        result = add(first_num,second_num);
        console.log(result);
        return alert(result);
    } else if (operator == "-") {
        result = sub(first_num,second_num);
        console.log(result);
        return alert(result);
    } else if (operator == "*") {
        result = multi(first_num,second_num);
        console.log(result);
        return alert(result);
    } else if (operator == "/") {
        result = divide(first_num,second_num);
        if (isFinite(result)) {
            console.log(result);
            return alert(result);
        } else {
            console.log(result);
            return alert("It's over 9000!");
        }
    } else {
        result = modulo(first_num,second_num);
        if (isFinite(result)) {
            console.log(result);
            return alert(result);
        } else {
            console.log(result);
            return alert("It's over 9000!");
        }
    }
}

function check_int(number) {
    let num = parseInt(number);

    if (isNaN(num) || num < 0) {
        return false;
    } else {
        return num;
    }
}

function add(num1,num2) {
    result = num1 + num2;
    return result;
}

function sub(num1,num2) {
    result = num1 - num2;
    return result;
}

function multi(num1,num2) {
    result = num1 * num2;
    return result;
}

function divide(num1,num2) {
    result = num1 / num2;
    return result;
}

function modulo(num1,num2) {
    result = num1 % num2;
    return result;
}