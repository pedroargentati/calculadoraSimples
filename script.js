var numberOne = "0"
var operation = null;
var numberTwo = ""

function incluirDigito(digit) {
    if (numberTwo && operation && clickedOnSame) {
        clickedOnSame = false
        limpar()
        numberOne = digit
        showOnDisplay(numberOne)
        return;
    }

    if (operation !== null) {
        numberTwo += digit
        showOnDisplay(numberTwo)
    } else {
        if (numberOne === "0") {
            numberOne = digit
        } else {
            numberOne += digit
        }
        showOnDisplay(numberOne)
    }
}

var clickedOnSame = false;

function finalizarCalculo() {
    clickedOnSame = true
    var result = calcular()
    numberOne = result
    showOnDisplay(numberOne)
}

function obterPorcento() {
    if (!numberTwo) {
        limpar()
        showOnDisplay(numberOne)
    } else {
        if (operation === '+' || operation === '-') {
            var porcento = numberOne * numberTwo / 100
        } else {
            var porcento = numberTwo / 100
        }

        var porcento = numberOne * numberTwo / 100
        numberTwo = porcento
        showOnDisplay(numberTwo)
    }
}

function calcular() {
    var numberCalculated = 0
    var _numberOne = parseFloat(numberOne)
    var _numberTwo = parseFloat(numberTwo)
    switch (operation) {
        case '+':
            numberCalculated = _numberOne + _numberTwo
            break
        case '-':
            numberCalculated = _numberOne - _numberTwo
            break
        case '*':
            numberCalculated = _numberOne * _numberTwo
            break
        case '/':
            numberCalculated = _numberOne / _numberTwo
            break
    }
    return numberCalculated;
}

function iniciarCalculo(simbolo) {
    if (clickedOnSame) {
        clickedOnSame = false
        numberTwo = ''
    }

    if (operation === null || numberTwo === '') {
        operation = simbolo
    } else {
        var result = calcular()
        numberOne = result
        operation = simbolo
        numberTwo = ''
        showOnDisplay(numberOne)
    }
}

function incluirPonto() {
    if (operation && numberTwo === '') {
        numberTwo = '0.'
    } else if (operation && numberTwo) {
        numberTwo += '.'
    } else {
        numberOne += '.'
    }
}

function limpar() {
    numberOne = '0'
    operation = null
    numberTwo = ''
    showOnDisplay(numberOne)

}

function showOnDisplay(value) {
    var valorStr = value.toString()
    if (valorStr.length > 9) {
        valorStr = parseFloat(value).toExponential(5)
    }
    document.querySelector('#display').innerHTML = value

}