//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var z = prompt("how many balls", 2)
var balls = [];
var l = 0;
var t = 0;
var I = z;
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);
  for(x=0;x<z;x++){
    y=x;
  balls[x] = new Ball(random(width),random(height),random(-5,5),random(-5,5),y)//make the game ball
  }
  paddle = new Paddle(300,500);
  easy = new button(100,450,"   easy",2);
  medium = new button(250,450,"medium",3);
  hard = new button(400,450,"   hard",1);
}

function keyPressed() {
  console.log("key pressed");
  t++;
}

function draw() {
  if(l < 30){
    easy.run();
    medium.run();
    hard.run();
  }
  if(l > 139){
    paddle.run();
    for(var i = 0; i < balls.length; i++){
        balls[i].run();
    }
}
}
