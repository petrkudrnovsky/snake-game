// listeners
document.addEventListener("keydown", keyPush);

// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// player
const snakeSize = 50;
let snakeSpeed = 5;
let snakePosX = 0;
let snakePosY = canvas.height/2 - snakeSize/2
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "black";
ctx.fillRect(snakePosX, snakePosY, snakeSize, snakeSize);

// loop 
function gameLoop() {
    drawStuff();
    // moveStuff();
    requestAnimationFrame(gameLoop);
}

gameLoop();

function moveStuff() {
    snakePosX += snakeSpeed;

    if(snakePosX > canvas.width) {
        snakePosX = 0;
    }
}

function drawStuff() {
    rectangle("white", 0, 0, canvas.width, canvas.height);
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);
}

// drawing rectangle
function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// keyboarf
function keyPush(event) {
    switch(event.key) {
        case "ArrowUp": 
            snakePosY -= snakeSpeed;
            break;
        case "ArrowDown": 
            snakePosY += snakeSpeed;
            break;
        case "ArrowRight": 
            snakePosX += snakeSpeed;
            break;
        case "ArrowLeft": 
            snakePosX -= snakeSpeed;
            break;

    }
}