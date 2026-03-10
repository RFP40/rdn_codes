const result = document.getElementById("result");

function addNumber(number) {

    if (number === '.') {
        const parts = result.value.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];

        if (lastNumber.includes('.')) {
            return;
        }
    }

    result.value += number;
}

function addOperator(operator) {

    if (result.value === "") {
        return;
    }

    const lastChar = result.value.slice(-1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        return;
    }

    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function calculate() {

    const lastChar = result.value.slice(-1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        return;
    }

    result.value = eval(result.value);
}