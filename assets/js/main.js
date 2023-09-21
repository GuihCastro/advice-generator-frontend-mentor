const diceButton = document.getElementById('dice-btn');
let adviceNumber = document.getElementById('advice-number');
let advice = document.getElementById('advice');

diceButton.addEventListener('click', () => {
    getAdviceNumber();
    getAdviceText();
});

async function generateAdvice() {
        const response = await fetch('https://api.adviceslip.com/advice');
        return response.json();
}

async function getAdviceText() {
    const adviceContent = await generateAdvice();
    const adviceText = adviceContent.slip.advice;
    advice.innerHTML = `"${adviceText}"`; 
}

async function getAdviceNumber() {
    const adviceContent = await generateAdvice();
    const adviceId = adviceContent.slip.id;
    adviceNumber.innerHTML = adviceId; 
}

getAdviceNumber();
getAdviceText();