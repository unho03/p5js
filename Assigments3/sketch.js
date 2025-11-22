// Khai báo biến toàn cục
let a = 100;
let b = 10;
let c = 10;

// Vị trí mắt (Eye address)
let eyeX1 = 267;
let eyeY1 = 143;
let eyeX2 = 327;
let eyeY2 = 143;

// Vị trí lông mày (Eyebrow address)
let eyebrowX1 = 250;
let eyebrowX2 = 320;
let eyebrowY1 = 130;
let eyebrowY2 = 130;

function setup() {
  createCanvas(600, 400);
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
  
  // Mắt (Eyes) - Con ngươi (Di chuyển được)
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

  // Lông mày (Eyebrows) - (Di chuyển được bằng phím)
  noStroke();
  fill('brown');
  rect(eyebrowX1, eyebrowY1, 30, 5, 5);
  rect(eyebrowX2, eyebrowY2, 30, 5, 5);

  // --- XỬ LÝ TƯƠNG TÁC CHUỘT ---
  if (mouseIsPressed) {
    // 1. Hiệu ứng rơi đồ vật
    strokeWeight(5);
    stroke('yellow');
    fill('red');
    circle(a, b, c); // Hình tròn đỏ
    
    c += 5; // Tăng kích thước

    stroke("white");
    fill("purple");
    ellipse(a, b, 30, c); // Hình elip tím
    
    b += 7; // Tăng tốc độ rơi (y)

    // 2. Di chuyển mắt xuống dưới (buồn ngủ/chóng mặt)
    eyeY1 += 0.7; // Tăng tốc độ một chút để dễ nhìn thấy (gốc 0.07)
    eyeY2 += 0.7;

    // 3. Kiểm tra biên giới hạn
    // Nếu vật rơi quá màn hình, reset lại tất cả
    if (b > height) {
      // Reset vật rơi
      b = 10;
      c = 10;
      // Reset mắt
      eyeX1 = 267;
      eyeY1 = 143;
      eyeX2 = 327;
      eyeY2 = 143;
    }
  } else {
    // Khi thả chuột: Reset mọi thứ về vị trí ban đầu
    b = 10;
    c = 10;
    eyeX1 = 267;
    eyeY1 = 143;
    eyeX2 = 327;
    eyeY2 = 143;
  }

  // --- XỬ LÝ TƯƠNG TÁC BÀN PHÍM ---
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      eyebrowX1 -= 5;
      eyebrowX2 -= 5;
    } else if (keyCode === RIGHT_ARROW) {
      eyebrowX1 += 5;
      eyebrowX2 += 5;
    } else if (keyCode === UP_ARROW) {
      eyebrowY1 -= 5;
      eyebrowY2 -= 5;
    } else if (keyCode === DOWN_ARROW) {
      eyebrowY1 += 5;
      eyebrowY2 += 5;
    } else if (key === 's' || key === 'S') {
      // Lưu ảnh động GIF 5 giây
      saveGif('myCharacter', 5);
    }
  }
}