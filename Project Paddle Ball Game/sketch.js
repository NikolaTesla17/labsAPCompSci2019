//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var z = prompt("how many balls", 2)
var balls = [];
var l = 0;
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);
  for(x=0;x<z;x++){
  balls[x] = new Ball(random(width),random(height),random(-5,5),random(-5,5))//make the game ball
  }
  paddle1= new Paddle(300,500);
}



function draw() {
  if(l < 60){
    background(5,5,255);//wipe background make blue
    var w = "Get Ready!";//win string
    textSize(80);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    l++;
    console.log(l);
  }
  if((l > 59)&&(l<120)){
    background(5,5,255);//wipe background make blue
    var w = "Get Set!";//win string
    textSize(80);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    l++;
    console.log(l);
  }
  if((l > 119)&&(l<140)){
    background(5,5,255);//wipe background make blue
    var w = "Go!";//win string
    textSize(80);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    l++;
    console.log(l);
  }

  if(l > 139){
  for(x=0;x<z;x++){//loop to allow for the creation of multiple balls
  balls[x].run();//runs the ball
  }
  paddle1.run();
}
}