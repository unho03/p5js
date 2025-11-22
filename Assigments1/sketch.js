function setup(){
  createCanvas(600, 600);
  background(255, 228, 255);
  strokeWeight(2); 
  
//새로 줄 (Vertical lines)
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
  
//가로 줄 (Horizontal lines)
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
  
//주변줄 (Border lines)
  stroke(0, 0, 255);//blue
  
  line(599, 0, 599, 600);
  line(1,0,1,600);
  line(0, 1, 600, 1);
  line(0,599, 600, 599);
  
  noStroke();
//원 (Circles)
  fill(255, 0, 0);//red
  circle(30, 30, 50);
  circle(570, 30, 50);
  circle(30, 570, 50);
  circle(570, 570, 50);
//삼각형 (Triangles)
  fill(0, 255, 0);//green
  triangle(117, 63, 117, 117, 63, 117);
  triangle(63, 483, 117, 483, 117, 537);
  triangle(483, 483, 483, 537, 537, 483);
  triangle(483, 63, 483, 117, 537, 117);
  
//사각형 (Quadrilateral)
  fill(128, 0, 128);//purple
  quad(300, 241, 359, 300, 300, 359, 241, 300);
  
  
//정 사각형 (Squares)
  fill(255, 165, 0);//orange
  square(265, 145, 70);    
  square(265, 385, 70);
  square(145, 145, 70);
  square(145, 265, 70);
  square(145, 385, 70);
  square(385, 145, 70);
  square(385, 265, 70);
  square(385, 385, 70);
  
//타원 (Ellipses)
  fill(255, 255, 0);//yellow
  ellipse(420, 240, 40, 50);
  ellipse(420, 360, 40, 50);
  ellipse(360, 180, 50, 40);
  ellipse(240, 180, 50, 40);
  ellipse(180, 240, 40, 50);
  ellipse(180, 360, 40, 50);
  ellipse(240, 420, 50, 40);
  ellipse(360, 420, 50, 40);
  
//점 (Points)
  stroke(0, 0, 255);//blue
  strokeWeight(20);

  point(60, 60);
  point(180, 60);
  point(300, 60);
  point(420, 60);
  point(540, 60);
  
  point(60, 180);
  point(60, 300);
  point(60, 420);
  point(60, 540);
  
  point(180, 540);
  point(300, 540);
  point(420, 540);
  point(540, 540);
  
  point(540, 180);
  point(540, 300);
  point(540, 420);
  
//line (Zigzag lines)
  stroke(255, 255, 0);//yellow
  strokeWeight(5);
  line(60, 60, 120, 0);
  line(120, 0, 180, 60);
  line(180, 60, 240, 0);
  line(240,0, 300, 60);
  line(300, 60, 360, 0);
  line(360, 0, 420, 60);
  line(420, 60, 480, 0);
  line(480, 0, 540, 60);
  line(540, 60, 600, 120);
  
  line(600, 120, 540, 180);
  line(540, 180, 600, 240);
  line(600, 240, 540, 300);
  line(540, 300, 600, 360);
  line(600, 360, 540, 420);
  line(540, 420, 600, 480);
  line(600, 480, 540, 540);
  
  line(540, 540, 480, 600);
  line(480, 600, 420, 540);
  line(420, 540, 360, 600);
  line(360, 600, 300, 540);
  line(300, 540, 240, 600);
  line(240, 600, 180, 540);
  line(180, 540, 120, 600);
  line(120, 600, 60, 540);
  
  line(60, 540, 0, 480);
  line(0, 480, 60, 420);
  line(60, 420, 0, 360);
  line(0, 360, 60, 300);
  line(60, 300, 0, 240);
  line(0, 240, 60, 180);
  line(60, 180, 0, 120);
  line(0, 120, 60, 60);
  
//cirlce (Big circles)
  noFill();
  stroke(255);
  strokeWeight(3);
  circle(300, 300, 230);
  strokeWeight(5);
  circle(600, 0, 300);
  circle(0, 600, 300);
  circle(600, 600, 300);
  circle(0,0, 300);
  
  
  stroke(255, 215, 0);//gold
  strokeWeight(10);
  circle(300, 300, 450);
  strokeWeight(5);
  fill(0);
  rect(90, 285, 50, 30);
  rect(285, 90, 30, 50);
  rect(460, 285, 50, 30);
  rect(285, 460, 30, 50);
}