const gameSpace = document.querySelector('#content');
const nodes = gameSpace.childNodes;
let mouseDown = false;

gameSpace.addEventListener('mousedown', () => {
    mouseDown = true;
})

gameSpace.addEventListener('mouseup', () => {
    mouseDown = false;
})

function colorIn(event) {
    if (mouseDown === true) {
        event.target.style['background-color'] = 'black';
    }
}

for (i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = 'auto';
    newDiv.style.width = 'auto';
    newDiv.classList.add('grid-div');
    newDiv.addEventListener('mouseover', (colorIn));
    gameSpace.appendChild(newDiv);
}