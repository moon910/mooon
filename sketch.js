bplist00�_WebMainResource�	
^WebResourceURL_WebResourceTextEncodingName_WebResourceData_WebResourceMIMEType_WebResourceFrameName_file:///index.htmlUutf-8O.�<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'PingFang SC'; color: #000000; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
    span.s2 {font: 12.0px 'PingFang SC'; font-kerning: none}
    span.s3 {font: 12.0px Helvetica; font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">let rows = 12; // </span><span class="s2">行数</span></p>
<p class="p1"><span class="s1">let cols = 28; // </span><span class="s2">列数</span></p>
<p class="p1"><span class="s1">let noiseScale = 0.05; // </span><span class="s2">控制</span><span class="s1"> noise </span><span class="s2">函数变化速度的缩放因子</span></p>
<p class="p1"><span class="s1">let noiseOffset = 0; // </span><span class="s2">用于更新</span><span class="s1"> noise </span><span class="s2">函数的偏移量</span></p>
<p class="p1"><span class="s1">let filledCells = []; // </span><span class="s2">用于记录被填充的单元格</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">function setup() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>createCanvas(800, 300); // </span><span class="s2">创建画布</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>background(255); // </span><span class="s2">设置背景为白色</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>stroke(0); // </span><span class="s2">设置线条颜色为黑色</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>strokeWeight(1); // </span><span class="s2">设置线条粗细</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// </span><span class="s2">初始化</span><span class="s1"> filledCells </span><span class="s2">数组</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; rows; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>filledCells.push(new Array(cols).fill(false));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">function draw() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>background(255); // </span><span class="s2">每帧清除上一帧的内容</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>// </span><span class="s1">动态计算每个单元格的宽度和高度</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let columnWidths = calculateDynamicValues(cols, width, noiseOffset, 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let rowHeights = calculateDynamicValues(rows, height, noiseOffset, 2);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>// </span><span class="s1">绘制动态变化的水平线和垂直线</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let x = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let j = 0; j &lt; cols; j++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let y = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; rows; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>// </span><span class="s2">绘制单元格边框</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>stroke(0); // </span><span class="s2">设置边框颜色为黑色</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>noFill(); // </span><span class="s2">不填充</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>rect(x, y, columnWidths[j], rowHeights[i]);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>// </span><span class="s1">如果该单元格被填充，则绘制荧光绿色</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (filledCells[i][j]) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>fill(0, 255, 0, 128); // </span><span class="s2">荧光绿色，半透明</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>noStroke(); // </span><span class="s2">不绘制边框</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>rect(x, y, columnWidths[j], rowHeights[i]); // </span><span class="s2">填充单元格</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>y += rowHeights[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>x += columnWidths[j];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>// </span><span class="s1">更新</span><span class="s3"> noise </span><span class="s1">函数的偏移量，使表格动态变化</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>noiseOffset += 0.01; // </span><span class="s2">调整偏移量增量以控制变化速度</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">function mouseDragged() {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>// </span><span class="s1">如果鼠标左键被按下</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>if (mouseIsPressed) {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>// </span><span class="s1">动态计算每个单元格的宽度和高度</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let columnWidths = calculateDynamicValues(cols, width, noiseOffset, 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let rowHeights = calculateDynamicValues(rows, height, noiseOffset, 2);</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>// </span><span class="s1">检测鼠标所在的单元格位置</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let xSum = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (let j = 0; j &lt; cols; j++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>xSum += columnWidths[j];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (mouseX &lt; xSum) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let ySum = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (let i = 0; i &lt; rows; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>ySum += rowHeights[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>if (mouseY &lt; ySum) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// </span><span class="s2">标记该单元格为已填充</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>filledCells[i][j] = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return; // </span><span class="s2">退出函数</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3">// </span><span class="s1">计算动态值的函数，确保总和为指定值</span></p>
<p class="p1"><span class="s1">function calculateDynamicValues(count, total, offset, variance) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let values = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let totalNoise = 0;</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// </span><span class="s2">为每个单元格生成独立的</span><span class="s1"> noise </span><span class="s2">值</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; count; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let noiseValue = noise(i * noiseScale + offset) * variance; // </span><span class="s2">乘以方差系数</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>values.push(noiseValue);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>totalNoise += noiseValue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>// </span><span class="s1">根据总和调整每个值</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>let normalizedValues = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (let i = 0; i &lt; count; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>normalizedValues.push((values[i] / totalNoise) * total);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>return normalizedValues;</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
Ytext/htmlP    ( 7 U g } � � �/�/�                           /�