//  Nayan Smuek
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  b2 = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  b3 = new Ball(random(width),random(height),random(-5,5),random(-5,5))
}

//  The draw function is called @ 30 fps
function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps
background(5,5,5)//get rid of ball trails
b1.run();
b2.run();
b3.run();
}
