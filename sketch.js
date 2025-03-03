let input, slider, button, dropdown;
let isShaking = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.value("ET");
  
  slider = createSlider(28, 50, 32); // 創建滑桿，範圍從28到50，初始值為32
  slider.position(input.x + input.width + 10, 10); // 將滑桿放在文字框的右側
  
  button = createButton('Toggle Shake');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleShake);
  
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('選項');
  dropdown.option('淡江大學');
  dropdown.option('教科系');
  dropdown.option('筆記');
  dropdown.changed(goToLink);
  
  textFont('Arial'); // 設置字體為 Arial
}

function draw() {
  background('#a3b18a'); // 設置背景顏色為 a3b18a
  let txt = input.value();
  let repeatedTxt = txt.split('').join(' ');
  textAlign(CENTER, CENTER);
  textSize(slider.value()); // 根據滑桿的值設置文字大小
  textStyle(BOLD); // 設置文字為粗體
  fill(255); // 設置文字顏色為白色
  
  let lineHeight = 40; // 每行之間的間隔
  let y = 100; // 從y座標100開始

  for (; y < height; y += lineHeight) { // 顯示直到畫布底部
    for (let x = 0; x < width; x += textWidth(repeatedTxt) + 20) { // 顯示直到畫布右邊
      if (isShaking) {
        let shakeX = x + random(-5, 5);
        let shakeY = y + random(-5, 5);
        text(repeatedTxt, shakeX, shakeY);
      } else {
        text(repeatedTxt, x, y);
      }
    }
  }
}

function toggleShake() {
  isShaking = !isShaking;
}

function goToLink() {
  let selected = dropdown.value();
  if (selected === '第一周') {
    window.location.href = 'https://www.tku.edu.tw';
  } else if (selected === '第二周') {
    window.location.href = 'https://www.et.tku.edu.tw';
  } else if (selected === '第三周') {
    window.location.href = 'https://hackmd.io/@HSGKLoDOSMSkfc8lYd7CKw/SyXuQtMsye';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}