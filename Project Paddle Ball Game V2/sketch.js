//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var z = 90//prompt("how many balls", 2)
var balls = [];
var l = 0;
var t = 0;
var I = z;
var difficulty="null";
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);
  paddle = new Paddle(300,500);
  easy = new button(100,450,"   easy",2);//55 to y 25 to x
  medium = new button(250,450,"medium",3);
  hard = new button(400,450,"   hard",1);
}

// function keyPressed() {
//   console.log("key pressed");
//   t++;
// }
// function mousePressed() {
//   console.log("mouse pressed");
//   if(MouseX==)
// }
// function MouseUse()
// if(mouseIsPressed&&
//   mouseX>74&&
//   mouseX<126&&
//   mouseY>395&&
//   mouseY<505){
//     difficulty='easy'
//   }

function start(){
  easy.run();
  medium.run();
  hard.run();

  textSize(70);//make text fit
  fill(255,255,255);//make text color
  text("Paddle Ball", 130, 200);//write you win

    if(mouseIsPressed&&mouseX>100&&mouseX<210&&mouseY>395&&mouseY<505){
        difficulty='easy'
        console.log("easy");
      }
    if(mouseIsPressed&&mouseX>250&&mouseX<360&&mouseY>395&&mouseY<505){
      difficulty='medium'
      console.log("medium");
    }
    if(mouseIsPressed&&mouseX>400&&mouseX<510&&mouseY>395&&mouseY<505){
      difficulty='hard'
      console.log("hard");
    }
}

function load(x){
  for(q=0;q<x;q++){
  balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5),q)//make the game ball
  }
}


function draw() {

    if(difficulty=="null"){
      start();
  }

  if(difficulty=="easy"){
    load(10);
  }

    // if(mousePressed){
    //   console.log("mouse pressed");
    // }
  if(difficulty!="null"){
    paddle.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
    }
}
}
