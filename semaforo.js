const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAuto();
    turnOn[event.target.id]();
}

const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAuto = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = './luzes/luz Vermelha.png',
    'yellow': () => img.src = './luzes/luz Amarela.png',
    'green': () => img.src = './luzes/luz Verde.png',
    'auto': () => intervalId = setInterval(changeColor, 1000)
}
buttons.addEventListener('click', trafficLight);