document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    function calculate() {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }

    function updateDisplay(value) {
        display.textContent = value || '0';
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.classList.contains('operator')) {
                if (operand1 === '') {
                    operand1 = currentInput;
                } else if (operand2 !== '') {
                    operand1 = calculate().toString();
                    operand2 = '';
                }
                operator = value;
                currentInput = '';
                updateDisplay(operator);
            } else if (button.classList.contains('equals')) {
                operand2 = currentInput;
                updateDisplay(calculate());
                operand1 = display.textContent;
                operand2 = '';
                currentInput = '';
            } else if (button.classList.contains('clear')) {
                operand1 = '';
                operand2 = '';
                operator = '';
                currentInput = '';
                updateDisplay();
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });
});

