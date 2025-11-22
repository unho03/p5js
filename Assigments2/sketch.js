// Vị trí mắt (Cố định)
let eyeX1 = 267;
let eyeY1 = 143;
let eyeX2 = 327;
let eyeY2 = 143;

// Vị trí lông mày (Cố định)
let eyebrowX1 = 250;
let eyebrowX2 = 320;
let eyebrowY1 = 130;
let eyebrowY2 = 130;

function setup() {
  createCanvas(600, 400);
  noLoop(); // Dừng vòng lặp draw() vì hình ảnh là tĩnh, giúp tiết kiệm hiệu năng
}

function draw() {
  background(220);

  // --- VẼ NHÂN VẬT ---

  // Tai (Ears)
  fill('#E1B899');
  ellipse(225, 160, 30, 50);
  ellipse(375, 160, 30, 50);

  // Khuôn mặt (Face)
  noStroke();
  fill('#E1B899');
  ellipse(300, 150, 150, 200);

  // Tóc (Hair style)
  fill('black');
  arc(300, 120, 150, 150, PI, 0, CHORD);

  // Mắt (Eyes) - Lòng trắng
  fill("white");
  circle(270, 145, 20);
  circle(330, 145, 20);
  
  // Mắt (Eyes) - Con ngươi
  fill('black');
  circle(eyeX1, eyeY1, 10);
  circle(eyeX2, eyeY2, 10);

  // Mũi (Nose)
  fill('brown');
  quad(295, 150, 305, 150, 315, 190, 285, 190);

  // Miệng (Mouth)
  stroke(120);
  strokeWeight(3);
  noFill();
  arc(300, 200, 70, 35, 0, PI / 2);

  // Khuyên tai (Earrings)
  noStroke();
  fill('gold');
  circle(225, 160, 12); // Tròn trên tai
  circle(375, 160, 12);
  
  rect(216, 188, 10, 20); // Hình chữ nhật dưới
  
  stroke('magenta');
  strokeWeight(5);
  line(221, 180, 221, 188); // Dây nối

  // Lông mày (Eyebrows)
  noStroke();
  fill('brown');
  rect(eyebrowX1, eyebrowY1, 30, 5, 5);
  rect(eyebrowX2, eyebrowY2, 30, 5, 5);
}