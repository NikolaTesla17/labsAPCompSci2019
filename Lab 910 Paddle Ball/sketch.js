//  Nayan Smuek
// 	8/21/19
//  Project 9/11

var balls = [];
function setup() {
  var ctx = createCanvas(800, 800);
  ctx.position((windowWidth-width)/2, 30);
  background(5, 5, 5,);
  fill(200, 30, 150);
  balls[1] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  paddle1 = new Paddle(20,400);
}

function draw() {
ballsDraw();
}

function ballsDraw(){
balls[1].run();
paddle1.run();
}
