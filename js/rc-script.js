const form = document.querySelector('#form');
const convertBtn = document.querySelector('#convert-btn');
const numStr = document.querySelector('#number');
const output = document.querySelector('#output');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInput();
})

convertBtn.addEventListener('click', () => {
    handleInput();
})

function handleInput() {
    let inputNumber = parseInt(numStr.value.replace(" ", ""));
    if (inputNumber > 3999) {
        output.textContent = 'Please enter a number less than or equal to 3999'
        output.style.display = 'block';
    } else if (inputNumber < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1'
        output.style.display = 'block';
    } else if (!numStr.value || numStr.value.match(/[e.]/g)) {
        output.textContent = 'Please enter a valid number'
        output.style.display = 'block';
    } else {
        convertToRoman(inputNumber);
    }
}

function convertToRoman(number) {
    let roman = '';
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        for (let numeral in romanNumerals) {
            while (romanNumerals[numeral] <= number) {
                number -= romanNumerals[numeral];
                roman += numeral
            }
        }
        output.textContent = roman;
        output.style.display = 'block';
}



