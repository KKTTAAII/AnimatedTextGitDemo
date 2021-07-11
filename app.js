function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const letters = document.querySelector('h1')
const intervalId = setInterval(function () {
    letters.style.color = randomRGB();
}, 2000);