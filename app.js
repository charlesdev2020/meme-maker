const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
