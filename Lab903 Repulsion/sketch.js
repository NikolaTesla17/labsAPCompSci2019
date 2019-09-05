//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var balls = [];
var mainBall;
var x = prompt("Number of Balls","42"); //user entered number of balls page dialog
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  mainBall = new Ball(width, height, 1 , 1 , -1);
  loadBalls(x);
}

function loadBalls(n){
  for(q=0;q<x;q++){
    mainBall = new Ball(400, 400, 50, 50, -1)
    for(var i =0; i < n; i++){
      balls[i] = new Ball(random(800), random(800), random(-3, 3), random(-3, 3), i);
    }
  }
}


function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps
  background(5, 5, 5,20);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function ballsDraw(){
  background(5,5,5,50)//get trails back but just a little bit
  mainBall.run();
  for(i=0;i<x;i++){
balls[i].run();
}
}

