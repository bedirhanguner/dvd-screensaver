const section = document.querySelector("section");
const logo = document.querySelector(".logo");
const sound = document.getElementById("mysound");
const fps = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

let xPosition = 10;
let yPosition = 10;
let xVelocity = 5;
let yVelocity = 5;

function render() {
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
}

setInterval(() => {
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xVelocity = -xVelocity;
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        yVelocity = -yVelocity;
    }
    if(xPosition + logo.clientWidth >= window.innerWidth && yPosition + logo.clientHeight >= window.innerHeight
        || xPosition <= 0 && yPosition <= 0 
        || xPosition + logo.clientWidth >= window.innerWidth && yPosition <= 0 
        || xPosition <= 0 && yPosition + logo.clientHeight >= window.innerHeight){        
            sound.play();
            sound.muted = false;     
        }
    xPosition += xVelocity;
    yPosition += yVelocity;
    render();
}, 1000 / fps)

window.addEventListener("resize", () => {
    xPosition = 10;
    yPosition = 10;

    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
})