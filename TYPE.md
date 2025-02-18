let rows = 12; // 行数

let cols = 28; // 列数

let noiseScale = 0.05; // 控制 noise 函数变化速度的缩放因子

let noiseOffset = 0; // 用于更新 noise 函数的偏移量

let filledCells = []; // 用于记录被填充的单元格



function setup() {

  createCanvas(800, 300); // 创建画布

  background(255); // 设置背景为白色

  stroke(0); // 设置线条颜色为黑色

  strokeWeight(1); // 设置线条粗细



  // 初始化 filledCells 数组

  for (let i = 0; i < rows; i++) {

    filledCells.push(new Array(cols).fill(false));

  }

}



function draw() {

  background(255); // 每帧清除上一帧的内容



  // 动态计算每个单元格的宽度和高度

  let columnWidths = calculateDynamicValues(cols, width, noiseOffset, 2);

  let rowHeights = calculateDynamicValues(rows, height, noiseOffset, 2);



  // 绘制动态变化的水平线和垂直线

  let x = 0;

  for (let j = 0; j < cols; j++) {

    let y = 0;

    for (let i = 0; i < rows; i++) {

      // 绘制单元格边框

      stroke(0); // 设置边框颜色为黑色

      noFill(); // 不填充

      rect(x, y, columnWidths[j], rowHeights[i]);



      // 如果该单元格被填充，则绘制荧光绿色

      if (filledCells[i][j]) {

        fill(0, 255, 0, 128); // 荧光绿色，半透明

        noStroke(); // 不绘制边框

        rect(x, y, columnWidths[j], rowHeights[i]); // 填充单元格

      }



      y += rowHeights[i];

    }

    x += columnWidths[j];

  }



  // 更新 noise 函数的偏移量，使表格动态变化

  noiseOffset += 0.01; // 调整偏移量增量以控制变化速度

}



function mouseDragged() {

  // 如果鼠标左键被按下

  if (mouseIsPressed) {

    // 动态计算每个单元格的宽度和高度

    let columnWidths = calculateDynamicValues(cols, width, noiseOffset, 2);

    let rowHeights = calculateDynamicValues(rows, height, noiseOffset, 2);



    // 检测鼠标所在的单元格位置

    let xSum = 0;

    for (let j = 0; j < cols; j++) {

      xSum += columnWidths[j];

      if (mouseX < xSum) {

        let ySum = 0;

        for (let i = 0; i < rows; i++) {

          ySum += rowHeights[i];

          if (mouseY < ySum) {

            // 标记该单元格为已填充

            filledCells[i][j] = true;

            return; // 退出函数

          }

        }

      }

    }

  }

}



// 计算动态值的函数，确保总和为指定值

function calculateDynamicValues(count, total, offset, variance) {

  let values = [];

  let totalNoise = 0;



  // 为每个单元格生成独立的 noise 值

  for (let i = 0; i < count; i++) {

    let noiseValue = noise(i * noiseScale + offset) * variance; // 乘以方差系数

    values.push(noiseValue);

    totalNoise += noiseValue;

  }



  // 根据总和调整每个值

  let normalizedValues = [];

  for (let i = 0; i < count; i++) {

    normalizedValues.push((values[i] / totalNoise) * total);

  }



  return normalizedValues;

}
