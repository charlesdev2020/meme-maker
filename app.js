const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

const colors = [
  "#C5D9F1",
  "#FFFF00",
  "#D8E4BC",
  "#D9D9D9",
  "#FCD5B4",
  "#FCD5B4",
  "#FF0000",
  "#808080",
  "#808080",
  "#1E90FF",
  "#FFD700",
  "#FF6347",
];

ctx.lineWidth = 2;
function onMove(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

canvas.addEventListener("mousemove", onMove);
