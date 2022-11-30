const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);
ctx.strokeRect(200, 100, 50, 50);
