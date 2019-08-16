const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#black";
ctx.lineWidth = 1.0;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        console.log("creting path in ", x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        console.log("creating line in ", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseUp", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);