//  Nayan Smuek
// 	8/21/19
//  This is a comment
//  The setup function function is called once when your program begins\

var balls = [];
var n = 10; //change number of balls
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  // ballsInit(n);
  // img = loadImage('cat.png');
  for(q=0;q<n;q++){
    balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  }
}


//  The draw function is called @ 30 fps
function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps

ballsDraw();
}

function ballsDraw(){
  background(5,5,5)//get rid of ball trails
  for(i=0;i<n;i++){
balls[i].run();
}
}
// ballsInit(i)
