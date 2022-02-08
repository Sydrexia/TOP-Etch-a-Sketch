const gameSpace = document.querySelector('#content')

for (i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = 'auto';
    newDiv.style.width = 'auto';
    newDiv.addEventListener('mousedown', () => {
        newDiv.addEventListener('mousemove', () => {
            newDiv.style['background-color'] = 'black';
        });
    });
    // newDiv.addEventListener('mouseup', () => {
    //     newDiv.removeEventListener('mousemove');
    // })
    // newDiv.style.border = '2px solid red'
    gameSpace.appendChild(newDiv);
}