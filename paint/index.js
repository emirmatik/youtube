const canvas = document.querySelector(".canvas");
const eraser = document.getElementById("eraser");
const colorPicker = document.getElementById("color-picker");
const sizePicker = document.getElementById("size-picker");
const ctx = canvas.getContext("2d");
let WIDTH = canvas.width;
let HEIGHT = canvas.height;
let radius = 5;
let color = "black";
let erase = false;
let canvasStartX;
let canvasStartY;
let xStart;
let yStart;

// draw canvas
ctx.fillStyle = "white"
ctx.fillRect(0,0,WIDTH,HEIGHT)

////////////////// EVENT LISTENERS //////////////////

canvas.addEventListener("mousemove", (e) => {
    canvasStartX= e.target.offsetLeft;
    canvasStartY= e.target.offsetTop;
    // when left click is active
    if (e.buttons == 1) {
        drawCircle(e.x,e.y)
        drawLine(xStart,yStart,e.x,e.y)
        xStart = e.x;
        yStart = e.y;
        eraseStyle();
    }
})

// delete starting point for drawLine function
canvas.addEventListener("mouseup", () => {
    xStart = null;
    yStart = null;
})

canvas.addEventListener("mousedown", (e) => {
    xStart = e.x;
    yStart = e.y;
    drawCircle(e.x,e.y)
})

eraser.addEventListener("click", () => {
    erase = !erase;
    eraseStyle();
})

colorPicker.addEventListener("input", (e) => color = e.target.value)

sizePicker.addEventListener("input", (e) => radius = e.target.value)


////////////////// FUNCTIONS  //////////////////

   
const drawCircle = (x,y) => {
    ctx.beginPath();
    ctx.arc(x - canvasStartX, y - canvasStartY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = erase ? "white" : color;
    ctx.fill();
}
    
const drawLine = (x1,y1,x2,y2) => {
    ctx.beginPath();
    ctx.moveTo(x1 - canvasStartX,y1 - canvasStartY);
    ctx.lineTo(x2 - canvasStartX,y2- canvasStartY);
    ctx.strokeStyle = erase ? "white" : color;
    ctx.lineWidth = radius * 2;
    ctx.stroke();
}
    
const eraseStyle = () => {
    if (erase) eraser.style.border = "1px solid tomato"; 
    else eraser.style.border = "1px solid black";
}