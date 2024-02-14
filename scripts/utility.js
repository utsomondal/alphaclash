function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomIndex = Math.round(Math.random() * alphabets.length);
    const alphabet = alphabets[randomIndex];
    return alphabet;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}