let equation = '';
let result = '';

function updateDisplay() {
    document.getElementById('equation').textContent = equation;
    document.getElementById('result').textContent = result;
}

function handleClick(value) {
    if (value === '=') {
        try {
            // Replace 'x' with '*' for multiplication
            result = eval(equation.replace(/x/g, '*')).toString();
        } catch (error) {
            result = 'Error';
        }
    } else if (value === 'C') {
        equation = '';
        result = '';
    } else if (value === 'backspace') {
        equation = equation.slice(0, -1);
    } else {
        equation += value;
    }
    updateDisplay();
}

// Initialize display
updateDisplay();