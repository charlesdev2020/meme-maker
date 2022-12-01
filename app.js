const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(215, 200, 15, 100);
ctx.fillRect(310, 200, 15, 100);
ctx.fillRect(240, 200, 60, 100);
ctx.fillRect(240, 310, 15, 100);
ctx.fillRect(285, 310, 15, 100);

ctx.arc(270, 150, 40, 0, 1.5 * Math.PI); // 동쪽에서 시계 방향으로 돌아감
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.arc(270, 150, 40, 1.52 * Math.PI, 1.98 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(255, 140, 7, 0, 2 * Math.PI);
ctx.arc(285, 140, 7, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 170, 10, 0, Math.PI);
ctx.fill();
