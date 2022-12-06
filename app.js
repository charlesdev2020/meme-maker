const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");

// Foreach 함수를 사용하기 위해 배열로 생성
const colorOptions = Array.from(
  document.getElementsByClassName("color-option") // HTMLCollection을 Return
);

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas"); // Javascript에서 Canvas element에 접근
const ctx = canvas.getContext("2d"); // Brush. Canvas에 그림을 그릴 때 사용
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

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
  //console.dir(event.target.dataset.color); // 색상 Hex 코드를 가져옴
  const colorValue = event.target.dataset.color; // Color : HTML의 data-*에서 *
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue; // color Input의 색상을 변경
}

function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onClearClick() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image(); // <img src="" />
  image.src = url; // 브라우저의 메모리를 가리키는 URL

  // Event Listener 추가
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Image가 Load 될 때, canvas에 이미지를 그림
    fileInput.value = null; // Image를 그릴 때, file Input의 Text를 비움
  };
}

function onDoubleClick(event) {
  const text = textInput.value;

  if (text != "") {
    ctx.save(); // 현재 상태, 색상, 스타일 등을 저장
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore(); // Save 상태의 버전으로 되돌림.
  }
}

function onSaveClick() {
  const url = canvas.toDataURL(); // Canvas에 그린 그림을 URL로 변환(base64로 인코딩됨)
  const a = document.createElement("a"); // <a href="" download
  a.href = url; // <a>태그의 href에 그림의 URL로 설정
  a.download = "myDrawing.png"; // 브라우저가 href에 있는 콘텐츠를 다운로드
  //console.log(a);
  a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); // canvas 영역 밖으로 나갈 때
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

// Foreach를 사용해 onColorClick 함수를 가진 ClickEventListener를 추가
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
clearBtn.addEventListener("click", onClearClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
