//seleted element
const diceBtn = document.getElementById('roll-button');
const dice = document.getElementById("dice");
const rollList = document.querySelector('#roll-list')
let count = 1
function rollDice() {
    const random = Math.floor(Math.random() * 6) + 1;
    const rollRandom = rollDiceFace(random)
    dice.innerHTML = rollRandom;
    const li = document.createElement('li');
    const span = document.createElement('span')
    span.innerHTML = rollRandom;
    span.classList.add('roll')
    li.innerHTML = `Roll ${count++}`;
    li.classList.add('list-item')
    li.appendChild(span)
    rollList.appendChild(li)
}

function rollDiceFace(random) {
    switch(random) {
        case 1:
            return `&#9856;`;
            
        case 2:
            return `&#9857;`;
        case 3:
            return `&#9858;`;
        case 4:
            return `&#9859;`;
        case 5:
            return `&#9860;`;
        case 6:
            return `&#9861`;
        default:
            return ''
    }
}


diceBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dice.classList.add('roll-animation')
    setTimeout(() => {
        dice.classList.remove('roll-animation')
    }, 1000)
    rollDice()
})