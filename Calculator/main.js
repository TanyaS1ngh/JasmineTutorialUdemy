function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);

    const num1=parseInt(numbers[0]);
    const num2=parseInt(numbers[1]);

    const operation = inputValue.match(expression);

    if(operation===null || Number.isNaN(num1) || Number.isNaN(num2)) {
        updateResult('Operation not recognised');
        return;
    }

    const calculator = new Calculator();
    calculator.add(num1);

    let result;
    switch(operation[0]) {
        case '+':
            result = calculator.add(num2);
            break;
        case '-':
            result = calculator.subtract(num2);
            break;
        case '*':
            result = calculator.multiply(num2);
            break;
        case '/':
            result = calculator.divide(num2);
            break;
    }
    // debugger;
    updateResult(result);
}


function updateResult(result) {
    const element = document.getElementById('result')

    if(element) {
        element.innerText = result;
    }
}
