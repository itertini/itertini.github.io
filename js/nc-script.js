const userInput = document.querySelector("#user-input");
const output = document.querySelector("#output");
const result = document.querySelector("#result");
const provider = document.querySelector('#provider');
const check = document.querySelector("#check-btn");
const clear = document.querySelector("#clear-btn");

check.addEventListener('click', checkNumber);
clear.addEventListener('click', clearOutput);

function checkNumber() {
    let number = userInput.value;
    // const phoneRegex = /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    // US Regex
    // const phoneRegex =  /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$

    // Austria Regex
    const phoneRegex = /^(?:\+43|0)(?:660|664|676|670|677|678|663|665|680|681|688|650|651|699)[0-9]{7,9}$/;

    if (number === '' ) {
        result.innerHTML = "Please provide a phone number";
        result.style.color = "red"
    } else {
        if (phoneRegex.test(number)) {
            const providerName = getProvider(number);
            result.textContent = `Valid number from Austria: ${number}`;
            provider.textContent = `Provider: ${providerName}`
            output.style.color = "green"
        } else {
            result.textContent = `Invalid number from Austria: ${number}`;
            output.style.color = "red"
        }
    }

}

function clearOutput() {
    userInput.value = "";
    result.textContent = "";
    provider.textContent = "";
}

function getProvider(number) {
    const providers = {
        'A1': [ '664', '680' ],
        'T-Mobile': [ '670', '677', '678', '676' ],
        'Drei': [ '660', '663', '665','688' ],
        'Yesss!': [ '681'],
        'tele.ring': [ '650', '651' ]
    }
    const providerNumber = number.startsWith('+') ? number.substring(3, 6) : number.substring(1, 4);
    for (let provider in providers) {
        if (providers[provider].includes(providerNumber)) {
            console.log(provider);
            return provider;
       }
    }
    return null;
}