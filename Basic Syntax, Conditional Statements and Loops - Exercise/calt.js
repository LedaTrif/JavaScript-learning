function calc(number, operator, number2) {
    let sum;
    switch (operator) {
        case '+':
            sum= number + number2;
            break;
        case '-':
            sum= number - number2;
            break;
        case '/':
            let=number / number2;
            break;
}

console.log(sum.toFixed(2));
}

calc(5, "+", 10)