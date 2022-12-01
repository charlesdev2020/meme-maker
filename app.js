const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

ctx.rect(150, 150, 100, 100);
ctx.fill();
ctx.rect(250, 250, 100, 100);
ctx.fillStyle = "red";
// setTimeout(() => {
//   ctx.fill();
// }, 3000);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath(); // Path 분리하여 새 경로로 시작
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 50); // 브러쉬의 출발점을 이동
ctx.lineTo(150, 50); // Line 그리기
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.strokeStyle = "black";
ctx.stroke();
