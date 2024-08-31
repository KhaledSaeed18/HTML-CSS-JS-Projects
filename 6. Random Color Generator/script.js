const containerEl = document.querySelector('.container');
const bodyEl = document.getElementById('body');

for (let index = 0; index < 36; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container')

generateColors();

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;

        colorContainerEl.addEventListener('click', () => {
            console.log("#" + newColorCode);
            body.style.backgroundColor = "#" + newColorCode;

        })
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLen = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLen; index++) {
        const randNb = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randNb, randNb + 1);
    }
    return colorCode;
}

