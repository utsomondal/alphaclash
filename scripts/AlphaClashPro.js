function switchToPlayground() {
    hideElementById('home-Screen');
    showElementById('playground');
    playGame();
}
function handleKeyPress(event) {
    const playerPressed = event.key;
    const displayAlphabet = document.getElementById('display-alphabet');
    const expectedAlphabet = displayAlphabet.innerText.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);
        removeBackgroundColor(expectedAlphabet);
        playGame();
    } else {
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);
    }
}
document.addEventListener('keyup', handleKeyPress);
// continue game
function playGame() {
    const alphabet = getARandomAlphabet();
    const displayAlphabet = document.getElementById('display-alphabet');
    displayAlphabet.innerText = alphabet;
    displayAlphabet.classList.add('uppercase');
    setBackgroundColor(alphabet);
}