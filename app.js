const colorOptions = Array.from(
  document.getElementsByClassName("color-option") // HTMLCollection 배열 생성
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 5;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    // 마우스를 누른 채로 움직이면 Drawing
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  // 마우스를 누른 상태가 아니면 좌표 이동
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
  isPainting = true;
}

function cancelPainting(event) {
  ctx.beginPath();
  isPainting = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  console.dir(event.target.dataset.color); // 색상 Hex 코드를 가져옴
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue; // color Input의 색상을 변경
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); // canvas 영역 밖으로 나갈 때

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
