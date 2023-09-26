const display = document.querySelector('.display > h2');
const result = document.querySelector('.result')
const numberKey = Array.from(document.querySelectorAll('.num-key > .key'));
const operatorKey = Array.from(document.querySelectorAll('.operator-key > .key'));
const clear = document.querySelector('.operator-key > .clear');



let firstNum;
let secondNum;
let total;

clear.addEventListener('click', () => {
    display.textContent = ''

    result.textContent = ''
}
)

let operator;
numberKey.forEach((numberKey) => {
    numberKey.addEventListener('click', () => {
        value = +(numberKey.textContent)

        getValue(value);
    })
})

operatorKey.forEach((operatorKey) => {
    operatorKey.addEventListener('click', () => {
        operator = operatorKey.textContent

        switch (operator) {
            case '+':
                if (display.textContent == '') {
                    console.log('okey its running');
                    break;
                }
                else if (result.textContent.includes('+')) {
                    secondNum = +display.textContent
                    result.textContent = firstNum + secondNum + "+"
                    firstNum = firstNum + secondNum;
                    display.textContent = ''

                }
                else if (!result.textContent.includes('+')) {

                    result.textContent = display.textContent + '+'
                    firstNum = +display.textContent
                    display.textContent = ''

                }

                else {

                    console.log('this is also working');
                }


                break;
            case '-':
                if (result.textContent.charAt(result.textContent.length - 1) == '+') {
                    result.textContent.charAt(result.textContent.length - 1) 
                }

                if (display.textContent == '') {
                    console.log('okey its running');
                    break;
                }
                else if (result.textContent.includes('-')) {
                    secondNum = +display.textContent
                    result.textContent = firstNum - secondNum + "-"
                    firstNum = firstNum - secondNum;
                    display.textContent = ''

                }
                else if (!result.textContent.includes('-')) {

                    result.textContent = display.textContent + '-'
                    firstNum = +display.textContent
                    display.textContent = ''

                }

                else {

                    console.log('this is also working');
                }

                break;

            default:

                break;
        }




    })
})


function getValue(value) {
    switch (value) {
        case 1:
            display.textContent += value
            break;
        case 2:
            display.textContent += value
            break;
        case 3:
            display.textContent += value
            break;
        case 4:
            display.textContent += value
            break;
        case 5:
            display.textContent += value
            break;
        case 6:
            display.textContent += value
            break;
        case 7:
            display.textContent += value
            break;
        case 8:
            display.textContent += value
            break;
        case 9:
            display.textContent += value
            break;
        case 0:
            display.textContent += value
            break;

        default:
            break;
    }

}
function sum() {

}
function sub(params) {

}
function multi(params) {

}
function devide(params) {

}
function calculate(params) {

}



