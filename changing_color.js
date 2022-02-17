const button = document.querySelector('button')
const h1 = document.querySelector('#title')
var executed = false

const createNewButt = () => {
    for (let i = 0; i < 3; i++) {
        const newBut = document.createElement('BUTTON')
        newBut.append('Click Me and i will change my backgroundColor')
        const fieldsForButtons = document.querySelector('#fieldsForButtons')
        newBut.style.height = '12rem';
        newBut.style.id = 'buttsForWinning';
        fieldsForButtons.append(newBut)
        gettingFunciton()
        executed = true
    }
}

button.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    this.style.color = makeRandomColor();
    h1.innerText = newColor
    if (executed === false) { createNewButt() }

})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}


function gettingFunciton() {
    const buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', () => {
            button.style.backgroundColor = makeRandomColor();
            button.style.color = makeRandomColor();
        })
    }
}

// function colorize() {
//     this.style.backgroundColor = makeRandomColor();
// }