function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER); 
}

function draw() {
  let bgHue = (frameCount * 0.1) % 360;
  background(bgHue, 10, 100); 
  

  let speedFactor = map(mouseX, 0, width, 0.5, 3); 
  let time = frameCount * speedFactor;

  //GRID
  strokeWeight(2);
  stroke(0, 0, 0); //black on HSB

  line(60, 0, 60, 600);
  line(120, 0, 120, 600);
  line(180, 0, 180, 600);
  line(240, 0, 240, 600);
  line(300, 0, 300, 240);
  line(300, 360, 300, 600);
  line(360, 0, 360, 600); 
  line(420, 0, 420, 600);
  line(480, 0, 480, 600);
  line(540, 0, 540, 600);
  
  //duong ngang
  line(0, 60, 600, 60);
  line(0, 120, 600, 120);
  line(0, 180, 600, 180);
  line(0, 240, 600, 240);
  line(0, 300, 240, 300);
  line(360, 300, 600, 300);
  line(0, 360, 600, 360);
  line(0, 420, 600, 420);
  line(0, 480, 600, 480);
  line(0, 540, 600, 540);
  
  //duong vien bao quanh
  stroke(240, 100, 100); //Blue
  if (frameCount % 30 < 15) stroke(240, 100, 80); //animation
  
  line(599, 0, 599, 600);
  line(1,0,1,600);
  line(0, 1, 600, 1);
  line(0,599, 600, 599);
  
  noStroke();

  //animation scale of circle
  let pulse = map(sin(time * 0.05), -1, 1, 40, 60); 
  fill(0, 100, 100); //red (hue 0)
  
  circle(30, 30, pulse);
  circle(570, 30, pulse);
  circle(30, 570, pulse);
  circle(570, 570, pulse);

  //shaking triangles
  push();
  fill(120, 100, 100); //green (hue 120)
  //random shake
  let shakeX = random(-1, 1);
  let shakeY = random(-1, 1);
  translate(shakeX, shakeY);
  
  triangle(117, 63, 117, 117, 63, 117);
  triangle(63, 483, 117, 483, 117, 537);
  triangle(483, 483, 483, 537, 537, 483);
  triangle(483, 63, 483, 117, 537, 117);
  pop();
  
  //animation rotating quad
  push();
  translate(300, 300); //center
  rotate(time * 0.02); //roting on time
  fill(270, 100, 80); //purple
  
  //new address:
  quad(0, -59, 59, 0, 0, 59, -59, 0);
  pop();
  
  //animation small qud
  //random color: rainbow
  let squares = [
    {x: 300, y: 180}, 
    {x: 300, y: 420}, 
    {x: 180, y: 180}, 
    {x: 180, y: 300}, 
    {x: 180, y: 420}, 
    {x: 420, y: 180}, 
    {x: 420, y: 300}, 
    {x: 420, y: 420}  
  ];

  for (let i = 0; i < squares.length; i++) {
    push();
    translate(squares[i].x, squares[i].y);
    rotate(time * 0.03 + i); 
    //transition HSB
    let sqHue = (time * 2 + i * 30) % 360;
    fill(sqHue, 80, 100);
    square(0, 0, 70);
    pop();
  }
  
  //ellipses
  fill(60, 100, 100); //yellow
  let oscX = map(cos(time * 0.1), -1, 1, 30, 50); 
  let oscY = map(sin(time * 0.1), -1, 1, 40, 60); 

  ellipse(420, 240, oscX, 50);
  ellipse(420, 360, oscX, 50);
  
  ellipse(360, 180, 50, oscY);
  ellipse(240, 180, 50, oscY);
  
  ellipse(180, 240, oscX, 50);
  ellipse(180, 360, oscX, 50);
  
  ellipse(240, 420, 50, oscY);
  ellipse(360, 420, 50, oscY);
  
  //points
  stroke(240, 100, 100); //blue
  strokeWeight(20);
  let points = [
    [60, 60], [180, 60], [300, 60], [420, 60], [540, 60],
    [60, 180], [60, 300], [60, 420], [60, 540],
    [180, 540], [300, 540], [420, 540], [540, 540],
    [540, 180], [540, 300], [540, 420]
  ];
  

  for(let p of points) {
      if(random(1) > 0.95) stroke(random(360), 80, 100);
      else stroke(240, 100, 100);
      point(p[0], p[1]);
  }
  
  //ZIGZAG lines
  //gradient Effect
  strokeWeight(5);
  
  let lineHue = (frameCount * 2) % 360;
  stroke(lineHue, 100, 100);
  
  //line group 1
  line(60, 60, 120, 0);
  line(120, 0, 180, 60);
  line(180, 60, 240, 0);
  line(240,0, 300, 60);
  line(300, 60, 360, 0);
  line(360, 0, 420, 60);
  line(420, 60, 480, 0);
  line(480, 0, 540, 60);
  line(540, 60, 600, 120);
  
  stroke((lineHue + 30) % 360, 100, 100); //shift color
  //line group 2
  line(600, 120, 540, 180);
  line(540, 180, 600, 240);
  line(600, 240, 540, 300);
  line(540, 300, 600, 360);
  line(600, 360, 540, 420);
  line(540, 420, 600, 480);
  line(600, 480, 540, 540);
  
  stroke((lineHue + 60) % 360, 100, 100);
  //line group 3
  line(540, 540, 480, 600);
  line(480, 600, 420, 540);
  line(420, 540, 360, 600);
  line(360, 600, 300, 540);
  line(300, 540, 240, 600);
  line(240, 600, 180, 540);
  line(180, 540, 120, 600);
  line(120, 600, 60, 540);
  
  stroke((lineHue + 90) % 360, 100, 100);
  //line group 4
  line(60, 540, 0, 480);
  line(0, 480, 60, 420);
  line(60, 420, 0, 360);
  line(0, 360, 60, 300);
  line(60, 300, 0, 240);
  line(0, 240, 60, 180);
  line(60, 180, 0, 120);
  line(0, 120, 60, 60);
  
  //bid circle
  noFill();
  stroke(0, 0, 100);
  strokeWeight(3);
  
  let sw = map(sin(time * 0.1), -1, 1, 2, 8);
  strokeWeight(sw);
  
  circle(300, 300, 230);
  
  strokeWeight(5);
  circle(600, 0, 300);
  circle(0, 600, 300);
  circle(600, 600, 300);
  circle(0,0, 300);
  
  //bigest cirlce
  stroke(50, 100, 100); //gold/yellow
  strokeWeight(10 + sin(time * 0.2) * 5); 
  circle(300, 300, 450);
  
  //black rects
  strokeWeight(5);
  stroke(50, 100, 100); 
  fill(0);
  
  
  
  rect(115, 300, 50, 30);
  rect(300, 115, 30, 50);
  rect(485, 300, 50, 30);
  rect(300, 485, 30, 50);
}

//file GIF
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('abstract_art.gif', 10); 
  }
}