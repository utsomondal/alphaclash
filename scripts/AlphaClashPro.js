function switchToPlayground() {
    hideElementById('scoreboard');
    hideElementById('home-Screen');
    showElementById('playground');
    // reset everything
    setElementValueById('current-score', 0);
    setElementValueById('current-life', 5);
    playGame();
}
function handleKeyPress(event) {
    const playerPressed = event.key;
    if (playerPressed === 'Escape') {
        gameOver();
        const lastAlphabet = getElementTextById('display-alphabet');
        removeBackgroundColor(lastAlphabet);
    }
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
        if (updatedLife === 0) {
            gameOver();
            const lastAlphabet = getElementTextById('display-alphabet');
            removeBackgroundColor(lastAlphabet);
        }
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