//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var balls = [];
var x = prompt("Number of Balls","42"); //user entered number of balls page dialog
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(200);
}

function loadBalls(numBalls){
  for(q=0;q<x;q++){
    balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
    var location = createVector(random(width), random(height));
    var velocity = createVector(random(-3,3), random(-3,3));
    var r = random(20,40);
    var col = color(random(255), random(255), random(255));
    balls.push(new Ball(location, velocity, r, col));
    }
}


function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps
ballsDraw();
}

function ballsDraw(){
  background(5,5,5,50)//get trails back but just a little bit
  for(i=0;i<x;i++){
balls[i].run();
}
}

var location = createVector(width/2, height/2);
var velocity = createVector(0,0);
var r = 55;
var col = color(255, 0, 0);
redBall = new Ball(location, velocity, r, col);
