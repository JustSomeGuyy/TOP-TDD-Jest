function calculator(equation, num1, num2) {
    switch(equation) {
        case 'sum':
            return num1 + num2;
            break;
        case 'subtract':
            return num1 - num2;
            break;
        case 'multiply':
            return num1 * num2;
            break;
        case 'divide':
            return num1 / num2;
            break;
        default:
            return 'No math equation entered, please review input';
    }
}

module.exports = calculator;